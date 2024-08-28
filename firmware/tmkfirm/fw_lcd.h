#ifndef __TSUMICKY_FIRMWARE_LCD_H__
#define __TSUMICKY_FIRMWARE_LCD_H__
#include <Arduino_JSON.h>
#include <LiquidCrystal_I2C.h>

void lcd_setup(void);
void lcd_init(JSONVar &p);
void lcd_dispose(JSONVar &p);
void lcd_clear(JSONVar &p);
void lcd_cursor_pos(JSONVar &p);
void lcd_print(JSONVar &p);

#endif