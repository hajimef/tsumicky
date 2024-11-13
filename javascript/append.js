const modName = 'apd';

function setRuntimeName() {
  Blockly.runTimeJS['append'] = { 'modName': modName, 'file': 'append' };
}

export function addJS() {
  javascript.javascriptGenerator.forBlock['text_basen'] = function(block, generator) {
    const base = block.getFieldValue('base');
    const num = generator.valueToCode(block, 'num', javascript.Order.ATOMIC);
    const code = 'Number(' + num + ').toString(' + base + ')';
    return [code, javascript.Order.NONE];
  };

  javascript.javascriptGenerator.forBlock['text_ml'] = function(block, generator) {
    let text = block.getFieldValue('text');
    text = text.replaceAll(/'/g, "\\'");
    text = text.replaceAll(/"/g, '\\"');
    text = text.replaceAll(/\n/g, "\\n");
    const code = '"' + text + '"';
    return [code, javascript.Order.NONE];
  };

  javascript.javascriptGenerator.forBlock['math_dec'] = function(block, generator) {
    const base = block.getFieldValue('base');
    const str = generator.valueToCode(block, 'str', javascript.Order.ATOMIC);
    const code = 'parseInt(' + str + ', ' + base + ')';
    return [code, javascript.Order.NONE];
  };

  javascript.javascriptGenerator.forBlock['colour_picker'] = function(block, generator) {
    const code = "'" + block.getFieldValue('COLOUR') + "'";
    return [code, javascript.Order.NONE];
  };

  javascript.javascriptGenerator.forBlock['colour_rgb'] = function(block, generator) {
    setRuntimeName();
    const red = generator.valueToCode(block, 'RED', javascript.Order.NONE) || 0;
    const green = generator.valueToCode(block, 'GREEN', javascript.Order.NONE) || 0;
    const blue = generator.valueToCode(block, 'BLUE', javascript.Order.NONE) || 0;
    const code = '$_' + modName + '.colourRgb(' + red + ', ' + green + ', ' + blue + ')';
    return [code, javascript.Order.FUNCTION_CALL];
  };

  javascript.javascriptGenerator.forBlock['colour_blend'] = function(block, generator) {
    setRuntimeName();
    const c1 = generator.valueToCode(block, 'COLOUR1', javascript.Order.NONE) || "'#000000'";
    const c2 = generator.valueToCode(block, 'COLOUR2', javascript.Order.NONE) || "'#000000'";
    const ratio = generator.valueToCode(block, 'RATIO', javascript.Order.NONE) || 0.5;
    const code = '$_' + modName + '.colourBlend(' + c1 + ', ' + c2 + ', ' + ratio + ')';
    return [code, javascript.Order.FUNCTION_CALL];
  };

  javascript.javascriptGenerator.forBlock['colour_random'] = function(block, generator) {
    setRuntimeName();
    const code = '$_' + modName + '.colourRandom()';
    return [code, javascript.Order.FUNCTION_CALL];
  };

  javascript.javascriptGenerator.forBlock['colour_split'] = function(block, generator) {
    setRuntimeName();
    const colour = generator.valueToCode(block, 'colour', javascript.Order.ATOMIC);
    const code = '$_' + modName + '.colour_split(' + colour + ')';
    return [code, javascript.Order.NONE];
  };

  javascript.javascriptGenerator.forBlock['colour_grey'] = function(block, generator) {
    setRuntimeName();
    const colour = generator.valueToCode(block, 'colour', javascript.Order.ATOMIC);
    const code = '$_' + modName + '.colour_grey(' + colour + ')';
    return [code, javascript.Order.NONE];
  };

  javascript.javascriptGenerator.forBlock['colour_sepia'] = function(block, generator) {
    setRuntimeName();
    const colour = generator.valueToCode(block, 'colour', javascript.Order.ATOMIC);
    const code = '$_' + modName + '.colour_sepia(' + colour + ')';
    return [code, javascript.Order.NONE];
  };

  javascript.javascriptGenerator.forBlock['procedure_js_function'] = function(block, generator) {
    setRuntimeName();
    const code = block.getFieldValue('js') + "\n";
    return code;
  };

  javascript.javascriptGenerator.forBlock['list_push_unshift'] = function(block, generator) {
    const method = block.getFieldValue('method');
    const var_name = generator.nameDB_.getName(block.getFieldValue('var_name'), Blockly.Names.NameType.VARIABLE);
    const value = generator.valueToCode(block, 'value', javascript.Order.ATOMIC);
    const code = var_name + '.' + method + '(' + value + ');\n';
    return code;
  }

  javascript.javascriptGenerator.forBlock['list_pop_shift'] = function(block, generator) {
    const method = block.getFieldValue('method');
    const var_name = generator.nameDB_.getName(block.getFieldValue('var_name'), Blockly.Names.NameType.VARIABLE);
    const code = var_name + '.' + method + '();\n';
    return code;
  }
}
