const modName = 'mplStatChart';

function setRuntimeName() {
  Blockly.runTimeJS['mplStatChart'] = { 'modName': modName, 'file': 'matplotlib/stat_chart' };
}

export function addJS() {
  javascript.javascriptGenerator.forBlock['mpl_chart_scatter'] = function(block, generator) {
    setRuntimeName();
    var row = generator.valueToCode(block, 'row', javascript.Order.ATOMIC);
    var col = generator.valueToCode(block, 'col', javascript.Order.ATOMIC);
    var x = generator.valueToCode(block, 'x', javascript.Order.ATOMIC);
    var y = generator.valueToCode(block, 'y', javascript.Order.ATOMIC);
    var marker = generator.valueToCode(block, 'marker', javascript.Order.ATOMIC);
    var markersize = generator.valueToCode(block, 'markersize', javascript.Order.ATOMIC);
    var color = generator.valueToCode(block, 'color', javascript.Order.ATOMIC);
    var label = generator.valueToCode(block, 'label', javascript.Order.ATOMIC);
    var code = 'await $_' + modName + '.scatter(' + row + ', ' + col + ', ' + x + ', ' + y + ', ' + marker + ', ' + markersize + ', ' + color + ', ' + label + ');\n';
    return code;
  };

  javascript.javascriptGenerator.forBlock['mpl_chart_scatter_datalabel'] = function(block, generator) {
    setRuntimeName();
    const row = generator.valueToCode(block, 'row', javascript.Order.ATOMIC);
    const col = generator.valueToCode(block, 'col', javascript.Order.ATOMIC);
    const type = block.getFieldValue('type');
    let label = '';
    try {
      label = generator.valueToCode(block, 'label', javascript.Order.ATOMIC);
    }
    catch(e) {}
    label = (label == '') ? 'null' : label;
    const xalign = block.getFieldValue('xalign');
    const yalign = block.getFieldValue('yalign');
    const xofs = generator.valueToCode(block, 'xofs', javascript.Order.ATOMIC);
    const yofs = generator.valueToCode(block, 'yofs', javascript.Order.ATOMIC);
    const angle = generator.valueToCode(block, 'angle', javascript.Order.ATOMIC);
    var code = 'await $_' + modName + '.scatter_datalabel(' + row + ', ' + col + ', ' + type + ', ' + label + ', ' + xalign + ', ' + yalign + ', ' + xofs + ', ' + yofs + ', ' + angle + ');\n';
   return code;
  };

  javascript.javascriptGenerator.forBlock['mpl_chart_histgram'] = function(block, generator) {
    setRuntimeName();
    const type = block.getFieldValue('type');
    const row = generator.valueToCode(block, 'row', javascript.Order.ATOMIC);
    const col = generator.valueToCode(block, 'col', javascript.Order.ATOMIC);
    const x = generator.valueToCode(block, 'x', javascript.Order.ATOMIC);
    const bins = generator.valueToCode(block, 'bins', javascript.Order.ATOMIC);
    let norm = block.getFieldValue('norm');
    norm = (norm == 'TRUE') ? 1 : 0;
    let cumulative = block.getFieldValue('cumulative');
    cumulative = (cumulative == 'TRUE') ? 1 : 0;
    let ecs = generator.valueToCode(block, 'ecs', javascript.Order.ATOMIC);
    ecs = (ecs == '') ? 'null' : ecs;
    let colors = generator.valueToCode(block, 'colors', javascript.Order.ATOMIC);
    colors = (colors == '') ? 'null' : colors;
    const alpha = generator.valueToCode(block, 'alpha', javascript.Order.ATOMIC);
    let label = generator.valueToCode(block, 'label', javascript.Order.ATOMIC);
    label = (label == '') ? 'null' : label;
    var code = 'await $_' + modName + '.histgram(' + type + ', ' + row + ', ' + col + ', ' + x + ', ' + bins + ', '
             + norm + ', ' + cumulative + ', ' + ecs + ', ' + colors + ', ' + alpha + ', ' + label + ');\n';
    return code;
  }

  javascript.javascriptGenerator.forBlock['mpl_chart_histgram_excel_bins'] = function(block, generator) {
    const range = generator.valueToCode(block, 'range', javascript.Order.ATOMIC);
    const code = 'await $_' + modName + '.histgram_excel_bins(' + range + ');';
    return code;
  }

  javascript.javascriptGenerator.forBlock['mpl_chart_histgram_excel_n'] = function(block, generator) {
    const range = generator.valueToCode(block, 'range', javascript.Order.ATOMIC);
    const code = 'await $_' + modName + '.histgram_excel_n(' + range + ');';
    return code;
  }
}
