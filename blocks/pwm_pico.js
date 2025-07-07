export function addBlocks() {
  Blockly.defineBlocksWithJsonArray([
    {
      "type": "pwm_pico_setup",
      "message0": "%{BKY_TSUMICKY_PWM_PICO_SETUP}",
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
          "name": "freq",
          "check": "Number"
        },
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 210,
      "tooltip": "%{BKY_TSUMICKY_PWM_PICO_SETUP_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/cmn/ref/pwm/pico.php#setup"
    },
    {
      "type": "pwm_pico_analog_write",
      "message0": "%{BKY_TSUMICKY_PWM_PICO_ANALOG_WRITE}",
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
          "name": "duty",
          "check": "Number"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 210,
      "tooltip": "%{BKY_TSUMICKY_PWM_PICO_ANALOG_WRITE_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/cmn/ref/pwm/pico.php#write"
    }
  ]);
};
