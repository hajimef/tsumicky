#include "fw_common.h"
#include "pwm.h"

#define MAX_CH 16
#define MAX_PIN 48
#define DEF_FREQ 10000
#if defined(CONFIG_IDF_TARGET_ESP32S3) || defined(CONFIG_IDF_TARGET_ESP32C3) || defined(CONFIG_IDF_TARGET_ESP32C6)
#define DEF_BIT 10
#define DEF_RES 1023
#else
#define DEF_BIT 12
#define DEF_RES 4095
#endif

#if defined(ESP32)
#if defined(ESP32_CORE_V3)
String pwm_group = "pwm_e32n";
long maxRes[MAX_PIN];
#else
String pwm_group = "pwm_e32";
long maxRes[MAX_CH];
#endif
#elif defined(ARDUINO_ARCH_RP2040)
String pwm_group = "pwm_rpip";
long maxRes;
#endif

void pwm_setup(void) {
#if defined(ESP32)
#if defined(ESP32_CORE_V3)
  addCallback(pwm_group, "", "a", &pwm_ledcAttach);
  addCallback(pwm_group, "", "w", &pwm_ledcWrite);
  for (int pin = 0; pin < MAX_PIN; pin++) {
    maxRes[pin] = DEF_RES;
  }
#else
  addCallback(pwm_group, "", "s", &pwm_ledcSetup);
  addCallback(pwm_group, "", "a", &pwm_ledcAttachPin);
  addCallback(pwm_group, "", "w", &pwm_ledcWrite);
  for (int ch = 0; ch < MAX_CH; ch++) {
    maxRes[ch] = DEF_RES;
    ledcSetup(ch, DEF_FREQ, DEF_BIT);
  }
#endif
#elif defined(ARDUINO_ARCH_RP2040)
  addCallback(pwm_group, "", "s", &pwm_picoSetup);
  addCallback(pwm_group, "", "w", &pwm_picoWrite);
  analogWriteFreq(DEF_FREQ);
  analogWriteResolution(DEF_BIT);
  maxRes = DEF_RES;
#endif
}

#if defined(ESP32)
#if defined(ESP32_CORE_V3)
void pwm_ledcAttach(JSONVar &p) {
  int pin, bit;
  long freq;

  pin = (int) p["p"];
  freq = (long) p["f"];
  bit = (int) p["b"];
  maxRes[pin] = (long) ((1 << bit) - 1);
  ledcAttach(pin, freq, bit);
  r_stat["s"] = (int) NO_RETURN;
}

void pwm_ledcWrite(JSONVar &p) {
  int pin, duty;
  double duty_d;

  pin = (int) p["p"];
  duty_d = (double) p["d"];
  duty = (int) (maxRes[pin] * duty_d / 100);
  Serial.print("pin = ");
  Serial.print(pin);
  Serial.print(", duty_d = ");
  Serial.print(duty_d);
  Serial.print(", duty = ");
  Serial.println(duty);
  ledcWrite(pin, duty);
  r_stat["s"] = (int) NO_RETURN;
}
#else
void pwm_ledcSetup(JSONVar &p) {
  int ch, freq, bit;

  ch = (int) p["c"];
  freq = (long) p["f"];
  bit = (int) p["b"];
  maxRes[ch] = (long) ((1 << bit) - 1);
  ledcSetup(ch, freq, bit);
  r_stat["s"] = (int) NO_RETURN;
}

void pwm_ledcAttachPin(JSONVar &p) {
  int ch, pin;

  ch = (int) p["c"];
  pin = (int) p["p"];
  ledcAttachPin(pin, ch);
  r_stat["s"] = (int) NO_RETURN;
}

void pwm_ledcWrite(JSONVar &p) {
  int ch, duty;
  double duty_d;

  ch = (int) p["c"];
  duty_d = (double) p["d"];
  duty = (int) (maxRes[ch] * duty_d / 100);
  ledcWrite(ch, duty);
  r_stat["s"] = (int) NO_RETURN;
}
#endif
#endif

#if defined(ARDUINO_ARCH_RP2040)
void pwm_picoSetup(JSONVar &p) {
  int freq;

  freq = (long) p["f"];
  analogWriteFreq(freq);
  r_stat["s"] = (int) NO_RETURN;
}

void pwm_picoWrite(JSONVar &p) {
  int pin, duty;
  double duty_d;

  pin = (int) p["p"];
  duty_d = (double) p["d"];
  duty = (int) (maxRes * duty_d / 100);
  analogWrite(pin, duty);
  r_stat["s"] = (int) NO_RETURN;
}
#endif
