"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_1 = __importDefault(require("./node"));
class Group extends node_1.default {
    constructor() {
        super();
        this.children = [];
        this.mouseChildren = true;
    }
    add(child) {
        const len = arguments.length;
        for (let i = 0; i < len; i++) {
            const c = arguments[i];
            const parent = c.parent;
            if (parent) {
                parent.removeChildAt(parent.children.indexOf(c));
            }
            this.children.push(c);
            c.parent = this;
        }
    }
    addChildAt(child, index) {
        let par = child.parent;
        par && par.removeChildAt(par.children.indexOf(child));
        child.parent = this;
        this.children.splice(index, 0, child);
    }
    removeChildAt(index) {
        let child = this.children[index];
        if (child) {
            child.parent = null;
        }
        this.children.splice(index, 1);
    }
    replace(current, pre) {
        const index = pre.parent.children.indexOf(pre);
        this.removeChildAt(index);
        this.addChildAt(current, index);
    }
    remove(child) {
        if (!child)
            return;
        const len = arguments.length;
        let cLen = this.children.length;
        for (let i = 0; i < len; i++) {
            for (let j = 0; j < cLen; j++) {
                if (child.id === this.children[j].id) {
                    child.parent = null;
                    this.children.splice(j, 1);
                    j--;
                    cLen--;
                }
            }
        }
    }
    empty() {
        this.children.forEach(child => {
            child.parent = null;
        });
        this.children.length = 0;
    }
    destroy() {
        this.empty();
        this.parent && this.parent.destroy();
    }
    _getObjectsUnderPoint(x, y, hitCtx) {
        const ctx = hitCtx;
        if (!this._testMask(this, x, y, ctx)) {
            return null;
        }
        let children = this.children;
        let l = children.length;
        for (let i = l - 1; i >= 0; i--) {
            let child = children[i];
            let hitBox = child.hitBox;
            if (!child.isVisible() || child.ignoreHit) {
                continue;
            }
            if (!this._testMask(child, x, y, ctx)) {
                continue;
            }
            if (!hitBox && child instanceof Group) {
                let result = child._getObjectsUnderPoint(x, y, ctx);
                if (result)
                    return !this.mouseChildren ? this : result;
            }
            else {
                let props = child.getConcatenatedDisplayProps(child._props);
                let mtx = props.matrix;
                if (hitBox) {
                    let mtxClone = mtx.clone();
                    child.setBounds(hitBox[0], hitBox[1], hitBox[2], hitBox[3]);
                    let bounds = child._getBounds(mtxClone, true);
                    let AABB = [bounds.x, bounds.y, bounds.width, bounds.height];
                    if (!this.checkPointInAABB(x, y, AABB)) {
                        continue;
                    }
                    if (child instanceof Group) {
                        let result = child._getObjectsUnderPoint(x, y, ctx);
                        if (result) {
                            return !this.mouseChildren ? this : result;
                        }
                        else {
                            return child;
                        }
                    }
                }
                ctx.globalAlpha = props.alpha;
                ctx.setTransform(mtx.a, mtx.b, mtx.c, mtx.d, mtx.tx - x, mtx.ty - y);
                child.render(ctx);
                if (!this._testHit(ctx)) {
                    continue;
                }
                ctx.setTransform(1, 0, 0, 1, 0, 0);
                ctx.clearRect(0, 0, 2, 2);
                return !this.mouseChildren ? this : child;
            }
        }
        return null;
    }
    _testMask(target, x, y, hitCtx) {
        const ctx = hitCtx;
        const mask = target.mask;
        if (!mask) {
            return true;
        }
        let mtx = this._props.matrix;
        let parent = target.parent;
        mtx = parent ? parent.getConcatenatedMatrix(mtx) : mtx.identity();
        mtx = mask.getMatrix(mask._props.matrix).prependMatrix(mtx);
        ctx.beginPath();
        ctx.setTransform(mtx.a, mtx.b, mtx.c, mtx.d, mtx.tx - x, mtx.ty - y);
        mask.render(ctx);
        ctx.fillStyle = '#000';
        ctx.fill();
        if (!this._testHit(ctx)) {
            return false;
        }
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.clearRect(0, 0, 2, 2);
        return true;
    }
    _testHit(ctx) {
        return ctx.getImageData(0, 0, 1, 1).data[3] > 1;
    }
    checkPointInAABB(x, y, AABB) {
        let minX = AABB[0];
        if (x < minX)
            return false;
        let minY = AABB[1];
        if (y < minY)
            return false;
        let maxX = minX + AABB[2];
        if (x > maxX)
            return false;
        let maxY = minY + AABB[3];
        return y <= maxY;
    }
}
exports.default = Group;
