#include "fw_pca9685.h"
#include <Adafruit_PWMServoDriver.h>

const char* pca9685_group = "mot";
const char* pca9685_subgroup = "pca";

Adafruit_PWMServoDriver *driver = NULL;
int min_pulses[16], max_pulses[16];

const int SERVOMIN = 500; 
const int SERVOMAX = 2550; 

void pca9685_init(JSONVar &p) {
  int addr = (int)p["a"];
  if (driver == NULL) {
    driver = new Adafruit_PWMServoDriver(addr);
    driver->begin();
    driver->setPWMFreq(50);
  }
  for (int i = 0; i < 16; i++) {
    min_pulses[i] = SERVOMIN;
    max_pulses[i] = SERVOMAX;
  }
  r_stat["s"] = (int) NO_RETURN;
}

void pca9685_init_i2c(JSONVar &p) {
  int addr = (int)p["a"];
  int sda = (int)p["d"];
  int scl = (int)p["c"];
#if defined(ARDUINO_ARCH_RP2040)
  Wire.setSCL(scl);
  Wire.setSDA(sda);
#elif defined(ESP32)
//  Serial.print("init_i2c sda = ");
//  Serial.print(sda);
//  Serial.print(", scl = ");
//  Serial.println(scl);
  Wire.begin(sda, scl);
#endif
  if (driver == NULL) {
    driver = new Adafruit_PWMServoDriver(addr);
    driver->begin();
    driver->setPWMFreq(50);
  }
  for (int i = 0; i < 16; i++) {
    min_pulses[i] = SERVOMIN;
    max_pulses[i] = SERVOMAX;
  }
  r_stat["s"] = (int) NO_RETURN;
}

void pca9685_dispose(JSONVar &p) {
  if (driver != NULL) {
    delete driver;
    driver = NULL;
  }
//  Serial.println("dispose");
  r_stat["s"] = (int) NO_RETURN;
}

void pca9685_pulse_range(JSONVar &p) {
  if (driver == NULL) {
    r_stat["s"] = (int)ERR_RETURN;
    r_stat["m"] = "PCA9685 not initialized";
    return;
  }
  int ch = (int)p["c"];
  int min_pulse = (int)p["i"];
  int max_pulse = (int)p["x"];
  min_pulses[ch] = min_pulse;
  max_pulses[ch] = max_pulse;
  r_stat["s"] = (int) NO_RETURN;
}

void pca9685_set_servo(JSONVar &p) {
  if (driver == NULL) {
    r_stat["s"] = (int)ERR_RETURN;
    r_stat["m"] = "PCA9685 not initialized";
    return;
  }
  int ch = (int)p["c"];
  int angle = (int)p["a"];
  int pulse = map(angle, 0, 180, min_pulses[ch], max_pulses[ch]);
//  Serial.print("set servo ch = ");
//  Serial.print(ch);
//  Serial.print(", angle = ");
//  Serial.print(angle);
//  Serial.print(", pulse = ");
//  Serial.println(pulse);
  driver->writeMicroseconds(ch, pulse);
  r_stat["s"] = (int) NO_RETURN;
}

void pca9685_setup(void) {
  addCallback(pca9685_group, pca9685_subgroup, "i", &pca9685_init);
  addCallback(pca9685_group, pca9685_subgroup, "p", &pca9685_init_i2c);
  addCallback(pca9685_group, pca9685_subgroup, "r", &pca9685_pulse_range);
  addCallback(pca9685_group, pca9685_subgroup, "s", &pca9685_set_servo);
  addCallback(pca9685_group, pca9685_subgroup, "d", &pca9685_dispose);
}
