import Group from './group';
import Render from '../render/index';

class Stage extends Group {
  [x: string]: any;
  constructor(container: any, width: number, height: number) {
    super();
    this.container = container;
    this.width = width;
    this.height = height;
    const ctx = container.getContext('2d');
    // @ts-ignore
    const dpr = wx.getSystemInfoSync().pixelRatio;
    container.width = width * dpr;
    container.height = height * dpr;
    ctx.scale(dpr, dpr);
    this.dpr = dpr;
    this.ctx = ctx;
    this.render = new Render(ctx, container.width, container.height);

    this.hitCtx = null;

    this.willDragObject = null;
    this._overObject = null;
    this.___instanceof = 'Stage';
  }

  update() {
    this.render.update(this);
  }
}

export default Stage;
