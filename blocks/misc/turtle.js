export function addBlocks() {
  Blockly.defineBlocksWithJsonArray([
    {
      "type": "turtle_init",
      "message0": "%{BKY_TSUMICKY_TURTLE_INIT_MSG}",
      "args0": [
        {
          "type": "input_value",
          "name": "width",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "height",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "startx",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "starty",
          "check": "Number"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 60,
      "tooltip": "%{BKY_TSUMICKY_TURTLE_INIT_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/ja/ref/turtle/blocks.php#init"
    },
    {
      "type": "turtle_color",
      "message0": "%{BKY_TSUMICKY_TURTLE_COLOR_MSG}",
      "args0": [
        {
          "type": "input_value",
          "name": "color",
          "check": "Colour"
        },
        {
          "type": "input_value",
          "name": "fillcolor",
          "check": "Colour"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 60,
      "tooltip": "%{BKY_TSUMICKY_TURTLE_COLOR_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/ja/ref/turtle/blocks.php#color"
    },
    {
      "type": "turtle_pendown",
      "message0": "%{BKY_TSUMICKY_TURTLE_PENDOWN_MSG}",
      "previousStatement": null,
      "nextStatement": null,
      "colour": 60,
      "tooltip": "%{BKY_TSUMICKY_TURTLE_PENDOWN_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/ja/ref/turtle/blocks.php#pendown"
    },
    {
      "type": "turtle_penup",
      "message0": "%{BKY_TSUMICKY_TURTLE_PENUP_MSG}",
      "previousStatement": null,
      "nextStatement": null,
      "colour": 60,
      "tooltip": "%{BKY_TSUMICKY_TURTLE_PENUP_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/ja/ref/turtle/blocks.php#penup"
    },
    {
      "type": "turtle_pensize",
      "message0": "%{BKY_TSUMICKY_TURTLE_PENSIZE_MSG}",
      "args0": [
        {
          "type": "input_value",
          "name": "width",
          "check": "Number"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 60,
      "tooltip": "%{BKY_TSUMICKY_TURTLE_PENSIZE_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/ja/ref/turtle/blocks.php#pensize"
    },
    {
      "type": "turtle_forward",
      "message0": "%{BKY_TSUMICKY_TURTLE_FORWARD_MSG}",
      "args0": [
        {
          "type": "input_value",
          "name": "distance",
          "check": "Number"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 60,
      "tooltip": "%{BKY_TSUMICKY_TURTLE_FORWARD_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/ja/ref/turtle/blocks.php#forward"
    },
    {
      "type": "turtle_backward",
      "message0": "%{BKY_TSUMICKY_TURTLE_BACKWARD_MSG}",
      "args0": [
        {
          "type": "input_value",
          "name": "distance",
          "check": "Number"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 60,
      "tooltip": "%{BKY_TSUMICKY_TURTLE_BACKWARD_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/ja/ref/turtle/blocks.php#backward"
    },
    {
      "type": "turtle_right",
      "message0": "%{BKY_TSUMICKY_TURTLE_RIGHT_MSG}",
      "args0": [
        {
          "type": "input_value",
          "name": "angle",
          "check": "Number"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 60,
      "tooltip": "%{BKY_TSUMICKY_TURTLE_RIGHT_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/ja/ref/turtle/blocks.php#right"
    },
    {
      "type": "turtle_left",
      "message0": "%{BKY_TSUMICKY_TURTLE_LEFT_MSG}",
      "args0": [
        {
          "type": "input_value",
          "name": "angle",
          "check": "Number"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 60,
      "tooltip": "%{BKY_TSUMICKY_TURTLE_LEFT_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/ja/ref/turtle/blocks.php#left"
    },
    {
      "type": "turtle_goto",
      "message0": "%{BKY_TSUMICKY_TURTLE_GOTO_MSG}",
      "args0": [
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
      "colour": 60,
      "tooltip": "%{BKY_TSUMICKY_TURTLE_GOTO_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/ja/ref/turtle/blocks.php#goto"
    },
    {
      "type": "turtle_circle",
      "message0": "%{BKY_TSUMICKY_TURTLE_CIRCLE_MSG}",
      "args0": [
        {
          "type": "input_value",
          "name": "radius",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "angle",
          "check": "Number"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 60,
      "tooltip": "%{BKY_TSUMICKY_TURTLE_CIRCLE_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/ja/ref/turtle/blocks.php#circle"
    },
    {
      "type": "turtle_begin_fill",
      "message0": "%{BKY_TSUMICKY_TURTLE_BEGIN_FILL_MSG}",
      "previousStatement": null,
      "nextStatement": null,
      "colour": 60,
      "tooltip": "%{BKY_TSUMICKY_TURTLE_BEGIN_FILL_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/ja/ref/turtle/blocks.php#begin_fill"
    },
    {
      "type": "turtle_end_fill",
      "message0": "%{BKY_TSUMICKY_TURTLE_END_FILL_MSG}",
      "previousStatement": null,
      "nextStatement": null,
      "colour": 60,
      "tooltip": "%{BKY_TSUMICKY_TURTLE_END_FILL_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/ja/ref/turtle/blocks.php#end_fill"
    },
    {
      "type": "turtle_speed",
      "message0": "%{BKY_TSUMICKY_TURTLE_SPEED_MSG}",
      "args0": [
        {
          "type": "input_value",
          "name": "speed",
          "check": "Number"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 60,
      "tooltip": "%{BKY_TSUMICKY_TURTLE_SPEED_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/ja/ref/turtle/blocks.php#speed"
    },
    {
      "type": "turtle_mainloop",
      "message0": "%{BKY_TSUMICKY_TURTLE_MAINLOOP_MSG}",
      "previousStatement": null,
      "nextStatement": null,
      "colour": 60,
      "tooltip": "%{BKY_TSUMICKY_TURTLE_MAINLOOP_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/ja/ref/turtle/blocks.php#mainloop"
    },
    {
      "type": "turtle_setheading",
      "message0": "%{BKY_TSUMICKY_TURTLE_SETHEADING_MSG}",
      "args0": [
        {
          "type": "input_value",
          "name": "angle",
          "check": "Number"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 60,
      "tooltip": "%{BKY_TSUMICKY_TURTLE_SETHEADING_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/ja/ref/turtle/blocks.php#setheading"
    },
    {
      "type": "turtle_dot",
      "message0": "%{BKY_TSUMICKY_TURTLE_DOT_MSG}",
      "args0": [
        {
          "type": "input_value",
          "name": "size",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "color",
          "check": "Colour"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 60,
      "tooltip": "%{BKY_TSUMICKY_TURTLE_DOT_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/ja/ref/turtle/blocks.php#dot"
    },
    {
      "type": "turtle_reset",
      "message0": "%{BKY_TSUMICKY_TURTLE_RESET_MSG}",
      "previousStatement": null,
      "nextStatement": null,
      "colour": 60,
      "tooltip": "%{BKY_TSUMICKY_TURTLE_RESET_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/ja/ref/turtle/blocks.php#reset"
    },
    {
      "type": "turtle_show_hide",
      "message0": "%{BKY_TSUMICKY_TURTLE_SHOW_HIDE_MSG}",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "visible",
          "options": [
            [
              "%{BKY_TSUMICKY_TURTLE_SHOW_HIDE_SHOW_MSG}",
              "show"
            ],
            [
              "%{BKY_TSUMICKY_TURTLE_SHOW_HIDE_HIDE_MSG}",
              "hide"
            ]
          ]
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 60,
      "tooltip": "%{BKY_TSUMICKY_TURTLE_SHOW_HIDE_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/ja/ref/turtle/blocks.php#show_hide"
    },
    {
      "type": "turtle_get_x",
      "message0": "%{BKY_TSUMICKY_TURTLE_GET_X_MSG}",
      "output": "Number",
      "colour": 60,
      "tooltip": "%{BKY_TSUMICKY_TURTLE_GET_X_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/ja/ref/turtle/blocks.php#get_x"
    },
    {
      "type": "turtle_get_y",
      "message0": "%{BKY_TSUMICKY_TURTLE_GET_Y_MSG}",
      "output": "Number",
      "colour": 60,
      "tooltip": "%{BKY_TSUMICKY_TURTLE_GET_Y_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/ja/ref/turtle/blocks.php#get_y"
    },
    {
      "type": "turtle_get_heading",
      "message0": "%{BKY_TSUMICKY_TURTLE_GET_HEADING_MSG}",
      "output": "Number",
      "colour": 60,
      "tooltip": "%{BKY_TSUMICKY_TURTLE_GET_HEADING_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/ja/ref/turtle/blocks.php#get_heading"
    },
    {
      "type": "turtle_is_down",
      "message0": "%{BKY_TSUMICKY_TURTLE_IS_DOWN_MSG}",
      "output": "Boolean",
      "colour": 60,
      "tooltip": "%{BKY_TSUMICKY_TURTLE_IS_DOWN_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/ja/ref/turtle/blocks.php#is_down"
    },
    {
      "type": "turtle_stamp",
      "message0": "%{BKY_TSUMICKY_TURTLE_STAMP_TITLE}",
      "previousStatement": null,
      "nextStatement": null,
      "colour": 60,
      "tooltip": "%{BKY_TSUMICKY_TURTLE_STAMP_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/ja/ref/turtle/blocks.php#stamp"
    },
    {
      "type": "turtle_shape",
      "message0": "%{BKY_TSUMICKY_TURTLE_SHAPE_TITLE}",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "shape",
          "options": [
            [
              "%{BKY_TSUMICKY_TURTLE_SHAPE_TURTLE}",
              "turtle"
            ],
            [
              "%{BKY_TSUMICKY_TURTLE_SHAPE_ARROW}",
              "arrow"
            ],
            [
              "%{BKY_TSUMICKY_TURTLE_SHAPE_CIRCLE}",
              "circle"
            ],
            [
              "%{BKY_TSUMICKY_TURTLE_SHAPE_SQUARE}",
              "square"
            ],
            [
              "%{BKY_TSUMICKY_TURTLE_SHAPE_TRIANGLE}",
              "triangle"
            ],
            [
              "%{BKY_TSUMICKY_TURTLE_SHAPE_CLASSIC}",
              "classic"
            ]
          ]
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 60,
      "tooltip": "%{BKY_TSUMICKY_TURTLE_SHAPE_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/ja/ref/turtle/blocks.php#shape"
    },
    {
      "type": "turtle_write",
      "message0": "%{BKY_TSUMICKY_TURTLE_WRITE_TITLE}",
      "args0": [
        {
          "type": "input_value",
          "name": "text",
          "check": "String"
        }
      ],
      "message1": "%{BKY_TSUMICKY_TURTLE_WRITE_MOVE} %1",
      "args1": [
        {
          "type": "field_checkbox",
          "name": "move",
          "checked": false
        }
      ],
      "message2": "%{BKY_TSUMICKY_TURTLE_WRITE_ALIGN} %1",
      "args2": [
        {
          "type": "field_dropdown",
          "name": "align",
          "options": [
            [
              "%{BKY_TSUMICKY_TURTLE_WRITE_ALIGN_LEFT}",
              "left"
            ],
            [
              "%{BKY_TSUMICKY_TURTLE_WRITE_ALIGN_CENTER}",
              "center"
            ],
            [
              "%{BKY_TSUMICKY_TURTLE_WRITE_ALIGN_RIGHT}",
              "right"
            ]
          ]
        }
      ],
      "message3": "%{BKY_TSUMICKY_TURTLE_WRITE_FONT}",
      "args3": [
        {
          "type": "input_value",
          "name": "font",
          "check": "String"
        }
      ],
      "message4": "%{BKY_TSUMICKY_TURTLE_WRITE_SIZE}",
      "args4": [
        {
          "type": "input_value",
          "name": "size",
          "check": "Number"
        }
      ],
      "message5": "%{BKY_TSUMICKY_TURTLE_WRITE_STYLE}",
      "args5": [
        {
          "type": "field_dropdown",
          "name": "style",
          "options": [
            [
              "%{BKY_TSUMICKY_TURTLE_WRITE_NORMAL}",
              "normal"
            ],
            [
              "%{BKY_TSUMICKY_TURTLE_WRITE_BOLD}",
              "bold"
            ],
            [
              "%{BKY_TSUMICKY_TURTLE_WRITE_ITALIC}",
              "italic"
            ],
            [
              "%{BKY_TSUMICKY_TURTLE_WRITE_BOLD_ITALIC}",
              "bold italic"
            ]
          ]
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 60,
      "tooltip": "%{BKY_TSUMICKY_TURTLE_WRITE_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/ja/ref/turtle/blocks.php#write"
    },
    {
      "type": "turtle_update",
      "message0": "%{BKY_TSUMICKY_TURTLE_UPDATE_TITLE}",
      "previousStatement": null,
      "nextStatement": null,
      "colour": 60,
      "tooltip": "%{BKY_TSUMICKY_TURTLE_UPDATE_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/ja/ref/turtle/blocks.php#update"
    },
    {
      "type": "turtle_end",
      "message0": "%{BKY_TSUMICKY_TURTLE_END_TITLE}",
      "previousStatement": null,
      "colour": 60,
      "tooltip": "%{BKY_TSUMICKY_TURTLE_END_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/ja/ref/turtle/blocks.php#end"
    }
  ]);
}
