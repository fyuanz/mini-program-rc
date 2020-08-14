//index.js
import mprc from '../../lib/main';
const { Stage, Group, Graphics, Rect, Circle, Bitmap } = mprc;
let canvas, hitCanvas;
let stage;
let img = '../../image/logo.png';

Page({
  data: {
    width: 375,
    height: 300
  },

  onLoad: function () {},

  onReady: async function () {
    canvas = await this.getContainer('#canvas');
    stage = new Stage(canvas, this.data.width, this.data.height);
    hitCanvas = await this.getContainer('#hitCanvas');
    stage.setHitCanvas(hitCanvas);

    const group = new Group();
    group.x = 50;
    group.y = 50;
    group.alpha = 0.8;

    const rect = new Rect(100, 200, {
      fillStyle: '#000000'
    });
    rect.alpha = 0.2;
    rect.hitBox = true;

    const clipPath = new Graphics();
    clipPath.arc(50, 50, 50, 0, Math.PI * 2);
    rect.clip(clipPath);

    const circle = new Circle(50, {
      fillStyle: 'red'
    });

    circle.on('drag', function (event) {
      circle.x += event.dx;
      circle.y += event.dy;
      stage.update();
    });

    group.add(circle);
    group.add(rect);

    const imgObj = await stage.loadImage(img);
    const bitmap = new Bitmap(imgObj);
    bitmap.x = 160;
    bitmap.y = 100;
    bitmap.scale = 0.5;

    stage.add(group);
    stage.add(bitmap);
    stage.update();
    console.log(stage);
  },

  touchstart: function (event) {
    stage.touchStartHandler(event);
  },

  touchmove: function (event) {
    stage.touchMoveHandler(event);
  },

  touchend: function (event) {
    stage.touchEndHandler(event);
  },

  getContainer(id) {
    return new Promise((resolve, reject) => {
      const query = wx.createSelectorQuery();
      query
        .select(id)
        .fields({ node: true, size: true })
        .exec(res => {
          const canvas = res[0].node;
          resolve(canvas);
        });
    });
  }
});
