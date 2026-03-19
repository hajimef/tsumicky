#ifdef BLOCKS_UNOR4WIFI_MATRIX

#ifndef FW_UNOR4WIFI_MATRIX_H
#define FW_UNOR4WIFI_MATRIX_H

#include "fw_common.h"

void unor4wifi_matrix_setup();
void unor4wifi_matrix_dispose(JSONVar &p);
void unor4wifi_matrix_show_frame(JSONVar &p);
void unor4wifi_matrix_show_bitmap(JSONVar &p);
void unor4wifi_matrix_show_animation(JSONVar &p);
void unor4wifi_matrix_scroll_text(JSONVar &p);
void unor4wifi_matrix_clear(JSONVar &p);

#endif // FW_UNOR4WIFI_MATRIX_H

#endif // BLOCKS_UNOR4WIFI_MATRIX
