export function addMessages() {
  Blockly.Msg["TSUMICKY_CATEGORY_SL_PCA"] = "主成分分析";
  Blockly.Msg["TSUMICKY_SL_PCA_INIT"] = "主成分分析を初期化する %1 次元または累積寄与率 %2"
  Blockly.Msg["TSUMICKY_SL_PCA_INIT_TOOLTIP"] = "主成分分析を初期化します。\n次元数を指定する場合は、1以上かつ元のデータの次元数以下の数を指定します。\nまた、累積寄与率を指定する場合は、0以上1未満の値を指定します。"
  Blockly.Msg["TSUMICKY_SL_PCA_TRANSFORM"] = "主成分分析でXを変換 %1"
  Blockly.Msg["TSUMICKY_SL_PCA_TRANSFORM_TOOLTIP"] = "主成分分析を行ってXを変換します。"
  Blockly.Msg["TSUMICKY_SL_PCA_RDIM"] = "主成分分析後の次元数 %1"
  Blockly.Msg["TSUMICKY_SL_PCA_RDIM_TOOLTIP"] = "主成分分析で次元削減を行った後の次元の数を得ます。"
  Blockly.Msg["TSUMICKY_SL_PCA_EV"] = "%1 に固有値を書き込む %2"
  Blockly.Msg["TSUMICKY_SL_PCA_EV_TOOLTIP"] = "主成分分析結果の固有値を、指定したセル範囲に書き込みます。"
  Blockly.Msg["TSUMICKY_SL_PCA_EVR"] = "%1 に寄与率を書き込む %2"
  Blockly.Msg["TSUMICKY_SL_PCA_EVR_TOOLTIP"] = "主成分分析結果の寄与率を、指定したセル範囲に書き込みます。"
  Blockly.Msg["TSUMICKY_SL_PCA_COMPONENTS"] = "%1 に固有ベクトルを書き込む %2"
  Blockly.Msg["TSUMICKY_SL_PCA_COMPONENTS_TOOLTIP"] = "主成分分析結果の固有ベクトルを、指定したセル範囲に書き込みます。"
};
