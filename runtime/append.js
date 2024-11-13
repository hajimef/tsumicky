import { cssToRGB, rgbToCSS } from './util.js';

function gamma(v, m, gamma) {
  return ((v / m) ** (1 / gamma)) * m;
}

export function setup() {}

export function dispose() {}

export function colour_split(cssColor) {
  let cc = cssToRGB(cssColor);
  cc[0] /= 2.55;
  cc[1] /= 2.55;
  cc[2] /= 2.55;
  return cc;
}

export function colourBlend(c1, c2, ratio) {
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

export function colourRgb(r, g, b) {
  r = Math.max(Math.min(Number(r), 100), 0) * 2.55;
  g = Math.max(Math.min(Number(g), 100), 0) * 2.55;
  b = Math.max(Math.min(Number(b), 100), 0) * 2.55;
  r = ('0' + (Math.round(r) || 0).toString(16)).slice(-2);
  g = ('0' + (Math.round(g) || 0).toString(16)).slice(-2);
  b = ('0' + (Math.round(b) || 0).toString(16)).slice(-2);
  return '#' + r + g + b;
}

export function colourRandom() {
  var num = Math.floor(Math.random() * 0x1000000);
  return '#' + ('00000' + num.toString(16)).substr(-6);
}

export function colour_grey(color) {
  let cc = cssToRGB(color)
  cc[0] = gamma(cc[0], 255, 0.5);
  cc[1] = gamma(cc[1], 255, 0.5);
  cc[2] = gamma(cc[2], 255, 0.5);
  let gr = 0.2126 * cc[0] + 0.7152 * cc[1] + 0.0722 * cc[2];
  gr = gamma(gr, 255, 2);
  let c = rgbToCSS([gr, gr, gr]);
  return c;
}

export function colour_sepia(color) {
  let cc = cssToRGB(color)
  let r = 0.393 * cc[0] + 0.769 * cc[1] + 0.189 * cc[2];
  let g = 0.349 * cc[0] + 0.686 * cc[1] + 0.168 * cc[2];
  let b = 0.272 * cc[0] + 0.534 * cc[1] + 0.131 * cc[2];
  let c = rgbToCSS([r, g, b]);
  return c;
}
