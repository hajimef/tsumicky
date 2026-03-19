const bases = [
  [
    "%{BKY_TEXT_BASEN_BIN}",
    "2"
  ],
  [
    "%{BKY_TEXT_BASEN_OCT}",
    "8"
  ],
  [
    "%{BKY_TEXT_BASEN_HEX}",
    "16"
  ]
];

export function addBlocks() {
  Blockly.defineBlocksWithJsonArray([
    {
      "type": "text_basen",
      "tooltip": "%{BKY_TEXT_BASEN_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/cmn/ref/basic/append.php#text_basen",
      "message0": "%{BKY_TEXT_BASEN}",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "base",
          "options": bases
        },
        {
          "type": "input_value",
          "name": "num",
          "check": "Number"
        }
      ],
      "output": "String",
      "colour": 160,
      "inputsInline": false
    },
    {
      "type": "text_ml",
      "tooltip": "%{BKY_TEXT_ML_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/cmn/ref/basic/append.php#text_ml",
      "message0": "%1",
      "args0": [
        {
          "type": "field_multilinetext",
          "name": "text"
        }
      ],
      "output": "String",
      "colour": 160,
      "inputsInline": false
    },
    {
      "type": "text_to_string",
      "tooltip": "%{BKY_TEXT_TO_STRING_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/cmn/ref/basic/append.php#text_to_string",
      "message0": "%{BKY_TEXT_TO_STRING}",
      "args0": [
        {
          "type": "input_value",
          "name": "from"
        }
      ],
      "output": "String",
      "colour": 160,
      "inputsInline": true
    },
    {
      "type": "math_angle",
      "tooltip": "",
      "helpUrl": "",
      "message0": "%1 %2",
      "args0": [
        {
          "type": "field_angle",
          "name": "angle",
          "angle": 0
        },
        {
          "type": "input_dummy",
          "name": ""
        }
      ],
      "output": "Number",
      "colour": 225,
      "inputsInline": true
    },
    {
      "type": "math_dec",
      "tooltip": "%{BKY_MATH_DEC_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/cmn/ref/basic/append.php#math_dec",
      "message0": "%{BKY_MATH_DEC}",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "base",
          "options": bases
        },
        {
          "type": "input_value",
          "name": "str",
          "check": "String"
        }
      ],
      "output": null,
      "colour": 225,
      "inputsInline": true
    },
    {
      "type": "math_to_number",
      "tooltip": "%{BKY_MATH_TO_NUMBER_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/cmn/ref/basic/append.php#math_to_number",
      "message0": "%{BKY_MATH_TO_NUMBER}",
      "args0": [
        {
          "type": "input_value",
          "name": "str",
          "check": "String"
        }
      ],
      "output": "Number",
      "colour": 225,
      "inputsInline": true
    },
    {
      "type": "colour_split",
      "tooltip": "%{BKY_COLOUR_SPLIT_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/cmn/ref/basic/append.php#colour_split",
      "message0": "%{BKY_COLOUR_SPLIT}",
      "args0": [
        {
          "type": "input_value",
          "name": "colour",
          "check": "Colour"
        }
      ],
      "output": "Array",
      "colour": 20,
      "inputsInline": true
    },
    {
      "type": "colour_grey",
      "tooltip": "%{BKY_COLOUR_GREY_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/cmn/ref/basic/append.php#colour_grey",
      "message0": "%{BKY_COLOUR_GREY}",
      "args0": [
        {
          "type": "input_value",
          "name": "colour",
          "check": "Colour"
        }
      ],
      "output": "Colour",
      "colour": 20
    },
    {
      "type": "colour_sepia",
      "tooltip": "%{BKY_COLOUR_SEPIA_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/cmn/ref/basic/append.php#colour_sepia",
      "message0": "%{BKY_COLOUR_SEPIA}",
      "args0": [
        {
          "type": "input_value",
          "name": "colour",
          "check": "Colour"
        }
      ],
      "output": "Colour",
      "colour": 20
    },
    {
      "type": "colour_hsv",
      "tooltip": "%{BKY_COLOUR_HSV_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/cmn/ref/basic/append.php#colour_hsv",
      "message0": "%{BKY_COLOUR_HSV}",
      "args0": [
        {
          "type": "input_value",
          "name": "hue",
          "align": "RIGHT",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "saturate",
          "align": "RIGHT",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "value",
          "align": "RIGHT",
          "check": "Number"
        }
      ],
      "output": "Colour",
      "colour": 20,
      "inputsInline": false
    },
    {
      "type": "colour_hsv_sv",
      "tooltip": "",
      "helpUrl": "",
      "message0": "%1",
      "args0": [
        {
          "type": "field_slider",
          "name": "value",
          "value": 0,
          "min": 0,
          "max": 100,
          "precision": 0.5
        }
      ],
      "output": "Number",
      "colour": 225,
      "inputsInline": true
    },        
    {
      "type": "procedure_js_function",
      "tooltip": "%{BKY_PROCEDURE_JS_FUNCTION_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/cmn/ref/basic/append.php#procedure_js_function",
      "message0": "%{BKY_PROCEDURE_JS_FUNCTION}",
      "args0": [
        {
          "type": "field_multilinetext",
          "name": "js"
        },
        {
          "type": "input_dummy",
          "name": ""
        }
      ],
      "previousStatement": null,
      "colour": 290,
      "inputsInline": false
    },
    {
      "type": "list_push_unshift",
      "tooltip": "%{BKY_LIST_PUSH_UNSHIFT_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/cmn/ref/basic/append.php#list_push_unshift",
      "message0": "%{BKY_LIST_PUSH_UNSHIFT}",
      "args0": [
        {
          "type": "input_value",
          "name": "var_name",
        },
        {
          "type": "field_dropdown",
          "name": "method",
          "options": [
            [
              "%{BKY_LIST_PUSH_UNSHIFT_UNSHIFT}",
              "unshift"
            ],
            [
              "%{BKY_LIST_PUSH_UNSHIFT_PUSH}",
              "push"
            ]
          ]
        },
        {
          "type": "input_dummy",
          "name": ""
        },
        {
          "type": "input_value",
          "name": "value"
        },
        {
          "type": "input_dummy",
          "name": ""
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 255,
      "inputsInline": true
    },
    {
      "type": "list_pop_shift",
      "tooltip": "%{BKY_LIST_POP_SHIFT_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/cmn/ref/basic/append.php#list_pop_shift",
      "message0": "%{BKY_LIST_POP_SHIFT}",
      "args0": [
        {
          "type": "input_value",
          "name": "var_name",
        },
        {
          "type": "field_dropdown",
          "name": "method",
          "options": [
            [
              "%{BKY_LIST_PUSH_UNSHIFT_UNSHIFT}",
              "shift"
            ],
            [
              "%{BKY_LIST_PUSH_UNSHIFT_PUSH}",
              "pop"
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
      "colour": 255,
      "inputsInline": true
    },
    {
      "type": "list_get_random",
      "message0": "%{BKY_TSUMICKY_LIST_GET_RANDOM_ELEMENT_TITLE}",
      "args0": [
        {
          "type": "input_value",
          "name": "LIST",
          "check": "Array"
        },
        {
          "type": "input_value",
          "name": "NUM",
          "check": "Number"
        }
      ],
      "inputsInline": true,
      "output": "Array",
      "colour": 255,
      "tooltip": "%{BKY_TSUMICKY_LIST_GET_RANDOM_ELEMENT_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/cmn/ref/basic/append.php#list_get_random"
    },
    {
      "type": "list_reverse",
      "message0": "%{BKY_TSUMICKY_LIST_REVERSE_TITLE}",
      "args0": [
        {
          "type": "input_value",
          "name": "LIST",
          "check": "Array"
        }
      ],
      "inputsInline": true,
      "output": "Array",
      "colour": 255,
      "tooltip": "%{BKY_TSUMICKY_LIST_REVERSE_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/cmn/ref/basic/append.php#list_reverse"
    },
    {
      "type": "list_concat",
      "message0": "%{BKY_TSUMICKY_LIST_CONCAT_TITLE}",
      "args0": [
        {
          "type": "input_value",
          "name": "LIST",
          "check": "Array"
        },
        {
          "type": "input_value",
          "name": "LIST2",
          "check": "Array"
        }
      ],
      "inputsInline": true,
      "output": "Array",
      "colour": 255,
      "tooltip": "%{BKY_TSUMICKY_LIST_CONCAT_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/cmn/ref/basic/append.php#list_concat"
    },
    {
      "type": "list_filter",
      "message0": "%{BKY_TSUMICKY_LIST_FILTER_TITLE}",
      "args0": [
        {
          "type": "input_value",
          "name": "LIST",
          "check": "Array"
        }
      ],
      "message1": "%{BKY_TSUMICKY_LIST_FILTER_INPUT_DO}",
      "args1": [
        {
          "type": "input_statement",
          "name": "DO"
        },
        {
          "type": "input_value",
          "name": "COND",
          "check": "Boolean"
        }
      ],
      "inputsInline": true,
      "output": "Array",
      "colour": 255,
      "tooltip": "%{BKY_TSUMICKY_LIST_FILTER_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/cmn/ref/basic/append.php#list_filter"
    },
    {
      "type": "list_map",
      "message0": "%{BKY_TSUMICKY_LIST_MAP_TITLE}",
      "args0": [
        {
          "type": "input_value",
          "name": "LIST",
          "check": "Array"
        }
      ],
      "message1": "%{BKY_TSUMICKY_LIST_MAP_INPUT_DO}",
      "args1": [
        {
          "type": "input_statement",
          "name": "DO"
        },
        {
          "type": "input_value",
          "name": "VALUE",
        }
      ],
      "inputsInline": true,
      "output": "Array",
      "colour": 255,
      "tooltip": "%{BKY_TSUMICKY_LIST_MAP_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/cmn/ref/basic/append.php#list_map"
    },
    {
      "type": "list_item",
      "tooltip": "%{BKY_TSUMICKY_LIST_ITEM_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/cmn/ref/basic/append.php#list_item",
      "message0": "%{BKY_TSUMICKY_LIST_ITEM_TITLE}",
      "output": null,
      "colour": 255
    },              
    {
      "type": "list_compute",
      "message0": "%{BKY_TSUMICKY_LIST_COMPUTE_TITLE}",
      "args0": [
        {
          "type": "input_value",
          "name": "LIST",
          "check": "Array"
        },
        {
          "type": "field_dropdown",
          "name": "OP",
          "options": [
            ["%{BKY_TSUMICKY_LIST_COMPUTE_OPERATOR_SUM}", "SUM"],
            ["%{BKY_TSUMICKY_LIST_COMPUTE_OPERATOR_AVERAGE}", "AVERAGE"],
            ["%{BKY_TSUMICKY_LIST_COMPUTE_OPERATOR_MAX}", "MAX"],
            ["%{BKY_TSUMICKY_LIST_COMPUTE_OPERATOR_MIN}", "MIN"],
            ["%{BKY_TSUMICKY_LIST_COMPUTE_OPERATOR_VARIANCE}", "VARIANCE"],
            ["%{BKY_TSUMICKY_LIST_COMPUTE_OPERATOR_STD_DEV}", "STD_DEV"],
            ["%{BKY_TSUMICKY_LIST_COMPUTE_OPERATOR_MEDIAN}", "MEDIAN"]
          ]
        }
      ],
      "output": "Number",
      "colour": 255,
      "tooltip": "%{BKY_TSUMICKY_LIST_COMPUTE_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/cmn/ref/basic/append.php#list_compute"
    },
    {
      "type": "logic_is_type",
      "message0": "%{BKY_TSUMICKY_LOGIC_IS_TYPE_MSG}",
      "args0": [
        {
          "type": "input_value",
          "name": "VALUE"
        },
        {
          "type": "field_dropdown",
          "name": "TYPE",
          "options": [
            [
              "%{BKY_TSUMICKY_LOGIC_IS_TYPE_TYPE_NUMBER}",
              "NUMBER"
            ],
            [
              "%{BKY_TSUMICKY_LOGIC_IS_TYPE_TYPE_DATE}",
              "DATE"
            ],
            [
              "%{BKY_TSUMICKY_LOGIC_IS_TYPE_TYPE_STRING}",
              "STRING"
            ],
            [
              "%{BKY_TSUMICKY_LOGIC_IS_TYPE_TYPE_LIST}",
              "LIST"
            ],
            [
              "%{BKY_TSUMICKY_LOGIC_IS_TYPE_TYPE_OBJECT}",
              "OBJECT"
            ]
          ]
        }
      ],
      "inputsInline": true,
      "output": "Boolean",
      "colour": 210,
      "tooltip": "%{BKY_TSUMICKY_LOGIC_IS_TYPE_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/cmn/ref/basic/append.php#is_type"
    }
  ]);
}
