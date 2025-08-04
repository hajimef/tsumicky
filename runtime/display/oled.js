import * as ws from '/lib/websocket.js';

const DISPLAY_GROUP = 'dsp';
const OLED_SUBGROUP = 'ol';

var wss = {};
var buf = {};

export function setup() {
}

export async function dispose() {
  for (let ws_name in wss) {
    await ws.send(wss[ws_name], DISPLAY_GROUP, OLED_SUBGROUP, 'd', {});
    delete wss[ws_name];
    delete buf[ws_name];
  }
}

function checkInit(_ws) {
  if (!wss.hasOwnProperty(_ws.url)) {
    Blockly.isStop = true;
    throw new Error("OLED of " + ws_name + " is not initialized");
  }
}

export async function init(_ws, con, type, mosi, sck, dc, cs, res) {
  Blockly.checkStop();
  wss[_ws.url] = _ws;
  buf[_ws.url] = [];
  var param = { 'c': con, 't': type, 'm': mosi, 'k': sck, 'd': dc, 's': cs, 'r': res };
  await ws.send(_ws, DISPLAY_GROUP, OLED_SUBGROUP, 'i', param);
}

export async function drawLine(_ws, x1, y1, x2, y2) {
  Blockly.checkStop();
  checkInit(_ws);
  var param = { 'x1': x1, 'y1': y1, 'x2': x2, 'y2': y2 };
  buf[_ws.url].push({ 'c':'dl', 'p':param });
  //await ws.send(_ws, DISPLAY_GROUP, OLED_SUBGROUP, 'dl', param);
}

export async function drawPixel(_ws, x, y) {
  Blockly.checkStop();
  checkInit(_ws);
  var param = { 'x': x, 'y': y };
  buf[_ws.url].push({ 'c':'dp', 'p':param });
  //await ws.send(_ws, DISPLAY_GROUP, OLED_SUBGROUP, 'dp', param);
}

export async function drawFrame(_ws, x, y, w, h) {
  Blockly.checkStop();
  checkInit(_ws);
  var param = { 'x': x, 'y': y, 'w': w, 'h': h };
  buf[_ws.url].push({ 'c':'df', 'p':param });
  //await ws.send(_ws, DISPLAY_GROUP, OLED_SUBGROUP, 'df', param);
}

export async function drawBox(_ws, x, y, w, h) {
  Blockly.checkStop();
  checkInit(_ws);
  var param = { 'x': x, 'y': y, 'w': w, 'h': h };
  buf[_ws.url].push({ 'c':'db', 'p':param });
//  await ws.send(_ws, DISPLAY_GROUP, OLED_SUBGROUP, 'db', param);
}

export async function drawCircle(_ws, x, y, r) {
  Blockly.checkStop();
  checkInit(_ws);
  var param = { 'x': x, 'y': y, 'r': r };
  buf[_ws.url].push({ 'c':'dc', 'p':param });
//  await ws.send(_ws, DISPLAY_GROUP, OLED_SUBGROUP, 'dc', param);
}

export async function drawDisc(_ws, x, y, r) {
  Blockly.checkStop();
  checkInit(_ws);
  var param = { 'x': x, 'y': y, 'r': r };
  buf[_ws.url].push({ 'c':'dd', 'p':param });
//  await ws.send(_ws, DISPLAY_GROUP, OLED_SUBGROUP, 'dd', param);
}

export async function setFont(_ws, fnt) {
  Blockly.checkStop();
  checkInit(_ws);
  var param = { 'f': fnt };
  buf[_ws.url].push({ 'c':'sf', 'p':param });
//  await ws.send(_ws, DISPLAY_GROUP, OLED_SUBGROUP, 'sf', param);
}

export async function setCursor(_ws, x, y) {
  Blockly.checkStop();
  checkInit(_ws);
  var param = { 'x': x, 'y': y };
  buf[_ws.url].push({ 'c':'sc', 'p':param });
//  await ws.send(_ws, DISPLAY_GROUP, OLED_SUBGROUP, 'sc', param);
}

export async function print(_ws, str) {
  Blockly.checkStop();
  checkInit(_ws);
  var param = { 's': str };
  buf[_ws.url].push({ 'c':'pr', 'p':param });
//  await ws.send(_ws, DISPLAY_GROUP, OLED_SUBGROUP, 'pr', param);
}

export async function sendBuffer(_ws) {
  Blockly.checkStop();
  checkInit(_ws);
  await ws.send(_ws, DISPLAY_GROUP, OLED_SUBGROUP, 'sb', {'p': buf[_ws.url]});
  buf[_ws.url] = [];
}

export async function clearDisplay(_ws) {
  Blockly.checkStop();
  checkInit(_ws);
  await ws.send(_ws, DISPLAY_GROUP, OLED_SUBGROUP, 'cd', {});
}
export async function clearBuffer(_ws) {
  Blockly.checkStop();
  checkInit(_ws);
  await ws.send(_ws, DISPLAY_GROUP, OLED_SUBGROUP, 'cb', {});
}
