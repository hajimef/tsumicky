#include "fw_common.h"
#include "fw_imu.h"

void imu_i2c_init(JSONVar &p) {
  int sda = (int) p["d"];
  int scl = (int) p["c"];
#if defined(ARDUINO_ARCH_RP2040)
  Wire.setSCL(scl);
  Wire.setSDA(sda);
  Wire.begin();
#else
  if (sda != -1) {
    Wire.begin(sda, scl);
  }
  else {
    Wire.begin();
  }
#endif
/*
  Serial.print("sda = ");
  Serial.print(sda);
  Serial.print(", scl = ");
  Serial.println(scl);
*/
}

void imu_update(IMUBase* imu, AccelData* accelData,GyroData* gyroData, MagData* magData) {
  imu->update();
  imu->getAccel(accelData);
  imu->getGyro(gyroData);
  if (imu->hasMagnetometer()) {
    imu->getMag(magData);
  }
}

void imu_read(JSONVar &p, AccelData* accelData,GyroData* gyroData, MagData* magData) {
  int type = p["t"];
  r_stat["s"] = (int) USE_RETURN;
  r_stat["t"] = (int) TYPE_FLOAT;
  if (type == TMK_XACCEL) {
//    Serial.print("xaccel = ");
//    Serial.println(accelData.accelX);
    r_stat["v"] = (double) accelData->accelX;
  }
  else if (type == TMK_YACCEL) {
//    Serial.print("yaccel = ");
//    Serial.println(accelData.accelY);
    r_stat["v"] = (double) accelData->accelY;
  }
  else if (type == TMK_ZACCEL) {
//    Serial.print("zaccel = ");
//    Serial.println(accelData.accelZ);
    r_stat["v"] = (double) accelData->accelZ;
  }
  else if (type == TMK_XGYRO) {
//    Serial.print("xgyro = ");
//    Serial.println(gyroData.gyroX);
    r_stat["v"] = (double) gyroData->gyroX;
  }
  else if (type == TMK_YGYRO) {
//    Serial.print("ygyro = ");
//    Serial.println(gyroData.gyroY);
    r_stat["v"] = (double) gyroData->gyroY;
  }
  else if (type == TMK_ZGYRO) {
//    Serial.print("zgyro = ");
//    Serial.println(gyroData.gyroZ);
    r_stat["v"] = (double) gyroData->gyroZ;
  }
  else if (type == TMK_XMAGNET) {
    r_stat["v"] = (double) magData->magX;
  }
  else if (type == TMK_YMAGNET) {
    r_stat["v"] = (double) magData->magY;
  }
  else if (type == TMK_ZMAGNET) {
    r_stat["v"] = (double) magData->magZ;
  }
}

