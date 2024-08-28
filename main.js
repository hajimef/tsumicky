var _tsmLang;
var workspace;
Blockly.tsmFuncs = {};
var $_B = Blockly;
var $_BF = Blockly.tsmFuncs;
Blockly.runTimeJS = {};

(async() => {
    let settings_res;
    if (typeof settingsFile == "undefined") {
        settings_res = await fetch('settings.json');
    }
    else {
        settings_res = await fetch(settingsFile);
    }
    const settings_json = await settings_res.text();
    let settings = JSON.parse(settings_json);
    _tsmLang = settings.language;
    let msgScr = document.createElement('script');
    msgScr.setAttribute('type', 'text/javascript');
    msgScr.setAttribute('src',  'https://unpkg.com/blockly/msg/' + _tsmLang + '.js');
    document.body.appendChild(msgScr);
    try {
        await import('./msg/' + _tsmLang + '.js');
    }
    catch(e) {
        await import('./msg/en.js');
    }
    document.getElementById('run').innerHTML = Blockly.Msg['TSUMICKY_MESSAGE_RUN'];
    document.getElementById('stop').innerHTML = Blockly.Msg['TSUMICKY_MESSAGE_STOP'];
    document.getElementById('new').innerHTML = Blockly.Msg['TSUMICKY_MESSAGE_NEW'];
    document.getElementById('open').innerHTML = Blockly.Msg['TSUMICKY_MESSAGE_OPEN'];
    document.getElementById('save').innerHTML = Blockly.Msg['TSUMICKY_MESSAGE_SAVE'];
    let data_cats = settings.categories
    const parser = new DOMParser();
    const res_tb = await fetch('toolbox.xml');
    const data_tb = await res_tb.text();
    const doc_tb = await parser.parseFromString(data_tb, 'application/xml');
    let tbTop = doc_tb.getElementById('toolbar_top_sep');
    for (let i = 0; i < data_cats.length; i++) {
        let cat_name = data_cats[i];
        if (cat_name.substring(0, 1) != "#") {
            if (cat_name == 'sep') {
                let sep = document.createElement('sep');
                tbTop.before(sep);
            }
            else {
                let cat_fname = 'toolbox/' + cat_name + '.xml';
                let cat_tb = await fetch(cat_fname);
                let cat_data = await cat_tb.text();
                let cat_doc = await parser.parseFromString(cat_data, 'application/xml');
                let cats = cat_doc.getElementsByTagName('category');
                for (let j = 0; j < cats.length; j++) {
                    tbTop.before(cats[j]);
                }
                let modJS = await import('/javascript/' + cat_name + '.js');
                modJS.addJS();
                let modBlk = await import('/blocks/' + cat_name + '.js');
                modBlk.addBlocks();
                let modMsg;
                try {
                    modMsg = await import('/msg/' + cat_name + '/' + _tsmLang + '.js');
                }
                catch(e) {
                    modMsg = await import('/msg/' + cat_name + '/en.js');
                }
                modMsg.addMessages();
            }
        }
    }
    if (settings.hasOwnProperty('tree')) {
        let tree = settings.tree;
        for (let i = 0; i < tree.length; i++) {
            let node = tree[i];
            let catNode = doc_tb.createElement('category');
            catNode.setAttribute('name', node.catname);
            catNode.setAttribute('id', node.id);
            catNode.setAttribute('colour', node.colour)
            if (node.hasOwnProperty('before')) {
                let targetNode = doc_tb.getElementById(node.before);
                targetNode.before(catNode);
            }
            else if (node.hasOwnProperty('after')) {
                let targetNode = doc_tb.getElementById(node.after);
                targetNode.after(catNode);
            }
            let children = tree[i].children;
            for (let j = 0; j < children.length; j++) {
                let child = children[j];
                let subcatNode = doc_tb.getElementById(child.id);
                catNode.appendChild(subcatNode);
                if (child.hasOwnProperty('catname')) {
                    subcatNode.setAttribute('name', child.catname);
                }
            }
        }
    }
    if (settings.hasOwnProperty('hiddenBlock')) {
        let hiddenBlocks = settings.hiddenBlock;
        for (let i = 0; i < hiddenBlocks.length; i++) {
            let hiddenElm = doc_tb.querySelector('[type="' + hiddenBlocks[i] + '"');
            hiddenElm.remove();
        }
    }
    document.body.appendChild(doc_tb.documentElement);
    const toolbox = document.getElementById("toolbox");
    let wsName = 'workspace';
    if (settings.hasOwnProperty('workspace')) {
        wsName = settings.workspace;
    }
    const res_ws = await fetch(wsName + '.xml');
    const data_ws = await res_ws.text();
    const doc_ws = await parser.parseFromString(data_ws, 'application/xml');
    document.body.appendChild(doc_ws.documentElement);
    const options = { 
    	toolbox : toolbox, 
    	collapse : true, 
    	comments : true, 
    	disable : true, 
    	maxBlocks : Infinity, 
    	trashcan : true, 
    	horizontalLayout : false, 
    	toolboxPosition : 'start', 
    	css : true, 
    	media : 'https://blockly-demo.appspot.com/static/media/', 
    	rtl : false, 
    	scrollbars : true, 
    	sounds : true, 
    	oneBasedIndex : true, 
    	grid : {
    		spacing : 20, 
    		length : 1, 
    		colour : '#888', 
    		snap : false
    	}, 
    	zoom : {
    		controls : true, 
    		wheel : true, 
    		startScale : 1, 
    		maxScale : 3, 
    		minScale : 0.3, 
    		scaleSpeed : 1.2
    	}
    };
    workspace = await Blockly.inject('blocklyDiv', options);
    var workspaceBlocks = document.getElementById("workspaceBlocks"); 
    await Blockly.Xml.domToWorkspace(workspaceBlocks, workspace);
    workspace.addChangeListener(updateCode);
    workspace.addChangeListener(Blockly.Events.disableOrphans);
    const blocklyArea = document.getElementById('blocklyArea');
    const blocklyDiv = document.getElementById('blocklyDiv');
    const onresize = function(e) {
        // Compute the absolute coordinates and dimensions of blocklyArea.
        let element = blocklyArea;
        let x = 0;
        let y = 0;
        do {
            x += element.offsetLeft;
            y += element.offsetTop;
            element = element.offsetParent;
        } while (element);
        // Position blocklyDiv over blocklyArea.
        blocklyDiv.style.left = x + 'px';
        blocklyDiv.style.top = y + 'px';
        blocklyDiv.style.width = blocklyArea.offsetWidth + 'px';
        blocklyDiv.style.height = blocklyArea.offsetHeight + 'px';
      Blockly.svgResize(workspace);
    };
    window.addEventListener('resize', onresize, false);
    onresize();
})();

