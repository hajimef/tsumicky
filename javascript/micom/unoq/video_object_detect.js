const modName = 'unoq_video_object_detect';

function setRuntimeName() {
  Blockly.runTimeJS[modName] = { 'modName': modName, 'file': 'micom/unoq/video_object_detect' };
}

export function addJS() {
  javascript.javascriptGenerator.forBlock['unoq_video_object_detect_init_detector'] = function(block, generator) {
    setRuntimeName();
    const ws_var = generator.nameDB_.getName(block.getFieldValue('ws_var'), Blockly.Names.NameType.VARIABLE);
    const camera = generator.valueToCode(block, 'camera', generator.ORDER_ATOMIC);
    const confidence = generator.valueToCode(block, 'confidence', generator.ORDER_ATOMIC);
    const display = block.getFieldValue('display') == 'TRUE' ? true : false;
    const code = `await $_` + modName + `.init_detector(${ws_var}, ${camera}, ${confidence}, ${display}, '${block.id}')`;
    return [ code, Blockly.JavaScript.ORDER_NONE ];
  };

  javascript.javascriptGenerator.forBlock['unoq_video_object_detect_on_detect_all'] = function(block, generator) {
    setRuntimeName();
    const ws_var = generator.nameDB_.getName(block.getFieldValue('ws_var'), Blockly.Names.NameType.VARIABLE);
    const detector = generator.valueToCode(block, 'detector', generator.ORDER_ATOMIC);
    const result_var = generator.nameDB_.getName(block.getFieldValue('result_var'), Blockly.Names.NameType.VARIABLE);
    const f = generator.statementToCode(block, 'func');
    let code = `await $_${modName}.on_detect(${ws_var}, ${detector}, async function(${result_var}) {\n`;
    code += generator.INDENT + `if (${detector} == ${result_var}.d) {\n`;
    code += generator.INDENT + generator.INDENT + `${result_var} = ${result_var}.r;\n`;
    code += generator.INDENT + generator.INDENT + f + '\n';
    code += generator.INDENT + `}\n`;
    code += `}, '${block.id}');\n`;
    return code;
  };

  javascript.javascriptGenerator.forBlock['unoq_video_object_detect_on_detect'] = function(block, generator) {
    setRuntimeName();
    const ws_var = generator.nameDB_.getName(block.getFieldValue('ws_var'), Blockly.Names.NameType.VARIABLE);
    const detector = generator.valueToCode(block, 'detector', generator.ORDER_ATOMIC);
    const thing = generator.valueToCode(block, 'thing', generator.ORDER_ATOMIC);
    const result_var = generator.nameDB_.getName(block.getFieldValue('result_var'), Blockly.Names.NameType.VARIABLE);
    const f = generator.statementToCode(block, 'func');
    let code = `await $_${modName}.on_detect(${ws_var}, ${detector}, async function(${result_var}) {\n`;
    code += generator.INDENT + `if (${detector} == ${result_var}.d && ${result_var}.r.hasOwnProperty(${thing})) {\n`;
    code += generator.INDENT + generator.INDENT + `${result_var} = ${result_var}.r[${thing}];\n`;
    code += generator.INDENT + generator.INDENT + f + '\n';
    code += generator.INDENT + `}\n`;
    code += `}, '${block.id}');\n`;
    return code;
  };

  javascript.javascriptGenerator.forBlock['unoq_video_object_detect_stop_detector'] = function(block, generator) {
    setRuntimeName();
    const ws_var = generator.nameDB_.getName(block.getFieldValue('ws_var'), Blockly.Names.NameType.VARIABLE);
    const detector = generator.valueToCode(block, 'detector', generator.ORDER_ATOMIC);
    const code = `await $_` + modName + `.stop_detector(${ws_var}, ${detector}, '${block.id}');\n`;
    return code;
  };

  javascript.javascriptGenerator.forBlock['unoq_video_object_detect_result_loop'] = function(block, generator) {
    setRuntimeName();
    const results_var = generator.nameDB_.getName(block.getFieldValue('results_var'), Blockly.Names.NameType.VARIABLE);
    const name_var = generator.nameDB_.getName(block.getFieldValue('name_var'), Blockly.Names.NameType.VARIABLE);
    const result_var = generator.nameDB_.getName(block.getFieldValue('result_var'), Blockly.Names.NameType.VARIABLE);
    const func = generator.statementToCode(block, 'func');
    let code = `for (let [${name_var}, ${result_var}] of Object.entries(${results_var})) {\n`
    code += generator.INDENT + func;
    code += '}\n';
    return code;
  };

  javascript.javascriptGenerator.forBlock['unoq_video_object_detect_is_exist'] = function(block, generator) {
    setRuntimeName();
    const results_var = generator.nameDB_.getName(block.getFieldValue('results_var'), Blockly.Names.NameType.VARIABLE);
    const thing = generator.valueToCode(block, 'thing', generator.ORDER_ATOMIC);
    const code = `${results_var}.hasOwnProperty(${thing})`;
    return [ code, Blockly.JavaScript.ORDER_NONE ];
  };

  javascript.javascriptGenerator.forBlock['unoq_video_object_detect_result_data'] = function(block, generator) {
    setRuntimeName();
    const results_var = generator.nameDB_.getName(block.getFieldValue('results_var'), Blockly.Names.NameType.VARIABLE);
    const thing = generator.valueToCode(block, 'thing', generator.ORDER_ATOMIC);
    const code = `${results_var}[${thing}]`;
    return [ code, Blockly.JavaScript.ORDER_NONE ];
  };

  javascript.javascriptGenerator.forBlock['unoq_video_object_detect_count_types'] = function(block, generator) {
    setRuntimeName();
    const results_var = generator.nameDB_.getName(block.getFieldValue('results_var'), Blockly.Names.NameType.VARIABLE);
    const code = `Object.keys(${results_var}).length`;
    return [ code, Blockly.JavaScript.ORDER_NONE ];
  };

  javascript.javascriptGenerator.forBlock['unoq_video_object_detect_count_objects'] = function(block, generator) {
    setRuntimeName();
    const results_var = generator.nameDB_.getName(block.getFieldValue('results_var'), Blockly.Names.NameType.VARIABLE);
    const code = `$_${modName}.count_objects(${results_var})`;
    return [ code, Blockly.JavaScript.ORDER_NONE ];
  };

  javascript.javascriptGenerator.forBlock['unoq_video_object_detect_data_confidence'] = function(block, generator) {
    setRuntimeName();
    const data_var = generator.nameDB_.getName(block.getFieldValue('data_var'), Blockly.Names.NameType.VARIABLE);
    const code = `${data_var}.confidence`;
    return [ code, Blockly.JavaScript.ORDER_NONE ];
  };

  javascript.javascriptGenerator.forBlock['unoq_video_object_detect_data_box'] = function(block, generator) {
    setRuntimeName();
    const data_var = generator.nameDB_.getName(block.getFieldValue('data_var'), Blockly.Names.NameType.VARIABLE);
    const box = Number(block.getFieldValue('box'));
    const code = `${data_var}.bounding_box_xyxy[${box}]`;
    return [ code, Blockly.JavaScript.ORDER_NONE ];
  };

  javascript.javascriptGenerator.forBlock['unoq_video_object_detect_found_objects'] = function(block, generator) {
    setRuntimeName();
    const results = generator.valueToCode(block, 'results', Order.ATOMIC);
    const code = 'Object.keys(' + results + ')';
    return [ code, Blockly.JavaScript.ORDER_NONE ];
  }
};
