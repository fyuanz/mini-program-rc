import Group from './group';
import Render from '../render/index';
import { ScriptEvent } from '../event/event';
declare class Stage extends Group {
    [x: string]: any;
    container: any;
    width: number;
    height: number;
    drp: number;
    ctx: any;
    render: Render;
    hitCtx: any;
    touchObject: any;
    ___instanceof: string;
    constructor(container: any, width: number, height: number);
    update(): void;
    setHitCanvas(hitCanvas: any): void;
    getTextWidth(text: string, font: string): any;
    loadImage(url: string): Promise<unknown>;
    touchStartHandler(evt: any): void;
    touchMoveHandler(evt: any): void;
    touchEndHandler(evt: any): void;
    getObjectUnderPoint(evt: ScriptEvent): any;
    private __dispatchEvent;
}
export default Stage;
