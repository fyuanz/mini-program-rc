import Graphics from '../graphics';

class Shape extends Graphics {
  public draw(): void {}

  render(ctx: any) {
    this.clear();
    this.draw();
    super.render(ctx);
  }
}

export default Shape;
