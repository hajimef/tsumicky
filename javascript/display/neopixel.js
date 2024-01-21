import * as utils from '/lib/utils.js';

const modName = 'neopixel';

function setRuntimeName() {
    Blockly.runTimeJS['neopixel'] = { 'modName': modName, 'file': 'display/neopixel' };
}

export function addJS() {
  javascript.javascriptGenerator.forBlock['neopixel_init'] = function(block, generator) {
    setRuntimeName()
    var ws_var = generator.nameDB_.getName(block.getFieldValue('ws_var'), Blockly.Names.NameType.VARIABLE);
    var no = block.getFieldValue('no');
    var pin_var = generator.nameDB_.getName(block.getFieldValue('pin_var'), Blockly.Names.NameType.VARIABLE);
    var numpixels = generator.valueToCode(block, 'numpixels', javascript.Order.ATOMIC);
    var color_order = block.getFieldValue('color_order');
    var code = 'await $_' + modName + '.init(' + ws_var + ', ' + no + ', ' + pin_var + ', ' + numpixels + ', ' + color_order + ');\n';
    return code;
  };

  javascript.javascriptGenerator.forBlock['neopixel_set_pixel_color'] = function(block, generator) {
    setRuntimeName()
    var ws_var = generator.nameDB_.getName(block.getFieldValue('ws_var'), Blockly.Names.NameType.VARIABLE);
    var no = block.getFieldValue('no');
    var p_no = generator.valueToCode(block, 'p_no', javascript.Order.ATOMIC);
    var color = generator.valueToCode(block, 'color', javascript.Order.ATOMIC);
    var code = '$_' + modName + '.setPixelColor(' + ws_var + ', ' + no + ', ';
    if (typeof p_no == 'string') {
      code += p_no + ' - 1, ' + color + ');\n'
    }
    else {
      code += (p_no - 1) + ', ' + color + ');\n';
    }
    return code;
  };

  javascript.javascriptGenerator.forBlock['neopixel_set_all_pixel_color'] = function(block, generator) {
    setRuntimeName()
    var ws_var = generator.nameDB_.getName(block.getFieldValue('ws_var'), Blockly.Names.NameType.VARIABLE);
    var no = block.getFieldValue('no');
    var color = generator.valueToCode(block, 'color', javascript.Order.ATOMIC);
    var code = '$_' + modName + '.setAllPixelColor(' + ws_var + ', ' + no + ', ' + color + ');\n';
    return code;
  };

  javascript.javascriptGenerator.forBlock['neopixel_show'] = function(block, generator) {
    var ws_var = generator.nameDB_.getName(block.getFieldValue('ws_var'), Blockly.Names.NameType.VARIABLE);
    var no = block.getFieldValue('no');
    var code = 'await $_' + modName + '.show(' + ws_var + ', ' + no + ');\n';
    return code;
  };
}
