export function addBlocks() {
  Blockly.defineBlocksWithJsonArray([
    {
      "type": "dht_init",
      "message0": "%{BKY_TSUMICKY_DHT_INIT}",
      "args0": [
        {
          "type": "field_variable",
          "name": "ws_var",
          "variable": "sock"
        },
        {
          "type": "field_dropdown",
          "name": "type",
          "options": [
            [
              "DHT11",
              "0"
            ],
            [
              "DHT22",
              "1"
            ]
          ]
        },
        {
          "type": "field_number",
          "name": "pin",
          "value": 0,
          "min": 0
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 230,
      "tooltip": "%{BKY_TSUMICKY_DHT_INIT_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/cmn/ref/sensor/tph/dht/blocks.php#init"
    },
    {
      "type": "dht_temperature",
      "message0": "%{BKY_TSUMICKY_DHT_TEMPERATURE}",
      "args0": [
        {
          "type": "field_variable",
          "name": "ws_var",
          "variable": "sock"
        }
      ],
      "inputsInline": true,
      "output": "Number",
      "colour": 230,
      "tooltip": "%{BKY_TSUMICKY_DHT_TEMPERATURE_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/cmn/ref/sensor/tph/dht/blocks.php#temperature"
    },
    {
      "type": "dht_humidity",
      "message0": "%{BKY_TSUMICKY_DHT_HUMIDITY}",
      "args0": [
        {
          "type": "field_variable",
          "name": "ws_var",
          "variable": "sock"
        }
      ],
      "inputsInline": true,
      "output": "Number",
      "colour": 230,
      "tooltip": "%{BKY_TSUMICKY_DHT_HUMIDITY_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/cmn/ref/sensor/tph/dht/blocks.php#humidity"
    }
  ]);
};

