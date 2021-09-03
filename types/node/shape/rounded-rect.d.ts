import Shape from './shape';
declare class RoundedRect extends Shape {
    [x: string]: any;
    constructor(width: number, height: number, r: number, option: any);
    draw(): void;
}
export default RoundedRect;
