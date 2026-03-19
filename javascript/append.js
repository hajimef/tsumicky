const modName = 'apd';

function setRuntimeName() {
  Blockly.runTimeJS['append'] = { 'modName': modName, 'file': 'append' };
}

export function addJS() {
  javascript.javascriptGenerator.forBlock['text_basen'] = function(block, generator) {
    setRuntimeName();
    const base = block.getFieldValue('base');
    const num = generator.valueToCode(block, 'num', javascript.Order.ATOMIC);
    const code = 'await $_' + modName + '.text_basen(' + num + ', ' + base + ', "' + block.id + '")';
    return [code, javascript.Order.NONE];
  };

  javascript.javascriptGenerator.forBlock['text_ml'] = function(block, generator) {
    setRuntimeName();
    let text = block.getFieldValue('text');
    text = text.replaceAll(/'/g, "\\\'");
    text = text.replaceAll(/"/g, '\\\"');
    text = text.replaceAll(/\n/g, "\\\n");
    const code = 'await $_' + modName + '.text_ml("' + text + '", "' + block.id + '")';
    return [code, javascript.Order.NONE];
  };

  javascript.javascriptGenerator.forBlock['text_to_string'] = function(block, generator) {
    setRuntimeName();
    const from = generator.valueToCode(block, 'from', javascript.Order.ATOMIC);
    const code = 'await $_' + modName + '.text_to_string(' + from + ', "' + block.id + '")';
    return [code, javascript.Order.NONE];
  };

  javascript.javascriptGenerator.forBlock['math_dec'] = function(block, generator) {
    setRuntimeName();
    const base = block.getFieldValue('base');
    const str = generator.valueToCode(block, 'str', javascript.Order.ATOMIC);
    const code = 'await $_' + modName + '.math_dec(' + str + ', ' + base + ', "' + block.id + '")';
    return [code, javascript.Order.NONE];
  };

  javascript.javascriptGenerator.forBlock['math_angle'] = function(block, generator) {
    const angle = block.getFieldValue('angle');
    return [angle, javascript.Order.NONE];
  };

  javascript.javascriptGenerator.forBlock['math_to_number'] = function(block, generator) {
    setRuntimeName();
    const value_str = generator.valueToCode(block, 'str', javascript.Order.ATOMIC);
    const code = 'await $_' + modName + '.math_to_number(' + value_str + ', "' + block.id + '")';
    return [code, javascript.Order.NONE];
  };

  javascript.javascriptGenerator.forBlock['colour_picker'] = function(block, generator) {
    setRuntimeName();
    const code = 'await $_' + modName + ".colour_picker('" + block.getFieldValue('COLOUR') + "', '" + block.id + "')";
    return [code, javascript.Order.NONE];
  };

  javascript.javascriptGenerator.forBlock['colour_rgb'] = function(block, generator) {
    setRuntimeName();
    const red = generator.valueToCode(block, 'RED', javascript.Order.NONE) || 0;
    const green = generator.valueToCode(block, 'GREEN', javascript.Order.NONE) || 0;
    const blue = generator.valueToCode(block, 'BLUE', javascript.Order.NONE) || 0;
    const code = 'await $_' + modName + '.colourRgb(' + red + ', ' + green + ', ' + blue + ', "' + block.id + '")';
    return [code, javascript.Order.FUNCTION_CALL];
  };

  javascript.javascriptGenerator.forBlock['colour_blend'] = function(block, generator) {
    setRuntimeName();
    const c1 = generator.valueToCode(block, 'COLOUR1', javascript.Order.NONE) || "'#000000'";
    const c2 = generator.valueToCode(block, 'COLOUR2', javascript.Order.NONE) || "'#000000'";
    const ratio = generator.valueToCode(block, 'RATIO', javascript.Order.NONE) || 0.5;
    const code = 'await $_' + modName + '.colourBlend(' + c1 + ', ' + c2 + ', ' + ratio + ', "' + block.id + '")';
    return [code, javascript.Order.FUNCTION_CALL];
  };

  javascript.javascriptGenerator.forBlock['colour_random'] = function(block, generator) {
    setRuntimeName();
    const code = 'await $_' + modName + '.colourRandom("' + block.id + '")';
    return [code, javascript.Order.FUNCTION_CALL];
  };

  javascript.javascriptGenerator.forBlock['colour_split'] = function(block, generator) {
    setRuntimeName();
    const colour = generator.valueToCode(block, 'colour', javascript.Order.ATOMIC);
    const code = 'await $_' + modName + '.colour_split(' + colour + ', "' + block.id + '")';
    return [code, javascript.Order.NONE];
  };

  javascript.javascriptGenerator.forBlock['colour_grey'] = function(block, generator) {
    setRuntimeName();
    const colour = generator.valueToCode(block, 'colour', javascript.Order.ATOMIC);
    const code = 'await $_' + modName + '.colour_grey(' + colour + ', "' + block.id + '")';
    return [code, javascript.Order.NONE];
  };

  javascript.javascriptGenerator.forBlock['colour_sepia'] = function(block, generator) {
    setRuntimeName();
    const colour = generator.valueToCode(block, 'colour', javascript.Order.ATOMIC);
    const code = 'await $_' + modName + '.colour_sepia(' + colour + ', "' + block.id + '")';
    return [code, javascript.Order.NONE];
  };

  javascript.javascriptGenerator.forBlock['colour_hsv'] = function(block, generator) {
    setRuntimeName();
    const hue = generator.valueToCode(block, 'hue', javascript.Order.ATOMIC);
    const saturate = generator.valueToCode(block, 'saturate', javascript.Order.ATOMIC);
    const value = generator.valueToCode(block, 'value', javascript.Order.ATOMIC);
    const code = '$_' + modName + '.colour_hsv(' + hue + ', ' + saturate + ', ' + value + ')';
    return [code, javascript.Order.NONE];
  };

  javascript.javascriptGenerator.forBlock['colour_hsv_sv'] = function(block, generator) {
    const value = block.getFieldValue('value');
    return [value, javascript.Order.NONE];
  };

  javascript.javascriptGenerator.forBlock['procedure_js_function'] = function(block, generator) {
    setRuntimeName();
    const code = block.getFieldValue('js') + "\n";
    return code;
  };

  javascript.javascriptGenerator.forBlock['list_push_unshift'] = function(block, generator) {
    setRuntimeName();
    const method = block.getFieldValue('method');
    const var_name = generator.valueToCode(block, 'var_name', javascript.Order.ATOMIC);
    const value = generator.valueToCode(block, 'value', javascript.Order.ATOMIC);
    const code = 'await $_' + modName + '.list_push_unshift(' + var_name + ', "' + method + '", ' + value + ', "' + block.id + '");\n';
    return code;
  }

  javascript.javascriptGenerator.forBlock['list_pop_shift'] = function(block, generator) {
    setRuntimeName();
    const method = block.getFieldValue('method');
    const var_name = generator.valueToCode(block, 'var_name', javascript.Order.ATOMIC);
    const code = 'await $_' + modName + '.list_pop_shift(' + var_name + ', \"' + method + '\", \"' + block.id + '\");\n';
    return code;
  }

  javascript.javascriptGenerator.forBlock['list_get_random'] = function(block, generator) {
    setRuntimeName();
    const list = generator.valueToCode(block, 'LIST', javascript.Order.ATOMIC) || '[]';
    const num = generator.valueToCode(block, 'NUM', javascript.Order.ATOMIC) || '1';
    const code = 'await $_' + modName + '.list_get_random(' + list + ', ' + num + ', "' + block.id + '")';
    return [code, javascript.Order.FUNCTION_CALL];
  };

  javascript.javascriptGenerator.forBlock['list_reverse'] = function(block, generator) {
    setRuntimeName();
    const list = generator.valueToCode(block, 'LIST', javascript.Order.ATOMIC) || '[]';
    const code = 'await $_' + modName + '.list_reverse(' + list + ', "' + block.id + '")';
    return [code, javascript.Order.FUNCTION_CALL];
  };

  javascript.javascriptGenerator.forBlock['list_concat'] = function(block, generator) {
    setRuntimeName();
    const list = generator.valueToCode(block, 'LIST', javascript.Order.ATOMIC) || '[]';
    const list2 = generator.valueToCode(block, 'LIST2', javascript.Order.ATOMIC) || '[]';
    const code = 'await $_' + modName + '.list_concat(' + list + ', ' + list2 + ', "' + block.id + '")';
    return [code, javascript.Order.FUNCTION_CALL];
  };

  javascript.javascriptGenerator.forBlock['list_filter'] = function(block, generator) {
    setRuntimeName();
    const list = generator.valueToCode(block, 'LIST', javascript.Order.ATOMIC) || '[]';
    const branch = generator.statementToCode(block, 'DO');
    const cond = generator.valueToCode(block, 'COND', javascript.Order.ATOMIC) || '';
    const code = `${list}.filter(item => {\n${branch}\nreturn ${cond};})`;
    return [code, javascript.Order.NONE];
  };

  javascript.javascriptGenerator.forBlock['list_map'] = function(block, generator) {
    setRuntimeName();
    const list = generator.valueToCode(block, 'LIST', javascript.Order.ATOMIC) || '[]';
    const branch = generator.statementToCode(block, 'DO');
    const value = generator.valueToCode(block, 'VALUE', javascript.Order.ATOMIC) || '';
    const code = `${list}.map(item => {\n${branch}\nreturn ${value};\n})`;
    return [code, javascript.Order.NONE];
  };

  javascript.javascriptGenerator.forBlock['list_item'] = function(block, generator) {
    return ['item', javascript.Order.NONE];
  };

  javascript.javascriptGenerator.forBlock['list_compute'] = function(block, generator) {
    setRuntimeName();
    const op = block.getFieldValue('OP');
    const list = generator.valueToCode(block, 'LIST', javascript.Order.ATOMIC) || '[]';
    const code = 'await $_' + modName + '.list_compute("' + op + '", ' + list + ', "' + block.id + '")';
    return [code, javascript.Order.FUNCTION_CALL];
  };

  javascript.javascriptGenerator.forBlock['logic_is_type'] = function(block, generator) {
    setRuntimeName();
    const value = generator.valueToCode(block, 'VALUE', javascript.Order.ATOMIC) || 'null';
    const type = block.getFieldValue('TYPE');
    const code = 'await $_' + modName + '.logic_is_type(' + value + ', "' + type + '", "' + block.id + '")';
    return [code, javascript.Order.NONE];
  };
}