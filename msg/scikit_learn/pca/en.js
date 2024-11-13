export function addMessages() {
  Blockly.Msg["TSUMICKY_CATEGORY_SL_PCA"] = "PCA";
  Blockly.Msg["TSUMICKY_SL_PCA_INIT"] = "init PCA %1 dimensions or cumulative contribution ratio %2"
  Blockly.Msg["TSUMICKY_SL_PCA_INIT_TOOLTIP"] = "Initialize the principal component analysis.\nWhen specifying the number of dimensions, specify a number that is 1 or more and less than the number of dimensions of the original data.\nWhen specifying the cumulative contribution ratio, specify a value that is 0 or more and less than 1."
  Blockly.Msg["TSUMICKY_SL_PCA_TRANSFORM"] = "transform X with PCA %1"
  Blockly.Msg["TSUMICKY_SL_PCA_TRANSFORM_TOOLTIP"] = "Transform X by principal components analysis."
  Blockly.Msg["TSUMICKY_SL_PCA_RDIM"] = "number of dimensions after PCA %1"
  Blockly.Msg["TSUMICKY_SL_PCA_RDIM_TOOLTIP"] = "Get the number of dimensions after principal component analysis."
  Blockly.Msg["TSUMICKY_SL_PCA_EV"] = "Write explained variance to %1 %2"
  Blockly.Msg["TSUMICKY_SL_PCA_EV_TOOLTIP"] = "Write the explained variance of the principal component analysis results to the specified cell range."
  Blockly.Msg["TSUMICKY_SL_PCA_EVR"] = "Write explained variance ratio to %1 %2"
  Blockly.Msg["TSUMICKY_SL_PCA_EVR_TOOLTIP"] = "Write the explained variance ratio of the principal component analysis results to the specified cell range."
  Blockly.Msg["TSUMICKY_SL_PCA_COMPONENTS"] = "Write eigenvectors to %1 %2"
  Blockly.Msg["TSUMICKY_SL_PCA_COMPONENTS_TOOLTIP"] = "Write the eigenvectors resulting from the principal component analysis to the specified cell range."
};
