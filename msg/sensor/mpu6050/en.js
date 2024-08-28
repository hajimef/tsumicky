export function addMessages() {
  Blockly.Msg["TSUMICKY_MPU6050_INIT"] = "initialize MPU6050 in %1 %2";
  Blockly.Msg["TSUMICKY_MPU6050_INIT_TOOLTIP"] = "Initialize the motion sensor MPU6050.";
  Blockly.Msg["TSUMICKY_MPU6050_INIT_PIN"] = "initialize MPU6050 on %1: SDA pin %2 SCL pin %3 %4";
  Blockly.Msg["TSUMICKY_MPU6050_INIT_PIN_TOOLTIP"] = "Initialize the motion sensor MPU6050 by specifying the SDA/SCL pins.";
  Blockly.Msg["TSUMICKY_MPU6050_UPDATE"] = "update the status of MPU6050 in %1 %2";
  Blockly.Msg["TSUMICKY_MPU6050_UPDATE_TOOLTIP"] = "Update the state of the motion sensor MPU6050 and obtain acceleration and angular velocity information.";
  Blockly.Msg["TSUMICKY_MPU6050_READ"] = "%2 %3 of MPU6050 in %1";
  Blockly.Msg["TSUMICKY_MPU6050_READ_TOOLTIP"] = "The acceleration and angular velocity values ​​of the motion sensor MPU6050.";
  Blockly.Msg["TSUMICKY_MPU6050_ACCX"] = "X-axis acceleration";
  Blockly.Msg["TSUMICKY_MPU6050_ACCY"] = "Y-axis acceleration";
  Blockly.Msg["TSUMICKY_MPU6050_ACCZ"] = "Z-axis acceleration";
  Blockly.Msg["TSUMICKY_MPU6050_GYROX"] = "X-axis angular velocity";
  Blockly.Msg["TSUMICKY_MPU6050_GYROY"] = "Y-axis angular velocity";
  Blockly.Msg["TSUMICKY_MPU6050_GYROZ"] = "Y-axis angular velocity";
};
