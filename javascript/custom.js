import * as utils from '/lib/utils.js';

const modName = 'custom';

function setRuntimeName() {
    Blockly.runTimeJS['custom'] = { 'modName': modName, 'file': 'custom' };
}

function getParams(block, generator) {
  let elements = [];
  for (let i = 0; i < block.itemCount_; i++) {
    let scode = generator.valueToCode(block, 'ADD' + i, Blockly.JavaScript.ORDER_NONE);
    if (scode != 'null') {
      elements.push(scode);
    }
  }
  return '{ ' + elements.join(', ') + ' }';
}

export function addJS() {
  javascript.javascriptGenerator.forBlock['custom_function_statement'] = function(block, generator) {
    setRuntimeName()
    var ws_name = generator.nameDB_.getName(block.getFieldValue('ws_name'), Blockly.Names.NameType.VARIABLE);
    var group = generator.valueToCode(block, 'group', javascript.Order.ATOMIC);
    var subgroup = generator.valueToCode(block, 'subgroup', javascript.Order.ATOMIC);
    var command = generator.valueToCode(block, 'command', javascript.Order.ATOMIC);
    let code = 'await $_' + modName + '.runCustomFuncStatement(' + ws_name + ', ' + group + ', ' + subgroup + ', ' + command + ', ' + getParams(block, generator) + ');\n';
    return code;
  };

  javascript.javascriptGenerator.forBlock['custom_function_value'] = function(block, generator) {
    setRuntimeName()
    var ws_name = generator.nameDB_.getName(block.getFieldValue('ws_name'), Blockly.Names.NameType.VARIABLE);
    var group = generator.valueToCode(block, 'group', javascript.Order.ATOMIC);
    var subgroup = generator.valueToCode(block, 'subgroup', javascript.Order.ATOMIC);
    var command = generator.valueToCode(block, 'command', javascript.Order.ATOMIC);
    let code = 'await $_' + modName + '.runCustomFuncValue(' + ws_name + ', ' + group + ', ' + subgroup + ', ' + command + ', ' + getParams(block, generator) + ')'; 
    return [code, Blockly.JavaScript.ORDER_NONE];
  };

  javascript.javascriptGenerator.forBlock['custom_function_param'] = function(block, generator) {
    setRuntimeName()
    var key = generator.valueToCode(block, 'key', javascript.Order.ATOMIC);
    var value = generator.valueToCode(block, 'value', javascript.Order.ATOMIC);
    let code;
    if (key == '' || key == "''") {
      code = null;
    }
    else {
      if (value == '') {
        value = 'null';
      }
      code = key + ': ' + value;
    }
    return [code, Blockly.JavaScript.ORDER_NONE];
  };
}
