
export function addBlocks() {
  Blockly.defineBlocksWithJsonArray([
    {
      "type": "max30100_init",
      "message0": "%{BKY_TSUMICKY_MAX30100_INIT}",
      "args0": [
        {
          "type": "field_variable",
          "name": "ws_var",
          "variable": "sock"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 15,
      "tooltip": "%{BKY_TSUMICKY_MAX30100_INIT_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/cmn/ref/sensor/human/max30100/blocks.php#init"
    },
    {
      "type": "max30100_init_wire",
      "message0": "%{BKY_TSUMICKY_MAX30100_INIT_WIRE}",
      "args0": [
        {
          "type": "field_variable",
          "name": "ws_var",
          "variable": "sock"
        },
        {
          "type": "field_number",
          "name": "SDA",
          "value": 21
        },
        {
          "type": "field_number",
          "name": "SCL",
          "value": 22
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 15,
      "tooltip": "%{BKY_TSUMICKY_MAX30100_INIT_WIRE_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/cmn/ref/sensor/human/max30100/blocks.php#init_wire"
    },
    {
      "type": "max30100_read_heartrate",
      "message0": "%{BKY_TSUMICKY_MAX30100_READ_HEARTRATE}",
      "args0": [
        {
          "type": "field_variable",
          "name": "ws_var",
          "variable": "sock"
        }
      ],
      "output": "Number",
      "colour": 15,
      "tooltip": "%{BKY_TSUMICKY_MAX30100_READ_HEARTRATE_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/cmn/ref/sensor/human/max30100/blocks.php#read_heartrate"
    },
    {
      "type": "max30100_read_spo2",
      "message0": "%{BKY_TSUMICKY_MAX30100_READ_SPO2}",
      "args0": [
        {
          "type": "field_variable",
          "name": "ws_var",
          "variable": "sock"
        }
      ],
      "output": "Number",
      "colour": 15,
      "tooltip": "%{BKY_TSUMICKY_MAX30100_READ_SPO2_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/cmn/ref/sensor/human/max30100/blocks.php#read_spo2"
    },
    {
      "type": "max30100_beat_callback",
      "tooltip": "%{BKY_TSUMICKY_MAX30100_BEAT_CALLBACK_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/cmn/ref/sensor/human/max30100/blocks.php#beat_callback",
      "message0": "%{BKY_TSUMICKY_MAX30100_BEAT_CALLBACK}",
      "args0": [
        {
          "type": "field_variable",
          "name": "ws_var",
          "variable": "sock"
        },
        {
          "type": "input_dummy",
          "name": ""
        },
        {
          "type": "input_statement",
          "name": "func"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 15,
      "inputsInline": true
    }
  ]);
}
