export function addMessages() {
  Blockly.Msg["TSUMICKY_CATEGORY_PWM_ESP32"] = "PWM Output(ESP32/deprecated)";
  Blockly.Msg["TSUMICKY_CATEGORY_PWM_SUB_ESP32"] = "ESP32(deprecated)";
  Blockly.Msg["TSUMICKY_PWM_ESP32_SETUP"] = "set channel %2 %3 frequency to %4 %5 Hz and resolution to %6 %7 of %1";
  Blockly.Msg["TSUMICKY_PWM_ESP32_SETUP_TOOLTIP"] = "Specify the frequency and resolution (in bits) for the specified channel of ESP32.";
  Blockly.Msg["TSUMICKY_PWM_ESP32_ATTACH_PIN"] = "assign %2 of %1 to channel %3 %4";
  Blockly.Msg["TSUMICKY_PWM_ESP32_ATTACH_PIN_TOOLTIP"] = "Assigns the specified pin of ESP32 to the specified channel.";
  Blockly.Msg["TSUMICKY_PWM_ESP32_WRITE"] = "PWM output to channel %2 %3 of %1 with duty cycle %4 %5 %";
  Blockly.Msg["TSUMICKY_PWM_ESP32_WRITE_TOOLTIP"] = "PWM output to the specified channel of ESP32 with the specified duty ratio.\nSpecify the duty ratio in the range of 0 to 100.";
};
