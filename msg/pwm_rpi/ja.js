export function addMessages() {
  Blockly.Msg["TSUMICKY_CATEGORY_PWM_RPI"] = "PWM出力(RPi)";
  Blockly.Msg["TSUMICKY_CATEGORY_PWM_SUB_RPI"] = "RPi";
  Blockly.Msg["TSUMICKY_PWM_RPI_SET_FREQUENCY"] = "%1 の %2 の周波数を %3 %4 Hzに設定する";
  Blockly.Msg["TSUMICKY_PWM_RPI_SET_FREQUENCY_TOOLTIP"] = "Raspberry PiのPWMの周波数を設定します。";
  Blockly.Msg["TSUMICKY_PWM_RPI_ANALOG_WRITE"] = "%1 の %2 にデューティ比 %3 %4 %でPWM出力する";
  Blockly.Msg["TSUMICKY_PWM_RPI_ANALOG_WRITE_TOOLTIP"] = "Raspberry Piの指定のピンに、指定のデューティ比でPWM出力します。\nデューティ比は0から100で指定します。";
};
