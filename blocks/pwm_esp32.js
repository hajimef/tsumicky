export function addBlocks() {
  Blockly.defineBlocksWithJsonArray([
    {
      "type": "pwm_esp32_setup",
      "message0": "%{BKY_TSUMICKY_PWM_ESP32_SETUP}",
      "args0": [
        {
          "type": "field_variable",
          "name": "ws_var",
          "variable": "sock"
        },
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value",
          "name": "ch",
          "check": "Number",
          "min": 0,
          "max": 15
        },
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value",
          "name": "freq"
        },
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value",
          "name": "bit",
          "check": "Number",
          "min": 4,
          "max": 15
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 210,
      "tooltip": "%{BKY_TSUMICKY_PWM_ESP32_SETUP_TOOLTIP}",
      "helpUrl": ""
    },
    {
      "type": "pwm_esp32_attach_pin",
      "message0": "%{BKY_TSUMICKY_PWM_ESP32_ATTACH_PIN}",
      "args0": [
        {
          "type": "field_variable",
          "name": "ws_var",
          "variable": "sock"
        },
        {
          "type": "field_variable",
          "name": "pin_var",
          "variable": "pin"
        },
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value",
          "name": "ch",
          "check": "Number"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 210,
      "tooltip": "%{BKY_TSUMICKY_PWM_ESP32_ATTACH_PIN_TOOLTIP}",
      "helpUrl": ""
    },
    {
      "type": "pwm_esp32_write",
      "message0": "%{BKY_TSUMICKY_PWM_ESP32_WRITE}",
      "args0": [
        {
          "type": "field_variable",
          "name": "ws_var",
          "variable": "sock"
        },
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value",
          "name": "ch",
          "check": "Number"
        },
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value",
          "name": "duty",
          "check": "Number"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 210,
      "tooltip": "%{BKY_TSUMICKY_PWM_ESP32_WRITE_TOOLTIP}",
      "helpUrl": ""
    }
  ]);
}
