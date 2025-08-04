import * as ws from '/lib/websocket.js';

const group = 'mot';
const subgroup = 'pca';

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
    throw new Error("PCA9685 of " + _ws.url + " is not initialized");
  }
}

export async function init(_ws, address) {
  Blockly.checkStop();
  wss[_ws.url] = _ws;
  const param = {
    'a': address
  };
  await ws.send(_ws, group, subgroup, 'i', param);
}

export async function init_i2c(_ws, address, sda, scl) {
  Blockly.checkStop();
  wss[_ws.url] = _ws;
  const param = {
    'a': address,
    'd': sda,
    'c': scl
  };
  await ws.send(_ws, group, subgroup, 'p', param);
}

export async function pulse_range(_ws, channel, min_pulse, max_pulse) {
  Blockly.checkStop();
  await chkInit(_ws);
  const param = {
    'c': channel,
    'i': min_pulse,
    'x': max_pulse
  };
  await ws.send(_ws, group, subgroup, 'r', param);
}

export async function set_servo(_ws, channel, angle) {
  Blockly.checkStop();
  await chkInit(_ws);
  const param = {
    'c': channel,
    'a': angle
  };
  await ws.send(_ws, group, subgroup, 's', param);
}
