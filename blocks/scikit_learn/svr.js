export function addBlocks() {
  Blockly.defineBlocksWithJsonArray([
    {
      "type": "sl_linear_svr_init",
      "tooltip": "%{BKY_TSUMICKY_SL_LINEAR_SVR_INIT_TOOLTIP}",
      "helpUrl": "",
      "message0": "%{BKY_TSUMICKY_SL_LINEAR_SVR_INIT}",
      "args0": [
        {
          "type": "input_dummy",
          "name": ""
        },
        {
          "type": "input_value",
          "name": "c",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "epsilon",
          "check": "Number"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 120,
      "inputsInline": true
    },
    {
      "type": "sl_svr_fit",
      "tooltip": "%{BKY_TSUMICKY_SL_SVR_FIT_TOOLTIP}",
      "helpUrl": "",
      "message0": "%{BKY_TSUMICKY_SL_SVR_FIT}",
      "args0": [
        {
          "type": "input_dummy",
          "name": ""
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 120
    },
    {
      "type": "sl_svr_coef",
      "tooltip": "%{BKY_TSUMICKY_SL_LR_COEF_TOOLTIP}",
      "helpUrl": "",
      "message0": "%{BKY_TSUMICKY_SL_LR_COEF}",
      "args0": [
        {
          "type": "input_dummy",
          "name": ""
        }
      ],
      "output": "Number",
      "colour": 120
    },
    {
      "type": "sl_svr_intercept",
      "tooltip": "%{BKY_TSUMICKY_SL_LR_INTERCEPT_TOOLTIP}",
      "helpUrl": "",
      "message0": "%{BKY_TSUMICKY_SL_LR_INTERCEPT}",
      "args0": [
        {
          "type": "input_dummy",
          "name": ""
        }
      ],
      "output": "Number",
      "colour": 120
    },
    {
      "type": "sl_svr_support_vectors",
      "tooltip": "%{BKY_TSUMICKY_SL_SVR_SUPPORT_VECTORS_TOOLTIP}",
      "helpUrl": "",
      "message0": "%{BKY_TSUMICKY_SL_SVR_SUPPORT_VECTORS}",
      "args0": [
        {
          "type": "input_dummy",
          "name": ""
        }
      ],
      "output": "Array",
      "colour": 120,
      "inputsInline": true
    },
    {
      "type": "sl_svr_support",
      "tooltip": "%{BKY_TSUMICKY_SL_SVR_SUPPORT_TOOLTIP}",
      "helpUrl": "",
      "message0": "%{BKY_TSUMICKY_SL_SVR_SUPPORT}",
      "args0": [
        {
          "type": "input_dummy",
          "name": ""
        }
      ],
      "output": "Array",
      "colour": 120,
      "inputsInline": true
    }    
  ]);
};