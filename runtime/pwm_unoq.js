import * as ws from '/lib/websocket.js';

const PWM_UNOQ_GROUP = 'pwm_uq';

export function setup() {
}

export async function dispose() {
}

export async function analogWrite(pin, duty) {
  Blockly.checkStop();
  var param = { 'p': pin.no, 'd': duty };
  await ws.send(pin.ws, PWM_UNOQ_GROUP, null, 'w', param);
};

