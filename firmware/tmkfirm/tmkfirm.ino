#ifdef ARDUINO_UNO_Q
#include "Arduino_RouterBridge.h"
#else // else ARDUINO_UNO_Q
#ifdef ARDUINO_UNOWIFIR4
#include <UnoR4WiFi_WebServer.h>
#else // else ARDUINO_UNOWIFIR4
#include <WiFi.h>
#include <WiFiMulti.h>
#include <WebSocketsServer.h>
#endif // end ARDUINO_UNOWIFIR4
#endif // end ARDUINO_UNO_Q

#include <map>
#include <Arduino_JSON.h>

#ifndef ARDUINO_UNO_Q
#ifdef ARDUINO_UNOWIFIR4
#include <WiFiUdp.h>
#include <ArduinoMDNS.h>
#else
#if defined(ESP32)
#include <ESPmDNS.h>
#elif defined(ARDUINO_ARCH_RP2040)
#include <LEAmDNS.h>
#endif // end ESP32
#endif // end ARDUINO_UNOWIFIR4
#endif // end ARDUINO_UNO_Q

#include "fw_common.h"
#include "basic_io.h" 
#include "pwm.h"
#include "fw_servo.h"

#ifdef ENABLE_CUSTOM_BLOCK
#include "custom_block.h"
#endif // end ENABLE_CUSTOM_BLOCK
#include "option_blocks.h"

const char* ssid = "your_ssid";
const char* pass = "your_pass";
const char* host = "wsserver";
const int port = 8000;

#ifdef ARDUINO_UNO_Q
#define SERIAL_BAUD 115200
#else // else ARDUINO_UNO_Q
#ifdef ARDUINO_UNOWIFIR4
UnoR4WiFi_WebServer server;
UnoR4WiFi_WebSocket* ws;
WiFiUDP udp;
MDNS mdns(udp);

void handleHome(WiFiClient& client, const String& method, const String& request, const QueryParams& params, const String& jsonData) {
  server.sendResponse(client, "OK");
}

void onWebSocketOpen(net::WebSocket& ws) {
  Serial.println("New WebSocket connection");
}

void onWebSocketClose(net::WebSocket& ws, const net::WebSocket::CloseCode code, const char* reason, uint16_t length) {
  Serial.println("WebSocket client disconnected");
}

void onWebSocketMessage(net::WebSocket& ws, const net::WebSocket::DataType dataType, const char* message, uint16_t length) {
  //Serial.print("message = ");
  //Serial.println(message);
  processMsg((uint8_t *) message);
}

#else // else ARDUINO_UNOWIFIR4
WiFiMulti WiFiMulti;
WebSocketsServer ws = WebSocketsServer(port);
uint8_t ws_num;

void wsEvent(uint8_t num, WStype_t type, uint8_t * payload, size_t length) {
  switch(type) {
    case WStype_CONNECTED:
      {
          ws_num = num;
          IPAddress ip = ws.remoteIP(num);
          Serial.printf("[%u] Connected from %d.%d.%d.%d url: %s\n", num, ip[0], ip[1], ip[2], ip[3], payload);
      }
      break;
    case WStype_DISCONNECTED:
      //Serial.printf("[%u] Disconnected!\n", num);
      break;
    case WStype_TEXT:
      processMsg(num, payload);
      break;
  }
}
#endif // ARDUINO_UNOWIFIR4
#endif // ARDUINO_UNO_Q

