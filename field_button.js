class FieldButton extends Blockly.Field {
  constructor(text, callbackKey, backgroundColor, textColor, borderColor) {
    super(Blockly.Field.SKIP_SETUP);

    this.text_ = text;
    this.callbackKey_ = callbackKey;
    this.backgroundColor_ = backgroundColor || '#999999';
    this.textColor_ = textColor || '#000000';
    this.borderColor_ = borderColor || '#666666';
  }

  /**
   * Factory methods for adding fields to blocks
   */
  isSerializable() {
    return false;
  }

  static fromJson(options) {
    return new FieldButton(
      Blockly.utils.parsing.replaceMessageReferences(options['text']),
      options['callbackKey'],
      options['backgroundColor'],
      options['textColor'],
      options['borderColor']
    );
  }

  /**
   * Initialize the DOM element for the field
   */
  initView() {
    this.buttonElement_ = Blockly.utils.dom.createSvgElement('g', {
      'class': 'fieldButton',
      'cursor': 'pointer'
    }, this.sourceBlock_.getSvgRoot());
    const rectAttributes = {
      'rx': 4,
      'ry': 4,
      'fill': this.backgroundColor_,
      'height': 24
    };
    if (this.borderColor_) {
      rectAttributes['stroke'] = this.borderColor_;
      rectAttributes['stroke-width'] = '1.5';
    }
    this.buttonRect_ = Blockly.utils.dom.createSvgElement('rect', rectAttributes, this.buttonElement_);
    this.buttonText_ = Blockly.utils.dom.createSvgElement('text', {
      'class': 'blocklyText',
      'fill': this.textColor_,
      'x': 8,
      'y': 17
    }, this.buttonElement_);
    this.buttonText_.textContent = this.text_;

    this.fieldGroup_.appendChild(this.buttonElement_);
  }

  updateSize_() {
    if (!this.buttonText_) return;

    const bbox = this.buttonText_.getBBox();
    const padding = 16; // 左右8pxずつのパディング
    const width = bbox.width + padding;
    const height = 24;

    this.buttonRect_.setAttribute('width', width);
    this.buttonRect_.setAttribute('height', height);
    this.size_.width = width;
    this.size_.height = height;
  }

  bindEvents_() {
    super.bindEvents_();
    Blockly.browserEvents.bind(this.buttonElement_, 'mousedown', this, this.onMouseDown_);
  }

  onMouseDown_(e) {
    e.stopPropagation();
    e.preventDefault();
    
    const workspace = this.sourceBlock_.workspace;
    if (workspace.getButtonCallback) {
      const callback = workspace.getButtonCallback(this.callbackKey_);
      if (callback) {
        callback(this.sourceBlock_);
      }
    }
  }
}

Blockly.fieldRegistry.register('field_button', FieldButton);
