const modName = 'slMetrics';

function setRuntimeName() {
    Blockly.runTimeJS['slMetrics'] = { 'modName': modName, 'file': 'scikit_learn/metrics' };
}

export function addJS() {
    javascript.javascriptGenerator.forBlock['sl_metrics_mse'] = function(block, generator) {
        setRuntimeName()
        var type = block.getFieldValue('type');
        const code = 'await $_' + modName + '.mse(' + type + ')';
        return [code, javascript.Order.NONE];
    };
    
    javascript.javascriptGenerator.forBlock['sl_metrics_rmse'] = function(block, generator) {
        setRuntimeName()
        var type = block.getFieldValue('type');
        const code = 'await $_' + modName + '.rmse(' + type + ')';
        return [code, javascript.Order.NONE];
    };

    javascript.javascriptGenerator.forBlock['sl_metrics_r2_score'] = function(block, generator) {
        setRuntimeName()
        var type = block.getFieldValue('type');
        const code = 'await $_' + modName + '.r2_score(' + type + ')';
        return [code, javascript.Order.NONE];
    };
    
    javascript.javascriptGenerator.forBlock['sl_metrics_confusion_matrix'] = function(block, generator) {
        setRuntimeName()
        var type = block.getFieldValue('type');
        const code = 'await $_' + modName + '.confusion_matrix(' + type + ')';
        return [code, javascript.Order.NONE];
    };
    
    javascript.javascriptGenerator.forBlock['sl_metrics_accuracy_score'] = function(block, generator) {
        setRuntimeName()
        var type = block.getFieldValue('type');
        const code = 'await $_' + modName + '.accuracy_score(' + type + ')';
        return [code, javascript.Order.NONE];
    };
    
    javascript.javascriptGenerator.forBlock['sl_metrics_precision_score'] = function(block, generator) {
        setRuntimeName()
        var type = block.getFieldValue('type');
        var average = block.getFieldValue('average');
        const code = 'await $_' + modName + '.precision_score(' + type + ', \'' + average + '\')';
        return [code, javascript.Order.NONE];
    };
    
    javascript.javascriptGenerator.forBlock['sl_metrics_recall_score'] = function(block, generator) {
        setRuntimeName()
        var type = block.getFieldValue('type');
        var average = block.getFieldValue('average');
        const code = 'await $_' + modName + '.recall_score(' + type + ', \'' + average + '\')';
        return [code, javascript.Order.NONE];
    };
    
    javascript.javascriptGenerator.forBlock['sl_metrics_f1_score'] = function(block, generator) {
        setRuntimeName()
        var type = block.getFieldValue('type');
        var average = block.getFieldValue('average');
        const code = 'await $_' + modName + '.f1_score(' + type + ', \'' + average + '\')';
        return [code, javascript.Order.NONE];
    };
};
