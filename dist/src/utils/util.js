"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadImage = void 0;
function loadImage(url, canvas) {
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
exports.loadImage = loadImage;
