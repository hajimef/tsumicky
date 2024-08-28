import { format } from "https://cdn.jsdelivr.net/gh/ymd-h/format-js@v1/format.js";

function sleep_sub(msec) {
    return new Promise(function(resolve, reject) {
        var s_dt = new Date();
        var start = s_dt.getTime();
        function inner() {
            var e_dt = new Date();
            var end = e_dt.getTime();
            if (end - start > msec) {
                resolve()
            }
            else if (Blockly.isStop) {
                reject(new Error('abortTsumicky'));
            }
            else if (Blockly.isEnd) {
                reject(new Error('endTsumicky'));
            }
            setTimeout(inner, 1);
        }
        setTimeout(inner, 1);
    });
}

export function setup() {
}

export async function dispose() {
}

export async function sleep(ms) {
    await sleep_sub(ms);
}

export async function console_log(text) {
    await console.log(text);
}

export function format_float(num, n_all, n_u0) {
    let fmt = "{0:" + format("{0}.{1}f", n_all, n_u0) + "}";
    return format(fmt, num);
}
