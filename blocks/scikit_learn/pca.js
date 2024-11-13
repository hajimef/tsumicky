export function addBlocks() {
  Blockly.defineBlocksWithJsonArray([
    {
      "type": "sl_pca_init",
      "tooltip": "%{BKY_TSUMICKY_SL_PCA_INIT_TOOLTIP}",
      "helpUrl": "",
      "message0": "%{BKY_TSUMICKY_SL_PCA_INIT}",
      "args0": [
        {
          "type": "input_dummy",
          "name": "NAME"
        },
        {
          "type": "input_value",
          "name": "n_components",
          "check": "Number"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 210,
      "inputsInline": true
    },
    {
      "type": "sl_pca_transform",
      "tooltip": "%{BKY_TSUMICKY_SL_PCA_TRANSFORM_TOOLTIP}",
      "helpUrl": "",
      "message0": "%{BKY_TSUMICKY_SL_PCA_TRANSFORM}",
      "args0": [
        {
          "type": "input_dummy",
          "name": ""
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 210,
      "inputsInline": true
    },
    {
      "type": "sl_pca_rdim",
      "tooltip": "%{BKY_TSUMICKY_SL_PCA_RDIM_TOOLTIP}",
      "helpUrl": "",
      "message0": "%{BKY_TSUMICKY_SL_PCA_RDIM}",
      "args0": [
        {
          "type": "input_dummy",
          "name": ""
        }
      ],
      "output": "Number",
      "colour": 210,
      "inputsInline": true
    },
    {
      "type": "sl_pca_ev",
      "tooltip": "%{BKY_TSUMICKY_SL_PCA_EV_TOOLTIP}",
      "helpUrl": "",
      "message0": "%{BKY_TSUMICKY_SL_PCA_EV}",
      "args0": [
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
      "colour": 210,
      "inputsInline": true
    },     
    {
      "type": "sl_pca_evr",
      "tooltip": "%{BKY_TSUMICKY_SL_PCA_EVR_TOOLTIP}",
      "helpUrl": "",
      "message0": "%{BKY_TSUMICKY_SL_PCA_EVR}",
      "args0": [
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
      "colour": 210,
      "inputsInline": true
    },
    {
      "type": "sl_pca_components",
      "tooltip": "%{BKY_TSUMICKY_SL_PCA_COMPONENTS_TOOLTIP}",
      "helpUrl": "",
      "message0": "%{BKY_TSUMICKY_SL_PCA_COMPONENTS}",
      "args0": [
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
      "colour": 210,
      "inputsInline": true
    }
  ]);
};