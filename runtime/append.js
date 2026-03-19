import { cssToRGB, rgbToCSS } from './util.js';

function gamma(v, m, gamma) {
  return ((v / m) ** (1 / gamma)) * m;
}

export function setup() {}

export function dispose() {}

export function text_basen(num, base, blockId) {
  Blockly.checkStop(blockId);
  return Number(num).toString(base);
}

export function text_ml(text, blockId) {
  Blockly.checkStop(blockId);
  return text;
}

export function text_to_string(from, blockId) {
  Blockly.checkStop(blockId);
  return String(from);
}

export function math_dec(str, base, blockId) {
  Blockly.checkStop(blockId);
  return parseInt(str, base);
}

export function math_to_number(str, blockId) {
  Blockly.checkStop(blockId);
  return Number(str);
}

export function colour_picker(colour, blockId) {
  Blockly.checkStop(blockId);
  return colour;
}

export function colour_split(cssColor, blockId) {
  Blockly.checkStop(blockId);
  let cc = cssToRGB(cssColor);
  cc[0] /= 2.55;
  cc[1] /= 2.55;
  cc[2] /= 2.55;
  return cc;
}

export function colourBlend(c1, c2, ratio, blockId) {
  Blockly.checkStop(blockId);
  ratio = Math.max(Math.min(Number(ratio), 1), 0);
  var r1 = parseInt(c1.substring(1, 3), 16);
  var g1 = parseInt(c1.substring(3, 5), 16);
  var b1 = parseInt(c1.substring(5, 7), 16);
  var r2 = parseInt(c2.substring(1, 3), 16);
  var g2 = parseInt(c2.substring(3, 5), 16);
  var b2 = parseInt(c2.substring(5, 7), 16);
  var r = Math.round(r1 * (1 - ratio) + r2 * ratio);
  var g = Math.round(g1 * (1 - ratio) + g2 * ratio);
  var b = Math.round(b1 * (1 - ratio) + b2 * ratio);
  r = ('0' + (r || 0).toString(16)).slice(-2);
  g = ('0' + (g || 0).toString(16)).slice(-2);
  b = ('0' + (b || 0).toString(16)).slice(-2);
  return '#' + r + g + b;
}

export function colourRgb(r, g, b, blockId) {
  Blockly.checkStop(blockId);
  r = Math.max(Math.min(Number(r), 100), 0) * 2.55;
  g = Math.max(Math.min(Number(g), 100), 0) * 2.55;
  b = Math.max(Math.min(Number(b), 100), 0) * 2.55;
  r = ('0' + (Math.round(r) || 0).toString(16)).slice(-2);
  g = ('0' + (Math.round(g) || 0).toString(16)).slice(-2);
  b = ('0' + (Math.round(b) || 0).toString(16)).slice(-2);
  return '#' + r + g + b;
}

export function colourRandom(blockId) {
  Blockly.checkStop(blockId);
  var num = Math.floor(Math.random() * 0x1000000);
  return '#' + ('00000' + num.toString(16)).substr(-6);
}

export function colour_grey(color, blockId) {
  Blockly.checkStop(blockId);
  let cc = cssToRGB(color)
  cc[0] = gamma(cc[0], 255, 0.5);
  cc[1] = gamma(cc[1], 255, 0.5);
  cc[2] = gamma(cc[2], 255, 0.5);
  let gr = 0.2126 * cc[0] + 0.7152 * cc[1] + 0.0722 * cc[2];
  gr = gamma(gr, 255, 2);
  let c = rgbToCSS([gr, gr, gr]);
  return c;
}

export function colour_sepia(color, blockId) {
  Blockly.checkStop(blockId);
  let cc = cssToRGB(color)
  let r = 0.393 * cc[0] + 0.769 * cc[1] + 0.189 * cc[2];
  let g = 0.349 * cc[0] + 0.686 * cc[1] + 0.168 * cc[2];
  let b = 0.272 * cc[0] + 0.534 * cc[1] + 0.131 * cc[2];
  let c = rgbToCSS([r, g, b]);
  return c;
}

export function colour_hsv(h, s, v) {
  h = (h < 0 ? h % 360 + 360 : h) % 360 / 60;
  s /= 100;
  v /= 100;
  s = s < 0 ? 0 : s > 1 ? 1 : s;
  v = v < 0 ? 0 : v > 1 ? 1 : v;
  const c = [5, 3, 1].map(n =>
    Math.round((v - Math.max(0, Math.min(1, 2 - Math.abs(2 - (h + n) % 6))) * s * v) * 255));
  return `#${(c[0] << 16 | c[1] << 8 | c[2]).toString(16).padStart(6, '0')}`;
}

export function list_push_unshift(list, method, value, blockId) {
    Blockly.checkStop(blockId);
    list[method](value);
}

export function list_pop_shift(list, method, blockId) {
    Blockly.checkStop(blockId);
    return list[method]();
}

export function list_get_random(arr, n, blockId) {
  Blockly.checkStop(blockId);
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, n);
}

export function list_reverse(list, blockId) {
    Blockly.checkStop(blockId);
    return [...list].reverse();
}

export function list_concat(list1, list2, blockId) {
    Blockly.checkStop(blockId);
    return list1.concat(list2);
}

export function list_compute(op, arr, blockId) {
  Blockly.checkStop(blockId);
  const funcs = {
    SUM: (arr) => arr.reduce((a, b) => a + b, 0),
    AVERAGE: (arr) => arr.reduce((a, b) => a + b, 0) / arr.length,
    MAX: (arr) => Math.max(...arr),
    MIN: (arr) => Math.min(...arr),
    VARIANCE: (arr) => {
      const mean = arr.reduce((a, b) => a + b, 0) / arr.length;
      return arr.reduce((a, b) => a + (b - mean) ** 2, 0) / arr.length;
    },
    STD_DEV: (arr) => {
      const mean = arr.reduce((a, b) => a + b, 0) / arr.length;
      const variance = arr.reduce((a, b) => a + (b - mean) ** 2, 0) / arr.length;
      return Math.sqrt(variance);
    },
    MEDIAN: (arr) => {
      const sorted = [...arr].sort((a, b) => a - b);
      const mid = Math.floor(sorted.length / 2);
      return sorted.length % 2 !== 0 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
    },
  };
  return funcs[op](arr);
}

export function logic_is_type(value, type, blockId) {
    Blockly.checkStop(blockId);
    switch (type) {
        case 'NUMBER':
            return typeof value === 'number';
        case 'DATE':
            return value instanceof Date;
        case 'STRING':
            return typeof value === 'string';
        case 'LIST':
            return Array.isArray(value);
        case 'OBJECT':
            return typeof value === 'object' && value !== null && !Array.isArray(value) && !(value instanceof Date);
    }
    return false;
}