const modName = 'xlBasic';
const modBaseName = 'xl';

function setRuntimeName() {
  Blockly.runTimeJS['xlbasic'] = { 'modName': modName, 'file': 'excel/basic' };
  Blockly.runTimeJS['xlbase'] = { 'modName': modBaseName, 'file': 'excel/xlBase' };
}

export function addJS() {
  javascript.javascriptGenerator.forBlock['excel_launch'] = function(block, generator) {
    setRuntimeName()
    var host = generator.valueToCode(block, 'host', javascript.Order.ATOMIC);
    var port = generator.valueToCode(block, 'port', javascript.Order.ATOMIC);
    var visible = block.getFieldValue('visible');
    var code = 'await $_' + modName + '.runExcel(' + host + ', ' + port + ', ' + visible + ');\n';
    return code;
  };

  javascript.javascriptGenerator.forBlock['excel_quit'] = function(block, generator) {
    setRuntimeName()
    var code = 'await $_' + modName + '.quitExcel();\n';
    return code;
  };

  javascript.javascriptGenerator.forBlock['excel_new_file'] = function(block, generator) {
    setRuntimeName()
    var code = 'await $_' + modBaseName + '.Workbooks().add()\n';
    return code;
  };
  
  javascript.javascriptGenerator.forBlock['excel_find_file'] = function(block, generator) {
    setRuntimeName()
    var code = 'await $_' + modName + '.findFile()\n';
    return [code, Blockly.JavaScript.ORDER_NONE];
  };
  
  javascript.javascriptGenerator.forBlock['excel_open_file'] = function(block, generator) {
    setRuntimeName()
    var filename = generator.valueToCode(block, 'filename', javascript.Order.ATOMIC);
    var code = 'await $_' + modBaseName + '.Workbooks().open(' + filename + ');\n';
    return code;
  };
  
  javascript.javascriptGenerator.forBlock['excel_save_as_file'] = function(block, generator) {
    setRuntimeName()
    var filename = generator.valueToCode(block, 'filename', javascript.Order.ATOMIC);
    var code = 'await $_' + modBaseName + '.ActiveWorkbook().saveAs(' + filename + ');\n';
    return code;
  };
  
  javascript.javascriptGenerator.forBlock['excel_save_file'] = function(block, generator) {
    setRuntimeName()
    var code = 'await $_' + modBaseName + '.ActiveWorkbook().save();\n';
    return code;
  };

  javascript.javascriptGenerator.forBlock['excel_screen_updating'] = function(block, generator) {
    setRuntimeName()
    var flag = block.getFieldValue('flag');
    var code = 'await $_' + modName + '.screenUpdating(' + flag + ');\n';
    return code;
  };
  
  javascript.javascriptGenerator.forBlock['excel_os_special_folder_path'] = function(block, generator) {
    setRuntimeName()
    var folder = block.getFieldValue('folder');
    var code = 'await $_' + modName + '.specialFolderPath(' + folder + ')';
    return [code, Blockly.JavaScript.ORDER_NONE];
  };
  
  javascript.javascriptGenerator.forBlock['excel_os_join_path'] = function(block, generator) {
    let elements = [];
    for (let i = 0; i < block.itemCount_; i++) {
      let scode = generator.valueToCode(block, 'ADD' + i, Blockly.JavaScript.ORDER_NONE);
      if (scode) {
        elements.push(scode);
      }
    }
    var code = 'await $_' + modName + '.osJoinPath([' + elements.join(', ') + '])';
    return [code, Blockly.JavaScript.ORDER_NONE];
  };
  
  javascript.javascriptGenerator.forBlock['excel_basic_cells_set'] = function(block, generator) {
    setRuntimeName()
    var row = generator.valueToCode(block, 'row', javascript.Order.ATOMIC);
    var col = generator.valueToCode(block, 'col', javascript.Order.ATOMIC);
    var value = generator.valueToCode(block, 'value', javascript.Order.ATOMIC);
    var code = 'await $_' + modBaseName + '.Cells(' + row + ', ' + col + ').setValue(' + value + ');\n';
    return code;
  };

  javascript.javascriptGenerator.forBlock['excel_basic_cells_get'] = function(block, generator) {
    setRuntimeName()
    var row = generator.valueToCode(block, 'row', javascript.Order.ATOMIC);
    var col = generator.valueToCode(block, 'col', javascript.Order.ATOMIC);
    var code = 'await $_' + modBaseName + '.Cells(' + row + ', ' + col + ').getValue()';
    return [code, Blockly.JavaScript.ORDER_NONE];
  };

  javascript.javascriptGenerator.forBlock['excel_basic_cells_formula'] = function(block, generator) {
    setRuntimeName()
    var row = generator.valueToCode(block, 'row', javascript.Order.ATOMIC);
    var col = generator.valueToCode(block, 'col', javascript.Order.ATOMIC);
    var formula = generator.valueToCode(block, 'formula', javascript.Order.ATOMIC);
    var code = 'await $_' + modBaseName + '.Cells(' + row + ', ' + col + ').setFormula(' + formula + ');\n';
    return code;
  };

  javascript.javascriptGenerator.forBlock['excel_run_book_macro'] = function(block, generator) {
    setRuntimeName()
    var macro = block.getFieldValue('macro');
    var params = generator.valueToCode(block, 'params', javascript.Order.ATOMIC);
    var code = 'await $_' + modName + '.runBookMacro(\'' + macro + '\', ' + params + ');\n';
    return code;
  };
}
