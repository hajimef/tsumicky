#include "fw_common.h"
#include "fw_oled.h"
#if defined(ARDUINO_ARCH_RP2040)
#include <Wire.h>
#include <SPI.h>
#endif

U8G2 *u8g2;

String oled_group = "dsp";
String oled_subgroup = "ol";

void oled_setup(void) {
  u8g2 = NULL;
  addCallback(oled_group, oled_subgroup, "i", &oled_init);
  addCallback(oled_group, oled_subgroup, "d", &oled_dispose);
  addCallback(oled_group, oled_subgroup, "dl", &oled_draw_line);
  addCallback(oled_group, oled_subgroup, "df", &oled_draw_frame);
  addCallback(oled_group, oled_subgroup, "db", &oled_draw_box);
  addCallback(oled_group, oled_subgroup, "dp", &oled_draw_pixel);
  addCallback(oled_group, oled_subgroup, "dc", &oled_draw_circle);
  addCallback(oled_group, oled_subgroup, "dd", &oled_draw_disc);
  addCallback(oled_group, oled_subgroup, "sf", &oled_set_font);
  addCallback(oled_group, oled_subgroup, "sc", &oled_set_cursor);
  addCallback(oled_group, oled_subgroup, "pr", &oled_print);
  addCallback(oled_group, oled_subgroup, "sb", &oled_send_buffer);
  addCallback(oled_group, oled_subgroup, "cd", &oled_clear_display);
  addCallback(oled_group, oled_subgroup, "cb", &oled_clear_buffer);
}

void oled_init(JSONVar &p) {
  int con = (int) p["c"];
  int type = (int) p["t"];
  int mosi = (int) p["m"];
  int sck = (int) p["k"];
  int dc = (int) p["d"];
  int cs = (int) p["s"];
  int res = (int) p["r"];
/*
  Serial.print("old_init con = ");
  Serial.print(con);
  Serial.print(", mosi(sda) = ");
  Serial.print(mosi);
  Serial.print(", sck = ");
  Serial.print(sck);
  Serial.print(", dc = ");
  Serial.print(dc);
  Serial.print(", cs = ");
  Serial.print(cs);
  Serial.print(", res = ");
  Serial.println(res);
*/
  if (con == TMK_OLED_I2C) {
    if (type == TMK_OLED_SSD1306_128x64) {
      if (mosi == -1) {
        u8g2 = new U8G2_SSD1306_128X64_NONAME_F_HW_I2C(U8G2_R0, U8X8_PIN_NONE);
      }
      else {
#if defined(ARDUINO_ARCH_RP2040)
        Wire.setSDA(mosi);
        Wire.setSCL(sck);
#endif
        u8g2 = new U8G2_SSD1306_128X64_NONAME_F_HW_I2C(U8G2_R0, U8X8_PIN_NONE, sck, mosi);
      }
    }
    else if (type == TMK_OLED_SSD1306_128x32) {
      if (mosi == -1) {
        u8g2 = new U8G2_SSD1306_128X32_UNIVISION_F_HW_I2C(U8G2_R0, U8X8_PIN_NONE);
      }
      else {
#if defined(ARDUINO_ARCH_RP2040)
        Wire.setSDA(mosi);
        Wire.setSCL(sck);
#endif
        u8g2 = new U8G2_SSD1306_128X32_UNIVISION_F_HW_I2C(U8G2_R0, U8X8_PIN_NONE, sck, mosi);
      }
    }
    else if (type == TMK_OLED_SH1106_128x64) {
      if (mosi == -1) {
        u8g2 = new U8G2_SH1106_128X64_NONAME_F_HW_I2C(U8G2_R0, U8X8_PIN_NONE);
      }
      else {
#if defined(ARDUINO_ARCH_RP2040)
        Wire.setSDA(mosi);
        Wire.setSCL(sck);
#endif
        u8g2 = new U8G2_SH1106_128X64_NONAME_F_HW_I2C(U8G2_R0, U8X8_PIN_NONE, sck, mosi);
      }
    }
  }
  else if (con == TMK_OLED_SPI) {
    if (type == TMK_OLED_SSD1306_128x64) {
      if (mosi == -1) {
        u8g2 = new U8G2_SSD1306_128X64_NONAME_F_4W_HW_SPI(U8G2_R0, cs, dc, res);
      }
      else {
#if defined(ARDUINO_ARCH_RP2040)
        SPI.setTX(mosi);
        SPI.setSCK(sck);
        SPI.begin();
#else
        SPI.begin(sck, -1, mosi, cs);
#endif
        u8g2 = new U8G2_SSD1306_128X64_NONAME_F_4W_HW_SPI(U8G2_R0, cs, dc, res);
      }
    }
    else if (type == TMK_OLED_SSD1306_128x32) {
      if (mosi == -1) {
        u8g2 = new U8G2_SSD1306_128X32_UNIVISION_F_4W_HW_SPI(U8G2_R0, cs, dc, res);
      }
      else {
#if defined(ARDUINO_ARCH_RP2040)
        SPI.setTX(mosi);
        SPI.setSCK(sck);
#else
        SPI.begin(sck, -1, mosi, cs);
#endif
        u8g2 = new U8G2_SSD1306_128X32_UNIVISION_F_4W_HW_SPI(U8G2_R0, cs, dc, res);
      }
    }
    else if (type == TMK_OLED_SH1106_128x64) {
      if (mosi == -1) {
        u8g2 = new U8G2_SH1106_128X64_NONAME_F_4W_HW_SPI(U8G2_R0, cs, dc, res);
      }
      else {
#if defined(ARDUINO_ARCH_RP2040)
        SPI.setTX(mosi);
        SPI.setSCK(sck);
#else
        SPI.begin(sck, -1, mosi, cs);
#endif
        u8g2 = new U8G2_SH1106_128X64_NONAME_F_4W_HW_SPI(U8G2_R0, cs, dc, res);
      }
    }
  }
  u8g2->begin();
  u8g2->enableUTF8Print();
  u8g2->clearBuffer();
  r_stat["s"] = (int) NO_RETURN;
}

