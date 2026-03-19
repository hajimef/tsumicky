import { ws, __ws } from './msWebSocket.js';
import { sleep } from '../basic.js';

const group = 'ms';
const subgroup = 'tur';

export function setup() {}

export async function dispose() {
  Blockly.checkStop();
  await ws.send(__ws, group, subgroup, 'd', {});
}

export async function init(width, height, startx, starty, blockId) {
  Blockly.checkStop(blockId);
  const param = { 'w': width, 'h': height, 'sx': startx, 'sy': starty };
  await ws.send(__ws, group, subgroup, 'i', param);
}

export async function color(color, fillcolor, blockId) {
  Blockly.checkStop(blockId);
  const param = { 'c': color, 'fc': fillcolor };
  await ws.send(__ws, group, subgroup, 'c', param);
}

export async function penDown(blockId) {
  Blockly.checkStop(blockId);
  await ws.send(__ws, group, subgroup, 'pd', {});
}

export async function penUp(blockId) {
  Blockly.checkStop(blockId);
  await ws.send(__ws, group, subgroup, 'pu', {});
}

export async function penSize(width, blockId) {
  Blockly.checkStop(blockId);
  const param = { 'w': width };
  await ws.send(__ws, group, subgroup, 'ps', param);
}

export async function forward(distance, blockId) {
  Blockly.checkStop(blockId);
  const param = { 'd': distance };
  await ws.send(__ws, group, subgroup, 'f', param);
}

export async function backward(distance, blockId) {
  Blockly.checkStop(blockId);
  const param = { 'd': distance };
  await ws.send(__ws, group, subgroup, 'b', param);
}

export async function right(angle, blockId) {
  Blockly.checkStop(blockId);
  const param = { 'a': angle };
  await ws.send(__ws, group, subgroup, 'r', param);
}

export async function left(angle, blockId) {
  Blockly.checkStop(blockId);
  const param = { 'a': angle };
  await ws.send(__ws, group, subgroup, 'l', param);
}

export async function goTo(x, y, blockId) {
  Blockly.checkStop(blockId);
  const param = { 'x': x, 'y': y };
  await ws.send(__ws, group, subgroup, 'g', param);
}

export async function circle(radius, angle, blockId) {
  Blockly.checkStop(blockId);
  const param = { 'r': radius, 'a': angle };
  await ws.send(__ws, group, subgroup, 'ci', param);
}

export async function speed(speed, blockId) {
  Blockly.checkStop(blockId);
  const param = { 's': speed };
  await ws.send(__ws, group, subgroup, 's', param);
}

export async function beginFill(blockId) {
  Blockly.checkStop(blockId);
  await ws.send(__ws, group, subgroup, 'bf', {});
}

export async function endFill(blockId) {
  Blockly.checkStop(blockId);
  await ws.send(__ws, group, subgroup, 'ef', {});
}

export async function mainLoop(blockId) {
  Blockly.checkStop(blockId);
  await ws.send(__ws, group, subgroup, 'ml', {});
}

export async function setHeading(angle, blockId) {
  Blockly.checkStop(blockId);
  const param = { 'a': angle };
  await ws.send(__ws, group, subgroup, 'sh', param);
}

export async function dot(size, color, blockId) {
  Blockly.checkStop(blockId);
  const param = { 's': size, 'c': color };
  await ws.send(__ws, group, subgroup, 'dt', param);
}

export async function reset(blockId) {
  Blockly.checkStop(blockId);
  await ws.send(__ws, group, subgroup, 'rs', {});
}

export async function showHide(visible, blockId) {
  Blockly.checkStop(blockId);
  const param = { 'v': visible };
  await ws.send(__ws, group, subgroup, 'sv', param);
}

export async function getX(blockId) {
  Blockly.checkStop(blockId);
  const ret = await ws.send(__ws, group, subgroup, 'gx', {});
  return ret;
}

export async function getY(blockId) {
  Blockly.checkStop(blockId);
  const ret = await ws.send(__ws, group, subgroup, 'gy', {});
  return ret;
}

export async function getHeading(blockId) {
  Blockly.checkStop(blockId);
  const ret = await ws.send(__ws, group, subgroup, 'gh', {});
  return ret;
}

export async function isDown(blockId) {
  Blockly.checkStop(blockId);
  const ret = await ws.send(__ws, group, subgroup, 'id', {});
  return ret;
}

export async function stamp(blockId) {
  Blockly.checkStop(blockId);
  await ws.send(__ws, group, subgroup, 'st', {});
}

export async function shape(_shape, blockId) {
  Blockly.checkStop(blockId);
  const param = { 's': _shape };
  await ws.send(__ws, group, subgroup, 'sa', param);
}

export async function write(_text, _move, _align, _font, _size, _style, blockId) {
  Blockly.checkStop(blockId);
  const param = { 't': _text, 'm': _move, 'a': _align, 'f': _font, 'z': _size, 's': _style };
  await ws.send(__ws, group, subgroup, 'w', param);
}

export async function update(blockId) {
  Blockly.checkStop(blockId);
  await ws.send(__ws, group, subgroup, 'u', {});
}

export async function end(blockId) {
  Blockly.checkStop(blockId);
  while (true) {
    await ws.send(__ws, group, subgroup, 'u', {});
    await sleep(50);
  }
}