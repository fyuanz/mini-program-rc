"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let UID = {
    _nextID: 0,
    get: function () {
        return UID._nextID++;
    }
};
exports.default = UID;
