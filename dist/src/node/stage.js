"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const group_1 = __importDefault(require("./group"));
const index_1 = __importDefault(require("../render/index"));
const event_1 = __importDefault(require("../event/event"));
class Stage extends group_1.default {
    constructor(container, width, height) {
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
        this.render = new index_1.default(ctx, container.width, container.height);
        this.hitCtx = null;
        this.touchObject = null;
        this.___instanceof = 'Stage';
    }
    update() {
        this.render.update(this);
    }
    setHitCanvas(hitCanvas) {
        const hitCtx = hitCanvas.getContext('2d');
        hitCanvas.width = this.width;
        hitCanvas.height = this.height;
        this.hitCtx = hitCtx;
    }
    getTextWidth(text, font) {
        this.ctx.font = font;
        return this.ctx.measureText(text).width;
    }
    loadImage(url) {
        const canvas = this.container;
        return new Promise((resolve, reject) => {
            const image = canvas.createImage();
            image.src = url;
            image.onload = function () {
                resolve(image);
            };
            image.onerror = function (error) {
                reject(error);
            };
        });
    }
    touchStartHandler(evt) {
        const p1 = evt.touches[0];
        evt.stageX = Math.round(p1.x);
        evt.stageY = Math.round(p1.y);
        let obj = this.getObjectUnderPoint(evt);
        this.touchObject = obj;
        this._mouseDownX = evt.stageX;
        this._mouseDownY = evt.stageY;
        this.preStageX = evt.stageX;
        this.preStageY = evt.stageY;
        this.__dispatchEvent(obj, evt);
    }
    touchMoveHandler(evt) {
        const p1 = evt.touches[0];
        const touchesLength = evt.touches.length;
        evt.stageX = Math.round(p1.x);
        evt.stageY = Math.round(p1.y);
        let mockEvt = new event_1.default();
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
        this.__dispatchEvent(this.touchObject, evt);
    }
    touchEndHandler(evt) {
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
        if (obj &&
            Math.abs(this._mouseDownX - this._mouseUpX) < 10 &&
            Math.abs(this._mouseDownY - this._mouseUpY) < 10) {
            let mockEvt = new event_1.default();
            mockEvt.stageX = evt.stageX;
            mockEvt.stageY = evt.stageY;
            mockEvt.originalEvent = evt;
            mockEvt.type = 'tap';
            obj.dispatchEvent(mockEvt);
        }
    }
    getObjectUnderPoint(evt) {
        const x = evt.stageX;
        const y = evt.stageY;
        return this._getObjectsUnderPoint(x, y, this.hitCtx) || this;
    }
    __dispatchEvent(obj, evt) {
        if (!obj)
            return;
        let mockEvt = new event_1.default();
        mockEvt.stageX = evt.stageX;
        mockEvt.stageY = evt.stageY;
        mockEvt.originalEvent = evt;
        mockEvt.type = evt.type;
        obj.dispatchEvent(mockEvt);
    }
}
exports.default = Stage;
