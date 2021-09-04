"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _type = Symbol('type');
const _bubbles = Symbol('bubbles');
const _originalEvent = Symbol('_originalEvent');
class Event {
    constructor() {
        this[_type] = '';
        this[_originalEvent] = null;
        this[_bubbles] = true;
        this.cancelBubble = false;
    }
    stopPropagation() {
        this.cancelBubble = true;
    }
    get type() {
        return this[_type];
    }
    set type(value) {
        this[_type] = value;
    }
    get originalEvent() {
        return this[_originalEvent];
    }
    set originalEvent(value) {
        this[_originalEvent] = value;
    }
    get bubbles() {
        return this[_bubbles];
    }
    set bubbles(value) {
        this[_bubbles] = value;
    }
}
exports.default = Event;
