export function addBlocks() {
  Blockly.defineBlocksWithJsonArray([
    {
      "type": "bmp280_init",
      "message0": "%{BKY_TSUMICKY_BMP280_INIT}",
      "args0": [
        {
          "type": "field_variable",
          "name": "ws_var",
          "variable": "sock"
        },
        {
          "type": "field_dropdown",
          "name": "i2c",
          "options": [
            [
              "0x76",
              "118"
            ],
            [
              "0x77",
              "119"
            ]
          ]
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 260,
      "tooltip": "%{BKY_TSUMICKY_BMP280_INIT_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/cmn/ref/sensor/tph/bmp280/blocks.php#init"
    },
    {
      "type": "bmp280_init_i2c",
      "message0": "%{BKY_TSUMICKY_BMP280_INIT_I2C}",
      "args0": [
        {
          "type": "field_variable",
          "name": "ws_var",
          "variable": "sock"
        },
        {
          "type": "field_dropdown",
          "name": "i2c",
          "options": [
            [
              "0x76",
              "118"
            ],
            [
              "0x77",
              "119"
            ]
          ]
        },
        {
          "type": "field_number",
          "name": "sda",
          "value": 0,
          "min": 0
        },
        {
          "type": "field_number",
          "name": "scl",
          "value": 0,
          "min": 0
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 260,
      "tooltip": "%{BKY_TSUMICKY_BMP280_INIT_I2C_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/cmn/ref/sensor/tph/bmp280/blocks.php#init_i2c"
    },
    {
      "type": "bmp280_temperature",
      "message0": "%{BKY_TSUMICKY_BMP280_TEMPERATURE}",
      "args0": [
        {
          "type": "field_variable",
          "name": "ws_var",
          "variable": "sock"
        }
      ],
      "inputsInline": true,
      "output": "Number",
      "colour": 260,
      "tooltip": "%{BKY_TSUMICKY_BMP280_TEMPERATURE_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/cmn/ref/sensor/tph/bmp280/blocks.php#temperature"
    },
    {
      "type": "bmp280_pressure",
      "message0": "%{BKY_TSUMICKY_BMP280_PRESSURE}",
      "args0": [
        {
          "type": "field_variable",
          "name": "ws_var",
          "variable": "sock"
        }
      ],
      "inputsInline": true,
      "output": "Number",
      "colour": 260,
      "tooltip": "%{BKY_TSUMICKY_BMP280_PRESSURE_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/cmn/ref/sensor/tph/bmp280/blocks.php#pressure"
    }
  ]);
};
