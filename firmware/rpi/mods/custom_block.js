import { addCallback, piGpio, myIpAddress, NO_RETURN, USE_RETURN, ERR_RETURN } from './fw_common.js';

const custom_block_group = "cu";

var pin, interval, intId, hl, isBlink = false;

export function setup() {
    addCallback(custom_block_group, "", "s", blinkStart);
    addCallback(custom_block_group, "", "e", blinkEnd);
    addCallback(custom_block_group, "", "i", ipAddress);
}

export function shutdown() {
  if (intId) {
    if (typeof pin != 'undefined') {
      pin.digitalWrite(0);
    }
    clearInterval(intId)
    pin = undefined;
  }
}

async function blinkStart(param) {
  try {
    pin = new piGpio(param.p);
    interval = param.i;
    if (intId) {
      clearInterval(intId);
    }
    intId = setInterval(function() {
      hl = 1 - hl;
      pin.digitalWrite(hl);
    }, interval);
    isBlink = true;
    hl = 1;
    pin.digitalWrite(hl);
    return { "s": NO_RETURN };
  }
  catch (e) {
    return { "s": ERR_RETURN, "m": e.toString() };
  }
}

async function blinkEnd(param) {
  try {
    if (isBlink) {
      isBlink = false;
      pin.digitalWrite(0);
      clearInterval(intId);
      intId = undefined;
    }
    return { "s": NO_RETURN };
  }
  catch (e) {
    return { "s": ERR_RETURN, "m": e.toString() };
  }
}

async function ipAddress(param) {
  try {
    return { "s": USE_RETURN, "v": (myIpAddress()).toString() };
  }
  catch (e) {
    return { "s": ERR_RETURN, "m": e.toString() };
  }
}
