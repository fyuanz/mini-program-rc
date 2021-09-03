import { ScriptEvent } from '../event/event';
import DisplayProps from '../geom/displayProps';
import Rectangle from '../geom/rectangle';
import Matrix2D from '../geom/matrix2d';
import Graphics from '../node/graphics';
declare const _eventListeners: unique symbol;
declare const _captureEventListeners: unique symbol;
interface EventListeners {
    [x: string]: Array<{
        listener: (event: ScriptEvent) => void;
        once?: boolean;
    }>;
}
interface EventOptions {
    capture: boolean;
    once?: boolean;
}
export interface Shadow {
    color: string;
    offsetX: number;
    offsetY: number;
    blur: number;
}
export default class Node {
    parent: this | null;
    [_eventListeners]: EventListeners;
    [_captureEventListeners]: EventListeners;
    id: number;
    x: number;
    y: number;
    scaleX: number;
    scaleY: number;
    rotation: number;
    skewX: number;
    skewY: number;
    regX: number;
    regY: number;
    alpha: number;
    visible: boolean;
    shadow: Shadow | null;
    mask: Graphics | null;
    _props: DisplayProps;
    _rectangle: Rectangle;
    _bounds: Rectangle | null;
    compositeOperation: string | null;
    hitBox: Array<number> | null;
    ignoreHit: boolean;
    ___instanceof: string;
    constructor();
    get stage(): this;
    get scale(): number;
    set scale(scale: number);
    isVisible(): boolean;
    clip(graphics: Graphics): void;
    unclip(): void;
    setTransform(x: number, y: number, scaleX: number, scaleY: number, rotation: number, skewX: number, skewY: number, regX: number, regY: number): this;
    getMatrix(matrix: Matrix2D): any;
    getConcatenatedMatrix(matrix: Matrix2D): any;
    getConcatenatedDisplayProps(props?: DisplayProps): DisplayProps;
    getBounds(): Rectangle;
    setBounds(x: number | null, y: number, width: number, height: number): void;
    getTransformedBounds(): Rectangle;
    _getBounds(matrix?: Matrix2D, ignoreTransform?: boolean): Rectangle;
    _transformBounds(bounds: Rectangle | null, matrix: Matrix2D, ignoreTransform?: boolean): Rectangle;
    on(type: string, listener: (event: ScriptEvent) => void, options?: EventOptions | boolean): void;
    off(type: string, listener: (event: ScriptEvent) => void, options?: EventOptions | boolean): void;
    addEventListener(type: string, listener: (event: ScriptEvent) => void, options?: EventOptions | boolean): this;
    removeEventListener(type: string, listener: (event: ScriptEvent) => void, options?: EventOptions | boolean): this;
    dispatchEvent(event: ScriptEvent): void;
}
export {};
