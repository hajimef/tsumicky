import * as utils from '/lib/utils.js';

function setRuntimeName() {
    Blockly.runTimeJS['servo'] = { 'modName': 'servo', 'file': 'servo' };
}

export function addJS() {
  javascript.javascriptGenerator.forBlock['servo_attach'] = function(block, generator) {
    setRuntimeName()
    var ws_name = generator.nameDB_.getName(block.getFieldValue('ws_name'), Blockly.Names.NameType.VARIABLE);
    var servo_no = generator.valueToCode(block, 'servo_no', javascript.Order.ATOMIC);
    var pmin = generator.valueToCode(block, 'pmin', javascript.Order.ATOMIC);
    var pmax = generator.valueToCode(block, 'pmax', javascript.Order.ATOMIC);
    var pin_name = generator.nameDB_.getName(block.getFieldValue('pin_name'), Blockly.Names.NameType.VARIABLE);
    var code = 'await $_servo.attach(' + ws_name + ', ' + pin_name + ', ' + servo_no + ', ' + pmin + ', ' + pmax + ');\n';
    return code;
  };
  
  javascript.javascriptGenerator.forBlock['servo_write'] = function(block, generator) {
    setRuntimeName()
    var ws_name = generator.nameDB_.getName(block.getFieldValue('ws_name'), Blockly.Names.NameType.VARIABLE);    var servo_no = generator.valueToCode(block, 'servo_no', javascript.Order.ATOMIC);
    var angle = generator.valueToCode(block, 'angle', javascript.Order.ATOMIC);
    var code = 'await $_servo.write(' + ws_name + ', ' + servo_no + ', ' + angle + ');\n';
    return code;
  };
}
