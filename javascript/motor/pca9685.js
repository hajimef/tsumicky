import * as utils from '/lib/utils.js';

const modName = 'pca9685';

function setRuntimeName() {
  Blockly.runTimeJS['pca9685'] = { 'modName': modName, 'file': 'motor/pca9685' };
}

export function addJS() {
  javascript.javascriptGenerator.forBlock['pca9685_init'] = function(block, generator) {
    setRuntimeName();
    const ws_var = generator.nameDB_.getName(block.getFieldValue('ws_var'), Blockly.Names.NameType.VARIABLE);
    const address = generator.valueToCode(block, 'i2c_address', javascript.Order.ATOMIC) || block.getFieldValue('i2c_address');
    const code = 'await $_' + modName + '.init(' + ws_var + ', ' + address + ');\n';
    return code;
  };

  javascript.javascriptGenerator.forBlock['pca9685_init_i2c'] = function(block, generator) {
    setRuntimeName();
    const ws_var = generator.nameDB_.getName(block.getFieldValue('ws_var'), Blockly.Names.NameType.VARIABLE);
    const address = generator.valueToCode(block, 'i2c_address', javascript.Order.ATOMIC) || block.getFieldValue('i2c_address');
    const sda = block.getFieldValue('sda');
    const scl = block.getFieldValue('scl');
    const code = 'await $_' + modName + '.init_i2c(' + ws_var + ', ' + address + ', ' + sda + ', ' + scl + ');\n';
    return code;
  };

  javascript.javascriptGenerator.forBlock['pca9685_pulse_range'] = function(block, generator) {
    setRuntimeName();
    const ws_var = generator.nameDB_.getName(block.getFieldValue('ws_var'), Blockly.Names.NameType.VARIABLE);
    const channel = generator.valueToCode(block, 'channel', javascript.Order.ATOMIC) || block.getFieldValue('channel');
    const min_pulse = generator.valueToCode(block, 'min_pulse', javascript.Order.ATOMIC) || block.getFieldValue('min_pulse');
    const max_pulse = generator.valueToCode(block, 'max_pulse', javascript.Order.ATOMIC) || block.getFieldValue('max_pulse');
    const code = 'await $_' + modName + '.pulse_range(' + ws_var + ', ' + channel + ', ' + min_pulse + ', ' + max_pulse + ');\n';
    return code;
  };

  javascript.javascriptGenerator.forBlock['pca9685_set_servo'] = function(block, generator) {
    setRuntimeName();
    const ws_var = generator.nameDB_.getName(block.getFieldValue('ws_var'), Blockly.Names.NameType.VARIABLE);
    const channel = generator.valueToCode(block, 'channel', javascript.Order.ATOMIC) || block.getFieldValue('channel');
    const angle = generator.valueToCode(block, 'angle', javascript.Order.ATOMIC) || 0;
    const code = 'await $_' + modName + '.set_servo(' + ws_var + ', ' + channel + ', ' + angle + ');\n';
    return code;
  };
}
