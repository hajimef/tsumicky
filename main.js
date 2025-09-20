var _tsmLang;
var workspace;
Blockly.tsmFuncs = {};
var $_B = Blockly;
var $_BF = Blockly.tsmFuncs;
Blockly.runTimeJS = {};
Blockly.voices = [];
let env, iniLang, iniWS, openModal, loadWSName;

const MODE_LAUNCH = 1;
const MODE_CHANGE = 2;
const MODE_SETTING = 3;

(async() => {
    registerFieldColour();
    colourPicker.installBlock();
    colourRgb.installBlock();
    colourRandom.installBlock();
    colourBlend.installBlock();
    registerFieldMultilineInput();
    textMultiline.installBlock();
    const env_res = await fetch('env.json');
    const env_json = await env_res.text();
    env = JSON.parse(env_json);
    let settingsFile, settings_res;
    if ('speechSynthesis' in window) {
        speechSynthesis.onvoiceschanged = function(e) {
            Blockly.voices = speechSynthesis.getVoices()
        }
    }
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let langName;
    loadWSName = urlParams.get('ws');
    if (loadWSName == null) {
        loadWSName = localStorage.getItem('wsName');
    }
    langName = urlParams.get('lang');
    if (langName == null) {
        langName = localStorage.getItem('lang');
    }
    if (langName == null) {
        if (navigator.language == 'ja' ||  navigator.language == 'ja-JP') {
            langName = 'ja';
        }
        else {
            langName = 'en';
        }
    }
    _tsmLang = langName
    if (env.settings.hasOwnProperty(loadWSName)) {
        settingsFile = env.settings[loadWSName];
    }

    if (typeof settingsFile == "undefined") {
        iniLang = _tsmLang;
        iniWS = 'el';
        setModal(MODE_LAUNCH, 'nm');
        openModal = new bootstrap.Modal(document.getElementById('setting_modal'));
        openModal.show();
        settings_res = await fetch('settings.json');
    }
    else {
        settings_res = await fetch(settingsFile);
    }
    const settings_json = await settings_res.text();
    let settings = JSON.parse(settings_json);
    settings.language = langName;
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
    document.getElementById('run').innerHTML = '<i class="bi bi-play-fill"></i> ' + Blockly.Msg['TSUMICKY_MESSAGE_RUN'];
    document.getElementById('stop').innerHTML = '<i class="bi bi-stop-fill"></i> ' + Blockly.Msg['TSUMICKY_MESSAGE_STOP'];
    document.getElementById('new').innerHTML = '<i class="bi bi-file-earmark"></i> ' + Blockly.Msg['TSUMICKY_MESSAGE_NEW'];
    document.getElementById('open').innerHTML = '<i class="bi bi-folder2-open"></i> ' + Blockly.Msg['TSUMICKY_MESSAGE_OPEN'];
    document.getElementById('save').innerHTML = '<i class="bi bi-download"></i> ' + Blockly.Msg['TSUMICKY_MESSAGE_SAVE'];
    document.getElementById('chenv').innerHTML = '<i class="bi bi-arrow-left-right"></i> ' + Blockly.Msg['TSUMICKY_MESSAGE_ENV'];
    document.getElementById('setting').innerHTML = '<i class="bi bi-gear"></i> ' + Blockly.Msg['TSUMICKY_MESSAGE_SETTING'];
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
                let cat_dir_match = cat_fname.match(/(.*)\/.*?.xml/);
                let cat_dir = cat_dir_match[1];
                let cat_tb = await fetch(cat_fname);
                let cat_data = await cat_tb.text();
                while (true) {
                    let matches = cat_data.match(/(<xi:include.*href="(.*?)".*\/>)/);
                    if (matches == null) {
                        break;
                    }
                    console.log("find ", matches[1], matches[2])
                    let found = matches[1];
                    let href = matches[2];
                    let inc_fname = cat_dir + href;
                    let inc_tb = await fetch(inc_fname);
                    let inc_data = await inc_tb.text();
                    cat_data = cat_data.replace(found, inc_data);
                }
                let cat_doc = await parser.parseFromString(cat_data, 'application/xml');
                let cats = cat_doc.getElementsByTagName('category');
                for (let j = 0; j < cats.length; j++) {
                    tbTop.before(cats[j]);
                }
                let modJS = await import('./javascript/' + cat_name + '.js');
                modJS.addJS();
                let modBlk = await import('./blocks/' + cat_name + '.js');
                modBlk.addBlocks();
                let modMsg;
                try {
                    modMsg = await import('./msg/' + cat_name + '/' + _tsmLang + '.js');
                }
                catch(e) {
                    modMsg = await import('./msg/' + cat_name + '/en.js');
                }
                modMsg.addMessages();
            }
        }
    }
