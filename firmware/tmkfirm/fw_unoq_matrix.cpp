#include "option_blocks.h"
#ifdef BLOCKS_UNOQ_MATRIX
#include "fw_common.h"
#include "fw_unoq_matrix.h"
#include <ArduinoGraphics.h>
#include <Arduino_LED_Matrix.h>

const char unoq_matrix_group[] = "dsp";
const char unoq_matrix_subgroup[] = "uq";

ArduinoLEDMatrix matrix;

/*
const uint32_t* frames[] = {
  LEDMATRIX_BLUETOOTH,
  LEDMATRIX_BOOTLOADER_ON,
  LEDMATRIX_CHIP,
  LEDMATRIX_CLOUD_WIFI,
  LEDMATRIX_DANGER,
  LEDMATRIX_EMOJI_BASIC,
  LEDMATRIX_EMOJI_HAPPY,
  LEDMATRIX_EMOJI_SAD,
  LEDMATRIX_HEART_BIG,
  LEDMATRIX_HEART_SMALL,
  LEDMATRIX_LIKE,
  LEDMATRIX_MUSIC_NOTE,
  LEDMATRIX_RESISTOR,
  LEDMATRIX_UNO
};
*/
const int dirs[] = { SCROLL_LEFT, SCROLL_RIGHT, NO_SCROLL };

void unoq_matrix_setup() {
  addCallback(unoq_matrix_group, unoq_matrix_subgroup, "d", &unoq_matrix_dispose);
//  addCallback(unoq_matrix_group, unoq_matrix_subgroup, "f", &unoq_matrix_show_frame);
  addCallback(unoq_matrix_group, unoq_matrix_subgroup, "b", &unoq_matrix_show_bitmap);
  addCallback(unoq_matrix_group, unoq_matrix_subgroup, "g", &unoq_matrix_show_grayscale_bitmap);
//  addCallback(unoq_matrix_group, unoq_matrix_subgroup, "a", &unoq_matrix_show_animation);
  addCallback(unoq_matrix_group, unoq_matrix_subgroup, "s", &unoq_matrix_scroll_text);
  addCallback(unoq_matrix_group, unoq_matrix_subgroup, "c", &unoq_matrix_clear);
  addCallback(unoq_matrix_group, unoq_matrix_subgroup, "r", &unoq_rgb_led);
  matrix.begin();
  digitalWrite(LED3_R, HIGH);
  digitalWrite(LED3_G, HIGH);
  digitalWrite(LED3_B, HIGH);
  digitalWrite(LED4_R, HIGH);
  digitalWrite(LED4_G, HIGH);
  digitalWrite(LED4_B, HIGH);
}

// dispose
void unoq_matrix_dispose(JSONVar &p) {
  matrix.clear();
  digitalWrite(LED3_R, HIGH);
  digitalWrite(LED3_G, HIGH);
  digitalWrite(LED3_B, HIGH);
  digitalWrite(LED4_R, HIGH);
  digitalWrite(LED4_G, HIGH);
  digitalWrite(LED4_B, HIGH);
//  Serial.println("matrix dispose");
}

/*
// show frame
void unoq_matrix_show_frame(JSONVar &p) {
  const int frame_id = (int)p["f"];
  matrix.loadFrame(frames[frame_id]);
  Serial.print("matrix show_frame id = ");
  Serial.println(frame_id);
  r_stat["s"] = (int)NO_RETURN;
}
*/

