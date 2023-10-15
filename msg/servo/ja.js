export function addMessages() {
  Blockly.Msg["TSUMICKY_CATEGORY_SERVO"] = "サーボモーター";
  Blockly.Msg["TSUMICKY_SERVO_ATTACH"] = "%1 の %2 %3 番目のサーボモーターをパルス幅 %4 %5 から %6 %7 で初期化して %8 に割り当てる";
  Blockly.Msg["TSUMICKY_SERVO_ATTACH_TOOLTIP"] = "マイコンの指定のピンに接続したサーボモーターを、指定の番号に割り当てます。";
  Blockly.Msg["TSUMICKY_SERVO_WRITE"] = "%1 の %2 %3 番のサーボモーターの角度を %4 %5 度にする";
  Blockly.Msg["TSUMICKY_SERVO_WRITE_TOOLTIP"] = "サーボモーターを指定の角度まで回転させます。";
};
