export function addMessages() {
  Blockly.Msg["TSUMICKY_MPU6050_INIT"] = "%1 のMPU6050を初期化する %2";
  Blockly.Msg["TSUMICKY_MPU6050_INIT_TOOLTIP"] = "モーションセンサーのMPU6050を初期化します。";
  Blockly.Msg["TSUMICKY_MPU6050_INIT_PIN"] = "%1 のMPU6050を初期化する：SDA %2 番ピン SCL %3 番ピン %4";
  Blockly.Msg["TSUMICKY_MPU6050_INIT_PIN_TOOLTIP"] = "モーションセンサーのMPU6050を、SDA/SCLのピンを指定して初期化します。";
  Blockly.Msg["TSUMICKY_MPU6050_UPDATE"] = "%1 のMPU6050の状態を更新する %2";
  Blockly.Msg["TSUMICKY_MPU6050_UPDATE_TOOLTIP"] = "モーションセンサーのMPU6050の状態を更新して、加速度・角速度の情報を取得します。";
  Blockly.Msg["TSUMICKY_MPU6050_READ"] = "%1 のMPU6050の %2 %3";
  Blockly.Msg["TSUMICKY_MPU6050_UPDATE_TOOLTIP"] = "モーションセンサーのMPU6050の加速度・角速度の値です。";
  Blockly.Msg["TSUMICKY_MPU6050_ACCX"] = "X軸加速度";
  Blockly.Msg["TSUMICKY_MPU6050_ACCY"] = "Y軸加速度";
  Blockly.Msg["TSUMICKY_MPU6050_ACCZ"] = "Z軸加速度";
  Blockly.Msg["TSUMICKY_MPU6050_GYROX"] = "X軸角速度";
  Blockly.Msg["TSUMICKY_MPU6050_GYROY"] = "Y軸角速度";
  Blockly.Msg["TSUMICKY_MPU6050_GYROZ"] = "Z軸角速度";
};