// show bitmap
void unoq_matrix_show_bitmap(JSONVar &p) {
  uint8_t bitmap[104];
  int ptr = 0;
  uint32_t mask = 0x80000000u;
  uint32_t data = (uint32_t)p["b"][0];
  for (int i = 0; i < 104; i++) {
    bitmap[i] = ((data & mask) == 0) ? 0 : 1;
    /*
    Serial.print("data = ");
    Serial.print(data, HEX);
    Serial.print(", i = ");
    Serial.print(i);
    Serial.print(", mask = ");
    Serial.print(mask, HEX);
    Serial.print(", data & mask = ");
    Serial.print(data & mask);
    Serial.print(", (data & mask) == 0 = ");
    Serial.print((data & mask) == 0);
    Serial.print(", bitmap = ");
    Serial.println(bitmap[i]);
    */
    mask = mask >> 1;
    if (mask == 0) {
      ptr++;
      data = (uint32_t)p["b"][ptr];
      mask = 0x80000000u;
    }
  }
/*
  Serial.print("matrix show_bitmap");
  Serial.print(frame[0], HEX);
  Serial.print(" ");
  Serial.print(frame[1], HEX);
  Serial.print(" ");
  Serial.print(frame[2], HEX);
  Serial.print(" ");
  Serial.println(frame[3], HEX);
*/
  matrix.setGrayscaleBits(1);
  matrix.draw(bitmap);
  r_stat["s"] = (int)NO_RETURN;
}

// show bitmap
void unoq_matrix_show_grayscale_bitmap(JSONVar &p) {
  uint8_t bitmap[104];
  int ctr = 0;
  int ptr = 0;
  int sft = 27;
  uint32_t mask = 0x38000000u;
  uint32_t data;
  for (int i = 0; i < 104; i++) {
    data = (uint32_t)p["b"][ptr];
    bitmap[i] = ((data & mask) >> sft) & 7;
/*
    Serial.print("data = ");
    Serial.print(data, HEX);
    Serial.print(", i = ");
    Serial.print(i);
    Serial.print(", mask = ");
    Serial.print(mask, HEX);
    Serial.print(", data & mask >> sft= ");
    Serial.print(((data & mask) >> sft) & 7);
    Serial.print(", bitmap = ");
    Serial.println(bitmap[i]);
*/ 
    sft -= 3;
    mask = mask >> 3;
    ctr++;
    if (ctr == 10) {
      ctr = 0;
      ptr++;
      mask = 0x38000000u;
      sft = 27;
    }
  }
/*
  Serial.print("matrix show_bitmap");
  Serial.print(frame[0], HEX);
  Serial.print(" ");
  Serial.print(frame[1], HEX);
  Serial.print(" ");
  Serial.print(frame[2], HEX);
  Serial.print(" ");
  Serial.println(frame[3], HEX);
*/
  matrix.setGrayscaleBits(3);
  matrix.draw(bitmap);
  r_stat["s"] = (int)NO_RETURN;
}

