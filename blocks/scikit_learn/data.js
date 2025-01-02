let tsumicky_sl_data_slice_mutator_mixin = {
  saveExtraState: function() {
    return {
      'itemCount': this.itemCount_,
    };
  },

  loadExtraState: function(state) {
    this.itemCount_ = state['itemCount'];
    this.updateShape_();
  },

  mutationToDom: function() {
    var container = Blockly.utils.xml.createElement('mutation');
    container.setAttribute('items', this.itemCount_);
    return container;
  },
  
  domToMutation: function(xmlElement) {
    this.itemCount_ = parseInt(xmlElement.getAttribute('items'), 10);
    this.updateShape_();
  },

  decompose: function(workspace) {
    var topBlock = workspace.newBlock('sl_data_slice_param_container');
    topBlock.initSvg();
  
    var connection = topBlock.getInput('STACK').connection;
    for (var i = 0; i < this.itemCount_; i++) {
      var itemBlock = workspace.newBlock('sl_data_slice_param_item');
      itemBlock.initSvg();
      connection.connect(itemBlock.previousConnection);
      connection = itemBlock.nextConnection;
    }
  
    return topBlock;
  },
  
  compose: function(topBlock) {
    var itemBlock = topBlock.getInputTargetBlock('STACK');
    var connections = [];
    while (itemBlock && !itemBlock.isInsertionMarker()) {
      connections.push(itemBlock.valueConnection_);
      itemBlock = itemBlock.nextConnection &&
          itemBlock.nextConnection.targetBlock();
    }
  
    for (var i = 0; i < this.itemCount_; i++) {
      var connection = this.getInput('ADD' + i).connection.targetConnection;
      if (connection && connections.indexOf(connection) == -1) {
        connection.disconnect();
      }
    }
  
    this.itemCount_ = connections.length;
    this.updateShape_();
  
    for (var i = 0; i < this.itemCount_; i++) {
      if (connections[i]) {
        connections[i].reconnect(this, 'ADD' + i);
      }
    }
  },

  saveConnections: function(topBlock) {
    var itemBlock = topBlock.getInputTargetBlock('STACK');
  
    var i = 0;
    while (itemBlock) {
      var input = this.getInput('ADD' + i);
      itemBlock.valueConnection_ = input && input.connection.targetConnection;
      i++;
      itemBlock = itemBlock.nextConnection &&
          itemBlock.nextConnection.targetBlock();
    }
  },

  updateShape_: function () {
    for (var i = 0; i < this.itemCount_; i++) {
      if (!this.getInput('ADD' + i)) {
        let bk = this.appendValueInput('ADD' + i);
        if (i == 0) {
          bk.appendField(Blockly.Msg["TSUMICKY_SL_DATA_SLICE_PARAM_CAPTION"]);
          bk.setAlign(Blockly.ALIGN_LEFT);
          bk.setCheck([ 'slDataSN', 'slDataSL' ]);
        }
      }
    }
    while (this.getInput('ADD' + i)) {
      this.removeInput('ADD' + i);
      i++;
    }
  }
}

Blockly.Extensions.registerMutator(
  'tsumicky_sl_data_slice_mutator',
  tsumicky_sl_data_slice_mutator_mixin,
  undefined,
  [ 'sl_data_slice_param_item' ]
);

var data_types_0 = [
  [
    "%{BKY_TSUMICKY_SL_DATA_TYPE_TRAIN}",
    "0"
  ],
  [
    "%{BKY_TSUMICKY_SL_DATA_TYPE_TEST}",
    "1"
  ]
];
var data_types = [ ... data_types_0 ];
data_types.push(
  [
    "%{BKY_TSUMICKY_SL_DATA_TYPE_ALL}",
    "2"
  ]
);
var data_xys_0 = [
  [
    "X",
    "0"
  ],
  [
    "Y",
    "1"
  ]
];
var data_xys = [
  [
    "X",
    "0"
  ],
  [
    "%{BKY_TSUMICKY_SL_DATA_XY_COLUMN}",
    "4"
  ],
  [
    "%{BKY_TSUMICKY_SL_DATA_XY_STD_X}",
    "3"
  ],
  [
    "%{BKY_TSUMICKY_SL_DATA_XY_STD_COLUMN}",
    "5"
  ],
  [
    "Y",
    "1"
  ],
  [
    "%{BKY_TSUMICKY_SL_DATA_XY_PREDICT_Y}",
    "2"
  ]
];

