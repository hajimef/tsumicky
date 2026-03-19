#ifndef __TSUMICKY_FIRMWARE_PWM_H__
#define __TSUMICKY_FIRMWARE_PWM_H__
#include <Arduino_JSON.h>

#define ESP32_CORE_V3 1

void pwm_setup(void);
#if defined(ESP32)
#if defined(ESP32_CORE_V3)
void pwm_ledcAttach(JSONVar &p);
void pwm_ledcWrite(JSONVar &p);
#else
void pwm_ledcSetup(JSONVar &p);
void pwm_ledcAttachPin(JSONVar &p);
void pwm_ledcWrite(JSONVar &p);
#endif
#elif defined(ARDUINO_ARCH_RP2040)
void pwm_picoSetup(JSONVar &p);
void pwm_picoWrite(JSONVar &p);
#elif defined(ARDUINO_UNOWIFIR4) || defined(ARDUINO_UNO_Q)
void pwm_unoWrite(JSONVar &p);
#endif

#endif