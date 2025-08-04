export function addBlocks() {
  Blockly.defineBlocksWithJsonArray([
    {
      "type": "oled_hw_i2c_init",
      "message0": "%{BKY_TSUMICKY_OLED_HW_I2C_INIT}",
      "args0": [
        {
          "type": "field_variable",
          "name": "ws_var",
          "variable": "sock"
        },
        {
          "type": "field_dropdown",
          "name": "type",
          "options": [
            [
              "%{BKY_TSUMICKY_OLED_TYPE_SSD1306_128X64}",
              "0"
            ],
            [
              "%{BKY_TSUMICKY_OLED_TYPE_SSD1306_128X32}",
              "1"
            ],
            [
              "%{BKY_TSUMICKY_OLED_TYPE_SH1106_128X64}",
              "2"
            ]
          ]
        }
      ],
      "colour": 65,
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "tooltip": "%{BKY_TSUMICKY_OLED_HW_I2C_INIT_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/cmn/ref/display/oled/blocks.php#i2c_init"
    },
    {
      "type": "oled_hw_i2c_init_pin",
      "message0": "%{BKY_TSUMICKY_OLED_HW_I2C_INIT_PIN}",
      "args0": [
        {
          "type": "field_variable",
          "name": "ws_var",
          "variable": "sock"
        },
        {
          "type": "field_dropdown",
          "name": "type",
          "options": [
            [
              "%{BKY_TSUMICKY_OLED_TYPE_SSD1306_128X64}",
              "0"
            ],
            [
              "%{BKY_TSUMICKY_OLED_TYPE_SSD1306_128X32}",
              "1"
            ],
            [
              "%{BKY_TSUMICKY_OLED_TYPE_SH1106_128X64}",
              "2"
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
        }
      ],
      "colour": 65,
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "tooltip": "%{BKY_TSUMICKY_OLED_HW_I2C_INIT_PIN_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/cmn/ref/display/oled/blocks.php#i2c_init_pin"
    },
    {
      "type": "oled_hw_spi_init",
      "message0": "%{BKY_TSUMICKY_OLED_HW_SPI_INIT}",
      "args0": [
        {
          "type": "field_variable",
          "name": "ws_var",
          "variable": "sock"
        },
        {
          "type": "field_dropdown",
          "name": "type",
          "options": [
            [
              "%{BKY_TSUMICKY_OLED_TYPE_SSD1306_128X64}",
              "0"
            ],
            [
              "%{BKY_TSUMICKY_OLED_TYPE_SSD1306_128X32}",
              "1"
            ],
            [
              "%{BKY_TSUMICKY_OLED_TYPE_SH1106_128X64}",
              "2"
            ]
          ]
        },
        {
          "type": "field_number",
          "name": "dc",
          "value": 0,
          "min": 0
        },
        {
          "type": "field_number",
          "name": "cs",
          "value": 0,
          "min": 0
        },
        {
          "type": "field_number",
          "name": "res",
          "value": 0,
          "min": 0
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 65,
      "tooltip": "%{BKY_TSUMICKY_OLED_HW_SPI_INIT_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/cmn/ref/display/oled/blocks.php#spi_init"
    },
    {
      "type": "oled_hw_spi_init_pin",
      "message0": "%{BKY_TSUMICKY_OLED_HW_SPI_INIT_PIN}",
      "args0": [
        {
          "type": "field_variable",
          "name": "ws_var",
          "variable": "sock"
        },
        {
          "type": "field_dropdown",
          "name": "type",
          "options": [
            [
              "%{BKY_TSUMICKY_OLED_TYPE_SSD1306_128X64}",
              "0"
            ],
            [
              "%{BKY_TSUMICKY_OLED_TYPE_SSD1306_128X32}",
              "1"
            ],
            [
              "%{BKY_TSUMICKY_OLED_TYPE_SH1106_128X64}",
              "2"
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
          "name": "sck",
          "value": 0,
          "min": 0
        },
        {
          "type": "field_number",
          "name": "dc",
          "value": 0,
          "min": 0
        },
        {
          "type": "field_number",
          "name": "cs",
          "value": 0,
          "min": 0
        },
        {
          "type": "field_number",
          "name": "res",
          "value": 0,
          "min": 0
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 65,
      "tooltip": "%{BKY_TSUMICKY_OLED_HW_SPI_INIT_PIN_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/cmn/ref/display/oled/blocks.php#spi_init_pin"
    },
    {
      "type": "oled_draw_line",
      "message0": "%{BKY_TSUMICKY_OLED_DRAW_LINE}",
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
          "name": "x1",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "y1",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "x2",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "y2",
          "check": "Number"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 65,
      "tooltip": "%{BKY_TSUMICKY_OLED_DRAW_LINE_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/cmn/ref/display/oled/blocks.php#draw_line"
    },
    {
      "type": "oled_draw_frame",
      "message0": "%{BKY_TSUMICKY_OLED_DRAW_FRAME}",
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
          "name": "x",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "y",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "w",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "h",
          "check": "Number"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 65,
      "tooltip": "%{BKY_TSUMICKY_OLED_DRAW_FRAME_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/cmn/ref/display/oled/blocks.php#draw_frame"
      },
      {
        "type": "oled_draw_box",
        "message0": "%{BKY_TSUMICKY_OLED_DRAW_BOX}",
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
            "name": "x",
            "check": "Number"
          },
          {
            "type": "input_value",
            "name": "y",
            "check": "Number"
          },
          {
            "type": "input_value",
            "name": "w",
            "check": "Number"
          },
          {
            "type": "input_value",
            "name": "h",
            "check": "Number"
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": 65,
        "tooltip": "%{BKY_TSUMICKY_OLED_DRAW_BOX_TOOLTIP}",
        "helpUrl": "https://www.hfchannel.site/tsumicky/cmn/ref/display/oled/blocks.php#draw_box"
        },
        {
          "type": "oled_draw_pixel",
          "message0": "%{BKY_TSUMICKY_OLED_DRAW_PIXEL}",
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
              "name": "x",
              "check": "Number"
            },
            {
              "type": "input_value",
              "name": "y",
              "check": "Number"
            }
          ],
          "inputsInline": true,
          "previousStatement": null,
          "nextStatement": null,
          "colour": 65,
          "tooltip": "%{BKY_TSUMICKY_OLED_DRAW_PIXEL_TOOLTIP}",
          "helpUrl": "https://www.hfchannel.site/tsumicky/cmn/ref/display/oled/blocks.php#draw_pixel"
        },
        {
          "type": "oled_draw_circle",
          "message0": "%{BKY_TSUMICKY_OLED_DRAW_CIRCLE}",
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
              "name": "x",
              "check": "Number"
            },
            {
              "type": "input_value",
              "name": "y",
              "check": "Number"
            },
            {
              "type": "input_value",
              "name": "radius",
              "check": "Number"
            }
          ],
          "inputsInline": true,
          "previousStatement": null,
          "nextStatement": null,
          "colour": 65,
          "tooltip": "%{BKY_TSUMICKY_OLED_DRAW_CIRCLE_TOOLTIP}",
          "helpUrl": "https://www.hfchannel.site/tsumicky/cmn/ref/display/oled/blocks.php#draw_circle"
        },
        {
          "type": "oled_draw_disc",
          "message0": "%{BKY_TSUMICKY_OLED_DRAW_DISC}",
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
              "name": "x",
              "check": "Number"
            },
            {
              "type": "input_value",
              "name": "y",
              "check": "Number"
            },
            {
              "type": "input_value",
              "name": "radius",
              "check": "Number"
            }
          ],
          "inputsInline": true,
          "previousStatement": null,
          "nextStatement": null,
          "colour": 65,
          "tooltip": "%{BKY_TSUMICKY_OLED_DRAW_DISC_TOOLTIP}",
          "helpUrl": "https://www.hfchannel.site/tsumicky/cmn/ref/display/oled/blocks.php#draw_disc"
        },
        {
      "type": "oled_set_font",
      "message0": "%{BKY_TSUMICKY_OLED_SET_FONT}",
      "args0": [
        {
          "type": "field_variable",
          "name": "ws_var",
          "variable": "sock"
        },
        {
          "type": "field_dropdown",
          "name": "font",
          "options": [
            [
              "%{BKY_TSUMICKY_OLED_FONT_6X10_TF}",
              "0"
            ],
            [
              "%{BKY_TSUMICKY_OLED_FONT_7X13_TF}",
              "1"
            ],
            [
              "%{BKY_TSUMICKY_OLED_FONT_F10_T_JAPANESE}",
              "1000"
            ],
            [
              "%{BKY_TSUMICKY_OLED_FONT_F12_T_JAPANESE}",
              "1001"
            ],
            [
              "%{BKY_TSUMICKY_OLED_FONT_F16_T_JAPANESE}",
              "1002"
            ]
          ]
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 65,
      "tooltip": "%{BKY_TSUMICKY_OLED_SET_FONT_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/cmn/ref/display/oled/blocks.php#set_font"
    },
    {
      "type": "oled_set_font_rpi",
      "message0": "%{BKY_TSUMICKY_OLED_SET_FONT_RPI}",
      "args0": [
        {
          "type": "field_variable",
          "name": "ws_var",
          "variable": "sock"
        },
        {
          "type": "field_dropdown",
          "name": "font",
          "options": [
            [
              "%{BKY_TSUMICKY_OLED_FONT_DEJAVU_SANS_8}",
              "0"
            ],
            [
              "%{BKY_TSUMICKY_OLED_FONT_DEJAVU_SANS_12}",
              "1"
            ],
            [
              "%{BKY_TSUMICKY_OLED_FONT_DEJAVU_SANS_16}",
              "2"
            ],
            [
              "%{BKY_TSUMICKY_OLED_FONT_IPA_MINCHO_12}",
              "1000"
            ],
            [
              "%{BKY_TSUMICKY_OLED_FONT_IPA_MINCHO_16}",
              "1001"
            ],
            [
              "%{BKY_TSUMICKY_OLED_FONT_IPA_GOTHIC_12}",
              "1100"
            ],
            [
              "%{BKY_TSUMICKY_OLED_FONT_IPA_GOTHIC_16}",
              "1101"
            ]
          ]
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 65,
      "tooltip": "%{BKY_TSUMICKY_OLED_SET_FONT_RPI_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/cmn/ref/display/oled/blocks.php#set_font_rpi"
    },
    {
      "type": "oled_set_cursor",
      "message0": "%{BKY_TSUMICKY_OLED_SET_CURSOR}",
      "args0": [
        {
          "type": "field_variable",
          "name": "ws_var",
          "variable": "sock"
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
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 65,
      "tooltip": "%{BKY_TSUMICKY_OLED_SET_CURSOR_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/cmn/ref/display/oled/blocks.php#set_cursor"
    },
    {
      "type": "oled_print",
      "message0": "%{BKY_TSUMICKY_OLED_PRINT}",
      "args0": [
        {
          "type": "field_variable",
          "name": "ws_var",
          "variable": "sock"
        },
        {
          "type": "input_value",
          "name": "str",
          "check": "String"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 65,
      "tooltip": "%{BKY_TSUMICKY_OLED_PRINT_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/cmn/ref/display/oled/blocks.php#print"
    },
    {
      "type": "oled_send_buffer",
      "message0": "%{BKY_TSUMICKY_OLED_SEND_BUFFER}",
      "args0": [
        {
          "type": "field_variable",
          "name": "ws_var",
          "variable": "sock"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 65,
      "tooltip": "%{BKY_TSUMICKY_OLED_SEND_BUFFER_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/cmn/ref/display/oled/blocks.php#send_buffer"
    },
    {
      "type": "oled_clear_display",
      "message0": "%{BKY_TSUMICKY_OLED_CLEAR_DISPLAY}",
      "args0": [
        {
          "type": "field_variable",
          "name": "ws_var",
          "variable": "sock"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 65,
      "tooltip": "%{BKY_TSUMICKY_OLED_CLEAR_DISPLAY_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/cmn/ref/display/oled/blocks.php#clear_display"
    },
    {
      "type": "oled_clear_buffer",
      "message0": "%{BKY_TSUMICKY_OLED_CLEAR_BUFFER}",
      "args0": [
        {
          "type": "field_variable",
          "name": "ws_var",
          "variable": "sock"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 65,
      "tooltip": "%{BKY_TSUMICKY_OLED_CLEAR_BUFFER_TOOLBOX}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/cmn/ref/display/oled/blocks.php#clear_buffer"
    }
  ]);
};

