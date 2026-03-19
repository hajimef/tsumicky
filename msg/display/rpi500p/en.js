export function addMessages() {
  Blockly.Msg["TSUMICKY_RPI500P_KBLED_INIT_MESSAGE"] = "initialize keyboard LED of %1";
  Blockly.Msg["TSUMICKY_RPI500P_KBLED_INIT_TOOLTIP"] = "Initialize the keyboard LED of the Raspberry Pi 500+.";
  Blockly.Msg["TSUMICKY_RPI500P_KBLED_SET_MESSAGE"] = "set keyboard LED color row %2 column %3 of %1 to %4";
  Blockly.Msg["TSUMICKY_RPI500P_KBLED_SET_TOOLTIP"] = "Specifie the LED at the row and column position on the Raspberry Pi 500+ keyboard.\nThe actual display is performed when the display block is executed.";
  Blockly.Msg["TSUMICKY_RPI500P_KBLED_SHOW_MESSAGE"] = "show keyboard LED of %1";
  Blockly.Msg["TSUMICKY_RPI500P_KBLED_SHOW_TOOLTIP"] = "Display the keyboard LED of the Raspberry Pi 500+.";
  Blockly.Msg["TSUMICKY_RPI500P_KBLED_BUF_CLEAR_MESSAGE"] = "clear keyboard LED buffer of %1";
  Blockly.Msg["TSUMICKY_RPI500P_KBLED_BUF_CLEAR_TOOLTIP"] = "Clear the buffer that stores the color of the keyboard LEDs of the Raspberry Pi 500+.\nUse this to prepare for the next display without turning off the LED display.";
  Blockly.Msg["TSUMICKY_RPI500P_KBLED_CLEAR_MESSAGE"] = "clear keyboard LED of %1";
  Blockly.Msg["TSUMICKY_RPI500P_KBLED_CLEAR_TOOLTIP"] = "Clear the keyboard LED of the Raspberry Pi 500+.";
}