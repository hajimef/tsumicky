export function addMessages() {
  Blockly.Msg["TSUMICKY_CATEGORY_BASIC"] = "基本";
  Blockly.Msg["TSUMICKY_BASIC_MAIN"] = "初期化 %1 %2 繰り返す %3 %4 終了時 %5 %6";
  Blockly.Msg["TSUMICKY_BASIC_MAIN_TOOLTIP"] = "「初期化」の部分には、初期化の際に行うブロックを入れます。\n「繰り返す」の部分には、繰り返し実行するブロックを入れます。\n「終了」の部分には、プログラム終了時に行うブロックを入れます。";
  Blockly.Msg["TSUMICKY_BASIC_NORMAL_MAIN"] = "処理 %1 %2";
  Blockly.Msg["TSUMICKY_BASIC_NORMAL_MAIN_TOOLTIP"] = "このブロックの中に、行いたい処理のブロックを入れます。";
  Blockly.Msg["TSUMICKY_BASIC_FORMAT_FLOAT"] = "%1 を全 %2 桁、小数点以下 %3 桁に変換した文字列 %4";
  Blockly.Msg["TSUMICKY_BASIC_FORMAT_FLOAT_TOOLTIP"] = "小数点以下を含む数値を、指定した桁数にした文字列に変換します。";
  Blockly.Msg["TSUMICKY_BASIC_CONSOLE_LOG"] = "コンソールに %1 %2 を出力する";
  Blockly.Msg["TSUMICKY_BASIC_CONSOLE_LOG_TOOLTIP"] = "Webブラウザのコンソールに文字などを出力します。";
  Blockly.Msg["TSUMICKY_BASIC_SLEEP"] = "%1 ミリ秒待つ";
  Blockly.Msg["TSUMICKY_BASIC_SLEEP_TOOLTIP"] = "指定した時間、プログラムの実行を止めます。\n単位はミリ秒(=1/1000秒)です。";
  Blockly.Msg["TSUMICKY_BASIC_END"] = "プログラムを終了する";
  Blockly.Msg["TSUMICKY_BASIC_END_TOOLTIP"] = "プログラムの実行を終了します。";
};
