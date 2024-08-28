export function addBlocks() {
  Blockly.defineBlocksWithJsonArray([{
    "type": "basic_io_connect",
    "message0": "%{BKY_TSUMICKY_BASIC_IO_CONNECT}",
    "args0": [
      {
        "type": "input_value",
        "name": "host",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "port",
        "check": "Number"
      },
      {
        "type": "field_dropdown",
        "name": "prot",
        "options": [
          [
            "ws",
            "ws"
          ],
          [
            "wss",
            "wss"
          ]
        ]
      },
      {
        "type": "field_variable",
        "name": "var_name",
        "variable": "sock"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 65,
    "tooltip": "%{BKY_TSUMICKY_BASIC_IO_CONNECT_TOOLTIP}",
    "helpUrl": "https://www.hfchannel.net/tsumicky/cmn/ref/basic-io/blocks.php#connect"
  },
  {
    "type": "basic_io_model_name",
    "message0": "%{BKY_TSUMICKY_BASIC_IO_MODELNAME}",
    "args0": [
      {
        "type": "field_variable",
        "name": "ws_var",
        "variable": "sock"
      }
    ],
    "output": "String",
    "colour": 65,
    "tooltip": "%{BKY_TSUMICKY_BASIC_IO_MODELNAME_TOOLTIP}",
    "helpUrl": "https://www.hfchannel.net/tsumicky/cmn/ref/basic-io/blocks.php#modelname"
  },
  {
    "type": "basic_io_assign_pin",
    "message0": "%{BKY_TSUMICKY_BASIC_IO_ASSIGN_PIN}",
    "args0": [
      {
        "type": "field_variable",
        "name": "ws_var",
        "variable": "ws"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "pin_no",
        "check": "Number"
      },
      {
        "type": "field_variable",
        "name": "pin_var",
        "variable": "pin"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 65,
    "tooltip": "%{BKY_TSUMICKY_BASIC_IO_ASSIGN_PIN_TOOLTIP}",
    "helpUrl": "https://www.hfchannel.net/tsumicky/cmn/ref/basic-io/blocks.php#assign_pin"
  },
  {
    "type": "basic_io_pinmode",
    "message0": "%{BKY_TSUMICKY_BASIC_IO_PIN_MODE}",
    "args0": [
      {
        "type": "field_variable",
        "name": "pin_var",
        "variable": "pin"
      },
      {
        "type": "field_dropdown",
        "name": "mode",
        "options": [
          [
            "OUTPUT",
            "0"
          ],
          [
            "INPUT",
            "1"
          ],
          [
            "INPUT_PULLUP",
            "2"
          ]
        ]
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 65,
    "tooltip": "%{BKY_TSUMICKY_BASIC_IO_PIN_MODE_TOOLTIP}",
    "helpUrl": "https://www.hfchannel.net/tsumicky/cmn/ref/basic-io/blocks.php#pinmode"
  },
  {
    "type": "basic_io_digital_write",
    "message0": "%{BKY_TSUMICKY_BASIC_IO_DIGITAL_WRITE}",
    "args0": [
      {
        "type": "field_variable",
        "name": "pin",
        "variable": "pin"
      },
      {
        "type": "field_dropdown",
        "name": "hl",
        "options": [
          [
            "HIGH",
            "1"
          ],
          [
            "LOW",
            "0"
          ]
        ]
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 65,
    "tooltip": "%{BKY_TSUMICKY_BASIC_IO_DIGITAL_WRITE_TOOLTIP}",
    "helpUrl": "https://www.hfchannel.net/tsumicky/cmn/ref/basic-io/blocks.php#digital_write"
  },
  {
    "type": "basic_io_digital_read",
    "message0": "%{BKY_TSUMICKY_BASIC_IO_DIGITAL_READ}",
    "args0": [
      {
        "type": "field_variable",
        "name": "pin",
        "variable": "pin"
      }
    ],
    "output": "Number",
    "colour": 65,
    "tooltip": "%{BKY_TSUMICKY_BASIC_IO_DIGITAL_READ_TOOLTIP}",
    "helpUrl": "https://www.hfchannel.net/tsumicky/cmn/ref/basic-io/blocks.php#digital_read"
  },
  {
    "type": "basic_io_analog_read",
    "message0": "%{BKY_TSUMICKY_BASIC_IO_ANALOG_READ}",
    "args0": [
      {
        "type": "field_variable",
        "name": "pin",
        "variable": "pin"
      }
    ],
    "output": "Number",
    "colour": 65,
    "tooltip": "%{BKY_TSUMICKY_BASIC_IO_ANALOG_READ_TOOLTIP}",
    "helpUrl": "https://www.hfchannel.net/tsumicky/cmn/ref/basic-io/blocks.php#analog_read"
  },
  {
    "type": "basic_io_hl",
    "message0": "%1",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "hl_value",
        "options": [
          [
            "HIGH",
            "1"
          ],
          [
            "LOW",
            "0"
          ]
        ]
      }
    ],
    "inputsInline": true,
    "output": "Number",
    "colour": 65,
    "tooltip": "%{BKY_TSUMICKY_BASIC_IO_HL_TOOLTIP}",
    "helpUrl": "https://www.hfchannel.net/tsumicky/cmn/ref/basic-io/blocks.php#high_low"
  },
  {
    "type": "basic_io_map",
    "message0": "%{BKY_TSUMICKY_BASIC_IO_MAP}",
    "args0": [
      {
        "type": "input_value",
        "name": "input",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "input_min"
      },
      {
        "type": "input_value",
        "name": "input_max"
      },
      {
        "type": "input_value",
        "name": "output_min"
      },
      {
        "type": "input_value",
        "name": "output_max"
      }
    ],
    "inputsInline": true,
    "output": "Number",
    "colour": 65,
    "tooltip": "%{BKY_TSUMICKY_BASIC_IO_MAP_TOOLTIP}",
    "helpUrl": "https://www.hfchannel.net/tsumicky/cmn/ref/basic-io/blocks.php#map"
  }]);
};
