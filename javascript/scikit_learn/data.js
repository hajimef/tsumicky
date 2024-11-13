import * as utils from '/lib/utils.js';

const modName = 'slData';
const X_COLUMN = 4;
const STD_X_COLUMN = 5;
const PREDICT_Y = 2;
const LTYPE_NUMBER = 0;
const LTYPE_LABEL = 1;

function setRuntimeName() {
    Blockly.runTimeJS['slData'] = { 'modName': modName, 'file': 'scikit_learn/data' };
}

export function addJS() {
  javascript.javascriptGenerator.forBlock['sl_data_load_dataset'] = function(block, generator) {
    setRuntimeName()
    var range = generator.valueToCode(block, 'range', javascript.Order.ATOMIC);
    var dataset = block.getFieldValue('dataset');
    var code = 'await $_' + modName + '.load_dataset(' + range + ', ' + dataset + ');\n';
    return code;
  };

  javascript.javascriptGenerator.forBlock['sl_data_load'] = function(block, generator) {
    setRuntimeName()
    var type = block.getFieldValue('type');
    var xy = block.getFieldValue('xy');
    var has_label = block.getFieldValue('has_label') == "TRUE" ? 1 : 0;
    var data = generator.valueToCode(block, 'data', javascript.Order.ATOMIC);
    var code = 'await $_' + modName + '.load(' + type + ', ' + xy + ', ' + data + ', ' + has_label + ');\n';
    return code;
  };

  javascript.javascriptGenerator.forBlock['sl_data_split'] = function(block, generator) {
    setRuntimeName()
    const train_size = block.getFieldValue('train_size');
    const test_size = block.getFieldValue('test_size');
    const random_state = generator.valueToCode(block, 'random_state', javascript.Order.ATOMIC);
    const code = 'await $_' + modName + '.split(' + train_size + ', ' + test_size + ', ' + random_state + ');\n';
    return code;
  };
 
  javascript.javascriptGenerator.forBlock['sl_data_backup'] = function(block, generator) {
    setRuntimeName()
    const code = 'await $_' + modName + '.backup();\n';
    return code;
  };
 
  javascript.javascriptGenerator.forBlock['sl_data_restore'] = function(block, generator) {
    setRuntimeName()
    const code = 'await $_' + modName + '.restore();\n';
    return code;
  };
 
  javascript.javascriptGenerator.forBlock['sl_data_slice'] = function(block, generator) {
    setRuntimeName();
    let elements = [];
    for (let i = 0; i < block.itemCount_; i++) {
      let scode = generator.valueToCode(block, 'ADD' + i, Blockly.JavaScript.ORDER_NONE);
      elements.push(scode);
    }  
    const code = 'await $_' + modName + '.slice([ ' + elements.join(', ') + ' ]);\n';
    return code;
  };

  javascript.javascriptGenerator.forBlock['sl_data_slice_number'] = function(block, generator) {
    setRuntimeName();
    const num = generator.valueToCode(block, 'num', javascript.Order.ATOMIC);
    const code = '{ "n": ' + (num - 1) + ' }';
    return [code, javascript.Order.NONE];
  };

  javascript.javascriptGenerator.forBlock['sl_data_slice_label'] = function(block, generator) {
    setRuntimeName();
    const label = generator.valueToCode(block, 'label', javascript.Order.ATOMIC);
    const code = '{ "l": ' + label + ' }';
    return [code, javascript.Order.NONE];
  };

  javascript.javascriptGenerator.forBlock['sl_data_loadx'] = function(block, generator) {
    setRuntimeName()
    var type = block.getFieldValue('type');
    var x = generator.valueToCode(block, 'x', javascript.Order.ATOMIC);
    var code = 'await $_' + modName + '.loadx(' + type + ', ' + x + ');\n';
    return code;
  };

  javascript.javascriptGenerator.forBlock['sl_data_loady'] = function(block, generator) {
    setRuntimeName()
    var type = block.getFieldValue('type');
    var y = generator.valueToCode(block, 'y', javascript.Order.ATOMIC);
    var code = 'await $_' + modName + '.loady(' + type + ', ' + y + ');\n';
    return code;
  };

  javascript.javascriptGenerator.forBlock['sl_data_standardize'] = function(block, generator) {
    setRuntimeName()
    var code = 'await $_' + modName + '.standardize();\n';
    return code;
  };

  javascript.javascriptGenerator.forBlock['sl_data_save'] = function(block, generator) {
    setRuntimeName()
    var range = generator.valueToCode(block, 'range', javascript.Order.ATOMIC);
    var data = generator.valueToCode(block, 'data', javascript.Order.ATOMIC);
    var type = block.getFieldValue('type');
    var code = 'await $_' + modName + '.save(' + range + ', ' + data + ', ' + type + ');\n';
    return code;
  };

  javascript.javascriptGenerator.forBlock['sl_save_predict'] = function(block, generator) {
    setRuntimeName()
    var range = generator.valueToCode(block, 'range', javascript.Order.ATOMIC);
    var type = block.getFieldValue('type');
    var code = 'await $_' + modName + '.save_predict(' + range + ', ' + type + ');\n';
    return code;
  };

  javascript.javascriptGenerator.forBlock['sl_data_x'] = function(block, generator) {
    setRuntimeName()
    var type = block.getFieldValue('type');
    const code = 'await $_' + modName + '.get_x(' + type + ')';
    return [code, javascript.Order.NONE];
  };

  javascript.javascriptGenerator.forBlock['sl_data_y'] = function(block, generator) {
    setRuntimeName()
    var type = block.getFieldValue('type');
    const code = 'await $_' + modName + '.get_y(' + type + ')';
    return [code, javascript.Order.NONE];
  };

  javascript.javascriptGenerator.forBlock['sl_data_mpl'] = function(block, generator) {
    setRuntimeName()
    var type = block.getFieldValue('type');
    var xy = block.getFieldValue('xy');
    var code = '{ "dt": "slData", "t": ' + type + ', "x": ' + xy;
    if (xy == X_COLUMN || xy == STD_X_COLUMN) {
      var ltype = block.getFieldValue('ltype');
      var label = generator.valueToCode(block, 'label', javascript.Order.ATOMIC);
      code += ', "lt": ' + ltype;
      if (ltype == LTYPE_NUMBER) {
        code += ', "co": ' + label;
      }
      else if (ltype == LTYPE_LABEL) {
        code += ', "lb": ' + label;
      }
    }
    else if (xy == PREDICT_Y) {
      var offset = generator.valueToCode(block, 'offset', javascript.Order.ATOMIC);
      code += ', "of": ' + offset;
    }
    code += ' }';
    return [code, javascript.Order.NONE];
  };

  javascript.javascriptGenerator.forBlock['sl_data_predict'] = function(block, generator) {
    setRuntimeName()
    var type = block.getFieldValue('type');
    const code = 'await $_' + modName + '.predict(' + type + ')';
    return [code, javascript.Order.NONE];
  };
}