#if defined(ARDUINO_UNOWIFIR4)
void processMsg(uint8_t * payload) {
#elif defined(ARDUINO_UNO_Q)
String processMsg(uint8_t * payload) {
#else
void processMsg(uint8_t num, uint8_t * payload) {
#endif
  JSONVar msg, param;
  String grp, subgrp, com;
  int id;
  JSONVar r_value;
  int stat, type;
  String j_str;
#if defined(ARDUINO_UNO_Q)
  //Serial.print("get text ");
  //Serial.println((char*) payload);
#else
  //Serial.printf("[%u] get Text: %s\n", num, payload);
#endif
  msg = JSON.parse((char*) payload);
  if (msg.hasOwnProperty("g")) {
    grp = (const char*) msg["g"];
    subgrp = "";
    if (msg.hasOwnProperty("sg")) {
      subgrp = (const char*) msg["sg"];
      if (msg.hasOwnProperty("c")) {
        com = (const char*) msg["c"];
        if (msg.hasOwnProperty("p")) {
          param = (JSONVar) msg["p"];
          id = (int) msg["i"];
          //Serial.print("start");
          //Serial.print("group = ");
          //Serial.print(grp);
          //Serial.print("subgroup = ");
          //Serial.print(subgrp);
          //Serial.print("command = ");
          //Serial.println(com);
          runCallback(grp, subgrp, com, param);
          //Serial.println(" - end");
          stat = (int) r_stat["s"];
          type = (int) r_stat["t"];
          //Serial.print("stat : ");
          //Serial.println(JSON.stringify(r_stat));
          r_value["g"] = grp;
          r_value["sg"] = subgrp;
          r_value["c"] = com;
          r_value["i"] = id;
          if (stat == NOT_EXIST) {
            r_value["ne"] = 1;
          }
          else if (stat == ERR_RETURN) {
            r_value["e"] = 1;
            r_value["msg"] = (const char*) r_stat["m"];
          }
          else if (stat == NO_RETURN) {
            r_value["v"] = 1;                      
          }
          else if (stat == USE_RETURN) {
            switch (type) {
              case TYPE_INT:
                r_value["v"] = (int) r_stat["v"];
                break;
              case TYPE_FLOAT:
                r_value["v"] = (double) r_stat["v"];
                break;
              case TYPE_STRING:
                r_value["v"] = (const char*) r_stat["v"];
                break;
            }
            //Serial.print(", return : ");
            //Serial.println(j_str);
          }
          j_str = JSON.stringify(r_value);
          //Serial.println(j_str);
#if defined(ARDUINO_UNO_Q)
          return j_str;
#elif defined(ARDUINO_UNOWIFIR4)
          ws->broadcastTXT(j_str);
#else // else ARDUINO_UNOWIFIR4
          ws.sendTXT(num, j_str);
#endif // end ARDUINO_UNO_Q
        }
      }
    }
  }

#if defined(ARDUINO_UNO_Q)
  //Serial.println("no func");
  return "{\"ne\":1}";
#endif
}

#if defined(ARDUINO_UNO_Q)
String processMsg_p(String json) {
  uint8_t* msg = (uint8_t*) json.c_str();
  return processMsg(msg);
}
#endif // ARDUINO_UNO_Q

void setup() {
    Serial.begin(115200);
    Serial.println("Tsumicky firmware setup started");
#if defined(ARDUINO_UNO_Q) || defined(ARDUINO_ARCH_RP2040)
    analogReadResolution(12);
#endif

#ifdef ARDUINO_UNO_Q
    Bridge.begin(SERIAL_BAUD);
    Bridge.provide("pm", processMsg_p);
#else // else ARDUINO_UNO_Q
#ifdef ARDUINO_UNOWIFIR4
    String ip_adrs;
    WiFi.begin(ssid, pass);
    while (WiFi.status() != WL_CONNECTED) {
        delay(500);
        Serial.print(".");
    }
    while ((ip_adrs = WiFi.localIP().toString()) == "0.0.0.0") {
        delay(500);
    }
#else // else ARDUINO_UNOWIFIR4
    WiFiMulti.addAP(ssid, pass);
    while(WiFiMulti.run() != WL_CONNECTED) {
        delay(100);
        Serial.print(".");
    }
#endif // end ARDUINO_UNOWIFIR4
    Serial.println();
    Serial.println("");
    Serial.println("WiFi connected");
    Serial.println("IP address: ");
    Serial.println(WiFi.localIP());

#ifdef ARDUINO_UNOWIFIR4
    mdns.begin(WiFi.localIP(), host);
    mdns.addServiceRecord("Arduino mDNS Webserver Example._http",
                          port,
                          MDNSServiceTCP);
#else
    if (MDNS.begin(host)) {
        Serial.print("MDNS responder started : ");
        Serial.print(host);
        Serial.println(".local");
    }
#endif // end ARDUINO_UNOWIFIR4
#endif // end ARDUINO_UNO_Q

    basic_io_setup();
    pwm_setup();
    servo_setup();
    option_blocks_setup();

#ifdef ENABLE_CUSTOM_BLOCK
    custom_block_setup();
#endif

#if !defined(ARDUINO_UNO_Q)
#ifdef ARDUINO_UNOWIFIR4
    server.addRoute("/", handleHome);
//    server.begin(ssid, pass);
    ws = server.enableWebSocket(port);
    if (ws != nullptr) {
        ws->onOpen(onWebSocketOpen);
        ws->onMessage(onWebSocketMessage);
        ws->onClose(onWebSocketClose);
        Serial.print("WebSocket server started on port ");
        Serial.println(port);
    } else {
        Serial.println("Failed to start WebSocket server");
    }
#else // else ARDUINO_UNOWIFIR4
    ws.begin();
    ws.onEvent(wsEvent);
#endif // end ARDUINO_UNOWIFIR4
#endif // end ARDUINO_UNO_Q
    Serial.println("Tsumicky firmware initialized");
#ifdef ARDUINO_UNO_Q
    pinMode(LED3_R, OUTPUT);
    pinMode(LED3_G, OUTPUT);
    pinMode(LED3_B, OUTPUT);
    pinMode(LED4_R, OUTPUT);
    pinMode(LED4_G, OUTPUT);
    pinMode(LED4_B, OUTPUT);
    digitalWrite(LED4_R, HIGH);
    digitalWrite(LED4_G, HIGH);
    digitalWrite(LED4_B, HIGH);
    digitalWrite(LED3_R, LOW);
    digitalWrite(LED3_G, HIGH);
    digitalWrite(LED3_B, HIGH);
    delay(200);
    digitalWrite(LED3_R, HIGH);
    digitalWrite(LED3_G, LOW);
    digitalWrite(LED3_B, HIGH);
    delay(200);
    digitalWrite(LED3_R, HIGH);
    digitalWrite(LED3_G, HIGH);
    digitalWrite(LED3_B, LOW);
    delay(200);
    digitalWrite(LED3_R, HIGH);
    digitalWrite(LED3_G, HIGH);
    digitalWrite(LED3_B, HIGH);
#endif
}

void loop() {
#if !defined(ARDUINO_UNO_Q)
#ifdef ARDUINO_UNOWIFIR4
    mdns.run();
    server.handleClient();
    server.handleWebSocket();
#else // else ARDUINO_UNOWIFIR4
#if defined(ARDUINO_ARCH_RP2040)
    MDNS.update();
#endif // ARDUINO_ARCH_RP2040
    ws.loop();
#endif // ARDUINO_UNOWIFIR4
#endif // ARDUINO_UNO_Q
    option_blocks_loop();
#ifdef ENABLE_CUSTOM_BLOCK
    custom_block_loop();
#endif

#if !defined(ARDUINO_UNO_Q)
#ifdef ARDUINO_UNOWIFIR4
    delay(10);
#else // else ARDUINO_UNOWIFIR4
    delay(1);
#endif // end ARDUINO_UNOWIFIR4
#endif
}
