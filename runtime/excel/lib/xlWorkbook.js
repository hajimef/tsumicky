import { ws, __ws } from './xlWebSocket.js';
import { _Sheet, _Sheets } from './xlSheet.js';

export class _Workbook {
    constructor(index, name, fullname, path, sheets, active) {
        this.index = index;
        this.name = name;
        this.fullname = fullname;
        this.path = path;
        this.sheetsByIndex = [];
        this.sheetsByName = {};
        for (let i = 0; i < sheets.length; i++) {
            let sh = new _Sheet(this, sheets[i].i, sheets[i].n)
            this.sheetsByIndex.push(sh);
            this.sheetsByName[sheets[i].n] = sh;
            if (sheets[i].n == active.n) {
                this.activeSheet = sh;
            }
        }
        this.sheets = new _Sheets(this);
    }

    Sheets(p) {
        if (typeof p == 'undefined') {
            return this.sheets;
        }
        else if (typeof p == 'number') {
            if (p > this.sheetsByIndex.length || p < 1) {
                let e = new Error('Not exist sheet index :' + p);
                throw e;
            }
            else {
                return this.sheetsByIndex[p - 1];
            }
        }
        else if (typeof p == 'string') {
            if (!(p in this.sheetsByName)) {
                let e = new Error('Not exist book name :' + p);
                throw e;
            }
            else {
                return this.sheetsByName[p];
            }
        }
        else {
            throw new Error('Illegal sheet type :' + typeof(p));
        }
    }

    ActiveSheet() {
        return this.activeSheet;
    }

    get Name() {
        return this.name;
    }

    get FullName() {
        return this.fullname;
    }

    get Path() {
        return this.path;
    }

    async activate() {
        Blockly.checkStop();
        let param = { 'f': this.name };
        await ws.send(__ws, "xl", "wb", "ac", param);
        Workbooks().activate(this);
    }

    async save() {
        Blockly.checkStop();
        let oldName = this.name
        let wb = Workbooks(oldName);
        let wb_data = await ws.send(__ws, "xl", "wb", "sf", { "of": oldName });
        Workbooks().changeName(this, oldName, wb_data.n, wb_data.f, wb_data.p);
        return wb;
    }

    async saveAs(filePath) {
        Blockly.checkStop();
        let oldName = this.name
        let wb = Workbooks(oldName);
        let wb_data = await ws.send(__ws, "xl", "wb", "sf", { "f": filePath, "of": oldName });
        Workbooks().changeName(this, oldName, wb_data.n, wb_data.f, wb_data.p);
        return wb;
    }

    async close() {
        Blockly.checkStop();
        let param = { 'f': this.name };
        let wb_data = await ws.send(__ws, "xl", "wb", "cl", param);
        Workbooks().closeBook(this);        
    }
}

export class _Workbooks {
    constructor() {
        this.workbooksByIndex = [];
        this.workbooksByName = {};
        this.active = null;
        this.index = 1;
    }

    activate(wb) {
        this.active = wb;
    }

    add_active(wb_data) {
        let wb = new _Workbook(this.index, wb_data.n, wb_data.f, wb_data.p, wb_data.s, wb_data.a);
        this.workbooksByIndex.push(wb);
        this.workbooksByName[wb_data.n] = wb;
        this.index++;
        this.active = wb;
    }

    async add() {
        Blockly.checkStop();
        let wb_data = await ws.send(__ws, "xl", "wb", "nf", {});
        let wb = new _Workbook(this.index, wb_data.n, wb_data.f, wb_data.p, wb_data.s, wb_data.a);
        this.workbooksByIndex.push(wb);
        this.workbooksByName[wb_data.n] = wb;
        this.index++;
        this.active = wb;
        return wb;
    }

    async open(filename) {
        Blockly.checkStop();
        var param = { 'f': filename };
        let wb_data = await ws.send(__ws, "xl", "wb", "of", param);
        let wb = new _Workbook(this.index, wb_data.n, wb_data.f, wb_data.p, wb_data.s, wb_data.a)
        this.workbooksByIndex.push(wb);
        this.workbooksByName[wb_data.n] = wb;
        this.index++;
        this.active = wb;
        return wb;
    }

    get Count() {
        return this.workbooksByIndex.length;
    }

    changeName(wb, oldName, newName, fullName, path) {
        wb.name = newName;
        wb.fullname = fullName;
        wb.path = path;
        delete this.workbooksByName[oldName];
        this.workbooksByName[newName] = wb;
    }

    closeBook(wb) {
        delete this.workbooksByName[wb.name];
        this.workbooksByIndex.splice(wb.index - 1, 1);
        for (let i = wb.index - 1; i < this.workbooksByIndex.length; i++) {
            this.workbooksByIndex[i].index--;
        }
        this.index--;
        wb = null;        
    }

    dispose() {
        for (let i = 0; i < this.workbooksByIndex.length; i++) {
            this.workbooksByIndex[i] = null;
        }
        this.workbooksByIndex = [];
        this.workbooksByName = {};
        this.active = null;
        this.index = 1;
    }
}

var __Workbooks = new _Workbooks();

export function Workbooks(p) {
    if (typeof p == 'undefined') {
        return __Workbooks;
    }
    else if (typeof p == 'number') {
        if (p > __Workbooks.workbooksByIndex.length || p < 1) {
            let e = new Error('Not exist book index :' + p);
            throw e;
        }
        else {
            return __Workbooks.workbooksByIndex[p - 1];
        }
    }
    else if (typeof p == 'string') {
        if (!(p in __Workbooks.workbooksByName)) {
            let e = new Error('Not exist book name :' + p);
            throw e;
        }
        else {
            return __Workbooks.workbooksByName[p];
        }
    }
    else {
        throw new Error('Illegal book type :' + typeof(p));
    }
}

export function ActiveWorkbook() {
    return __Workbooks.active;
}
