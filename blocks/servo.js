export function addBlocks() {
  Blockly.defineBlocksWithJsonArray([
    {
      "type": "servo_attach",
      "message0": "%{BKY_TSUMICKY_SERVO_ATTACH}",
      "args0": [
        {
          "type": "field_variable",
          "name": "ws_name",
          "variable": "sock"
        },
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value",
          "name": "servo_no",
          "check": "Number"
        },
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value",
          "name": "pmin",
          "check": "Number"
        },
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value",
          "name": "pmax",
          "check": "Number"
        },
        {
          "type": "field_variable",
          "name": "pin_name",
          "variable": "pin"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 260,
      "tooltip": "%{BKY_TSUMICKY_SERVO_ATTACH_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/cmn/ref/servo/blocks.php#attach"
    },
    {
      "type": "servo_write",
      "message0": "%{BKY_TSUMICKY_SERVO_WRITE}",
      "args0": [
        {
          "type": "field_variable",
          "name": "ws_name",
          "variable": "sock"
        },
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value",
          "name": "servo_no",
          "check": "Number"
        },
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value",
          "name": "angle",
          "check": "Number"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 260,
      "tooltip": "%{BKY_TSUMICKY_SERVO_WRITE_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/cmn/ref/servo/blocks.php#write"
    }
  ]);
};

