#ifndef __TSUMICKY_FIRMWARE_COMMON_H__
#define __TSUMICKY_FIRMWARE_COMMON_H__

#include <map>
#include <functional>
#include <Arduino_JSON.h>

#define NO_RETURN 0
#define USE_RETURN 1
#define ERR_RETURN 2
#define NOT_EXIST 3
#define TYPE_INT 0
#define TYPE_FLOAT 1
#define TYPE_STRING 2
#define TYPE_OBJ 3

extern JSONVar r_stat;

void addCallback(String group, String subgrp, String command, void (*func)(JSONVar& param));
void runCallback(String group, String subgrp, String command, JSONVar& param);
#endif
