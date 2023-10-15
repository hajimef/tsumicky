javascript.javascriptGenerator.forBlock['procedures_defreturn'] = function(block, generator) {
  // Define a procedure with a return value.
  const funcName = generator.nameDB_.getName(
      block.getFieldValue('NAME'), Blockly.Names.NameType.PROCEDURE);
  let xfix1 = '';
  if (generator.STATEMENT_PREFIX) {
    xfix1 += generator.injectId(
        generator.STATEMENT_PREFIX, block);
  }
  if (generator.STATEMENT_SUFFIX) {
    xfix1 += generator.injectId(
        generator.STATEMENT_SUFFIX, block);
  }
  if (xfix1) {
    xfix1 = generator.prefixLines(xfix1, generator.INDENT);
  }
  let loopTrap = '';
  if (generator.INFINITE_LOOP_TRAP) {
    loopTrap = generator.prefixLines(
        generator.injectId(
          generator.INFINITE_LOOP_TRAP, block),
        generator.INDENT);
  }
  const branch = generator.statementToCode(block, 'STACK');
  let returnValue =
      generator.valueToCode(block, 'RETURN', javascript.Order.NONE) || '';
  let xfix2 = '';
  if (branch && returnValue) {
    // After executing the function body, revisit this block for the return.
    xfix2 = xfix1;
  }
  if (returnValue) {
    returnValue = generator.INDENT + 'return ' + returnValue + ';\n';
  }
  const args = [];
  const variables = block.getVars();
  for (let i = 0; i < variables.length; i++) {
    args[i] =
        generator.nameDB_.getName(variables[i], Blockly.Names.NameType.VARIABLE);
  }
  let code = 'function ' + funcName + '(' + args.join(', ') + ') {\n' + xfix1 +
      loopTrap + branch + xfix2 + returnValue + '}';
  code = generator.scrub_(block, code);
  code = code.replace('function', 'async function');
  // Add % so as not to collide with helper functions in definitions list.
  generator.definitions_['%' + funcName] = code;
  return null;
};

// Defining a procedure without a return value uses the same generator as
// a procedure with a return value.
javascript.javascriptGenerator.forBlock['procedures_defnoreturn'] = javascript.javascriptGenerator.forBlock['procedures_defreturn'];

javascript.javascriptGenerator.forBlock['procedures_callreturn'] = function(block, generator) {
  // Call a procedure with a return value.
  const funcName = generator.nameDB_.getName(
      block.getFieldValue('NAME'), Blockly.Names.NameType.PROCEDURE);
  const args = [];
  const variables = block.getVars();
  for (let i = 0; i < variables.length; i++) {
    args[i] = generator.valueToCode(block, 'ARG' + i, javascript.Order.NONE) ||
        'null';
  }
  const code = 'await ' + funcName + '(' + args.join(', ') + ')';
  return [code, javascript.Order.FUNCTION_CALL];
};

javascript.javascriptGenerator.forBlock['procedures_callnoreturn'] = function(block, generator) {
  // Call a procedure with no return value.
  // Generated code is for a function call as a statement is the same as a
  // function call as a value, with the addition of line ending.
  const tuple = generator.forBlock['procedures_callreturn'](block, generator);
  return tuple[0] + ';\n';
};
