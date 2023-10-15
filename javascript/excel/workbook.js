const modName = 'xl';

function setRuntimeName() {
  Blockly.runTimeJS['xlbase'] = { 'modName': modName, 'file': 'excel/xlBase' };
}

export function addJS() {
  javascript.javascriptGenerator.forBlock['excel_active_workbook'] = function(block, generator) {
    setRuntimeName();
    var code = '$_' + modName + '.ActiveWorkbook()';
    return [code, Blockly.JavaScript.ORDER_MEMBER];
  };
      
  javascript.javascriptGenerator.forBlock['excel_workbook_by_name'] = function(block, generator) {
    setRuntimeName();
    var filename = generator.valueToCode(block, 'filename', javascript.Order.FUNCTION_CALL);
    var code = '$_' + modName + '.Workbooks(' + filename + ')';
    return [code, Blockly.JavaScript.ORDER_MEMBER];
  };

  javascript.javascriptGenerator.forBlock['excel_set_workbook_do'] = function(block, generator) {
    setRuntimeName();
    var workbook = generator.valueToCode(block, 'workbook', javascript.Order.FUNCTION_CALL);
    var statements = generator.statementToCode(block, 'op');
    var code = '{\n';
    code += generator.INDENT + 'let $_xlCW = ' + workbook + ';\n';
    code += statements;
    code += '}\n';
    return code;
  };

  javascript.javascriptGenerator.forBlock['excel_current_workbook'] = function(block, generator) {
    setRuntimeName();
    var code = '$_xlCW';
    return [code, Blockly.JavaScript.ORDER_MEMBER];
  };

  javascript.javascriptGenerator.forBlock['excel_workbook_save_as'] = function(block, generator) {
    setRuntimeName();
    var workbook = generator.valueToCode(block, 'workbook', javascript.Order.FUNCTION_CALL);
    var filename = generator.valueToCode(block, 'filename', javascript.Order.FUNCTION_CALL);
    var code = 'await ' + workbook + '.saveAs(' + filename + ');\n';
    return code;
  };
  
  javascript.javascriptGenerator.forBlock['excel_workbook_save'] = function(block, generator) {
    setRuntimeName();
    var workbook = generator.valueToCode(block, 'workbook', javascript.Order.FUNCTION_CALL);
    var code = 'await ' + workbook + '.save();\n';
    return code;
  };

  javascript.javascriptGenerator.forBlock['excel_workbooks'] = function(block, generator) {
    setRuntimeName();
    var code = '$_' + modName + '.Workbooks().workbooksByIndex';
    return [code, Blockly.JavaScript.ORDER_MEMBER];
  };
  
  javascript.javascriptGenerator.forBlock['excel_workbooks_count'] = function(block, generator) {
    setRuntimeName();
    var code = '$_' + modName + '.Workbooks().Count';
    return [code, Blockly.JavaScript.ORDER_MEMBER];
  };
  
  javascript.javascriptGenerator.forBlock['excel_workbook_name'] = function(block, generator) {
    setRuntimeName();
    var workbook = generator.valueToCode(block, 'workbook', javascript.Order.FUNCTION_CALL);
    var code = workbook + '.Name';
    return [code, Blockly.JavaScript.ORDER_MEMBER];
  };

  javascript.javascriptGenerator.forBlock['excel_workbook_fullname'] = function(block, generator) {
    setRuntimeName();
    var workbook = generator.valueToCode(block, 'workbook', javascript.Order.FUNCTION_CALL);
    var code = workbook + '.FullName';
    return [code, Blockly.JavaScript.ORDER_MEMBER];
  };

  javascript.javascriptGenerator.forBlock['excel_workbook_path'] = function(block, generator) {
    setRuntimeName();
    var workbook = generator.valueToCode(block, 'workbook', javascript.Order.FUNCTION_CALL);
    var code = workbook + '.Path';
    return [code, Blockly.JavaScript.ORDER_MEMBER];
  };
}
