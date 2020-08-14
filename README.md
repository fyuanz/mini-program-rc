# 微信小程序 轻量级 Canvas (type="2d") 渲染引擎

## mini-programs-rc [![](https://img.shields.io/npm/v/mini-programs-rc)](https://www.npmjs.com/package/mini-programs-rc)

## 特性

- 高性能且松耦合的渲染架构
- 超轻量级的代码体积
- 支持 Canvas 元素管理
- 支持 Canvas 元素事件体系
- 完备的 group 嵌套体系
- 支持可以变形的 clip 裁剪体系
- 内置文本、位图、绘图对象和多种矢量绘制对象
- 内置图片加载器

---

## 简单易用

下载本项目到本地，通过 npm 下载依赖，然后使用命令`npm run build`构建

拷贝 dist 目录下的 mian.js 到微信小程序项目中。

在 page 或者 component 中使用

```js
import mprc from 'main.js';
const { Stage, Group, Graphics, Rect, Circle } = mprc;

Page({
  data: {
    width: 375,
    height: 300
  },

  onReady: async function () {
    const canvas = await this.getContainer('#canvas');
    const stage = new Stage(canvas, this.data.width, this.data.height);
    const hitCanvas = await this.getContainer('#hitCanvas');
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
    stage.add(group);
    stage.update();
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
```

在的 wxml 里声明 canvas 和声明点击事件判断的 canvas

```html
<view class="container">
  <view class="container">
    <canvas
      bindtouchend="touchend"
      bindtouchmove="touchmove"
      bindtouchstart="touchstart"
      class="canvas"
      id="canvas"
      style="width:{{width}}px;height:{{height}}px"
      type="2d"
    ></canvas>
    <!-- 隐藏hit-canvas -->
    <canvas
      class="hit-canvas"
      id="hitCanvas"
      style="width:{{width}}px;height:{{height}}px"
      type="2d"
    ></canvas>
  </view>
</view>
```

## 查看项目示例

`npm run watch`

用微信小程序编辑器导入 weapp 文件。

## 事件

| 事件名     | 描述               |
| ---------- | ------------------ |
| tap        | 手指触摸后马上离开 |
| touchstart | 手指触摸动作开始   |
| touchmove  | 手指触摸后移动     |
| touchend   | 手指触摸动作结束   |
| drag       | 拖拽               |

事件触发精确到像素级。如果要使用元素的矩形区域为点击区域，则需要设置 width 和 height ，同时需要将元素的 hitBox 属性设置为 ture。

## 注意

该项目参考了小程序、小游戏以及 Web 通用 Canvas 渲染引擎 Cax [![](https://img.shields.io/npm/v/cax.svg)](https://www.npmjs.com/package/cax) 、项目 easel.js 和 spritejs，API 大多与 Cax 项目保持基本相同，具体可以参考 Cax 文档。

与 Cax 不同的是，该项目仅支持微信小程序 canvas2d ，(基础库 2.9.0 以上版本)，非常轻量，用起简单，仅用作对位图、文字、图形等操作、合成。

支持事件到像素级。

项目对 canvas 的初始化采用显示设置宽高和通过缩放适应像素密度。

如果你的项目比较复杂，请用其他 canvas 渲染引擎。

### 不支持 Cax 中的方法

- 无运动引擎
- 不支持 SVG Path 渲染
- 不支持滤镜

### 属性不同

#### Transform

| 属性名   | 描述                            |
| -------- | ------------------------------- |
| x        | 水平偏移                        |
| y        | 竖直偏移                        |
| scaleX   | 水平缩放                        |
| scaleY   | 竖直缩放                        |
| scale    | 同时设置或读取 scaleX 和 scaleY |
| rotation | 旋转                            |
| skewX    | 歪斜 X                          |
| skewY    | 歪斜 Y                          |
| regX     | 旋转基点 X                      |
| regY     | 旋转基点 Y                      |

#### Fixed

不支持 Fixed

#### 事件监听

第三个参数为可选参数 option(Object)

```js
{
  capture: boolean;
  once?: boolean;
}
```

### 方法不同

该项目初始化传入参数为 canvas 对象而不是 ID，所以应获取 canvas 对象后初始化，具体请查看示例代码

#### bitmap 对象

使用的参数是 img 对象，不能使用 url 或者本地路径，bitmap 为同步，无回调方法

```js
const bitmap = new Bitmap(img);
stage.add(bitmap);
stage.updata();
```

#### 图片加载器

图片加载器返回 Promise

```js
const { loadImage } = mprc;
const imgObj = await loadImage('../logo.png', canvas);

// 或者
const stage = new Stage(canvas, 200, 200);
const imgObj2 = await stage.loadImage('../logo.png');

const bitmap = new bitMap(imgObj2);
stage.add(bitmap);
stage.updata();
```

## To do

-

## License

MIT
