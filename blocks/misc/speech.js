Blockly.Extensions.register('dynamic_lang_extension',
    function() {
        this.getField('LANG').setOptions(
            function() {
                let en_langs = {
                    "ja-JP": Blockly.Msg.TSUMICKY_SPEECH_LANG_JA_JP,
                    "en-US": Blockly.Msg.TSUMICKY_SPEECH_LANG_EN_US,
                    "en-GB": Blockly.Msg.TSUMICKY_SPEECH_LANG_EN_GB,
                    "de-DE": Blockly.Msg.TSUMICKY_SPEECH_LANG_DE_DE,
                    "fr-FR": Blockly.Msg.TSUMICKY_SPEECH_LANG_FR_FR,
                    "zh-CN": Blockly.Msg.TSUMICKY_SPEECH_LANG_ZH_CN,
                    "ko-KR": Blockly.Msg.TSUMICKY_SPEECH_LANG_KO_KR
                };
                let langs = {};
                let options = [];
                for(var i = 0; i < Blockly.voices.length; i++) {
                    if (en_langs.hasOwnProperty(Blockly.voices[i].lang)) {
                        langs[Blockly.voices[i].lang] = en_langs[Blockly.voices[i].lang];
                    }
                }
                let keys = Object.keys(langs);
                for(var i = 0; i < keys.length; i++) {
                    options.push([langs[keys[i]], keys[i]]);
                }
                return options;
            }
        );
    }
);

Blockly.Extensions.register('dynamic_voice_extension',
    function() {
        this.getField('VOICE').setOptions(
            function() {
                var options = [];
                for (let i = 0; i < Blockly.voices.length; i++) {
                    options.push([Blockly.voices[i].name, Blockly.voices[i].name]);
                }
                return options;
            }
        );
    }
);

