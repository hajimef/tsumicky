export function addMessages() {
  Blockly.Msg["TSUMICKY_CATEGORY_BASIC_IO"] = "基本入出力";
  Blockly.Msg["TSUMICKY_BASIC_IO_CONNECT"] = "ホスト %1 の %2 番ポートに %3 で接続して変数 %4 に割り当てる";
  Blockly.Msg["TSUMICKY_BASIC_IO_CONNECT_TOOLTIP"] = "マイコンに接続します。\nホストはIPアドレスかホスト名で指定します。\n変数名は、マイコンの名前に合わせると良いです。";
  Blockly.Msg["TSUMICKY_BASIC_IO_MODELNAME"] = "%1 のモデル名";
  Blockly.Msg["TSUMICKY_BASIC_IO_MODELNAME_TOOLTIP"] = "マイコンのモデル名を文字列で得ます。";
  Blockly.Msg["TSUMICKY_BASIC_IO_ASSIGN_PIN"] = "%1 の %2 %3 番ピンを変数 %4 に割り当てる";
  Blockly.Msg["TSUMICKY_BASIC_IO_ASSIGN_PIN_TOOLTIP"] = "指定したマイコンのピンを変数に割り当てます。";
  Blockly.Msg["TSUMICKY_BASIC_IO_PIN_MODE"] = "%1 のモードを %2 にする";
  Blockly.Msg["TSUMICKY_BASIC_IO_PIN_MODE_TOOLTIP"] = "指定したピンのモードを出力(OUTPUT)／入力(INPUT)／プルアップ抵抗有効の入力(INPUT_PULLUP)のいずれかに設定します";
  Blockly.Msg["TSUMICKY_BASIC_IO_DIGITAL_WRITE"] = "%1 に %2 をデジタル出力する";
  Blockly.Msg["TSUMICKY_BASIC_IO_DIGITAL_WRITE_TOOLTIP"] = "指定したピンにHIGHかLOWをデジタル出力します。";
  Blockly.Msg["TSUMICKY_BASIC_IO_DIGITAL_READ"] = "%1 のデジタル入力";
  Blockly.Msg["TSUMICKY_BASIC_IO_DIGITAL_READ_TOOLTIP"] = "指定したピンからデジタル入力で得られた値です。";
  Blockly.Msg["TSUMICKY_BASIC_IO_ANALOG_READ"] = "%1 のアナログ入力";
  Blockly.Msg["TSUMICKY_BASIC_IO_ANALOG_READ_TOOLTIP"] = "指定したピンからアナログ入力で得られた値です。\n0～4095の範囲の値を取ります。\nRaspberry Piでは利用できません。";
  Blockly.Msg["TSUMICKY_BASIC_IO_HL_TOOLTIP"] = "HIGHかLOWの値。";
  Blockly.Msg["TSUMICKY_BASIC_IO_MAP"] = "%1 を %2 ～ %3 の範囲から %4 ～ %5 の範囲に変換した値"
  Blockly.Msg["TSUMICKY_BASIC_IO_MAP_TOOLTIP"] = "指定した値を、元の範囲から別の範囲へ変換します。"
};
