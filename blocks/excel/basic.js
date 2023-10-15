/*
let inCompose = false;

Blockly.Extensions.register('warning_on_change', function() {
  // Example validation upon block change:
  this.setOnChange(function(e) {
    let mainWs = Blockly.getMainWorkspace();
    let mainWsId = mainWs.id;
    let eventWsId = e.workspaceId;
    if (e.json && e.json.type == 'excel_os_join_path2' && mainWsId == eventWsId && e.type == 'create') {
      console.log('type = ', e.type, 'mainWs = ', mainWsId, 'eventWs = ', eventWsId);
      console.log(e);
      console.log(this);
        for (var i = 0; i < this.itemCount_; i++) {
//        if (!this.getInput('ADD' + i)) {
          let bk = this.getInput('ADD' + i);
          let txtBlock = Blockly.getMainWorkspace().newBlock('text');
          txtBlock.initSvg();
          txtBlock.render();
          bk.setCheck('String');
          bk.connection.connect(txtBlock.outputConnection);
//        }
      }
    }
  });
});
*/

let tsumicky_excel_os_join_path_mutator_mixin = {
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
    var topBlock = workspace.newBlock('excel_os_join_path_container');
    topBlock.initSvg();
  
    var connection = topBlock.getInput('STACK').connection;
    for (var i = 0; i < this.itemCount_; i++) {
      var itemBlock = workspace.newBlock('excel_os_join_path_item');
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
        bk.setCheck('String');
/*
        bk.setAlign(Blockly.ALIGN_RIGHT);
        bk.appendField('項目');
        if (inCompose) {
          let txtBlock = Blockly.getMainWorkspace().newBlock('text');
          txtBlock.initSvg();
          txtBlock.render();
          bk.connection.connect(txtBlock.outputConnection);
        }
*/
      }
    }
    while (this.getInput('ADD' + i)) {
      this.removeInput('ADD' + i);
      i++;
    }
  }
}

Blockly.Extensions.registerMutator(
  'tsumicky_excel_os_join_path_mutator',
  tsumicky_excel_os_join_path_mutator_mixin,
  undefined,
  [ 'excel_os_join_path_item' ]
);

