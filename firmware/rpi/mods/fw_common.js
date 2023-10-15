import { createRequire } from 'node:module';
import { networkInterfaces } from 'os';

export var require = createRequire(import.meta.url);
export var piGpio = require('pigpio').Gpio;

const ethName = 'wlan0';

export const NO_RETURN = 0;
export const USE_RETURN = 1;
export const ERR_RETURN = 2;
export const NOT_EXIST = 3;
var funcTable = {}

export function addCallback(group, subgrp, command, func) {
  if (!(group in funcTable)) {
    funcTable[group] = {};
  }
  if (!(subgrp in funcTable[group])) {
    funcTable[group][subgrp] = {};
  }
  funcTable[group][subgrp][command] = func;
}

export async function runCallback(group, subgrp, command, param) {
  var ret;
  if (group in funcTable && subgrp in funcTable[group] && command in funcTable[group][subgrp]) {
    ret = await funcTable[group][subgrp][command](param);
  }
  else {
    ret = { 's': NOT_EXIST };
  }
  var result = { "g": group, "sg": subgrp, "c": command };
  if (ret.s == NO_RETURN) {
    result.v = 1;
  }
  else if (ret.s == USE_RETURN) {
    result.v = ret.v;
  }
  else if (ret.s == ERR_RETURN) {
    result.e = 1;
    result.msg = ret.m;
  }
  else if (ret.s == NOT_EXIST) {
    result.ne = 1;
  }
  return JSON.stringify(result);
}

export function myIpAddress() {
  const nets = networkInterfaces();
  const net = nets[ethName]?.find((v) => v.family == "IPv4");
  return net ? net.address.toString() : null;
}