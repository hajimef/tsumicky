const modName = 'xl';

function setRuntimeName() {
    Blockly.runTimeJS['xlbase'] = { 'modName': modName, 'file': 'excel/xlBase' };
}

const border_position = {
    'around': 'xlAround',
    'top': 'xlEdgeTop',
    'bottom': 'xlEdgeBottom',
    'left': 'xlEdgeLeft',
    'right': 'xlEdgeRight',
    'diagonal_up': 'xlDiagonalUp',
    'diagonal_down': 'xlDiagonalDown',
    'inner_horizontal': 'xlInsideHorizontal',
    'inner_vertical': 'xlInsideVertical'
};

const border_type = {
    'none': { weight: 'xlThin', style: 'xlLineStyleNone' },
    'hairline': { weight: 'xlHairline', style: 'xlContinuous' },
    'thin_solid': { weight: 'xlThin', style: 'xlContinuous' },
    'thin_dot': { weight: 'xlThin', style: 'xlDot' },
    'thin_dash': { weight: 'xlThin', style: 'xlDash' },
    'thin_dash_dot': { weight: 'xlThin', style: 'xlDashDot' },
    'thin_dash_dot_dot': { weight: 'xlThin', style: 'xlDashDotDot' },
    'medium_solid': { weight: 'xlMedium', style: 'xlContinuous' },
    'medium_slant_dash_dot': { weight: 'xlMedium', style: 'xlSlantDashDot' },
    'medium_dash': { weight: 'xlMedium', style: 'xlDash' },
    'medium_dash_dot': { weight: 'xlMedium', style: 'xlDashDot' },
    'medium_dash_dot_dot': { weight: 'xlMedium', style: 'xlDashDotDot' },
    'thick_solid': { weight: 'xlThick', style: 'xlContinuous' },
    'double': { weight: 'xlThick', style: 'xlDouble' }
};

