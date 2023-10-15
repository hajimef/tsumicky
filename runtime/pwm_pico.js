import * as ws from '/lib/websocket.js';

const PWM_PICO_GROUP = 'pwm_rpip';

export function setup() {
}

export function dispose() {
}

export async function pwmSetup(_ws, freq, bit) {
  Blockly.checkStop();
  var param = { 'f': freq, 'b': bit };
  await ws.send(_ws, PWM_PICO_GROUP, null, 's', param);
};

export async function analogWrite(pin, duty) {
  Blockly.checkStop();
  var param = { 'p': pin.no, 'd': duty };
  await ws.send(pin.ws, PWM_PICO_GROUP, null, 'w', param);
};

