const modName = 'pwmRPi';

function setRuntimeName() {
  Blockly.runTimeJS['pwm_rpi'] = { 'modName': modName, 'file': 'pwm_rpi' };
}

export function addJS() {
  javascript.javascriptGenerator.forBlock['pwm_rpi_set_frequency'] = function(block, generator) {
    setRuntimeName();
    var ws_var = generator.nameDB_.getName(block.getFieldValue('ws_var'), Blockly.Names.NameType.VARIABLE);
    var pin_var = generator.nameDB_.getName(block.getFieldValue('pin_var'), Blockly.Names.NameType.VARIABLE);
    var freq = generator.valueToCode(block, 'freq', javascript.Order.ATOMIC);
    var code = 'await $_' + modName + '.setFrequency(' + ws_var + ', ' + pin_var + ',' + freq + ');\n';
    return code;
  };
  
  javascript.javascriptGenerator.forBlock['pwm_rpi_analog_write'] = function(block, generator) {
    setRuntimeName();
    var pin_var = generator.nameDB_.getName(block.getFieldValue('pin_var'), Blockly.Names.NameType.VARIABLE);
    var duty = generator.valueToCode(block, 'duty', javascript.Order.ATOMIC);
    var code = 'await $_' + modName + '.analogWrite(' + pin_var + ', ' + duty + ');\n';
    return code;
  };
};
