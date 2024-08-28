#include "fw_common.h"
#include "fw_lcd.h"
#if defined(ARDUINO_ARCH_RP2040)
#include <Wire.h>
#endif

LiquidCrystal_I2C *lcd;

String lcd_group = "dsp";
String lcd_subgroup = "lc";

int adrses[] = { 0x27, 0x3f };
int rows[] = { 2, 4 };
int cols[] = { 16, 20 };

void lcd_setup(void) {
  lcd = NULL;
  addCallback(lcd_group, lcd_subgroup, "i", &lcd_init);
  addCallback(lcd_group, lcd_subgroup, "d", &lcd_dispose);
  addCallback(lcd_group, lcd_subgroup, "c", &lcd_clear);
  addCallback(lcd_group, lcd_subgroup, "s", &lcd_cursor_pos);
  addCallback(lcd_group, lcd_subgroup, "p", &lcd_print);
}

void lcd_init(JSONVar &p) {
  int adrs = (int) p["a"];
  int rc = (int) p["r"];
  int sda = (int) p["d"];
  int scl = (int) p["c"];
/*
  Serial.print("lcd init: adrs = ");
  Serial.print(adrses[adrs]);
  Serial.print(", row = ");
  Serial.print(rows[rc]);
  Serial.print(", col = ");
  Serial.print(cols[rc]);
  Serial.print(", sda = ");
  Serial.print(sda);
  Serial.print(", scl = ");
  Serial.println(scl);
*/
  if (sda != -1) {
#if defined(ARDUINO_ARCH_RP2040)
    Wire.setSDA(sda);
    Wire.setSCL(scl);
#else
    Wire.setPins(sda, scl);
#endif
  }
  lcd = new LiquidCrystal_I2C(adrses[adrs], cols[rc], rows[rc]);
  lcd->init();
  lcd->backlight();
  r_stat["s"] = (int) NO_RETURN;
}

void lcd_dispose(JSONVar &p) {
  lcd->clear();
  delete lcd;
  lcd = NULL;
//  Serial.println("lcd dispose");
  r_stat["s"] = (int) NO_RETURN;
}

void lcd_clear(JSONVar &p) {
  lcd->clear();
//  Serial.println("lcd clear");
  r_stat["s"] = (int) NO_RETURN;
}

void lcd_cursor_pos(JSONVar &p) {
  int x, y;

  x = (int) p["x"];
  y = (int) p["y"];
/*
  Serial.print("lcd cursor_pos: x = ");
  Serial.print(x);
  Serial.print(", y = ");
  Serial.print(y);
*/
  lcd->setCursor(x, y);
  r_stat["s"] = (int) NO_RETURN;
}

void lcd_print(JSONVar &p) {
  const char* str = (const char*) p["t"];
/*
  Serial.print("lcd print: text = ");
  Serial.println(str);
*/
  lcd->print(str);
  r_stat["s"] = (int) NO_RETURN;
}
