import Node from '../node/node';
declare const _type: unique symbol;
declare const _bubbles: unique symbol;
declare const _originalEvent: unique symbol;
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
    stageX: number;
    stageY: number;
    dx: number;
    dy: number;
    zoom: number;
    [_type]: string;
    [_bubbles]: boolean;
    [_originalEvent]: any;
    cancelBubble: boolean;
    target: Node;
    constructor();
    stopPropagation(): void;
    get type(): string;
    set type(value: string);
    get originalEvent(): any;
    set originalEvent(value: any);
    get bubbles(): boolean;
    set bubbles(value: boolean);
}
export {};
