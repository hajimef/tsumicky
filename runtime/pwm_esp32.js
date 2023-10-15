import * as ws from '/lib/websocket.js';

const PWM_ESP32_GROUP = 'pwm_e32';
var ch_pin = {};

export function setup() {
}

export function dispose() {
}

export async function ledcSetup(_ws, ch, freq, bit) {
  Blockly.checkStop();
  var param = { 'c': ch, 'f': freq, 'b': bit };
  await ws.send(_ws, PWM_ESP32_GROUP, null, 's', param);
};

export async function ledcAttachPin(_ws, pin, ch) {
  Blockly.checkStop();
  var param = { 'p': pin.no, 'c': ch };
  if (!ch_pin.hasOwnProperty(_ws.url)) {
    ch_pin[_ws.url] = {};
  }
  ch_pin[_ws.url][ch] = pin;
  await ws.send(pin.ws, PWM_ESP32_GROUP, null, 'a', param);
};

export async function ledcWrite(_ws, ch, duty) {
  Blockly.checkStop();
  var param = { 'c': ch, 'd': duty };
  var pin = ch_pin[_ws.url][ch];
  await ws.send(pin.ws, PWM_ESP32_GROUP, null, 'w', param);
};
