import { matrix_common_msgs } from "../matrix_common/ja.js"

export function addMessages() {
  matrix_common_msgs();
  Blockly.Msg.TSUMICKY_UNOQ_MATRIX_INIT_TITLE = '%1 のLEDマトリックスとRGB LEDを初期化';
  Blockly.Msg.TSUMICKY_UNOQ_MATRIX_INIT_TOOLTIP = 'Arduino UNO QのLEDマトリックスとRGB LEDを初期化します。';
  Blockly.Msg.TSUMICKY_UNOQ_MATRIX_CLEAR_TOOLTIP = 'Arduino UNO QのLEDマトリックスの表示をクリアします。';
  Blockly.Msg.TSUMICKY_UNOQ_MATRIX_SHOW_BITMAP_TOOLTIP = 'LEDマトリックスに13x8のビットマップを表示します。';
  Blockly.Msg.TSUMICKY_UNOQ_MATRIX_SHOW_GRAYSCALE_BITMAP_TITLE = '%1 のLEDマトリックスにグレースケールのビットマップ %2 を表示';
  Blockly.Msg.TSUMICKY_UNOQ_MATRIX_SHOW_GRAYSCALE_BITMAP_TOOLTIP = 'Arduino UNO QのLEDマトリックスにグレースケールの画像を表示します。';
  Blockly.Msg.TSUMICKY_UNOQ_MATRIX_SCROLL_TEXT_TIMEOUT = 'タイムアウト %1 秒';
  Blockly.Msg.TSUMICKY_UNOQ_RGB_LED_TITLE = '%1 の %2 番のオンボードRGB LEDを %3 にする';
  Blockly.Msg.TSUMICKY_UNOQ_RGB_LED_TOOLTIP = 'Arduino UNO QのオンボードRGB LEDを点灯します。';
  Blockly.Msg.TSUMICKY_UNOQ_RGB_LED_COLOR_TOOLTIP = 'Arduino UNO QのオンボードRGB LEDに設定できる色です。';
  Blockly.Msg.TSUMICKY_UNOQ_RGB_LED_NUMBER_TOOLTIP = 'Arduino UNO QのオンボードRGB LEDの番号です。';
  Blockly.Msg.TSUMICKY_UNOQ_RGB_LED_BLACK = '黒';
  Blockly.Msg.TSUMICKY_UNOQ_RGB_LED_BLUE = '青';
  Blockly.Msg.TSUMICKY_UNOQ_RGB_LED_RED = '赤';
  Blockly.Msg.TSUMICKY_UNOQ_RGB_LED_MAGENTA = '紫';
  Blockly.Msg.TSUMICKY_UNOQ_RGB_LED_GREEN = '緑';
  Blockly.Msg.TSUMICKY_UNOQ_RGB_LED_CYAN = '水色';
  Blockly.Msg.TSUMICKY_UNOQ_RGB_LED_YELLOW = '黄色';
  Blockly.Msg.TSUMICKY_UNOQ_RGB_LED_WHITE = '白';
}
