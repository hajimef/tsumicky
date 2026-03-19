import * as ws from '/lib/websocket.js';

const PWM_UNOR4WIFI_GROUP = 'pwm_uw4';

export function setup() {
}

export async function dispose() {
}

export async function analogWrite(pin, duty) {
  Blockly.checkStop();
  var param = { 'p': pin.no, 'd': duty };
  await ws.send(pin.ws, PWM_UNOR4WIFI_GROUP, null, 'w', param);
};

