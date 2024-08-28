#ifndef __TSUMICKY_FIRMWARE_MPU6050_H__
#define __TSUMICKY_FIRMWARE_MPU6050_H__
#include <FastIMU.h>
#include "fw_imu.h"

void mpu6050_setup(void);
void mpu6050_init(JSONVar &p);
void mpu6050_dispose(JSONVar &p);
void mpu6050_update(JSONVar &p);
void mpu6050_read(JSONVar &p);

#endif