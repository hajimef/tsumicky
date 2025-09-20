import { ws, __ws } from './msWebSocket.js';
import { sleep } from '../basic.js';

const group = 'ms';
const subgroup = 'tur';

export function setup() {}

export async function dispose() {
  Blockly.checkStop();
  await ws.send(__ws, group, subgroup, 'd', {});
}

export async function init(width, height, startx, starty) {
  Blockly.checkStop();
  const param = { 'w': width, 'h': height, 'sx': startx, 'sy': starty };
  await ws.send(__ws, group, subgroup, 'i', param);
}

export async function color(color, fillcolor) {
  Blockly.checkStop();
  const param = { 'c': color, 'fc': fillcolor };
  await ws.send(__ws, group, subgroup, 'c', param);
}

export async function penDown() {
  Blockly.checkStop();
  await ws.send(__ws, group, subgroup, 'pd', {});
}

export async function penUp() {
  Blockly.checkStop();
  await ws.send(__ws, group, subgroup, 'pu', {});
}

export async function penSize(width) {
  Blockly.checkStop();
  const param = { 'w': width };
  await ws.send(__ws, group, subgroup, 'ps', param);
}

export async function forward(distance) {
  Blockly.checkStop();
  const param = { 'd': distance };
  await ws.send(__ws, group, subgroup, 'f', param);
}

export async function backward(distance) {
  Blockly.checkStop();
  const param = { 'd': distance };
  await ws.send(__ws, group, subgroup, 'b', param);
}

export async function right(angle) {
  Blockly.checkStop();
  const param = { 'a': angle };
  await ws.send(__ws, group, subgroup, 'r', param);
}

export async function left(angle) {
  Blockly.checkStop();
  const param = { 'a': angle };
  await ws.send(__ws, group, subgroup, 'l', param);
}

export async function goTo(x, y) {
  Blockly.checkStop();
  const param = { 'x': x, 'y': y };
  await ws.send(__ws, group, subgroup, 'g', param);
}

export async function circle(radius, angle) {
  Blockly.checkStop();
  const param = { 'r': radius, 'a': angle };
  await ws.send(__ws, group, subgroup, 'ci', param);
}

export async function speed(speed) {
  Blockly.checkStop();
  const param = { 's': speed };
  await ws.send(__ws, group, subgroup, 's', param);
}

export async function beginFill() {
  Blockly.checkStop();
  await ws.send(__ws, group, subgroup, 'bf', {});
}

export async function endFill() {
  Blockly.checkStop();
  await ws.send(__ws, group, subgroup, 'ef', {});
}

export async function mainLoop() {
  Blockly.checkStop();
  await ws.send(__ws, group, subgroup, 'ml', {});
}

export async function setHeading(angle) {
  Blockly.checkStop();
  const param = { 'a': angle };
  await ws.send(__ws, group, subgroup, 'sh', param);
}

export async function dot(size, color) {
  Blockly.checkStop();
  const param = { 's': size, 'c': color };
  await ws.send(__ws, group, subgroup, 'dt', param);
}

export async function reset() {
  Blockly.checkStop();
  await ws.send(__ws, group, subgroup, 'rs', {});
}

export async function showHide(visible) {
  Blockly.checkStop();
  const param = { 'v': visible };
  await ws.send(__ws, group, subgroup, 'sv', param);
}

export async function getX() {
  Blockly.checkStop();
  const ret = await ws.send(__ws, group, subgroup, 'gx', {});
  return ret;
}

export async function getY() {
  Blockly.checkStop();
  const ret = await ws.send(__ws, group, subgroup, 'gy', {});
  return ret;
}

export async function getHeading() {
  Blockly.checkStop();
  const ret = await ws.send(__ws, group, subgroup, 'gh', {});
  return ret;
}

export async function isDown() {
  Blockly.checkStop();
  const ret = await ws.send(__ws, group, subgroup, 'id', {});
  return ret;
}

export async function stamp() {
  Blockly.checkStop();
  await ws.send(__ws, group, subgroup, 'st', {});
}

export async function shape(_shape) {
  Blockly.checkStop();
  const param = { 's': _shape };
  await ws.send(__ws, group, subgroup, 'sa', param);
}

export async function write(_text, _move, _align, _font, _size, _style) {
  Blockly.checkStop();
  const param = { 't': _text, 'm': _move, 'a': _align, 'f': _font, 'z': _size, 's': _style };
  await ws.send(__ws, group, subgroup, 'w', param);
}

export async function update() {
  Blockly.checkStop();
  await ws.send(__ws, group, subgroup, 'u', {});
}

export async function end() {
  Blockly.checkStop();
  while (true) {
    await ws.send(__ws, group, subgroup, 'u', {});
    await sleep(50);
  }
}
