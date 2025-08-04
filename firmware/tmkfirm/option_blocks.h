#ifndef __TSUMICKY_FIRMWARE_OPTION_BLOCKS_H__
#define __TSUMICKY_FIRMWARE_OPTION_BLOCKS_H__

#define BLOCKS_NEOPIXEL
#define BLOCKS_LCD
#define BLOCKS_OLED
#define BLOCKS_BMP280
#define BLOCKS_DHT
#define BLOCKS_MPU6050
#define BLOCKS_MAX30100
#define BLOCKS_PCA9685

void option_blocks_setup(void);
void option_blocks_loop(void);

#endif

