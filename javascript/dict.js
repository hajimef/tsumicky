const modName = 'dict';

function setRuntimeName() {
  Blockly.runTimeJS['dict'] = { 'modName': modName, 'file': 'dict' };
}

export function addJS() {
  javascript.javascriptGenerator.forBlock['dict_create_with'] = function(block, generator) {
    setRuntimeName();
    let kvs = [];
    for (let i = 0; i < block.itemCount_; i++) {
      let kv = generator.valueToCode(block, 'ADD' + i, Blockly.JavaScript.ORDER_NONE);
      kvs.push(kv);
    }
    if (kvs.length === 0) {
      const code = 'await $_' + modName + '.create_with_empty(\'' + block.id + '\')';
      return [code, javascript.Order.NONE];
    }
    else {
      const code = 'await $_' + modName + '.create_with(' + kvs.join(', ') + ', \'' + block.id + '\')';
      return [code, javascript.Order.NONE];
    }
  };
    
  javascript.javascriptGenerator.forBlock['dict_item'] = function(block, generator) {
    setRuntimeName();
    const key = generator.valueToCode(block, 'key', javascript.Order.ATOMIC);
    const value = generator.valueToCode(block, 'value', javascript.Order.ATOMIC);
    const code = 'await $_' + modName + '.dict_item(' + key + ', ' + value + ', \'' + block.id + '\')';
    return [code, javascript.Order.NONE];
  };

  javascript.javascriptGenerator.forBlock['dict_set_item'] = function(block, generator) {
    setRuntimeName();
    const dict = generator.valueToCode(block, 'dict', javascript.Order.ATOMIC);
    const key = generator.valueToCode(block, 'key', javascript.Order.ATOMIC);
    const value = generator.valueToCode(block, 'value', javascript.Order.ATOMIC);
    const code = 'await $_' + modName + '.set_item(' + dict + ', ' + key + ', ' + value + ', \'' + block.id + '\');\n';
    return code;
  };

  javascript.javascriptGenerator.forBlock['dict_get_item'] = function(block, generator) {
    setRuntimeName();
    const dict = generator.valueToCode(block, 'dict', javascript.Order.ATOMIC);
    const key = generator.valueToCode(block, 'key', javascript.Order.ATOMIC);
    const code = 'await $_' + modName + '.get_item(' + dict + ', ' + key + ', \'' + block.id + '\')';
    return [code, javascript.Order.NONE];
  };

  javascript.javascriptGenerator.forBlock['dict_keys'] = function(block, generator) {
    setRuntimeName();
    const dict = generator.valueToCode(block, 'dict', javascript.Order.ATOMIC);
    const code = 'await $_' + modName + '.keys(' + dict + ', \'' + block.id + '\')';
    return [code, javascript.Order.NONE];
  };

  javascript.javascriptGenerator.forBlock['dict_values'] = function(block, generator) {
    setRuntimeName();
    const dict = generator.valueToCode(block, 'dict', javascript.Order.ATOMIC);
    const code = 'await $_' + modName + '.values(' + dict + ', \'' + block.id + '\')';
    return [code, javascript.Order.NONE];
  };

  javascript.javascriptGenerator.forBlock['dict_has_key'] = function(block, generator) {
    setRuntimeName();
    const dict = generator.valueToCode(block, 'dict', javascript.Order.ATOMIC);
    const key = generator.valueToCode(block, 'key', javascript.Order.ATOMIC);
    const code = 'await $_' + modName + '.has_key(' + dict + ', ' + key + ', \'' + block.id + '\')';
    return [code, javascript.Order.NONE];
  };

  javascript.javascriptGenerator.forBlock['dict_from_json'] = function(block, generator) {
    setRuntimeName();
    const json = generator.valueToCode(block, 'json', javascript.Order.ATOMIC);
    const code = 'await $_' + modName + '.from_json(' + json + ', \'' + block.id + '\')';
    return [code, javascript.Order.NONE];
  };

  javascript.javascriptGenerator.forBlock['dict_to_json'] = function(block, generator) {
    setRuntimeName();
    const dict = generator.valueToCode(block, 'dict', javascript.Order.ATOMIC);
    const code = 'await $_' + modName + '.to_json(' + dict + ', \'' + block.id + '\')';
    return [code, javascript.Order.NONE];
  };

  javascript.javascriptGenerator.forBlock['dict_each'] = function(block, generator) {
    const dict = generator.valueToCode(block, 'dict', javascript.Order.ATOMIC);
    const k_var = generator.nameDB_.getName(block.getFieldValue('k_var'), Blockly.Names.NameType.VARIABLE);
    const v_var = generator.nameDB_.getName(block.getFieldValue('v_var'), Blockly.Names.NameType.VARIABLE);
    const proc = generator.statementToCode(block, 'proc');
    let code = 'Blockly.checkStop(\'' + block.id + '\');\n';
    code += 'for (let [' + k_var + ', ' + v_var + '] of Object.entries(' + dict + ')) {\n';
    code += generator.INDENT + proc;
    code += '}\n';
    return code;
  }

  javascript.javascriptGenerator.forBlock['dict_convkv'] = function(block, generator) {
    setRuntimeName();
    const dict = generator.valueToCode(block, 'dict', javascript.Order.ATOMIC);
    const method = block.getFieldValue('same');
    const code = 'await $_' + modName + '.convkv(' + dict + ', ' + method + ', "' + block.id + '")';
    return [code, javascript.Order.NONE];
  };
};
