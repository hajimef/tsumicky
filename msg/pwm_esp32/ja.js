export function addMessages() {
  Blockly.Msg["TSUMICKY_CATEGORY_PWM_ESP32"] = "PWM出力(ESP32)";
  Blockly.Msg["TSUMICKY_CATEGORY_PWM_SUB_ESP32"] = "ESP32";
  Blockly.Msg["TSUMICKY_PWM_ESP32_SETUP"] = "%1 のチャンネル %2 %3 の周波数を %4 %5 Hz、分解能を %6 %7 bitに設定する";
  Blockly.Msg["TSUMICKY_PWM_ESP32_SETUP_TOOLTIP"] = "ESP32の指定のチャンネルで、周波数と解像度(ビット単位)を指定します。";
  Blockly.Msg["TSUMICKY_PWM_ESP32_ATTACH_PIN"] = "%1 の %2 をチャンネル %3 %4 に割り当てる";
  Blockly.Msg["TSUMICKY_PWM_ESP32_ATTACH_PIN_TOOLTIP"] = "ESP32の指定のピンを、指定のチャンネルに割り当てます。";
  Blockly.Msg["TSUMICKY_PWM_ESP32_WRITE"] = "%1 のチャンネル %2 %3 にデューティ比 %4 %5 ％でPWM出力する";
  Blockly.Msg["TSUMICKY_PWM_ESP32_WRITE_TOOLTIP"] = "ESP32の指定のチャンネルに、指定のデューティ比でPWM出力を行います。\nデューティ比は0から100の範囲で指定します。";
};
