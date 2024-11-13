import * as utils from '/lib/utils.js';

const modName = 'slSVR';

function setRuntimeName() {
    Blockly.runTimeJS['slSVR'] = { 'modName': modName, 'file': 'scikit_learn/svr' };
}

export function addJS() {
  javascript.javascriptGenerator.forBlock['sl_linear_svr_init'] = function(block, generator) {
    setRuntimeName()
    const c = generator.valueToCode(block, 'c', javascript.Order.ATOMIC);
    const epsilon = generator.valueToCode(block, 'epsilon', javascript.Order.ATOMIC);
    let code = 'await $_' + modName + '.linear_svr_init(' + c + ', ' + epsilon + ');\n';
    return code;
  };

  javascript.javascriptGenerator.forBlock['sl_svr_fit'] = function(block, generator) {
    setRuntimeName()
    var code = 'await $_' + modName + '.fit();\n';
    return code;
  };

  javascript.javascriptGenerator.forBlock['sl_svr_coef'] = function(block, generator) {
    setRuntimeName()
    const code = 'await $_' + modName + '.coef()';
    return [code, javascript.Order.NONE];
  };

  javascript.javascriptGenerator.forBlock['sl_svr_intercept'] = function(block, generator) {
    setRuntimeName()
    const code = 'await $_' + modName + '.intercept()';
    return [code, javascript.Order.NONE];
  };

  javascript.javascriptGenerator.forBlock['sl_svr_support_vectors'] = function(block, generator) {
    setRuntimeName()
    const code = 'await $_' + modName + '.support_vectors()';
    return [code, javascript.Order.NONE];
  };

  javascript.javascriptGenerator.forBlock['sl_svr_support'] = function(block, generator) {
    setRuntimeName()
    const code = 'await $_' + modName + '.support()';
    return [code, javascript.Order.NONE];
  };
}
