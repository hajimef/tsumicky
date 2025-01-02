const data_types = [
  [
    "%{BKY_TSUMICKY_SL_DATA_TYPE_TRAIN}",
    "0"
  ],
  [
    "%{BKY_TSUMICKY_SL_DATA_TYPE_TEST}",
    "1"
  ],
  [
    "%{BKY_TSUMICKY_SL_DATA_TYPE_ALL}",
    "2"
  ]
];

const avg_types = [
  [
    "%{BKY_TSUMICKY_SL_METRICS_AVERAGE_BINARY}",
    "binary"
  ],
  [
    "%{BKY_TSUMICKY_SL_METRICS_AVERAGE_MACRO}",
    "macro"
  ],
  [
    "%{BKY_TSUMICKY_SL_METRICS_AVERAGE_MICRO}",
    "micro"
  ],
  [
    "%{BKY_TSUMICKY_SL_METRICS_AVERAGE_WEIGHTED}",
    "weighted"
  ],
  [
    "%{BKY_TSUMICKY_SL_METRICS_AVERAGE_SAMPLES}",
    "samples"
  ]
];

export function addBlocks() {
  Blockly.defineBlocksWithJsonArray([
    {
      "type": "sl_metrics_mse",
      "message0": "%{BKY_TSUMICKY_SL_METRICS_MSE}",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "type",
          "options": data_types
        }
      ],
      "output": "Number",
      "colour": 225,
      "tooltip": "%{BKY_TSUMICKY_SL_METRICS_MSE_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.net/tsumicky/cmn/ref/scikit-learn/metrics/blocks.php#mse"
    },
    {
      "type": "sl_metrics_rmse",
      "message0": "%{BKY_TSUMICKY_SL_METRICS_RMSE}",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "type",
          "options": data_types
        }
      ],
      "output": "Number",
      "colour": 225,
      "tooltip": "%{BKY_TSUMICKY_SL_METRICS_RMSE_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.net/tsumicky/cmn/ref/scikit-learn/metrics/blocks.php#rmse"
    },
    {
      "type": "sl_metrics_r2_score",
      "message0": "%{BKY_TSUMICKY_SL_METRICS_R2_SCORE}",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "type",
          "options": data_types
        }
      ],
      "output": "Number",
      "colour": 225,
      "tooltip": "%{BKY_TSUMICKY_SL_METRICS_R2_SCORE_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.net/tsumicky/cmn/ref/scikit-learn/metrics/blocks.php#r2score"
    },
    {
      "type": "sl_metrics_confusion_matrix",
      "message0": "%{BKY_TSUMICKY_SL_METRICS_CONFUSION_MATRIX}",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "type",
          "options": data_types
        }
      ],
      "output": "Number",
      "colour": 225,
      "tooltip": "%{BKY_TSUMICKY_SL_METRICS_CONFUSION_MATRIX_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.net/tsumicky/cmn/ref/scikit-learn/metrics/blocks.php#confusion_matrix"
    },
    {
      "type": "sl_metrics_accuracy_score",
      "message0": "%{BKY_TSUMICKY_SL_METRICS_ACCURACY_SCORE}",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "type",
          "options": data_types
        }
      ],
      "output": "Number",
      "colour": 225,
      "tooltip": "%{BKY_TSUMICKY_SL_METRICS_ACCURACY_SCORE_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.net/tsumicky/cmn/ref/scikit-learn/metrics/blocks.php#accuracy_score"
    },
    {
      "type": "sl_metrics_precision_score",
      "message0": "%{BKY_TSUMICKY_SL_METRICS_PRECISION_SCORE}",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "type",
          "options": data_types
        },
        {
          "type": "field_dropdown",
          "name": "average",
          "options": avg_types
        },
      ],
      "output": "Number",
      "colour": 225,
      "tooltip": "%{BKY_TSUMICKY_SL_METRICS_PRECISION_SCORE_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.net/tsumicky/cmn/ref/scikit-learn/metrics/blocks.php#precision_score"
    },
    {
      "type": "sl_metrics_recall_score",
      "message0": "%{BKY_TSUMICKY_SL_METRICS_RECALL_SCORE}",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "type",
          "options": data_types
        },
        {
          "type": "field_dropdown",
          "name": "average",
          "options": avg_types
        },
      ],
      "output": "Number",
      "colour": 225,
      "tooltip": "%{BKY_TSUMICKY_SL_METRICS_RECALL_SCORE_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.net/tsumicky/cmn/ref/scikit-learn/metrics/blocks.php#recall_score"
    },
    {
      "type": "sl_metrics_f1_score",
      "message0": "%{BKY_TSUMICKY_SL_METRICS_F1_SCORE}",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "type",
          "options": data_types
        },
        {
          "type": "field_dropdown",
          "name": "average",
          "options": avg_types
        },
      ],
      "output": "Number",
      "colour": 225,
      "tooltip": "%{BKY_TSUMICKY_SL_METRICS_F1_SCORE_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.net/tsumicky/cmn/ref/scikit-learn/metrics/blocks.php#f1_score"
    }
  ]);
}
