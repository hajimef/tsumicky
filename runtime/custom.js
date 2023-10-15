import * as ws from '/lib/websocket.js';

export function setup() {
}

export function dispose() {
}

function convPin(param) {
  for (let k in param) {
    if (param[k].constructor.name == 'Pin') {
      param[k] = param[k].no;
    }
  }
  return param;
}
export async function runCustomFuncStatement(_ws, group, subgroup, command, param) {
  Blockly.checkStop();
  await ws.send(_ws, group, subgroup, command, convPin(param));
}

export async function runCustomFuncValue(_ws, group, subgroup, command, param) {
  Blockly.checkStop();
  return await ws.send(_ws, group, subgroup, command, convPin(param));
}

