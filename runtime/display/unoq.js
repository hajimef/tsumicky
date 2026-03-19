import * as ws from '../../lib/websocket.js';

const group = 'dsp';
const subgroup = 'uq';
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
    throw new Error("UNO Q Matrix of " + _ws.url + " is not initialized");
  }
}

export async function init(_ws, blockId) {
  Blockly.checkStop(blockId);
  wss[_ws.url] = _ws;
}

export async function showFrame(_ws, frame, blockId) {
  Blockly.checkStop(blockId);
  await chkInit(_ws);
  const param = { f: frame };
  return await ws.send(_ws, group, subgroup, 'f', param);
}

export async function showBitmap(_ws, bitmap, blockId) {
  Blockly.checkStop(blockId);
  await chkInit(_ws);
  const param = { b: bitmapToHex(bitmap) };
  return await ws.send(_ws, group, subgroup, 'b', param);
}

export async function showGrayscaleBitmap(_ws, bitmap, blockId) {
  Blockly.checkStop(blockId);
  await chkInit(_ws);
  const param = { b: grayscaleBitmapToHex(bitmap) };
  return await ws.send(_ws, group, subgroup, 'g', param);
}

export async function showAnimation(_ws, animation, blockId) {
  Blockly.checkStop(blockId);
  await chkInit(_ws);
  const param = { a: animation };
  return await ws.send(_ws, group, subgroup, 'a', param);
}

export async function scrollText(_ws, text, font, direction, speed, timeout, blockId) {
  Blockly.checkStop(blockId);
  await chkInit(_ws);
  const param = { t: text, o: font, d: direction, s: speed, to: timeout };
  return await ws.send(_ws, group, subgroup, 's', param);
}

export async function clear(_ws, blockId) {
  Blockly.checkStop(blockId);
  await chkInit(_ws);
  const param = {};
  return await ws.send(_ws, group, subgroup, 'c', param);
}

export async function rgbLED(_ws, num, color, blockId) {
  Blockly.checkStop(blockId);
  await chkInit(_ws);
  const param = { n: num, c: color };
  return await ws.send(_ws, group, subgroup, 'r', param);

}

function bitmapToHex(bitmap) {
  let hex = [ 0, 0, 0, 0 ];
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
  hex[3] = hex[3] << 24;
  return hex;
}

function grayscaleBitmapToHex(bitmap) {
  let hex = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
  let ptr = 0;
  let ctr = 0;
  if (typeof bitmap == "string") {
    bitmap = bitmap.split(/\s*,\s*/);
  }
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 13; j++) {
      hex[ptr] = (hex[ptr] << 3) | (bitmap[i * 13 + j] & 7);
      ctr++;
      if (ctr == 10) {
        ptr++;
        ctr = 0;
      }
    }
  }
  hex[10] = hex[10] << 18;
  return hex;
}