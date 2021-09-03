import Shape from './shape';
declare class ArrowPath extends Shape {
    [x: string]: any;
    constructor(path: any, option: any);
    draw(): void;
    drawArrow(fromX: number, fromY: number, toX: number, toY: number, theta: number): void;
}
export default ArrowPath;
