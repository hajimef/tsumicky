const modName = 'browser';

function setRuntimeName() {
  Blockly.runTimeJS['browser'] = { 'modName': modName, 'file': 'web/browser' };
}

export function addJS() {
  javascript.javascriptGenerator.forBlock['browser_open'] = function(block, generator) {
    setRuntimeName();
    const url = generator.valueToCode(block, 'url', javascript.Order.ATOMIC);
    const width = generator.valueToCode(block, 'width', javascript.Order.ATOMIC);
    const height = generator.valueToCode(block, 'height', javascript.Order.ATOMIC);
    const code = 'await $_' + modName + '.open(' + url + ', ' + width + ', ' + height + ')';
    return [code, javascript.Order.NONE];
  }

  javascript.javascriptGenerator.forBlock['browser_close'] = function(block, generator) {
    setRuntimeName();
    const win = generator.nameDB_.getName(block.getFieldValue('window'), Blockly.Names.NameType.VARIABLE);
    const code = win + '.close();\n';
    return code;
  }

  javascript.javascriptGenerator.forBlock['browser_navigate'] = function(block, generator) {
    setRuntimeName();
    const win = generator.nameDB_.getName(block.getFieldValue('window'), Blockly.Names.NameType.VARIABLE);
    const url = generator.valueToCode(block, 'url', javascript.Order.ATOMIC);
    const code = 'await $_' + modName + '.navigate(' + win + ', ' + url + ');\n';
    return code;
  }

  javascript.javascriptGenerator.forBlock['browser_alert'] = function(block, generator) {
    setRuntimeName();
    const win = generator.nameDB_.getName(block.getFieldValue('window'), Blockly.Names.NameType.VARIABLE);
    const msg = generator.valueToCode(block, 'msg', javascript.Order.ATOMIC);
    const code = win + '.alert(' + msg + ');\n';
    return code;
  }

  javascript.javascriptGenerator.forBlock['browser_select'] = function(block, generator) {
    setRuntimeName();
    const win = generator.nameDB_.getName(block.getFieldValue('window'), Blockly.Names.NameType.VARIABLE);
    const selector = generator.valueToCode(block, 'selector', javascript.Order.ATOMIC);
    let code = '$_' + modName + '.select(' + win + ', ' + selector + ')';
    return [code, javascript.Order.NONE];
  }

  javascript.javascriptGenerator.forBlock['browser_find'] = function(block, generator) {
    setRuntimeName();
    const element = generator.valueToCode(block, 'element', javascript.Order.ATOMIC);
    const selector = generator.valueToCode(block, 'selector', javascript.Order.ATOMIC);
    let code = element + '.find(' + selector + ')';
    return [code, javascript.Order.NONE];
  }

  javascript.javascriptGenerator.forBlock['browser_create_element'] = function(block, generator) {
    setRuntimeName();
    const html = generator.valueToCode(block, 'html', javascript.Order.ATOMIC);
    let code = 'jQuery(' + html + ')';
    return [code, javascript.Order.NONE];
  }

  javascript.javascriptGenerator.forBlock['browser_set_inner'] = function(block, generator) {
    setRuntimeName();
    const elm = generator.valueToCode(block, 'element', javascript.Order.ATOMIC);
    const type = block.getFieldValue('type');
    const html = generator.valueToCode(block, 'html', javascript.Order.ATOMIC);
    let code = elm + '.' + type + '(' + html + ');\n';
    return code;
  }

  javascript.javascriptGenerator.forBlock['browser_get_inner'] = function(block, generator) {
    setRuntimeName();
    const elm = generator.valueToCode(block, 'element', javascript.Order.ATOMIC);
    const type = block.getFieldValue('type');
    let code = elm + '.' + type + '()';
    return [code, javascript.Order.NONE];
  }

  javascript.javascriptGenerator.forBlock['browser_set_value'] = function(block, generator) {
    setRuntimeName();
    const elm = generator.valueToCode(block, 'element', javascript.Order.ATOMIC);
    const value = generator.valueToCode(block, 'value', javascript.Order.ATOMIC);
    let code = elm + '.val(' + value + ');\n';
    return code;
  }

  javascript.javascriptGenerator.forBlock['browser_get_value'] = function(block, generator) {
    setRuntimeName();
    const elm = generator.valueToCode(block, 'element', javascript.Order.ATOMIC);
    let code = elm + '.val()';
    return [code, javascript.Order.NONE];
  }

  javascript.javascriptGenerator.forBlock['browser_get_selected_text'] = function(block, generator) {
    setRuntimeName();
    const elm = generator.valueToCode(block, 'element', javascript.Order.ATOMIC);
    let code = elm + '.find(\'option:selected\').text()';
    return [code, javascript.Order.NONE];
  }

  javascript.javascriptGenerator.forBlock['browser_get_checked_value'] = function(block, generator) {
    setRuntimeName();
    const elm = generator.valueToCode(block, 'element', javascript.Order.ATOMIC);
    let code = '$_' + modName + '.find_checked(' + elm + ')';
    return [code, javascript.Order.NONE];
  }

  javascript.javascriptGenerator.forBlock['browser_set_checked'] = function(block, generator) {
    setRuntimeName();
    const elm = generator.valueToCode(block, 'element', javascript.Order.ATOMIC);
    const chk = block.getFieldValue('chk');
    let code = elm + '.prop(\'checked\', '  + (chk == 'TRUE' ? true : false) + ');\n';
    return code;
  }

  javascript.javascriptGenerator.forBlock['browser_get_checked'] = function(block, generator) {
    setRuntimeName();
    const elm = generator.valueToCode(block, 'element', javascript.Order.ATOMIC);
    let code = elm + '.prop(\'checked\')';
    return [code, javascript.Order.NONE];
  }

  javascript.javascriptGenerator.forBlock['browser_add_element'] = function(block, generator) {
    setRuntimeName();
    const elm = generator.valueToCode(block, 'element', javascript.Order.ATOMIC);
    const a_elm = generator.valueToCode(block, 'a_element', javascript.Order.ATOMIC);
    const type = block.getFieldValue('type');
    let code = elm + '.' + type + '(' + a_elm + ');\n';
    return code;
  }

  javascript.javascriptGenerator.forBlock['browser_remove_element'] = function(block, generator) {
    setRuntimeName();
    const elm = generator.valueToCode(block, 'element', javascript.Order.ATOMIC);
    let code = elm + '.remove();\n';
    return code;
  }

  javascript.javascriptGenerator.forBlock['browser_add_class'] = function(block, generator) {
    setRuntimeName();
    const elm = generator.valueToCode(block, 'element', javascript.Order.ATOMIC);
    const cls = generator.valueToCode(block, 'class', javascript.Order.ATOMIC);
    let code = elm + '.addClass(' + cls + ');\n';
    return code;
  }

  javascript.javascriptGenerator.forBlock['browser_remove_class'] = function(block, generator) {
    setRuntimeName();
    const elm = generator.valueToCode(block, 'element', javascript.Order.ATOMIC);
    const cls = generator.valueToCode(block, 'class', javascript.Order.ATOMIC);
    let code = elm + '.removeClass(' + cls + ');\n';
    return code;
  }

  javascript.javascriptGenerator.forBlock['browser_has_class'] = function(block, generator) {
    setRuntimeName();
    const elm = generator.valueToCode(block, 'element', javascript.Order.ATOMIC);
    const cls = generator.valueToCode(block, 'class', javascript.Order.ATOMIC);
    let code = elm + '.hasClass(' + cls + ')';
    return [code, javascript.Order.NONE];
  }

  javascript.javascriptGenerator.forBlock['browser_set_css'] = function(block, generator) {
    setRuntimeName();
    const elm = generator.valueToCode(block, 'element', javascript.Order.ATOMIC);
    const prop = generator.valueToCode(block, 'prop', javascript.Order.ATOMIC);
    const val = generator.valueToCode(block, 'val', javascript.Order.ATOMIC);
    let code = elm + '.css(' + prop + ', ' + val + ');\n';
    return code;
  }

  javascript.javascriptGenerator.forBlock['browser_get_css'] = function(block, generator) {
    setRuntimeName();
    const elm = generator.valueToCode(block, 'element', javascript.Order.ATOMIC);
    const prop = generator.valueToCode(block, 'prop', javascript.Order.ATOMIC);
    let code = elm + '.css(' + prop + ')';
    return [code, javascript.Order.NONE];
  }

  javascript.javascriptGenerator.forBlock['browser_set_attr'] = function(block, generator) {
    setRuntimeName();
    const elm = generator.valueToCode(block, 'element', javascript.Order.ATOMIC);
    const attr = generator.valueToCode(block, 'attr', javascript.Order.ATOMIC);
    const value = generator.valueToCode(block, 'value', javascript.Order.ATOMIC);
    let code = elm + '.attr(' + attr + ', ' + value + ');\n';
    return code;
  }

  javascript.javascriptGenerator.forBlock['browser_get_attr'] = function(block, generator) {
    setRuntimeName();
    const elm = generator.valueToCode(block, 'element', javascript.Order.ATOMIC);
    const attr = generator.valueToCode(block, 'attr', javascript.Order.ATOMIC);
    let code = elm + '.attr(' + attr + ')';
    return [code, javascript.Order.NONE];
  }

  javascript.javascriptGenerator.forBlock['browser_remove_attr'] = function(block, generator) {
    setRuntimeName();
    const elm = generator.valueToCode(block, 'element', javascript.Order.ATOMIC);
    const attr = generator.valueToCode(block, 'attr', javascript.Order.ATOMIC);
    let code = elm + '.removeAttr(' + attr + ');\n';
    return code;
  }

  javascript.javascriptGenerator.forBlock['browser_on'] = function(block, generator) {
    // TODO: change Order.ATOMIC to the correct operator precedence strength
    const elm = generator.valueToCode(block, 'element', javascript.Order.ATOMIC);
    const evt = block.getFieldValue('event');
    const param = generator.nameDB_.getName(block.getFieldValue('param'), Blockly.Names.NameType.VARIABLE);
    const proc = generator.statementToCode(block, 'proc');
    let code = elm + '.on(\'' + evt + '\', async function (' + param + ') {\n';
    code += generator.INDENT + proc;
    code += '});\n'
    return code;
  }

  javascript.javascriptGenerator.forBlock['browser_event_property'] = function(block, generator) {
    setRuntimeName();
    const evt = generator.nameDB_.getName(block.getFieldValue('evt'), Blockly.Names.NameType.VARIABLE);
    const prop = block.getFieldValue('prop');
    let code = evt + '.' + prop;
    return [code, javascript.Order.NONE];
  }

};
