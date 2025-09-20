const misc_connect_mutator_mixin = {
  saveExtraState: function() {
  },

  loadExtraState: function(state) {
//    this.updateShape_();
  },

  updateShape_: function (checked) {
    console.log(checked);
    if (this.getInput('v_dummy')) {
      this.removeInput('v_dummy');
    }
    if (checked == 'TRUE') {
      let v_dummy = this.appendDummyInput('v_dummy');
      let fld = new Blockly.FieldVariable('misc');
      v_dummy.appendField(fld, 'var');
    }
  }
};

const misc_connect_mutator_extension = function() {
  this.getField('assign').setValidator(
    function (checked) {
      this.getSourceBlock().updateShape_(checked);
      return undefined;
    },
  );
};

Blockly.Extensions.registerMutator(
  'tsumicky_misc_connect_mutator',
  misc_connect_mutator_mixin,
  misc_connect_mutator_extension,
);

export function addBlocks() {
  Blockly.defineBlocksWithJsonArray([
    {
      "type": "misc_connect",
      "tooltip": "%{BKY_TSUMICKY_MISC_COMMON_INIT_TOOLTIP}",
      "helpUrl": "",
      "message0": "%{BKY_TSUMICKY_MISC_COMMON_INIT}",
      "args0": [
        {
          "type": "input_value",
          "name": "host",
          "check": "String"
        },
        {
          "type": "input_value",
          "name": "port",
          "check": "Number"
        },
        {
          "type": "field_checkbox",
          "name": "assign",
          "checked": "FALSE"
        },
        {
          "type": "input_dummy",
          "name": ""
        }
      ],
      "mutator": "tsumicky_misc_connect_mutator",
      "previousStatement": null,
      "nextStatement": null,
      "colour": 15,
      "inputsInline": true
    }
  ]);
}
