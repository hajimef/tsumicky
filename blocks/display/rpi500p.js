export function addBlocks() {
  Blockly.defineBlocksWithJsonArray([
    {
      "type": "rpi500p_kbled_init",
      "tooltip": "%{BKY_TSUMICKY_RPI500P_KBLED_INIT_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/cmn/ref/display/rpi500p/blocks.php#init",
      "message0": "%{BKY_TSUMICKY_RPI500P_KBLED_INIT_MESSAGE}",
      "args0": [
        {
          "type": "field_variable",
          "name": "ws_var",
          "variable": "sock"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 165,
      "inputsInline": true
    },
    {
      "type": "rpi500p_kbled_set",
      "tooltip": "%{BKY_TSUMICKY_RPI500P_KBLED_SET_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/cmn/ref/display/rpi500p/blocks.php#set",
      "message0": "%{BKY_TSUMICKY_RPI500P_KBLED_SET_MESSAGE}",
      "args0": [
        {
          "type": "field_variable",
          "name": "ws_var",
          "variable": "sock"
        },
        {
          "type": "input_value",
          "name": "row",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "col",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "color",
          "check": "Colour"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 165,
      "inputsInline": true
    },
    {
      "type": "rpi500p_kbled_show",
      "tooltip": "%{BKY_TSUMICKY_RPI500P_KBLED_SHOW_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/cmn/ref/display/rpi500p/blocks.php#show",
      "message0": "%{BKY_TSUMICKY_RPI500P_KBLED_SHOW_MESSAGE}",
      "args0": [
        {
          "type": "field_variable",
          "name": "ws_var",
          "variable": "sock"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 165,
      "inputsInline": true
    },
    {
      "type": "rpi500p_kbled_buf_clear",
      "tooltip": "%{BKY_TSUMICKY_RPI500P_KBLED_BUF_CLEAR_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/cmn/ref/display/rpi500p/blocks.php#buf_clear",
      "message0": "%{BKY_TSUMICKY_RPI500P_KBLED_BUF_CLEAR_MESSAGE}",
      "args0": [
        {
          "type": "field_variable",
          "name": "ws_var",
          "variable": "sock"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 165,
      "inputsInline": true
    },
    {
      "type": "rpi500p_kbled_clear",
      "tooltip": "%{BKY_TSUMICKY_RPI500P_KBLED_CLEAR_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/cmn/ref/display/rpi500p/blocks.php#clear",
      "message0": "%{BKY_TSUMICKY_RPI500P_KBLED_CLEAR_MESSAGE}",
      "args0": [
        {
          "type": "field_variable",
          "name": "ws_var",
          "variable": "sock"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 165,
      "inputsInline": true
    }
  ]);
};

