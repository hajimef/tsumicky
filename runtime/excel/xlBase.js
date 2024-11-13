import { setWS, WS, run } from './lib/xlWebSocket.js';
import { _Workbook, _Workbooks, Workbooks, ActiveWorkbook } from './lib/xlWorkbook.js';
import { Sheets, ActiveSheet } from './lib/xlSheet.js';
import {
  ActiveCell, SelectedRange, Range, Cells,
  xlContinuous, xlDash, xlDashDot, xlDashDotDot, xlDot, xlDouble, xlLineStyleNone, xlSlantDashDot,
  xlHairline, xlThin, xlMedium, xlThick,
  xlAround, xlDiagonalDown, xlDiagonalUp, xlEdgeLeft, xlEdgeTop, xlEdgeBottom, xlEdgeRight, xlInsideVertical, xlInsideHorizontal
} from './lib/xlRange.js'
import { cssToRGB, rgbToCSS, rgbValueToCSS } from '../util.js';
export { setWS, WS, run, Workbooks, ActiveWorkbook, Sheets, ActiveSheet, ActiveCell, SelectedRange, Range, Cells };
export { xlContinuous, xlDash, xlDashDot, xlDashDotDot, xlDot, xlDouble, xlLineStyleNone, xlSlantDashDot };
export { xlHairline, xlThin, xlMedium, xlThick };
export { xlAround, xlDiagonalDown, xlDiagonalUp, xlEdgeLeft, xlEdgeTop, xlEdgeBottom, xlEdgeRight, xlInsideVertical, xlInsideHorizontal };
export { cssToRGB, rgbToCSS, rgbValueToCSS };

export function setup() {}
export function dispose() {
  Workbooks().dispose();
}

/*
export function cssToRGB(cssColor) {
  let r = [];
  for (let i = 0; i < 3; i++) {
    r.push(parseInt(cssColor.substring(i * 2 + 1, i * 2 + 3), 16));
  }
  return r;
} 

export function rgbToCSS(rgbColor) {
  let c = '#';
  for (let i = 0; i < 3; i++) {
    let cp = "0" + rgbColor[i].toString(16)
    c += cp.substring(cp.length - 2);
  }
  return c;
}
*/