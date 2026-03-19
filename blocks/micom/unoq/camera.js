export function addBlocks() {
  Blockly.defineBlocksWithJsonArray([
    {
      "type": "unoq_camera_init_usb_camera",
      "tooltip": "%{BKY_TSUMICKY_UNOQ_CAMERA_INIT_USB_CAMERA_TOOLTIP}",
      "helpUrl": "https://www.hfchannel.site/tsumicky/ja/ref/micom/unoq/camera/blocks.php#init_usb_camera",
      "message0": "%{BKY_TSUMICKY_UNOQ_CAMERA_INIT_USB_CAMERA}",
      "args0": [
        {
          "type": "field_variable",
          "name": "ws_var",
          "variable": "sock"
        },
        {
          "type": "input_dummy",
          "name": ""
        },
        {
          "type": "input_value",
          "name": "num",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "x",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "y",
          "check": "Number"
        }
      ],
      "output": "UNOQ_Camera",
      "colour": 60,
      "inputsInline": true
    }
  ]);
}
