import * as utils from '/lib/utils.js';

const modName = 'mpu6050';

function setRuntimeName() {
    Blockly.runTimeJS['mpu6050'] = { 'modName': modName, 'file': 'sensor/mpu6050' };
}

export function addJS() {
  javascript.javascriptGenerator.forBlock['mpu6050_init'] = function(block, generator) {
    setRuntimeName()
    var ws_var = generator.nameDB_.getName(block.getFieldValue('ws_var'), Blockly.Names.NameType.VARIABLE);
    var code = 'await $_' + modName + '.init(' + ws_var + ', -1, -1);\n';
    return code;
  };
  
  javascript.javascriptGenerator.forBlock['mpu6050_init_pin'] = function(block, generator) {
    setRuntimeName()
    var ws_var = generator.nameDB_.getName(block.getFieldValue('ws_var'), Blockly.Names.NameType.VARIABLE);
    var sda = block.getFieldValue('sda');
    var scl = block.getFieldValue('scl');
    var code = 'await $_' + modName + '.init(' + ws_var + ', ' + sda + ', ' + scl + ');\n';
    return code;
  };
  
  javascript.javascriptGenerator.forBlock['mpu6050_update'] = function(block, generator) {
    setRuntimeName()
    var ws_var = generator.nameDB_.getName(block.getFieldValue('ws_var'), Blockly.Names.NameType.VARIABLE);
    var code = 'await $_' + modName + '.update(' + ws_var + ');\n';
    return code;
  };
  
  javascript.javascriptGenerator.forBlock['mpu6050_read'] = function(block, generator) {
    setRuntimeName()
    var ws_var = generator.nameDB_.getName(block.getFieldValue('ws_var'), Blockly.Names.NameType.VARIABLE);
    var type = block.getFieldValue('type');
    return [ 'await $_' + modName + '.read(' + ws_var + ', ' + type + ')', Blockly.JavaScript.ORDER_NONE ];
  };
}
