import { addCallback, piGpio, NO_RETURN } from './fw_common.js';

const pwm_group = "pwm_rpi";

var pins = {};

export function setup() {
    addCallback(pwm_group, "", "s", setFrequency);
    addCallback(pwm_group, "", "w", analogWrite);
}

export function shutdown() {
    for (let p_no in pins) {
        pins[p_no] = null;
        delete pins[p_no];
    }
    //console.log('pins = ', pins);
}

function getPin(p_no) {
    if (p_no in pins) {
        return pins[p_no];
    }
    else {
        let pin = new piGpio(p_no);
        pins[p_no] = pin;
        return pin;
    }
}

function setFrequency(param) {
    const p_no = param.p;
    const freq = param.f;
    let pin = getPin(p_no);
    try {
        pin.pwmFrequency(freq);
//        pin.pwmRange(1000);
        return { "s": NO_RETURN };
    }
    catch (e) {
        return { "s": ERR_RETURN, "m": e.toString() };
    }
}

function analogWrite(param) {
    const p_no = param.p;
    const duty = Math.trunc(param.d);
    let pin = getPin(p_no);
    //console.log(duty);
    try {
        pin.pwmWrite(duty);
        return { "s": NO_RETURN };
    }
    catch (e) {
        return { "s": ERR_RETURN, "m": e.toString() };
    }
}