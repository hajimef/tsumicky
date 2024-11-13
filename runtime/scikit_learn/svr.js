import { ws, __ws } from '../excel/lib/xlWebSocket.js';

export function setup() {
}

export async function dispose() {
  Blockly.checkStop();
  let r = await ws.send(__ws, "sl", "lsvr", "d", {});
  return r;
}

export async function linear_svr_init(c, epsilon) {
  Blockly.checkStop();
  let param = { "c": c, "e": epsilon };
  let r = await ws.send(__ws, "sl", "svr", "li", param);
  return r;
}

export async function fit() {
  Blockly.checkStop();
  let r = await ws.send(__ws, "sl", "svr", "f", {});
  return r;
}

export async function coef() {
  Blockly.checkStop();
  let r = await ws.send(__ws, "sl", "svr", "c", {});
  return r;
}

export async function intercept() {
  Blockly.checkStop();
  let r = await ws.send(__ws, "sl", "svr", "it", {});
  return r;
}

export async function support_vectors() {
  Blockly.checkStop();
  let r = await ws.send(__ws, "sl", "svr", "sv", {});
  return r;
}

export async function support() {
  Blockly.checkStop();
  let r = await ws.send(__ws, "sl", "svr", "su", {});
  return r;
}
