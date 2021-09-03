# cax-next

一个轻量级的微信小程序 Canvas (type="2d") 渲染引擎

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

## 快捷访问

- [一分钟入门使用](#一分钟入门使用)
- [查看项目示例或二次开发](#查看项目示例或二次开发)
- [内置对象](#内置对象)
  - [Group](#group)
    - [Group 方法](#group-方法)
      - [add](#add)
      - [remove](#remove)
      - [empty](#empty)
      - [replace](#replace)
  - [Stage](#stage)
    - [Stage 方法](#stage-方法)
      - [update](#update)
      - [setHitCanvas](#setHitCanvas)
      - [getTextWidth](#getTextWidth)
      - [loadImage](#loadImage)
  - [Bitmap](#bitmap)
  - [Text](#text)
    - [Text 方法](#text-方法)
      - [getWidth](#getwidth)
  - [Graphics](#graphics)
  - [Shape](#shape)
    - [Rect](#rect)
    - [Circle](#circle)
    - [Ellipse](#ellipse)
- [属性](#属性)
  - [Transform](#transform)
  - [Alpha](#alpha)
  - [CompositeOperation](#compositeoperation)
  - [Shadow](#shadow)
  - [Stage](#stage-1)
- [方法](#方法)
  - [destroy](#destroy)
- [事件](#事件)
- [裁剪](#裁剪)
- [自定义对象](#自定义对象)
  - [自定义 Shape](#自定义-shape)
  - [自定义 Element](#自定义-element)
- [图片加载器](#图片加载器)
- [注意事项](#注意事项)
- [License](#license)

## 一分钟入门使用

下载本项目到本地，通过 npm 下载依赖，然后使用命令`npm run build`构建

拷贝 dist 目录下的 mian.js 到微信小程序项目中。

在 page 或者 component 中使用

在的 wxml 里声明 canvas 和声明点击事件判断的 canvas

_小程序不支持虚拟 canvas，点击事件判断由 hit-canvas 渲染判断_

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

在 wxss 中隐藏 class="hit-canvas"

```css
.hit-canvas {
  position: fixed;
  top: -999rpx;
  left: -999rpx;
}
```

在 js 中引入并初始化项目

```JavaScript
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
  },

  // 事件监听
  touchstart: function (event) {
    stage.touchStartHandler(event);
  },

  touchmove: function (event) {
    stage.touchMoveHandler(event);
  },

  touchend: function (event) {
    stage.touchEndHandler(event);
  },

  // 获取canvas对象方法
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

初始化项目后绘制内容

```JavaScript
// 集合容器，设置透明度
const group = new Group();
group.x = 50;
group.y = 50;
group.alpha = 0.8;

// 绘制矩形图形，设置透明度，透明度会与集合的透明度合并展示
const rect = new Rect(100, 200, {
  fillStyle: '#000000'
});
rect.alpha = 0.2;
rect.hitBox = [0, 0, 100, 200];

// 设置裁剪，将会对举行裁剪
const clipPath = new Graphics();
clipPath.arc(50, 50, 50, 0, Math.PI * 2);
rect.clip(clipPath);

// 绘制圆形图形，设置拖拽事件
const circle = new Circle(50, {
  fillStyle: 'red'
});
circle.on('drag', function (event) {
  circle.x += event.dx;
  circle.y += event.dy;
  stage.update();
});

// 将矩形和圆形图形放入集合之中
group.add(circle);
group.add(rect);

// 将集合放入根容器
stage.add(group);

// 更新渲染
stage.update();
```

## 查看项目示例或二次开发

`npm run watch`

用微信小程序编辑器导入该项目下的 weapp 文件。

## 内置对象

### Group

用于分组，group 也可以嵌套 group，父容器的属性会叠加在子属性上, 例如：

- group 的 x 是 100, group 里的 bitmap 的 x 是 200， 最后 bitmap 渲染到 stage 上的 x 是 300
- group 的 alpha 是 0.7, group 里的 bitmap 的 alpha 是 0.6, 最后 bitmap 渲染到 stage 上的 alpha 是 0.42

```JavaScript
const group = new Group();
const rect = new Rect(100, 100, {
  fillStyle: 'black'
});
group.add(rect);
stage.add(group);
stage.update();
```

group 拥有常用的 add 和 remove 方法进行元素的增加和删除。先 add 的会先绘制，所有后 add 的会盖在先 add 的上面。

#### Group 方法

##### add

添加对象

```JavaScript
group.add(child);
```

##### remove

移除对象

```JavaScript
group.remove(child);
```

##### empty

清空子对象

```JavaScript
group.empty();
```

##### replace

使用一个对象替代子对象

```JavaScript
group.replace(current, pre);
```

### Stage

最大的顶层容器，继承自 Group，所以 Group 拥有的方法它全都有。

#### Stage 方法

##### update

任何元素添加到 Stage 上是看不到的，须要执行 update 方法。

任何元素属性的修改请执行 stage.update() 来更新渲染。

```JavaScript
stage.update();
```

##### setHitCanvas

设置模拟虚拟 canvas，接受一个参数 canvas 对象，用于计算像素级的 touch 事件目标。

```JavaScript

```

##### getTextWidth

获取要渲染文字的宽度，两个参数，第一个参数是 `text: String`，待绘制的文字，第二个参数是`font： String`，设置的文字的样式。

##### loadImage

Stage 内置图片加载器，接受一个参数`url: string`，返回一个 Promise 对象。

Promise 执行结果是 Image 对象，用于 bitmap 绘制。

```JavaScript
const stage = new Stage(canvas, 200, 200);
const imgObj2 = await stage.loadImage('../logo.png');

const bitmap = new Bitmap(imgObj2);
stage.add(bitmap);
stage.updata();
```

### Bitmap

Bitmap 接受一个参数，Image 对象的实例，不能使用 url 或者本地路径，bitmap 为同步，无回调方法。

```JavaScript
const bitmap = new Bitmap(img);
stage.add(bitmap);
stage.update()
```

可以设置图片裁剪显示区域，和其他 transform 属性:

```JavaScript
const bitmap = new Bitmap(img);
bitmap.x=50;
stage.add(bitmap);

const clipPath = new Graphics();
clipPath.rect(0, 0, 100, 200);
clipPath.x = 0;
clipPath.y = 50;
bitmap.clip(clipPath);
stage.add(bitmap);
stage.update()
```

### Text

文本对象

```JavaScript
const text = new Text(item.key, {
  font: `normal normal 20px Arial`,
  color: '#000000',
  baseline: 'bottom'
});
```

#### Text 方法

##### getWidth

获取文本宽度

```JavaScript
textObj.getWidth();
```

### Graphics

绘图对象，用于使用基本的连缀方式的 Canvas 指令绘制图形。

```JavaScript
const graphics = new Graphics();
graphics
  .beginPath()
  .arc(0, 0, 10, 0, Math.PI * 2)
  .closePath()
  .fillStyle('#f4862c')
  .fill()
  .strokeStyle('black')
  .stroke();

graphics.x = 100;
graphics.y = 200;

stage.add(graphics);
```

特别注意，如果你在某个循环中执行 graphics 连缀绘制操作，请务必加上 clear() 方法，不然路径叠加到你的浏览器不堪重负:

```JavaScript
setInterval(function () {
  graphics
    .clear()
    .beginPath()
    .arc(0, 0, 10, 0, Math.PI * 2)
    .stroke();
}, 16);
```

### Shape

#### Rect

```JavaScript
const rect = new Rect(200, 100, {
  fillStyle: 'black'
});
```

#### Circle

```JavaScript
const circle = new Circle(10);
```

#### Ellipse

```JavaScript
const ellipse = new Ellipse(120, 20);
```

## 属性

### Transform

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

### Alpha

| 属性名 | 描述         |
| ------ | ------------ |
| alpha  | 元素的透明度 |

如果父子都设置了 alpha 会进行乘法叠加。

### compositeOperation

| 属性名             | 描述                             |
| ------------------ | -------------------------------- |
| compositeOperation | 源图像绘制到目标图像上的叠加模式 |

注意这里如果自身没有定义 compositeOperation 会进行向上查找，找到最近的定义了 compositeOperation 的父容器作为自己的 compositeOperation。

### Shadow

| 属性名 | 描述 |
| ------ | ---- |
| shadow | 阴影 |

使用方式:

```JavaScript
obj.shadow = {
  color: '#42B035',
  offsetX: -5,
  offsetY: 5,
  blur: 10
};
```

### Stage

| Name  | Describe             |
| ----- | -------------------- |
| stage | 或者自己所在的 stage |

使用方式:

```JavaScript
obj.stage;
```

## 方法

### destroy

销毁自己

```js
obj.destroy();
```

注意：Group 销毁会销毁组中所有对象

## 事件

| 事件名     | 描述               |
| ---------- | ------------------ |
| tap        | 手指触摸后马上离开 |
| touchstart | 手指触摸动作开始   |
| touchmove  | 手指触摸后移动     |
| touchend   | 手指触摸动作结束   |
| drag       | 拖拽               |

事件触发精确到像素级。如果要使用元素的矩形区域为点击区域，则需要设置设置元素的 hitBox 。

## 裁剪

```JavaScript
const stage = new Stage(600, 400, 'body');
const bitmap = new Bitmap(imgObj2);

const clipPath = new Graphics();
clipPath.arc(40, 40, 25, 0, Math.PI * 2);
bitmap.clip(clipPath);

stage.add(bitmap);
```

使用下面的代码可以得到同样的效果:

```JavaScript
const stage = new Stage(600, 400, 'body');
const bitmap = new Bitmap(imgObj2);

const clipPath = new Graphics();
clipPath.x = 40;
clipPath.y = 40;
clipPath.arc(0, 0, 25, 0, Math.PI * 2);
bitmap.clip(clipPath);

stage.add(bitmap);
```

裁剪区域同样支持所有 transform 属性(x,y,scaleX,scaleY,rotation,skewX,skewY,regX,regY)。

## 自定义对象

### 自定义 Shape

自定义 Shape 继承自 Shape:

```JavaScript
class Sector extends Shape {
  constructor(r, from, to, option) {
    super();

    this.option = option || {};
    this.r = r;
    this.from = from;
    this.to = to;
  }

  draw() {
    this.beginPath()
      .moveTo(0, 0)
      .arc(0, 0, this.r, this.from, this.to)
      .closePath()
      .fillStyle(this.option.fillStyle)
      .fill()
      .strokeStyle(this.option.strokeStyle)
      .lineWidth(this.option.lineWidth)
      .stroke();
  }
}
```

使用 Shape:

```JavaScript
const sector = new Sector(10, 0, Math.PI/6, {
  fillStyle: 'red'
  lineWidth: 2
})
stage.add(sector)
stage.update()
```

### 自定义 Element

自定义 Element 继承自 Group:

```JavaScript
class Button extends Group {
  constructor (option) {
    super()
    this.width = option.width
    this.roundedRect = new  RoundedRect(option.width, option.height, option.r)
    this.text = new Text(option.text, {
      font: option.font,
      color: option.color
    })

    this.text.x = option.width / 2 - this.text.getWidth() / 2 * this.text.scaleX
    this.text.y = option.height / 2 - 10 + 5 * this.text.scaleY
    this.add(this.roundedRect, this.text)
  }
}

export default Button
```

使用:

```JavaScript
const button = new Button({
  width: 100,
  height: 40,
  text: 'Click Me!'
});
```

一般情况下，稍微复杂组合体都建议使用继承自 Group，这样利于扩展也方便管理自身内部的元件。

## 图片加载器

图片加载器返回 Promise

```JavaScript
const { loadImage } = mprc;

// canvas参数为获取的canvas 2d对象实例
const imgObj = await loadImage('../logo.png', canvas);

// stage的图片加载方法
const stage = new Stage(canvas, 200, 200);
const imgObj2 = await stage.loadImage('../logo.png');

const bitmap = new bitMap(imgObj2);
stage.add(bitmap);
stage.updata();
```

## 注意事项

该项目参考了小程序、小游戏以及 Web 通用 Canvas 渲染引擎 Cax [![](https://img.shields.io/npm/v/cax.svg)](https://www.npmjs.com/package/cax) 和 spritejs。对 Cax 和 spritejs 开发者表示感谢。

- _Cax 是跨平台项目，但仅支持小程序旧版本 canvas（微信已放弃维护）。本项目仅支持微信小程序 canvas2d ，(基础库 2.9.0 以上版本)_

- _项目的一些方法和属性与 Cax 相似，但有些不同，使用时请注意区分_

- _该项目初始化传入参数为 canvas 对象而不是 ID，所以应获取 canvas 对象后初始化，具体请查看示例代码_

- _暂不支持的功能_
  - _不支持 Fixed 属性_
  - _不支持帧动画_
  - _不支持 SVG Path 渲染_
  - _不支持滤镜功能_

项目轻量，使用简单，可用于对文字、图片、图形等绘制。适合海报、拼图、图表展示等项目开发。

对手势相关事件有良好的支持，内置拖拽功能，支持矩形边界和像素级边界两种选择方式。

项目对 canvas 的初始化采用显示设置宽高和通过缩放适应像素密度，显示高清。

对于较为复杂的项目，建议通过类开发组件，即每一组件是一个类，类中包含自己的布局和更新方法，这样可以开发出高度复用的组件，后续也便于维护。

## To do

- 帧动画

## License

MIT
