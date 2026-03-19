import { matrix_common_msgs } from "../matrix_common/en.js"

export function addMessages() {
  matrix_common_msgs();
  Blockly.Msg.TSUMICKY_UNOQ_MATRIX_INIT_TITLE = 'initialize LED matrix and RGB LED of %1';
  Blockly.Msg.TSUMICKY_UNOQ_MATRIX_INIT_TOOLTIP = 'Initialize the LED matrix of the Arduino UNO Q.';
  Blockly.Msg.TSUMICKY_UNOQ_MATRIX_CLEAR_TOOLTIP = 'Clear the LED matrix of the Arduino UNO Q.';
  Blockly.Msg.TSUMICKY_UNOQ_MATRIX_SHOW_BITMAP_TOOLTIP = 'Display a 12x8 bitmap on the LED matrix.';
  Blockly.Msg.TSUMICKY_UNOQ_MATRIX_SHOW_GRAYSCALE_BITMAP_TITLE = 'show grayscake bitmap %2 on LED matrix %1';
  Blockly.Msg.TSUMICKY_UNOQ_MATRIX_SHOW_GRAYSCALE_BITMAP_TOOLTIP = 'Display a grayscale image on the Arduino UNO Q LED matrix.';
  Blockly.Msg.TSUMICKY_UNOQ_MATRIX_SCROLL_TEXT_TIMEOUT = 'timeout %1 seconds';
  Blockly.Msg.TSUMICKY_UNOQ_RGB_LED_TITLE = 'set onboard RGB LED of %1 number %2 to %3';
  Blockly.Msg.TSUMICKY_UNOQ_RGB_LED_TOOLTIP = 'Light up the onboard RGB LED on the Arduino UNO Q.';
  Blockly.Msg.TSUMICKY_UNOQ_RGB_LED_COLOR_TOOLTIP = 'Colors that can be set for the Arduino UNO Q\'s onboard RGB LED.';
  Blockly.Msg.TSUMICKY_UNOQ_RGB_LED_NUMBER_TOOLTIP = 'Number of the onboard RGB LEDs on the Arduino UNO Q.';
  Blockly.Msg.TSUMICKY_UNOQ_RGB_LED_BLACK = 'black';
  Blockly.Msg.TSUMICKY_UNOQ_RGB_LED_BLUE = 'blue';
  Blockly.Msg.TSUMICKY_UNOQ_RGB_LED_RED = 'red';
  Blockly.Msg.TSUMICKY_UNOQ_RGB_LED_MAGENTA = 'magenta';
  Blockly.Msg.TSUMICKY_UNOQ_RGB_LED_GREEN = 'green';
  Blockly.Msg.TSUMICKY_UNOQ_RGB_LED_CYAN = 'cyan';
  Blockly.Msg.TSUMICKY_UNOQ_RGB_LED_YELLOW = 'yellow';
  Blockly.Msg.TSUMICKY_UNOQ_RGB_LED_WHITE = 'white';
}
