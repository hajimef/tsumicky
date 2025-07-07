const types = [
  [
    "%{BKY_TSUMICKY_SL_LOGR_PLOT_TRAIN}",
    "0"
  ],
  [
    "%{BKY_TSUMICKY_SL_LOGR_PLOT_TEST}",
    "1"
  ]
];

export function addBlocks() {
  Blockly.defineBlocksWithJsonArray([
    {
      "type": "sl_logr_init",
      "tooltip": "%{BKY_TSUMICKY_SL_LOGR_INIT_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/cmn/ref/scikit-learn/classification/logistic-regression/blocks.php#init",
      "message0": "%{BKY_TSUMICKY_SL_LOGR_INIT}",
      "args0": [
        {
          "type": "input_dummy",
          "name": ""
        },
        {
          "type": "input_value",
          "name": "max_iter",
          "check": "Number"
        },
        {
          "type": "field_dropdown",
          "name": "multi_class",
          "options": [
            [
              "ovr",
              "ovr"
            ],
            [
              "multinomial",
              "multinomial"
            ],
            [
              "auto",
              "auto"
            ]
          ]
        },
        {
          "type": "input_dummy",
          "name": ""
        },
        {
          "type": "field_dropdown",
          "name": "solver",
          "options": [
            [
              "lbfgs",
              "lbfgs"
            ],
            [
              "liblinear",
              "liblinear"
            ],
            [
              "newton-cg",
              "newton-cg"
            ]
          ]
        },
        {
          "type": "input_dummy",
          "name": ""
        },
        {
          "type": "field_dropdown",
          "name": "penalty",
          "options": [
            [
              "L1",
              "l1"
            ],
            [
              "L2",
              "l2"
            ],
            [
              "elasticnet",
              "elasticnet"
            ]
          ]
        },
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
          "name": "l1_ratio",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "random_state",
          "check": "Number"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 120,
      "inputsInline": false
    },
    {
      "type": "sl_logr_fit",
      "tooltip": "%{BKY_TSUMICKY_SL_LOGR_FIT_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/cmn/ref/scikit-learn/classification/logistic-regression/blocks.php#fit",
      "message0": "%{BKY_TSUMICKY_SL_LOGR_FIT}",
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
      "type": "sl_logr_plot",
      "tooltip": "%{BKY_TSUMICKY_SL_LOGR_PLOT_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/cmn/ref/scikit-learn/classification/logistic-regression/blocks.php#plot",
      "message0": "%{BKY_TSUMICKY_SL_LOGR_PLOT}",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "type",
          "options": types
        },
        {
          "type": "input_dummy",
          "name": ""
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
      "previousStatement": null,
      "nextStatement": null,
      "colour": 120,
      "inputsInline": true
    },
    {
      "type": "sl_logr_decision_function",
      "tooltip": "%{BKY_TSUMICKY_SL_LOGR_DECISION_FUNCTION_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/cmn/ref/scikit-learn/classification/logistic-regression/blocks.php#decision_function",
      "message0": "%{BKY_TSUMICKY_SL_LOGR_DECISION_FUNCTION}",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "type",
          "options": types
        },
        {
          "type": "input_value",
          "name": "range",
          "check": "xlRange"
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
      "type": "sl_logr_predict_proba",
      "tooltip": "%{BKY_TSUMICKY_SL_LOGR_PREDICT_PROBA_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/cmn/ref/scikit-learn/classification/logistic-regression/blocks.php#predict_proba",
      "message0": "%{BKY_TSUMICKY_SL_LOGR_PREDICT_PROBA}",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "type",
          "options": types
        },
        {
          "type": "input_value",
          "name": "range",
          "check": "xlRange"
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
};