/*
// show animation
void unoq_matrix_show_animation(JSONVar &p) {
  const int anime_id = (int)p["a"];
  if (anime_id == 0) {
    matrix.loadSequence(LEDMATRIX_ANIMATION_STARTUP);
  }
  else if (anime_id == 1) {
    matrix.loadSequence(LEDMATRIX_ANIMATION_TETRIS_INTRO);
  }
  else if (anime_id == 2) {
    matrix.loadSequence(LEDMATRIX_ANIMATION_ATMEGA);
  }
  else if (anime_id == 3) {
    matrix.loadSequence(LEDMATRIX_ANIMATION_LED_BLINK_HORIZONTAL);
  }
  else if (anime_id == 4) {
    matrix.loadSequence(LEDMATRIX_ANIMATION_LED_BLINK_VERTICAL);
  }
  else if (anime_id == 5) {
    matrix.loadSequence(LEDMATRIX_ANIMATION_ARROWS_COMPASS);
  }
  else if (anime_id == 6) {
    matrix.loadSequence(LEDMATRIX_ANIMATION_AUDIO_WAVEFORM);
  }
  else if (anime_id == 7) {
    matrix.loadSequence(LEDMATRIX_ANIMATION_BATTERY);
  }
  else if (anime_id == 8) {
    matrix.loadSequence(LEDMATRIX_ANIMATION_BOUNCING_BALL);
  }
  else if (anime_id == 9) {
    matrix.loadSequence(LEDMATRIX_ANIMATION_BUG);
  }
  else if (anime_id == 10) {
    matrix.loadSequence(LEDMATRIX_ANIMATION_CHECK);
  }
  else if (anime_id == 11) {
    matrix.loadSequence(LEDMATRIX_ANIMATION_CLOUD);
  }
  else if (anime_id == 12) {
    matrix.loadSequence(LEDMATRIX_ANIMATION_DOWNLOAD);
  }
  else if (anime_id == 13) {
    matrix.loadSequence(LEDMATRIX_ANIMATION_DVD);
  }
  else if (anime_id == 14) {
    matrix.loadSequence(LEDMATRIX_ANIMATION_HEARTBEAT_LINE);
  }
  else if (anime_id == 15) {
    matrix.loadSequence(LEDMATRIX_ANIMATION_HEARTBEAT);
  }
  else if (anime_id == 16) {
    matrix.loadSequence(LEDMATRIX_ANIMATION_INFINITY_LOOP_LOADER);
  }
  else if (anime_id == 17) {
    matrix.loadSequence(LEDMATRIX_ANIMATION_LOAD_CLOCK);
  }
  else if (anime_id == 18) {
    matrix.loadSequence(LEDMATRIX_ANIMATION_LOAD);
  }
  else if (anime_id == 19) {
    matrix.loadSequence(LEDMATRIX_ANIMATION_LOCK);
  }
  else if (anime_id == 20) {
    matrix.loadSequence(LEDMATRIX_ANIMATION_NOTIFICATION);
  }
  else if (anime_id == 21) {
    matrix.loadSequence(LEDMATRIX_ANIMATION_OPENSOURCE);
  }
  else if (anime_id == 22) {
    matrix.loadSequence(LEDMATRIX_ANIMATION_SPINNING_COIN);
  }
  else if (anime_id == 23) {
    matrix.loadSequence(LEDMATRIX_ANIMATION_TETRIS);
  }
  else if (anime_id == 24) {
    matrix.loadSequence(LEDMATRIX_ANIMATION_WIFI_SEARCH);
  }
  matrix.play();
  r_stat["s"] = (int)NO_RETURN;
}
*/

// scroll text
void unoq_matrix_scroll_text(JSONVar &p) {
  const char* text = (const char*)p["t"];
  int font = (int)p["o"];
  int dir = (int)p["d"];
  int speed = (int)p["s"];

  dir = dirs[dir];
/*
  Serial.println("matrix scroll text");
  Serial.print("text = ");
  Serial.println(text);
  Serial.print("font = ");
  Serial.println(font_str);
  Serial.print("dir = ");
  Serial.println(dir);
  Serial.print("speed = ");
  Serial.println(speed);
*/

//    Serial.println("before begindraw");
  matrix.beginDraw();
//    Serial.println("before stroke");
  matrix.stroke(0xFFFFFFFF);
//    Serial.println("before textscrollspeed");
  matrix.textScrollSpeed(speed);
//    Serial.println("before textfont");
  if (font == 0) {
    matrix.textFont(Font_4x6);
  }
  else {
    matrix.textFont(Font_5x7);
  }
//    Serial.println("before begintext");
  matrix.beginText(0, 1, 0xFFFFFF);
 //   Serial.println("before println");
  matrix.println(text);
 //   Serial.println("before endtext");
  matrix.endText(dir);
//    Serial.println("before enddraw");
  matrix.endDraw();
//    is_scrolling = true;
//  Serial.println("before return");
  r_stat["s"] = (int)NO_RETURN;
}

// clear
void unoq_matrix_clear(JSONVar &p) {
  matrix.clear();
  r_stat["s"] = (int)NO_RETURN;
}

// rgb led
void unoq_rgb_led(JSONVar &p) {
  int num = (int)p["n"];
  int color = (int)p["c"];

  if (num == 3) {
    digitalWrite(LED3_R, color & 2 ? LOW : HIGH);
    digitalWrite(LED3_G, color & 4 ? LOW : HIGH);
    digitalWrite(LED3_B, color & 1 ? LOW : HIGH);
  }
  else if (num == 4) {
    digitalWrite(LED4_R, color & 2 ? LOW : HIGH);
    digitalWrite(LED4_G, color & 4 ? LOW : HIGH);
    digitalWrite(LED4_B, color & 1 ? LOW : HIGH);
  }
  r_stat["s"] = (int)NO_RETURN;
}

#endif
