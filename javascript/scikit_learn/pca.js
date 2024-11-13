import * as utils from '/lib/utils.js';

const modName = 'slPCA';

function setRuntimeName() {
    Blockly.runTimeJS['slPCA'] = { 'modName': modName, 'file': 'scikit_learn/pca' };
}

export function addJS() {
  javascript.javascriptGenerator.forBlock['sl_pca_init'] = function(block, generator) {
    setRuntimeName()
    const n_components = generator.valueToCode(block, 'n_components', javascript.Order.ATOMIC);
    let code = 'await $_' + modName + '.init(' + n_components + ');\n';
    return code;
  };

  javascript.javascriptGenerator.forBlock['sl_pca_transform'] = function(block, generator) {
    setRuntimeName()
    var code = 'await $_' + modName + '.transform();\n';
    return code;
  };
  
  javascript.javascriptGenerator.forBlock['sl_pca_rdim'] = function(block, generator) {
    setRuntimeName()
    const code = 'await $_' + modName + '.rdim()';
    return [code, javascript.Order.NONE];
  };

  javascript.javascriptGenerator.forBlock['sl_pca_ev'] = function(block, generator) {
    setRuntimeName()
    var range = generator.valueToCode(block, 'range', javascript.Order.ATOMIC);
    const code = 'await $_' + modName + '.ev(' + range + ');\n';
    return code;
  };

  javascript.javascriptGenerator.forBlock['sl_pca_evr'] = function(block, generator) {
    setRuntimeName()
    var range = generator.valueToCode(block, 'range', javascript.Order.ATOMIC);
    const code = 'await $_' + modName + '.evr(' + range + ');\n';
    return code;
  };

  javascript.javascriptGenerator.forBlock['sl_pca_components'] = function(block, generator) {
    setRuntimeName()
    var range = generator.valueToCode(block, 'range', javascript.Order.ATOMIC);
    const code = 'await $_' + modName + '.components(' + range + ');\n';
    return code;
  };
}
