import { addCallback, piGpio, NO_RETURN, USE_RETURN, ERR_RETURN } from './fw_common.js';

const basic_io_group = "bio";

var pins = {};

export function setup() {
    addCallback(basic_io_group, "", "mn", modelName);
    addCallback(basic_io_group, "", "pm", pinMode);
    addCallback(basic_io_group, "", "dw", digitalWrite);
    addCallback(basic_io_group, "", "dr", digitalRead);
    addCallback(basic_io_group, "", "ar", analogRead);
}

export function shutdown() {
    for (let p_no in pins) {
        pins[p_no] = null;
        delete pins[p_no];
    }
}

async function modelName(param) {
    return { "s": USE_RETURN, "v": "rpi" };
}

async function pinMode(param) {
    const p_no = param.p;
    const mode = param.m;

    try {
        let pin;
        if (p_no in pins) {
            pin = pins[p_no];
        }
        else {
            pin = new piGpio(p_no);
        }
        if (mode == 0) {
            pin.mode(piGpio.OUTPUT);
        }
        else if (mode == 1) {
            pin.mode(piGpio.INPUT);
            pin.pullUpDown(piGpio.PUD_OFF);
        }
        else if (mode == 2) {
            pin.mode(piGpio.INPUT);
            pin.pullUpDown(piGpio.PUD_DOWN);
        }
        pins[p_no] = pin;
        return { "s": NO_RETURN };
    
    }
    catch (e) {
        return { "s": ERR_RETURN, "m": e.toString() };
    }
}

async function digitalWrite(param) {
    const p_no = param.p;
    const value = param.v;

    try {
        let pin = pins[p_no];
        pin.digitalWrite(value);
        return { "s": NO_RETURN };
    }
    catch (e) {
        return { "s": ERR_RETURN, "m": e.toString() };
    }
}

async function digitalRead(param) {
    const p_no = param.p;

    try {
        let pin = pins[p_no];
        let v = pin.digitalRead();
        return { "s": USE_RETURN, "v": v };
    }
    catch (e) {
        return { "s": ERR_RETURN, "m": e.toString() };
    }
}

async function analogRead(param) {
    return { "s": USE_RETURN, "v": 0 };
}

