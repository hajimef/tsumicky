const modName = 'pwmUnor4wifi';

function setRuntimeName() {
  Blockly.runTimeJS['pwm_unor4wifi'] = { 'modName': modName, 'file': 'pwm_unor4wifi' };
}

export function addJS() {
  javascript.javascriptGenerator.forBlock['pwm_unor4wifi_analog_write'] = function(block, generator) {
    setRuntimeName();
    var pin_var = generator.nameDB_.getName(block.getFieldValue('pin_var'), Blockly.Names.NameType.VARIABLE);
    var duty = generator.valueToCode(block, 'duty', javascript.Order.ATOMIC);
    var code = 'await $_' + modName + '.analogWrite(' + pin_var + ', ' + duty + ');\n';
    return code;
  };
};
