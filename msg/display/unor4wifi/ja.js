import { matrix_common_msgs } from "../matrix_common/ja.js"

export function addMessages() {
  matrix_common_msgs();
  Blockly.Msg.TSUMICKY_UNOR4WIFI_MATRIX_INIT_TOOLTIP = 'Arduino UNO R4 WiFiのLEDマトリックスを初期化します。';
  Blockly.Msg.TSUMICKY_UNOR4WIFI_MATRIX_CLEAR_TOOLTIP = 'Arduino UNO R4 WiFiのLEDマトリックスの表示をクリアします。';
}
