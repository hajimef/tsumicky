export function getNumOrVar(s) {
    let value = Number(s);
    if (typeof value != 'number') {
        eval("value = Number(" + s + ")");
    }
    return value;
}
