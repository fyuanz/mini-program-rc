"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_1 = __importDefault(require("./node"));
class Text extends node_1.default {
    constructor(text, option) {
        super();
        this.text = text;
        option = option || {};
        this.font = option.font || '10px sans-serif';
        this.color = option.color || 'black';
        this.textAlign = option.textAlign || 'left';
        this.baseline = option.baseline || 'top';
    }
    render(ctx) {
        ctx.font = this.font;
        ctx.fillStyle = this.color;
        ctx.textAlign = this.textAlign;
        ctx.textBaseline = this.baseline;
        ctx.fillText(this.text, 0, 0);
    }
}
exports.default = Text;
