export function addBlocks() {
  Blockly.defineBlocksWithJsonArray([
    {
      "type": "basic_main",
      "message0": "%{BKY_TSUMICKY_BASIC_MAIN}",
      "args0": [
        {
          "type": "input_dummy"
        },
        {
          "type": "input_statement",
          "name": "setup"
        },
        {
          "type": "input_dummy"
        },
        {
          "type": "input_statement",
          "name": "loop"
        },
        {
          "type": "input_dummy"
        },
        {
          "type": "input_statement",
          "name": "end"
        }
      ],
      "inputsInline": true,
      "colour": 20,
      "tooltip": "%{BKY_TSUMICKY_BASIC_MAIN_TOOLTIP}",
      "helpUrl": ""
    },
    {
      "type": "basic_normal_main",
      "message0": "%{BKY_TSUMICKY_BASIC_NORMAL_MAIN}",
      "args0": [
        {
          "type": "input_dummy"
        },
        {
          "type": "input_statement",
          "name": "code"
        }
      ],
      "colour": 20,
      "tooltip": "%{BKY_TSUMICKY_BASIC_NORMAL_MAIN_TOOLTIP}",
      "helpUrl": ""
    },
    {
      "type": "basic_console_log",
      "message0": "%{BKY_TSUMICKY_BASIC_CONSOLE_LOG}",
      "args0": [
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value",
          "name": "text"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 20,
      "tooltip": "%{BKY_TSUMICKY_BASIC_CONSOLE_LOG_TOOLTIP}",
      "helpUrl": ""
    },
    {
      "type": "basic_sleep",
      "message0": "%{BKY_TSUMICKY_BASIC_SLEEP}",
      "args0": [
        {
          "type": "input_value",
          "name": "ms",
          "check": "Number"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 20,
      "tooltip": "%{BKY_TSUMICKY_BASIC_SLEEP_TOOLTIP}",
      "helpUrl": ""
    },
    {
      "type": "basic_stop",
      "message0": "%{BKY_TSUMICKY_BASIC_END}",
      "previousStatement": null,
      "colour": 20,
      "tooltip": "%{BKY_TSUMICKY_BASIC_END_TOOLTIP}",
      "helpUrl": ""
    }
  ]);
};
