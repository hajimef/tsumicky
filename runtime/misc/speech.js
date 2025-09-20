let synth;
let utterance;
let voices = [];

let recognition;
let transcript = '';
let interim_transcript = '';
let isInterim = false;
let isInRecognition = false;
let isInDispose = false;
let rError = '';
let rErrorMessage = '';
let onResultCallback = async function() {};
let onErrorCallback = async function() {};

export function setup() {
    if (window.speechSynthesis) {
        synth = window.speechSynthesis;
        utterance = new SpeechSynthesisUtterance();
    } else {
        alert(Blockly.Msg.TSUMICKY_SPEECH_NO_RECOGNITION_SUPPORT);
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
        recognition = new SpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = false;

        recognition.onresult = (event) => {
            transcript = '';
            interim_transcript = '';
            for (let i = event.resultIndex; i < event.results.length; ++i) {
                if (event.results[i].isFinal) {
                    transcript += event.results[i][0].transcript;
                    isInterim = false;
                    onResultCallback();
                } else {
                    interim_transcript += event.results[i][0].transcript;
                    isInterim = true;
                    onResultCallback();
                }
            }
        };

        recognition.onerror = (event) => {
            rError = event.error;
            rErrorMessage = event.message;
//            console.log('Speech recognition error:', event.error);
            onErrorCallback();
        };

        recognition.onend = () => {
            if (isInRecognition) {
                recognition.stop();
                if (!isInDispose) {
                    recognition.start();
                }
            }
        };
        isInDispose = false;
    } else {
        alert(Blockly.Msg.TSUMICKY_SPEECH_NO_RECOGNITION_SUPPORT);
    }
}

export function dispose() {
    isInDispose = true;
    if (synth) {
        synth.cancel();
    }
    if (recognition && isInRecognition) {
        recognition.stop();
    }
}

export function speak(text, isAsync) {
    Blockly.checkStop();
    if (!synth) return Promise.resolve();

    if (synth.speaking) {
        synth.cancel();
    }

    return new Promise((resolve, reject) => {
        const localUtterance = new SpeechSynthesisUtterance(text);
        localUtterance.voice = utterance.voice;
        localUtterance.rate = utterance.rate;
        localUtterance.pitch = utterance.pitch;
        localUtterance.volume = utterance.volume;
        localUtterance.lang = utterance.lang;

        localUtterance.onend = () => {
            if (!isAsync) {
                resolve();
            }
        };
        localUtterance.onerror = (event) => {
            if (event.error !== 'canceled') {
                console.log('Speech synthesis :', event.error);
                if (!isAsync) {
                    resolve();
                }
            }
        };

        synth.speak(localUtterance);

        if (isAsync) {
            resolve();
        }
    });
}

export function setLang(langName) {
    Blockly.checkStop();
    if (!utterance) return;
    const voice = Blockly.voices.find(v => v.lang === langName);
    if (voices) {
        utterance.voice = voice;
        utterance.lang = langName;
    }
}

export function setVoice(voiceName) {
    Blockly.checkStop();
    if (!utterance) return;
    const voice = Blockly.voices.find(v => v.name === voiceName);
    if (voice) {
        utterance.voice = voice;
        utterance.lang = voice.lang;
    }
}

export function setSpeed(speed) {
    Blockly.checkStop();
    if (!utterance) return;
    utterance.rate = speed;
}

export function setPitch(pitch) {
    Blockly.checkStop();
    if (!utterance) return;
    utterance.pitch = pitch;
}

export function setVolume(volume) {
    Blockly.checkStop();
    if (!utterance) return;
    utterance.volume = volume;
}

export function cancel() {
    Blockly.checkStop();
    if (synth) {
        synth.cancel();
    }
    return Promise.resolve();
}

export function pause() {
    Blockly.checkStop();
    if (synth) {
        synth.pause();
    }
    return Promise.resolve();
}

export function resume() {
    Blockly.checkStop();
    if (synth) {
        synth.resume();
    }
    return Promise.resolve();
}

export function paused() {
    Blockly.checkStop();
    if (!synth) return false;
    return synth.paused;
}

export function pending() {
    Blockly.checkStop();
    if (!synth) return false;
    return synth.pending;
}

export function speaking() {
    Blockly.checkStop();
    if (!synth) return false;
    return synth.speaking;
}

export async function startRecognition(interim) {
    Blockly.checkStop();
    if (!recognition) return;
    transcript = '';
    isInterim = false;
    recognition.interimResults = interim;
    isInRecognition = true;
    recognition.start();
}

export async function stopRecognition() {
    Blockly.checkStop();
    if (!recognition) return;
    if (isInRecognition) {
        recognition.stop();
        isInRecognition = false;
    }
}

export function onResult(callback) {
    onResultCallback = callback;
}

export function onError(callback) {
    onErrorCallback = callback;
}

export function getTranscript() {
    Blockly.checkStop();
    if (isInterim) {
        return interim_transcript;
    }
    else {
        return transcript;
    }
}

export function recogIsInterim() {
    Blockly.checkStop();
    return isInterim;
}

export function setRecognitionLang(lang) {
    Blockly.checkStop();
    if (!recognition) return;
    recognition.lang = lang;
}

export async function setGrammars(grammars) {
    Blockly.checkStop();
    if (!recognition) return;
    const SpeechGrammarList = window.SpeechGrammarList || window.webkitSpeechGrammarList;
    if (SpeechGrammarList) {
        const speechRecognitionList = new SpeechGrammarList();
        if (typeof grammars === 'string') {
            grammars = grammars.split(/\s*[,;\|]\s*/);
        }
        const grammar = '#JSGF V1.0; grammar words; public <word> = ' + grammars.join(' | ') + ' ;';
        speechRecognitionList.addFromString(grammar, 1);
        recognition.grammars = speechRecognitionList;
    }
}

export function recogError() {
    Blockly.checkStop();
    return rError;
}

export function recogErrorMessage() {
    Blockly.checkStop();
    return rErrorMessage;
}
