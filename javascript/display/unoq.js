import * as utils from '/lib/utils.js';

const modName = 'unoq_matrix';

function setRuntimeName() {
  Blockly.runTimeJS[modName] = { 'modName': modName, 'file': 'display/unoq' };
}

export function addJS() {
  javascript.javascriptGenerator.forBlock['unoq_matrix_init'] = function (block, generator) {
    setRuntimeName();
    const ws_var = generator.nameDB_.getName(block.getFieldValue('ws_var'), Blockly.Names.NameType.VARIABLE);
    return `await $_` + modName + `.init(${ws_var}, '${block.id}');\n`;
  };

  javascript.javascriptGenerator.forBlock['unoq_matrix_show_frame'] = function (block, generator) {
    setRuntimeName();
    const ws_var = generator.nameDB_.getName(block.getFieldValue('ws_var'), Blockly.Names.NameType.VARIABLE);
    const frame = block.getFieldValue('FRAME');
    return `await $_` + modName + `.showFrame(${ws_var}, ${frame}, '${block.id}');\n`;
  };

  javascript.javascriptGenerator.forBlock['unoq_matrix_show_bitmap'] = function (block, generator) {
    setRuntimeName();
    const ws_var = generator.nameDB_.getName(block.getFieldValue('ws_var'), Blockly.Names.NameType.VARIABLE);
    const bitmap = block.getFieldValue('BITMAP');
    const bitmapStr = JSON.stringify(bitmap);
    return `await $_` + modName + `.showBitmap(${ws_var}, ${bitmapStr}, '${block.id}');\n`;
  };

  javascript.javascriptGenerator.forBlock['unoq_matrix_show_grayscale_bitmap'] = function (block, generator) {
    setRuntimeName();
    const ws_var = generator.nameDB_.getName(block.getFieldValue('ws_var'), Blockly.Names.NameType.VARIABLE);
    const bitmap =  generator.valueToCode(block, 'BITMAP', generator.ORDER_ATOMIC);
    return `await $_` + modName + `.showGrayscaleBitmap(${ws_var}, ${bitmap}, '${block.id}');\n`;
  };

  javascript.javascriptGenerator.forBlock['unoq_matrix_show_animation'] = function (block, generator) {
    setRuntimeName();
    const ws_var = generator.nameDB_.getName(block.getFieldValue('ws_var'), Blockly.Names.NameType.VARIABLE);
    const animation = block.getFieldValue('ANIMATION');
    return `await $_` + modName + `.showAnimation(${ws_var}, ${animation}, '${block.id}');\n`;
  };

  javascript.javascriptGenerator.forBlock['unoq_matrix_scroll_text'] = function (block, generator) {
    setRuntimeName();
    const ws_var = generator.nameDB_.getName(block.getFieldValue('ws_var'), Blockly.Names.NameType.VARIABLE);
    const text = generator.valueToCode(block, 'TEXT', generator.ORDER_ATOMIC) || '""';
    const font = block.getFieldValue('FONT');
    const direction = block.getFieldValue('DIRECTION');
    const speed = generator.valueToCode(block, 'SPEED', generator.ORDER_ATOMIC) || '100';
    const timeout = generator.valueToCode(block, 'timeout', generator.ORDER_ATOMIC) || '10';
    return `await $_` + modName + `.scrollText(${ws_var}, ${text}, ${font}, ${direction}, ${speed}, ${timeout}, '${block.id}');\n`;
  };

  javascript.javascriptGenerator.forBlock['unoq_matrix_clear'] = function (block, generator) {
    setRuntimeName();
    const ws_var = generator.nameDB_.getName(block.getFieldValue('ws_var'), Blockly.Names.NameType.VARIABLE);
    return `await $_` + modName + `.clear(${ws_var}, '${block.id}');\n`;
  };

  javascript.javascriptGenerator.forBlock['unoq_rgb_led'] = function(block, generator) {
    setRuntimeName();
    const ws_var = generator.nameDB_.getName(block.getFieldValue('ws_var'), Blockly.Names.NameType.VARIABLE);
    const num = generator.valueToCode(block, 'num', generator.ORDER_ATOMIC);
    const color = generator.valueToCode(block, 'color', generator.ORDER_ATOMIC);
    return `await $_` + modName + `.rgbLED(${ws_var}, ${num}, ${color}, '${block.id}');\n`;
  };

  javascript.javascriptGenerator.forBlock['unoq_rgb_led_color'] = function(block, generator) {
    setRuntimeName();
    const color = block.getFieldValue('color');
    return [color, Blockly.JavaScript.ORDER_NONE];
  };

  javascript.javascriptGenerator.forBlock['unoq_rgb_led_number'] = function(block, generator) {
    setRuntimeName();
    const num = block.getFieldValue('num');
    return [num, Blockly.JavaScript.ORDER_NONE];
  };
}
