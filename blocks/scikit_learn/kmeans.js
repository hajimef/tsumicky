export function addBlocks() {
  Blockly.defineBlocksWithJsonArray([
    {
      "type": "sl_kmeans_init",
      "tooltip": "%{BKY_TSUMICKY_SL_KMEANS_INIT_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.net/tsumicky/cmn/ref/scikit-learn/clustering/k-means/blocks.php#init",
      "message0": "%{BKY_TSUMICKY_SL_KMEANS_INIT}",
      "args0": [
        {
          "type": "input_dummy",
          "name": ""
        },
        {
          "type": "input_value",
          "name": "num",
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
      "colour": 165,
      "inputsInline": true
    },                     
    {
      "type": "sl_kmeans_fit",
      "tooltip": "%{BKY_TSUMICKY_SL_KMEANS_FIT_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.net/tsumicky/cmn/ref/scikit-learn/clustering/k-means/blocks.php#fit",
      "message0": "%{BKY_TSUMICKY_SL_KMEANS_FIT}",
      "args0": [
        {
          "type": "input_dummy",
          "name": ""
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 165
    },
    {
      "type": "sl_kmeans_plot",
      "tooltip": "%{BKY_TSUMICKY_SL_KMEANS_PLOT_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.net/tsumicky/cmn/ref/scikit-learn/clustering/k-means/blocks.php#plot",
      "message0": "%{BKY_TSUMICKY_SL_KMEANS_PLOT}",
      "args0": [
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
        },
        {
          "type": "input_value",
          "name": "x",
          "check": [ "slDataSN", "slDataSL" ]
        },
        {
          "type": "input_value",
          "name": "y",
          "check": [ "slDataSN", "slDataSL" ]
        },
        {
          "type": "input_value",
          "name": "p_marker",
          "check": "String"
        },
        {
          "type": "input_dummy",
          "name": ""
        },
        {
          "type": "input_value",
          "name": "p_size",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "c_marker",
          "check": "String"
        },
        {
          "type": "input_dummy",
          "name": ""
        },
        {
          "type": "input_value",
          "name": "c_color",
          "check": "Colour"
        },
        {
          "type": "input_value",
          "name": "c_size",
          "check": "Number"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 165,
      "inputsInline": false
    },
    {
      "type": "sl_kmeans_label",
      "tooltip": "%{BKY_TSUMICKY_SL_KMEANS_LABEL_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.net/tsumicky/cmn/ref/scikit-learn/clustering/k-means/blocks.php#label",
      "message0": "%{BKY_TSUMICKY_SL_KMEANS_LABEL}",
      "args0": [
        {
          "type": "input_value",
          "name": "range",
          "check": "xlRange"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 165,
      "inputsInline": true
    },
    {
      "type": "sl_kmeans_center",
      "tooltip": "%{BKY_TSUMICKY_SL_KMEANS_CENTER_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.net/tsumicky/cmn/ref/scikit-learn/clustering/k-means/blocks.php#center",
      "message0": "%{BKY_TSUMICKY_SL_KMEANS_CENTER}",
      "args0": [
        {
          "type": "input_value",
          "name": "range",
          "check": "xlRange"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 165,
      "inputsInline": true
    }
  ]);
}
