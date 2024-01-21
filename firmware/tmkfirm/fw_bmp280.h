#ifndef __TSUMICKY_FIRMWARE_BMP280_H__
#define __TSUMICKY_FIRMWARE_BMP280_H__
#include <Wire.h>
#include <Adafruit_BMP280.h>


void bmp280_setup(void);
void bmp280_init(JSONVar &p);
void bmp280_dispose(JSONVar &p);
void bmp280_temperature(JSONVar &p);
void bmp280_pressure(JSONVar &p);

#endif