void oled_dispose(JSONVar &p) {
  u8g2->clearDisplay();
  delete u8g2;
  u8g2 = NULL;
#if defined(ARDUINO_ARCH_RP2040)
  Wire.end();
#endif
  r_stat["s"] = (int) NO_RETURN;
}

void oled_draw_line(JSONVar &p) {
  int x1 = (int) p["x1"];
  int y1 = (int) p["y1"];
  int x2 = (int) p["x2"];
  int y2 = (int) p["y2"];
  u8g2->drawLine(x1, y1, x2, y2);
  r_stat["s"] = (int) NO_RETURN;
}

void oled_draw_pixel(JSONVar &p) {
  int x = (int) p["x"];
  int y = (int) p["y"];
  u8g2->drawPixel(x, y);
  r_stat["s"] = (int) NO_RETURN;
}

void oled_draw_frame(JSONVar &p) {
  int x = (int) p["x"];
  int y = (int) p["y"];
  int w = (int) p["w"];
  int h = (int) p["h"];
  u8g2->drawFrame(x, y, w, h);
  r_stat["s"] = (int) NO_RETURN;
}

void oled_draw_box(JSONVar &p) {
  int x = (int) p["x"];
  int y = (int) p["y"];
  int w = (int) p["w"];
  int h = (int) p["h"];
  u8g2->drawBox(x, y, w, h);
  r_stat["s"] = (int) NO_RETURN;
}

void oled_draw_circle(JSONVar &p) {
  int x = (int) p["x"];
  int y = (int) p["y"];
  int r = (int) p["r"];
  u8g2->drawCircle(x, y, r);
  r_stat["s"] = (int) NO_RETURN;
}

void oled_draw_disc(JSONVar &p) {
  int x = (int) p["x"];
  int y = (int) p["y"];
  int r = (int) p["r"];
  u8g2->drawDisc(x, y, r);
  r_stat["s"] = (int) NO_RETURN;
}

void oled_set_font(JSONVar &p) {
  int fnt = (int) p["f"];
  switch (fnt) {
    case TMK_OLED_FONT_6X10_TF:
      u8g2->setFont(u8g2_font_6x10_tf);
      break;
    case TMK_OLED_FONT_7X13_TF:
      u8g2->setFont(u8g2_font_7x13_tf);
      break;
    case TMK_OLED_FONT_F10_T_JAPANESE1:
      u8g2->setFont(u8g2_font_f10_t_japanese1);
      break;
    case TMK_OLED_FONT_F12_T_JAPANESE1:
      u8g2->setFont(u8g2_font_f12_t_japanese1);
      break;
    case TMK_OLED_FONT_F16_T_JAPANESE1:
      u8g2->setFont(u8g2_font_f16_t_japanese1);
      break;
  }
  r_stat["s"] = (int) NO_RETURN;
}

void oled_set_cursor(JSONVar &p) {
  int x = (int) p["x"];
  int y = (int) p["y"] + u8g2->getMaxCharHeight();
  u8g2->setCursor(x, y);
  r_stat["s"] = (int) NO_RETURN;
}

void oled_print(JSONVar &p) {
  const char* str = (const char*) p["s"];
  u8g2->print(str);
  r_stat["s"] = (int) NO_RETURN;
}

void oled_send_buffer(JSONVar &p) {
  int i;
  JSONVar pp, pa;
  pa = p["p"];
  int l = pa.length();

  //Serial.println("send buffer");
  //Serial.println(pa);
  for (i = 0; i < l; i++) {
    pp = pa[i]["p"];
    //Serial.print("command = ");
    //Serial.print((const char*) pa[i]["c"]);
    //Serial.print(", param = ");
    //Serial.println(pp);
    runCallback(oled_group, oled_subgroup, (const char*) pa[i]["c"], pp);
  }
  u8g2->sendBuffer();
  r_stat["s"] = (int) NO_RETURN;
}

void oled_clear_display(JSONVar &p) {
  u8g2->clearDisplay();
  r_stat["s"] = (int) NO_RETURN;
}

void oled_clear_buffer(JSONVar &p) {
  u8g2->clearBuffer();
  r_stat["s"] = (int) NO_RETURN;
}
