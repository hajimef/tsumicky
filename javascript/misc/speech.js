import * as utils from '/lib/utils.js';

const modName = 'speech';

function setRunTimeName() {
    Blockly.runTimeJS['speech'] = { 'modName': modName, 'file': 'misc/speech' };
}

export function addJS() {
    javascript.javascriptGenerator.forBlock['speech_speak'] = function(block) {
        setRunTimeName();
        const text = javascript.javascriptGenerator.valueToCode(block, 'TEXT', javascript.javascriptGenerator.ORDER_ATOMIC) || "''";
        const isAsync = block.getFieldValue('ASYNC') === 'TRUE';
        const code = `await $_${modName}.speak(${text}, ${isAsync}, '${block.id}');\n`;
        return code;
    };

    javascript.javascriptGenerator.forBlock['speech_set_lang'] = function(block) {
        setRunTimeName();
        const lang = block.getFieldValue('LANG');
        const code = `$_${modName}.setLang('${lang}', '${block.id}');\n`;
        return code;
    };

    javascript.javascriptGenerator.forBlock['speech_set_voice'] = function(block) {
        setRunTimeName();
        const voice = block.getFieldValue('VOICE');
        const code = `$_${modName}.setVoice('${voice}', '${block.id}');\n`;
        return code;
    };

    javascript.javascriptGenerator.forBlock['speech_set_speed'] = function(block) {
        setRunTimeName();
        const speed = block.getFieldValue('SPEED');
        const code = `$_${modName}.setSpeed(${speed}, '${block.id}');\n`;
        return code;
    };

    javascript.javascriptGenerator.forBlock['speech_set_pitch'] = function(block) {
        setRunTimeName();
        const pitch = block.getFieldValue('PITCH');
        const code = `$_${modName}.setPitch(${pitch}, '${block.id}');\n`;
        return code;
    };

    javascript.javascriptGenerator.forBlock['speech_set_volume'] = function(block) {
        setRunTimeName();
        const volume = block.getFieldValue('VOLUME');
        const code = `$_${modName}.setVolume(${volume}, '${block.id}');\n`;
        return code;
    };

    javascript.javascriptGenerator.forBlock['speech_cancel'] = function(block) {
        setRunTimeName();
        return `await $_${modName}.cancel('${block.id}');\n`;
    };

    javascript.javascriptGenerator.forBlock['speech_pause'] = function(block) {
        setRunTimeName();
        return `await $_${modName}.pause('${block.id}');\n`;
    };

    javascript.javascriptGenerator.forBlock['speech_resume'] = function(block) {
        setRunTimeName();
        return `await $_${modName}.resume('${block.id}');\n`;
    };

    javascript.javascriptGenerator.forBlock['speech_paused'] = function(block) {
        setRunTimeName();
        const code = `$_${modName}.paused('${block.id}')`;
        return [code, javascript.javascriptGenerator.ORDER_ATOMIC];
    };

    javascript.javascriptGenerator.forBlock['speech_pending'] = function(block) {
        setRunTimeName();
        const code = `$_${modName}.pending('${block.id}')`;
        return [code, javascript.javascriptGenerator.ORDER_ATOMIC];
    };

    javascript.javascriptGenerator.forBlock['speech_speaking'] = function(block) {
        setRunTimeName();
        const code = `$_${modName}.speaking('${block.id}')`;
        return [code, javascript.javascriptGenerator.ORDER_ATOMIC];
    };

    javascript.javascriptGenerator.forBlock['speech_recognition_start'] = function(block) {
        setRunTimeName();
        const interim = block.getFieldValue('INTERIM') === 'TRUE';
        return `await $_${modName}.startRecognition(${interim}, '${block.id}');\n`;
    };

    javascript.javascriptGenerator.forBlock['speech_recognition_stop'] = function(block) {
        setRunTimeName();
        return `await $_${modName}.stopRecognition('${block.id}');\n`;
    };

    javascript.javascriptGenerator.forBlock['speech_recognition_on_result'] = function(block) {
        setRunTimeName();
        const statements_do = javascript.javascriptGenerator.statementToCode(block, 'DO');
        const funcName = `speech_recognition_on_result_callback`;
        const code = `async function ${funcName}() {\n${statements_do}}\n$_${modName}.onResult(${funcName}, '${block.id}');\n`;
        return code;
    };

    javascript.javascriptGenerator.forBlock['speech_recognition_on_error'] = function(block) {
        setRunTimeName();
        const statements_do = javascript.javascriptGenerator.statementToCode(block, 'DO');
        const funcName = `speech_recognition_on_error_callback`;
        const code = `async function ${funcName}() {\n${statements_do}}\n$_${modName}.onError(${funcName}, '${block.id}');\n`;
        return code;
    };

    javascript.javascriptGenerator.forBlock['speech_recognition_get_transcript'] = function(block) {
        setRunTimeName();
        const code = `$_${modName}.getTranscript('${block.id}')`;
        return [code, javascript.javascriptGenerator.ORDER_ATOMIC];
    };

    javascript.javascriptGenerator.forBlock['speech_recognition_is_interim'] = function(block) {
        setRunTimeName();
        const code = `$_${modName}.recogIsInterim('${block.id}')`;
        return [code, javascript.javascriptGenerator.ORDER_ATOMIC];
    };

    javascript.javascriptGenerator.forBlock['speech_recognition_set_lang'] = function(block) {
        setRunTimeName();
        const lang = block.getFieldValue('LANG');
        return `$_${modName}.setRecognitionLang('${lang}', '${block.id}');\n`;
    };

    javascript.javascriptGenerator.forBlock['speech_recognition_set_grammars'] = function(block) {
        setRunTimeName();
        const grammars = javascript.javascriptGenerator.valueToCode(block, 'GRAMMARS', javascript.javascriptGenerator.ORDER_ATOMIC) || "''";
        return `await $_${modName}.setGrammars(${grammars}, '${block.id}');\n`;
    };

    javascript.javascriptGenerator.forBlock['speech_recognition_error'] = function(block) {
        setRunTimeName();
        const code = `$_${modName}.recogError('${block.id}')`;
        return [code, javascript.javascriptGenerator.ORDER_ATOMIC];
    };

    javascript.javascriptGenerator.forBlock['speech_recognition_errmsg'] = function(block) {
        setRunTimeName();
        const code = `$_${modName}.recogErrorMessage('${block.id}')`;
        return [code, javascript.javascriptGenerator.ORDER_ATOMIC];
    };

}
