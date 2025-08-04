import * as ws from '/lib/websocket.js';

const SENSOR_GROUP = 'sen';
const MAX30100_SUBGROUP = 'max30100';

var wss = {};

export function setup() {
}

export async function dispose() {
  for (let ws_name in wss) {
    await ws.send(wss[ws_name], SENSOR_GROUP, MAX30100_SUBGROUP, 'd', {});
    delete wss[ws_name];
  }
}

function checkInit(_ws) {
  if (!wss.hasOwnProperty(_ws.url)) {
    Blockly.isStop = true;
    throw new Error("MAX30100 of " + _ws.url + " is not initialized");
  }
}

export async function init(_ws) {
  Blockly.checkStop();
  wss[_ws.url] = _ws;
  const param = {};
  await ws.send(_ws, SENSOR_GROUP, MAX30100_SUBGROUP, 'i', param);
}

export async function init_wire(_ws, sda, scl) {
  Blockly.checkStop();
  wss[_ws.url] = _ws;
  const param = { 's': sda, 'c': scl };
  await ws.send(_ws, SENSOR_GROUP, MAX30100_SUBGROUP, 'iw', param);
}

export async function read_heartrate(_ws) {
  Blockly.checkStop();
  checkInit(_ws);
  const param = {};
  return await ws.send(_ws, SENSOR_GROUP, MAX30100_SUBGROUP, 'rh', param);
}

export async function read_spo2(_ws) {
  Blockly.checkStop();
  checkInit(_ws);
  const param = {};
  return await ws.send(_ws, SENSOR_GROUP, MAX30100_SUBGROUP, 'rs', param);
}

export async function beat_callback(_ws, cb) {
  Blockly.checkStop();
  checkInit(_ws);
  ws.addCallback(_ws, SENSOR_GROUP, MAX30100_SUBGROUP, 'c', cb);
}
