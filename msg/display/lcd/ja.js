export function addMessages() {
  Blockly.Msg["TSUMICKY_LCD_INIT"] = "%1 の %2 LCDを初期化する:I2Cアドレス %3 %4";
  Blockly.Msg["TSUMICKY_LCD_INIT_TOOLTIP"] = "I2C接続のキャラクタディスプレイを初期化します。\nディスプレイによってI2Cのアドレスが異なりますので、ディスプレイに合った値を設定します。";
  Blockly.Msg["TSUMICKY_LCD_INIT_I2C"] = "%1 の %2 のLCDを初期化する:I2Cアドレス %3 SDA %4 番ピン SCL %5 番ピン %6";
  Blockly.Msg["TSUMICKY_LCD_INIT_I2C_TOOLTIP"] = "SDA/SCLのピン番号を指定して、I2C接続のキャラクタディスプレイを初期化します。\nディスプレイによってI2Cのアドレスが異なりますので、ディスプレイに合った値を設定します。";
  Blockly.Msg["TSUMICKY_LCD_CLEAR"] = "%1 のLCDをクリアする %2";
  Blockly.Msg["TSUMICKY_LCD_CLEAR_TOOLTIP"] = "キャラクタディスプレイの表示内容をクリアします。";
  Blockly.Msg["TSUMICKY_LCD_CURSOR_POS"] = "%1 のLCDのカーソル位置を %2 X %3 Y %4 に設定する %5";
  Blockly.Msg["TSUMICKY_LCD_CURSOR_POS_TOOLTIP"] = "キャラクタディスプレイのカーソル位置を表示します。\n左上を原点とし、X／Yともに0から数えます。";
  Blockly.Msg["TSUMICKY_LCD_PRINT"] = "%1 のLCDに %2 %3 と表示する %4";
  Blockly.Msg["TSUMICKY_LCD_PRINT_TOOLTIP"] = "キャラクタディスプレイに文字列を表示します。";
};
