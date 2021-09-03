import Matrix2D from '../geom/matrix2d';
import Stage from '../node/stage';
import { Shadow } from '../node/node';
export default class Render {
    ctx: any;
    width: number;
    height: number;
    constructor(ctx: any, width: number, height: number);
    update(stage: Stage): void;
    clear(ctx: any, width: number, height: number): void;
    render(ctx: any, o: any): void;
    _render(ctx: any, o: any, mtx?: Matrix2D): void;
    _applyShadow(ctx: any, shadow: Shadow): void;
}
