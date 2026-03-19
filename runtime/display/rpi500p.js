import * as ws from '/lib/websocket.js';

const DISPLAY_GROUP = 'dsp';
const RPI500P_SUBGROUP = 'rp5p';

var rpi500ps = {};
var wss = {};

export function setup() {
  rpi500ps = {};
  wss = {};
}

export async function dispose() {
  for (let ws_name in wss) {
    await ws.send(wss[ws_name], DISPLAY_GROUP, RPI500P_SUBGROUP, 'd', {});
    delete rpi500ps[ws_name];
    delete wss[ws_name];
  }
}

function checkInit(_ws) {
  if (!rpi500ps.hasOwnProperty(_ws.url)) {
    Blockly.isStop = true;
    throw new Error("Raspberry PI 500+ of " + _ws.url + " is not initialized");
  }
}

export async function init(_ws, blockId) {
  let ws_name = _ws.url
  Blockly.checkStop(blockId);
  if (!rpi500ps.hasOwnProperty(ws_name)) {
    rpi500ps[ws_name] = [];
    wss[ws_name] = _ws;
  }
  bufClear(_ws);
  await ws.send(_ws, DISPLAY_GROUP, RPI500P_SUBGROUP, 'i', {});
}

export function set(_ws, row, col, color, blockId) {
  Blockly.checkStop(blockId);
  checkInit(_ws);
  let ws_name = _ws.url
  let hsv = rgb2hsv(color.substring(1, 7));
  hsv = (Math.floor(hsv.h / 360 * 255) * 65536 + Math.floor(hsv.s * 255) * 256 + Math.floor(hsv.v * 255)).toString(16).padStart(6, '0');
  rpi500ps[ws_name][(row - 1) * 16 + col - 1] = hsv;
}

export async function show(_ws, blockId) {
  Blockly.checkStop(blockId);
  checkInit(_ws);
  let ws_name = _ws.url
  let colors = rpi500ps[ws_name].join('');
  var param = { 'c': colors };
  await ws.send(_ws, DISPLAY_GROUP, RPI500P_SUBGROUP, 's', param);
}

export async function buf_clear(_ws, blockId) {
  Blockly.checkStop(blockId);
  checkInit(_ws);
  bufClear(_ws);
}

export async function clear(_ws, blockId) {
  Blockly.checkStop(blockId);
  checkInit(_ws);
  bufClear(_ws);
  await ws.send(_ws, DISPLAY_GROUP, RPI500P_SUBGROUP, 'c', {});
}

function bufClear(_ws) {
  let ws_name = _ws.url
  rpi500ps[ws_name] = Array.from({ length: 16 * 6 });
  rpi500ps[ws_name].fill("000000");
}

function rgb2hsv(r, g, b) {
  let tmp = [r, g, b];
  if (r !== void 0 && g === void 0) {
    const cc = parseInt(r.toString().replace(/[^\da-f]/ig, '').replace(/^(.)(.)(.)$/, "$1$1$2$2$3$3"), 16);
    tmp = [cc >> 16 & 0xff, cc >> 8 & 0xff, cc & 0xff];
  }
  else {
    for (let i in tmp) tmp[i] = Math.max(0, Math.min(255, Math.floor(tmp[i])));
  }
  [r, g, b] = tmp;

  const
    v = Math.max(r, g, b), d = v - Math.min(r, g, b),
    s = v ? d / v : 0, a = [r, g, b, r, g], i = a.indexOf(v),
    h = s ? (((a[i + 1] - a[i + 2]) / d + i * 2 + 6) % 6) * 60 : 0;

  return {h, s, v: v / 255};
}