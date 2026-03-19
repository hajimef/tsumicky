#include "option_blocks.h"
#ifdef BLOCKS_UNOR4WIFI_MATRIX
#include "fw_common.h"
#include "fw_unor4wifi_matrix.h"
#include <ArduinoGraphics.h>
#include <Arduino_LED_Matrix.h>

const char unor4wifi_matrix_group[] = "dsp";
const char unor4wifi_matrix_subgroup[] = "u4";

ArduinoLEDMatrix matrix;

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

const int dirs[] = { SCROLL_LEFT, SCROLL_RIGHT, NO_SCROLL };

void unor4wifi_matrix_setup() {
  addCallback(unor4wifi_matrix_group, unor4wifi_matrix_subgroup, "d", &unor4wifi_matrix_dispose);
  addCallback(unor4wifi_matrix_group, unor4wifi_matrix_subgroup, "f", &unor4wifi_matrix_show_frame);
  addCallback(unor4wifi_matrix_group, unor4wifi_matrix_subgroup, "b", &unor4wifi_matrix_show_bitmap);
  addCallback(unor4wifi_matrix_group, unor4wifi_matrix_subgroup, "a", &unor4wifi_matrix_show_animation);
  addCallback(unor4wifi_matrix_group, unor4wifi_matrix_subgroup, "s", &unor4wifi_matrix_scroll_text);
  addCallback(unor4wifi_matrix_group, unor4wifi_matrix_subgroup, "c", &unor4wifi_matrix_clear);
  matrix.begin();
}

// dispose
void unor4wifi_matrix_dispose(JSONVar &p) {
  matrix.clear();
//  Serial.println("matrix dispose");
}

// show frame
void unor4wifi_matrix_show_frame(JSONVar &p) {
  const int frame_id = (int)p["f"];
  matrix.loadFrame(frames[frame_id]);
  Serial.print("matrix show_frame id = ");
  Serial.println(frame_id);
  r_stat["s"] = (int)NO_RETURN;
}

// show bitmap
void unor4wifi_matrix_show_bitmap(JSONVar &p) {
  uint32_t frame[3];
  for (int i = 0; i < 3; i++) {
    frame[i] = (uint32_t)p["b"][i];
  }
/*
  Serial.print("matrix show_bitmap");
  Serial.print(frame[0], HEX);
  Serial.print(" ");
  Serial.print(frame[1], HEX);
  Serial.print(" ");
  Serial.println(frame[2], HEX);
*/
  matrix.loadFrame(frame);
  r_stat["s"] = (int)NO_RETURN;
}

// show animation
void unor4wifi_matrix_show_animation(JSONVar &p) {
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

// scroll text
void unor4wifi_matrix_scroll_text(JSONVar &p) {
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
void unor4wifi_matrix_clear(JSONVar &p) {
  matrix.clear();
  r_stat["s"] = (int)NO_RETURN;
}

#endif
