const modName = 'xl';

function setRuntimeName() {
  Blockly.runTimeJS['xlbase'] = { 'modName': modName, 'file': 'excel/xlBase' };
}

export function addJS() {
  javascript.javascriptGenerator.forBlock['excel_sheet_add'] = function(block, generator) {
    setRuntimeName();
    var workbook = generator.valueToCode(block, 'workbook', javascript.Order.FUNCTION_CALL);
    var sheetname = generator.valueToCode(block, 'sheetname', javascript.Order.FUNCTION_CALL);
    sheetname = sheetname == "''" ? '' : sheetname;
    var code = 'await ' + workbook + '.Sheets().add(' + sheetname + ');\n';
    return code;
  };

  javascript.javascriptGenerator.forBlock['excel_active_sheet'] = function(block, generator) {
    setRuntimeName();
    var workbook = generator.valueToCode(block, 'workbook', javascript.Order.FUNCTION_CALL);
    var code = workbook + '.ActiveSheet()';
    return [code, Blockly.JavaScript.ORDER_MEMBER];
  };
      
  javascript.javascriptGenerator.forBlock['excel_sheet_by_index'] = function(block, generator) {
    setRuntimeName();
    var workbook = generator.valueToCode(block, 'workbook', javascript.Order.FUNCTION_CALL);
    var index = generator.valueToCode(block, 'index', javascript.Order.FUNCTION_CALL);
    var code = workbook + '.Sheets(' + index + ')';
    return [code, Blockly.JavaScript.ORDER_MEMBER];
  };

  javascript.javascriptGenerator.forBlock['excel_sheet_by_name'] = function(block, generator) {
    setRuntimeName();
    var workbook = generator.valueToCode(block, 'workbook', javascript.Order.FUNCTION_CALL);
    var sheetname = generator.valueToCode(block, 'sheetname', javascript.Order.FUNCTION_CALL);
    var code = workbook + '.Sheets(' + sheetname + ')';
    return [code, Blockly.JavaScript.ORDER_MEMBER];
  };

  javascript.javascriptGenerator.forBlock['excel_set_sheet_do'] = function(block, generator) {
    setRuntimeName();
    var sheet = generator.valueToCode(block, 'sheet', javascript.Order.FUNCTION_CALL);
    var statements = generator.statementToCode(block, 'op');
    var code = '{\n';
    code += generator.INDENT + 'let $_xlCS = ' + sheet + ';\n';
    code += statements;
    code += '}\n';
    return code;
  };

  javascript.javascriptGenerator.forBlock['excel_set_sheet_loop'] = function(block, generator) {
    setRuntimeName();
    var workbook = generator.valueToCode(block, 'workbook', javascript.Order.FUNCTION_CALL);
    var statements = generator.statementToCode(block, 'op');
    var code = 'for (let $_xlCtr = 0; $_xlCtr < ' + workbook + '.sheetsByIndex.length; $_xlCtr++) {\n';
    code += generator.INDENT + 'let $_xlCS = ' + workbook + '.sheetsByIndex[$_xlCtr];\n'
    code += statements;
    code += '}\n';
    return code;
  };

  javascript.javascriptGenerator.forBlock['excel_current_sheet'] = function(block, generator) {
    setRuntimeName();
    var code = '$_xlCS';
    return [code, Blockly.JavaScript.ORDER_MEMBER];
  };

  javascript.javascriptGenerator.forBlock['excel_set_sheet_name'] = function(block, generator) {
    setRuntimeName();
    var sheet = generator.valueToCode(block, 'sheet', javascript.Order.FUNCTION_CALL);
    var name = generator.valueToCode(block, 'name', javascript.Order.ATOMIC);
    var code = 'await ' + sheet + '.setName(' + name + ');\n';
    return code;
  };

  javascript.javascriptGenerator.forBlock['excel_sheet_name'] = function(block, generator) {
    setRuntimeName();
    var sheet = generator.valueToCode(block, 'sheet', javascript.Order.FUNCTION_CALL);
    var code = sheet + '.Name';
    return [code, Blockly.JavaScript.ORDER_MEMBER];
  };

  javascript.javascriptGenerator.forBlock['excel_sheet_index'] = function(block, generator) {
    setRuntimeName();
    var sheet = generator.valueToCode(block, 'sheet', javascript.Order.FUNCTION_CALL);
    var code = sheet + '.Index';
    return [code, Blockly.JavaScript.ORDER_MEMBER];
  };

  javascript.javascriptGenerator.forBlock['excel_sheet_parent'] = function(block, generator) {
    setRuntimeName();
    var sheet = generator.valueToCode(block, 'sheet', javascript.Order.FUNCTION_CALL);
    var code = sheet + '.Parent';
    return [code, Blockly.JavaScript.ORDER_MEMBER];
  };

  javascript.javascriptGenerator.forBlock['excel_set_sheet_tab_color'] = function(block, generator) {
    setRuntimeName();
    var sheet = generator.valueToCode(block, 'sheet', javascript.Order.FUNCTION_CALL);
    var color = generator.valueToCode(block, 'color', javascript.Order.ATOMIC);
    var code = 'await ' + sheet + '.setTabColor($_' + modName + '.cssToRGB(' + color + '));\n';
    return code;
  };
  
  javascript.javascriptGenerator.forBlock['excel_reset_sheet_tab_color'] = function(block, generator) {
    setRuntimeName();
    var sheet = generator.valueToCode(block, 'sheet', javascript.Order.ATOMIC);
    var code = 'await ' + sheet + '.resetTabColor();\n';
    return code;
  };

  javascript.javascriptGenerator.forBlock['excel_sheets'] = function(block, generator) {
    setRuntimeName();
    var workbook = generator.valueToCode(block, 'workbook', javascript.Order.FUNCTION_CALL);
    var code = workbook + '.sheetsByIndex';
    return [code, Blockly.JavaScript.ORDER_MEMBER];
  };

  javascript.javascriptGenerator.forBlock['excel_sheets_count'] = function(block, generator) {
    setRuntimeName();
    var workbook = generator.valueToCode(block, 'workbook', javascript.Order.FUNCTION_CALL);
    var code = workbook + '.Sheets().Count';
    return [code, Blockly.JavaScript.ORDER_MEMBER];
  };
}
