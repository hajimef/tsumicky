import { ws, __ws } from './xlWebSocket.js';
import { ActiveWorkbook, Workbooks } from './xlWorkbook.js';
import { ActiveSheet } from './xlSheet.js';

export const xlContinuous = 1;
export const xlDash = -4115;
export const xlDashDot = 4;
export const xlDashDotDot = 5;
export const xlDot = -4118;
export const xlDouble = -4119;
export const xlLineStyleNone = -4142;
export const xlSlantDashDot = 13;

export const xlHairline = 1;
export const xlThin = 2;
export const xlMedium = -4138;
export const xlThick = 4;

export const xlAround = 0;
export const xlDiagonalDown = 5;
export const xlDiagonalUp = 6;
export const xlEdgeLeft = 7;
export const xlEdgeTop = 8;
export const xlEdgeBottom = 9;
export const xlEdgeRight = 10;
export const xlInsideVertical = 11;
export const xlInsideHorizontal = 12;

export const xlUnderlineStyleNone = -4142;
export const xlUnderlineStyleDouble = -4119;
export const xlUnderlineStyleDoubleAccounting = 5;
export const xlUnderlineStyleSingle = 2;
export const xlUnderlineStyleSingleAccounting = 4;

const RNG_ACTIVE = 1;
const RNG_SELECTED = 2;

let border_type_rev = {}
border_type_rev[xlHairline] = {}
border_type_rev[xlHairline][xlContinuous] = 'Hairline';
border_type_rev[xlThin] = {}
border_type_rev[xlThin][xlLineStyleNone] = 'none';
border_type_rev[xlThin][xlContinuous] = 'thin_solid';
border_type_rev[xlThin][xlDot] = 'thin_dot';
border_type_rev[xlThin][xlDash] = 'thin_dash';
border_type_rev[xlThin][xlDashDot] = 'thin_dash_dot';
border_type_rev[xlThin][xlDashDotDot] = 'thin_dash_dot_dot';
border_type_rev[xlMedium] = {}
border_type_rev[xlMedium][xlContinuous] = 'medium_solid';
border_type_rev[xlMedium][xlSlantDashDot] = 'medium_slant_dash_dot';
border_type_rev[xlMedium][xlDash] = 'medium_dash';
border_type_rev[xlMedium][xlDashDot] = 'medium_dash_dot';
border_type_rev[xlMedium][xlDashDotDot] = 'medium_dash_dot_dot';
border_type_rev[xlThick] = {}
border_type_rev[xlThick][xlContinuous] = 'thick_solid';
border_type_rev[xlThick][xlDouble] = 'double';

export class _Range {
  constructor(workbook, sheet, adrs, r1, c1, r2, c2) {
    this.workbook = workbook;
    this.sheet = sheet;
    this.adrs = adrs;
    this.r1 = r1;
    this.c1 = c1;
    this.r2 = r2;
    this.c2 = c2;
    if (r1 != null && r2 != null && c1 != null && c2 != null) {
      this.rc = Math.abs(r2 - r1) + 1
      this.cc = Math.abs(c2 - c1) + 1
    }
    else {
      this.rc = null;
      this.cc = null;
    }
  }

  getParams(p) {
    let param = {};
    param.w = this.workbook.name;
    param.s = this.sheet.index;
    param.a = this.adrs;
    param.r1 = this.r1;
    param.r2 = this.r2;
    param.c1 = this.c1;
    param.c2 = this.c2;
    return param;
  }

  get Parent() {
    return this.sheet;
  }

  async getRCInfo() {
    let param = this.getParams();
    let r = await ws.send(__ws, "xl", "rn", "ri", param);
    this.adrs = r.a;
    this.r1 = r.r;
    this.c1 = r.c;
    this.r2 = this.r1 + r.rc - 1;
    this.c2 = this.c1 + r.cc - 1;
    this.rc = r.rc;
    this.cc = r.cc;
  }

  async activeCell(mode) {
    let r = await ws.send(__ws, "xl", "rn", (mode == RNG_ACTIVE) ? "ac" : "sr", {});
    this.workbook = Workbooks(r.b);
    this.sheet = Workbooks(r.b).Sheets(r.s);
    this.adrs = r.a;
    this.r1 = r.r
    this.c1 = r.c;
    this.rc = r.rc;
    this.cc = r.cc;
    this.r2 = this.r1 + this.rc - 1;
    this.c2 = this.c1 + this.cc - 1;
  }

  async address() {
    Blockly.checkStop();
    if (this.adrs == null) {
      await this.getRCInfo();
    }
    return this.adrs;
  }

  async row() {
    Blockly.checkStop();
    if (this.r1 == null) {
      await this.getRCInfo();
    }
    return this.r1;
  }

  async column() {
    Blockly.checkStop();
    if (this.c1 == null) {
      await this.getRCInfo();
    }
    return this.c1;
  }

  async rowEnd() {
    Blockly.checkStop();
    if (this.r2 == null) {
      await this.getRCInfo();
    }
    return this.r2;
  }

  async columnEnd() {
    Blockly.checkStop();
    if (this.c2 == null) {
      await this.getRCInfo();
    }
    return this.c2;
  }

  async rowCount() {
    Blockly.checkStop();
    if (this.rc == null) {
      await this.getRCInfo();
    }
    return this.rc;
  }

  async columnCount() {
    Blockly.checkStop();
    if (this.rc == null) {
      await this.getRCInfo();
    }
    return this.cc;
  }

