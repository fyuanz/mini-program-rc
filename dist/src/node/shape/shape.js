"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphics_1 = __importDefault(require("../graphics"));
class Shape extends graphics_1.default {
    draw() { }
    render(ctx) {
        this.clear();
        this.draw();
        super.render(ctx);
    }
}
exports.default = Shape;
