const modName = 'unoq_camera';

function setRuntimeName() {
  Blockly.runTimeJS[modName] = { 'modName': modName, 'file': 'micom/unoq/camera' };
}

export function addJS() {
  javascript.javascriptGenerator.forBlock['unoq_camera_init_usb_camera'] = function(block, generator) {
    setRuntimeName();
    const ws_var = generator.nameDB_.getName(block.getFieldValue('ws_var'), Blockly.Names.NameType.VARIABLE);
    const num = generator.valueToCode(block, 'num', generator.ORDER_ATOMIC);
    const x = generator.valueToCode(block, 'x', generator.ORDER_ATOMIC);
    const y = generator.valueToCode(block, 'y', generator.ORDER_ATOMIC);
    const code = `await $_` + modName + `.init_usb_camera(${ws_var}, ${num}, ${x}, ${y}, '${block.id}')`;
    return [ code, Blockly.JavaScript.ORDER_NONE ];
  };
}