export function addJS() {
    javascript.javascriptGenerator.forBlock['excel_cell_rc'] = function(block, generator) {
        setRuntimeName();
        var sheet = generator.valueToCode(block, 'sheet', javascript.Order.FUNCTION_CALL);
        var row = generator.valueToCode(block, 'row', javascript.Order.ATOMIC);
        var col = generator.valueToCode(block, 'col', javascript.Order.ATOMIC);
        var code = sheet + '.Cells(' + row + ', ' + col + ')';
        return [code, Blockly.JavaScript.ORDER_MEMBER];
    };

    javascript.javascriptGenerator.forBlock['excel_range'] = function(block, generator) {
        setRuntimeName();
        var sheet = generator.valueToCode(block, 'sheet', javascript.Order.FUNCTION_CALL);
        var range = generator.valueToCode(block, 'range', javascript.Order.ATOMIC);
        var code = sheet + '.Range(' + range + ')';
        return [code, Blockly.JavaScript.ORDER_MEMBER];
    };

    javascript.javascriptGenerator.forBlock['excel_set_range_do'] = function(block, generator) {
        setRuntimeName();
        var range = generator.valueToCode(block, 'range', javascript.Order.FUNCTION_CALL);
        var statements = generator.statementToCode(block, 'op');
        var code = '{\n';
        code += generator.INDENT + 'let $_xlCC = ' + range + ';\n';
        code += statements;
        code += '}\n';
        return code;
    };
      
    javascript.javascriptGenerator.forBlock['excel_current_cell'] = function(block, generator) {
        setRuntimeName();
        var code = '$_xlCC';
        return [code, Blockly.JavaScript.ORDER_MEMBER];
    };

    javascript.javascriptGenerator.forBlock['excel_set_cell_value'] = function(block, generator) {
        setRuntimeName();
        var range = generator.valueToCode(block, 'range', javascript.Order.FUNCTION_CALL);
        var value = generator.valueToCode(block, 'value', javascript.Order.ATOMIC);
        var code = 'await ' + range + '.setValue(' + value + ');\n';
        return code;
    };

    javascript.javascriptGenerator.forBlock['excel_get_cell_value'] = function(block, generator) {
        setRuntimeName();
        var range = generator.valueToCode(block, 'range', javascript.Order.FUNCTION_CALL);
        var code = 'await ' + range + '.getValue()';
        return [code, Blockly.JavaScript.ORDER_MEMBER];
    };
      
    javascript.javascriptGenerator.forBlock['excel_set_cell_formula'] = function(block, generator) {
        setRuntimeName();
        var range = generator.valueToCode(block, 'range', javascript.Order.FUNCTION_CALL);
        var formula = generator.valueToCode(block, 'formula', javascript.Order.ATOMIC);
        var code = 'await ' + range + '.setFormula(' + formula + ');\n';
        return code;
    };
      
    javascript.javascriptGenerator.forBlock['excel_set_cell_number_format'] = function(block, generator) {
        setRuntimeName();
        var range = generator.valueToCode(block, 'range', javascript.Order.FUNCTION_CALL);
        var format = generator.valueToCode(block, 'format', javascript.Order.ATOMIC);
        var code = 'await ' + range + '.setNumberFormat(' + format + ');\n';
        return code;
    };
      
    javascript.javascriptGenerator.forBlock['excel_set_cell_font_color'] = function(block, generator) {
        setRuntimeName();
        var range = generator.valueToCode(block, 'range', javascript.Order.FUNCTION_CALL);
        var color = generator.valueToCode(block, 'color', javascript.Order.ATOMIC);
        var code = 'await ' + range + '.setFontColor($_' + modName + '.cssToRGB(' + color + '));\n';
        return code;
    };

    javascript.javascriptGenerator.forBlock['excel_set_cell_font_name'] = function(block, generator) {
        setRuntimeName();
        var range = generator.valueToCode(block, 'range', javascript.Order.FUNCTION_CALL);
        var fontname = generator.valueToCode(block, 'fontname', javascript.Order.ATOMIC);
        var code = 'await ' + range + '.setFontName(' + fontname + ');\n';
        return code;
    };

    javascript.javascriptGenerator.forBlock['excel_set_cell_font_size'] = function(block, generator) {
        setRuntimeName();
        var range = generator.valueToCode(block, 'range', javascript.Order.FUNCTION_CALL);
        var fontsize = generator.valueToCode(block, 'fontsize', javascript.Order.ATOMIC);
        var code = 'await ' + range + '.setFontSize(' + fontsize + ');\n';
        return code;
    };

    javascript.javascriptGenerator.forBlock['excel_set_cell_font_bold'] = function(block, generator) {
        setRuntimeName();
        var range = generator.valueToCode(block, 'range', javascript.Order.FUNCTION_CALL);
        var is_bold = generator.valueToCode(block, 'is_bold', javascript.Order.ATOMIC);
        var code = 'await ' + range + '.setFontBold(' + is_bold + ');\n';
        return code;
    };

    javascript.javascriptGenerator.forBlock['excel_set_cell_font_italic'] = function(block, generator) {
        setRuntimeName();
        var range = generator.valueToCode(block, 'range', javascript.Order.FUNCTION_CALL);
        var is_italic = generator.valueToCode(block, 'is_italic', javascript.Order.ATOMIC);
        var code = 'await ' + range + '.setFontItalic(' + is_italic + ');\n';
        return code;
    };

    javascript.javascriptGenerator.forBlock['excel_set_cell_border_type'] = function(block, generator) {
        setRuntimeName();
        var range = generator.valueToCode(block, 'range', javascript.Order.FUNCTION_CALL);
        var position = block.getFieldValue('position');
        var type = block.getFieldValue('type');
        var code = 'await ' + range + '.setBorderType($_' + modName + '.' + border_position[position] + ', $_' + modName + '.' + border_type[type].weight + ', $_' + modName + '.' + border_type[type].style + ');\n';
        return code;
    };

    javascript.javascriptGenerator.forBlock['excel_set_cell_border_color'] = function(block, generator) {
        setRuntimeName();
        var range = generator.valueToCode(block, 'range', javascript.Order.FUNCTION_CALL);
        var position = block.getFieldValue('position');
        var color = generator.valueToCode(block, 'color', javascript.Order.ATOMIC);
        var code = 'await ' + range + '.setBorderColor($_' + modName + '.' + border_position[position] + ', $_' + modName + '.cssToRGB(' + color + '));\n';
        return code;
    };

    javascript.javascriptGenerator.forBlock['excel_set_cell_interior_color'] = function(block, generator) {
        setRuntimeName();
        var range = generator.valueToCode(block, 'range', javascript.Order.FUNCTION_CALL);
        var color = generator.valueToCode(block, 'color', javascript.Order.ATOMIC);
        var code = 'await ' + range + '.setInteriorColor($_' + modName + '.cssToRGB(' + color + '));\n';
        return code;
    };
}
