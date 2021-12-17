import Node from '../node/node';

const _type: unique symbol = Symbol('type');
const _bubbles: unique symbol = Symbol('bubbles');
const _originalEvent: unique symbol = Symbol('_originalEvent');

export interface ScriptEvent {
  stageX: number;
  stageY: number;
  dx: number;
  dy: number;
  zoom: number;
  type: string;
  bubbles: boolean;
  originalEvent: any;
  cancelBubble: boolean;
  target: Node;
  stopPropagation: () => void;
}

export default class Event implements ScriptEvent {
  stageX!: number;
  stageY!: number;
  dx!: number;
  dy!: number;
  zoom!: number;
  [_type]: string;
  [_bubbles]: boolean;
  [_originalEvent]: any;
  cancelBubble: boolean;
  target!: Node;

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
