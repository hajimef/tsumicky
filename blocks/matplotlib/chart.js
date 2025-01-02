import { linestyles, markers, DATALABEL_XALIGN, DATALABEL_YALIGN } from './common.js';

const BAR_CHART_TYPE = [
  [
    "%{BKY_TSUMICKY_MPL_CHART_BAR_VERTICAL}",
    "0"
  ],
  [
    "%{BKY_TSUMICKY_MPL_CHART_BAR_HORIZONTAL}",
    "1"
  ],
  [
    "%{BKY_TSUMICKY_MPL_CHART_BAR_VERTICAL_STACK}",
    "2"
  ],
  [
    "%{BKY_TSUMICKY_MPL_CHART_BAR_HORIZONTAL_STACK}",
    "3"
  ]
];

const DATALABEL_XPOS = [
  [
    "%{BKY_TSUMICKY_MPL_CHART_DATALABEL_POS_LEFT}",
    "0"
  ],
  [
    "%{BKY_TSUMICKY_MPL_CHART_DATALABEL_POS_CENTER}",
    "1"
  ],
  [
    "%{BKY_TSUMICKY_MPL_CHART_DATALABEL_POS_RIGHT}",
    "2"
  ]
];
const DATALABEL_YPOS = [
  [
    "%{BKY_TSUMICKY_MPL_CHART_DATALABEL_POS_TOP}",
    "0"
  ],
  [
    "%{BKY_TSUMICKY_MPL_CHART_DATALABEL_POS_CENTER}",
    "1"
  ],
  [
    "%{BKY_TSUMICKY_MPL_CHART_DATALABEL_POS_BOTTOM}",
    "2"
  ]
];