export function addBlocks() {
  Blockly.defineBlocksWithJsonArray([
    {
      "type": "excel_launch",
      "message0": "%{BKY_TSUMICKY_EXCEL_LAUNCH}",
      "args0": [
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value",
          "name": "host",
          "check": "String"
        },
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value",
          "name": "port"
        },
        {
          "type": "field_dropdown",
          "name": "visible",
          "options": [
            [
              "%{BKY_TSUMICKY_EXCEL_LAUNCH_VISIBLE}",
              "1"
            ],
            [
              "%{BKY_TSUMICKY_EXCEL_LAUNCH_INVISIBLE}",
              "0"
            ]
          ]
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 120,
      "tooltip": "%{BKY_TSUMICKY_EXCEL_LAUNCH_TOOLTIP}",
      "helpUrl": ""
    },
    {
      "type": "excel_quit",
      "message0": "%{BKY_TSUMICKY_EXCEL_QUIT}",
      "previousStatement": null,
      "nextStatement": null,
      "colour": 120,
      "tooltip": "%{BKY_TSUMICKY_EXCEL_QUIT_TOOLTIP}",
      "helpUrl": ""
    },
    {
      "type": "excel_new_file",
      "message0": "%{BKY_TSUMICKY_EXCEL_NEW_FILE}",
      "previousStatement": null,
      "nextStatement": null,
      "colour": 120,
      "tooltip": "%{BKY_TSUMICKY_EXCEL_NEW_FILE_TOOLTIP}",
      "helpUrl": ""
    },
    {
      "type": "excel_open_file",
      "message0": "%{BKY_TSUMICKY_EXCEL_OPEN_FILE}",
      "args0": [
        {
          "type": "input_value",
          "name": "filename",
          "check": "String"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 120,
      "tooltip": "%{BKY_TSUMICKY_EXCEL_OPEN_FILE_TOOLTIP}",
      "helpUrl": ""
    },
    {
      "type": "excel_find_file",
      "message0": "%{BKY_TSUMICKY_EXCEL_FIND_FILE}",
      "output": "String",
      "colour": 120,
      "tooltip": "%{BKY_TSUMICKY_EXCEL_FIND_FILE_TOOLTIP}",
      "helpUrl": ""
    },
    {
      "type": "excel_save_as_file",
      "message0": "%{BKY_TSUMICKY_EXCEL_SAVE_AS_FILE}",
      "args0": [
        {
          "type": "input_value",
          "name": "filename",
          "check": "String"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 120,
      "tooltip": "%{BKY_TSUMICKY_EXCEL_SAVE_AS_FILE_TOOLTIP}",
      "helpUrl": ""
    },
    {
      "type": "excel_save_file",
      "message0": "%{BKY_TSUMICKY_EXCEL_SAVE_FILE}",
      "previousStatement": null,
      "nextStatement": null,
      "colour": 120,
      "tooltip": "%{BKY_TSUMICKY_EXCEL_SAVE_FILE_TOOLTIP}",
      "helpUrl": ""
    },
    {
      "type": "excel_os_special_folder_path",
      "message0": "%{BKY_TSUMICKY_EXCEL_OS_SPECIAL_FOLDER_PATH}",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "folder",
          "options": [
            [
              "%{BKY_TSUMICKY_EXCEL_SPECIAL_FOLDER_HOME}",
              "0"
            ],
            [
              "%{BKY_TSUMICKY_EXCEL_SPECIAL_FOLDER_DESKTOP}",
              "1"
            ],
            [
              "%{BKY_TSUMICKY_EXCEL_SPECIAL_FOLDER_DOCUMENTS}",
              "2"
            ],
            [
              "%{BKY_TSUMICKY_EXCEL_SPECIAL_FOLDER_DOWNLOADS}",
              "3"
            ]
          ]
        }
      ],
      "inputsInline": true,
      "output": "String",
      "colour": 120,
      "tooltip": "%{BKY_TSUMICKY_EXCEL_OS_SPECIAL_FOLDER_PATH_TOOLTIP}",
      "helpUrl": ""
    },
    {
      "type": "excel_os_join_path",
      "message0": "%{BKY_TSUMICKY_EXCEL_OS_JOIN_PATH}",
      "extraState": {
        "itemCount": 2
      },
      "mutator": "tsumicky_excel_os_join_path_mutator",
      "inputsInline": true,
      "output": "String",
      "colour": 120,
      "tooltip": "%{BKY_TSUMICKY_EXCEL_OS_JOIN_PATH_TOOLTIP}",
      "helpUrl": ""
    },
    {
      "type": "excel_os_join_path_container",
      "message0": "%{BKY_TSUMICKY_EXCEL_OS_JOIN_CONTAINER}",
      "args0": [
        {
          "type": "input_statement",
          "name": "STACK"
        }
      ],
      'enableContextMenu': false,
      "colour": 230,
      "tooltip": "%{BKY_TSUMICKY_EXCEL_OS_JOIN_CONTAINER_TOOLTIP}",
      "helpUrl": ""
    },
    {
      "type": "excel_os_join_path_item",
      "message0": "%{BKY_TSUMICKY_EXCEL_OS_JOIN_ITEM}",
      "enableContextMenu": false,
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 230,
      "tooltip": "%{BKY_TSUMICKY_EXCEL_OS_JOIN_ITEM_TOOLTIP}",
      "helpUrl": ""
    },
    {
      "type": "excel_basic_cells_set",
      "message0": "%{BKY_TSUMICKY_EXCEL_BASIC_CELLS_SET}",
      "args0": [
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value",
          "name": "row",
          "check": "Number"
        },
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value",
          "name": "col",
          "check": "Number"
        },
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value",
          "name": "value"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 120,
      "tooltip": "%{BKY_TSUMICKY_EXCEL_BASIC_CELLS_SET_TOOLTIP}",
      "helpUrl": ""
    },
    {
      "type": "excel_basic_cells_get",
      "message0": "%{BKY_TSUMICKY_EXCEL_BASIC_CELLS_GET}",
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
        }
      ],
      "inputsInline": true,
      "output": null,
      "colour": 120,
      "tooltip": "%{BKY_TSUMICKY_EXCEL_BASIC_CELLS_GET_TOOLTIP}",
      "helpUrl": ""
    },
    {
      "type": "excel_basic_cells_formula",
      "message0": "%{BKY_TSUMICKY_EXCEL_BASIC_CELLS_FORMULA}",
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
          "name": "formula",
          "check": "String"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 120,
      "tooltip": "%{BKY_TSUMICKY_EXCEL_BASIC_CELLS_FORMULA_TOOLTIP}",
      "helpUrl": ""
    },
    {
      "type": "excel_run_book_macro",
      "message0": "%{BKY_TSUMICKY_EXCEL_RUN_BOOK_MACRO}",
      "args0": [
        {
          "type": "field_input",
          "name": "macro",
          "text": "macro"
        },
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value",
          "name": "params"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 120,
      "tooltip": "%{BKY_TSUMICKY_EXCEL_RUN_BOOK_MACRO_TOOLTIP}",
      "helpUrl": ""
    },
  ]);
}
