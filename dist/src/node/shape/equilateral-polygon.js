"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const shape_1 = __importDefault(require("./shape"));
class EquilateralPolygon extends shape_1.default {
    constructor(num, r, options) {
        super();
        this.num = num;
        this.r = r;
        this.options = options || {};
        this.vertex = [];
        this.initVertex();
    }
    initVertex() {
        this.vertex.length = [];
        const num = this.num;
        const r = this.r;
        let i, startX, startY, newX, newY;
        if (num % 2 === 0) {
            startX = r * Math.cos((2 * Math.PI * 0) / num);
            startY = r * Math.sin((2 * Math.PI * 0) / num);
            this.vertex.push([startX, startY]);
            for (i = 1; i < num; i++) {
                newX = r * Math.cos((2 * Math.PI * i) / num);
                newY = r * Math.sin((2 * Math.PI * i) / num);
                this.vertex.push([newX, newY]);
            }
        }
        else {
            startX = r * Math.cos((2 * Math.PI * 0) / num - Math.PI / 2);
            startY = r * Math.sin((2 * Math.PI * 0) / num - Math.PI / 2);
            this.vertex.push([startX, startY]);
            for (i = 1; i < num; i++) {
                newX = r * Math.cos((2 * Math.PI * i) / num - Math.PI / 2);
                newY = r * Math.sin((2 * Math.PI * i) / num - Math.PI / 2);
                this.vertex.push([newX, newY]);
            }
        }
    }
    draw() {
        this.beginPath();
        this.moveTo(this.vertex[0][0], this.vertex[0][1]);
        for (let i = 1, len = this.vertex.length; i < len; i++) {
            this.lineTo(this.vertex[i][0], this.vertex[i][1]);
        }
        this.closePath();
        if (this.options.fillStyle) {
            this.fillStyle(this.options.fillStyle);
            this.fill();
        }
        if (this.options.strokeStyle) {
            this.strokeStyle(this.options.strokeStyle);
            if (typeof this.options.lineWidth === 'number') {
                this.lineWidth(this.options.lineWidth);
            }
            this.stroke();
        }
    }
}
exports.default = EquilateralPolygon;