export function addBlocks() {
  Blockly.defineBlocksWithJsonArray([
    {
      "type": "mpl_chart_bar",
      "tooltip": "%{BKY_TSUMICKY_MPL_CHART_BAR_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.net/tsumicky/cmn/ref/matplotlib/general-chart/blocks.php#bar",
      "message0": "%{BKY_TSUMICKY_MPL_CHART_BAR}",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "xy",
          "options": BAR_CHART_TYPE
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
          "name": "y",
          "check": [ "Array", "xlRange" ]
        },
        {
          "type": "input_value",
          "name": "linewidth",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "linestyle",
          "check": "String"
        },
        {
          "type": "input_value",
          "name": "linecolor",
          "check": "Colour"
        },
        {
          "type": "input_value",
          "name": "color",
          "check": "Colour"
        },
        {
          "type": "input_value",
          "name": "width",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "pos",
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
      "inputsInline": true,
      "colour": 60
    },
    {
      "type": "mpl_chart_bar_datalabel",
      "tooltip": "%{BKY_TSUMICKY_MPL_CHART_BAR_DATALABEL_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.net/tsumicky/cmn/ref/matplotlib/general-chart/blocks.php#bar_datalabel",
      "message0": "%{BKY_TSUMICKY_MPL_CHART_BAR_DATALABEL}",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "xy",
          "options": BAR_CHART_TYPE
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
          "type": "field_dropdown",
          "name": "xpos",
          "options": DATALABEL_XPOS
        },
        {
          "type": "input_dummy",
          "name": ""
        },
        {
          "type": "field_dropdown",
          "name": "ypos",
          "options": DATALABEL_YPOS
        },
        {
          "type": "input_dummy",
          "name": ""
        },
        {
          "type": "field_dropdown",
          "name": "xalign",
          "options": DATALABEL_XALIGN
        },
        {
          "type": "input_dummy",
          "name": ""
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
      "previousStatement": null,
      "nextStatement": null,
      "colour": 60,
      "inputsInline": true
    },    
    {
      "type": "mpl_chart_clear_stack_y",
      "tooltip": "%{BKY_TSUMICKY_MPL_CHART_CLEAR_STACK_Y_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.net/tsumicky/cmn/ref/matplotlib/general-chart/blocks.php#clear_stack_y",
      "message0": "%{BKY_TSUMICKY_MPL_CHART_CLEAR_STACK_Y}",
      "args0": [
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
      "type": "mpl_chart_plot",
      "tooltip": "%{BKY_TSUMICKY_MPL_CHART_PLOT_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.net/tsumicky/cmn/ref/matplotlib/general-chart/blocks.php#plot",
      "message0": "%{BKY_TSUMICKY_MPL_CHART_PLOT}",
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
          "name": "linewidth",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "linestyle",
          "check": "String"
        },
        {
          "type": "input_value",
          "name": "color",
          "check": "Colour"
        },
        {
          "type": "input_value",
          "name": "marker",
          "check": "String"
        },
        {
          "type": "input_value",
          "name": "markersize",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "markercolor",
          "check": "Colour"
        },
        {
          "type": "input_value",
          "name": "label",
          "check": [ "String", "mplTL" ]
        },
        {
          "type": "field_checkbox",
          "name": "sort_x",
          "checked": "TRUE"
        },
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 60,
      "inputsInline": true
    },
    {
      "type": "mpl_chart_plot_datalabel",
      "tooltip": "%{BKY_TSUMICKY_MPL_CHART_PLOT_DATALABEL_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.net/tsumicky/cmn/ref/matplotlib/general-chart/blocks.php#plot_datalabel",
      "message0": "%{BKY_TSUMICKY_MPL_CHART_PLOT_DATALABEL}",
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
          "name": "xalign",
          "options": DATALABEL_XALIGN
        },
        {
          "type": "input_dummy",
          "name": ""
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
      "previousStatement": null,
      "nextStatement": null,
      "colour": 60,
      "inputsInline": true
    },
    {
      "type": "mpl_chart_pie",
      "tooltip": "%{BKY_TSUMICKY_MPL_CHART_PIE_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.net/tsumicky/cmn/ref/matplotlib/general-chart/blocks.php#pie",
      "message0": "%{BKY_TSUMICKY_MPL_CHART_PIE}",
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
          "check": [ "Array", "xlRange" ]
        },
        {
          "type": "input_value",
          "name": "label",
          "check": [ "Array", "xlRange" ]
        },
        {
          "type": "input_value",
          "name": "labeldistance",
          "check": "Number"
        },
        {
          "type": "field_checkbox",
          "name": "rotatelabels",
          "checked": "FALSE"
        },
        {
          "type": "input_dummy",
          "name": ""
        },
        {
          "type": "input_value",
          "name": "colors",
          "check": "Array"
        },
        {
          "type": "input_value",
          "name": "explode",
          "check": [ "Array", "xlRange" ]
        },
        {
          "type": "input_value",
          "name": "radius",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "autopct",
          "check": "String"
        },
        {
          "type": "input_value",
          "name": "pctdistance",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "c_radius",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "edgecolor",
          "check": "Colour"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 60,
      "inputsInline": true
    },
    {
      "type": "mpl_chart_markers",
      "tooltip": "%{BKY_TSUMICKY_MPL_CHART_MARKER_LIST_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.net/tsumicky/cmn/ref/matplotlib/general-chart/blocks.php#markers",
      "message0": "%1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "markers",
          "options": markers
        }
      ],
      "output": "String",
      "colour": 120
    },
    {
      "type": "mpl_chart_linestyles",
      "tooltip": "%{BKY_TSUMICKY_MPL_CHART_LINESTYLE_LIST_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.net/tsumicky/cmn/ref/matplotlib/general-chart/blocks.php#linestyles",
      "message0": "%1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "linestyles",
          "options": linestyles
        },
      ],
      "output": "String",
      "colour": 120
    },
    {
      "type": "mpl_chart_top_label",
      "tooltip": "%{BKY_TSUMICKY_MPL_CHART_TOP_LABEL_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.net/tsumicky/cmn/ref/matplotlib/general-chart/blocks.php#top_label",
      "message0": "%{BKY_TSUMICKY_MPL_CHART_TOP_LABEL}",
      "args0": [
        {
          "type": "input_dummy",
          "name": ""
        }
      ],
      "output": "mplTL",
      "colour": 120,
      "inputsInline": true
    }
  ]);
};