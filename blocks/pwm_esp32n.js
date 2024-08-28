export function addBlocks() {
  Blockly.defineBlocksWithJsonArray([
    {
      "type": "pwm_esp32n_attach",
      "tooltip": "%{BKY_TSUMICKY_PWM_ESP32N_ATTACH_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.net/tsumicky/cmn/ref/pwm/esp32n.php#setup",
      "message0": "%{BKY_TSUMICKY_PWM_ESP32N_ATTACH}",
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
          "type": "input_dummy",
          "name": ""
        },
        {
          "type": "input_value",
          "name": "freq",
          "check": "Number"
        },
        {
          "type": "input_dummy",
          "name": ""
        },
        {
          "type": "input_value",
          "name": "bit",
          "check": "Number"
        },
        {
          "type": "input_dummy",
          "name": ""
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "inputsInline": true,
      "colour": 210
    },
    {
      "type": "pwm_esp32n_write",
      "tooltip": "%{BKY_TSUMICKY_PWM_ESP32N_WRITE_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.net/tsumicky/cmn/ref/pwm/esp32n.php#write",
      "message0": "%{BKY_TSUMICKY_PWM_ESP32N_WRITE}",
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
          "type": "input_dummy",
          "name": ""
        },
        {
          "type": "input_value",
          "name": "duty",
          "check": "Number"
        },
        {
          "type": "input_dummy",
          "name": ""
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 210,
      "inputsInline": true
    }
  ]);
}
