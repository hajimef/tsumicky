const modName = 'pwmUnoq';

function setRuntimeName() {
  Blockly.runTimeJS['pwm_unoq'] = { 'modName': modName, 'file': 'pwm_unoq' };
}

export function addJS() {
  javascript.javascriptGenerator.forBlock['pwm_unoq_analog_write'] = function(block, generator) {
    setRuntimeName();
    var pin_var = generator.nameDB_.getName(block.getFieldValue('pin_var'), Blockly.Names.NameType.VARIABLE);
    var duty = generator.valueToCode(block, 'duty', javascript.Order.ATOMIC);
    var code = 'await $_' + modName + '.analogWrite(' + pin_var + ', ' + duty + ');\n';
    return code;
  };
};
