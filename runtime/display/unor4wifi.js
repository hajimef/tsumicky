import * as ws from '/lib/websocket.js';

const group = 'dsp';
const subgroup = 'u4';
let wss = {};

export function setup() {
}

export async function dispose(_ws) {
  for (let ws_name in wss) {
    await ws.send(wss[ws_name], group, subgroup, 'd', {});
    delete wss[ws_name];
  }
}

async function chkInit(_ws) {
  if (!wss.hasOwnProperty(_ws.url)) {
    Blockly.isStop = true;
    throw new Error("UNO R4 WiFi Matrix of " + _ws.url + " is not initialized");
  }
}

export async function init(_ws) {
  Blockly.checkStop();
  wss[_ws.url] = _ws;
}

export async function showFrame(_ws, frame) {
  Blockly.checkStop();
  await chkInit(_ws);
  const param = { f: frame };
  return await ws.send(_ws, group, subgroup, 'f', param);
}

export async function showBitmap(_ws, bitmap) {
  Blockly.checkStop();
  await chkInit(_ws);
  const param = { b: bitmapToHex(bitmap) };
  return await ws.send(_ws, group, subgroup, 'b', param);
}

export async function showAnimation(_ws, animation) {
  Blockly.checkStop();
  await chkInit(_ws);
  const param = { a: animation };
  return await ws.send(_ws, group, subgroup, 'a', param);
}

export async function scrollText(_ws, text, font, direction, speed) {
  Blockly.checkStop();
  await chkInit(_ws);
  const param = { t: text, o: font, d: direction, s: speed };
  return await ws.send(_ws, group, subgroup, 's', param);
}

export async function clear(_ws) {
  Blockly.checkStop();
  await chkInit(_ws);
  const param = {};
  return await ws.send(_ws, group, subgroup, 'c', param);
}

function bitmapToHex(bitmap) {
  let hex = [ 0, 0, 0 ];
  let ptr = 0;
  let ctr = 0;
  for (let i = 0; i < bitmap.length; i ++) {
    for (let j = 0; j < bitmap[i].length; j ++) {
      hex[ptr] = (hex[ptr] << 1) | (bitmap[i][j] ? 1 : 0);
      ctr++;
      if (ctr == 32) {
        ptr++;
        ctr = 0;
      } 
    }
  }
  return hex;
}
