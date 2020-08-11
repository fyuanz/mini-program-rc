import Graphics from './graphics';

class Shape extends Graphics {
  [x: string]: any;
  constructor() {
    super();
  }

  render(ctx: any) {
    this.clear();
    this.draw();
    super.render(ctx);
  }
}

export default Shape;
