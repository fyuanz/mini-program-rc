import Render from './render/index';
import Stage from './node/stage';
import Group from './node/group';
import Bitmap from './node/bitmap';
import Graphics from './node/graphics';
import Rect from './node/shape/rect';
import Circle from './node/shape/circle';
import * as utils from './utils/util';

const mprc = {
  Render,
  Stage,
  Group,
  Bitmap,
  Rect,
  Circle,
  Graphics,
  loadImage: utils.loadImage
};

export default mprc;
