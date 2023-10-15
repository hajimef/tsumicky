const modName = 'basic';

function setRuntimeName() {
    Blockly.runTimeJS['basic'] = { 'modName': modName, 'file': 'basic' };
}

function createVarList(generator) {
    let code = 'var ';
    let keys = [];
    for (let key in Blockly.runTimeJS) {
        keys.push('$_' + Blockly.runTimeJS[key].modName);
    }
    code += keys.join(', ');
    code += ';\n';
    return code;
}

function createRuntimeList(generator) {
    var code = '';
    for (let key in Blockly.runTimeJS) {
        let rt = Blockly.runTimeJS[key];
        code += generator.INDENT + '$_' + rt.modName + ' = await import(\'/runtime/' + rt.file + '.js\');\n'
        code += generator.INDENT + '$_' + rt.modName + '.setup();\n';
    }
    return code;
}

function createDisposeList(generator) {
  var code = '';
  for (let key in Blockly.runTimeJS) {
    let rt = Blockly.runTimeJS[key];
    code += generator.INDENT + '$_' + rt.modName + '.dispose();\n';
  }
  code += generator.INDENT + 'Blockly.__wsobjs.forEach(function(ws) {\n';
  code += generator.INDENT + generator.INDENT + 'ws.send(\'{"g":"close","c":"close","p":{"p":0}}\');\n';
  code += generator.INDENT + generator.INDENT + 'ws.close();\n';
  code += generator.INDENT + '});\n';
  code += generator.INDENT + 'Blockly.__wsobjs = [];\n';
  code += generator.INDENT + 'Blockly.stopCode();\n';
  return code;
}

export function addJS() {
    javascript.javascriptGenerator.forBlock['basic_main'] = function(block, generator) {
      setRuntimeName();
      let statements_setup = generator.statementToCode(block, 'setup');
      let statements_loop = generator.statementToCode(block, 'loop');
      let statements_end = generator.statementToCode(block, 'end');
      if (statements_loop.trim() == '') {
          statements_loop = 'await $_basic.sleep(1000);\n'
      }
      // TODO: Assemble javascript into code variable.
      let code = createVarList(generator);
      code += 'async function setup() {\n' + statements_setup + '}\n';
      code += 'async function loop() {\n' + statements_loop + '}\n';
      code += 'async function end() {\n' + statements_end + '}\n';
      code += '(async() => {\n';
      code += createRuntimeList(generator);
      code += generator.INDENT + 'Blockly.__wsobjs = [];\n';
      code += generator.INDENT + 'try {\n';
      code += generator.INDENT + generator.INDENT + 'await setup();\n';
      code += generator.INDENT + generator.INDENT + 'while(true) {\n';
      code += generator.INDENT + generator.INDENT + generator.INDENT + 'await loop();\n';
      code += generator.INDENT + generator.INDENT + '}\n';
      code += generator.INDENT + '}\n';
      code += generator.INDENT + 'catch(e) {\n';
      code += generator.INDENT + generator.INDENT + 'let err = e.toString();\n'
      code += generator.INDENT + generator.INDENT + 'if (err == "Error: abortTsumicky") {\n';
      code += generator.INDENT + generator.INDENT + generator.INDENT + 'console.log("Aborted on stop button");\n';
      code += generator.INDENT + generator.INDENT + '}\n';
      code += generator.INDENT + generator.INDENT + 'else if (err != "Error: endTsumicky") {\n';
      code += generator.INDENT + generator.INDENT + generator.INDENT + 'alert(Blockly.convertMsg("TSUMICKY_ERROR") + "\\n" + e);\n';
      code += generator.INDENT + generator.INDENT + '}\n';
      code += generator.INDENT + '}\n';
      code += generator.INDENT + 'Blockly.isStop = false;\n';
      code += generator.INDENT + 'try {\n';
      code += generator.INDENT + generator.INDENT + 'await end();\n';
      code += generator.INDENT + '}\n';
      code += generator.INDENT + 'catch(e) {\n';
      code += generator.INDENT + generator.INDENT + 'let err = e.toString();\n'
      code += generator.INDENT + generator.INDENT + 'if (err == "Error: errorTsumicky") {\n';
      code += generator.INDENT + generator.INDENT + generator.INDENT + 'alert(Blockly.convertMsg("TSUMICKY_ERROR") + "\\n" + e);\n';
      code += generator.INDENT + generator.INDENT + '}\n';
      code += generator.INDENT + '}\n';
      code += createDisposeList(generator);
      code += '})()\n';
    //  var code = 'async function setup() {\n' + statements_setup + '\n}\nasync function loop() {\n' + statements_loop + '\n}\n(async() => {\n    await setup();\n    for (var i = 0; i < 10; i++) { await loop();\n} })()\n';
      return code;
    };
    
    javascript.javascriptGenerator.forBlock['basic_normal_main'] = function(block, generator) {
      setRuntimeName();
      let statements_code = generator.statementToCode(block, 'code');
      let code = createVarList(generator);
      code += 'async function maincode() {\n' + statements_code + '}\n';
      code += '(async() => {\n';
      code += createRuntimeList(generator);
      code += generator.INDENT + 'Blockly.__wsobjs = [];\n';
      code += generator.INDENT + 'try {\n';
      code += generator.INDENT + generator.INDENT + 'await maincode();\n';
      code += generator.INDENT + '}\n';
      code += generator.INDENT + 'catch(e) {\n';
      code += generator.INDENT + generator.INDENT + 'let err = e.toString();\n'
      code += generator.INDENT + generator.INDENT + 'if (err == "Error: abortTsumicky") {\n';
      code += generator.INDENT + generator.INDENT + generator.INDENT + 'console.log("Aborted on stop button");\n';
      code += generator.INDENT + generator.INDENT + '}\n';
      code += generator.INDENT + generator.INDENT + 'else if (err != "Error: endTsumicky") {\n';
      code += generator.INDENT + generator.INDENT + generator.INDENT + 'alert(Blockly.convertMsg("TSUMICKY_ERROR") + "\\n" + e);\n';
      code += generator.INDENT + generator.INDENT + '}\n';
      code += generator.INDENT + '}\n';
      code += generator.INDENT + 'Blockly.stopCode();\n';
      code += createDisposeList(generator);
      code += '})()\n';
      return code;
    };

    javascript.javascriptGenerator.forBlock['basic_console_log'] = function(block, generator) {
      setRuntimeName();
      var value_text = generator.valueToCode(block, 'text', javascript.Order.ATOMIC);
      // TODO: Assemble javascript into code variable.
      var code = '$_' + modName + '.console_log(' + value_text + ');\n';
      return code;
    };
    
    
    javascript.javascriptGenerator.forBlock['basic_sleep'] = function(block, generator) {
      setRuntimeName();
      var value_ms = generator.valueToCode(block, 'ms', javascript.Order.ATOMIC);
      // TODO: Assemble javascript into code variable.
      var code = 'await $_' + modName + '.sleep(' + value_ms + ');\n';
      return code;
    };

    javascript.javascriptGenerator.forBlock['basic_stop'] = function(block, generator) {
      var code = 'Blockly.endCode();\n';
      return code;
    };
};
