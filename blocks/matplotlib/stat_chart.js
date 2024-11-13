import { linestyles, markers, DATALABEL_XALIGN, DATALABEL_YALIGN } from './common.js';

const tsumicky_mpl_chart_scatter_datalabel_mutator_mixin = {
  saveExtraState: function() {
  },

  loadExtraState: function(state) {
//    this.updateShape_();
  },

  updateShape_: function (isLabel) {
    const lblInput = this.getInput('label');
    if (isLabel) {
      if (!lblInput) {
        let label = this.appendValueInput('label').appendField('%{BKY_TSUMICKY_MPL_CHART_SCATTER_LABEL}');
        this.moveInputBefore('label', 'xalign_d');
        label.setCheck([ 'Array', 'xlRange' ]);
      }
    }
    else if (lblInput) {
      this.removeInput('label');  
    }
  }
};

const tsumicky_mpl_chart_scatter_datalabel_mutator_extension = function() {
  this.getField('type').setValidator(
    function (option) {
//      console.log("this = ", this);
//      console.log("option = ", option);
      this.getSourceBlock().updateShape_(option == 3);
      return undefined;
    },
  )
};

Blockly.Extensions.registerMutator(
  'tsumicky_mpl_chart_scatter_datalabel_mutator',
  tsumicky_mpl_chart_scatter_datalabel_mutator_mixin,
  tsumicky_mpl_chart_scatter_datalabel_mutator_extension,
);

export function addBlocks() {
  Blockly.defineBlocksWithJsonArray([
    {
      "type": "mpl_chart_scatter",
      "tooltip": "%{BKY_TSUMICKY_MPL_CHART_SCATTER_TOOLTIP}",
      "helpUrl": "",
      "message0": "%{BKY_TSUMICKY_MPL_CHART_SCATTER}",
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
          "check": [ "Array", "slData", "xlRange" ]
        },
        {
          "type": "input_value",
          "name": "y",
          "check": [ "Array", "slData", "xlRange" ]
        },
        {
          "type": "input_value",
          "name": "marker",
          "check": "String"
        },
        {
          "type": "input_value",
          "name": "color",
          "check": "Colour"
        },
        {
          "type": "input_value",
          "name": "markersize",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "label",
          "check": [ "String", "mplTL" ]
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 60,
      "inputsInline": true
    },
    {
      "type": "mpl_chart_scatter_datalabel",
      "tooltip": "%{BKY_TSUMICKY_MPL_CHART_SCATTER_DATALABEL_TOOLTIP}",
      "helpUrl": "",
      "message0": "%{BKY_TSUMICKY_MPL_CHART_SCATTER_DATALABEL}",
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
          "type": "field_dropdown",
          "name": "type",
          "options": [
            [
              "X",
              "0"
            ],
            [
              "Y",
              "1"
            ],
            [
              "(X, Y)",
              "2"
            ],
            [
              "%{BKY_TSUMICKY_MPL_CHART_SCATTER_DATALABEL_LABEL}",
              "3"
            ]
          ]
        },
        {
          "type": "input_dummy",
          "name": "valtype"
        },
        {
          "type": "field_dropdown",
          "name": "xalign",
          "options": DATALABEL_XALIGN
        },
        {
          "type": "input_dummy",
          "name": "xalign_d"
        },
        {
          "type": "field_dropdown",
          "name": "yalign",
          "options": DATALABEL_YALIGN
        },
        {
          "type": "input_dummy",
          "name": ""
        },
        {
          "type": "input_value",
          "name": "xofs",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "yofs",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "angle",
          "check": "Number"
        }
      ],
      "mutator": "tsumicky_mpl_chart_scatter_datalabel_mutator",
      "previousStatement": null,
      "nextStatement": null,
      "colour": 60,
      "inputsInline": true
    },
    {
      "type": "mpl_chart_histgram",
      "tooltip": "%{BKY_TSUMICKY_MPL_CHART_HISTGRAM_TOOLTIP}",
      "helpUrl": "",
      "message0": "%{BKY_TSUMICKY_MPL_CHART_HISTGRAM}",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "type",
          "options": [
            [
              "%{BKY_TSUMICKY_MPL_CHART_HISTGRAM_NORMAL}",
              "0"
            ],
            [
              "%{BKY_TSUMICKY_MPL_CHART_HISTGRAM_STACKED}",
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
          "check": [ "Array", "xlRange" ]
        },
        {
          "type": "input_value",
          "name": "bins",
          "check": [ "Array", "Number" ]
        },
        {
          "type": "field_checkbox",
          "name": "norm",
          "checked": "FALSE"
        },
        {
          "type": "input_dummy",
          "name": ""
        },
        {
          "type": "field_checkbox",
          "name": "cumulative",
          "checked": "FALSE"
        },
        {
          "type": "input_dummy",
          "name": ""
        },
        {
          "type": "input_value",
          "name": "ecs",
          "check": [ "Array", "Colour" ]
        },
        {
          "type": "input_value",
          "name": "colors",
          "check": [ "Array", "Colour" ]
        },
        {
          "type": "input_value",
          "name": "alpha",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "label",
          "check": [ "Array", "String", "mplTL" ]
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 60,
      "inputsInline": true
    },
    {
      "type": "mpl_chart_histgram_excel_bins",
      "tooltip": "%{BKY_TSUMICKY_MPL_CHART_HISTGRAM_EXCEL_BINS_TOOLTIP}",
      "helpUrl": "",
      "message0": "%{BKY_TSUMICKY_MPL_CHART_HISTGRAM_EXCEL_BINS}",
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
      "colour": 60,
      "inputsInline": true
    },
    {
      "type": "mpl_chart_histgram_excel_n",
      "tooltip": "%{BKY_TSUMICKY_MPL_CHART_HISTGRAM_EXCEL_N_TOOLTIP}",
      "helpUrl": "",
      "message0": "%{BKY_TSUMICKY_MPL_CHART_HISTGRAM_EXCEL_N}",
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
      "colour": 60,
      "inputsInline": true
    }
  ]);
};