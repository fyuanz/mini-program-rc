class Rectangle {
  x!: number;
  y!: number;
  width!: number;
  height!: number;
  constructor(x?: number, y?: number, width?: number, height?: number) {
    this.setValues(x, y, width, height);
  }

  setValues(x?: number, y?: number, width?: number, height?: number) {
    this.x = x || 0;
    this.y = y || 0;
    this.width = width || 0;
    this.height = height || 0;
    return this;
  }

  extend(x: number, y: number, width: number, height: number) {
    width = width || 0;
    height = height || 0;
    if (x + width > this.x + this.width) {
      this.width = x + width - this.x;
    }
    if (y + height > this.y + this.height) {
      this.height = y + height - this.y;
    }
    if (x < this.x) {
      this.width += this.x - x;
      this.x = x;
    }
    if (y < this.y) {
      this.height += this.y - y;
      this.y = y;
    }
    return this;
  }

  copy(rectangle: Rectangle) {
    return this.setValues(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
  }

  contains(x: number, y: number, width: number, height: number) {
    width = width || 0;
    height = height || 0;
    return (
      x >= this.x &&
      x + width <= this.x + this.width &&
      y >= this.y &&
      y + height <= this.y + this.height
    );
  }

  isEmpty() {
    return this.width <= 0 || this.height <= 0;
  }

  clone() {
    return new Rectangle(this.x, this.y, this.width, this.height);
  }
}

export default Rectangle;
