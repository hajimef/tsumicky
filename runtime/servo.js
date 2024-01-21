import * as ws from '/lib/websocket.js';

const SERVO_GROUP = 'sv';

export function setup() {
}

export async function dispose() {
}

export async function attach(_ws, pin, servo_no, pmin, pmax) {
  Blockly.checkStop();
  var param = { 'p': pin.no, 'n': servo_no, 'mi': pmin, 'mx': pmax };
  await ws.send(_ws, SERVO_GROUP, null, 'a', param);
};

export async function write(_ws, servo_no, angle) {
  Blockly.checkStop();
  var param = { 'n': servo_no, 'a': angle };
  await ws.send(_ws, SERVO_GROUP, null, 'w', param);
};
