"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_1 = __importDefault(require("./node"));
const assMap = {
    fillStyle: true,
    strokeStyle: true,
    lineWidth: true,
    lineCap: true,
    lineDashOffset: true,
    lineJoin: true,
    miterLimit: true
};
class Graphics extends node_1.default {
    constructor() {
        super();
        this.cmds = [];
        this.currentGradient = null;
    }
    clearRect(...params) {
        this.cmds.push(['clearRect', arguments]);
        return this;
    }
    rect(...params) {
        this.cmds.push(['rect', arguments]);
        return this;
    }
    clear(...params) {
        this.cmds.length = 0;
        return this;
    }
    setLineDash(...params) {
        this.cmds.push(['setLineDash', arguments]);
        return this;
    }
    strokeRect(...params) {
        this.cmds.push(['strokeRect', arguments]);
        return this;
    }
    fillRect(...params) {
        this.cmds.push(['fillRect', arguments]);
        return this;
    }
    beginPath(...params) {
        this.cmds.push(['beginPath', arguments]);
        return this;
    }
    arc(...params) {
        this.cmds.push(['arc', arguments]);
        return this;
    }
    closePath(...params) {
        this.cmds.push(['closePath', arguments]);
        return this;
    }
    fillStyle(...params) {
        this.cmds.push(['fillStyle', arguments]);
        return this;
    }
    fill(...params) {
        this.cmds.push(['fill', arguments]);
        return this;
    }
    strokeStyle(...params) {
        this.cmds.push(['strokeStyle', arguments]);
        return this;
    }
    lineWidth(...params) {
        this.cmds.push(['lineWidth', arguments]);
        return this;
    }
    lineCap(...params) {
        this.cmds.push(['lineCap', arguments]);
        return this;
    }
    lineDashOffset(...params) {
        this.cmds.push(['lineDashOffset', arguments]);
        return this;
    }
    lineJoin(...params) {
        this.cmds.push(['lineJoin', arguments]);
        return this;
    }
    miterLimit(...params) {
        this.cmds.push(['miterLimit', arguments]);
        return this;
    }
    stroke(...params) {
        this.cmds.push(['stroke', arguments]);
        return this;
    }
    moveTo(...params) {
        this.cmds.push(['moveTo', arguments]);
        return this;
    }
    lineTo(...params) {
        this.cmds.push(['lineTo', arguments]);
        return this;
    }
    bezierCurveTo(...params) {
        this.cmds.push(['bezierCurveTo', arguments]);
        return this;
    }
    quadraticCurveTo(...params) {
        this.cmds.push(['quadraticCurveTo', arguments]);
        return this;
    }
    createRadialGradient(...params) {
        this.cmds.push(['createRadialGradient', arguments]);
        return this;
    }
    createLinearGradient(...params) {
        this.cmds.push(['createLinearGradient', arguments]);
        return this;
    }
    addColorStop(...params) {
        this.cmds.push(['addColorStop', arguments]);
        return this;
    }
    fillGradient(...params) {
        this.cmds.push(['fillGradient']);
        return this;
    }
    arcTo(...params) {
        this.cmds.push(['arcTo', arguments]);
        return this;
    }
    render(ctx) {
        this.cmds.forEach(cmd => {
            const methodName = cmd[0];
            if (assMap[methodName]) {
                ctx[methodName] = cmd[1][0];
            }
            else if (methodName === 'addColorStop') {
                this.currentGradient && this.currentGradient.addColorStop(cmd[1][0], cmd[1][1]);
            }
            else if (methodName === 'fillGradient') {
                ctx.fillStyle = this.currentGradient;
            }
            else {
                let result = ctx[methodName].apply(ctx, Array.prototype.slice.call(cmd[1]));
                if (methodName === 'createRadialGradient' || methodName === 'createLinearGradient') {
                    this.currentGradient = result;
                }
            }
        });
    }
}
exports.default = Graphics;
