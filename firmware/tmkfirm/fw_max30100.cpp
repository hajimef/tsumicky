#include "fw_common.h"
#include "fw_max30100.h"
#include <Wire.h>

static const char* group = "sen";
static const char* subgroup = "max30100";

#define REPORTING_PERIOD_MS 1000

static PulseOximeter* pOximeter = NULL;
static uint32_t tsLastReport = 0;
static float hr = 0;
static uint8_t spo2 = 0;

void max30100_init(JSONVar &p) {
  if (pOximeter != NULL) {
    delete pOximeter;
  }
  pOximeter = new PulseOximeter();
  if (!pOximeter->begin()) {
    delete pOximeter;
    pOximeter = NULL;
    r_stat["s"] = (int)ERR_RETURN;
    r_stat["m"] = "MAX30100 init failed";
    return;
  }
  pOximeter->setOnBeatDetectedCallback(max30100_onbeat_callback);
  r_stat["s"] = (int) NO_RETURN;
}

void max30100_init_wire(JSONVar &p) {
  uint8_t sda = (int)p["s"];
  uint8_t scl = (int)p["c"];
#if defined(ARDUINO_ARCH_RP2040)
  Wire.setSDA(sda);
  Wire.setSCL(scl);
#else
  //Serial.print("init_wire sda = ");
  //Serial.print(sda);
  //Serial.print(", scl = ");
  //Serial.println(scl);
  Wire.setPins(sda, scl);
#endif
  if (pOximeter != NULL) {
    delete pOximeter;
  }
  delay(50);
  pOximeter = new PulseOximeter();
  if (!pOximeter->begin()) {
    delete pOximeter;
    pOximeter = NULL;
    r_stat["s"] = (int)ERR_RETURN;
    r_stat["m"] = "MAX30100 init failed";
    return;
  }
  pOximeter->setOnBeatDetectedCallback(max30100_onbeat_callback);
  r_stat["s"] = (int) NO_RETURN;
}

void max30100_dispose(JSONVar &p) {
  if (pOximeter != NULL) {
    pOximeter->shutdown();
    delete pOximeter;
  }
  pOximeter = NULL;
  r_stat["s"] = (int) NO_RETURN;
}

void max30100_read_heartrate(JSONVar &p) {
  if (pOximeter == NULL) {
    r_stat["s"] = (int)ERR_RETURN;
    r_stat["m"] = "MAX30100 not initialized";
    return;
  }
  r_stat["s"] = (int) USE_RETURN;
  r_stat["t"] = (int) TYPE_FLOAT;
  r_stat["v"] = (float) hr;
}

void max30100_read_spo2(JSONVar &p) {
  if (pOximeter == NULL) {
    r_stat["s"] = (int) ERR_RETURN;
    r_stat["m"] = "MAX30100 not initialized";
    return;
  }
  r_stat["s"] = (int) USE_RETURN;
  r_stat["t"] = (int) TYPE_FLOAT;
  r_stat["v"] = (int) spo2;
}

void max30100_onbeat_callback(void) {
  sendWebSocket(group, subgroup, "c", NULL);
}

void max30100_setup() {
  addCallback(group, subgroup, "i", &max30100_init);
  addCallback(group, subgroup, "iw", &max30100_init_wire);
  addCallback(group, subgroup, "d", &max30100_dispose);
  addCallback(group, subgroup, "rh", &max30100_read_heartrate);
  addCallback(group, subgroup, "rs", &max30100_read_spo2);
}

void max30100_loop() {
  if (pOximeter != NULL) {
    pOximeter->update();
    if (millis() - tsLastReport > REPORTING_PERIOD_MS) {
      hr = pOximeter->getHeartRate();
      spo2 = pOximeter->getSpO2();
    }
  }
}