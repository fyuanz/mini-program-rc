declare class Rectangle {
    x: number;
    y: number;
    width: number;
    height: number;
    constructor(x?: number, y?: number, width?: number, height?: number);
    setValues(x?: number, y?: number, width?: number, height?: number): this;
    extend(x: number, y: number, width: number, height: number): this;
    copy(rectangle: Rectangle): this;
    contains(x: number, y: number, width: number, height: number): boolean;
    isEmpty(): boolean;
    clone(): Rectangle;
}
export default Rectangle;
