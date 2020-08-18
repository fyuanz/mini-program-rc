import Group from './group';
import Render from '../render/index';
import { ScriptEvent } from '../event/event';
import Event from '../event/event';

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

  loadImage(url: string) {
    const canvas = this.container;
    return new Promise((resolve, reject) => {
      const image = canvas.createImage();
      image.src = url;
      image.onload = function () {
        resolve(image);
      };
      image.onerror = function (error: any) {
        reject(error);
      };
    });
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
    this.__dispatchEvent(obj, evt);
  }

  touchMoveHandler(evt: any) {
    const p1 = evt.changedTouches[0];

    evt.stageX = Math.round(p1.x * this.scaleX);
    evt.stageY = Math.round(p1.y * this.scaleY);
    let obj = this.getObjectUnderPoint(evt);
    let mockEvt = new Event();
    mockEvt.stageX = evt.stageX;
    mockEvt.stageY = evt.stageY;
    mockEvt.originalEvent = evt;

    if (this.willDragObject && evt.changedTouches.length === 1) {
      mockEvt.type = 'drag';
      mockEvt.dx = mockEvt.stageX - this.preStageX;
      mockEvt.dy = mockEvt.stageY - this.preStageY;
      this.preStageX = mockEvt.stageX;
      this.preStageY = mockEvt.stageY;
      this.willDragObject.dispatchEvent(mockEvt);
    }

    if (obj) {
      if (this._overObject === null) {
        this._overObject = obj;
      } else {
        if (obj.id !== this._overObject.id) {
          this._overObject = obj;
        } else {
          this.__dispatchEvent(obj, evt);
        }
      }
    } else if (this._overObject) {
      this._overObject = null;
    }
  }

  touchEndHandler(evt: any) {
    const p1 = evt.changedTouches[0];

    evt.stageX = Math.round(p1.x * this.scaleX);
    evt.stageY = Math.round(p1.y * this.scaleY);

    let obj = this.getObjectUnderPoint(evt);
    this._mouseUpX = evt.stageX;
    this._mouseUpY = evt.stageY;

    this.willDragObject = null;
    this.preStageX = null;
    this.preStageY = null;

    this.__dispatchEvent(obj, evt);

    if (
      obj &&
      Math.abs(this._mouseDownX - this._mouseUpX) < 30 &&
      Math.abs(this._mouseDownY - this._mouseUpY) < 30
    ) {
      let mockEvt = new Event();
      mockEvt.stageX = evt.stageX;
      mockEvt.stageY = evt.stageY;
      mockEvt.originalEvent = evt;
      mockEvt.type = 'tap';
      obj.dispatchEvent(mockEvt);
    }
  }

  getObjectUnderPoint(evt: ScriptEvent) {
    const x = evt.stageX;
    const y = evt.stageY;
    return this._getObjectsUnderPoint(x, y, this.hitCtx) || this;
  }

  __dispatchEvent(obj: any, evt: any) {
    if (!obj) return;
    let mockEvt = new Event();
    mockEvt.stageX = evt.stageX;
    mockEvt.stageY = evt.stageY;
    mockEvt.originalEvent = evt;
    mockEvt.type = evt.type;
    obj.dispatchEvent(mockEvt);
  }
}

export default Stage;
