export function addBlocks() {
  const frameOptions = [
    [ "%{BKY_TSUMICKY_UNO_MATRIX_COMMON_FRAME_BLUETOOTH}", "0" ],
    [ "%{BKY_TSUMICKY_UNO_MATRIX_COMMON_FRAME_BOOTLOADER}", "1" ],
    [ "%{BKY_TSUMICKY_UNO_MATRIX_COMMON_FRAME_CHIP}", "2" ],
    [ "%{BKY_TSUMICKY_UNO_MATRIX_COMMON_FRAME_WIFI}", "3" ],
    [ "%{BKY_TSUMICKY_UNO_MATRIX_COMMON_FRAME_DANGER}", "4" ],
    [ "%{BKY_TSUMICKY_UNO_MATRIX_COMMON_EMOJI_BASIC}", "5" ],
    [ "%{BKY_TSUMICKY_UNO_MATRIX_COMMON_EMOJI_HAPPY}", "6" ],
    [ "%{BKY_TSUMICKY_UNO_MATRIX_COMMON_EMOJI_SAD}", "7" ],
    [ "%{BKY_TSUMICKY_UNO_MATRIX_COMMON_HEART_BIG}", "8" ],
    [ "%{BKY_TSUMICKY_UNO_MATRIX_COMMON_HEART_SMALL}", "9" ],
    [ "%{BKY_TSUMICKY_UNO_MATRIX_COMMON_LIKE}", "10" ],
    [ "%{BKY_TSUMICKY_UNO_MATRIX_COMMON_MUSIC_NOTE}", "11" ],
    [ "%{BKY_TSUMICKY_UNO_MATRIX_COMMON_RESISTOR}", "12" ],
    [ "%{BKY_TSUMICKY_UNO_MATRIX_COMMON_UNO}", "13" ]
  ];

  const animationOptions = [
    [ "%{BKY_TSUMICKY_UNO_MATRIX_COMMON_STARTUP}", "0" ],
    [ "%{BKY_TSUMICKY_UNO_MATRIX_COMMON_TETRIS_INTRO}", "1" ],
    [ "%{BKY_TSUMICKY_UNO_MATRIX_COMMON_ATMEGA}", "2" ],
    [ "%{BKY_TSUMICKY_UNO_MATRIX_COMMON_LED_BLINK_HORIZONTAL}", "3" ],
    [ "%{BKY_TSUMICKY_UNO_MATRIX_COMMON_LED_BLINK_VERTICAL}", "4" ],
    [ "%{BKY_TSUMICKY_UNO_MATRIX_COMMON_ARROWS_COMPASS}", "5" ],
    [ "%{BKY_TSUMICKY_UNO_MATRIX_COMMON_AUDIO_WAVEFORM}", "6" ],
    [ "%{BKY_TSUMICKY_UNO_MATRIX_COMMON_BATTERY}", "7" ],
    [ "%{BKY_TSUMICKY_UNO_MATRIX_COMMON_BOUNCING_BALL}", "8" ],
    [ "%{BKY_TSUMICKY_UNO_MATRIX_COMMON_BUG}", "9" ],
    [ "%{BKY_TSUMICKY_UNO_MATRIX_COMMON_CHECK}", "10" ],
    [ "%{BKY_TSUMICKY_UNO_MATRIX_COMMON_CLOUD}", "11" ],
    [ "%{BKY_TSUMICKY_UNO_MATRIX_COMMON_DOWNLOAD}", "12" ],
    [ "%{BKY_TSUMICKY_UNO_MATRIX_COMMON_DVD}", "13" ],
    [ "%{BKY_TSUMICKY_UNO_MATRIX_COMMON_HEARTBEAT_LINE}", "14" ],
    [ "%{BKY_TSUMICKY_UNO_MATRIX_COMMON_HEARTBEAT}", "15" ],
    [ "%{BKY_TSUMICKY_UNO_MATRIX_COMMON_INIFINITY_LOOP}", "16" ],
    [ "%{BKY_TSUMICKY_UNO_MATRIX_COMMON_LOAD_CLOCK}", "17" ],
    [ "%{BKY_TSUMICKY_UNO_MATRIX_COMMON_LOAD}", "18" ],
    [ "%{BKY_TSUMICKY_UNO_MATRIX_COMMON_LOCK}", "19" ],
    [ "%{BKY_TSUMICKY_UNO_MATRIX_COMMON_NOFITICATION}", "20" ],
    [ "%{BKY_TSUMICKY_UNO_MATRIX_COMMON_OPENSOURCE}", "21" ],
    [ "%{BKY_TSUMICKY_UNO_MATRIX_COMMON_SPNNING_COIN}", "22" ],
    [ "%{BKY_TSUMICKY_UNO_MATRIX_COMMON_TETRIS}", "23" ],
    [ "%{BKY_TSUMICKY_UNO_MATRIX_COMMON_WIFI_SEARCH}", "24" ]
  ];

  Blockly.defineBlocksWithJsonArray([
    {
      "type": "unoq_matrix_init",
      "message0": "%{BKY_TSUMICKY_UNOQ_MATRIX_INIT_TITLE}",
      "args0": [
        {
          "type": "field_variable",
          "name": "ws_var",
          "variable": "sock"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 225,
      "tooltip": "%{BKY_TSUMICKY_UNOQ_MATRIX_INIT_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/cmn/ref/display/unoq/blocks.php#init"
    },
    {
      "type": "unoq_matrix_show_frame",
      "message0": "%{BKY_TSUMICKY_UNO_MATRIX_COMMON_SHOW_FRAME_TITLE}",
      "args0": [
        {
          "type": "field_variable",
          "name": "ws_var",
          "variable": "sock"
        },
        {
          "type": "field_dropdown",
          "name": "FRAME",
          "options": frameOptions
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 225,
      "tooltip": "%{BKY_TSUMICKY_UNO_MATRIX_COMMON_SHOW_FRAME_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/cmn/ref/display/unoq/blocks.php#show_frame"
    },
    {
      "type": "unoq_matrix_show_bitmap",
      "message0": "%{BKY_TSUMICKY_UNO_MATRIX_COMMON_SHOW_BITMAP_TITLE}",
      "args0": [
        {
          "type": "field_variable",
          "name": "ws_var",
          "variable": "sock"
        },
        {
          "type": "field_bitmap",
          "name": "BITMAP",
          "width": 13,
          "height": 8
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 225,
      "tooltip": "%{BKY_TSUMICKY_UNOQ_MATRIX_SHOW_BITMAP_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/cmn/ref/display/unoq/blocks.php#show_bitmap"
    },
    {
      "type": "unoq_matrix_show_grayscale_bitmap",
      "message0": "%{BKY_TSUMICKY_UNOQ_MATRIX_SHOW_GRAYSCALE_BITMAP_TITLE}",
      "args0": [
        {
          "type": "field_variable",
          "name": "ws_var",
          "variable": "sock"
        },
        {
          "type": "input_value",
          "name": "BITMAP",
          "check": [ "String", "Array" ]
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 225,
      "tooltip": "%{BKY_TSUMICKY_UNOQ_MATRIX_SHOW_GRAYSCALE_BITMAP_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/cmn/ref/display/unoq/blocks.php#show_grayscale_bitmap"
    },
    {
      "type": "unoq_matrix_show_animation",
      "message0": "%{BKY_TSUMICKY_UNO_MATRIX_COMMON_SHOW_ANIMATION_TITLE}",
      "args0": [
        {
          "type": "field_variable",
          "name": "ws_var",
          "variable": "sock"
        },
        {
          "type": "field_dropdown",
          "name": "ANIMATION",
          "options": animationOptions
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 225,
      "tooltip": "%{BKY_TSUMICKY_UNO_MATRIX_COMMON_SHOW_ANIMATION_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/cmn/ref/display/unoq/blocks.php#show_animation"
    },
    {
      "type": "unoq_matrix_scroll_text",
      "message0": "%{BKY_TSUMICKY_UNO_MATRIX_COMMON_SCROLL_TEXT_TITLE}",
      "args0": [
        {
          "type": "field_variable",
          "name": "ws_var",
          "variable": "sock"
        },
        {
          "type": "input_value",
          "name": "TEXT",
          "check": "String"
        }
      ],
      "message1": "%{BKY_TSUMICKY_UNO_MATRIX_COMMON_SCROLL_TEXT_FONT}",
      "args1": [
        {
          "type": "field_dropdown",
          "name": "FONT",
          "options": [
            ["5x7", "1"],
            ["4x6", "0"]
          ]
        }
      ],
      "message2": "%{BKY_TSUMICKY_UNO_MATRIX_COMMON_SCROLL_TEXT_DIRECTION}",
      "args2": [
        {
          "type": "field_dropdown",
          "name": "DIRECTION",
          "options": [
            ["%{BKY_TSUMICKY_UNO_MATRIX_COMMON_SCROLL_TEXT_LEFT}", "0"],
            ["%{BKY_TSUMICKY_UNO_MATRIX_COMMON_SCROLL_TEXT_RIGHT}", "1"],
            ["%{BKY_TSUMICKY_UNO_MATRIX_COMMON_SCROLL_TEXT_NONE}", "2"]
          ]
        }
      ],
      "message3": "%{BKY_TSUMICKY_UNO_MATRIX_COMMON_SCROLL_TEXT_SPEED}",
      "args3": [
        {
          "type": "input_value",
          "name": "SPEED",
          "check": "Number"
        }
      ],
      "message4": "%{BKY_TSUMICKY_UNOQ_MATRIX_SCROLL_TEXT_TIMEOUT}",
      "args4": [
        {
          "type": "input_value",
          "name": "timeout",
          "check": "Number"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 225,
      "tooltip": "%{BKY_TSUMICKY_UNO_MATRIX_COMMON_SCROLL_TEXT_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/cmn/ref/display/unoq/blocks.php#scroll_text"
    },
    {
      "type": "unoq_matrix_clear",
      "message0": "%{BKY_TSUMICKY_UNO_MATRIX_COMMON_CLEAR_TITLE}",
      "args0": [
        {
          "type": "field_variable",
          "name": "ws_var",
          "variable": "sock"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 225,
      "tooltip": "%{BKY_TSUMICKY_UNOQ_MATRIX_CLEAR_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/cmn/ref/display/unoq/blocks.php#clear"
    },
    {
      "type": "unoq_rgb_led",
      "tooltip": "%{BKY_TSUMICKY_UNOQ_RGB_LED_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/cmn/ref/display/unoq/blocks.php#rgb_led",
      "message0": "%{BKY_TSUMICKY_UNOQ_RGB_LED_TITLE}",
      "args0": [
        {
          "type": "field_variable",
          "name": "ws_var",
          "variable": "sock"
        },
        {
          "type": "input_value",
          "name": "num",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "color",
          "check": "Number"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 225,
      "inputsInline": true
    },
    {
      "type": "unoq_rgb_led_number",
      "tooltip": "%{BKY_TSUMICKY_UNOQ_RGB_LED_NUMBER_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/cmn/ref/display/unoq/blocks.php#rgb_led_number",
      "message0": "%1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "num",
          "options": [
            [
              "1",
              "1"
            ],
            [
              "2",
              "2"
            ],
            [
              "3",
              "3"
            ],
            [
              "4",
              "4"
            ]
          ]
        },
      ],
      "output": "Number",
      "colour": 225
    },
    {
      "type": "unoq_rgb_led_color",
      "tooltip": "%{BKY_TSUMICKY_UNOQ_RGB_LED_COLOR_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/cmn/ref/display/unoq/blocks.php#rgb_led_color",
      "message0": "%1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "color",
          "options": [
            [
              {
                "src": "/icons/display/unoq/black.png",
                "width": 10,
                "height": 10,
                "alt": "%{BKY_TSUMICKY_UNOQ_RGB_LED_BLACK}"
              },
              "0"
            ],
            [
              {
                "src": "/icons/display/unoq/blue.png",
                "width": 10,
                "height": 10,
                "alt": "%{BKY_TSUMICKY_UNOQ_RGB_LED_BLUE}"
              },
              "1"
            ],
            [
              {
                "src": "/icons/display/unoq/red.png",
                "width": 10,
                "height": 10,
                "alt": "%{BKY_TSUMICKY_UNOQ_RGB_LED_RED}"
              },
              "2"
            ],
            [
              {
                "src": "/icons/display/unoq/magenta.png",
                "width": 10,
                "height": 10,
                "alt": "%{BKY_TSUMICKY_UNOQ_RGB_LED_MAGENTA}"
              },
              "3"
            ],
            [
              {
                "src": "/icons/display/unoq/green.png",
                "width": 10,
                "height": 10,
                "alt": "%{BKY_TSUMICKY_UNOQ_RGB_LED_GREEN}"
              },
              "4"
            ],
            [
              {
                "src": "/icons/display/unoq/cyan.png",
                "width": 10,
                "height": 10,
                "alt": "%{BKY_TSUMICKY_UNOQ_RGB_LED_CYAN}"
              },
              "5"
            ],
            [
              {
                "src": "/icons/display/unoq/yellow.png",
                "width": 10,
                "height": 10,
                "alt": "%{BKY_TSUMICKY_UNOQ_RGB_LED_YELLOW}"
              },
              "6"
            ],
            [
              {
                "src": "/icons/display/unoq/white.png",
                "width": 10,
                "height": 10,
                "alt": "%{BKY_TSUMICKY_UNOQ_RGB_LED_WHITE}"
              },
              "7"
            ]
          ]
        }
      ],
      "output": "Number",
      "colour": 225,
    }
  ]);
}