const X_COLUMN = 4;
const STD_X_COLUMN = 5;
const PREDICT_Y = 2;
const LTYPE_NUMBER = 0;
const LTYPE_LABEL = 1;

const tsumicky_sl_data_mpl_mutator_mixin = {
  saveExtraState: function() {
  },

  loadExtraState: function(state) {
//    this.updateShape_();
  },

  updateShape_: function (option) {
    function createColumnLabel(label) {
      label.appendField('%{BKY_TSUMICKY_SL_DATA_MPL_COLUMN}');
      let elmS = document.createElement('shadow');
      elmS.setAttribute('type', 'math_number');
      let elmF = document.createElement('field');
      elmF.setAttribute('name', 'NUM');
      elmF.textContent = '1';
      elmS.appendChild(elmF); 
      label.setShadowDom(elmS);
      label.setCheck('Number');
    };

    const ltInput = this.getInput('ltype_d');
    const ofInput = this.getInput('offset');
    if (option == X_COLUMN || option == STD_X_COLUMN) {
      if (ofInput) {
        this.removeInput('offset');
      }
      if (!ltInput) {
        let ltype = this.appendDummyInput('ltype_d');
        ltype.appendField('%{BKY_TSUMICKY_SL_DATA_MPL_TYPE}');
        let fld = new Blockly.FieldDropdown([
          ['%{BKY_TSUMICKY_SL_DATA_MPL_COLUMN}', '0'],
          ['%{BKY_TSUMICKY_SL_DATA_MPL_LABEL}', '1'],
        ]);
        fld.setValidator(
          function (option) {
            let block = this.getSourceBlock();
            let label = block.getInput('label');
            if (label) {
              block.removeInput('label');
            }
            label = block.appendValueInput('label');
            if (option == LTYPE_NUMBER) {
              createColumnLabel(label);
            }
            else if (option == LTYPE_LABEL) {
              label.appendField('%{BKY_TSUMICKY_SL_DATA_MPL_LABEL}');
              let elmS = document.createElement('shadow');
              elmS.setAttribute('type', 'text');
              let elmF = document.createElement('field');
              elmF.setAttribute('name', 'TEXT');
              elmS.appendChild(elmF); 
              label.setShadowDom(elmS);
              label.setCheck('String');
            }
            return undefined;
          },
        )
        ltype.appendField(fld, 'ltype');
        let label = this.appendValueInput('label');
        createColumnLabel(label);
      }
    }
    else if (option == PREDICT_Y) {
      if (ltInput) {
        this.removeInput('ltype_d');
        this.removeInput('label');
      }
      let oi = this.appendValueInput('offset');
      oi.appendField('%{BKY_TSUMICKY_SL_DATA_MPL_OFFSET}');
      let elmS = document.createElement('shadow');
      elmS.setAttribute('type', 'math_number');
      let elmF = document.createElement('field');
      elmF.setAttribute('name', 'NUM');
      elmF.textContent = '0';
      elmS.appendChild(elmF); 
      oi.setShadowDom(elmS);
      oi.setCheck('Number');
    }
    else {
      if (ltInput) {
        this.removeInput('ltype_d');
        this.removeInput('label');
      }
      if (ofInput) {
        this.removeInput('offset');
      }
    }
  }
};

const tsumicky_sl_data_mpl_mutator_extension = function() {
  this.getField('xy').setValidator(
    function (option) {
      this.getSourceBlock().updateShape_(option);
      return undefined;
    },
  );
};

