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
    let cp = Math.round(rgbColor[i]);
    cp = cp > 255 ? 255 : cp;
    cp = "0" + cp.toString(16)
    c += cp.substring(cp.length - 2);
  }
  return c;
}

export function rgbValueToCSS(rgbValue) {
  let c = Number(rgbValue).toString(16);
  c = "000000" + c;
  c = c.substring(c.length - 6)
  c = "#" + c.substring(4) + c.substring(2, 4) + c.substring(0, 2);
  return c;
}