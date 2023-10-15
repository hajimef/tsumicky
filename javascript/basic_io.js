import * as utils from '/lib/utils.js';

const modName = 'gpio';

function setRuntimeName() {
    Blockly.runTimeJS['basic_io'] = { 'modName': modName, 'file': 'basic_io' };
}

export function addJS() {
  javascript.javascriptGenerator.forBlock['basic_io_connect'] = function(block, generator) {
    setRuntimeName()
    var host = generator.valueToCode(block, 'host', javascript.Order.ATOMIC);
    var port = utils.getNumOrVar(generator.valueToCode(block, 'port', javascript.Order.ATOMIC));
    var prot = block.getFieldValue('prot');
    var var_name = generator.nameDB_.getName(block.getFieldValue('var_name'), Blockly.Names.NameType.VARIABLE);
    var code = var_name + ' = await $_' + modName + '.connect(' + host + ', ' + port + ', \'' + prot + '\');\n';
    return code;
  };

  javascript.javascriptGenerator.forBlock['basic_io_model_name'] = function(block, generator) {
    setRuntimeName()
    var ws_name = generator.nameDB_.getName(block.getFieldValue('ws_var'), Blockly.Names.NameType.VARIABLE);
    var code = 'await $_' + modName + '.getModelName(' + ws_name + ')';
    return [code, Blockly.JavaScript.ORDER_NONE];
  };
  
  javascript.javascriptGenerator.forBlock['basic_io_assign_pin'] = function(block, generator) {
    setRuntimeName()
    var ws_name = generator.nameDB_.getName(block.getFieldValue('ws_var'), Blockly.Names.NameType.VARIABLE);
    var pin_no = generator.valueToCode(block, 'pin_no', javascript.Order.ATOMIC);
    var pin_name = generator.nameDB_.getName(block.getFieldValue('pin_var'), Blockly.Names.NameType.VARIABLE);
    var code = pin_name + ' = await $_' + modName + '.assignPin(' + ws_name + ', ' + pin_no + ');\n';
    return code;
  };
  
  javascript.javascriptGenerator.forBlock['basic_io_pinmode'] = function(block, generator) {
    setRuntimeName()
    var pin_var = generator.nameDB_.getName(block.getFieldValue('pin_var'), Blockly.Names.NameType.VARIABLE);
    var mode = block.getFieldValue('mode');
    return 'await $_' + modName + '.pinMode(' + pin_var + ', ' + mode + ');\n';
  };
  
  javascript.javascriptGenerator.forBlock['basic_io_digital_write'] = function(block, generator) {
    setRuntimeName()
    var pin_var = generator.nameDB_.getName(block.getFieldValue('pin'), Blockly.Names.NameType.VARIABLE);
    var hl = Number(block.getFieldValue('hl'));
    return 'await $_' + modName + '.digitalWrite(' + pin_var + ', ' + hl + ');\n';
  };
  
  javascript.javascriptGenerator.forBlock['basic_io_digital_read'] = function(block, generator) {
    setRuntimeName()
    var pin_var = generator.nameDB_.getName(block.getFieldValue('pin'), Blockly.Names.NameType.VARIABLE);
    return [ 'await $_' + modName + '.digitalRead(' + pin_var + ')', Blockly.JavaScript.ORDER_NONE ];
  };
  
  javascript.javascriptGenerator.forBlock['basic_io_analog_read'] = function(block, generator) {
    setRuntimeName()
    var pin_var = generator.nameDB_.getName(block.getFieldValue('pin'), Blockly.Names.NameType.VARIABLE);
    return [ 'await $_' + modName + '.analogRead(' + pin_var + ')', Blockly.JavaScript.ORDER_NONE ]};
  
  javascript.javascriptGenerator.forBlock['basic_io_hl'] = function(block, generator) {
    setRuntimeName()
    var hl_value = Number(block.getFieldValue('hl_value'));
    var code = hl_value;
    return [ code, Blockly.JavaScript.ORDER_NONE ];
  };

  javascript.javascriptGenerator.forBlock['basic_io_map'] = function(block, generator) {
    setRuntimeName()
    var input = generator.valueToCode(block, 'input', javascript.Order.ATOMIC);
    var input_min = generator.valueToCode(block, 'input_min', javascript.Order.ATOMIC);
    var input_max = generator.valueToCode(block, 'input_max', javascript.Order.ATOMIC);
    var output_min = generator.valueToCode(block, 'output_min', javascript.Order.ATOMIC);
    var output_max = generator.valueToCode(block, 'output_max', javascript.Order.ATOMIC);
    var code = input + ' * (' + output_max + ' - ' + output_min + ') / (' + input_max + ' - ' + input_min + ')';
    return [code, Blockly.JavaScript.ORDER_NONE];
  };
}
