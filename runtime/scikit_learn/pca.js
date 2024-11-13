import { ws, __ws } from '../excel/lib/xlWebSocket.js';

export function setup() {
}

export async function dispose() {
  Blockly.checkStop();
  let r = await ws.send(__ws, "sl", "pca", "d", {});
  return r;
}

export async function init(n_components) {
  Blockly.checkStop();
  let param = { "n": n_components };
  let r = await ws.send(__ws, "sl", "pca", "i", param);
  return r;
}

export async function transform() {
  Blockly.checkStop();
  let r = await ws.send(__ws, "sl", "pca", "t", {});
  return r;
}

export async function rdim() {
  Blockly.checkStop();
  let r = await ws.send(__ws, "sl", "pca", "rd", {});
  return r;
}

export async function ev(range) {
  Blockly.checkStop();
  let params = range.getParams();
  let r = await ws.send(__ws, "sl", "pca", "ev", params);
  return r;
}

export async function evr(range) {
  Blockly.checkStop();
  let params = range.getParams();
  let r = await ws.send(__ws, "sl", "pca", "evr", params);
  return r;
}

export async function components(range) {
  Blockly.checkStop();
  let params = range.getParams();
  let r = await ws.send(__ws, "sl", "pca", "c", params);
  return r;
}