export function addBlocks() {
    Blockly.defineBlocksWithJsonArray([
    {
        "type": "speech_speak",
        "message0": "%{BKY_TSUMICKY_SPEECH_SPEAK}",
        "args0": [
            {
                "type": "input_value",
                "name": "TEXT",
                "check": "String"
            },
            {
                "type": "field_checkbox",
                "name": "ASYNC",
                "checked": true
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 120,
        "tooltip": "%{BKY_TSUMICKY_SPEECH_TOOLTIP_SPEAK}",
        "helpUrl": "https://www.hfchannel.site/tsumicky/ja/ref/speech/blocks.php#speak"
    },
    {
        "type": "speech_set_lang",
        "message0": "%{BKY_TSUMICKY_SPEECH_SET_LANG}",
        "args0": [
            {
                "type": "field_dropdown",
                "name": "LANG",
                "options": [
                    [
                        "loading...",
                        "default"
                    ]
                ]
            }
        ],
        "extensions": [
            "dynamic_lang_extension"
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 120,
        "tooltip": "%{BKY_TSUMICKY_SPEECH_TOOLTIP_SET_LANG}",
        "helpUrl": "https://www.hfchannel.site/tsumicky/ja/ref/speech/blocks.php#set_lang"
    },
    {
        "type": "speech_set_voice",
        "message0": "%{BKY_TSUMICKY_SPEECH_SET_VOICE}",
        "args0": [
            {
                "type": "field_dropdown",
                "name": "VOICE",
                "options": [
                    [
                        "loading...",
                        "default"
                    ]
                ]
            }
        ],
        "extensions": [
            "dynamic_voice_extension"
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 120,
        "tooltip": "%{BKY_TSUMICKY_SPEECH_TOOLTIP_SET_VOICE}",
        "helpUrl": "https://www.hfchannel.site/tsumicky/ja/ref/speech/blocks.php#set_voice"
    },
    {
        "type": "speech_set_speed",
        "message0": "%{BKY_TSUMICKY_SPEECH_SET_SPEED}",
        "args0": [
            {
                "type": "field_number",
                "name": "SPEED",
                "value": 1,
                "min": 0.1,
                "max": 10,
                "precision": 0.1
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 120,
        "tooltip": "%{BKY_TSUMICKY_SPEECH_TOOLTIP_SET_SPEED}",
        "helpUrl": "https://www.hfchannel.site/tsumicky/ja/ref/speech/blocks.php#set_speed"
    },
    {
        "type": "speech_set_pitch",
        "message0": "%{BKY_TSUMICKY_SPEECH_SET_PITCH}",
        "args0": [
            {
                "type": "field_number",
                "name": "PITCH",
                "value": 1,
                "min": 0,
                "max": 2,
                "precision": 0.1
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 120,
        "tooltip": "%{BKY_TSUMICKY_SPEECH_TOOLTIP_SET_PITCH}",
        "helpUrl": "https://www.hfchannel.site/tsumicky/ja/ref/speech/blocks.php#set_pitch"
    },
    {
        "type": "speech_set_volume",
        "message0": "%{BKY_TSUMICKY_SPEECH_SET_VOLUME}",
        "args0": [
            {
                "type": "field_number",
                "name": "VOLUME",
                "value": 1,
                "min": 0,
                "max": 1,
                "precision": 0.1
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 120,
        "tooltip": "%{BKY_TSUMICKY_SPEECH_TOOLTIP_SET_VOLUME}",
        "helpUrl": "https://www.hfchannel.site/tsumicky/ja/ref/speech/blocks.php#set_volume"
    },
    {
        "type": "speech_cancel",
        "message0": "%{BKY_TSUMICKY_SPEECH_CANCEL}",
        "previousStatement": null,
        "nextStatement": null,
        "colour": 120,
        "tooltip": "%{BKY_TSUMICKY_SPEECH_TOOLTIP_CANCEL}",
        "helpUrl": "https://www.hfchannel.site/tsumicky/ja/ref/speech/blocks.php#cancel"
    },
    {
        "type": "speech_pause",
        "message0": "%{BKY_TSUMICKY_SPEECH_PAUSE}",
        "previousStatement": null,
        "nextStatement": null,
        "colour": 120,
        "tooltip": "%{BKY_TSUMICKY_SPEECH_TOOLTIP_PAUSE}",
        "helpUrl": "https://www.hfchannel.site/tsumicky/ja/ref/speech/blocks.php#pause"
    },
    {
        "type": "speech_resume",
        "message0": "%{BKY_TSUMICKY_SPEECH_RESUME}",
        "previousStatement": null,
        "nextStatement": null,
        "colour": 120,
        "tooltip": "%{BKY_TSUMICKY_SPEECH_TOOLTIP_RESUME}",
        "helpUrl": "https://www.hfchannel.site/tsumicky/ja/ref/speech/blocks.php#resume"
    },
    {
        "type": "speech_paused",
        "message0": "%{BKY_TSUMICKY_SPEECH_PAUSED}",
        "output": "Boolean",
        "colour": 120,
        "tooltip": "%{BKY_TSUMICKY_SPEECH_TOOLTIP_PAUSED}",
        "helpUrl": "https://www.hfchannel.site/tsumicky/ja/ref/speech/blocks.php#paused"
    },
    {
        "type": "speech_pending",
        "message0": "%{BKY_TSUMICKY_SPEECH_PENDING}",
        "output": "Boolean",
        "colour": 120,
        "tooltip": "%{BKY_TSUMICKY_SPEECH_TOOLTIP_PENDING}",
        "helpUrl": "https://www.hfchannel.site/tsumicky/ja/ref/speech/blocks.php#pending"
    },
    {
        "type": "speech_speaking",
        "message0": "%{BKY_TSUMICKY_SPEECH_SPEAKING}",
        "output": "Boolean",
        "colour": 120,
        "tooltip": "%{BKY_TSUMICKY_SPEECH_TOOLTIP_SPEAKING}",
        "helpUrl": "https://www.hfchannel.site/tsumicky/ja/ref/speech/blocks.php#speaking"
    },
    {
        "type": "speech_recognition_start",
        "message0": "%{BKY_TSUMICKY_SPEECH_RECOGNITION_START}",
        "args0": [
            {
                "type": "field_checkbox",
                "name": "INTERIM",
                "checked": false
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 120,
        "tooltip": "%{BKY_TSUMICKY_SPEECH_TOOLTIP_RECOGNITION_START}",
        "helpUrl": "https://www.hfchannel.site/tsumicky/ja/ref/speech/blocks.php#recognition_start"
    },
    {
        "type": "speech_recognition_stop",
        "message0": "%{BKY_TSUMICKY_SPEECH_RECOGNITION_STOP}",
        "previousStatement": null,
        "nextStatement": null,
        "colour": 120,
        "tooltip": "%{BKY_TSUMICKY_SPEECH_TOOLTIP_RECOGNITION_STOP}",
        "helpUrl": "https://www.hfchannel.site/tsumicky/ja/ref/speech/blocks.php#recognition_stop"
    },
    {
        "type": "speech_recognition_on_result",
        "message0": "%{BKY_TSUMICKY_SPEECH_RECOGNITION_ON_RESULT}",
        "message1": "%1",
        "args1": [
            {
                "type": "input_statement",
                "name": "DO"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 120,
        "tooltip": "%{BKY_TSUMICKY_SPEECH_TOOLTIP_RECOGNITION_ON_RESULT}",
        "helpUrl": "https://www.hfchannel.site/tsumicky/ja/ref/speech/blocks.php#recognition_on_result"
    },
    {
        "type": "speech_recognition_on_error",
        "message0": "%{BKY_TSUMICKY_SPEECH_RECOGNITION_ON_ERROR}",
        "message1": "%1",
        "args1": [
            {
                "type": "input_statement",
                "name": "DO"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 120,
        "tooltip": "%{BKY_TSUMICKY_SPEECH_TOOLTIP_RECOGNITION_ON_ERROR}",
        "helpUrl": "https://www.hfchannel.site/tsumicky/ja/ref/speech/blocks.php#recognition_on_error"
    },
    {
        "type": "speech_recognition_get_transcript",
        "message0": "%{BKY_TSUMICKY_SPEECH_RECOGNITION_GET_TRANSCRIPT}",
        "output": "String",
        "colour": 120,
        "tooltip": "%{BKY_TSUMICKY_SPEECH_TOOLTIP_RECOGNITION_GET_TRANSCRIPT}",
        "helpUrl": "https://www.hfchannel.site/tsumicky/ja/ref/speech/blocks.php#recognition_get_transcript"
    },
    {
        "type": "speech_recognition_is_interim",
        "message0": "%{BKY_TSUMICKY_SPEECH_RECOGNITION_IS_INTERIM}",
        "output": "Boolean",
        "colour": 120,
        "tooltip": "%{BKY_TSUMICKY_SPEECH_TOOLTIP_RECOGNITION_IS_INTERIM}",
        "helpUrl": "https://www.hfchannel.site/tsumicky/ja/ref/speech/blocks.php#recognition_is_interim"
    },
    {
        "type": "speech_recognition_set_lang",
        "message0": "%{BKY_TSUMICKY_SPEECH_RECOGNITION_SET_LANG}",
        "args0": [
            {
                "type": "field_dropdown",
                "name": "LANG",
                "options": [
                    [
                        "%{BKY_TSUMICKY_SPEECH_LANG_JA_JP}",
                        "ja-JP"
                    ],
                    [
                        "%{BKY_TSUMICKY_SPEECH_LANG_EN_US}",
                        "en-US"
                    ],
                    [
                        "%{BKY_TSUMICKY_SPEECH_LANG_EN_GB}",
                        "en-GB"
                    ],
                    [
                        "%{BKY_TSUMICKY_SPEECH_LANG_DE_DE}",
                        "de-DE"
                    ],
                    [
                        "%{BKY_TSUMICKY_SPEECH_LANG_FR_FR}",
                        "fr-FR"
                    ],
                    [
                        "%{BKY_TSUMICKY_SPEECH_LANG_ZH_CN}",
                        "zh-CN"
                    ],
                    [
                        "%{BKY_TSUMICKY_SPEECH_LANG_KO_KR}",
                        "ko-KR"
                    ]
                ]
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 120,
        "tooltip": "%{BKY_TSUMICKY_SPEECH_TOOLTIP_RECOGNITION_SET_LANG}",
        "helpUrl": "https://www.hfchannel.site/tsumicky/ja/ref/speech/blocks.php#recognition_set_lang"
    },
    {
        "type": "speech_recognition_set_grammars",
        "message0": "%{BKY_TSUMICKY_SPEECH_RECOGNITION_SET_GRAMMARS}",
        "args0": [
            {
                "type": "input_value",
                "name": "GRAMMARS",
                "check": [
                    "String",
                    "Array"
                ]
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 120,
        "tooltip": "%{BKY_TSUMICKY_SPEECH_TOOLTIP_RECOGNITION_SET_GRAMMARS}",
        "helpUrl": "https://www.hfchannel.site/tsumicky/ja/ref/speech/blocks.php#recognition_set_grammars"
    },
    {
        "type": "speech_recognition_error",
        "message0": "%{BKY_TSUMICKY_SPEECH_RECOGNITION_ERROR}",
        "output": "Boolean",
        "colour": 120,
        "tooltip": "%{BKY_TSUMICKY_SPEECH_TOOLTIP_RECOGNITION_ERROR}",
        "helpUrl": "https://www.hfchannel.site/tsumicky/ja/ref/speech/blocks.php#recognition_error"
    },
    {
        "type": "speech_recognition_errmsg",
        "message0": "%{BKY_TSUMICKY_SPEECH_RECOGNITION_ERROR_MESSAGE}",
        "output": "Boolean",
        "colour": 120,
        "tooltip": "%{BKY_TSUMICKY_SPEECH_TOOLTIP_RECOGNITION_ERROR_MESSAGE}",
        "helpUrl": "https://www.hfchannel.site/tsumicky/ja/ref/speech/blocks.php#recognition_errmsg"
    }
]);
}