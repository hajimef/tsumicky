#ifndef __TSUMICKY_FIRMWARE_IMU_H__
#define __TSUMICKY_FIRMWARE_IMU_H__

#include <FastIMU.h>

#define TMK_IMU_ADDRESS 0x68

#define TMK_XACCEL 0
#define TMK_YACCEL 1
#define TMK_ZACCEL 2
#define TMK_XGYRO 3
#define TMK_YGYRO 4
#define TMK_ZGYRO 5
#define TMK_XMAGNET 6
#define TMK_YMAGNET 7
#define TMK_ZMAGNET 8

void imu_i2c_init(JSONVar &p);
void imu_update(IMUBase* imu, AccelData* accelData,GyroData* gyroData, MagData* magData);
void imu_read(JSONVar &p, AccelData* accelData,GyroData* gyroData, MagData* magData);
#endif