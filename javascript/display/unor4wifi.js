import * as utils from '/lib/utils.js';

const modName = 'unor4wifi_matrix';

function setRuntimeName() {
  Blockly.runTimeJS[modName] = { 'modName': modName, 'file': 'display/unor4wifi' };
}

export function addJS() {
  javascript.javascriptGenerator.forBlock['unor4wifi_matrix_init'] = function (block, generator) {
    setRuntimeName();
    const ws_var = generator.nameDB_.getName(block.getFieldValue('ws_var'), Blockly.Names.NameType.VARIABLE);
    return `await $_` + modName + `.init(${ws_var});\n`;
  };

  javascript.javascriptGenerator.forBlock['unor4wifi_matrix_show_frame'] = function (block, generator) {
    setRuntimeName();
    const ws_var = generator.nameDB_.getName(block.getFieldValue('ws_var'), Blockly.Names.NameType.VARIABLE);
    const frame = block.getFieldValue('FRAME');
    return `await $_` + modName + `.showFrame(${ws_var}, ${frame});\n`;
  };

  javascript.javascriptGenerator.forBlock['unor4wifi_matrix_show_bitmap'] = function (block, generator) {
    setRuntimeName();
    const ws_var = generator.nameDB_.getName(block.getFieldValue('ws_var'), Blockly.Names.NameType.VARIABLE);
    const bitmap = block.getFieldValue('BITMAP');
    const bitmapStr = JSON.stringify(bitmap);
    return `await $_` + modName + `.showBitmap(${ws_var}, ${bitmapStr});\n`;
  };

  javascript.javascriptGenerator.forBlock['unor4wifi_matrix_show_animation'] = function (block, generator) {
    setRuntimeName();
    const ws_var = generator.nameDB_.getName(block.getFieldValue('ws_var'), Blockly.Names.NameType.VARIABLE);
    const animation = block.getFieldValue('ANIMATION');
    return `await $_` + modName + `.showAnimation(${ws_var}, ${animation});\n`;
  };

  javascript.javascriptGenerator.forBlock['unor4wifi_matrix_scroll_text'] = function (block, generator) {
    setRuntimeName();
    const ws_var = generator.nameDB_.getName(block.getFieldValue('ws_var'), Blockly.Names.NameType.VARIABLE);
    const text = generator.valueToCode(block, 'TEXT', generator.ORDER_ATOMIC) || '""';
    const font = block.getFieldValue('FONT');
    const direction = block.getFieldValue('DIRECTION');
    const speed = generator.valueToCode(block, 'SPEED', generator.ORDER_ATOMIC) || '100';
    return `await $_` + modName + `.scrollText(${ws_var}, ${text}, ${font}, ${direction}, ${speed});\n`;
  };

  javascript.javascriptGenerator.forBlock['unor4wifi_matrix_clear'] = function (block, generator) {
    setRuntimeName();
    const ws_var = generator.nameDB_.getName(block.getFieldValue('ws_var'), Blockly.Names.NameType.VARIABLE);
    return `await $_` + modName + `.clear(${ws_var});\n`;
  };
}
