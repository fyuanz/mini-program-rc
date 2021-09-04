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

import * as utils from './utils/util';
import { ScriptEvent } from './event/event';


const cax = {
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
  loadImage: utils.loadImage,
};

export default cax;

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
  ScriptEvent
}
