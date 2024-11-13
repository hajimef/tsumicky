const modName = 'mplChartElm';

function setRuntimeName() {
  Blockly.runTimeJS['mplChartElm'] = { 'modName': modName, 'file': 'matplotlib/chart_element' };
}

export function addJS() {
  javascript.javascriptGenerator.forBlock['mpl_chartelm_legend'] = function(block, generator) {
    setRuntimeName();
    var row = generator.valueToCode(block, 'row', javascript.Order.ATOMIC);
    var col = generator.valueToCode(block, 'col', javascript.Order.ATOMIC);
    var title = generator.valueToCode(block, 'title', javascript.Order.ATOMIC);
    var loc = block.getFieldValue('loc');
    var ncol = generator.valueToCode(block, 'ncol', javascript.Order.ATOMIC);
    var code = 'await $_' + modName + '.legend(' + row + ', ' + col + ', ' + title + ', \'' + loc + '\', ' + ncol + ');\n';
    return code;
  };

  javascript.javascriptGenerator.forBlock['mpl_chartelm_figure_title'] = function(block, generator) {
    setRuntimeName();
    var title = generator.valueToCode(block, 'title', javascript.Order.ATOMIC);
    var code = 'await $_' + modName + '.figure_title(' + title + ');\n';
    return code;
  };

  javascript.javascriptGenerator.forBlock['mpl_chartelm_title'] = function(block, generator) {
    setRuntimeName();
    const row = generator.valueToCode(block, 'row', javascript.Order.ATOMIC);
    const col = generator.valueToCode(block, 'col', javascript.Order.ATOMIC);
    const title = generator.valueToCode(block, 'title', javascript.Order.ATOMIC);
    const code = 'await $_' + modName + '.title(' + row + ', ' + col + ', ' + title + ');\n';
    return code;
  };

  javascript.javascriptGenerator.forBlock['mpl_chartelm_axis_label'] = function(block, generator) {
    setRuntimeName();
    const row = generator.valueToCode(block, 'row', javascript.Order.ATOMIC);
    const col = generator.valueToCode(block, 'col', javascript.Order.ATOMIC);
    const xy = block.getFieldValue('xy');
    const label = generator.valueToCode(block, 'label', javascript.Order.ATOMIC);
    const code = 'await $_' + modName + '.axis_label(' + row + ', ' + col + ', ' + xy + ', ' + label + ');\n';
    return code;
  };

  javascript.javascriptGenerator.forBlock['mpl_chartelm_ticks'] = function(block, generator) {
    setRuntimeName();
    const row = generator.valueToCode(block, 'row', javascript.Order.ATOMIC);
    const col = generator.valueToCode(block, 'col', javascript.Order.ATOMIC);
    const xy = block.getFieldValue('xy');
    const ticks = generator.valueToCode(block, 'ticks', javascript.Order.ATOMIC);
    const code = 'await $_' + modName + '.ticks(' + row + ', ' + col + ', ' + xy + ', ' + ticks + ');\n';
    return code;
  }

  javascript.javascriptGenerator.forBlock['mpl_chartelm_tick_labels'] = function(block, generator) {
    setRuntimeName();
    const row = generator.valueToCode(block, 'row', javascript.Order.ATOMIC);
    const col = generator.valueToCode(block, 'col', javascript.Order.ATOMIC);
    const xy = block.getFieldValue('xy');
    const ticks = generator.valueToCode(block, 'ticks', javascript.Order.ATOMIC);
    const labels = generator.valueToCode(block, 'labels', javascript.Order.ATOMIC);
    const code = 'await $_' + modName + '.tick_labels(' + row + ', ' + col + ', ' + xy + ', ' + ticks + ', ' + labels + ');\n';
    return code;
  }

  javascript.javascriptGenerator.forBlock['mpl_tick_list'] = function(block, generator) {
    setRuntimeName();
    const frm = generator.valueToCode(block, 'from', javascript.Order.ATOMIC);
    const to = generator.valueToCode(block, 'to', javascript.Order.ATOMIC);
    const stp = generator.valueToCode(block, 'step', javascript.Order.ATOMIC);
    const code = '$_' + modName + '.tick_list(' + frm + ', ' + to + ', ' + stp + ')';
    return [code, javascript.Order.NONE];
  }

  javascript.javascriptGenerator.forBlock['mpl_chartelm_lim'] = function(block, generator) {
    setRuntimeName();
    const row = generator.valueToCode(block, 'row', javascript.Order.ATOMIC);
    const col = generator.valueToCode(block, 'col', javascript.Order.ATOMIC);
    const xy = block.getFieldValue('xy');
    const from = generator.valueToCode(block, 'from', javascript.Order.ATOMIC);
    const to = generator.valueToCode(block, 'to', javascript.Order.ATOMIC);
    const code = 'await $_' + modName + '.lim(' + row + ', ' + col + ', ' + xy + ', ' + from + ', ' + to + ');\n';
    return code;
  }

  javascript.javascriptGenerator.forBlock['mpl_chartelm_grid'] = function(block, generator) {
    setRuntimeName();
    const row = generator.valueToCode(block, 'row', javascript.Order.ATOMIC);
    const col = generator.valueToCode(block, 'col', javascript.Order.ATOMIC);
    const linewidth = generator.valueToCode(block, 'linewidth', javascript.Order.ATOMIC);
    const linestyle = block.getFieldValue('linestyle');
    const color = generator.valueToCode(block, 'color', javascript.Order.ATOMIC);
    const xy = block.getFieldValue('xy');
    const code = 'await $_' + modName + '.grid(' + row + ', ' + col + ', ' + linewidth + ', \'' + linestyle + '\', ' + color + ', ' + xy + ');\n';
    return code;
  };
}
