import Node from './node';

class Text extends Node {
  [s: string]: any;

  constructor(text: string, option: any) {
    super();
    this.text = text;
    option = option || {};
    this.font = option.font || '10px sans-serif';
    this.color = option.color || 'black';
    this.textAlign = option.textAlign || 'left';
    this.baseline = option.baseline || 'top';
  }

  render(ctx: any) {
    ctx.font = this.font;
    ctx.fillStyle = this.color;
    ctx.textAlign = this.textAlign;
    ctx.textBaseline = this.baseline;
    ctx.fillText(this.text, 0, 0);
  }
}

export default Text;
