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
  touchObject: any;
  ___instanceof: string;

  pinchStartDistance: number;
  startPos1: { x: number, y: number };
  startPos2: { x: number, y: number };

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

    this.touchObject = null;
    this.___instanceof = 'Stage';

    this.pinchStartDistance = 0;
    this.startPos1 = {x: 0, y: 0};
    this.startPos2 = {x: 0, y: 0};

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
    const p1 = evt.touches[0];
    const touchesLength = evt.touches.length;
    evt.stageX = Math.round(p1.x);
    evt.stageY = Math.round(p1.y);
    let obj = this.getObjectUnderPoint(evt);
    this.touchObject = obj;
    this._mouseDownX = evt.stageX;
    this._mouseDownY = evt.stageY;
    this.preStageX = evt.stageX;
    this.preStageY = evt.stageY;

    if(obj && touchesLength === 2) {
      const p2 = evt.touches[1];
      this.pinchStartDistance = Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
      this.startPos1 = p1
      this.startPos2 = p2
    }

    this.__dispatchEvent(obj, evt);
  }

  touchMoveHandler(evt: any) {
    const p1 = evt.touches[0];
    const touchesLength = evt.touches.length;
    evt.stageX = Math.round(p1.x);
    evt.stageY = Math.round(p1.y);

    let mockEvt = new Event();
    mockEvt.stageX = evt.stageX;
    mockEvt.stageY = evt.stageY;
    mockEvt.originalEvent = evt;

    if (this.touchObject && touchesLength === 1) {
      mockEvt.type = 'drag';
      mockEvt.dx = mockEvt.stageX - this.preStageX;
      mockEvt.dy = mockEvt.stageY - this.preStageY;
      this.preStageX = mockEvt.stageX;
      this.preStageY = mockEvt.stageY;
      this.touchObject.dispatchEvent(mockEvt);
    }

    if (this.touchObject && touchesLength === 2) {
      const p2 = evt.touches[1];
      if(this.pinchStartDistance > 0) {
        const distance = Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
        const deltaX1 = p1.x - this.startPos1.x;
        const deltaY1 = p1.y - this.startPos1.y;
        const deltaX2 = p2.x - this.startPos2.x;
        const deltaY2 = p2.y - this.startPos2.y;

        mockEvt.type = 'pinch';
        mockEvt.zoom = parseFloat((distance / this.pinchStartDistance).toFixed(2));
        mockEvt.dx = Math.round((deltaX1 + deltaX2) / 2);
        mockEvt.dy = Math.round((deltaY1 + deltaY2) / 2);
        this.pinchStartDistance = distance;
        this.startPos1 = p1;
        this.startPos2 = p2;
        this.touchObject.dispatchEvent(mockEvt);
      }
    }

    this.__dispatchEvent(this.touchObject, evt);
  }

  touchEndHandler(evt: any) {
    const p1 = evt.changedTouches[0];

    evt.stageX = Math.round(p1.x);
    evt.stageY = Math.round(p1.y);

    let obj = this.getObjectUnderPoint(evt);
    this._mouseUpX = evt.stageX;
    this._mouseUpY = evt.stageY;

    this.__dispatchEvent(this.touchObject, evt);

    this.touchObject = null;
    this.preStageX = null;
    this.preStageY = null;

    if (
      obj &&
      Math.abs(this._mouseDownX - this._mouseUpX) < 10 &&
      Math.abs(this._mouseDownY - this._mouseUpY) < 10
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

  private __dispatchEvent(obj: any, evt: any) {
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
