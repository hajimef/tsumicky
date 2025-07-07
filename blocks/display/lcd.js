export function addBlocks() {
  Blockly.defineBlocksWithJsonArray([
    {
      "type": "lcd_init",
      "tooltip": "%{BKY_TSUMICKY_LCD_INIT_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/cmn/ref/display/lcd/blocks.php#init",
      "message0": "%{BKY_TSUMICKY_LCD_INIT}",
      "args0": [
        {
          "type": "field_variable",
          "name": "ws_var",
          "variable": "sock"
        },
        {
          "type": "field_dropdown",
          "name": "rc",
          "options": [
            [
              "16X2",
              "0"
            ],
            [
              "20X4",
              "1"
            ]
          ]
        },
        {
          "type": "field_dropdown",
          "name": "i2c_address",
          "options": [
            [
              "0x27",
              "0"
            ],
            [
              "0x3f",
              "1"
            ]
          ]
        },
        {
          "type": "input_dummy",
          "name": ""
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 285,
      "inputsInline": true
    },
    {
      "type": "lcd_init_i2c",
      "tooltip": "%{BKY_TSUMICKY_LCD_INIT_I2C_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/cmn/ref/display/lcd/blocks.php#init_i2c",
      "message0": "%{BKY_TSUMICKY_LCD_INIT_I2C}",
      "args0": [
        {
          "type": "field_variable",
          "name": "ws_var",
          "variable": "sock"
        },
        {
          "type": "field_dropdown",
          "name": "rc",
          "options": [
            [
              "16X2",
              "0"
            ],
            [
              "20X4",
              "1"
            ]
          ]
        },
        {
          "type": "field_dropdown",
          "name": "i2c_address",
          "options": [
            [
              "0x27",
              "0"
            ],
            [
              "0x3F",
              "1"
            ]
          ]
        },
        {
          "type": "field_number",
          "name": "sda",
          "value": 0,
          "min": 0
        },
        {
          "type": "field_number",
          "name": "scl",
          "value": 0,
          "min": 0
        },
        {
          "type": "input_dummy",
          "name": ""
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 285,
      "inputsInline": true
    },
    {
      "type": "lcd_clear",
      "tooltip": "%{BKY_TSUMICKY_LCD_CLEAR_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/cmn/ref/display/lcd/blocks.php#clear",
      "message0": "%{BKY_TSUMICKY_LCD_CLEAR}",
      "args0": [
        {
          "type": "field_variable",
          "name": "ws_var",
          "variable": "sock"
        },
        {
          "type": "input_dummy",
          "name": ""
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 285,
      "inputsInline": true
    },
    {
      "type": "lcd_cursor_pos",
      "tooltip": "%{BKY_TSUMICKY_LCD_CURSOR_POS_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/cmn/ref/display/lcd/blocks.php#cursor_pos",
      "message0": "%{BKY_TSUMICKY_LCD_CURSOR_POS}",
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
          "name": "x",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "y",
          "check": "Number"
        },
        {
          "type": "input_dummy",
          "name": ""
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 285,
      "inputsInline": true
    },
    {
      "type": "lcd_print",
      "tooltip": "%{BKY_TSUMICKY_LCD_PRINT_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/cmn/ref/display/lcd/blocks.php#print",
      "message0": "%{BKY_TSUMICKY_LCD_PRINT}",
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
          "name": "text"
        },
        {
          "type": "input_dummy",
          "name": ""
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 285,
      "inputsInline": true
    }     
  ]);
};

