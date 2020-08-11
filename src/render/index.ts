import Group from '../node/group';
import Matrix2D from '../geom/matrix2d';
import Stage from '../node/stage';
import { Shadow } from '../node/node';

export default class Render {
  ctx: any;
  width: number;
  height: number;
  constructor(ctx: any, width: number, height: number) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;
  }

  update(stage: Stage) {
    this.clear(this.ctx, this.width, this.height);
    this.render(this.ctx, stage);
  }

  clear(ctx: any, width: number, height: number) {
    ctx.clearRect(0, 0, width, height);
  }

  render(ctx: any, o: any) {
    let mtx = o._props.matrix;
    o.getMatrix(mtx);
    if (o.children) {
      let list = o.children.slice(0);
      let l = list.length;
      for (let i = 0; i < l; i++) {
        let child = list[i];
        if (!child.isVisible()) {
          continue;
        }
        ctx.save();
        this._render(ctx, child, mtx);
        ctx.restore();
      }
    } else {
      this._render(ctx, o, mtx);
    }
  }

  _render(ctx: any, o: any, mtx?: Matrix2D) {
    let mask = o.mask;
    if (mtx) {
      ctx.transform(mtx.a, mtx.b, mtx.c, mtx.d, mtx.tx, mtx.ty);
    }
    mtx = o._props.matrix;

    if (mask) {
      mask.getMatrix(mtx);
      ctx.transform(mtx.a, mtx.b, mtx.c, mtx.d, mtx.tx, mtx.ty);
      ctx.beginPath();
      mask.render(ctx);
      ctx.clip();

      mtx.invert();
      ctx.transform(mtx.a, mtx.b, mtx.c, mtx.d, mtx.tx, mtx.ty);
    }

    o.getMatrix(mtx);
    ctx.transform(mtx.a, mtx.b, mtx.c, mtx.d, mtx.tx, mtx.ty);

    let props = o.getConcatenatedDisplayProps(o._props);
    mtx = props.matrix;

    ctx.globalAlpha *= o._props.alpha;
    if (o.compositeOperation) {
      ctx.globalCompositeOperation = o.compositeOperation;
    }
    if (o.shadow) {
      this._applyShadow(ctx, o.shadow);
    }
    if (o instanceof Group) {
      let list = o.children.slice(0);
      let l = list.length;
      for (let i = 0; i < l; i++) {
        ctx.save();
        this._render(ctx, list[i]);
        ctx.restore();
      }
    } else {
      o.render(ctx);
    }
  }

  _applyShadow(ctx: any, shadow: Shadow) {
    shadow = shadow;
    ctx.shadowColor = shadow.color;
    ctx.shadowOffsetX = shadow.offsetX;
    ctx.shadowOffsetY = shadow.offsetY;
    ctx.shadowBlur = shadow.blur;
  }
}
