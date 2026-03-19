#ifndef __TSUMICKY_FIRMWARE_COMMON_H__
#define __TSUMICKY_FIRMWARE_COMMON_H__

#include <map>
#include <functional>
#include <Arduino_JSON.h>
#ifndef ARDUINO_UNO_Q
#ifdef ARDUINO_UNOWIFIR4
#include <UnoR4WiFi_WebServer.h>
#else
#include <WebSocketsServer.h>
#endif
#endif

#define NO_RETURN 0
#define USE_RETURN 1
#define ERR_RETURN 2
#define NOT_EXIST 3
#define TYPE_INT 0
#define TYPE_FLOAT 1
#define TYPE_STRING 2
#define TYPE_OBJ 3

extern JSONVar r_stat;
#ifndef ARDUINO_UNO_Q
#ifdef ARDUINO_UNOWIFIR4
extern UnoR4WiFi_WebSocket* ws;
#else
extern WebSocketsServer ws;
#endif
extern uint8_t ws_num;
#endif

void addCallback(String group, String subgrp, String command, void (*func)(JSONVar& param));
void runCallback(String group, String subgrp, String command, JSONVar& param);
void sendWebSocket(String group, String subgrp, String command, JSONVar &param);
void sendWebSocket(String group, String subgrp, String command, int param);
void sendWebSocketSub(String group, String subgrp, String command, JSONVar &param);
#endif
