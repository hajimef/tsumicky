const modName = 'pwmESP32n';

function setRuntimeName() {
  Blockly.runTimeJS['pwm_e32n'] = { 'modName': modName, 'file': 'pwm_esp32n' };
}

export function addJS() {
/*
  javascript.javascriptGenerator.forBlock['pwm_esp32n_setup'] = function(block, generator) {
    setRuntimeName()
    var ws_var = generator.nameDB_.getName(block.getFieldValue('ws_var'), Blockly.Names.NameType.VARIABLE);
    var ch = generator.valueToCode(block, 'ch', javascript.Order.ATOMIC);
    var freq = generator.valueToCode(block, 'freq', javascript.Order.ATOMIC);
    var bit = generator.valueToCode(block, 'bit', javascript.Order.ATOMIC);
    var code = 'await $_' + modName + '.ledcSetup(' + ws_var + ', ' + ch + ', ' + freq + ', ' + bit + ');\n';
    return code;
  };
*/

  javascript.javascriptGenerator.forBlock['pwm_esp32n_attach'] = function(block, generator) {
    setRuntimeName()
    var ws_var = generator.nameDB_.getName(block.getFieldValue('ws_var'), Blockly.Names.NameType.VARIABLE);
    var pin_var = generator.nameDB_.getName(block.getFieldValue('pin_var'), Blockly.Names.NameType.VARIABLE);
    var freq = generator.valueToCode(block, 'freq', javascript.Order.ATOMIC);
    var bit = generator.valueToCode(block, 'bit', javascript.Order.ATOMIC);
    var code = 'await $_' + modName + '.ledcAttach(' + ws_var + ', ' + pin_var + ', ' + freq + ', ' + bit + ');\n';
    return code;
  };
  
  javascript.javascriptGenerator.forBlock['pwm_esp32n_write'] = function(block, generator) {
    setRuntimeName()
    var ws_var = generator.nameDB_.getName(block.getFieldValue('ws_var'), Blockly.Names.NameType.VARIABLE);
    var pin_var = generator.nameDB_.getName(block.getFieldValue('pin_var'), Blockly.Names.NameType.VARIABLE);
    var duty = generator.valueToCode(block, 'duty', javascript.Order.ATOMIC);
    var code = 'await $_' + modName + '.ledcWrite(' + ws_var + ', ' + pin_var + ', ' + duty + ');\n';
    return code;
  };
}
