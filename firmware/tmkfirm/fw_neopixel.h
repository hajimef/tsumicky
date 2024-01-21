#ifndef __TSUMICKY_FIRMWARE_NEOPIXEL_H__
#define __TSUMICKY_FIRMWARE_NEOPIXEL_H__
#include <Arduino_JSON.h>
#include <Adafruit_NeoPixel.h>

void neopixel_setup(void);
void neopixel_init(JSONVar &p);
void neopixel_dispose(JSONVar &p);
void neopixel_show(JSONVar &p);

#endif