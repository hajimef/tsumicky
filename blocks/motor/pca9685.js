export function addBlocks() {
  Blockly.defineBlocksWithJsonArray([
    {
      "type": "pca9685_init",
      "message0": "%{BKY_TSUMICKY_PCA9685_INIT}",
      "args0": [
        {
          "type": "field_variable",
          "name": "ws_var",
          "variable": "sock"
        },
        {
          "type": "input_value",
          "name": "i2c_address",
          "check": "Number"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 225,
      "tooltip": "%{BKY_TSUMICKY_PCA9685_INIT_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/cmn/ref/motor/pca9685/blocks.php#init"
    },
    {
      "type": "pca9685_init_i2c",
      "message0": "%{BKY_TSUMICKY_PCA9685_INIT_I2C}",
      "args0": [
        {
          "type": "field_variable",
          "name": "ws_var",
          "variable": "sock"
        },
        {
          "type": "input_value",
          "name": "i2c_address",
          "check": "Number"
        },
        {
          "type": "field_number",
          "name": "sda",
          "check": "Number"
        },
        {
          "type": "field_number",
          "name": "scl",
          "check": "Number"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 225,
      "tooltip": "%{BKY_TSUMICKY_PCA9685_INIT_I2C_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/cmn/ref/motor/pca9685/blocks.php#init_i2c"
    },
    {
      "type": "pca9685_pulse_range",
      "tooltip": "%{BKY_TSUMICKY_PCA9685_PULSE_RANGE_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/cmn/ref/motor/pca9685/blocks.php#pulse_range",
      "message0": "%{BKY_TSUMICKY_PCA9685_PULSE_RANGE}",
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
          "type": "input_value",
          "name": "channel",
          "check": "Number"
        },
        {
          "type": "input_dummy",
          "name": ""
        },
        {
          "type": "input_value",
          "name": "min_pulse",
          "check": "Number"
        },
        {
          "type": "input_dummy",
          "name": ""
        },
        {
          "type": "input_value",
          "name": "max_pulse",
          "check": "Number"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 225,
      "inputsInline": true
    },
    {
      "type": "pca9685_set_servo",
      "message0": "%{BKY_TSUMICKY_PCA9685_SET_SERVO}",
      "args0": [
        {
          "type": "field_variable",
          "name": "ws_var",
          "variable": "sock"
        },
        {
          "type": "input_value",
          "name": "channel",
          "check": "Number"
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
      "colour": 225,
      "tooltip": "%{BKY_TSUMICKY_PCA9685_SET_SERVO_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/cmn/ref/motor/pca9685/blocks.php#set_servo"
    }
  ]);
}
