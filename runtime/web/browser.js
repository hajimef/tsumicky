import { ws, setWS, WS } from './websocket.js';

export function setup() {
}

export async function dispose() {
}

export async function open(url, width, height) {
  return new Promise(function(resolve, reject) {
    let w = window.open(url, '', 'width=' + width + ',height=' + height);

    console.log(w.document.readyState)
    if (w.document.readyState != 'complete') {
      console.log('loading');
      w.document.onreadystatechange(function(e) {
        if (w.document.readyState == 'complete') {
          console.log('loaded');
          setTimeout(function() {
            resolve(w);
          }, 100)
        }
      });
    }
    else {
      console.log('no listener');
      setTimeout(function() {
        resolve(w);
      }, 100)
    }
  });
}

export async function navigate(win, url) {
  return new Promise(function(resolve, reject) {
    win.location.href = url;
    if (win.document.readyState != 'complete') {
      console.log('loading');
      win.document.onreadystatechange(function(e) {
        if (win.document.readyState == 'complete') {
          console.log('loaded');
          setTimeout(function() {
            resolve();
          }, 100)
        }
      });
    }
    else {
      setTimeout(function() {
        resolve();
      }, 100)
    }
  });
}

export function select(win, selector) {
  if (selector == 'head') {
    return jQuery(win.document.head);
  }
  else if (selector == 'body') {
    return jQuery(win.document.body);
  }
  else {
    return jQuery(win.document.body).find(selector);
  }
}

export function find_checked(elm) {
  for (let i = 0; i < elm.length; i++) {
    let e = jQuery(elm[i]);
    if (e.prop('checked')) {
      return e.val();
    }
  }
  return null;
}
