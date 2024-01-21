#include "fw_common.h"
#include "fw_bmp280.h"

Adafruit_BMP280 *bmp280;

String bmp280_group = "sen";
String bmp280_subgroup = "bmp2";

void bmp280_setup(void) {
  bmp280 = NULL;
  addCallback(bmp280_group, bmp280_subgroup, "i", &bmp280_init);
  addCallback(bmp280_group, bmp280_subgroup, "d", &bmp280_dispose);
  addCallback(bmp280_group, bmp280_subgroup, "t", &bmp280_temperature);
  addCallback(bmp280_group, bmp280_subgroup, "p", &bmp280_pressure);
}

void bmp280_init(JSONVar &p) {
  unsigned status;
  int pin = (int) p["p"];
  int i2c_adrs = (int) p["i"];
  int sda = (int) p["d"];
  int scl = (int) p["c"];
  Serial.print("init bmp280 i2c adddress = ");
  Serial.print(i2c_adrs);
  Serial.print(", sda = ");
  Serial.print(sda);
  Serial.print(", scl = ");
  Serial.println(scl);
  if (sda != -1) {
#if defined(ARDUINO_ARCH_RP2040)
    Wire.setSDA(sda);
    Wire.setSCL(scl);
#else
    Wire.setPins(sda, scl);
#endif
  }
  bmp280 = new Adafruit_BMP280(&Wire);
  status = bmp280->begin(i2c_adrs);
  if (!status) {
    r_stat["s"] = (int) ERR_RETURN;
    r_stat["m"] = "Error on initialize BMP280";
  }
  else {
    r_stat["s"] = (int) NO_RETURN;
  }
}

void bmp280_dispose(JSONVar &p) {
  delete bmp280;
  bmp280 = NULL;
  r_stat["s"] = (int) NO_RETURN;
}

void bmp280_temperature(JSONVar &p) {
  float t = bmp280->readTemperature();
  r_stat["s"] = (int) USE_RETURN;
  r_stat["t"] = (int) TYPE_FLOAT;
  r_stat["v"] = (double) t;
}

void bmp280_pressure(JSONVar &p) {
  float pr = bmp280->readPressure() / 100;
  r_stat["s"] = (int) USE_RETURN;
  r_stat["t"] = (int) TYPE_FLOAT;
  r_stat["v"] = (double) pr;
}
