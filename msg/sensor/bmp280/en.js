export function addMessages() {
  Blockly.Msg["TSUMICKY_BMP280_INIT"] = "initialize BMP280 at %1: I2C address %2";
  Blockly.Msg["TSUMICKY_BMP280_INIT_TOOLTIP"] = "Initialize the temperature/pressure sensor BMP280.";
  Blockly.Msg["TSUMICKY_BMP280_INIT_I2C"] = "initialize BMP280 in %1: I2C address %2 sda pin %3 scl pin %4";
  Blockly.Msg["TSUMICKY_BMP280_INIT_I2C_TOOLTIP"] = "Initialize the temperature/pressure sensor BMP280. Specify the SDA and SCL pin numbers.";
  Blockly.Msg["TSUMICKY_BMP280_TEMPERATURE"] = "temperature of BMP280 in %1";
  Blockly.Msg["TSUMICKY_BMP280_TEMPERATURE_TOOLTIP"] = "Get the temperature of BMP280.";
  Blockly.Msg["TSUMICKY_BMP280_PRESSURE"] = "barometric pressure of BMP280 in %1";
  Blockly.Msg["TSUMICKY_BMP280_PRESSURE_TOOLTIP"] = "Get the barometric pressure of BMP280.";
};
