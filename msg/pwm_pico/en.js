export function addMessages() {
  Blockly.Msg["TSUMICKY_CATEGORY_PWM_PICO"] = "PWM output(RPiPico)";
  Blockly.Msg["TSUMICKY_CATEGORY_PWM_SUB_PICO"] = "RPiPico";
  Blockly.Msg["TSUMICKY_PWM_PICO_SETUP"] = "set frequency of %1 to %2 %3 Hz and resolution to %4 %5 bit";
  Blockly.Msg["TSUMICKY_PWM_PICO_SETUP_TOOLTIP"] = "Set the PWM frequency and resolution of Raspberry Pi Pico.";
  Blockly.Msg["TSUMICKY_PWM_PICO_ANALOG_WRITE"] = "PWM output to %2 of %1 with duty ratio %3 %4 %";
  Blockly.Msg["TSUMICKY_PWM_PICO_ANALOG_WRITE_TOOLTIP"] = "PWM output to Raspberry Pi Pico with specified duty ratio. \nSpecify the duty ratio in the range of 0 to 100.";
};
