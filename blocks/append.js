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
      "helpUrl": "",
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
      "helpUrl": "",
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
      "type": "math_dec",
      "tooltip": "%{BKY_MATH_DEC_TOOLTIP}",
      "helpUrl": "",
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
      "type": "colour_split",
      "tooltip": "%{BKY_COLOUR_SPLIT_TOOLTIP}",
      "helpUrl": "",
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
      "helpUrl": "",
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
      "helpUrl": "",
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
      "type": "procedure_js_function",
      "tooltip": "%{BKY_PROCEDURE_JS_FUNCTION_TOOLTIP}",
      "helpUrl": "",
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
      "helpUrl": "",
      "message0": "%{BKY_LIST_PUSH_UNSHIFT}",
      "args0": [
        {
          "type": "field_variable",
          "name": "var_name",
          "variable": "list"
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
      "helpUrl": "",
      "message0": "%{BKY_LIST_POP_SHIFT}",
      "args0": [
        {
          "type": "field_variable",
          "name": "var_name",
          "variable": "list"
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
    }
  ]);
}
