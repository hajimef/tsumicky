#ifndef __TSUMICKY_FIRMWARE_OLED_H__
#define __TSUMICKY_FIRMWARE_OLED_H__
#include <U8g2lib.h>
#include <SPI.h>

#define TMK_OLED_I2C 0
#define TMK_OLED_SPI 1
#define TMK_OLED_SSD1306_128x64 0
#define TMK_OLED_SSD1306_128x32 1
#define TMK_OLED_SH1106_128x64 2

#define TMK_OLED_FONT_6X10_TF 0
#define TMK_OLED_FONT_7X13_TF 1
#define TMK_OLED_FONT_F10_T_JAPANESE1 1000
#define TMK_OLED_FONT_F12_T_JAPANESE1 1001
#define TMK_OLED_FONT_F16_T_JAPANESE1 1002

void oled_setup(void);
void oled_init(JSONVar &p);
void oled_dispose(JSONVar &p);
void oled_draw_line(JSONVar &p);
void oled_draw_frame(JSONVar &p);
void oled_draw_box(JSONVar &p);
void oled_draw_pixel(JSONVar &p);
void oled_draw_circle(JSONVar &p);
void oled_draw_disc(JSONVar &p);
void oled_set_font(JSONVar &p);
void oled_set_cursor(JSONVar &p);
void oled_print(JSONVar &p);
void oled_send_buffer(JSONVar &p);
void oled_clear_display(JSONVar &p);
void oled_clear_buffer(JSONVar &p);

#endif