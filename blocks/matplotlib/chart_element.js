import { linestyles } from './common.js';

const xy_axes = [
  [
    "%{BKY_TSUMICKY_MPL_CHART_ELEMENT_AXIS_X}",
    "0"
  ],
  [
    "%{BKY_TSUMICKY_MPL_CHART_ELEMENT_AXIS_Y}",
    "1"
  ]
];

export function addBlocks() {
  Blockly.defineBlocksWithJsonArray([
    {
      "type": "mpl_chartelm_figure_title",
      "tooltip": "%{BKY_TSUMICKY_MPL_CHART_ELEMENT_FIGURE_TITLE_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.net/tsumicky/cmn/ref/matplotlib/chart-element/blocks.php#figure_title",
      "message0": "%{BKY_TSUMICKY_MPL_CHART_ELEMENT_FIGURE_TITLE}",
      "args0": [
        {
          "type": "input_value",
          "name": "title",
          "check": "String"
        },
        {
          "type": "input_dummy",
          "name": ""
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 165,
      "inputsInline": true
    },
    {
      "type": "mpl_chartelm_title",
      "tooltip": "%{BKY_TSUMICKY_MPL_CHART_ELEMENT_TITLE_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.net/tsumicky/cmn/ref/matplotlib/chart-element/blocks.php#title",
      "message0": "%{BKY_TSUMICKY_MPL_CHART_ELEMENT_TITLE}",
      "args0": [
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
          "name": "title",
          "check": "String"
        },
        {
          "type": "input_dummy",
          "name": ""
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 165,
      "inputsInline": true
    },
    {
      "type": "mpl_chartelm_legend",
      "tooltip": "%{BKY_TSUMICKY_MPL_CHART_ELEMENT_LEGEND_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.net/tsumicky/cmn/ref/matplotlib/chart-element/blocks.php#legend",
      "message0": "%{BKY_TSUMICKY_MPL_CHART_ELEMENT_LEGEND}",
      "args0": [
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
          "type": "input_dummy",
          "name": ""
        },
        {
          "type": "input_value",
          "name": "title",
          "check": "String"
        },
        {
          "type": "field_dropdown",
          "name": "loc",
          "options": [
            [
              "%{BKY_TSUMICKY_MPL_CHART_ELEMENT_LEGEND_LOC_BEST}",
              "best"
            ],
            [
              "%{BKY_TSUMICKY_MPL_CHART_ELEMENT_LEGEND_LOC_UPPER_LEFT}",
              "upper left"
            ],
            [
              "%{BKY_TSUMICKY_MPL_CHART_ELEMENT_LEGEND_LOC_UPPER_CENTER}",
              "upper center"
            ],
            [
              "%{BKY_TSUMICKY_MPL_CHART_ELEMENT_LEGEND_LOC_UPPER_RIGHT}",
              "upper right"
            ],
            [
              "%{BKY_TSUMICKY_MPL_CHART_ELEMENT_LEGEND_LOC_CENTER_LEFT}",
              "center left"
            ],
            [
              "%{BKY_TSUMICKY_MPL_CHART_ELEMENT_LEGEND_LOC_CENTER}",
              "center"
            ],
            [
              "%{BKY_TSUMICKY_MPL_CHART_ELEMENT_LEGEND_LOC_CENTER_RIGHT}",
              "right center"
            ],
            [
              "%{BKY_TSUMICKY_MPL_CHART_ELEMENT_LEGEND_LOC_LOWER_LEFT}",
              "lower left"
            ],
            [
              "%{BKY_TSUMICKY_MPL_CHART_ELEMENT_LEGEND_LOC_LOWER_CENTER}",
              "lower center"
            ],
            [
              "%{BKY_TSUMICKY_MPL_CHART_ELEMENT_LEGEND_LOC_LOWER_RIGHT}",
              "lower right"
            ]
          ]
        },
        {
          "type": "input_dummy",
          "name": ""
        },
        {
          "type": "input_value",
          "name": "ncol",
          "check": "Number"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 165,
      "inputsInline": true
    },
    {
      "type": "mpl_chartelm_axis_label",
      "tooltip": "%{BKY_TSUMICKY_MPL_CHART_ELEMENT_AXIS_LABEL_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.net/tsumicky/cmn/ref/matplotlib/chart-element/blocks.php#label",
      "message0": "%{BKY_TSUMICKY_MPL_CHART_ELEMENT_AXIS_LABEL}",
      "args0": [
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
          "name": "xy",
          "options": xy_axes
        },
        {
          "type": "input_dummy",
          "name": ""
        },
        {
          "type": "input_value",
          "name": "label",
          "check": "String"
        },
        {
          "type": "input_dummy",
          "name": ""
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 165,
      "inputsInline": true
    },
    {
      "type": "mpl_chartelm_ticks",
      "tooltip": "%{BKY_TSUMICKY_MPL_CHART_ELEMENT_TICKS_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.net/tsumicky/cmn/ref/matplotlib/chart-element/blocks.php#ticks",
      "message0": "%{BKY_TSUMICKY_MPL_CHART_ELEMENT_TICKS}",
      "args0": [
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
          "name": "xy",
          "options": xy_axes
        },
        {
          "type": "input_dummy",
          "name": ""
        },
        {
          "type": "input_value",
          "name": "ticks",
          "check": [ "Array", "xlRange" ]
        },
        {
          "type": "input_dummy",
          "name": ""
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 165,
      "inputsInline": true
    },
    {
      "type": "mpl_chartelm_tick_labels",
      "tooltip": "%{BKY_TSUMICKY_MPL_CHART_ELEMENT_TICK_LABELS_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.net/tsumicky/cmn/ref/matplotlib/chart-element/blocks.php#tick_labels",
      "message0": "%{BKY_TSUMICKY_MPL_CHART_ELEMENT_TICK_LABELS}",
      "args0": [
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
          "name": "xy",
          "options": xy_axes
        },
        {
          "type": "input_dummy",
          "name": ""
        },
        {
          "type": "input_value",
          "name": "ticks",
          "check": [ "Array", "xlRange" ]
        },
        {
          "type": "input_dummy",
          "name": ""
        },
        {
          "type": "input_value",
          "name": "labels",
          "check": [ "Array", "xlRange" ]
        },
        {
          "type": "input_dummy",
          "name": ""
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 165,
      "inputsInline": true
    },
    {
      "type": "mpl_tick_list",
      "tooltip": "%{BKY_TSUMICKY_MPL_CHART_ELEMENT_TICK_LIST_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.net/tsumicky/cmn/ref/matplotlib/chart-element/blocks.php#tick_list",
      "message0": "%{BKY_TSUMICKY_MPL_CHART_ELEMENT_TICK_LIST}",
      "args0": [
        {
          "type": "input_value",
          "name": "from",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "to",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "step",
          "check": "Number"
        },
      ],
      "output": "Array",
      "colour": 255,
      "inputsInline": true
    },
    {
      "type": "mpl_chartelm_lim",
      "tooltip": "%{BKY_TSUMICKY_MPL_CHART_ELEMENT_LIM_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.net/tsumicky/cmn/ref/matplotlib/chart-element/blocks.php#lim",
      "message0": "%{BKY_TSUMICKY_MPL_CHART_ELEMENT_LIM}",
      "args0": [
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
          "name": "xy",
          "options": xy_axes
        },
        {
          "type": "input_dummy",
          "name": ""
        },
        {
          "type": "input_value",
          "name": "from",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "to",
          "check": "Number"
        },
        {
          "type": "input_dummy",
          "name": ""
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 165,
      "inputsInline": true
    },
    {
      "type": "mpl_chartelm_grid",
      "tooltip": "%{BKY_TSUMICKY_MPL_CHART_ELEMENT_GRID_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.net/tsumicky/cmn/ref/matplotlib/chart-element/blocks.php#grid",
      "message0": "%{BKY_TSUMICKY_MPL_CHART_ELEMENT_GRID}",
      "args0": [
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
          "type": "input_dummy",
          "name": ""
        },
        {
          "type": "input_value",
          "name": "linewidth",
          "check": "Number"
        },
        {
          "type": "field_dropdown",
          "name": "linestyle",
          "options": linestyles
        },
        {
          "type": "input_dummy",
          "name": ""
        },
        {
          "type": "input_value",
          "name": "color"
        },
        {
          "type": "field_dropdown",
          "name": "xy",
          "options": [
            [
              "%{BKY_TSUMICKY_MPL_CHART_ELEMENT_GRID_BOTH}",
              "0"
            ],
            [
              "%{BKY_TSUMICKY_MPL_CHART_ELEMENT_GRID_X}",
              "1"
            ],
            [
              "%{BKY_TSUMICKY_MPL_CHART_ELEMENT_GRID_Y}",
              "2"
            ]
          ]
        },
        {
          "type": "input_dummy",
          "name": ""
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 165,
      "inputsInline": true
    } 
  ]);
};