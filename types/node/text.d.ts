import Node from './node';
declare class Text extends Node {
    [s: string]: any;
    constructor(text: string, option: any);
    render(ctx: any): void;
}
export default Text;
