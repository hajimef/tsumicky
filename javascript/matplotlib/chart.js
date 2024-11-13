const modName = 'mplChart';

function setRuntimeName() {
  Blockly.runTimeJS['mplChart'] = { 'modName': modName, 'file': 'matplotlib/chart' };
}

export function addJS() {
  javascript.javascriptGenerator.forBlock['mpl_chart_linestyles'] = function(block, generator) {
    setRuntimeName();
    var linestyle = block.getFieldValue('linestyles');
    return [linestyle, Blockly.JavaScript.ORDER_ATOMIC];
  }

  javascript.javascriptGenerator.forBlock['mpl_chart_markers'] = function(block, generator) {
    setRuntimeName();
    var marker = block.getFieldValue('markers');
    return [marker, Blockly.JavaScript.ORDER_ATOMIC];
  }

  javascript.javascriptGenerator.forBlock['mpl_chart_top_label'] = function(block, generator) {
    setRuntimeName();

    const code = '{ "dt" : "mplTL" }';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  }

  javascript.javascriptGenerator.forBlock['mpl_chart_bar'] = function(block, generator) {
    setRuntimeName();
    const xy = block.getFieldValue('xy');
    var row = generator.valueToCode(block, 'row', javascript.Order.ATOMIC);
    var col = generator.valueToCode(block, 'col', javascript.Order.ATOMIC);
    var x = generator.valueToCode(block, 'x', javascript.Order.ATOMIC);
    var y = generator.valueToCode(block, 'y', javascript.Order.ATOMIC);
    var linewidth = generator.valueToCode(block, 'linewidth', javascript.Order.ATOMIC);
    var linestyle = generator.valueToCode(block, 'linestyle', javascript.Order.ATOMIC);
    var linecolor = generator.valueToCode(block, 'linecolor', javascript.Order.ATOMIC);
    var width = generator.valueToCode(block, 'width', javascript.Order.ATOMIC);
    var pos = generator.valueToCode(block, 'pos', javascript.Order.ATOMIC);
    var color = generator.valueToCode(block, 'color', javascript.Order.ATOMIC);
    var label = generator.valueToCode(block, 'label', javascript.Order.ATOMIC);
    var code = 'await $_' + modName + '.bar(' + xy + ', ' + row + ', ' + col + ', ' + x + ', ' + y + ', ' + linewidth + ', \'' + linestyle + '\', ' + linecolor + ', ' + color + ', ' + width + ', ' + pos + ', ' + label + ');\n';
    return code;
  };

  javascript.javascriptGenerator.forBlock['mpl_chart_bar_datalabel'] = function(block, generator) {
    setRuntimeName();
    const xy = block.getFieldValue('xy');
    const row = generator.valueToCode(block, 'row', javascript.Order.ATOMIC);
    const col = generator.valueToCode(block, 'col', javascript.Order.ATOMIC);
    const xpos = block.getFieldValue('xpos');
    const ypos = block.getFieldValue('ypos');
    const xalign = block.getFieldValue('xalign');
    const yalign = block.getFieldValue('yalign');
    const xofs = generator.valueToCode(block, 'xofs', javascript.Order.ATOMIC);
    const yofs = generator.valueToCode(block, 'yofs', javascript.Order.ATOMIC);
    const angle = generator.valueToCode(block, 'angle', javascript.Order.ATOMIC);
    var code = 'await $_' + modName + '.bar_datalabel(' + xy + ', ' + row + ', ' + col + ', ' + xpos + ', ' + ypos + ', ' + xalign + ', ' + yalign + ', ' + xofs + ', ' + yofs + ', ' + angle + ');\n';
    return code;
  };

  javascript.javascriptGenerator.forBlock['mpl_chart_plot'] = function(block, generator) {
    setRuntimeName();
    var row = generator.valueToCode(block, 'row', javascript.Order.ATOMIC);
    var col = generator.valueToCode(block, 'col', javascript.Order.ATOMIC);
    var x = generator.valueToCode(block, 'x', javascript.Order.ATOMIC);
    var y = generator.valueToCode(block, 'y', javascript.Order.ATOMIC);
    var linewidth = generator.valueToCode(block, 'linewidth', javascript.Order.ATOMIC);
    var linestyle = generator.valueToCode(block, 'linestyle', javascript.Order.ATOMIC);
    var color = generator.valueToCode(block, 'color', javascript.Order.ATOMIC);
    var marker = generator.valueToCode(block, 'marker', javascript.Order.ATOMIC);
    var markersize = generator.valueToCode(block, 'markersize', javascript.Order.ATOMIC);
    var markercolor = generator.valueToCode(block, 'markercolor', javascript.Order.ATOMIC);
    var label = generator.valueToCode(block, 'label', javascript.Order.ATOMIC);
    var sort_x = block.getFieldValue('sort_x') == 'TRUE' ? 1 : 0;
    var code = 'await $_' + modName + '.plot(' + row + ', ' + col + ', ' + x + ', ' + y + ', ' + linewidth + ', \'' + linestyle + '\', ' + color + ', \'' + marker + '\', ' + markersize + ', ' + markercolor + ', ' + label + ', ' + sort_x + ');\n';
    return code;
  };

  javascript.javascriptGenerator.forBlock['mpl_chart_plot_datalabel'] = function(block, generator) {
    setRuntimeName();
    const row = generator.valueToCode(block, 'row', javascript.Order.ATOMIC);
    const col = generator.valueToCode(block, 'col', javascript.Order.ATOMIC);
    const xalign = block.getFieldValue('xalign');
    const yalign = block.getFieldValue('yalign');
    const xofs = generator.valueToCode(block, 'xofs', javascript.Order.ATOMIC);
    const yofs = generator.valueToCode(block, 'yofs', javascript.Order.ATOMIC);
    const angle = generator.valueToCode(block, 'angle', javascript.Order.ATOMIC);
    var code = 'await $_' + modName + '.plot_datalabel(' + row + ', ' + col + ', ' + xalign + ', ' + yalign + ', ' + xofs + ', ' + yofs + ', ' + angle + ');\n';
    return code;
  }

  javascript.javascriptGenerator.forBlock['mpl_chart_pie'] = function(block, generator) {
    setRuntimeName();
    const row = generator.valueToCode(block, 'row', javascript.Order.ATOMIC);
    const col = generator.valueToCode(block, 'col', javascript.Order.ATOMIC);
    const x = generator.valueToCode(block, 'x', javascript.Order.ATOMIC);
    let label = generator.valueToCode(block, 'label', javascript.Order.ATOMIC);
    if (label == "") {
      label = 'null';
    }
    const labeldistance = generator.valueToCode(block, 'labeldistance', javascript.Order.ATOMIC);
    let rotatelabels = block.getFieldValue('rotatelabels');
    rotatelabels = rotatelabels == 'TRUE' ? 1 : 0;
    let colors = generator.valueToCode(block, 'colors', javascript.Order.ATOMIC);
    if (colors == "") {
      colors = 'null';
    }
    let explode = generator.valueToCode(block, 'explode', javascript.Order.ATOMIC);
    if (explode == "") {
      explode = 'null';
    }
    const radius = generator.valueToCode(block, 'radius', javascript.Order.ATOMIC);
    const autopct = generator.valueToCode(block, 'autopct', javascript.Order.ATOMIC);
    const pctdistance = generator.valueToCode(block, 'pctdistance', javascript.Order.ATOMIC);
    const c_radius = generator.valueToCode(block, 'c_radius', javascript.Order.ATOMIC);
    let edgecolor = generator.valueToCode(block, 'edgecolor', javascript.Order.ATOMIC);
    if (edgecolor == "") {
      edgecolor = 'null';
    }
    var code = 'await $_' + modName + '.pie(' + row + ', ' + col + ', ' + x + ', '
             + label + ', ' + labeldistance + ', ' + rotatelabels + ', ' + colors + ', ' + explode + ', ' 
             + radius + ',' + autopct + ',' + pctdistance + ',' + c_radius + ',' + edgecolor + ');\n';
    return code;
  }

  javascript.javascriptGenerator.forBlock['mpl_chart_clear_stack_y'] = function(block, generator) {
    setRuntimeName();
    var code = 'await $_' + modName + '.clear_stack_y();\n';
    return code;
  };
}