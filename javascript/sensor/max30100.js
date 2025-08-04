import * as utils from '/lib/utils.js';

const modName = 'max30100';

function setRuntimeName() {
  Blockly.runTimeJS['max30100'] = { 'modName': modName, 'file': 'sensor/max30100' };
}

export function addJS() {
  javascript.javascriptGenerator.forBlock['max30100_init'] = function(block, generator) {
    setRuntimeName();
    const ws_var = generator.nameDB_.getName(block.getFieldValue('ws_var'), 'VARIABLE');
    const code = `await $_${modName}.init(${ws_var});\n`;
    return code;
  };

  javascript.javascriptGenerator.forBlock['max30100_init_wire'] = function(block, generator) {
    setRuntimeName();
    const ws_var = generator.nameDB_.getName(block.getFieldValue('ws_var'), 'VARIABLE');
    const sda = block.getFieldValue('SDA');
    const scl = block.getFieldValue('SCL');
    const code = `await $_${modName}.init_wire(${ws_var}, ${sda}, ${scl});\n`;
    return code;
  };

  javascript.javascriptGenerator.forBlock['max30100_read_heartrate'] = function(block, generator) {
    setRuntimeName();
    const ws_var = generator.nameDB_.getName(block.getFieldValue('ws_var'), 'VARIABLE');
    const code = `await $_${modName}.read_heartrate(${ws_var})`;
    return [code, javascript.Order.NONE];
  };

  javascript.javascriptGenerator.forBlock['max30100_read_spo2'] = function(block, generator) {
    setRuntimeName();
    const ws_var = generator.nameDB_.getName(block.getFieldValue('ws_var'), 'VARIABLE');
    const code = `await $_${modName}.read_spo2(${ws_var})`;
    return [code, javascript.Order.NONE];
  };

  javascript.javascriptGenerator.forBlock['max30100_beat_callback'] = function(block, generator) {
    setRuntimeName();
    const ws_var = generator.nameDB_.getName(block.getFieldValue('ws_var'), 'VARIABLE');
    const f = generator.statementToCode(block, 'func');
    let code = `await $_${modName}.beat_callback(${ws_var}, async function() {\n`;
    code += generator.INDENT + f;
    code += '});\n';
    return code;
  };
}