Blockly.Extensions.registerMutator(
  'tsumicky_sl_data_mpl_mutator',
  tsumicky_sl_data_mpl_mutator_mixin,
  tsumicky_sl_data_mpl_mutator_extension,
);


/*
data_xys.push(
  [
    "%{BKY_TSUMICKY_SL_DATA_XY_STD_X}",
    "3"
  ],
  [
    "%{BKY_TSUMICKY_SL_DATA_XY_PREDICT_Y}",
    "2"
  ]
);
*/

export function addBlocks() {
  Blockly.defineBlocksWithJsonArray([
    {
      "type": "sl_data_load_dataset",
      "tooltip": "%{BKY_TSUMICKY_SL_DATA_LOAD_DATASET_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.net/tsumicky/cmn/ref/scikit-learn/data/blocks.php#load_dataset",
      "message0": "%{BKY_TSUMICKY_SL_DATA_LOAD_DATASET}",
      "args0": [
        {
          "type": "input_value",
          "name": "range",
          "check": "xlRange"
        },
        {
          "type": "field_dropdown",
          "name": "dataset",
          "options": [
            [
              "iris",
              "0"
            ],
            [
              "wine",
              "1"
            ],
            [
              "diabetes",
              "2"
            ],
            [
              "breast_cancer",
              "3"
            ],
            [
              "california_housing",
              "4"
            ]
          ]
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 15,
      "inputsInline": true
    },
    {
      "type": "sl_data_load",
      "tooltip": "%{BKY_TSUMICKY_SL_DATA_LOAD_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.net/tsumicky/cmn/ref/scikit-learn/data/blocks.php#load",
      "message0": "%{BKY_TSUMICKY_SL_DATA_LOAD}",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "type",
          "options": data_types_0
        },
        {
          "type": "field_dropdown",
          "name": "xy",
          "options": data_xys_0
        },
        {
          "type": "input_dummy",
          "name": ""
        },
        {
          "type": "input_value",
          "name": "data"
        },
        {
          "type": "input_dummy",
          "name": ""
        },
        {
          "type": "field_checkbox",
          "name": "has_label",
          "checked": "TRUE"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 15,
      "inputsInline": true
    },
    {
      "type": "sl_data_split",
      "tooltip": "%{BKY_TSUMICKY_SL_DATA_SPLIT_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.net/tsumicky/cmn/ref/scikit-learn/data/blocks.php#split",
      "message0": "%{BKY_TSUMICKY_SL_DATA_SPLIT}",
      "args0": [
        {
          "type": "input_dummy",
          "name": ""
        },
        {
          "type": "field_number",
          "name": "train_size",
          "value": 0,
          "min": 0,
          "max": 1
        },
        {
          "type": "input_dummy",
          "name": ""
        },
        {
          "type": "field_number",
          "name": "test_size",
          "value": 0.2,
          "min": 0,
          "max": 1
        },
        {
          "type": "input_dummy",
          "name": ""
        },
        {
          "type": "input_value",
          "name": "random_state",
          "check": "Number"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 15,
      "inputsInline": true
    },
    {
      "type": "sl_data_backup",
      "tooltip": "%{BKY_TSUMICKY_SL_DATA_BACKUP_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.net/tsumicky/cmn/ref/scikit-learn/data/blocks.php#backup",
      "message0": "%{BKY_TSUMICKY_SL_DATA_BACKUP}",
      "previousStatement": null,
      "nextStatement": null,
      "colour": 15,
      "inputsInline": true
    },     
    {
      "type": "sl_data_restore",
      "tooltip": "%{BKY_TSUMICKY_SL_DATA_RESTORE_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.net/tsumicky/cmn/ref/scikit-learn/data/blocks.php#restore",
      "message0": "%{BKY_TSUMICKY_SL_DATA_RESTORE}",
      "previousStatement": null,
      "nextStatement": null,
      "colour": 15,
      "inputsInline": true
    },
    {
      "type": "sl_data_slice",
      "tooltip": "%{BKY_TSUMICKY_SL_DATA_SLICE_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.net/tsumicky/cmn/ref/scikit-learn/data/blocks.php#slice",
      "message0": "%{BKY_TSUMICKY_SL_DATA_SLICE}",
      "extraState": {
        "itemCount": 1
      },
      "mutator": "tsumicky_sl_data_slice_mutator",
      "previousStatement": null,
      "nextStatement": null,
      "colour": 15,
      "inputsInline": false
    },
    {
      "type": "sl_data_slice_number",
      "tooltip": "%{BKY_TSUMICKY_SL_DATA_SLICE_NUMBER_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.net/tsumicky/cmn/ref/scikit-learn/data/blocks.php#slice_number",
      "message0": "%{BKY_TSUMICKY_SL_DATA_SLICE_NUMBER}",
      "args0": [
        {
          "type": "input_value",
          "name": "num",
          "check": "Number"
        }
      ],
      "output": "slDataSN",
      "colour": 15
    }, 
    {
      "type": "sl_data_slice_label",
      "tooltip": "%{BKY_TSUMICKY_SL_DATA_SLICE_LABEL_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.net/tsumicky/cmn/ref/scikit-learn/data/blocks.php#slice_label",
      "message0": "%{BKY_TSUMICKY_SL_DATA_SLICE_LABEL}",
      "args0": [
        {
          "type": "input_value",
          "name": "label",
          "check": "String"
        }
      ],
      "output": "slDataSL",
      "colour": 15
    },
    {
      "type": "sl_data_slice_param_container",
      "message0": "%{BKY_TSUMICKY_SL_DATA_SLICE_PARAM_CONTAINER}",
      "args0": [
        {
          "type": "input_statement",
          "name": "STACK"
        }
      ],
      "colour": 15,
      "enableContextMenu": false,
      "tooltip": "%{BKY_TSUMICKY_SL_DATA_SLICE_PARAM_CONTAINER_TOOLTIP}",
      "helpUrl": ""
    },
    {
      "type": "sl_data_slice_param_item",
      "message0": "%{BKY_TSUMICKY_SL_DATA_SLICE_PARAM_ITEM}",
      "previousStatement": null,
      "nextStatement": null,
      "enableContextMenu": false,
      "colour": 15,
      "tooltip": "%{BKY_TSUMICKY_SL_DATA_SLICE_PARAM_ITEM_TOOLTIP}",
      "helpUrl": ""
    },
/*    
    {
      "type": "sl_data_loadx",
      "tooltip": "%{BKY_TSUMICKY_SL_DATA_LOADX_TOOLTIP}",
      "helpUrl": "",
      "message0": "%{BKY_TSUMICKY_SL_DATA_LOADX}",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "type",
          "options": data_types_0
        },
        {
          "type": "input_dummy",
          "name": ""
        },
        {
          "type": "input_value",
          "name": "x",
          "check": [ "Array", "xlRange" ]
        },
        {
          "type": "input_dummy",
          "name": ""
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 15,
      "inputsInline": true
    },
    {
      "type": "sl_data_loady",
      "tooltip": "%{BKY_TSUMICKY_SL_DATA_LOADY_TOOLTIP}",
      "helpUrl": "",
      "message0": "%{BKY_TSUMICKY_SL_DATA_LOADY}",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "type",
          "options": data_types_0
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
      "colour": 15,
      "inputsInline": true
    },
*/
    {
      "type": "sl_data_standardize",
      "tooltip": "%{BKY_TSUMICKY_SL_DATA_STANDARDIZE_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.net/tsumicky/cmn/ref/scikit-learn/data/blocks.php#standardize",
      "message0": "%{BKY_TSUMICKY_SL_DATA_STANDARDIZE}",
      "args0": [
        {
          "type": "input_dummy",
          "name": "",
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 15
    },
    {
      "type": "sl_data_save",
      "tooltip": "%{BKY_TSUMICKY_SL_DATA_SAVE_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.net/tsumicky/cmn/ref/scikit-learn/data/blocks.php#save",
      "message0": "%{BKY_TSUMICKY_SL_DATA_SAVE}",
      "args0": [
        {
          "type": "input_value",
          "name": "range",
          "check": "xlRange"
        },
        {
          "type": "input_value",
          "name": "data",
          "check": "slData"
        },
        {
          "type": "field_dropdown",
          "name": "type",
          "options": [
            [
              "%{BKY_TSUMICKY_SL_DATA_SAVE_BOTH}",
              "0"
            ],
            [
              "%{BKY_TSUMICKY_SL_DATA_SAVE_VALUE}",
              "1"
            ],
            [
              "%{BKY_TSUMICKY_SL_DATA_SAVE_LABEL}",
              "2"
            ]
          ]
        },
/*
        {
          "type": "field_dropdown",
          "name": "type",
          "options": data_types
        },
        {
          "type": "field_dropdown",
          "name": "xy",
          "options": data_xys
        },
        {
          "type": "input_dummy",
          "name": ""
        }
*/
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 15,
      "inputsInline": true
    },
/*
    {
      "type": "sl_save_predict",
      "tooltip": "",
      "helpUrl": "",
      "message0": "%1 に %2 を書き込む %3",
      "args0": [
        {
          "type": "input_value",
          "name": "range",
          "check": "xlRange"
        },
        {
          "type": "field_dropdown",
          "name": "type",
          "options": [
            [
              "学習用データの予測値",
              "0"
            ],
            [
              "検証用データの予測値",
              "1"
            ],
            [
              "全データの予測値",
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
      "colour": 15,
      "inputsInline": true
    },
    {
      "type": "sl_data_x",
      "tooltip": "%{BKY_TSUMICKY_SL_DATA_X_TOOLTIP}",
      "helpUrl": "",
      "message0": "%{BKY_TSUMICKY_SL_DATA_X}",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "type",
          "options": data_types
        },
        {
          "type": "input_dummy",
          "name": ""
        }
      ],
      "output": "slData",
      "colour": 15
    },               
    {
      "type": "sl_data_y",
      "tooltip": "%{BKY_TSUMICKY_SL_DATA_Y_TOOLTIP}",
      "helpUrl": "",
      "message0": "%{BKY_TSUMICKY_SL_DATA_Y}",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "type",
          "options": data_types
        },
        {
          "type": "input_dummy",
          "name": ""
        }
      ],
      "output": "slData",
      "colour": 15
    }, 
    {
      "type": "sl_data_predict",
      "tooltip": "%{BKY_TSUMICKY_SL_DATA_PREDICT_TOOLTIP}",
      "helpUrl": "",
      "message0": "%{BKY_TSUMICKY_SL_DATA_PREDICT}",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "type",
          "options": data_types
        },
        {
          "type": "input_dummy",
          "name": ""
        }
      ],
      "output": "slData",
      "colour": 15
    },
*/
  
    {
      "type": "sl_data_mpl",
      "tooltip": "%{BKY_TSUMICKY_SL_DATA_MPL_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.net/tsumicky/cmn/ref/scikit-learn/data/blocks.php#mpl",
      "message0": "%{BKY_TSUMICKY_SL_DATA_MPL}",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "type",
          "options": data_types
        },
        {
          "type": "input_dummy",
          "name": ""
        },
        {
          "type": "field_dropdown",
          "name": "xy",
          "options": data_xys
        },
        {
          "type": "input_dummy",
          "name": ""
        }
      ],
      "mutator": "tsumicky_sl_data_mpl_mutator",
      "output": "slData",
      "colour": 15,
      "inputsInline": true
    },
  ]);
};