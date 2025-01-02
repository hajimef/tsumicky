let tsumicky_dict_create_mutator_mixin = {
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
    var topBlock = workspace.newBlock('dict_create_param_container');
    topBlock.initSvg();
  
    var connection = topBlock.getInput('STACK').connection;
    for (var i = 0; i < this.itemCount_; i++) {
      var itemBlock = workspace.newBlock('dict_create_param_item');
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
    let i = 0;
    if (this.itemCount_ == 0) {
      if (!this.getInput('LABEL')) {
        let bk = this.appendDummyInput('LABEL');
        bk.appendField(Blockly.Msg["TSUMICKY_DICT_CREATE_EMPTY"]);
        bk.setAlign(Blockly.ALIGN_LEFT);
      }
    }
    else {
      if (this.getInput('LABEL')) {
        this.removeInput('LABEL');
      }
      for (i = 0; i < this.itemCount_; i++) {
        if (!this.getInput('ADD' + i)) {
          let bk = this.appendValueInput('ADD' + i);
          if (i == 0) {
            bk.appendField(Blockly.Msg["TSUMICKY_DICT_CREATE_ITEM"]);
            bk.setAlign(Blockly.ALIGN_LEFT);
          }
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
  'tsumicky_dict_create_mutator',
  tsumicky_dict_create_mutator_mixin,
  undefined,
  [ 'dict_create_param_item' ]
);

export function addBlocks() {
  Blockly.defineBlocksWithJsonArray([
    {
      "type": "dict_create_with",
      "tooltip": "%{BKY_TSUMICKY_DICT_CREATE_TOOLTIP}",
      "helpUrl": "",
      "message0": "",
      "extraState": {
        "itemCount": 1
      },
      "mutator": "tsumicky_dict_create_mutator",
      "output": "Dictionary",
      "colour": 330,
      "inputsInline": false
    },
    {
      "type": "dict_item",
      "tooltip": "%{BKY_TSUMICKY_DICT_ITEM_TOOLTIP}",
      "helpUrl": "",
      "message0": "%{BKY_TSUMICKY_DICT_ITEM}",
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
      "output": "DictionaryItem",
      "colour": 330,
      "inputsInline": true
    },
    {
      "type": "dict_create_param_container",
      "message0": "%{BKY_TSUMICKY_DICT_CREATE_PARAM_CONTAINER}",
      "args0": [
        {
          "type": "input_statement",
          "name": "STACK"
        }
      ],
      "colour": 330,
      "enableContextMenu": false,
      "tooltip": "%{BKY_TSUMICKY_DICT_CREATE_PARAM_CONTAINER_TOOLTIP}",
      "helpUrl": ""
    },
    {
      "type": "dict_create_param_item",
      "message0": "%{BKY_TSUMICKY_DICT_CREATE_PARAM_ITEM}",
      "previousStatement": null,
      "nextStatement": null,
      "enableContextMenu": false,
      "colour": 330,
      "tooltip": "%{BKY_TSUMICKY_DICT_CREATE_PARAM_ITEM_TOOLTIP}",
      "helpUrl": ""
    },
    {
      "type": "dict_set_item",
      "tooltip": "%{BKY_TSUMICKY_DICT_SET_ITEM_TOOLTIP}",
      "helpUrl": "",
      "message0": "%{BKY_TSUMICKY_DICT_SET_ITEM}",
      "args0": [
        {
          "type": "input_value",
          "name": "dict",
          "check": "Dictionary"
        },
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
      "previousStatement": null,
      "nextStatement": null,
      "colour": 330,
      "inputsInline": true
    },
    {
      "type": "dict_get_item",
      "tooltip": "%{BKY_TSUMICKY_DICT_GET_ITEM_TOOLTIP}",
      "helpUrl": "",
      "message0": "%{BKY_TSUMICKY_DICT_GET_ITEM}",
      "args0": [
        {
          "type": "input_value",
          "name": "dict",
          "check": "Dictionary"
        },
        {
          "type": "input_value",
          "name": "key",
          "check": "String"
        }
      ],
      "output": null,
      "colour": 330,
      "inputsInline": true
    },
    {
      "type": "dict_keys",
      "tooltip": "%{BKY_TSUMICKY_DICT_KEYS_TOOLTIP}",
      "helpUrl": "",
      "message0": "%{BKY_TSUMICKY_DICT_KEYS}",
      "args0": [
        {
          "type": "input_value",
          "name": "dict",
          "check": "Dictionary"
        }
      ],
      "output": "Array",
      "colour": 330,
      "inputsInline": true
    },
    {
      "type": "dict_values",
      "tooltip": "%{BKY_TSUMICKY_DICT_VALUES_TOOLTIP}",
      "helpUrl": "",
      "message0": "%{BKY_TSUMICKY_DICT_VALUES}",
      "args0": [
        {
          "type": "input_value",
          "name": "dict",
          "check": "Dictionary"
        }
      ],
      "output": "Array",
      "colour": 330,
      "inputsInline": true
    },
    {
      "type": "dict_has_key",
      "tooltip": "%{BKY_TSUMICKY_DICT_HAS_KEY_TOOLTIP}",
      "helpUrl": "",
      "message0": "%{BKY_TSUMICKY_DICT_HAS_KEY}",
      "args0": [
        {
          "type": "input_value",
          "name": "dict",
          "check": "Dictionary"
        },
        {
          "type": "input_value",
          "name": "key",
          "check": "String"
        }
      ],
      "output": "Boolean",
      "colour": 330,
      "inputsInline": true
    },
    {
      "type": "dict_from_json",
      "tooltip": "%{BKY_TSUMICKY_DICT_FROM_JSON_TOOLTIP}",
      "helpUrl": "",
      "message0": "%{BKY_TSUMICKY_DICT_FROM_JSON}",
      "args0": [
        {
          "type": "input_value",
          "name": "json",
          "check": "String"
        }
      ],
      "output": null,
      "colour": 330,
      "inputsInline": true
    },
    {
      "type": "dict_to_json",
      "tooltip": "%{BKY_TSUMICKY_DICT_TO_JSON_TOOLTIP}",
      "helpUrl": "",
      "message0": "%{BKY_TSUMICKY_DICT_TO_JSON}",
      "args0": [
        {
          "type": "input_value",
          "name": "dict",
          "check": [ "Dictionary", "Array" ]
        }
      ],
      "output": "String",
      "colour": 330,
      "inputsInline": true
    },
    {
      "type": "dict_each",
      "tooltip": "%{BKY_TSUMICKY_DICT_EACH_TOOLTIP}",
      "helpUrl": "",
      "message0": "%{BKY_TSUMICKY_DICT_EACH}",
      "args0": [
        {
          "type": "input_value",
          "name": "dict",
          "check": "Dict"
        },
        {
          "type": "field_variable",
          "name": "k_var",
          "variable": "k"
        },
        {
          "type": "field_variable",
          "name": "v_var",
          "variable": "v"
        },
        {
          "type": "input_dummy",
          "name": ""
        },
        {
          "type": "input_statement",
          "name": "proc"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 330,
      "inputsInline": true
    }    
  ]);
};
