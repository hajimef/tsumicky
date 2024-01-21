import * as ws from '/lib/websocket.js';

const SENSOR_GROUP = 'sen';
const BMP280_SUBGROUP = 'bmp2';

var wss = {};

export function setup() {
}

export async function dispose() {
  for (let ws_name in wss) {
    await ws.send(wss[ws_name], SENSOR_GROUP, BMP280_SUBGROUP, 'd', {});
    delete wss[ws_name];
  }
}

function checkInit(_ws) {
  if (!wss.hasOwnProperty(_ws.url)) {
    Blockly.isStop = true;
    throw new Error("BMP280 of " + _ws.url + " is not initialized");
  }
}

export async function init(_ws, i2c_adrs, sda, scl) {
  Blockly.checkStop();
  wss[_ws.url] = _ws;
  var param = { 'i': i2c_adrs, 'd': sda, 'c': scl };
  await ws.send(_ws, SENSOR_GROUP, BMP280_SUBGROUP, 'i', param);
}

export async function readTemperature(_ws) {
  Blockly.checkStop();
  checkInit(_ws);
  var value = await ws.send(_ws, SENSOR_GROUP, BMP280_SUBGROUP, 't', {});
  return Math.round(value * 100) / 100;
}

export async function readPressure(_ws) {
  Blockly.checkStop();
  checkInit(_ws);
  var value = await ws.send(_ws, SENSOR_GROUP, BMP280_SUBGROUP, 'p', {});
  return Math.round(value * 100) / 100;
}
