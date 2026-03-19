export function addBlocks() {
  Blockly.defineBlocksWithJsonArray([
    {
      "type": "pwm_unor4wifi_analog_write",
      "message0": "%{BKY_TSUMICKY_PWM_UNOR4WIFI_ANALOG_WRITE}",
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
      "tooltip": "%{BKY_TSUMICKY_PWM_UNOR4WIFI_ANALOG_WRITE_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/cmn/ref/pwm/unor4wifi.php#write"
    }
  ]);
};
