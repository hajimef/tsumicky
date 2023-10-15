#ifndef __TSUMICKY_FIRMWARE_PWM_H__
#define __TSUMICKY_FIRMWARE_PWM_H_
#include <Arduino_JSON.h>

void pwm_setup(void);
#if defined(ESP32)
void pwm_ledcSetup(JSONVar &p);
void pwm_ledcAttachPin(JSONVar &p);
void pwm_ledcWrite(JSONVar &p);
#elif defined(ARDUINO_ARCH_RP2040)
void pwm_picoSetup(JSONVar &p);
void pwm_picoWrite(JSONVar &p);
#endif

#endif