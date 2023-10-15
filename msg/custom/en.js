export function addMessages() {
  Blockly.Msg["TSUMICKY_CATEGORY_CUSTOM"] = "Custom";
  Blockly.Msg["TSUMICKY_CUSTOM_FUNCTION_STATEMENT"] = "exec custom block on %1 %2 group %3 subgroup %4 command %5";
  Blockly.Msg["TSUMICKY_CUSTOM_FUNCTION_STATEMENT_TOOLTIP"] = "Executes a custom block in the microcontroller. \nSpecify the block to be executed by group/subgroup/command. \nParameters specify key-value pairs.";
  Blockly.Msg["TSUMICKY_CUSTOM_FUNCTION_VALUE"] = "result of custom block on %1 %2 group %3 subgroup %4 command %5";
  Blockly.Msg["TSUMICKY_CUSTOM_FUNCTION_VALUE_TOOLTIP"] = "Execute the custom block in the microcontroller and get the return value. \nSpecify the block to be executed by group/subgroup/command. \nParameters specify key-value pairs.";
  Blockly.Msg["TSUMICKY_CUSTOM_FUNCTION_PARAM"] = "key %1 value %2";
  Blockly.Msg["TSUMICKY_CUSTOM_FUNCTION_PARAM_TOOLTIP"] = "A key-value pair specified for the parameter.";
  Blockly.Msg["TSUMICKY_CUSTOM_FUNCTION_PARAM_CAPTION"] = "parameter";
  Blockly.Msg["TSUMICKY_CUSTOM_FUNCTION_CONTAINER"] = "parameter %1";
  Blockly.Msg["TSUMICKY_CUSTOM_FUNCTION_CONTAINER_TOOLTIP"] = "Reorganize blocks by adding, removing, or reordering key-value pairs.";
  Blockly.Msg["TSUMICKY_CUSTOM_FUNCTION_ITEM"] = "item";
  Blockly.Msg["TSUMICKY_CUSTOM_FUNCTION_ITEM_TOOLTIP"] = "Add key-value pairs to parameters";
};
