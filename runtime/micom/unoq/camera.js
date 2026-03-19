import * as ws from '../../../lib/websocket.js';

const group = 'uq';
const subgroup = 'cm';
export let wss = {};
export let cameras = {};
export let cameras_to_detector = {};
export let disposed_detector = {};

export function setup() {
}

export async function dispose(_ws) {
  for (let ws_name in wss) {
    let cds = cameras_to_detector[ws_name];
    for (let c in cds) {
      await ws.send(wss[ws_name], group, 'od', 's', { d: cds[c] });
      disposed_detector[cds[c]] = true;
      delete cameras_to_detector[ws_name][c]
    }
    await ws.send(wss[ws_name], group, subgroup, 'd', {});
    delete wss[ws_name];
    delete cameras[ws_name];
  }
}

export async function init_usb_camera(_ws, num, x, y, blockId) {
  Blockly.checkStop(blockId);
  if (!wss.hasOwnProperty(_ws.url)) {
    wss[_ws.url] = _ws;
    if (!cameras.hasOwnProperty(_ws.url)) {
      cameras[_ws.url] = {};
    }
  }
  const param = { n: num, x: x, y: y };
  const camera = await ws.send(_ws, group, subgroup, 'ic', param);
  cameras[_ws.url][camera] = { "camera": camera, "x": x, "y": y };
  return camera;
}


