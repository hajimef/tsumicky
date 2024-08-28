#include "fw_common.h"
#include "fw_mpu6050.h"

MPU6050 *mpu6050;

String mpu6050_group = "sen";
String mpu6050_subgroup = "m6050";

calData calib = { 0 };
AccelData accelData;
GyroData gyroData;

void mpu6050_setup(void) {
  mpu6050 = NULL;
  addCallback(mpu6050_group, mpu6050_subgroup, "i", &mpu6050_init);
  addCallback(mpu6050_group, mpu6050_subgroup, "d", &mpu6050_dispose);
  addCallback(mpu6050_group, mpu6050_subgroup, "u", &mpu6050_update);
  addCallback(mpu6050_group, mpu6050_subgroup, "r", &mpu6050_read);
}

void mpu6050_init(JSONVar &p) {
  imu_i2c_init(p);
  mpu6050 = new MPU6050();
  int err = mpu6050->init(calib, TMK_IMU_ADDRESS);
  if (err != 0) {
    r_stat["s"] = (int) ERR_RETURN;
    r_stat["m"] = "Error init imu";
    return;
  }
  r_stat["s"] = (int) NO_RETURN;
}

void mpu6050_dispose(JSONVar &p) {
  delete mpu6050;
  mpu6050 = NULL;
  r_stat["s"] = (int) NO_RETURN;
}

void mpu6050_update(JSONVar &p) {
  imu_update(mpu6050, &accelData, &gyroData, NULL);
  r_stat["s"] = (int) NO_RETURN;
}

void mpu6050_read(JSONVar &p) {
  imu_read(p, &accelData, &gyroData, NULL);
}
