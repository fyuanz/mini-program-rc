import Node from './node';
export default class Group extends Node {
    children: Array<any>;
    mouseChildren: boolean;
    constructor();
    add(child: any): void;
    addChildAt(child: any, index: number): void;
    removeChildAt(index: number): void;
    replace(current: number, pre: any): void;
    remove(child: any): void;
    empty(): void;
    destroy(): void;
    _getObjectsUnderPoint(x: number, y: number, hitCtx: any): any;
    _testMask(target: any, x: number, y: number, hitCtx: any): boolean;
    _testHit(ctx: any): boolean;
    checkPointInAABB(x: number, y: number, AABB: number[]): boolean;
}
