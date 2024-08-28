let tsumicky_excel_macro_mutator_mixin = {
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
    var topBlock = workspace.newBlock('excel_macro_param_container');
    topBlock.initSvg();
  
    var connection = topBlock.getInput('STACK').connection;
    for (var i = 0; i < this.itemCount_; i++) {
      var itemBlock = workspace.newBlock('excel_macro_param_item');
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
          bk.appendField(Blockly.Msg["TSUMICKY_EXCEL_MACRO_PARAM_CAPTION"]);
          bk.setAlign(Blockly.ALIGN_LEFT);
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
  'tsumicky_excel_macro_mutator',
  tsumicky_excel_macro_mutator_mixin,
  undefined,
  [ 'excel_macro_param_item' ]
);

export function addBlocks() {
  Blockly.defineBlocksWithJsonArray([
    {
      "type": "excel_macro_statement_book",
      "message0": "%{BKY_TSUMICKY_EXCEL_MACRO_STATEMENT_BOOK}",
      "args0": [
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value",
          "name": "workbook",
          "check": "xlWorkbook"
        },
        {
          "type": "input_value",
          "name": "macro"
        }
      ],
      "extraState": {
        "itemCount": 1
      },
      "mutator": "tsumicky_excel_macro_mutator",
      "inputsInline": false,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 210,
      "tooltip": "%{BKY_TSUMICKY_EXCEL_MACRO_STATEMENT_BOOK_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.net/tsumicky/cmn/ref/excel/macro/blocks.php#statement_book"
    },
    {
      "type": "excel_macro_statement_addin",
      "message0": "%{BKY_TSUMICKY_EXCEL_MACRO_STATEMENT_ADDIN}",
      "args0": [
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value",
          "name": "macro",
          "check": "String"
        }
      ],
      "extraState": {
        "itemCount": 1
      },
      "mutator": "tsumicky_excel_macro_mutator",
      "inputsInline": false,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 210,
      "tooltip": "%{BKY_TSUMICKY_EXCEL_MACRO_STATEMENT_ADDIN_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.net/tsumicky/cmn/ref/excel/macro/blocks.php#statement_addin"
    },
    {
      "type": "excel_macro_value_book",
      "message0": "%{BKY_TSUMICKY_EXCEL_MACRO_VALUE_BOOK}",
      "args0": [
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value",
          "name": "workbook",
          "check": "xlWorkbook"
        },
        {
          "type": "input_value",
          "name": "macro"
        }
      ],
      "extraState": {
        "itemCount": 1
      },
      "mutator": "tsumicky_excel_macro_mutator",
      "inputsInline": false,
      "output": null,
      "colour": 210,
      "tooltip": "%{BKY_TSUMICKY_EXCEL_MACRO_VALUE_BOOK_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.net/tsumicky/cmn/ref/excel/macro/blocks.php#value_book"
    },
    {
      "type": "excel_macro_value_addin",
      "message0": "%{BKY_TSUMICKY_EXCEL_MACRO_VALUE_ADDIN}",
      "args0": [
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value",
          "name": "macro",
          "check": "String"
        }
      ],
      "extraState": {
        "itemCount": 1
      },
      "mutator": "tsumicky_excel_macro_mutator",
      "inputsInline": false,
      "output": null,
      "colour": 210,
      "tooltip": "%{BKY_TSUMICKY_EXCEL_MACRO_VALUE_ADDIN_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.net/tsumicky/cmn/ref/excel/macro/blocks.php#value_addin"
    },
    {
      "type": "excel_macro_param_container",
      "message0": "%{BKY_TSUMICKY_EXCEL_MACRO_PARAM_CONTAINER}",
      "args0": [
        {
          "type": "input_statement",
          "name": "STACK"
        }
      ],
      "colour": 210,
      "enableContextMenu": false,
      "tooltip": "%{BKY_TSUMICKY_EXCEL_MACRO_PARAM_CONTAINER_TOOLTIP}",
      "helpUrl": ""
    },
    {
      "type": "excel_macro_param_item",
      "message0": "%{BKY_TSUMICKY_EXCEL_MACRO_PARAM_ITEM}",
      "previousStatement": null,
      "nextStatement": null,
      "enableContextMenu": false,
      "colour": 210,
      "tooltip": "%{BKY_TSUMICKY_EXCEL_MACRO_PARAM_ITEM_TOOLTIP}",
      "helpUrl": ""
    }
  ]);
}
