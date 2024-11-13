import * as utils from '/lib/utils.js';

const modName = 'slLogR';

function setRuntimeName() {
    Blockly.runTimeJS['slLogR'] = { 'modName': modName, 'file': 'scikit_learn/logistic_regression' };
}

export function addJS() {
  javascript.javascriptGenerator.forBlock['sl_logr_init'] = function(block, generator) {
    setRuntimeName()
    const max_iter = generator.valueToCode(block, 'max_iter', javascript.Order.ATOMIC);
    const multi_class = block.getFieldValue('multi_class');
    const solver = block.getFieldValue('solver');
    const penalty = block.getFieldValue('penalty');
    const c = generator.valueToCode(block, 'c', javascript.Order.ATOMIC);
    const l1_ratio = generator.valueToCode(block, 'l1_ratio', javascript.Order.ATOMIC);
    const random_state = generator.valueToCode(block, 'random_state', javascript.Order.ATOMIC);
    const code = 'await $_' + modName + '.init(' + max_iter + ', \'' + multi_class + '\', \'' + solver + '\', \'' + penalty + '\', ' + c + ', ' + l1_ratio + ', ' + random_state + ');\n';
    return code;
  }

  javascript.javascriptGenerator.forBlock['sl_logr_fit'] = function(block, generator) {
    setRuntimeName()
    var code = 'await $_' + modName + '.fit();\n';
    return code;
  };

  javascript.javascriptGenerator.forBlock['sl_logr_plot'] = function(block, generator) {
    setRuntimeName()
    const type = block.getFieldValue('type');
    const row = generator.valueToCode(block, 'row', javascript.Order.ATOMIC);
    const col = generator.valueToCode(block, 'col', javascript.Order.ATOMIC);
    var code = 'await $_' + modName + '.plot(' + type + ', ' + row + ', ' + col + ');\n';
    return code;
  };

  javascript.javascriptGenerator.forBlock['sl_logr_decision_function'] = function(block, generator) {
    setRuntimeName()
    const type = block.getFieldValue('type');
    const range = generator.valueToCode(block, 'range', javascript.Order.ATOMIC);
    const code = 'await $_' + modName + '.decision_function(' + type + ', ' + range + ');\n';
    return code;
  };

  javascript.javascriptGenerator.forBlock['sl_logr_predict_proba'] = function(block, generator) {
    setRuntimeName()
    const type = block.getFieldValue('type');
    const range = generator.valueToCode(block, 'range', javascript.Order.ATOMIC);
    const code = 'await $_' + modName + '.predict_proba(' + type + ', ' + range + ');\n';
    return code;
  };
}
