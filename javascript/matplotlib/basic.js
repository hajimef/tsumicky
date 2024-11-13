const modName = 'mplBasic';

function setRuntimeName() {
  Blockly.runTimeJS['mplBasic'] = { 'modName': modName, 'file': 'matplotlib/basic' };
}

export function addJS() {
  javascript.javascriptGenerator.forBlock['mpl_pyplot_subplots'] = function(block, generator) {
    setRuntimeName();
    var row = generator.valueToCode(block, 'row', javascript.Order.ATOMIC);
    var col = generator.valueToCode(block, 'col', javascript.Order.ATOMIC);
    var width = generator.valueToCode(block, 'width', javascript.Order.ATOMIC);
    var height = generator.valueToCode(block, 'height', javascript.Order.ATOMIC);
    var code = 'await $_' + modName + '.pyplot_subplots(' + row + ', ' + col + ', ' + width + ', ' + height + ');\n';
    return code;
  };

  javascript.javascriptGenerator.forBlock['mpl_pyplot_show'] = function(block, generator) {
    setRuntimeName();
    var code = 'await $_' + modName + '.pyplot_show();\n';
    return code;
  };

  javascript.javascriptGenerator.forBlock['mpl_pyplot_draw'] = function(block, generator) {
    setRuntimeName();
    var code = 'await $_' + modName + '.pyplot_draw();\n';
    return code;
  };

  javascript.javascriptGenerator.forBlock['mpl_pyplot_pause'] = function(block, generator) {
    setRuntimeName();
    var code = 'await $_' + modName + '.pyplot_pause();\n';
    return code;
  };

  javascript.javascriptGenerator.forBlock['mpl_pyplot_cla'] = function(block, generator) {
    setRuntimeName();
    var row = generator.valueToCode(block, 'row', javascript.Order.ATOMIC);
    var col = generator.valueToCode(block, 'col', javascript.Order.ATOMIC);
    var code = 'await $_' + modName + '.pyplot_cla(' + row + ', ' + col + ');\n';
    return code;
  };

  javascript.javascriptGenerator.forBlock['mpl_pyplot_close'] = function(block, generator) {
    setRuntimeName();
    var code = 'await $_' + modName + '.pyplot_close();\n';
    return code;
  };
}