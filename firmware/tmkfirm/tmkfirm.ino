#include <WiFi.h>
#include <WiFiMulti.h>
#include <WebSocketsServer.h>
#include <map>
#include <Arduino_JSON.h>
#if defined(ESP32)
#include <ESPmDNS.h>
#elif defined(ARDUINO_ARCH_RP2040)
#include <LEAmDNS.h>
#endif
#include "fw_common.h"
#include "basic_io.h" 
#include "pwm.h"
#include "fw_servo.h"
#ifdef ENABLE_CUSTOM_BLOCK
#include "custom_block.h"
#endif
#include "option_blocks.h"

const char* ssid = "your_ssid";
const char* pass = "your_pass";
const char* host = "wsserver";
const int port = 8000;

WiFiMulti WiFiMulti;
WebSocketsServer ws = WebSocketsServer(port);
uint8_t ws_num;

void wsEvent(uint8_t num, WStype_t type, uint8_t * payload, size_t length) {
  JSONVar msg, param;
  String grp, subgrp, com;
  int id;

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
      JSONVar r_value;
      int stat, type;
      String j_str;
      //Serial.printf("[%u] get Text: %s\n", num, payload);
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
              ws.sendTXT(num, j_str);
            }
          }
        }
      }
      break;
  }
}

void setup() {
    Serial.begin(115200);

#if defined(ARDUINO_ARCH_RP2040)
    analogReadResolution(12);
#endif
    WiFiMulti.addAP(ssid, pass);
    while(WiFiMulti.run() != WL_CONNECTED) {
        delay(100);
        Serial.print(".");
    }
    Serial.println();
    Serial.println("");
    Serial.println("WiFi connected");
    Serial.println("IP address: ");
    Serial.println(WiFi.localIP());
    if (MDNS.begin(host)) {
        Serial.print("MDNS responder started : ");
        Serial.print(host);
        Serial.println(".local");
    }
    basic_io_setup();
    pwm_setup();
    servo_setup();
    option_blocks_setup();
#ifdef ENABLE_CUSTOM_BLOCK
    custom_block_setup();
#endif
    ws.begin();
    ws.onEvent(wsEvent);
}

void loop() {
#if defined(ARDUINO_ARCH_RP2040)
    MDNS.update();
#endif
    ws.loop();
    option_blocks_loop();
#ifdef ENABLE_CUSTOM_BLOCK
    custom_block_loop();
#endif
    delay(1);
}
