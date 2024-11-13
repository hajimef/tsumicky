import * as utils from '/lib/utils.js';

const modName = 'slKmeans';

function setRuntimeName() {
    Blockly.runTimeJS['slKmeans'] = { 'modName': modName, 'file': 'scikit_learn/kmeans' };
}

export function addJS() {
  javascript.javascriptGenerator.forBlock['sl_kmeans_init'] = function(block, generator) {
    setRuntimeName()
    const num = generator.valueToCode(block, 'num', javascript.Order.ATOMIC);
    const random_state = generator.valueToCode(block, 'random_state', javascript.Order.ATOMIC);
    const code = 'await $_' + modName + '.init(' + num + ', ' + random_state + ');\n';
    return code;
  }

  javascript.javascriptGenerator.forBlock['sl_kmeans_fit'] = function(block, generator) {
    setRuntimeName()
    var code = 'await $_' + modName + '.fit();\n';
    return code;
  };

  javascript.javascriptGenerator.forBlock['sl_kmeans_plot'] = function(block, generator) {
    setRuntimeName()
    const row = generator.valueToCode(block, 'row', javascript.Order.ATOMIC);
    const col = generator.valueToCode(block, 'col', javascript.Order.ATOMIC);
    const x = generator.valueToCode(block, 'x', javascript.Order.ATOMIC);
    const y = generator.valueToCode(block, 'y', javascript.Order.ATOMIC);
    let p_marker = generator.valueToCode(block, 'p_marker', javascript.Order.ATOMIC);
    p_marker = (p_marker == '') ? null : "'" + p_marker + "'"; 
    const p_size = generator.valueToCode(block, 'p_size', javascript.Order.ATOMIC);
    let c_marker = generator.valueToCode(block, 'c_marker', javascript.Order.ATOMIC);
    c_marker = (c_marker == '') ? null : "'" + c_marker + "'"; 
    const c_color = generator.valueToCode(block, 'c_color', javascript.Order.ATOMIC);
    const c_size = generator.valueToCode(block, 'c_size', javascript.Order.ATOMIC);
    var code = 'await $_' + modName + '.plot(' + row + ', ' + col + ', ' + x + ', ' + y + ', '
             + p_marker + ', ' + p_size + ', ' + c_marker + ', ' + c_color + ', ' + c_size + ');\n';
    return code;
  };

  javascript.javascriptGenerator.forBlock['sl_kmeans_label'] = function(block, generator) {
    setRuntimeName()
    const range = generator.valueToCode(block, 'range', javascript.Order.ATOMIC);
    const code = 'await $_' + modName + '.label(' + range + ');\n';
    return code;
  };

  javascript.javascriptGenerator.forBlock['sl_kmeans_center'] = function(block, generator) {
    setRuntimeName()
    const range = generator.valueToCode(block, 'range', javascript.Order.ATOMIC);
    const code = 'await $_' + modName + '.center(' + range + ');\n';
    return code;
  };
}
