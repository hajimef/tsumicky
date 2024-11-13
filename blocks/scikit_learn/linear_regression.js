export function addBlocks() {
  Blockly.defineBlocksWithJsonArray([
    {
      "type": "sl_lr_init",
      "tooltip": "%{BKY_TSUMICKY_SL_LR_INIT_TOOLTIP}",
      "helpUrl": "",
      "message0": "%{BKY_TSUMICKY_SL_LR_INIT}",
      "args0": [
        {
          "type": "input_dummy",
          "name": ""
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 60
    },
/*
    {
      "type": "sl_lr_loadx",
      "tooltip": "%{BKY_TSUMICKY_SL_LR_LOADX_TOOLTIP}",
      "helpUrl": "",
      "message0": "%{BKY_TSUMICKY_SL_LR_LOADX}",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "type",
          "options": [
            [
              "%{BKY_TSUMICKY_SL_LR_TYPE_TRAIN}",
              "0"
            ],
            [
              "%{BKY_TSUMICKY_SL_LR_TYPE_TEST}",
              "1"
            ]
          ]
        },
        {
          "type": "input_dummy",
          "name": ""
        },
        {
          "type": "input_value",
          "name": "x"
        },
        {
          "type": "input_dummy",
          "name": ""
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 60,
      "inputsInline": true
    },
    {
      "type": "sl_lr_loady",
      "tooltip": "%{BKY_TSUMICKY_SL_LR_LOADY_TOOLTIP}",
      "helpUrl": "",
      "message0": "%{BKY_TSUMICKY_SL_LR_LOADY}",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "type",
          "options": [
            [
              "%{BKY_TSUMICKY_SL_LR_TYPE_TRAIN}",
              "0"
            ],
            [
              "%{BKY_TSUMICKY_SL_LR_TYPE_TEST}",
              "1"
            ]
          ]
        },
        {
          "type": "input_dummy",
          "name": ""
        },
        {
          "type": "input_value",
          "name": "y",
          "check": [ "Array", "xlRange" ]
        },
        {
          "type": "input_dummy",
          "name": ""
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 60,
      "inputsInline": true
    },
*/
    {
      "type": "sl_lr_fit",
      "tooltip": "%{BKY_TSUMICKY_SL_LR_FIT_TOOLTIP}",
      "helpUrl": "",
      "message0": "%{BKY_TSUMICKY_SL_LR_FIT}",
      "args0": [
        {
          "type": "input_dummy",
          "name": ""
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 60
    },
    {
      "type": "sl_lr_coef",
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
      "colour": 60
    },
    {
      "type": "sl_lr_intercept",
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
      "colour": 60
    }    
  ]);
};

