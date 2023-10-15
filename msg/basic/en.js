export function addMessages() {
  Blockly.Msg["TSUMICKY_CATEGORY_BASIC"] = "Basic";
  Blockly.Msg["TSUMICKY_BASIC_MAIN"] = "setup %1 %2 loop %3 %4 end %5 %6";
  Blockly.Msg["TSUMICKY_BASIC_MAIN_TOOLTIP"] = "In the 'setup' part, enter the block to be executed during initialization. \nIn the 'repeat' part, enter a block to be executed repeatedly. \nIn the 'end' part, enter the block to be executed when the program ends.";
  Blockly.Msg["TSUMICKY_BASIC_NORMAL_MAIN"] = "statements %1 %2";
  Blockly.Msg["TSUMICKY_BASIC_NORMAL_MAIN_TOOLTIP"] = "Insert the block for the process you want to perform into this block.";
  Blockly.Msg["TSUMICKY_BASIC_CONSOLE_LOG"] = "output %1 %2 to console";
  Blockly.Msg["TSUMICKY_BASIC_CONSOLE_LOG_TOOLTIP"] = "Outputs characters etc. to the web browser console.";
  Blockly.Msg["TSUMICKY_BASIC_SLEEP"] = "wait %1 milliseconds";
  Blockly.Msg["TSUMICKY_BASIC_SLEEP_TOOLTIP"] = "Stops program execution for a specified period of time. \nThe unit is milliseconds (=1/1000 seconds).";
  Blockly.Msg["TSUMICKY_BASIC_END"] = "exit program";
  Blockly.Msg["TSUMICKY_BASIC_END_TOOLTIP"] = "Exit this program.";
};
