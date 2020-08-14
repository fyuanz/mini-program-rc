import Node from './node';

interface Img {
  [x: string]: any;
}

interface Cache {
  [x: string]: any;
}

class Bitmap extends Node {
  img: Img;
  rect: number[];
  width: number;
  height: number;
  static cache: Cache;

  constructor(img: Img) {
    super();
    if (Bitmap.cache[img.src]) {
      this.img = Bitmap.cache[img.src];
      this.rect = [0, 0, this.img.width, this.img.height];
      this.width = this.img.width;
      this.height = this.img.height;
    } else {
      this.img = img;
      this.rect = [0, 0, img.width, img.height];
      this.width = img.width;
      this.height = img.height;
      Bitmap.cache[img.src] = img;
    }
  }

  render(ctx: any) {
    let rect = this.rect;
    ctx.drawImage(this.img, rect[0], rect[1], rect[2], rect[3], 0, 0, rect[2], rect[3]);
  }
}

Bitmap.cache = {};

export default Bitmap;
