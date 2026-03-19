#ifdef BLOCKS_UNOQ_MATRIX

#ifndef FW_UNOQ_MATRIX_H
#define FW_UNOQ_MATRIX_H

#include "fw_common.h"

void unoq_matrix_setup();
void unoq_matrix_dispose(JSONVar &p);
//void unoq_matrix_show_frame(JSONVar &p);
void unoq_matrix_show_bitmap(JSONVar &p);
void unoq_matrix_show_grayscale_bitmap(JSONVar &p);
//void unor4wifi_matrix_show_animation(JSONVar &p);
void unoq_matrix_scroll_text(JSONVar &p);
void unoq_matrix_clear(JSONVar &p);
void unoq_rgb_led(JSONVar &p);

#endif // FW_UNOQ_MATRIX_H

#endif // BLOCKS_UNOQ_MATRIX
