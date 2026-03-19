import * as ws from '../../../lib/websocket.js';
import { cameras, cameras_to_detector, disposed_detector } from './camera.js';

const group = 'uq';
const subgroup = 'od';
export let wss = {};
let detectors = {};
let windows = {};

export function setup() {
}

export async function dispose(_ws) {
  for (let ws_name in wss) {
    await ws.send(wss[ws_name], group, subgroup, 'd', {});
    delete wss[ws_name];
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

export async function init_detector(_ws, camera, confidence, display, blockId) {
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
    const u = 'http://' + u0.hostname + ':4912/embed';
    windows[camera] = window.open(u, camera, 'width=' + (x + 48) + ',height=' + (y + 160));
  }
  const param = { c: camera, n: confidence, d: display };
  const detector = await ws.send(_ws, group, subgroup, 'id', param);
  detectors[_ws.url][detector] = detector;
  if (!cameras_to_detector.hasOwnProperty(_ws.url)) {
    cameras_to_detector[_ws.url] = {};
  }
  cameras_to_detector[_ws.url][camera] = detector;
  return detector;
}

export async function on_detect(_ws, detector, cb, blockId) {
  Blockly.checkStop(blockId);
  if (!detectors[_ws.url].hasOwnProperty(detector)) {
    Blockly.isStop = true;
    throw new Error("video object detector of UNO Q of " + _ws.url + " is not initialized");
  }
  ws.addCallback(_ws, group, subgroup, 'c', cb);
}

export async function stop_detector(_ws, detector, blockId) {
  Blockly.checkStop(blockId);
  if (!detectors[_ws.url].hasOwnProperty(detector)) {
    Blockly.isStop = true;
    throw new Error("video object detector of UNO Q of " + _ws.url + " is not initialized");
  }
  const param = { d: detector };
  await ws.send(_ws, group, subgroup, 's', param);
}

export function count_objects(results) {
  let count = 0;

  for (let k in results) {
    count += results[k].length;
  }
  return count;
}