  async setValue(v) {
    Blockly.checkStop();
    let param = this.getParams();
    param.v = v;
    let r = await ws.send(__ws, "xl", "rn", "scv", param);
    return r;
  }

  async getValue() {
    Blockly.checkStop();
    let param = this.getParams();
    let v = await ws.send(__ws, "xl", "rn", "gcv", param);
    return v;
  }

  async setFormula(formula) {
    Blockly.checkStop();
    let param = this.getParams();
    param.f = formula;
    let r = await ws.send(__ws, "xl", "rn", "scf", param);
    return r;
  }

  async getFormula() {
    Blockly.checkStop();
    let param = this.getParams();
    let v = await ws.send(__ws, "xl", "rn", "gcf", param);
    return v;
  }

  async setNumberFormat(format) {
    Blockly.checkStop();
    let param = this.getParams();
    param.f = format;
    let r = await ws.send(__ws, "xl", "rn", "scnf", param);
    return r;
  }

  async getNumberFormat() {
    Blockly.checkStop();
    let param = this.getParams();
    let v = await ws.send(__ws, "xl", "rn", "gcnf", param);
    return v;
  }

  async setFontColor(color) {
    Blockly.checkStop();
    let param = this.getParams();
    param.c = color;
    let r = await ws.send(__ws, "xl", "rn", "scfc", param);
    return r;
  }

  async getFontColor() {
    Blockly.checkStop();
    let param = this.getParams();
    let v = await ws.send(__ws, "xl", "rn", "gcfc", param);
    return v;
  }

  async setFontName(fontname) {
    Blockly.checkStop();
    let param = this.getParams();
    param.f = fontname;
    let r = await ws.send(__ws, "xl", "rn", "scfn", param);
    return r;
  }

  async getFontName() {
    Blockly.checkStop();
    let param = this.getParams();
    let v = await ws.send(__ws, "xl", "rn", "gcfn", param);
    return v;
  }

  async setFontSize(p) {
    Blockly.checkStop();
    let param = this.getParams();
    param.p = p;
    let r = await ws.send(__ws, "xl", "rn", "scfs", param);
    return r;
  }

  async getFontSize() {
    Blockly.checkStop();
    let param = this.getParams();
    let p = await ws.send(__ws, "xl", "rn", "gcfs", param);
    return p;
  }

  async setFontBold(is_bold) {
    Blockly.checkStop();
    let param = this.getParams();
    param.b = is_bold;
    let r = await ws.send(__ws, "xl", "rn", "scfb", param);
    return r;
  }

  async getFontBold() {
    Blockly.checkStop();
    let param = this.getParams();
    let p = await ws.send(__ws, "xl", "rn", "gcfb", param);
    return p;
  }

  async setFontItalic(is_italic) {
    Blockly.checkStop();
    let param = this.getParams();
    param.i = is_italic;
    let r = await ws.send(__ws, "xl", "rn", "scfi", param);
    return r;
  }

  async getFontItalic() {
    Blockly.checkStop();
    let param = this.getParams();
    let p = await ws.send(__ws, "xl", "rn", "gcfi", param);
    return p;
  }

  async setInteriorColor(c) {
    Blockly.checkStop();
    let param = this.getParams();
    param.c = c;
    let r = await ws.send(__ws, "xl", "rn", "scic", param);
    return r;
  }

  async getInteriorColor() {
    Blockly.checkStop();
    let param = this.getParams();
    let v = await ws.send(__ws, "xl", "rn", "gcic", param);
    return v;
  }

  async setBorderType(position, weight, linestyle) {
    Blockly.checkStop();
    let param = this.getParams();
    param.p = position;
    param.we = weight;
    param.ls = linestyle;
    let r = await ws.send(__ws, "xl", "rn", "scbt", param);
    return r;
  }

  async getBorderType(position) {
    Blockly.checkStop();
    let param = this.getParams();
    param.p = position;
    let v = await ws.send(__ws, "xl", "rn", "gcbt", param);
    if (border_type_rev.hasOwnProperty(v.w) && border_type_rev[v.w].hasOwnProperty(v.s)) {
      return border_type_rev[v.w][v.s];
    }
    else if (v.w == -1 || v.s == -1) {
      return "mixed";
    }
    else {
      return "unknown";
    }
  }

  async setBorderColor(position, color) {
    Blockly.checkStop();
    let param = this.getParams();
    param.p = position;
    param.c = color;
    let r = await ws.send(__ws, "xl", "rn", "scbc", param);
    return r;
  }

  async getBorderColor(position) {
    Blockly.checkStop();
    let param = this.getParams();
    param.p = position;
    let v = await ws.send(__ws, "xl", "rn", "gcbc", param);
    return v;
  }
}

export async function ActiveCell() {
  let rng = new _Range(null, null, null, null, null, null, null);
  await rng.activeCell(RNG_ACTIVE);
  return rng;
}

export async function SelectedRange() {
  let rng = new _Range(null, null, null, null, null, null, null);
  await rng.activeCell(RNG_SELECTED);
  return rng;
}

export function Range(adrs) {
  let rng = new _Range(ActiveWorkbook(), ActiveSheet(), adrs, null, null, null, null);
  return rng;
}

export function Cells(r, c) {
  let rng = new _Range(ActiveWorkbook(), ActiveSheet(), null, r, c, null, null);
  return rng;
}

export function CellsRange(r1, c1, r2, c2) {
  let rng = new _Range(ActiveWorkbook(), ActiveSheet(), null, r1, c1, r2, c2);
  return rng;
}