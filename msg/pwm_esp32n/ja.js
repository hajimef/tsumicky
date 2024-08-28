export function addMessages() {
  Blockly.Msg["TSUMICKY_CATEGORY_PWM_ESP32N"] = "PWM出力(ESP32)";
  Blockly.Msg["TSUMICKY_CATEGORY_PWM_SUB_ESP32N"] = "ESP32";
  Blockly.Msg["TSUMICKY_PWM_ESP32N_ATTACH"] = "%1 の %2 の周波数を %3 %4 Hz、分解能を %5 %6 ビットに設定する %7";
  Blockly.Msg["TSUMICKY_PWM_ESP32N_ATTACH_TOOLTIP"] = "ESP32の指定のピンのPWM出力で、周波数と分解能(ビット単位)を設定します。";
  Blockly.Msg["TSUMICKY_PWM_ESP32N_WRITE"] = "%1 の %2 にデューティ比 %3 %4 ％でPWM出力する %5";
  Blockly.Msg["TSUMICKY_PWM_ESP32N_WRITE_TOOLTIP"] = "ESP32の指定のピンに、指定のデューティ比でPWM出力を行います。\nデューティ比は0から100の範囲で指定します。";
}
