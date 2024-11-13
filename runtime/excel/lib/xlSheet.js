import { ws, __ws } from './xlWebSocket.js';
import { ActiveWorkbook } from './xlWorkbook.js';
import { _Range } from './xlRange.js';

export class _Sheets {
    constructor(workbook) {
        this.workbook = workbook;
    }

    get Count() {
        return this.workbook.sheetsByIndex.length;
    }

    async add(p) {
        Blockly.checkStop();
        let param = { 'f': this.workbook.name };
        if (typeof p == 'string') {
            param.n = p;
        }
        else if (typeof p == 'object') {
            if (p.hasOwnProperty('name')) {
                param.n = p.name;
            }
            if (p.hasOwnProperty('before')) {
                param.b = p.before;
            }
            if (p.hasOwnProperty('after')) {
                param.a = p.after;
            }
        }
        let wb_data = await ws.send(__ws, "xl", "sh", "as", param);
        let sh_data = wb_data.ns;
        let sheet = new _Sheet(this.workbook, sh_data.i, sh_data.n);
        this.workbook.sheetsByName[sh_data.n] = sheet;
        this.workbook.sheetsByIndex.splice(sheet.index - 1, 0, sheet);
        for (let i = sheet.index; i < this.workbook.sheetsByIndex.length; i++) {
            this.workbook.sheetsByIndex[i].index++;
        }
        return sheet;
    }
}

export class _Sheet {
    constructor(workbook, index, name) {
        this.workbook = workbook;
        this.index = index;
        this.name = name;
    }

    get Parent() {
        return this.workbook;
    }

    get Name() {
        return this.name;
    }

    get Index() {
        return this.index;
    }

    Range(adrs) {
        let rng = new _Range(this.workbook, this, adrs, null, null, null, null);
        return rng;
    }

    Cells(r, c) {
        let rng = new _Range(this.workbook, this, null, r, c, null, null);
        return rng;
    }

    CellsRange(r1, c1, r2, c2) {
        let rng = new _Range(this.workbook, this, null, r1, c1, r2, c2);
        return rng;
    }

    async activate() {
        Blockly.checkStop();
        let param = { 'f': this.workbook.name, 'i': this.index };
        await ws.send(__ws, "xl", "sh", "ac", param);
        this.workbook.activeSheet = this;
    }

    async setName(name) {
        Blockly.checkStop();
        let oldName = this.name;
        let param = { 'f': this.workbook.name, 'i': this.index, 'n': name };
        await ws.send(__ws, "xl", "sh", "sn", param);
        this.name = name;
        delete this.workbook.sheetsByName[oldName];
        this.workbook.sheetsByName[name] = this;
    }

    async setTabColor(color) {
        Blockly.checkStop();
        let param = { 'f': this.workbook.name, 'i': this.index, 'c': color };
        await ws.send(__ws, "xl", "sh", "stc", param);
    }

    async resetTabColor() {
        Blockly.checkStop();
        let param = { 'f': this.workbook.name, 'i': this.index };
        await ws.send(__ws, "xl", "sh", "rtc", param);
    }

    async getTabColor() {
        Blockly.checkStop();
        let param = { 'f': this.workbook.name, 'i': this.index };
        return await ws.send(__ws, "xl", "sh", "gtc", param);
    }
}

export function Sheets(p) {
    return ActiveWorkbook().Sheets(p)
}

export function ActiveSheet() {
    return ActiveWorkbook().ActiveSheet();
}
