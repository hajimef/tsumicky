export function addBlocks() {
  Blockly.defineBlocksWithJsonArray([
    {
      "type": "excel_active_workbook",
      "message0": "%{BKY_TSUMICKY_EXCEL_ACTIVE_WORKBOOK}",
      "inputsInline": true,
      "output": "xlWorkbook",
      "colour": 290,
      "tooltip": "%{BKY_TSUMICKY_EXCEL_ACTIVE_WORKBOOK_TOOLTIP}",
      "helpUrl": ""
    },
    {
      "type": "excel_workbook_by_name",
      "message0": "%{BKY_TSUMICKY_EXCEL_WORKBOOK_BY_NAME}",
      "args0": [
        {
          "type": "input_value",
          "name": "filename",
          "check": "String"
        }
      ],
      "inputsInline": true,
      "output": "xlWorkbook",
      "colour": 290,
      "tooltip": "%{BKY_TSUMICKY_EXCEL_WORKBOOK_BY_NAME_TOOLTIP}",
      "helpUrl": ""
    },
    {
      "type": "excel_set_workbook_do",
      "message0": "%{BKY_TSUMICKY_EXCEL_SET_WORKBOOK_DO}",
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
      "colour": 290,
      "tooltip": "%{BKY_TSUMICKY_EXCEL_SET_WORKBOOK_DO_TOOLTIP}",
      "helpUrl": ""
    },
    {
      "type": "excel_current_workbook",
      "message0": "%{BKY_TSUMICKY_EXCEL_CURRENT_WORKBOOK}",
      "inputsInline": true,
      "output": "xlWorkbook",
      "colour": 290,
      "tooltip": "%{BKY_TSUMICKY_EXCEL_CURRENT_WORKBOOK_TOOLTIP}",
      "helpUrl": ""
    },
    {
      "type": "excel_workbook_save",
      "message0": "%{BKY_TSUMICKY_EXCEL_WORKBOOK_SAVE}",
      "args0": [
        {
          "type": "input_value",
          "name": "workbook",
          "check": "xlWorkbook"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 290,
      "tooltip": "%{BKY_TSUMICKY_EXCEL_WORKBOOK_SAVE_TOOLTIP}",
      "helpUrl": ""
    },
    {
      "type": "excel_workbook_save_as",
      "message0": "%{BKY_TSUMICKY_EXCEL_WORKBOOK_SAVE_AS}",
      "args0": [
        {
          "type": "input_value",
          "name": "workbook",
          "check": "xlWorkbook"
        },
        {
          "type": "input_value",
          "name": "filename",
          "check": "String"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 290,
      "tooltip": "%{BKY_TSUMICKY_EXCEL_WORKBOOK_SAVE_AS_TOOLTIP}",
      "helpUrl": ""
    },
    {
      "type": "excel_workbooks",
      "message0": "%{BKY_TSUMICKY_EXCEL_WORKBOOKS}",
      "output": "Array",
      "colour": 290,
      "tooltip": "%{BKY_TSUMICKY_EXCEL_WORKBOOKS_TOOLTIP}",
      "helpUrl": ""
    },
    {
      "type": "excel_workbooks_count",
      "message0": "%{BKY_TSUMICKY_EXCEL_WORKBOOKS_COUNT}",
      "output": "Number",
      "colour": 290,
      "tooltip": "%{BKY_TSUMICKY_EXCEL_WORKBOOKS_COUNT_TOOLTIP}",
      "helpUrl": ""
    },
    {
      "type": "excel_workbook_name",
      "message0": "%{BKY_TSUMICKY_EXCEL_WORKBOOK_NAME}",
      "args0": [
        {
          "type": "input_value",
          "name": "workbook",
          "check": "xlWorkbook"
        }
      ],
      "output": "String",
      "colour": 290,
      "tooltip": "%{BKY_TSUMICKY_EXCEL_WORKBOOK_NAME_TOOLTIP}",
      "helpUrl": ""
    },
    {
      "type": "excel_workbook_fullname",
      "message0": "%{BKY_TSUMICKY_EXCEL_WORKBOOK_FULLNAME}",
      "args0": [
        {
          "type": "input_value",
          "name": "workbook",
          "check": "xlWorkbook"
        }
      ],
      "output": "String",
      "colour": 290,
      "tooltip": "%{BKY_TSUMICKY_EXCEL_WORKBOOK_FULLNAME_TOOLTIP}",
      "helpUrl": ""
    },
    {
      "type": "excel_workbook_path",
      "message0": "%{BKY_TSUMICKY_EXCEL_WORKBOOK_PATH}",
      "args0": [
        {
          "type": "input_value",
          "name": "workbook",
          "check": "xlWorkbook"
        }
      ],
      "output": "String",
      "colour": 290,
      "tooltip": "%{BKY_TSUMICKY_EXCEL_WORKBOOK_PATH_TOOLTIP}",
      "helpUrl": ""
    }
  ]);
}
