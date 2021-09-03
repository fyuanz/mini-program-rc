import Node from './node';
interface Img {
    [x: string]: any;
}
interface Cache {
    [x: string]: any;
}
declare class Bitmap extends Node {
    img: Img;
    rect: number[];
    width: number;
    height: number;
    static cache: Cache;
    constructor(img: Img);
    render(ctx: any): void;
}
export default Bitmap;
