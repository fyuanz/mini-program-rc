import Shape from './shape';
declare class Sector extends Shape {
    [x: string]: any;
    constructor(r: number, from: number, to: number, option: any);
    draw(): void;
}
export default Sector;
