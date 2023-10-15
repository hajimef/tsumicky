export function addBlocks() {
  Blockly.defineBlocksWithJsonArray([
    {
        "type": "excel_active_sheet",
        "message0": "%{BKY_TSUMICKY_EXCEL_ACTIVE_SHEET}",
        "args0": [
          {
            "type": "input_value",
            "name": "workbook",
            "check": "xlWorkbook"
          }
        ],
        "inputsInline": true,
        "output": "xlSheet",
        "colour": 260,
        "tooltip": "%{BKY_TSUMICKY_EXCEL_ACTIVE_SHEET_TOOLTIP}",
        "helpUrl": ""
    },
    {
        "type": "excel_sheet_by_index",
        "message0": "%{BKY_TSUMICKY_EXCEL_SHEET_BY_INDEX}",
        "args0": [
          {
            "type": "input_value",
            "name": "workbook",
            "check": "xlWorkbook"
          },
          {
            "type": "input_value",
            "name": "index",
            "check": "Number"
          }
        ],
        "inputsInline": true,
        "output": "xlSheet",
        "colour": 260,
        "tooltip": "%{BKY_TSUMICKY_EXCEL_SHEET_BY_INDEX_TOOLTIP}",
        "helpUrl": ""
    },
    {
      "type": "excel_sheet_by_name",
      "message0": "%{BKY_TSUMICKY_EXCEL_SHEET_BY_NAME}",
      "args0": [
        {
          "type": "input_value",
          "name": "workbook",
          "check": "xlWorkbook"
        },
        {
          "type": "input_value",
          "name": "sheetname",
          "check": "String"
        }
      ],
      "inputsInline": true,
      "output": "xlSheet",
      "colour": 260,
      "tooltip": "%{BKY_TSUMICKY_EXCEL_SHEET_BY_NAME_TOOLTIP}",
      "helpUrl": ""
    },
    {
      "type": "excel_sheet_add",
      "message0": "%{BKY_TSUMICKY_EXCEL_SHEET_ADD}",
      "args0": [
        {
          "type": "input_value",
          "name": "workbook",
          "check": "xlWorkbook"
        },
        {
          "type": "input_value",
          "name": "sheetname",
          "check": "String"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 260,
      "tooltip": "%{BKY_TSUMICKY_EXCEL_SHEET_ADD_TOOLTIP}",
      "helpUrl": ""
    },
    {
      "type": "excel_set_sheet_do",
      "message0": "%{BKY_TSUMICKY_EXCEL_SET_SHEET_DO}",
      "args0": [
        {
          "type": "input_value",
          "name": "sheet",
          "check": "xlSheet"
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
      "colour": 260,
      "tooltip": "%{BKY_TSUMICKY_EXCEL_SET_SHEET_DO_TOOLTIP}",
      "helpUrl": ""
    },
    {
      "type": "excel_set_sheet_loop",
      "message0": "%{BKY_TSUMICKY_EXCEL_SET_SHEET_LOOP}",
      "args0": [
        {
          "type": "input_value",
          "name": "workbook",
          "check": "xlWorkbook"
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
      "colour": 260,
      "tooltip": "%{BKY_TSUMICKY_EXCEL_SET_SHEET_LOOP_TOOLTIP}",
      "helpUrl": ""
    },
    {
      "type": "excel_current_sheet",
      "message0": "%{BKY_TSUMICKY_EXCEL_CURRENT_SHEET}",
      "inputsInline": true,
      "output": "xlSheet",
      "colour": 260,
      "tooltip": "%{BKY_TSUMICKY_EXCEL_CURRENT_SHEET_TOOLTIP}",
      "helpUrl": ""
    },
    {
      "type": "excel_set_sheet_name",
      "message0": "%1 の名前を %2 にする",
      "args0": [
        {
          "type": "input_value",
          "name": "sheet",
          "check": "xlSheet"
        },
        {
          "type": "input_value",
          "name": "name",
          "check": "String"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 260,
      "tooltip": "",
      "helpUrl": ""
    },
    {
      "type": "excel_sheet_name",
      "message0": "%{BKY_TSUMICKY_EXCEL_SHEET_NAME}",
      "args0": [
        {
          "type": "input_value",
          "name": "sheet",
          "check": "xlSheet"
        }
      ],
      "output": "String",
      "colour": 260,
      "tooltip": "%{BKY_TSUMICKY_EXCEL_SHEET_NAME_TOOLTIP}",
      "helpUrl": ""
    },
    {
      "type": "excel_sheet_index",
      "message0": "%{BKY_TSUMICKY_EXCEL_SHEET_INDEX}",
      "args0": [
        {
          "type": "input_value",
          "name": "sheet",
          "check": "xlSheet"
        }
      ],
      "output": "Number",
      "colour": 260,
      "tooltip": "%{BKY_TSUMICKY_EXCEL_SHEET_INDEX_TOOLTIP}",
      "helpUrl": ""
    },
    {
      "type": "excel_sheet_parent",
      "message0": "%{BKY_TSUMICKY_EXCEL_SHEET_PARENT}",
      "args0": [
        {
          "type": "input_value",
          "name": "sheet",
          "check": "xlSheet"
        }
      ],
      "output": "xlWorkbook",
      "colour": 260,
      "tooltip": "%{BKY_TSUMICKY_EXCEL_SHEET_PARENT_TOOLTIP}",
      "helpUrl": ""
    },
    {
      "type": "excel_sheets",
      "args0": [
        {
          "type": "input_value",
          "name": "workbook",
          "check": "xlWorkbook"
        }
      ],
      "message0": "%{BKY_TSUMICKY_EXCEL_SHEETS}",
      "output": "Array",
      "colour": 260,
      "tooltip": "%{BKY_TSUMICKY_EXCEL_SHEETS_TOOLTIP}",
      "helpUrl": ""
    },
    {
      "type": "excel_sheets_count",
      "message0": "%{BKY_TSUMICKY_EXCEL_SHEETS_COUNT}",
      "args0": [
        {
          "type": "input_value",
          "name": "workbook",
          "check": "xlWorkbook"
        }
      ],
      "output": "Number",
      "colour": 260,
      "tooltip": "%{BKY_TSUMICKY_EXCEL_SHEETS_COUNT_TOOLTIP}",
      "helpUrl": ""
    },
    {
      "type": "excel_set_sheet_tab_color",
      "message0": "%{BKY_TSUMICKY_EXCEL_SET_SHEET_TAB_COLOR}",
      "args0": [
        {
          "type": "input_value",
          "name": "sheet",
          "check": "xlSheet"
        },
        {
          "type": "input_value",
          "name": "color"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 260,
      "tooltip": "%{BKY_TSUMICKY_EXCEL_SET_SHEET_TAB_COLOR_TOOLTIP}",
      "helpUrl": ""
    },
    {
      "type": "excel_reset_sheet_tab_color",
      "message0": "%{BKY_TSUMICKY_EXCEL_RESET_SHEET_TAB_COLOR}",
      "args0": [
        {
          "type": "input_value",
          "name": "sheet",
          "check": "xlSheet"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 260,
      "tooltip": "%{BKY_TSUMICKY_EXCEL_RESET_SHEET_TAB_COLOR_TOOLTIP}",
      "helpUrl": ""
    }
  ]);
}
