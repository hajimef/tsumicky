import * as ws from '/lib/websocket.js';

const DISPLAY_GROUP = 'dsp';
const NEOPIXEL_SUBGROUP = 'np';

var neopixels = {};
var wss = {};

export function setup() {
  neopixels = {};
  wss = {};
}

export async function dispose() {
  for (let ws_name in wss) {
    await ws.send(wss[ws_name], DISPLAY_GROUP, NEOPIXEL_SUBGROUP, 'd', {});
    delete neopixels[ws_name];
    delete wss[ws_name];
  }
}

function checkInit(_ws, no) {
  if (!neopixels.hasOwnProperty(_ws.url) || !neopixels[_ws.url].hasOwnProperty(no)) {
    Blockly.isStop = true;
    throw new Error("Neopixel No:" + no + " of " + _ws.url + " is not initialized");
  }
}

export async function init(_ws, no, pin, numpixels, color_order) {
  let ws_name = _ws.url
  Blockly.checkStop();
  if (!neopixels.hasOwnProperty(ws_name)) {
    neopixels[ws_name] = {};
    wss[ws_name] = _ws;
  }
  neopixels[ws_name][no] = Array.from({ length: numpixels });
  neopixels[ws_name][no].fill("000000");
  var param = { 'no': no, 'p': pin.no, 'np': numpixels, 'c': color_order };
  await ws.send(_ws, DISPLAY_GROUP, NEOPIXEL_SUBGROUP, 'i', param);
}

export function setPixelColor(_ws, no, p_no, color) {
  checkInit(_ws, no);
  neopixels[_ws.url][no][p_no] = color.substring(1);
}

export function setAllPixelColor(_ws, no, color) {
  checkInit(_ws, no);
  neopixels[_ws.url][no].fill(color.substring(1));
}

export async function show(_ws, no) {
  Blockly.checkStop();
  checkInit(_ws, no);
  let colors = '';
  for (let i = 0; i < neopixels[_ws.url][no].length; i++) {
    colors += neopixels[_ws.url][no][i];
  }
  var param = { 'no': no, 'c': colors};
  await ws.send(_ws, DISPLAY_GROUP, NEOPIXEL_SUBGROUP, 's', param);
}