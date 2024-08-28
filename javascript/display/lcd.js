import * as utils from '/lib/utils.js';

const modName = 'lcd';

function setRuntimeName() {
    Blockly.runTimeJS['lcd'] = { 'modName': modName, 'file': 'display/lcd' };
}

export function addJS() {
  javascript.javascriptGenerator.forBlock['lcd_init'] = function(block, generator) {
    setRuntimeName()
    var ws_var = generator.nameDB_.getName(block.getFieldValue('ws_var'), Blockly.Names.NameType.VARIABLE);
    var rc = block.getFieldValue('rc');
    var i2c_address = block.getFieldValue('i2c_address');
    const code = 'await $_' + modName + '.init(' + ws_var + ', ' + rc + ', ' + i2c_address + ');\n';
    return code;
  }

  javascript.javascriptGenerator.forBlock['lcd_init_i2c'] = function(block, generator) {
    setRuntimeName()
    var ws_var = generator.nameDB_.getName(block.getFieldValue('ws_var'), Blockly.Names.NameType.VARIABLE);
    var rc = block.getFieldValue('rc');
    var i2c_address = block.getFieldValue('i2c_address');
    var sda = block.getFieldValue('sda');
    var scl = block.getFieldValue('scl');
    const code = 'await $_' + modName + '.init_i2c(' + ws_var + ', ' + rc + ', ' + i2c_address + ', ' + sda + ', ' + scl + ');\n';
    return code;
  }

  javascript.javascriptGenerator.forBlock['lcd_clear'] = function(block, generator) {
    setRuntimeName()
    var ws_var = generator.nameDB_.getName(block.getFieldValue('ws_var'), Blockly.Names.NameType.VARIABLE);
    const code = 'await $_' + modName + '.clear(' + ws_var + ');\n';
    return code;
  }

  javascript.javascriptGenerator.forBlock['lcd_cursor_pos'] = function(block, generator) {
    setRuntimeName()
    var ws_var = generator.nameDB_.getName(block.getFieldValue('ws_var'), Blockly.Names.NameType.VARIABLE);
    var x = generator.valueToCode(block, 'x', javascript.Order.ATOMIC);
    var y = generator.valueToCode(block, 'y', javascript.Order.ATOMIC);
    const code = 'await $_' + modName + '.cursor_pos(' + ws_var + ', ' + x + ', ' + y + ');\n';
    return code;
  }

  javascript.javascriptGenerator.forBlock['lcd_print'] = function(block, generator) {
    setRuntimeName()
    var ws_var = generator.nameDB_.getName(block.getFieldValue('ws_var'), Blockly.Names.NameType.VARIABLE);
    var text = generator.valueToCode(block, 'text', javascript.Order.ATOMIC);
    const code = 'await $_' + modName + '.print(' + ws_var + ', ' + text + ');\n';
    return code;
  }
}
