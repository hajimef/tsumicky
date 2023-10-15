let border_positions = [
  [
    {
      "src": "/icons/excel/border_position/around.png",
      "width": 89,
      "height": 32,
      "alt": "%{BKY_TSUMICKY_EXCEL_SET_CELL_BORDER_AROUND}"
    },
    "around"
  ],
  [
    {
      "src": "/icons/excel/border_position/top.png",
      "width": 89,
      "height": 32,
      "alt": "%{BKY_TSUMICKY_EXCEL_SET_CELL_BORDER_TOP}"
    },
    "top"
  ],
  [
    {
      "src": "/icons/excel/border_position/left.png",
      "width": 89,
      "height": 31,
      "alt": "%{BKY_TSUMICKY_EXCEL_SET_CELL_BORDER_LEFT}"
    },
    "left"
  ],
  [
    {
      "src": "/icons/excel/border_position/right.png",
      "width": 89,
      "height": 32,
      "alt": "%{BKY_TSUMICKY_EXCEL_SET_CELL_BORDER_RIGHT}"
    },
    "right"
  ],
  [
    {
      "src": "/icons/excel/border_position/bottom.png",
      "width": 89,
      "height": 31,
      "alt": "%{BKY_TSUMICKY_EXCEL_SET_CELL_BORDER_BOTTOM}"
    },
    "bottom"
  ],
  [
    {
      "src": "/icons/excel/border_position/inner_horizontal.png",
      "width": 89,
      "height": 31,
      "alt": "%{BKY_TSUMICKY_EXCEL_SET_CELL_BORDER_INNER_HORIZONTAL}"
    },
    "inner_horizontal"
  ],
  [
    {
      "src": "/icons/excel/border_position/inner_vertical.png",
      "width": 89,
      "height": 31,
      "alt": "%{BKY_TSUMICKY_EXCEL_SET_CELL_BORDER_INNER_VERTICAL}"
    },
    "inner_vertical"
  ],
  [
    {
      "src": "/icons/excel/border_position/diagonal_up.png",
      "width": 89,
      "height": 31,
      "alt": "%{BKY_TSUMICKY_EXCEL_SET_CELL_BORDER_DIAGONAL_UP}"
    },
    "diagonal_up"
  ],
  [
    {
      "src": "/icons/excel/border_position/diagonal_down.png",
      "width": 89,
      "height": 31,
      "alt": "%{BKY_TSUMICKY_EXCEL_SET_CELL_BORDER_DIAGONAL_DOWN}"
    },
    "diagonal_down"
  ]
];

