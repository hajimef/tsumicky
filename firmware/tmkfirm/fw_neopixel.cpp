#include "fw_common.h"
#include "fw_neopixel.h"

#ifdef ARDUINO_ARCH_RP2040
#define MAX_NEOPIXELS 1
#else
#define MAX_NEOPIXELS 5
#endif

Adafruit_NeoPixel *pixels[MAX_NEOPIXELS];

String neopixel_group = "dsp";
String neopixel_subgroup = "np";

int color_orders[] = { NEO_RGB, NEO_GRB, NEO_RBG, NEO_GBR, NEO_BRG, NEO_BGR };

void neopixel_setup(void) {
  for (int i = 0; i < MAX_NEOPIXELS; i++) {
    pixels[i] = NULL;
  }
  addCallback(neopixel_group, neopixel_subgroup, "i", &neopixel_init);
  addCallback(neopixel_group, neopixel_subgroup, "d", &neopixel_dispose);
  addCallback(neopixel_group, neopixel_subgroup, "s", &neopixel_show);
}

void neopixel_init(JSONVar &p) {
#ifdef ARDUINO_ARCH_RP2040
  int no = 0;
#else
  int no = (int) p["no"];
#endif
  int pin = (int) p["p"];
  int num_pixels = (int) p["np"];
  int color_order = color_orders[(int) p["c"]];
#ifdef ARDUINO_ARCH_RP2040
  if (pixels[no] == NULL) {
    pixels[no] = new Adafruit_NeoPixel(num_pixels, pin, color_order);
    pixels[no]->begin();
  }
#else
  if (pixels[no] != NULL) {
    delete pixels[no];
  }
  pixels[no] = new Adafruit_NeoPixel(num_pixels, pin, color_order);
  pixels[no]->begin();
#endif
  pixels[no]->clear();
  for (int i = 0; i < num_pixels; i++) {
    pixels[no]->setPixelColor(i, pixels[no]->Color(0, 0, 0));
  }
  pixels[no]->show();
//  Serial.print("init no = ");
//  Serial.print(no);
//  Serial.print(", pin = ");
//  Serial.print(pin);
//  Serial.print(", np = ");
//  Serial.print(num_pixels);
//  Serial.print(", color = ");
//  Serial.println(color_order);
  r_stat["s"] = (int) NO_RETURN;
}

void neopixel_dispose(JSONVar &p) {
  for (int i = 0; i < MAX_NEOPIXELS; i++) {
    if (pixels[i] != NULL) {
      for (int j = 0; j < pixels[i]->numPixels(); j++) {
        pixels[i]->setPixelColor(j, 0, 0, 0);
      }
      pixels[i]->show();
#ifndef ARDUINO_ARCH_RP2040
      delete pixels[i];
      pixels[i] = NULL;
#endif
    }
  }
  r_stat["s"] = (int) NO_RETURN;
}

void neopixel_show(JSONVar &p) {
  int r, g, b;

#ifdef ARDUINO_ARCH_RP2040
  int no = 0;
#else
  int no = (int) p["no"];
#endif
  String cols = p["c"];
  int num = pixels[no]->numPixels();
  for (int i = 0; i < num; i++) {
    r = strtol(cols.substring(i * 6, i * 6 + 2).c_str(), NULL, 16);
    g = strtol(cols.substring(i * 6 + 2, i * 6 + 4).c_str(), NULL, 16);
    b = strtol(cols.substring(i * 6 + 4, i * 6 + 6).c_str(), NULL, 16);
    pixels[no]->setPixelColor(i, r, g, b);
  }
  pixels[no]->show();
  r_stat["s"] = (int) NO_RETURN;
}
