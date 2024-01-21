#include "option_blocks.h"

#ifdef BLOCKS_NEOPIXEL
#include "fw_neopixel.h"
#endif
#ifdef BLOCKS_BMP280
#include "fw_bmp280.h"
#endif

void option_blocks_setup(void) {
#ifdef BLOCKS_NEOPIXEL
  neopixel_setup();
#endif
#ifdef BLOCKS_BMP280
  bmp280_setup();
#endif
}

void option_blocks_loop(void) {
}