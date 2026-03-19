import { matrix_common_msgs } from "../matrix_common/en.js"

export function addMessages() {
  matrix_common_msgs();
  Blockly.Msg.TSUMICKY_UNOR4WIFI_MATRIX_INIT_TOOLTIP = 'Initialize the LED matrix of the Arduino UNO R4 WiFi.';
  Blockly.Msg.TSUMICKY_UNOR4WIFI_MATRIX_CLEAR_TOOLTIP = 'Clear the LED matrix of the Arduino UNO R4 WiFi.';
}
