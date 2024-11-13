import { ws, __ws } from '../excel/lib/xlWebSocket.js';

export function setup() {
}

export async function dispose() {
  Blockly.checkStop();
  let r = await ws.send(__ws, "mpl", "b", "d", {});
  return r;
}

export async function pyplot_subplots(row, col, width, height) {
  Blockly.checkStop();
  let param = { "r": row, "c": col, "w": width, "h": height };
  let r = await ws.send(__ws, "mpl", "b", "sp", param);
  return r;
}

export async function pyplot_show() {
  Blockly.checkStop();
  let r = await ws.send(__ws, "mpl", "b", "sh", {});
  return r;
}

export async function pyplot_draw() {
  Blockly.checkStop();
  let r = await ws.send(__ws, "mpl", "b", "dr", {});
  return r;
}

export async function pyplot_pause() {
  Blockly.checkStop();
  let r = await ws.send(__ws, "mpl", "b", "pa", {});
  return r;
}

export async function pyplot_cla(row, col) {
  Blockly.checkStop();
  let param = { "r": row - 1, "c": col - 1 };
  let r = await ws.send(__ws, "mpl", "b", "ca", param);
  return r;
}

export async function pyplot_close() {
  Blockly.checkStop();
  let r = await ws.send(__ws, "mpl", "b", "cl", {});
  return r;
}

