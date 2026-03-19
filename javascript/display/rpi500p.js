const modName = 'rpi500p';

function setRuntimeName() {
    Blockly.runTimeJS['rpi500p'] = { 'modName': modName, 'file': 'display/rpi500p' };
}

export function addJS() {
  javascript.javascriptGenerator.forBlock['rpi500p_kbled_init'] = function(block, generator) {
    setRuntimeName()
    const ws_var = generator.getVariableName(block.getFieldValue('ws_var'));
    const code = 'await $_' + modName + '.init(' + ws_var + ', "' + block.id + '");\n';
    return code;
  };

  javascript.javascriptGenerator.forBlock['rpi500p_kbled_set'] = function(block, generator) {
    setRuntimeName()
    const ws_var = generator.getVariableName(block.getFieldValue('ws_var'));
    const row = generator.valueToCode(block, 'row', generator.ORDER_ATOMIC);
    const col = generator.valueToCode(block, 'col', generator.ORDER_ATOMIC);
    const color = generator.valueToCode(block, 'color', generator.ORDER_ATOMIC);
    const code = '$_' + modName + '.set(' + ws_var + ', ' + row + ', ' + col + ', ' + color + ', "' + block.id + '");\n';;
    return code;
  };

  javascript.javascriptGenerator.forBlock['rpi500p_kbled_show'] = function(block, generator) {
    setRuntimeName()
    const ws_var = generator.getVariableName(block.getFieldValue('ws_var'));
    const code = 'await $_' + modName + '.show(' + ws_var + ', "' + block.id + '");\n';
    return code;
  };

  javascript.javascriptGenerator.forBlock['rpi500p_kbled_buf_clear'] = function(block, generator) {
    setRuntimeName()
    const ws_var = generator.getVariableName(block.getFieldValue('ws_var'));
    const code = 'await $_' + modName + '.clear(' + ws_var + ', "' + block.id + '");\n';
    return code;
  };

  javascript.javascriptGenerator.forBlock['rpi500p_kbled_clear'] = function(block, generator) {
    setRuntimeName()
    const ws_var = generator.getVariableName(block.getFieldValue('ws_var'));
    const code = 'await $_' + modName + '.clear(' + ws_var + ', "' + block.id + '");\n';
    return code;
  };
}
