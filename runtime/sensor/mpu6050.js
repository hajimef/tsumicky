import * as ws from '/lib/websocket.js';

const SENSOR_GROUP = 'sen';
const MPU6050_SUBGROUP = 'm6050';

var wss = {};

export function setup() {
}

export async function dispose() {
  for (let ws_name in wss) {
    await ws.send(wss[ws_name], SENSOR_GROUP, MPU6050_SUBGROUP, 'd', {});
    delete wss[ws_name];
  }
}

export async function init(_ws, sda, scl) {
  Blockly.checkStop();
  wss[_ws.url] = _ws;
  var param = { 'd': sda, 'c': scl };
  await ws.send(_ws, SENSOR_GROUP, MPU6050_SUBGROUP, 'i', param);
}

function checkInit(_ws) {
  if (!wss.hasOwnProperty(_ws.url)) {
    Blockly.isStop = true;
    throw new Error("MPU6050 " + _ws.url + " is not initialized");
  }
}

export async function update(_ws) {
  Blockly.checkStop();
  checkInit(_ws);
  await ws.send(_ws, SENSOR_GROUP, MPU6050_SUBGROUP, 'u', {});
}

export async function read(_ws, type) {
  Blockly.checkStop();
  checkInit(_ws);
  var param = { 't': type };
  var value = await ws.send(_ws, SENSOR_GROUP, MPU6050_SUBGROUP, 'r', param);
  return Math.round(value * 100) / 100;
}
