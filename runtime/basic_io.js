import * as ws from '/lib/websocket.js';
const BASIC_IO_GROUP = 'bio';

export function setup() {
}

export async function dispose() {
}

export async function connect(host, port, prot, blockId) {
    Blockly.checkStop(blockId);
    let _ws;
    _ws = await ws.connect(host, port, prot);
    Blockly.__wsobjs.push(_ws);
    return _ws;
}

export async function assignPin(_ws, pin_no, blockId) {
    Blockly.checkStop(blockId);
    let pin = new ws.Pin(_ws, pin_no);
    return pin;
}

export async function getModelName(_ws, blockId) {
  Blockly.checkStop(blockId);
  var value = await ws.send(_ws, BASIC_IO_GROUP, null, 'mn', {});
  return value;
}

export async function pinMode(pin, mode, blockId) {
  Blockly.checkStop(blockId);
  var param = { 'p': pin.no, 'm': mode };
  await ws.send(pin.ws, BASIC_IO_GROUP, null, 'pm', param);
}

export async function digitalWrite(pin, value, blockId) {
  Blockly.checkStop(blockId);
  var param = { 'p': pin.no, 'v': value };
  await ws.send(pin.ws, BASIC_IO_GROUP, null, 'dw', param);
}

export async function digitalRead(pin, blockId) {
  Blockly.checkStop(blockId);
  var param = { 'p': pin.no };
  var value = await ws.send(pin.ws, BASIC_IO_GROUP, null, 'dr', param);
  return value;
}

export async function analogRead(pin, blockId) {
  Blockly.checkStop(blockId);
  var param = { 'p': pin.no };
  var value = await ws.send(pin.ws, BASIC_IO_GROUP, null, 'ar', param);
  return value;
}

export async function hl(hl_value, blockId) {
  Blockly.checkStop(blockId);
  return hl_value;
}

export async function map(input, input_min, input_max, output_min, output_max, blockId) {
  Blockly.checkStop(blockId);
  return input * (output_max - output_min) / (input_max - input_min);
}
