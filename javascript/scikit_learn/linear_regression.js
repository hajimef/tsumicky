import * as utils from '/lib/utils.js';

const modName = 'slLR';

function setRuntimeName() {
    Blockly.runTimeJS['slLR'] = { 'modName': modName, 'file': 'scikit_learn/linear_regression' };
}

export function addJS() {
  javascript.javascriptGenerator.forBlock['sl_lr_init'] = function(block, generator) {
    setRuntimeName()
    let code = 'await $_' + modName + '.init();\n';
    return code;
  };

  javascript.javascriptGenerator.forBlock['sl_lr_fit'] = function(block, generator) {
    setRuntimeName()
    var code = 'await $_' + modName + '.fit();\n';
    return code;
  };

  javascript.javascriptGenerator.forBlock['sl_lr_coef'] = function(block, generator) {
    setRuntimeName()
    const code = 'await $_' + modName + '.coef()';
    return [code, javascript.Order.NONE];
  };

  javascript.javascriptGenerator.forBlock['sl_lr_intercept'] = function(block, generator) {
    setRuntimeName()
    const code = 'await $_' + modName + '.intercept()';
    return [code, javascript.Order.NONE];
  };
}
