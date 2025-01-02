export function addBlocks() {
  Blockly.defineBlocksWithJsonArray([
    {
      "type": "mpl_pyplot_subplots",
      "tooltip": "%{BKY_TSUMICKY_CATEGORY_MPL_PYPLOT_SUBPLOTS_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.net/tsumicky/cmn/ref/matplotlib/basic/blocks.php#subplots",
      "message0": "%{BKY_TSUMICKY_CATEGORY_MPL_PYPLOT_SUBPLOTS}",
      "args0": [
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
          "name": "width",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "height",
          "check": "Number"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 15,
      "inputsInline": true
    },
    {
      "type": "mpl_pyplot_show",
      "tooltip": "%{BKY_TSUMICKY_CATEGORY_MPL_PYPLOT_SHOW_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.net/tsumicky/cmn/ref/matplotlib/basic/blocks.php#show",
      "message0": "%{BKY_TSUMICKY_CATEGORY_MPL_PYPLOT_SHOW}",
      "args0": [
        {
          "type": "input_dummy",
          "name": ""
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 15
    },       
    {
      "type": "mpl_pyplot_draw",
      "tooltip": "%{BKY_TSUMICKY_CATEGORY_MPL_PYPLOT_DRAW_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.net/tsumicky/cmn/ref/matplotlib/basic/blocks.php#draw",
      "message0": "%{BKY_TSUMICKY_CATEGORY_MPL_PYPLOT_DRAW}",
      "args0": [
        {
          "type": "input_dummy",
          "name": ""
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 15
    },       
    {
      "type": "mpl_pyplot_pause",
      "tooltip": "%{BKY_TSUMICKY_CATEGORY_MPL_PYPLOT_PAUSE_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.net/tsumicky/cmn/ref/matplotlib/basic/blocks.php#pause",
      "message0": "%{BKY_TSUMICKY_CATEGORY_MPL_PYPLOT_PAUSE}",
      "args0": [
        {
          "type": "input_dummy",
          "name": ""
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 15
    },
    {
      "type": "mpl_pyplot_cla",
      "tooltip": "%{BKY_TSUMICKY_CATEGORY_MPL_PYPLOT_CLA_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.net/tsumicky/cmn/ref/matplotlib/basic/blocks.php#cla",
      "message0": "%{BKY_TSUMICKY_CATEGORY_MPL_PYPLOT_CLA}",
      "args0": [
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
          "type": "input_dummy",
          "name": ""
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 15,
      "inputsInline": true
    },
    {
      "type": "mpl_pyplot_close",
      "tooltip": "%{BKY_TSUMICKY_CATEGORY_MPL_PYPLOT_CLOSE_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.net/tsumicky/cmn/ref/matplotlib/basic/blocks.php#close",
      "message0": "%{BKY_TSUMICKY_CATEGORY_MPL_PYPLOT_CLOSE}",
      "args0": [
        {
          "type": "input_dummy",
          "name": ""
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 15
    }
  ]);
};