//    registerFieldColour();
//    installAllBlocks();

    // append additional blocks to blockly original blocks
    let append_res = await fetch('append.json');
    const append_json = await append_res.text();
    let appends = JSON.parse(append_json);
    let appendJS = await import('./javascript/append.js');
    appendJS.addJS();
    let appendBlk = await import('./blocks/append.js');
    appendBlk.addBlocks();
    let appendMsg;
    try {
        appendMsg = await import('./msg/append/' + _tsmLang + '.js');
    }
    catch(e) {
        appendMsg = await import('./msg/append/en.js');
    }
    appendMsg.addMessages();
    let append_tb = await fetch('toolbox/append.xml');
    let append_data = await append_tb.text();
    let append_doc = await parser.parseFromString(append_data, 'application/xml');
    for (let i = 0; i < appends.length; i++) {
        let append = appends[i];
        let node = append_doc.querySelector('block[type="' + append.name + '"]');
        if (append.hasOwnProperty('before')) {
            let targetNode = doc_tb.querySelector('block[type="' + append.before + '"]');
            targetNode.before(node);
        }
        else if (append.hasOwnProperty('after')) {
            let targetNode = doc_tb.querySelector('block[type="' + append.after + '"]');
            targetNode.after(node);
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
    if (settings.hasOwnProperty('move')) {
        let mvs = settings.move;
        for (let i = 0; i < mvs.length; i++) {
            let node = mvs[i];
            let catNode = doc_tb.querySelector('#' + node.id);
            if (node.hasOwnProperty('after_name')) {
                let toNode = doc_tb.querySelector('category[name="' + node.after_name + '"]');
                toNode.after(catNode);
            }
            else if (node.hasOwnProperty('before_name')) {
                let toNode = doc_tb.querySelector('category[name="' + node.before_name + '"]');
                toNode.before(catNode);
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
    if (settings.hasOwnProperty('hiddenCategory')) {
        let hiddenCats = settings.hiddenCategory;
        for (let i = 0; i < hiddenCats.length; i++) {
            let hiddenCat = doc_tb.querySelector('#' + hiddenCats[i]);
            hiddenCat.remove();
        }
    }
    document.body.appendChild(doc_tb.documentElement);
    const toolbox = document.getElementById("toolbox");
    let wsName = 'workspace';
    if (loadWSName != null) {
        wsName = env.workspace[loadWSName];
    }
    else if (settings.hasOwnProperty('workspace')) {
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
    const cpplugin = new CrossTabCopyPaste();
    cpplugin.init({ contextMenu: true, shortcut: true });
    const backpack = new Backpack(workspace);
    backpack.init();
    var workspaceBlocks = document.getElementById("workspaceBlocks"); 
    await Blockly.Xml.domToWorkspace(workspaceBlocks, workspace);
    workspace.addChangeListener(updateCode);
    workspace.addChangeListener(Blockly.Events.disableOrphans);
    let proc_func = workspace.toolboxCategoryCallbacks.get("PROCEDURE");
    workspace.registerToolboxCategoryCallback('PROCEDURE', function(ws) {
        let blocklist = proc_func(ws);
        let block = { "kind": "block", "type": "procedure_js_function", "gap": 16, "fields": { "NAME": Blockly.Msg['TSUMICKY_JS_FUNCTION'] } };
        for (let i = 0; i < blocklist.length; i++) {
            if (blocklist[i].type == 'procedures_ifreturn') {
                blocklist.splice(i, 0, block);
                break;
            }
        }
        return blocklist;
    });
    if (localStorage.hasOwnProperty('curProg')) {
        const wsCode = localStorage.getItem('curProg');
        const ws = JSON.parse(wsCode);
        Blockly.serialization.workspaces.load(ws, workspace);
        localStorage.removeItem('curProg');
    }
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

var btnRun, btnStop, btnNew, btnLoad, btnSave, btnChangeEnv, btnSetting, fileName = 'tsumicky.json', isSaveCanceled = false;

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
            if (ws.tsumicky !== undefined) {
                if (loadWSName != ws.tsumicky.env_name) {
                    if (confirm(Blockly.Msg["TSUMICKY_DIFFRENT_ENV"])) {
                        let loc = location.origin + location.pathname;
                        localStorage.setItem('curProg', wsCode);
                        loc += '?lang=' + _tsmLang;
                        loc += '&ws=' + ws.tsumicky.env_name;
                        location.href = loc;
                    }
                }
            }
            Blockly.serialization.workspaces.load(ws, workspace);
        }
    }
}

function saveWS(event) {
    let ws = Blockly.serialization.workspaces.save(workspace);
    if (ws.tsumicky === undefined) {
        ws.tsumicky = {};
        ws.tsumicky.file_version = '0.1';
        ws.tsumicky.env_name = loadWSName;
    }
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
    Blockly.__callbacks = {};
    Blockly.__listeners = {};
    Blockly.__listener_no = 0;
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

function doSetting() {
    iniLang = _tsmLang;
    const wsName = localStorage.getItem('wsName') == null ? loadWSName : localStorage.getItem('wsName');
    setModal(MODE_SETTING, wsName, localStorage.getItem('wsName') == null ? 'ev' : 'de');
    openModal = new bootstrap.Modal(document.getElementById('setting_modal'));
    openModal.show();
}

function saveSetting() {
    if (getSelectedDef() == 'ev') {
        localStorage.removeItem('lang');
        localStorage.removeItem('wsName');
    }
    else {
        localStorage.setItem('lang', iniLang);
        localStorage.setItem('wsName', getSelectedEnv());
    }
    openModal.hide();
}

function cancelSetting() {
    openModal.hide();
}

function doChangeEnv() {
    iniLang = _tsmLang;
    setModal(MODE_CHANGE, loadWSName, null);
    openModal = new bootstrap.Modal(document.getElementById('setting_modal'));
    openModal.show();
}

function setModal(mode, selInp, selLaunchInp) {
    const lblElm = document.getElementById('modalLabel');
    const btnElm = document.getElementById('btn_ok');
    const selElm = document.getElementById('sel_lang');
    const selEnv = document.getElementById('sel_env');
    const selLaunchElm = document.getElementById('sel_launch');
    const cancelElm = document.getElementById('btn_cancel');
    if (mode == MODE_LAUNCH) {
        lblElm.innerText = env.env_msg[iniLang];
        btnElm.innerText = env.launch_msg[iniLang];
        selElm.innerText = env.lang_msg[iniLang];
        selElm.onclick = function() { return changeLang(MODE_LAUNCH); }
        btnElm.onclick = function() { selectEnvironment(false); }
        selLaunchElm.style.display = 'none';
        cancelElm.style.display = 'none';
    }
    else if (mode == MODE_CHANGE) {
        lblElm.innerText = env.change_msg[iniLang];
        btnElm.innerText = env.ok_msg[iniLang];
        btnElm.onclick = function() { selectEnvironment(true); }
        selElm.innerText = env.lang_msg[iniLang];
        selElm.onclick = function() { return changeLang(MODE_CHANGE); }
        selLaunchElm.style.display = 'none';
        selEnv.style.display = 'flex';
        cancelElm.innerText = env.cancel_msg[iniLang];
        cancelElm.style.display = 'block';
        cancelElm.onclick = cancelSetting;
    }
    else if (mode == MODE_SETTING) {
        const everyInp = document.getElementById('every_launch');
        const defaultInp = document.getElementById('use_default');
        everyInp.onchange = function() {
            selEnv.style.display = everyInp.checked ? 'none' : 'flex';
        }
        defaultInp.onchange = function() {
            selEnv.style.display = defaultInp.checked ? 'flex' : 'none';
        }
        if (selLaunchInp == 'ev') {
            everyInp.checked = true;
            defaultInp.checked = false;
            selEnv.style.display = 'none';
        }
        else {
            everyInp.checked = false;
            defaultInp.checked = true;
            selEnv.style.display = 'flex';
        }
        lblElm.innerText = env.setting_msg[iniLang];
        btnElm.innerText = env.ok_msg[iniLang];
        btnElm.onclick = saveSetting;
        selElm.innerText = env.lang_msg[iniLang];
        selElm.onclick = function() { return changeLang(MODE_SETTING); }
        selLaunchElm.style.display = 'block';
        const everyLaunchMsgElm = document.getElementById('every_launch_msg');
        const useDefaultMsgElm = document.getElementById('use_default_msg');
        everyLaunchMsgElm.innerText = env.sel_launch_every_msg[iniLang];
        useDefaultMsgElm.innerText = env.sel_launch_default_msg[iniLang];
        cancelElm.innerText = env.cancel_msg[iniLang];
        cancelElm.style.display = 'block';
        cancelElm.onclick = cancelSetting;
    }
    let env_html = "";
    for (let i = 0; i < env.envs.length; i++) {
        let env_name = env.envs[i];
        let env_str = env.m_desc[iniLang][env_name];
        if (mode != MODE_CHANGE) {
            const env_str2 = env.m_desc2[iniLang][env_name];
            if (env_str2 != "") {
                env_str += '<br />' + env_str2;
            }
        }
        env_html += '<div class="col-md-4">\n';
        env_html += '<p><img src="img/' + env_name + '_' + iniLang + '.png" width="100%" /></p>\n';
        env_html += '<h2 class="fs-5"><label for="inp_' + env_name + '"><input type="radio" value="' + env_name + '" name="env" id="inp_' + env_name + '">&nbsp;' + env.m_title[iniLang][env_name] + '</label></h2>\n';
        env_html += '<p>' + env_str + '</p>\n';
        env_html += '</div>\n';
    }
    selEnv.innerHTML = env_html;
    if (selInp != null) {
        const inpElm = document.getElementById('inp_' + selInp);
        inpElm.checked = true;
    }
}

function changeLang(mode) {
    iniLang = (iniLang == 'ja') ? 'en' : 'ja';
    let env_name = getSelectedEnv();
    let def_value = getSelectedDef();
    setModal(mode, env_name, def_value);
    return false;
}

function selectEnvironment(isSave) {
    let loc = location.origin + location.pathname;
    let env_name = getSelectedEnv();
    if (iniLang == _tsmLang && iniWS == env_name) {
        loadWSName = iniWS;
        openModal.hide();
        return false;
    }
    if (isSave) {
        const ws = Blockly.serialization.workspaces.save(workspace);
        const wsCode = JSON.stringify(ws);
        localStorage.setItem('curProg', wsCode);
    }
    loc += '?lang=' + iniLang;
    loc += '&ws=' + env_name;
    location.href = loc;
}

function getSelectedEnv() {
    let env_name;
    for (let i = 0; i < env.envs.length; i++) {
        env_name = env.envs[i];
        let inpElm = document.getElementById('inp_' + env_name);
        if (inpElm.checked) {
            break;
        }
    }
    return env_name;
}

function getSelectedDef() {
    if (document.getElementById('every_launch').checked) {
        return 'ev';
    }
    else {
        return 'de';
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
    btnChangeEnv = document.getElementById('chenv');
    btnChangeEnv.onclick = doChangeEnv;
    btnSetting = document.getElementById('setting');
    btnSetting.onclick = doSetting;
    btnStop.setAttribute('disabled', 'disabled');
}
