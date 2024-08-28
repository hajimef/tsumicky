export function addMessages() {
  Blockly.Msg["TSUMICKY_DHT_INIT"] = "%1 の %2 を初期化する：データ %3 番ピン";
  Blockly.Msg["TSUMICKY_DHT_INIT_TOOLTIP"] = "温度・湿度センサーのDHT11/DHT22を初期化します。";
  Blockly.Msg["TSUMICKY_DHT_TEMPERATURE"] = "%1 のDHT11/22の温度";
  Blockly.Msg["TSUMICKY_DHT_TEMPERATURE_TOOLTIP"] = "DHT11/22の温度を取得します。";
  Blockly.Msg["TSUMICKY_DHT_HUMIDITY"] = "%1 のDHT11/22の湿度";
  Blockly.Msg["TSUMICKY_DHT_HUMIDITY_TOOLTIP"] = "DHT11/22の湿度を取得します。";
};
