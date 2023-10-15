const modName = 'xlMacro';

function setRuntimeName() {
  Blockly.runTimeJS['xlmacro'] = { 'modName': modName, 'file': 'excel/macro' };
}

function getParams(block, generator) {
  let elements = [];
  for (let i = 0; i < block.itemCount_; i++) {
    let scode = generator.valueToCode(block, 'ADD' + i, Blockly.JavaScript.ORDER_NONE);
    elements.push(scode);
  }
  return '[ ' + elements.join(', ') + ' ]';
}


export function addJS() {
  javascript.javascriptGenerator.forBlock['excel_macro_statement_addin'] = function(block, generator) {
    setRuntimeName();
    var macro = generator.valueToCode(block, 'macro', javascript.Order.ATOMIC);
    var params = getParams(block, generator);
    var code = 'await $_' + modName + '.runAddinMacro(' + macro + ', ' + params + ');\n';
    return code;
  };

  javascript.javascriptGenerator.forBlock['excel_macro_statement_book'] = function(block, generator) {
    setRuntimeName();
    var macro = generator.valueToCode(block, 'macro', javascript.Order.ATOMIC);
    var workbook = generator.valueToCode(block, 'workbook', javascript.Order.FUNCTION_CALL);
    var params = getParams(block, generator);
    var code = 'await $_' + modName + '.runBookMacro(' + macro + ', ' + workbook + ', ' + params + ');\n';
    return code;
  };

  javascript.javascriptGenerator.forBlock['excel_macro_value_addin'] = function(block, generator) {
    setRuntimeName();
    var macro = generator.valueToCode(block, 'macro', javascript.Order.ATOMIC);
    var params = getParams(block, generator);
    var code = 'await $_' + modName + '.runAddinMacro(' + macro + ', ' + params + ')';
    return [code, Blockly.JavaScript.ORDER_NONE];
  };

  javascript.javascriptGenerator.forBlock['excel_macro_value_book'] = function(block, generator) {
    setRuntimeName();
    var macro = generator.valueToCode(block, 'macro', javascript.Order.ATOMIC);
    var workbook = generator.valueToCode(block, 'workbook', javascript.Order.FUNCTION_CALL);
    var params = getParams(block, generator);
    var code = 'await $_' + modName + '.runBookMacro(' + macro + ', ' + workbook + ', ' + params + ')';
    return [code, Blockly.JavaScript.ORDER_NONE];
  };
}
