export function addMessages() {
  Blockly.Msg["TSUMICKY_CATEGORY_PWM_PICO"] = "PWM出力(RPiPico)";
  Blockly.Msg["TSUMICKY_CATEGORY_PWM_SUB_PICO"] = "RPiPico";
  Blockly.Msg["TSUMICKY_PWM_PICO_SETUP"] = "%1 の周波数を %2 %3 Hz、分解能を %4 %5 bitに設定する";
  Blockly.Msg["TSUMICKY_PWM_PICO_SETUP_TOOLTIP"] = "Raspberry Pi PicoのPWMの周波数と分解能を設定します。";
  Blockly.Msg["TSUMICKY_PWM_PICO_ANALOG_WRITE"] = "%1 の %2 にデューティ比 %3 %4 でPWM出力する";
  Blockly.Msg["TSUMICKY_PWM_PICO_ANALOG_WRITE_TOOLTIP"] = "Raspberry Pi Picoに指定のデューティ比でPWM出力します。\nヂューティ比は0から100の範囲で指定します。";
};
