import Shape from './shape';
declare class Ellipse extends Shape {
    width: number;
    height: number;
    option: {
        [x: string]: any;
    };
    constructor(width: number, height: number, option: any);
    draw(): void;
}
export default Ellipse;
