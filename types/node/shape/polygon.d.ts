import Shape from './shape';
declare class Polygon extends Shape {
    [x: string]: any;
    constructor(vertex: any, options: any);
    draw(): void;
}
export default Polygon;
