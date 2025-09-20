import * as utils from '/lib/utils.js';

const modName = 'turtle';

function setRuntimeName() {
  Blockly.runTimeJS['turtle'] = { 'modName': modName, 'file': 'misc/turtle' };
}

export function addJS() {
  javascript.javascriptGenerator.forBlock['turtle_init'] = function(block, generator) {
    setRuntimeName();
    const width = generator.valueToCode(block, 'width', javascript.Order.ATOMIC);
    const height = generator.valueToCode(block, 'height', javascript.Order.ATOMIC);
    const startx = generator.valueToCode(block, 'startx', javascript.Order.ATOMIC);
    const starty = generator.valueToCode(block, 'starty', javascript.Order.ATOMIC);
    const code = 'await $_' + modName + '.init(' + width + ', ' + height + ', ' + startx + ', ' + starty + ');\n';
    return code;
  };

  javascript.javascriptGenerator.forBlock['turtle_color'] = function(block, generator) {
    setRuntimeName();
    const color = generator.valueToCode(block, 'color', javascript.Order.ATOMIC);
    const fillcolor = generator.valueToCode(block, 'fillcolor', javascript.Order.ATOMIC);
    const code = 'await $_' + modName + '.color(' + color + ', ' + fillcolor + ');\n';
    return code;
  };

  javascript.javascriptGenerator.forBlock['turtle_pendown'] = function(block, generator) {
    setRuntimeName();
    const code = 'await $_' + modName + '.penDown();\n';
    return code;
  };

  javascript.javascriptGenerator.forBlock['turtle_penup'] = function(block, generator) {
    setRuntimeName();
    const code = 'await $_' + modName + '.penUp();\n';
    return code;
  };

  javascript.javascriptGenerator.forBlock['turtle_pensize'] = function(block, generator) {
    setRuntimeName();
    const width = generator.valueToCode(block, 'width', javascript.Order.ATOMIC);
    const code = 'await $_' + modName + '.penSize(' + width + ');\n';
    return code;
  };

  javascript.javascriptGenerator.forBlock['turtle_forward'] = function(block, generator) {
    setRuntimeName();
    const distance = generator.valueToCode(block, 'distance', javascript.Order.ATOMIC);
    const code = 'await $_' + modName + '.forward(' + distance + ');\n';
    return code;
  };

  javascript.javascriptGenerator.forBlock['turtle_backward'] = function(block, generator) {
    setRuntimeName();
    const distance = generator.valueToCode(block, 'distance', javascript.Order.ATOMIC);
    const code = 'await $_' + modName + '.backward(' + distance + ');\n';
    return code;
  };

  javascript.javascriptGenerator.forBlock['turtle_right'] = function(block, generator) {
    setRuntimeName();
    const angle = generator.valueToCode(block, 'angle', javascript.Order.ATOMIC);
    const code = 'await $_' + modName + '.right(' + angle + ');\n';
    return code;
  };

  javascript.javascriptGenerator.forBlock['turtle_left'] = function(block, generator) {
    setRuntimeName();
    const angle = generator.valueToCode(block, 'angle', javascript.Order.ATOMIC);
    const code = 'await $_' + modName + '.left(' + angle + ');\n';
    return code;
  };

  javascript.javascriptGenerator.forBlock['turtle_goto'] = function(block, generator) {
    setRuntimeName();
    const x = generator.valueToCode(block, 'x', javascript.Order.ATOMIC);
    const y = generator.valueToCode(block, 'y', javascript.Order.ATOMIC);
    const code = 'await $_' + modName + '.goTo(' + x + ', ' + y + ');\n';
    return code;
  };

  javascript.javascriptGenerator.forBlock['turtle_circle'] = function(block, generator) {
    setRuntimeName();
    const radius = generator.valueToCode(block, 'radius', javascript.Order.ATOMIC);
    const angle = generator.valueToCode(block, 'angle', javascript.Order.ATOMIC);
    const code = 'await $_' + modName + '.circle(' + radius + ', ' + angle + ');\n';
    return code;
  };

  javascript.javascriptGenerator.forBlock['turtle_speed'] = function(block, generator) {
    setRuntimeName();
    const speed = generator.valueToCode(block, 'speed', javascript.Order.ATOMIC);
    const code = 'await $_' + modName + '.speed(' + speed + ');\n';
    return code;
  };

  javascript.javascriptGenerator.forBlock['turtle_begin_fill'] = function(block, generator) {
    setRuntimeName();
    const code = 'await $_' + modName + '.beginFill();\n';
    return code;
  };

  javascript.javascriptGenerator.forBlock['turtle_end_fill'] = function(block, generator) {
    setRuntimeName();
    const code = 'await $_' + modName + '.endFill();\n';
    return code;
  };

  javascript.javascriptGenerator.forBlock['turtle_mainloop'] = function(block, generator) {
    setRuntimeName();
    const code = 'await $_' + modName + '.mainLoop();\n';
    return code;
  };

  javascript.javascriptGenerator.forBlock['turtle_setheading'] = function(block, generator) {
    setRuntimeName();
    const angle = generator.valueToCode(block, 'angle', javascript.Order.ATOMIC);
    const code = 'await $_' + modName + '.setHeading(' + angle + ');\n';
    return code;
  };

  javascript.javascriptGenerator.forBlock['turtle_dot'] = function(block, generator) {
    setRuntimeName();
    const size = generator.valueToCode(block, 'size', javascript.Order.ATOMIC);
    const color = generator.valueToCode(block, 'color', javascript.Order.ATOMIC);
    const code = 'await $_' + modName + '.dot(' + size + ', ' + color + ');\n';
    return code;
  };

  javascript.javascriptGenerator.forBlock['turtle_reset'] = function(block, generator) {
    setRuntimeName();
    const code = 'await $_' + modName + '.reset();\n';
    return code;
  };

  javascript.javascriptGenerator.forBlock['turtle_show_hide'] = function(block, generator) {
    setRuntimeName();
    const visible = block.getFieldValue('visible');
    const code = 'await $_' + modName + '.showHide(\"' + visible + '\");\n';
    return code;
  };

  javascript.javascriptGenerator.forBlock['turtle_get_x'] = function(block, generator) {
    setRuntimeName();
    const code = ['await $_' + modName + '.getX()', javascript.Order.ATOMIC];
    return code;
  };

  javascript.javascriptGenerator.forBlock['turtle_get_y'] = function(block, generator) {
    setRuntimeName();
    const code = ['await $_' + modName + '.getY()', javascript.Order.ATOMIC];
    return code;
  };

  javascript.javascriptGenerator.forBlock['turtle_get_heading'] = function(block, generator) {
    setRuntimeName();
    const code = ['await $_' + modName + '.getHeading()', javascript.Order.ATOMIC];
    return code;
  };

  javascript.javascriptGenerator.forBlock['turtle_is_down'] = function(block, generator) {
    setRuntimeName();
    const code = ['await $_' + modName + '.isDown()', javascript.Order.ATOMIC];
    return code;
  };

  javascript.javascriptGenerator.forBlock['turtle_stamp'] = function(block, generator) {
    setRuntimeName();
    const code = 'await $_' + modName + '.stamp();\n';
    return code;
  };

  javascript.javascriptGenerator.forBlock['turtle_shape'] = function(block, generator) {
    setRuntimeName();
    const shape = block.getFieldValue('shape');
    const code = 'await $_' + modName + '.shape(\"' + shape + '\");\n';
    return code;
  };

  javascript.javascriptGenerator.forBlock['turtle_write'] = function(block, generator) {
    setRuntimeName();
    const text = generator.valueToCode(block, 'text', javascript.Order.ATOMIC);
    const move = block.getFieldValue('move') === 'TRUE';
    const align = block.getFieldValue('align');
    const font = generator.valueToCode(block, 'font', javascript.Order.ATOMIC);
    const size = generator.valueToCode(block, 'size', javascript.Order.ATOMIC);
    const style = block.getFieldValue('style');
    const code = 'await $_' + modName + '.write(' + text + ', ' + move + ', "' + align + '", ' + font + ', ' + size + ', "' + style + '");';
    return code;
  };

  javascript.javascriptGenerator.forBlock['turtle_update'] = function(block, generator) {
    setRuntimeName();
    const code = 'await $_' + modName + '.update();\n';
    return code;
  };

  javascript.javascriptGenerator.forBlock['turtle_end'] = function(block, generator) {
    setRuntimeName();
    const code = 'await $_' + modName + '.end();\n';
    return code;
  };
}