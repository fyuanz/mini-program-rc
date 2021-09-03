import Shape from './shape';
declare class EquilateralPolygon extends Shape {
    num: number;
    r: number;
    options: {
        [x: string]: any;
    };
    vertex: any;
    constructor(num: number, r: number, options: any);
    initVertex(): void;
    draw(): void;
}
export default EquilateralPolygon;