var btnRun, btnStop, btnNew, btnLoad, btnSave, fileName = 'tsumicky.json', isSaveCanceled = false;

function updateCode(event) {
    const code = javascript.javascriptGenerator.workspaceToCode(workspace);
    document.getElementById('code').value = code;
}

function newFile(e) {
    Blockly.stopCode();
    if (confirm(Blockly.Msg["TSUMICKY_IS_CLEAR_OK"])) {
        workspace.clear();
        Blockly.Xml.domToWorkspace(workspaceBlocks, workspace);
    }
}

function loadWS(e) {
    Blockly.stopCode();
    if (!confirm(Blockly.Msg["TSUMICKY_IS_CLEAR_OK"])) {
        return;
    }
    var file = e.target.files;
    if (file.length != 0) {
        var reader = new FileReader();
        fileName = file[0].name;
        reader.readAsText(file[0]);
        reader.onload = function() {
            let wsCode = reader.result;
            document.getElementById('ws').value = wsCode;
            let ws = JSON.parse(wsCode);
            Blockly.serialization.workspaces.load(ws, workspace);
        }
    }
}

function saveWS(event) {
    let ws = Blockly.serialization.workspaces.save(workspace);
    let wsCode = JSON.stringify(ws);
    document.getElementById('ws').value = wsCode;
    let blobedText = new Blob([ wsCode ],  {type: 'text/plain' });
    let url = URL.createObjectURL(blobedText);
    let link = document.getElementById('savefile');
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
}

function runCode() {
    Blockly.isStop = false;
    Blockly.isEnd = false;
    Blockly.__wsobjs = [];
    btnRun.setAttribute('disabled', 'disabled');
    btnStop.removeAttribute('disabled');
    let code = javascript.javascriptGenerator.workspaceToCode(workspace);
    setTimeout(function() {
        try {
            eval(code);
        } catch (error) {
            alert("Code ERROR: " + error);
        }
    }, 10);
}

Blockly.stopCode = function() {
    Blockly.isStop = true;
    btnStop.setAttribute('disabled', 'disabled');
    btnRun.removeAttribute('disabled');
}

Blockly.endCode = function() {
    Blockly.isEnd = true;
    btnStop.setAttribute('disabled', 'disabled');
    btnRun.removeAttribute('disabled');
    throw new Error('endTsumicky');
}

Blockly.checkStop = function() {
    if (Blockly.isStop) {
        throw new Error('abortTsumicky');
    }
    else if (Blockly.isEnd) {
        throw new Error('endTsumicky');
    }
}

Blockly.convertMsg = function(msg) {
    if (Object.keys(Blockly.Msg).indexOf(msg) !== -1) {
        return Blockly.Msg[msg];
    }
    else {
        return msg;
    }
}


window.onload = function() {
    btnRun = document.getElementById('run');
    btnRun.onclick = runCode;
    btnStop = document.getElementById('stop');
    btnStop.onclick = Blockly.stopCode;
    btnNew = document.getElementById('new');
    btnNew.onclick = newFile;
    btnLoad = document.getElementById('load');
    btnLoad.onchange = loadWS;
    btnSave = document.getElementById('save');
    btnSave.onclick = saveWS;
    btnStop.setAttribute('disabled', 'disabled');
}
