import Render from './render/index';
import Stage from './node/stage';
import Group from './node/group';
import Bitmap from './node/bitmap';
import Text from './node/text';
import Graphics from './node/graphics';
import Shape from './node/shape/shape';
import Rect from './node/shape/rect';
import Circle from './node/shape/circle';
import RoundedRect from './node/shape/rounded-rect';
import ArrowPath from './node/shape/arrow-path';
import Ellipse from './node/shape/ellipse';
import Polygon from './node/shape/polygon';
import Sector from './node/shape/sector';
import EquilateralPolygon from './node/shape/equilateral-polygon';
import Event from './event/event'
import * as utils from './utils/util';

declare const cax: {
  Render: typeof Render;
  Stage: typeof Stage;
  Group: typeof Group;
  Bitmap: typeof Bitmap;
  Text: typeof Text;
  Graphics: typeof Graphics;
  Shape: typeof Shape;
  Rect: typeof Rect;
  Circle: typeof Circle;
  RoundedRect: typeof RoundedRect;
  ArrowPath: typeof ArrowPath;
  Ellipse: typeof Ellipse;
  Polygon: typeof Polygon;
  Sector: typeof Sector;
  EquilateralPolygon: typeof EquilateralPolygon;
  loadImage: typeof utils.loadImage;
};

export type {
  Render,
  Stage,
  Group,
  Bitmap,
  Text,
  Graphics,
  Shape,
  Rect,
  Circle,
  RoundedRect,
  ArrowPath,
  Ellipse,
  Polygon,
  Sector,
  EquilateralPolygon,
  Event
};
export default cax;
