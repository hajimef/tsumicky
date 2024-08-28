import * as utils from '/lib/utils.js';

const modName = 'dht';

function setRuntimeName() {
    Blockly.runTimeJS['dht'] = { 'modName': modName, 'file': 'sensor/dht' };
}

export function addJS() {
  javascript.javascriptGenerator.forBlock['dht_init'] = function(block, generator) {
    setRuntimeName()
    var ws_var = generator.nameDB_.getName(block.getFieldValue('ws_var'), Blockly.Names.NameType.VARIABLE);
    var type = block.getFieldValue('type');
    var pin = block.getFieldValue('pin');
    var code = 'await $_' + modName + '.init(' + ws_var + ', ' + type + ', ' + pin + ');\n';
    return code;
  };
  
  javascript.javascriptGenerator.forBlock['dht_temperature'] = function(block, generator) {
    setRuntimeName()
    var ws_var = generator.nameDB_.getName(block.getFieldValue('ws_var'), Blockly.Names.NameType.VARIABLE);
    return [ 'await $_' + modName + '.readTemperature(' + ws_var + ')', Blockly.JavaScript.ORDER_NONE ];
  };
  
  javascript.javascriptGenerator.forBlock['dht_humidity'] = function(block, generator) {
    setRuntimeName()
    var ws_var = generator.nameDB_.getName(block.getFieldValue('ws_var'), Blockly.Names.NameType.VARIABLE);
    return [ 'await $_' + modName + '.readHumidity(' + ws_var + ')', Blockly.JavaScript.ORDER_NONE ];
  };
}
