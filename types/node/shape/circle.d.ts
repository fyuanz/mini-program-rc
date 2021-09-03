import Shape from './shape';
interface optionInterface {
    [x: string]: string | number;
}
declare class Circle extends Shape {
    r: number;
    option: optionInterface;
    _dp: number;
    constructor(r: number, option: optionInterface);
    draw(): void;
}
export default Circle;
