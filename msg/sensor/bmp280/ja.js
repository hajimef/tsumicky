export function addMessages() {
  Blockly.Msg["TSUMICKY_BMP280_INIT"] = "%1 のBMP280を初期化する：I2Cアドレス %2";
  Blockly.Msg["TSUMICKY_BMP280_INIT_TOOLTIP"] = "温度・気圧センサーのBMP280を初期化します。";
  Blockly.Msg["TSUMICKY_BMP280_INIT_I2C"] = "%1 のBMP280を初期化する：I2Cアドレス %2 SDA %3 ピン SCL %4 ピン";
  Blockly.Msg["TSUMICKY_BMP280_INIT_I2C_TOOLTIP"] = "温度・気圧センサーのBMP280を初期化します。SDAとSCLのピン番号を指定します。";
  Blockly.Msg["TSUMICKY_BMP280_TEMPERATURE"] = "%1 のBMP280の温度";
  Blockly.Msg["TSUMICKY_BMP280_TEMPERATURE_TOOLTIP"] = "BMP280の温度を取得します。";
  Blockly.Msg["TSUMICKY_BMP280_PRESSURE"] = "%1 のBMP280の気圧";
  Blockly.Msg["TSUMICKY_BMP280_PRESSURE_TOOLTIP"] = "BMP280の気圧を取得します。";
};
