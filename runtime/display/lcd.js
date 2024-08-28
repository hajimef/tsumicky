import * as ws from '/lib/websocket.js';

const DISPLAY_GROUP = 'dsp';
const LCD_SUBGROUP = 'lc';

var wss = {};

export function setup() {
}

export async function dispose() {
  for (let ws_name in wss) {
    await ws.send(wss[ws_name], DISPLAY_GROUP, LCD_SUBGROUP, 'd', {});
    delete wss[ws_name];
  }
}

function checkInit(_ws) {
  if (!wss.hasOwnProperty(_ws.url)) {
    Blockly.isStop = true;
    throw new Error("LCD of " + _ws.url + " is not initialized");
  }
}

export async function init(_ws, rc, i2c_address) {
  let ws_name = _ws.url
  Blockly.checkStop();
  wss[_ws.url] = _ws;
  var param = { 'r': rc, 'a': i2c_address, 'd': -1, 'c': -1 };
  await ws.send(_ws, DISPLAY_GROUP, LCD_SUBGROUP, 'i', param);
}

export async function init_i2c(_ws, rc, i2c_address, sda, scl) {
  let ws_name = _ws.url
  Blockly.checkStop();
  wss[_ws.url] = _ws;
  var param = { 'r': rc, 'a': i2c_address, 'd': sda, 'c': scl };
  await ws.send(_ws, DISPLAY_GROUP, LCD_SUBGROUP, 'i', param);
}

export async function clear(_ws) {
  Blockly.checkStop();
  checkInit(_ws);
  await ws.send(_ws, DISPLAY_GROUP, LCD_SUBGROUP, 'c', {});
}

export async function cursor_pos(_ws, x, y) {
  Blockly.checkStop();
  checkInit(_ws);
  var param = { 'x': x, 'y': y };
  await ws.send(_ws, DISPLAY_GROUP, LCD_SUBGROUP, 's', param);
}

export async function print(_ws, text) {
  Blockly.checkStop();
  checkInit(_ws);
  var param = { 't': text };
  await ws.send(_ws, DISPLAY_GROUP, LCD_SUBGROUP, 'p', param);
}
