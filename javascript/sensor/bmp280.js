import * as utils from '/lib/utils.js';

const modName = 'bmp280';

function setRuntimeName() {
    Blockly.runTimeJS['bmp280'] = { 'modName': modName, 'file': 'sensor/bmp280' };
}

export function addJS() {
  javascript.javascriptGenerator.forBlock['bmp280_init'] = function(block, generator) {
    setRuntimeName()
    var ws_var = generator.nameDB_.getName(block.getFieldValue('ws_var'), Blockly.Names.NameType.VARIABLE);
    var i2c = block.getFieldValue('i2c');
    var code = 'await $_' + modName + '.init(' + ws_var + ', ' + i2c + ', -1, -1);\n';
    return code;
  };
  
  javascript.javascriptGenerator.forBlock['bmp280_init_i2c'] = function(block, generator) {
    setRuntimeName()
    var ws_var = generator.nameDB_.getName(block.getFieldValue('ws_var'), Blockly.Names.NameType.VARIABLE);
    var i2c = block.getFieldValue('i2c');
    var sda = block.getFieldValue('sda');
    var scl = block.getFieldValue('scl');
    var code = 'await $_' + modName + '.init(' + ws_var + ', ' + i2c + ', ' + sda + ', ' + scl + ');\n';
    return code;
  };
  
  javascript.javascriptGenerator.forBlock['bmp280_temperature'] = function(block, generator) {
    setRuntimeName()
    var ws_var = generator.nameDB_.getName(block.getFieldValue('ws_var'), Blockly.Names.NameType.VARIABLE);
    return [ 'await $_' + modName + '.readTemperature(' + ws_var + ')', Blockly.JavaScript.ORDER_NONE ];
  };
  
  javascript.javascriptGenerator.forBlock['bmp280_pressure'] = function(block, generator) {
    setRuntimeName()
    var ws_var = generator.nameDB_.getName(block.getFieldValue('ws_var'), Blockly.Names.NameType.VARIABLE);
    return [ 'await $_' + modName + '.readPressure(' + ws_var + ')', Blockly.JavaScript.ORDER_NONE ];
  };
}
