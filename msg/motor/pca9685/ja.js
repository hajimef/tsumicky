export function addMessages() {
  Blockly.Msg["TSUMICKY_PCA9685_INIT"] = "%1 のPCA9685を初期化する : I2Cアドレス %2";
  Blockly.Msg["TSUMICKY_PCA9685_INIT_TOOLTIP"] = "PCA9685を初期化します。";
  Blockly.Msg["TSUMICKY_PCA9685_INIT_I2C"] = "I2Cのピン番号を指定して %1 のPCA9685を初期化する : I2Cアドレス %2 SDA %3 番ピン SCL %4 番ピン";
  Blockly.Msg["TSUMICKY_PCA9685_INIT_I2C_TOOLTIP"] = "I2Cのピン番号を指定してPCA9685を初期化します。";
  Blockly.Msg["TSUMICKY_PCA9685_PULSE_RANGE"] = "%1 のPCA9685の %2 %3 番目のサーボモーターのパルス幅を指定する：最小 %4 %5 最大 %6 %7";
  Blockly.Msg["TSUMICKY_PCA9685_PULSE_RANGE_TOOLTIP"] = "サーボモーターの0度と180度に対応するパルス幅を指定します。";
  Blockly.Msg["TSUMICKY_PCA9685_SET_SERVO"] = "%1 のPCA9685の %2 番目ののサーボモーターを %3 度まで回転させる";
  Blockly.Msg["TSUMICKY_PCA9685_SET_SERVO_TOOLTIP"] = "サーボモーターを指定した角度まで回転させます。";
}
