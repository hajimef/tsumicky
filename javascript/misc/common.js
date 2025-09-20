const modName = 'misc';

function setRuntimeName() {
  Blockly.runTimeJS['misc'] = { 'modName': modName, 'file': 'misc/common' };
}

export function addJS() {
  javascript.javascriptGenerator.forBlock['misc_connect'] = function(block, generator) {
    setRuntimeName()
    var host = generator.valueToCode(block, 'host', javascript.Order.ATOMIC);
    var port = generator.valueToCode(block, 'port', javascript.Order.ATOMIC);
    var assign = block.getFieldValue('assign');
    var code = 'await $_' + modName + '.connect(' + host + ', ' + port + ');\n';
    if (assign == 'TRUE') {
      var var_name = generator.nameDB_.getName(block.getFieldValue('var'), Blockly.Names.NameType.VARIABLE);
      code = 'let ' + var_name + ' = ' + code;
    }
    return code;
  };
}

