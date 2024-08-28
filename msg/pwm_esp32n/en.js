export function addMessages() {
  Blockly.Msg["TSUMICKY_CATEGORY_PWM_ESP32N"] = "PWM Output(ESP32)";
  Blockly.Msg["TSUMICKY_CATEGORY_PWM_SUB_ESP32N"] = "ESP32";
  Blockly.Msg["TSUMICKY_PWM_ESP32N_ATTACH"] = "set the frequency of %1 to %2 %3 %4 Hz and the resolution to %5 %6 bits %7";
  Blockly.Msg["TSUMICKY_PWM_ESP32N_ATTACH_TOOLTIP"] = "Sets the frequency and resolution (in bits) for the PWM output on the specified pin of the ESP32.";
  Blockly.Msg["TSUMICKY_PWM_ESP32N_WRITE"] = "output PWM to %2 of %1 with duty ratio %3 %4 %5";
  Blockly.Msg["TSUMICKY_PWM_ESP32N_WRITE_TOOLTIP"] = "This outputs PWM with the specified duty ratio to the specified pin of the ESP32. \nThe duty ratio can be specified in the range of 0 to 100.";
}
