export function setup() {
}

export async function dispose() {
}

export async function create_with_empty(blockId) {
  Blockly.checkStop(blockId);
  return {};
}

export async function create_with(...kvs) {
  const blockId = kvs.pop();
  Blockly.checkStop(blockId);
  let dict = {};
  for (let kv of kvs) {
    Object.assign(dict, kv);
  }
  return dict;
}

export async function dict_item(key, value, blockId) {
  Blockly.checkStop(blockId);
  return { [key]: value };
}

export async function set_item(dict, key, value, blockId) {
  Blockly.checkStop(blockId);
  dict[key] = value;
}

export async function get_item(dict, key, blockId) {
  Blockly.checkStop(blockId);
  return dict[key];
}

export async function keys(dict, blockId) {
  Blockly.checkStop(blockId);
  return Object.keys(dict);
}

export async function values(dict, blockId) {
  Blockly.checkStop(blockId);
  return Object.values(dict);
}

export async function has_key(dict, key, blockId) {
  Blockly.checkStop(blockId);
  return key in dict;
}

export async function from_json(json, blockId) {
  Blockly.checkStop(blockId);
  return JSON.parse(json);
}

export async function to_json(dict, blockId) {
  Blockly.checkStop(blockId);
  return JSON.stringify(dict);
}

export async function convkv(dict, method, blockId) {
  Blockly.checkStop(blockId);
  if (method == 0) {
    return Object.fromEntries(Object.entries(dict).map(([k, v]) => [v, k]));
  }
  else if (method == 1) {
    let ct = {};
    let obj = {};
    Object.entries(dict).forEach(([k, v]) => {
      if (!ct.hasOwnProperty(v)) {
        ct[v] = 1;
        obj[v] = k;

      }
      else if (ct[v] == 1) {
        ct[v] = 2;
        obj[v] = [obj[v], k];
      }
      else {
        ct[v]++;
        obj[v].push(k);
      }
    });
    return obj;
  }
}