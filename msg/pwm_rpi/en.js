export function addMessages() {
  Blockly.Msg["TSUMICKY_CATEGORY_PWM_RPI"] = "PWM output(RPi)";
  Blockly.Msg["TSUMICKY_CATEGORY_PWM_SUB_RPI"] = "RPi";
  Blockly.Msg["TSUMICKY_PWM_RPI_SET_FREQUENCY"] = "set frequency of %2 in %1 to %3 %4 Hz";
  Blockly.Msg["TSUMICKY_PWM_RPI_SET_FREQUENCY_TOOLTIP"] = "Set the PWM frequency of Raspberry Pi.";
  Blockly.Msg["TSUMICKY_PWM_RPI_ANALOG_WRITE"] = "PWM output to %2 of %1 with duty ratio %3 %4 %";
  Blockly.Msg["TSUMICKY_PWM_RPI_ANALOG_WRITE_TOOLTIP"] = "Outputs PWM to the specified pin of Raspberry Pi with the specified duty ratio. \nSpecify the duty ratio from 0 to 100.";
};
