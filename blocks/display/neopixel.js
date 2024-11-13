export function addBlocks() {
  Blockly.defineBlocksWithJsonArray([
    {
      "type": "neopixel_init",
      "message0": "%{BKY_TSUMICKY_NEOPIXEL_INIT}",
      "args0": [
        {
          "type": "field_variable",
          "name": "ws_var",
          "variable": "sock"
        },
        {
          "type": "field_dropdown",
          "name": "no",
          "options": [
            [
              "1",
              "0"
            ],
            [
              "2",
              "1"
            ],
            [
              "3",
              "2"
            ],
            [
              "4",
              "3"
            ],
            [
              "5",
              "4"
            ]
          ]
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
          "name": "numpixels",
          "check": "Number"
        },
        {
          "type": "field_dropdown",
          "name": "color_order",
          "options": [
            [
              "RGB",
              "0"
            ],
            [
              "GRB",
              "1"
            ],
            [
              "RBG",
              "2"
            ],
            [
              "GBR",
              "3"
            ],
            [
              "BRG",
              "4"
            ],
            [
              "BGR",
              "5"
            ]
          ]
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 20,
      "tooltip": "%{BKY_TSUMICKY_NEOPIXEL_INIT_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.net/tsumicky/cmn/ref/display/neopixel/blocks.php#init"
    },
    {
      "type": "neopixel_set_pixel_color",
      "message0": "%{BKY_TSUMICKY_NEOPIXEL_SET_PIXEL_COLOR}",
      "args0": [
        {
          "type": "field_variable",
          "name": "ws_var",
          "variable": "sock"
        },
        {
          "type": "field_dropdown",
          "name": "no",
          "options": [
            [
              "1",
              "0"
            ],
            [
              "2",
              "1"
            ],
            [
              "3",
              "2"
            ],
            [
              "4",
              "3"
            ],
            [
              "5",
              "4"
            ]
          ]
        },
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value",
          "name": "p_no",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "color"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 20,
      "tooltip": "%{BKY_TSUMICKY_NEOPIXEL_SET_PIXEL_COLOR_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.net/tsumicky/cmn/ref/display/neopixel/blocks.php#set_pixel_color"
    },
    {
      "type": "neopixel_set_all_pixel_color",
      "message0": "%{BKY_TSUMICKY_NEOPIXEL_SET_ALL_PIXEL_COLOR}",
      "args0": [
        {
          "type": "field_variable",
          "name": "ws_var",
          "variable": "sock"
        },
        {
          "type": "field_dropdown",
          "name": "no",
          "options": [
            [
              "1",
              "0"
            ],
            [
              "2",
              "1"
            ],
            [
              "3",
              "2"
            ],
            [
              "4",
              "3"
            ],
            [
              "5",
              "4"
            ]
          ]
        },
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value",
          "name": "color"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 20,
      "tooltip": "%{BKY_TSUMICKY_NEOPIXEL_SET_ALL_PIXEL_COLOR_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.net/tsumicky/cmn/ref/display/neopixel/blocks.php#set_all_pixel_color"
    },
    {
      "type": "neopixel_show",
      "message0": "%{BKY_TSUMICKY_NEOPIXEL_SHOW}",
      "args0": [
        {
          "type": "field_variable",
          "name": "ws_var",
          "variable": "sock"
        },
        {
          "type": "field_dropdown",
          "name": "no",
          "options": [
            [
              "1",
              "0"
            ],
            [
              "2",
              "1"
            ],
            [
              "3",
              "2"
            ],
            [
              "4",
              "3"
            ],
            [
              "5",
              "4"
            ]
          ]
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 20,
      "tooltip": "%{BKY_TSUMICKY_NEOPIXEL_SHOW_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.net/tsumicky/cmn/ref/display/neopixel/blocks.php#show"
    }
  ]);
};

