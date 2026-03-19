export function getOpenFilename(block, caption, filter) {
  let url = 'http://localhost:8000/backsys/getopenfilename';
  let opts = [];
  if (caption || filter) {
    if (caption) {
      opts.push('cap=' + encodeURIComponent(caption));
    }
    if (filter) {
      opts.push('filter=' + encodeURIComponent(filter));
    }
    url += '?' + opts.join('&');
  }
  document.getElementById('overlay').classList.add('overlay')
  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.filename) {
        const fn_block = block.getInput('filename').connection.targetBlock();
        if (fn_block && fn_block.type === 'text') {
          fn_block.setFieldValue(data.filename, 'TEXT');
        } else if (!fn_block) {
          const workspace = block.workspace;
          const newBlock = workspace.newBlock('text');
          newBlock.setFieldValue(data.filename, 'TEXT');
          newBlock.initSvg();
          newBlock.render();
          const inputConnection = block.getInput('filename').connection;
          inputConnection.connect(newBlock.outputConnection);
        }
      }
      document.getElementById('overlay').classList.remove('overlay')
    })
    .catch(error => {
      console.error('Error:', error)
      document.getElementById('overlay').classList.remove('overlay')
    });
};

export function getSaveFilename(block, caption, filter) {
  let url = 'http://localhost:8000/backsys/getsavefilename';
  let opts = [];
  if (caption || filter) {
    if (caption) {
      opts.push('cap=' + encodeURIComponent(caption));
    }
    if (filter) {
      opts.push('filter=' + encodeURIComponent(filter));
    }
    url += '?' + opts.join('&');
  }
  document.getElementById('overlay').classList.add('overlay')
  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.filename) {
        const fn_block = block.getInput('filename').connection.targetBlock();
        if (fn_block && fn_block.type === 'text') {
          fn_block.setFieldValue(data.filename, 'TEXT');
        } else if (!fn_block) {
          const workspace = block.workspace;
          const newBlock = workspace.newBlock('text');
          newBlock.setFieldValue(data.filename, 'TEXT');
          newBlock.initSvg();
          newBlock.render();
          const inputConnection = block.getInput('filename').connection;
          inputConnection.connect(newBlock.outputConnection);
        }
      }
      document.getElementById('overlay').classList.remove('overlay')
    })
    .catch(error => {
      console.error('Error:', error)
      document.getElementById('overlay').classList.remove('overlay')
    });
};
