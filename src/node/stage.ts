import Group from './group';
import Render from '../render/index';
import { ScriptEvent } from '../event/event';

class Stage extends Group {
  [x: string]: any;

  container: any;
  width: number;
  height: number;
  drp!: number;
  ctx: any;
  render: Render;
  hitCtx: any;
  willDragObject: any;
  _overObject: any;
  ___instanceof: string;

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

  setHitCanvas(hitCanvas: any) {
    const hitCtx = hitCanvas.getContext('2d');
    hitCanvas.width = this.width;
    hitCanvas.height = this.height;
    this.hitCtx = hitCtx;
  }

  getTextWidth(text: string, font: string) {
    this.ctx.font = font;
    return this.ctx.measureText(text).width;
  }

  touchStartHandler(evt: any) {
    const p1 = evt.changedTouches[0];
    evt.stageX = Math.round(p1.x * this.scaleX);
    evt.stageY = Math.round(p1.y * this.scaleY);

    let obj = this.getObjectUnderPoint(evt);
    this.willDragObject = obj;
    this._mouseDownX = evt.stageX;
    this._mouseDownY = evt.stageY;
    this.preStageX = evt.stageX;
    this.preStageY = evt.stageY;
    console.log(obj);
    // this.__dispatchEvent(obj, evt);
  }

  getObjectUnderPoint(evt: ScriptEvent) {
    const x = evt.stageX;
    const y = evt.stageY;
    return this._getObjectsUnderPoint(x, y, this.hitCtx);
  }
}

export default Stage;
