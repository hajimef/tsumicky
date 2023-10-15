let tsumicky_custom_function_mutator_mixin = {
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
    var topBlock = workspace.newBlock('custom_function_container');
    topBlock.initSvg();
  
    var connection = topBlock.getInput('STACK').connection;
    for (var i = 0; i < this.itemCount_; i++) {
      var itemBlock = workspace.newBlock('custom_function_item');
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
        bk.setCheck('KVPair');
        if (i == 0) {
          bk.appendField(Blockly.Msg["TSUMICKY_CUSTOM_FUNCTION_PARAM_CAPTION"]);
          bk.setAlign(Blockly.ALIGN_LEFT);
        }
/*
        bk.setAlign(Blockly.ALIGN_RIGHT);
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
  'tsumicky_custom_function_mutator',
  tsumicky_custom_function_mutator_mixin,
  undefined,
  [ 'custom_function_item' ]
);

export function addBlocks() {
  Blockly.defineBlocksWithJsonArray([
    {
      "type": "custom_function_statement",
      "message0": "%{BKY_TSUMICKY_CUSTOM_FUNCTION_STATEMENT}",
      "args0": [
        {
          "type": "field_variable",
          "name": "ws_name",
          "variable": "sock"
        },
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value",
          "name": "group",
          "check": "String"
        },
        {
          "type": "input_value",
          "name": "subgroup",
          "check": "String"
        },
        {
          "type": "input_value",
          "name": "command",
          "check": "String"
        }
      ],
      "extraState": {
        "itemCount": 1
      },
      "mutator": "tsumicky_custom_function_mutator",
      "inputsInline": false,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 230,
      "tooltip": "%{BKY_TSUMICKY_CUSTOM_FUNCTION_STATEMENT_TOOLTIP}",
      "helpUrl": ""
    },
    {
      "type": "custom_function_value",
      "message0": "%{BKY_TSUMICKY_CUSTOM_FUNCTION_VALUE}",
      "args0": [
        {
          "type": "field_variable",
          "name": "ws_name",
          "variable": "sock"
        },
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value",
          "name": "group",
          "check": "String"
        },
        {
          "type": "input_value",
          "name": "subgroup",
          "check": "String"
        },
        {
          "type": "input_value",
          "name": "command",
          "check": "String"
        }
      ],
      "extraState": {
        "itemCount": 1
      },
      "mutator": "tsumicky_custom_function_mutator",
      "inputsInline": false,
      "output": null,
      "colour": 230,
      "tooltip": "%{BKY_TSUMICKY_CUSTOM_FUNCTION_VALUE_TOOLTIP}",
      "helpUrl": ""
    },
    {
      "type": "custom_function_container",
      "message0": "%{BKY_TSUMICKY_CUSTOM_FUNCTION_CONTAINER}",
      "args0": [
        {
          "type": "input_statement",
          "name": "STACK"
        }
      ],
      'enableContextMenu': false,
      "colour": 230,
      "tooltip": "%{BKY_TSUMICKY_CUSTOM_FUNCTION_CONTAINER_TOOLTIP}",
      "helpUrl": ""
    },
    {
      "type": "custom_function_item",
      "message0": "%{BKY_TSUMICKY_CUSTOM_FUNCTION_ITEM}",
      "enableContextMenu": false,
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 230,
      "tooltip": "%{BKY_TSUMICKY_CUSTOM_FUNCTION_ITEM_TOOLTIP}",
      "helpUrl": ""
    },
    {
      "type": "custom_function_param",
      "message0": "%{BKY_TSUMICKY_CUSTOM_FUNCTION_PARAM}",
      "args0": [
        {
          "type": "input_value",
          "name": "key",
          "check": "String"
        },
        {
          "type": "input_value",
          "name": "value"
        }
      ],
      "inputsInline": true,
      "output": "KVPair",
      "colour": 230,
      "tooltip": "%{BKY_TSUMICKY_CUSTOM_FUNCTION_PARAM_TOOLTIP}",
      "helpUrl": ""
    }
  ]);
};
