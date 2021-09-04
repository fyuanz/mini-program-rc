"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_1 = __importDefault(require("./node"));
class Bitmap extends node_1.default {
    constructor(img) {
        super();
        if (Bitmap.cache[img.src]) {
            this.img = Bitmap.cache[img.src];
            this.rect = [0, 0, this.img.width, this.img.height];
            this.width = this.img.width;
            this.height = this.img.height;
        }
        else {
            this.img = img;
            this.rect = [0, 0, img.width, img.height];
            this.width = img.width;
            this.height = img.height;
            Bitmap.cache[img.src] = img;
        }
    }
    render(ctx) {
        let rect = this.rect;
        ctx.drawImage(this.img, rect[0], rect[1], rect[2], rect[3], 0, 0, rect[2], rect[3]);
    }
}
Bitmap.cache = {};
exports.default = Bitmap;
