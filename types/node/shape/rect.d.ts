import Shape from './shape';
interface optionInterface {
    [x: string]: string | number;
}
declare class Rect extends Shape {
    width: number;
    height: number;
    option: optionInterface;
    constructor(width: number, height: number, option: optionInterface);
    draw(): void;
}
export default Rect;
