import * as ws from '/lib/websocket.js';

const SENSOR_GROUP = 'sen';
const DHT_SUBGROUP = 'dht';

var wss = {};

export function setup() {
}

export async function dispose() {
  for (let ws_name in wss) {
    await ws.send(wss[ws_name], SENSOR_GROUP, DHT_SUBGROUP, 'd', {});
    delete wss[ws_name];
  }
}

function checkInit(_ws) {
  if (!wss.hasOwnProperty(_ws.url)) {
    Blockly.isStop = true;
    throw new Error("DHT11/22 of " + _ws.url + " is not initialized");
  }
}

export async function init(_ws, type, pin) {
  Blockly.checkStop();
  wss[_ws.url] = _ws;
  var param = { 't': type, 'p': pin };
  await ws.send(_ws, SENSOR_GROUP, DHT_SUBGROUP, 'i', param);
}

export async function readTemperature(_ws) {
  Blockly.checkStop();
  checkInit(_ws);
  var value = await ws.send(_ws, SENSOR_GROUP, DHT_SUBGROUP, 't', {});
  return Math.round(value * 100) / 100;
}

export async function readHumidity(_ws) {
  Blockly.checkStop();
  checkInit(_ws);
  var value = await ws.send(_ws, SENSOR_GROUP, DHT_SUBGROUP, 'h', {});
  return Math.round(value * 100) / 100;
}
