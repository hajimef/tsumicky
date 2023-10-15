import { addCallback, piGpio, NO_RETURN } from './fw_common.js';

const servo_group = "sv";

var svs = {}, pins = {};

export function setup() {
    addCallback(servo_group, "", "a", attach);
    addCallback(servo_group, "", "w", write);
}

export function shutdown() {
    for (let p_no in pins) {
        pins[p_no] = null;
        delete pins[p_no];
    }
    for (let servo_no in svs) {
        delete svs[servo_no];
    }
    //console.log('pins = ', pins);
    //console.log('svs = ', svs);
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

function attach(param) {
    const p_no = param.p;
    const servo_no = param.n - 1;
    const pmin = param.mi;
    const pmax = param.mx;
    let pin = getPin(p_no);
    let sv = { "pin": pin, "min": pmin, "max": pmax };
    svs[servo_no] = sv;
    //console.log('pins = ', pins);
    //console.log('svs = ', svs);
    return { "s": NO_RETURN };
}

function write(param) {
    const servo_no = param.n - 1;
    const angle = param.a;
    try {
        let sv = svs[servo_no];
        let pin = sv.pin;
        let value = (sv.max - sv.min) / 180 * angle + sv.min;
        pin.servoWrite(value);
        return { "s": NO_RETURN };
    }
    catch(e) {
        return { "e": e.toString() };
    }
}