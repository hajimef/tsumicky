#ifndef __TSUMICKY_FIRMWARE_OPTION_BLOCKS_H__
#define __TSUMICKY_FIRMWARE_OPTION_BLOCKS_H__

#if defined(ARDUINO_UNO_Q)
#define BLOCKS_UNOQ_MATRIX
//#define BLOCKS_NEOPIXEL // adafruit_neopixel not work
#define BLOCKS_LCD
//#define BLOCKS_OLED  // too large
#define BLOCKS_BMP280
#define BLOCKS_DHT
#define BLOCKS_IMU
#define BLOCKS_MPU6050
#define BLOCKS_MAX30100
#define BLOCKS_PCA9685
#elif defined(ARDUINO_UNOWIFIR4)
#define BLOCKS_UNOR4WIFI_MATRIX
#define BLOCKS_NEOPIXEL
#define BLOCKS_LCD
//#define BLOCKS_OLED
#define BLOCKS_BMP280
#define BLOCKS_DHT
#define BLOCKS_IMU
#define BLOCKS_MPU6050
#define BLOCKS_MAX30100
#define BLOCKS_PCA9685
#else // neither ARDUINO_UNOWIFIR4 nor ARDUINO_UNO_Q
#define BLOCKS_NEOPIXEL
#define BLOCKS_LCD
#define BLOCKS_OLED
#define BLOCKS_BMP280
#define BLOCKS_DHT
#define BLOCKS_IMU
#define BLOCKS_MPU6050
#define BLOCKS_MAX30100
#define BLOCKS_PCA9685
#endif

void option_blocks_setup(void);
void option_blocks_loop(void);

#endif

