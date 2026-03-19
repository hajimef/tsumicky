export function addBlocks() {
  Blockly.defineBlocksWithJsonArray([
    {
      "type": "unoq_code_detect_init_detector",
      "tooltip": "%{BKY_TSUMICKY_UNOQ_CODE_DETECT_INIT_DETECTOR_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/ja/ref/micom/unoq/code-detect/blocks.php#init_detector",
      "message0": "%{BKY_TSUMICKY_UNOQ_CODE_DETECT_INIT_DETECTOR}",
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
          "name": "camera",
          "check": "UNOQ_Camera"
        },
        {
          "type": "field_checkbox",
          "name": "display",
          "checked": "TRUE"
        },
        {
          "type": "input_dummy",
          "name": ""
        }
      ],
      "output": "UNOQ_CodeDetector",
      "colour": 120,
      "inputsInline": true
    },
    {
      "type": "unoq_code_detect_result",
      "tooltip": "%{BKY_TSUMICKY_UNOQ_CODE_DETECT_RESULT_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/ja/ref/micom/unoq/code-detect/blocks.php#result",
      "message0": "%{BKY_TSUMICKY_UNOQ_CODE_DETECT_RESULT}",
      "args0": [
        {
          "type": "field_variable",
          "name": "ws_var",
          "variable": "sock"
        },
        {
          "type": "input_value",
          "name": "detector",
          "check": "UNOQ_CodeDetector"
        }
      ],
      "output": "UNOQ_CodeResult",
      "colour": 120,
      "inputsInline": true
    },
    {
      "type": "unoq_code_detect_result_type",
      "tooltip": "%{BKY_TSUMICKY_UNOQ_CODE_DETECT_RESULT_TYPE_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/ja/ref/micom/unoq/code-detect/blocks.php#result_type",
      "message0": "%{BKY_TSUMICKY_UNOQ_CODE_DETECT_RESULT_TYPE}",
      "args0": [
        {
          "type": "field_variable",
          "name": "var",
          "variable": "result"
        }
      ],
      "output": "String",
      "colour": 120
    },
    {
      "type": "unoq_code_detect_result_value",
      "tooltip": "%{BKY_TSUMICKY_UNOQ_CODE_DETECT_RESULT_VALUE_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/ja/ref/micom/unoq/code-detect/blocks.php#result_value",
      "message0": "%{BKY_TSUMICKY_UNOQ_CODE_DETECT_RESULT_VALUE}",
      "args0": [
        {
          "type": "field_variable",
          "name": "var",
          "variable": "result"
        }
      ],
      "output": "String",
      "colour": 120
    },
    {
      "type": "unoq_code_detect_reset_seen_all",
      "tooltip": "%{BKY_TSUMICKY_UNOQ_CODE_DETECT_RESET_SEEN_ALL_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/ja/ref/micom/unoq/code-detect/blocks.php#reset_seen_all",
      "message0": "%{BKY_TSUMICKY_UNOQ_CODE_DETECT_RESET_SEEN_ALL}",
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
          "name": "detector",
          "check": "UNOQ_CodeDetector"
        },
        {
          "type": "input_dummy",
          "name": ""
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 120,
      "inputsInline": true
    },
    {
      "type": "unoq_code_detect_reset_seen",
      "tooltip": "%{BKY_TSUMICKY_UNOQ_CODE_DETECT_RESET_SEEN_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/ja/ref/micom/unoq/code-detect/blocks.php#reset_seen",
      "message0": "%{BKY_TSUMICKY_UNOQ_CODE_DETECT_RESET_SEEN}",
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
          "name": "detector",
          "check": "UNOQ_CodeDetector"
        },
        {
          "type": "input_value",
          "name": "value",
          "check": "String"
        },
        {
          "type": "input_dummy",
          "name": ""
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 120,
      "inputsInline": true
    }
  ]);
}
