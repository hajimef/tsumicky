import * as ws from '/lib/websocket.js';

const PWM_RPI_GROUP = 'pwm_rpi';

export function setup() {
}

export async function dispose() {
}

export async function setFrequency(_ws, pin, freq) {
  Blockly.checkStop();
  var param = { 'p': pin.no, 'f': freq };
  await ws.send(_ws, PWM_RPI_GROUP, null, 's', param);
};

export async function analogWrite(pin, duty) {
  Blockly.checkStop();
  var param = { 'p': pin.no, 'd': duty };
  await ws.send(pin.ws, PWM_RPI_GROUP, null, 'w', param);
};

