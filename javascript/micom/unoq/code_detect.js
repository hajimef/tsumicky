const modName = 'unoq_code_detect';

function setRuntimeName() {
  Blockly.runTimeJS[modName] = { 'modName': modName, 'file': 'micom/unoq/code_detect' };
}

export function addJS() {
  javascript.javascriptGenerator.forBlock['unoq_code_detect_init_detector'] = function(block, generator) {
    setRuntimeName();
    const ws_var = generator.nameDB_.getName(block.getFieldValue('ws_var'), Blockly.Names.NameType.VARIABLE);
    const camera = generator.valueToCode(block, 'camera', generator.ORDER_ATOMIC);
    const display = block.getFieldValue('display') == 'TRUE' ? true : false;
    const code = `await $_` + modName + `.init_detector(${ws_var}, ${camera}, ${display}, '${block.id}')`;
    return [ code, Blockly.JavaScript.ORDER_NONE ];
  };

  javascript.javascriptGenerator.forBlock['unoq_code_detect_result'] = function(block, generator) {
    setRuntimeName();
    const ws_var = generator.nameDB_.getName(block.getFieldValue('ws_var'), Blockly.Names.NameType.VARIABLE);
    const detector = generator.valueToCode(block, 'detector', generator.ORDER_ATOMIC);
    const code = `await $_` + modName + `.result(${ws_var}, ${detector}, '${block.id}')`;
    return [ code, Blockly.JavaScript.ORDER_NONE ];
  };

  javascript.javascriptGenerator.forBlock['unoq_code_detect_result_type'] = function(block, generator) {
    setRuntimeName();
    const v = generator.nameDB_.getName(block.getFieldValue('var'), Blockly.Names.NameType.VARIABLE);
    const code = v + '.t';
    return [ code, Blockly.JavaScript.ORDER_NONE ];
  };

  javascript.javascriptGenerator.forBlock['unoq_code_detect_result_value'] = function(block, generator) {
    setRuntimeName();
    const v = generator.nameDB_.getName(block.getFieldValue('var'), Blockly.Names.NameType.VARIABLE);
    const code = v + '.c';
    return [ code, Blockly.JavaScript.ORDER_NONE ];
  };

  javascript.javascriptGenerator.forBlock['unoq_code_detect_reset_seen_all'] = function(block, generator) {
    setRuntimeName();
    const ws_var = generator.nameDB_.getName(block.getFieldValue('ws_var'), Blockly.Names.NameType.VARIABLE);
    const detector = generator.valueToCode(block, 'detector', generator.ORDER_ATOMIC);
    const code = `await $_` + modName + `.reset_seen_all(${ws_var}, ${detector}, '${block.id}')`;
    return code;
  }

  javascript.javascriptGenerator.forBlock['unoq_code_detect_reset_seen'] = function(block, generator) {
    setRuntimeName();
    const ws_var = generator.nameDB_.getName(block.getFieldValue('ws_var'), Blockly.Names.NameType.VARIABLE);
    const detector = generator.valueToCode(block, 'detector', generator.ORDER_ATOMIC);
    const value = generator.valueToCode(block, 'value', generator.ORDER_ATOMIC);
    const code = `await $_` + modName + `.reset_seen(${ws_var}, ${detector}, ${value}, '${block.id}')`;
    return code;
  }
};
