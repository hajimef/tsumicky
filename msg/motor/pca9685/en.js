export function addMessages() {
  Blockly.Msg["TSUMICKY_PCA9685_INIT"] = "initialize PCA9685 of %1 : I2C address %2";
  Blockly.Msg["TSUMICKY_PCA9685_INIT_TOOLTIP"] = "Initialize PCA9685.";
  Blockly.Msg["TSUMICKY_PCA9685_INIT_I2C"] = "initialize PCA9685 of %1 by specifying I2C pin numbers: I2C address %2 sda pin %3 scl pin %4";
  Blockly.Msg["TSUMICKY_PCA9685_INIT_I2C_TOOLTIP"] = "Initialize PCA9685 by specifying I2C pin numbers.";
  Blockly.Msg["TSUMICKY_PCA9685_PULSE_RANGE"] = "specify the pulse width of the servo motor number %2 %3 of PCA9685 of %1 : min %4 %5 max %6 %7";
  Blockly.Msg["TSUMICKY_PCA9685_PULSE_RANGE_TOOLTIP"] = "Specify the pulse width corresponding to 0 degrees and 180 degrees of the servo motor.";
  Blockly.Msg["TSUMICKY_PCA9685_SET_SERVO"] = "rotate servo motor number %2 of PCA9685 of %1 to %3 degrees";
  Blockly.Msg["TSUMICKY_PCA9685_SET_SERVO_TOOLTIP"] = "Rotate the servo motor to the specified angle.";
}