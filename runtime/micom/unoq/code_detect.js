import * as ws from '../../../lib/websocket.js';
import { cameras } from './camera.js';

const group = 'uq';
const subgroup = 'cd';
let wss = {};
let detectors = {};
let windows = {};

export function setup() {
}

export async function dispose(_ws) {
  for (let ws_name in wss) {
    await ws.send(wss[ws_name], group, subgroup, 'd', {});
    delete wss[ws_name];
    //delete cameras[ws_name];
    delete detectors[ws_name];
  }
  for (const w of Object.keys(windows)) {
    const win = windows[w];
    if (win) {
      win.close();
    }
    delete windows[w];
  }
}

export async function init_detector(_ws, camera, display, blockId) {
  Blockly.checkStop(blockId);
  if (!cameras[_ws.url].hasOwnProperty(camera)) {
    Blockly.isStop = true;
    throw new Error("camera for UNO Q code detection of " + _ws.url + " is not initialized");
  }
  if (!wss.hasOwnProperty(_ws.url)) {
    wss[_ws.url] = _ws;
  }
  if (!detectors.hasOwnProperty(_ws.url)) {
    detectors[_ws.url] = {};
  }
  if (display) {
    const u0 = new URL(_ws.url);
    const x = cameras[_ws.url][camera].x;
    const y = cameras[_ws.url][camera].y;
    const u = 'http://' + u0.hostname + ':7000/code_detector/?x=' + x + '&y=' + y;
    windows[camera] = window.open(u, camera, 'width=' + (x + 20) + ',height=' + (y + 20));
  }
  const param = { c: camera, d: display };
  const detector = await ws.send(_ws, group, subgroup, 'id', param);
  detectors[_ws.url][detector] = detector;
  return detector;
}

export async function result(_ws, detector, blockId) {
  Blockly.checkStop(blockId);
  if (!wss.hasOwnProperty(_ws.url)) {
    Blockly.isStop = true;
    throw new Error("UNO Q code detection of " + _ws.url + " is not initialized");
  }
  if (!detectors[_ws.url].hasOwnProperty(detector)) {
    Blockly.isStop = true;
    throw new Error("detector for UNO Q code detection of " + _ws.url + " is not initialized");
  }
  const param = { d: detector };
  return await ws.send(_ws, group, subgroup, 'r', param);
}

export async function reset_seen_all(_ws, detector, blockId) {
  Blockly.checkStop(blockId);
  if (!wss.hasOwnProperty(_ws.url)) {
    Blockly.isStop = true;
    throw new Error("UNO Q code detection of " + _ws.url + " is not initialized");
  }
  if (!detectors[_ws.url].hasOwnProperty(detector)) {
    Blockly.isStop = true;
    throw new Error("detector for UNO Q code detection of " + _ws.url + " is not initialized");
  }
  const param = { d: detector };
  return await ws.send(_ws, group, subgroup, 'rsa', param);
}

export async function reset_seen(_ws, detector, value, blockId) {
  Blockly.checkStop(blockId);
  if (!wss.hasOwnProperty(_ws.url)) {
    Blockly.isStop = true;
    throw new Error("UNO Q code detection of " + _ws.url + " is not initialized");
  }
  if (!detectors[_ws.url].hasOwnProperty(detector)) {
    Blockly.isStop = true;
    throw new Error("detector for UNO Q code detection of " + _ws.url + " is not initialized");
  }
  const param = { d: detector, v: value };
  return await ws.send(_ws, group, subgroup, 'rs', param);
}
