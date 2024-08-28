#include "option_blocks.h"

#ifdef BLOCKS_NEOPIXEL
#include "fw_neopixel.h"
#endif
#ifdef BLOCKS_LCD
#include "fw_lcd.h"
#endif
#ifdef BLOCKS_DHT
#include "fw_dht.h"
#endif
#ifdef BLOCKS_BMP280
#include "fw_bmp280.h"
#endif
#ifdef BLOCKS_MPU6050
#include "fw_mpu6050.h"
#endif

void option_blocks_setup(void) {
#ifdef BLOCKS_NEOPIXEL
  neopixel_setup();
#endif
#ifdef BLOCKS_LCD
  lcd_setup();
#endif
#ifdef BLOCKS_DHT
  dht_setup();
#endif
#ifdef BLOCKS_BMP280
  bmp280_setup();
#endif
#ifdef BLOCKS_MPU6050
  mpu6050_setup();
#endif
}

void option_blocks_loop(void) {
}