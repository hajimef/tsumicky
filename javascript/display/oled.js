import * as utils from '/lib/utils.js';

const modName = 'oled';

function setRuntimeName() {
    Blockly.runTimeJS['oled'] = { 'modName': modName, 'file': 'display/oled' };
}

export function addJS() {
  javascript.javascriptGenerator.forBlock['oled_hw_i2c_init'] = function(block, generator) {
    setRuntimeName();
    var ws_var = generator.nameDB_.getName(block.getFieldValue('ws_var'), Blockly.Names.NameType.VARIABLE);
    var type = block.getFieldValue('type');
    var code = 'await $_' + modName + '.init(' + ws_var + ', 0, ' + type + ', -1, -1, -1, -1, -1);\n';
    return code;
  };

  javascript.javascriptGenerator.forBlock['oled_hw_i2c_init_pin'] = function(block, generator) {
    setRuntimeName();
    var ws_var = generator.nameDB_.getName(block.getFieldValue('ws_var'), Blockly.Names.NameType.VARIABLE);
    var type = block.getFieldValue('type');
    var sda = block.getFieldValue('sda');
    var scl = block.getFieldValue('scl');
    var code = 'await $_' + modName + '.init(' + ws_var + ', 0, ' + type + ', ' + sda + ', ' + scl + ', -1, -1, -1);\n';
    return code;
  };

  javascript.javascriptGenerator.forBlock['oled_hw_spi_init'] = function(block, generator) {
    setRuntimeName();
    var ws_var = generator.nameDB_.getName(block.getFieldValue('ws_var'), Blockly.Names.NameType.VARIABLE);
    var type = block.getFieldValue('type');
    var dc = block.getFieldValue('dc');
    var cs = block.getFieldValue('cs');
    var res = block.getFieldValue('res');
    var code = 'await $_' + modName + '.init(' + ws_var + ', 1, ' + type + ', -1, -1, ' + dc + ', ' + cs + ', ' + res + ');\n';
    return code;
  };

  javascript.javascriptGenerator.forBlock['oled_hw_spi_init_pin'] = function(block, generator) {
    setRuntimeName();
    var ws_var = generator.nameDB_.getName(block.getFieldValue('ws_var'), Blockly.Names.NameType.VARIABLE);
    var type = block.getFieldValue('type');
    var sda = block.getFieldValue('sda');
    var sck = block.getFieldValue('sck');
    var dc = block.getFieldValue('dc');
    var cs = block.getFieldValue('cs');
    var res = block.getFieldValue('res');
    var code = 'await $_' + modName + '.init(' + ws_var + ', 1, ' + type + ', ' + sda + ', ' + sck + ', ' + dc + ', ' + cs + ', ' + res + ');\n';
    return code;
  };

  javascript.javascriptGenerator.forBlock['oled_draw_line'] = function(block, generator) {
    setRuntimeName();
    var ws_var = generator.nameDB_.getName(block.getFieldValue('ws_var'), Blockly.Names.NameType.VARIABLE);
    var x1 = generator.valueToCode(block, 'x1', javascript.Order.ATOMIC);
    var y1 = generator.valueToCode(block, 'y1', javascript.Order.ATOMIC);
    var x2 = generator.valueToCode(block, 'x2', javascript.Order.ATOMIC);
    var y2 = generator.valueToCode(block, 'y2', javascript.Order.ATOMIC);
    var code = 'await $_' + modName + '.drawLine(' + ws_var + ', ' + x1 + ', ' + y1 + ', ' + x2 + ', ' + y2 + ');\n';
    return code;
  };

  javascript.javascriptGenerator.forBlock['oled_draw_frame'] = function(block, generator) {
    setRuntimeName();
    var ws_var = generator.nameDB_.getName(block.getFieldValue('ws_var'), Blockly.Names.NameType.VARIABLE);
    var x = generator.valueToCode(block, 'x', javascript.Order.ATOMIC);
    var y = generator.valueToCode(block, 'y', javascript.Order.ATOMIC);
    var w = generator.valueToCode(block, 'w', javascript.Order.ATOMIC);
    var h = generator.valueToCode(block, 'h', javascript.Order.ATOMIC);
    var code = 'await $_' + modName + '.drawFrame(' + ws_var + ', ' + x + ', ' + y + ', ' + w + ', ' + h + ');\n';
    return code;
  };

  javascript.javascriptGenerator.forBlock['oled_draw_box'] = function(block, generator) {
    setRuntimeName();
    var ws_var = generator.nameDB_.getName(block.getFieldValue('ws_var'), Blockly.Names.NameType.VARIABLE);
    var x = generator.valueToCode(block, 'x', javascript.Order.ATOMIC);
    var y = generator.valueToCode(block, 'y', javascript.Order.ATOMIC);
    var w = generator.valueToCode(block, 'w', javascript.Order.ATOMIC);
    var h = generator.valueToCode(block, 'h', javascript.Order.ATOMIC);
    var code = 'await $_' + modName + '.drawBox(' + ws_var + ', ' + x + ', ' + y + ', ' + w + ', ' + h + ');\n';
    return code;
  };

  javascript.javascriptGenerator.forBlock['oled_draw_pixel'] = function(block, generator) {
    setRuntimeName();
    var ws_var = generator.nameDB_.getName(block.getFieldValue('ws_var'), Blockly.Names.NameType.VARIABLE);
    var x = generator.valueToCode(block, 'x', javascript.Order.ATOMIC);
    var y = generator.valueToCode(block, 'y', javascript.Order.ATOMIC);
    var code = 'await $_' + modName + '.drawPixel(' + ws_var + ', ' + x + ', ' + y + ');\n';
    return code;
  };
  
  javascript.javascriptGenerator.forBlock['oled_draw_circle'] = function(block, generator) {
    setRuntimeName();
    var ws_var = generator.nameDB_.getName(block.getFieldValue('ws_var'), Blockly.Names.NameType.VARIABLE);
    var x = generator.valueToCode(block, 'x', javascript.Order.ATOMIC);
    var y = generator.valueToCode(block, 'y', javascript.Order.ATOMIC);
    var radius = generator.valueToCode(block, 'radius', javascript.Order.ATOMIC);
    var code = 'await $_' + modName + '.drawCircle(' + ws_var + ', ' + x + ', ' + y + ', ' + radius + ');\n';
    return code;
  };
  
  javascript.javascriptGenerator.forBlock['oled_draw_disc'] = function(block, generator) {
    setRuntimeName();
    var ws_var = generator.nameDB_.getName(block.getFieldValue('ws_var'), Blockly.Names.NameType.VARIABLE);
    var x = generator.valueToCode(block, 'x', javascript.Order.ATOMIC);
    var y = generator.valueToCode(block, 'y', javascript.Order.ATOMIC);
    var radius = generator.valueToCode(block, 'radius', javascript.Order.ATOMIC);
    var code = 'await $_' + modName + '.drawDisc(' + ws_var + ', ' + x + ', ' + y + ', ' + radius + ');\n';
    return code;
  };
  
  javascript.javascriptGenerator.forBlock['oled_set_font'] = function(block, generator) {
    setRuntimeName();
    var ws_var = generator.nameDB_.getName(block.getFieldValue('ws_var'), Blockly.Names.NameType.VARIABLE);
    var font = block.getFieldValue('font');
    var code = 'await $_' + modName + '.setFont(' + ws_var + ', ' + font + ');\n';
    return code;
  };

  javascript.javascriptGenerator.forBlock['oled_set_font_rpi'] = function(block, generator) {
    setRuntimeName();
    var ws_var = generator.nameDB_.getName(block.getFieldValue('ws_var'), Blockly.Names.NameType.VARIABLE);
    var font = block.getFieldValue('font');
    var code = 'await $_' + modName + '.setFont(' + ws_var + ', ' + font + ');\n';
    return code;
  };

  javascript.javascriptGenerator.forBlock['oled_set_cursor'] = function(block, generator) {
    setRuntimeName();
    var ws_var = generator.nameDB_.getName(block.getFieldValue('ws_var'), Blockly.Names.NameType.VARIABLE);
    var x = generator.valueToCode(block, 'x', javascript.Order.ATOMIC);
    var y = generator.valueToCode(block, 'y', javascript.Order.ATOMIC);
    var code = 'await $_' + modName + '.setCursor(' + ws_var + ', ' + x + ', ' + y + ');\n';
    return code;
  };

  javascript.javascriptGenerator.forBlock['oled_print'] = function(block, generator) {
    var ws_var = generator.nameDB_.getName(block.getFieldValue('ws_var'), Blockly.Names.NameType.VARIABLE);
    var str = generator.valueToCode(block, 'str', javascript.Order.ATOMIC);
    var code = 'await $_' + modName + '.print(' + ws_var + ', ' + str + ');\n';
    return code;
  };

  javascript.javascriptGenerator.forBlock['oled_send_buffer'] = function(block, generator) {
    setRuntimeName();
    var ws_var = generator.nameDB_.getName(block.getFieldValue('ws_var'), Blockly.Names.NameType.VARIABLE);
    var code = 'await $_' + modName + '.sendBuffer(' + ws_var + ');\n';
    return code;
  };

  javascript.javascriptGenerator.forBlock['oled_clear_display'] = function(block, generator) {
    setRuntimeName();
    var ws_var = generator.nameDB_.getName(block.getFieldValue('ws_var'), Blockly.Names.NameType.VARIABLE);
    var code = 'await $_' + modName + '.clearDisplay(' + ws_var + ');\n';
    return code;
  };
  
  javascript.javascriptGenerator.forBlock['oled_clear_buffer'] = function(block, generator) {
    setRuntimeName();
    var ws_var = generator.nameDB_.getName(block.getFieldValue('ws_var'), Blockly.Names.NameType.VARIABLE);
    var code = 'await $_' + modName + '.clearBuffer(' + ws_var + ');\n';
    return code;
  };
}
