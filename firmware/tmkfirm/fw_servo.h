#ifndef __TSUMICKY_FIRMWARE_SERVO_H__
#define __TSUMICKY_FIRMWARE_SERVO_H__
#include <Arduino_JSON.h>

void servo_setup(void);
void servo_attach(JSONVar &p);
void servo_write(JSONVar &p);
#endif