export function addBlocks() {
  Blockly.defineBlocksWithJsonArray([
    {
        "type": "excel_cell_rc",
        "message0": "%{BKY_TSUMICKY_EXCEL_CELL_ROW_COL}",
        "args0": [
          {
            "type": "input_value",
            "name": "sheet",
            "check": "xlSheet"
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
          }
        ],
        "inputsInline": true,
        "output": "xlRange",
        "colour": 230,
        "tooltip": "%{BKY_TSUMICKY_EXCEL_CELL_ROW_COL_TOOLTIP}",
        "helpUrl": ""
      },
      {
        "type": "excel_range",
        "message0": "%{BKY_TSUMICKY_EXCEL_RANGE}",
        "args0": [
          {
            "type": "input_value",
            "name": "sheet",
            "check": "xlSheet"
          },
          {
            "type": "input_value",
            "name": "range",
            "check": "String"
          }
        ],
        "inputsInline": true,
        "output": "xlRange",
        "colour": 230,
        "tooltip": "%{BKY_TSUMICKY_EXCEL_RANGE_TOOLTIP}",
        "helpUrl": ""
      },
      {
        "type": "excel_set_range_do",
        "message0": "%{BKY_TSUMICKY_EXCEL_SET_RANGE_DO}",
        "args0": [
          {
            "type": "input_value",
            "name": "range",
            "check": "xlRange"
          },
          {
            "type": "input_dummy"
          },
          {
            "type": "input_statement",
            "name": "op"
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": 230,
        "tooltip": "%{BKY_TSUMICKY_EXCEL_SET_RANGE_DO_TOOLTIP}",
        "helpUrl": ""
      },
      {
        "type": "excel_current_cell",
        "message0": "%{BKY_TSUMICKY_EXCEL_CURRENT_CELL}",
        "output": "xlRange",
        "colour": 230,
        "tooltip": "%{BKY_TSUMICKY_EXCEL_CURRENT_CELL_TOOLTIP}",
        "helpUrl": ""
      },
      {
        "type": "excel_set_cell_value",
        "message0": "%{BKY_TSUMICKY_EXCEL_SET_CELL_VALUE}",
        "args0": [
          {
            "type": "input_value",
            "name": "range",
            "check": "xlRange"
          },
          {
            "type": "input_value",
            "name": "value"
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": 230,
        "tooltip": "%{BKY_TSUMICKY_EXCEL_SET_CELL_VALUE_TOOLTIP}",
        "helpUrl": ""
      },
      {
        "type": "excel_get_cell_value",
        "message0": "%{BKY_TSUMICKY_EXCEL_GET_CELL_VALUE}",
        "args0": [
          {
            "type": "input_value",
            "name": "range",
            "check": "xlRange"
          }
        ],
        "inputsInline": true,
        "output": null,
        "colour": 230,
        "tooltip": "%{BKY_TSUMICKY_EXCEL_GET_CELL_VALUE_TOOLTIP}",
        "helpUrl": ""
      },
      {
        "type": "excel_set_cell_formula",
        "message0": "%{BKY_TSUMICKY_EXCEL_SET_CELL_FORMULA}",
        "args0": [
          {
            "type": "input_value",
            "name": "range"
          },
          {
            "type": "input_value",
            "name": "formula"
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": 230,
        "tooltip": "%{BKY_TSUMICKY_EXCEL_SET_CELL_FORMULA_TOOLTIP}",
        "helpUrl": ""
      },
      {
        "type": "excel_set_cell_number_format",
        "message0": "%{BKY_TSUMICKY_EXCEL_SET_CELL_NUMBER_FORMAT}",
        "args0": [
          {
            "type": "input_value",
            "name": "range"
          },
          {
            "type": "input_value",
            "name": "format"
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": 230,
        "tooltip": "%{BKY_TSUMICKY_EXCEL_SET_CELL_NUMBER_FORMAT_TOOLTIP}",
        "helpUrl": ""
      },
      {
        "type": "excel_set_cell_font_color",
        "message0": "%{BKY_TSUMICKY_EXCEL_SET_CELL_FONT_COLOR}",
        "args0": [
          {
            "type": "input_value",
            "name": "range",
            "check": "xlRange"
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
        "colour": 230,
        "tooltip": "%{BKY_TSUMICKY_EXCEL_SET_CELL_FONT_COLOR_TOOLTIP}",
        "helpUrl": ""
      },
      {
        "type": "excel_set_cell_font_bold",
        "message0": "%{BKY_TSUMICKY_EXCEL_SET_CELL_FONT_BOLD}",
        "args0": [
          {
            "type": "input_value",
            "name": "range",
            "check": "xlRange"
          },
          {
            "type": "input_dummy"
          },
          {
            "type": "input_value",
            "name": "is_bold",
            "check": "Boolean"
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": 230,
        "tooltip": "%{BKY_TSUMICKY_EXCEL_SET_CELL_FONT_BOLD_TOOLTIP}",
        "helpUrl": ""
      },
      {
        "type": "excel_set_cell_font_italic",
        "message0": "%{BKY_TSUMICKY_EXCEL_SET_CELL_FONT_ITALIC}",
        "args0": [
          {
            "type": "input_value",
            "name": "range",
            "check": "xlRange"
          },
          {
            "type": "input_dummy"
          },
          {
            "type": "input_value",
            "name": "is_italic",
            "check": "Boolean"
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": 230,
        "tooltip": "%{BKY_TSUMICKY_EXCEL_SET_CELL_FONT_ITALIC_TOOLTIP}",
        "helpUrl": ""
      },
      {
        "type": "excel_set_cell_border_type",
        "message0": "%{BKY_TSUMICKY_EXCEL_SET_CELL_BORDER_TYPE}",
        "args0": [
          {
            "type": "input_value",
            "name": "range",
            "check": "xlRange"
          },
          {
            "type": "field_dropdown",
            "name": "position",
            "options": border_positions
          },
          {
            "type": "field_dropdown",
            "name": "type",
            "options": [
              [
                "%{BKY_TSUMICKY_EXCEL_SET_CELL_BORDER_NONE}",
                "none"
              ],
              [
                {
                  "src": "/icons/excel/border_type/hairline.png",
                  "width": 89,
                  "height": 32,
                  "alt": "%{BKY_TSUMICKY_EXCEL_SET_CELL_BORDER_HAIRLINE}"
                },
                "hairline"
              ],
              [
                {
                  "src": "/icons/excel/border_type/thin_solid.png",
                  "width": 89,
                  "height": 31,
                  "alt": "%{BKY_TSUMICKY_EXCEL_SET_CELL_BORDER_THIN_SOLID}"
                },
                "thin_solid"
              ],
              [
                {
                  "src": "/icons/excel/border_type/thin_dot.png",
                  "width": 89,
                  "height": 31,
                  "alt": "%{BKY_TSUMICKY_EXCEL_SET_CELL_BORDER_THIN_DOT}"
                },
                "thin_dot"
              ],
              [
                {
                  "src": "/icons/excel/border_type/thin_dash.png",
                  "width": 89,
                  "height": 32,
                  "alt": "%{BKY_TSUMICKY_EXCEL_SET_CELL_BORDER_THIN_DASH}"
                },
                "thin_dash"
              ],
              [
                {
                  "src": "/icons/excel/border_type/thin_dash_dot.png",
                  "width": 89,
                  "height": 31,
                  "alt": "%{BKY_TSUMICKY_EXCEL_SET_CELL_BORDER_THIN_DASH_DOT}"
                },
                "thin_dash_dot"
              ],
              [
                {
                  "src": "/icons/excel/border_type/thin_dash_dot_dot.png",
                  "width": 89,
                  "height": 31,
                  "alt": "%{BKY_TSUMICKY_EXCEL_SET_CELL_BORDER_THIN_DASH_DOT_DOT}"
                },
                "thin_dash_dot_dot"
              ],
              [
                {
                  "src": "/icons/excel/border_type/medium_solid.png",
                  "width": 90,
                  "height": 33,
                  "alt": "%{BKY_TSUMICKY_EXCEL_SET_CELL_BORDER_MEDIUM_SOLID}"
                },
                "medium_solid"
              ],
              [
                {
                  "src": "/icons/excel/border_type/medium_slant_dash_dot.png",
                  "width": 90,
                  "height": 33,
                  "alt": "%{BKY_TSUMICKY_EXCEL_SET_CELL_BORDER_MEDIUM_SLANT_DASH_DOT}"
                },
                "medium_slant_dash_dot"
              ],
              [
                {
                  "src": "/icons/excel/border_type/medium_dash.png",
                  "width": 90,
                  "height": 33,
                  "alt": "%{BKY_TSUMICKY_EXCEL_SET_CELL_BORDER_MEDIUM_DASH}"
                },
                "medium_dash"
              ],
              [
                {
                  "src": "/icons/excel/border_type/medium_dash_dot.png",
                  "width": 90,
                  "height": 33,
                  "alt": "%{BKY_TSUMICKY_EXCEL_SET_CELL_BORDER_MEDIUM_DASH_DOT}"
                },
                "medium_dash_dot"
              ],
              [
                {
                  "src": "/icons/excel/border_type/medium_dash_dot_dot.png",
                  "width": 90,
                  "height": 33,
                  "alt": "%{BKY_TSUMICKY_EXCEL_SET_CELL_BORDER_MEDIUM_DASH_DOT_DOT}"
                },
                "medium_dash_dot_dot"
              ],
              [
                {
                  "src": "/icons/excel/border_type/thick_solid.png",
                  "width": 91,
                  "height": 35,
                  "alt": "%{BKY_TSUMICKY_EXCEL_SET_CELL_BORDER_THICK_SOLID}"
                },
                "thick_solid"
              ],
              [
                {
                  "src": "/icons/excel/border_type/double.png",
                  "width": 91,
                  "height": 35,
                  "alt": "%{BKY_TSUMICKY_EXCEL_SET_CELL_BORDER_DOUBLE}"
                },
                "double"
              ],
            ]
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": 230,
        "tooltip": "%{BKY_TSUMICKY_EXCEL_SET_CELL_BORDER_TYPE_TOOLTIP}",
        "helpUrl": ""
      },
      {
        "type": "excel_set_cell_border_color",
        "message0": "%{BKY_TSUMICKY_EXCEL_SET_CELL_BORDER_COLOR}",
        "args0": [
          {
            "type": "input_value",
            "name": "range",
            "check": "xlRange"
          },
          {
            "type": "field_dropdown",
            "name": "position",
            "options": border_positions
          },
          {
            "type": "input_value",
            "name": "color"
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": 230,
        "tooltip": "%{BKY_TSUMICKY_EXCEL_SET_CELL_BORDER_COLOR_TOOLTIP}",
        "helpUrl": ""
      },
      {
        "type": "excel_set_cell_interior_color",
        "message0": "%{BKY_TSUMICKY_EXCEL_SET_CELL_INTERIOR_COLOR}",
        "args0": [
          {
            "type": "input_value",
            "name": "range",
            "check": "xlRange"
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
        "colour": 230,
        "tooltip": "%{BKY_TSUMICKY_EXCEL_SET_CELL_INTERIOR_COLOR_TOOLTIP}",
        "helpUrl": ""
      },
      {
        "type": "excel_set_cell_font_name",
        "message0": "%{BKY_TSUMICKY_EXCEL_SET_CELL_FONT_NAME}",
        "args0": [
          {
            "type": "input_value",
            "name": "range",
            "check": "xlRange"
          },
          {
            "type": "input_value",
            "name": "fontname",
            "check": "String"
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": 230,
        "tooltip": "%{BKY_TSUMICKY_EXCEL_SET_CELL_FONT_NAME_TOOLTIP}",
        "helpUrl": ""
      },
      {
        "type": "excel_set_cell_font_size",
        "message0": "%{BKY_TSUMICKY_EXCEL_SET_CELL_FONT_SIZE}",
        "args0": [
          {
            "type": "input_value",
            "name": "range",
            "check": "xlRange"
          },
          {
            "type": "input_value",
            "name": "fontsize",
            "check": "Number"
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": 230,
        "tooltip": "%{BKY_TSUMICKY_EXCEL_SET_CELL_FONT_SIZE_TOOLTIP}",
        "helpUrl": ""
      }
  ]);
}
