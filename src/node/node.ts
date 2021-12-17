import { ScriptEvent } from '../event/event';
import UID from '../utils/uid';
import DisplayProps from '../geom/displayProps';
import Rectangle from '../geom/rectangle';
import Matrix2D from '../geom/matrix2d';
import Graphics from '../node/graphics';

const _eventListeners: unique symbol = Symbol('eventListeners');
const _captureEventListeners: unique symbol = Symbol('captureEventListeners');

interface EventListeners {
  [x: string]: Array<{ listener: (event: ScriptEvent) => void; once?: boolean }>;
}

interface EventOptions {
  capture: boolean;
  once?: boolean;
}

export interface Shadow {
  color: string;
  offsetX: number;
  offsetY: number;
  blur: number;
}

export default class Node {
  parent: this | null;
  [_eventListeners]: EventListeners;
  [_captureEventListeners]: EventListeners;
  id: number;

  x: number;
  y: number;
  scaleX: number;
  scaleY: number;
  rotation: number;
  skewX: number;
  skewY: number;
  regX: number;
  regY: number;
  alpha: number;
  visible: boolean;

  shadow: Shadow | null;
  mask: Graphics | null;

  _props: DisplayProps;
  _rectangle: Rectangle;
  _bounds: Rectangle | null;

  compositeOperation: string | null;

  hitBox: Array<number> | null;
  ignoreHit: boolean;

  ___instanceof!: string;

  constructor() {
    this[_eventListeners] = {};
    this[_captureEventListeners] = {};
    this.parent = null;
    this.id = UID.get();

    this.x = 0;
    this.y = 0;

    this.scale = 1;
    this.scaleX = 1;
    this.scaleY = 1;
    this.rotation = 0;
    this.skewX = 0;
    this.skewY = 0;
    this.regX = 0;
    this.regY = 0;
    this.alpha = 1;
    this.visible = true;

    this.shadow = null;
    this.mask = null;

    this._props = new DisplayProps();
    this._rectangle = new Rectangle();
    this._bounds = null;

    this.compositeOperation = null;

    this.hitBox = null;
    this.ignoreHit = false;
  }

  get stage() {
    let o = this;
    while (o.parent) {
      o = o.parent;
    }
    if (o.___instanceof === 'Stage') return o;
    return null;
  }

  get scale() {
    return this.scaleX;
  }

  set scale(scale) {
    this.scaleX = this.scaleY = scale;
  }

  isVisible() {
    return this.visible && this.alpha > 0 && this.scaleX !== 0 && this.scaleY !== 0;
  }

  clip(graphics: Graphics) {
    this.mask = graphics;
  }

  unclip() {
    this.mask = null;
  }

  setTransform(
    x: number,
    y: number,
    scaleX: number,
    scaleY: number,
    rotation: number,
    skewX: number,
    skewY: number,
    regX: number,
    regY: number
  ) {
    this.x = x || 0;
    this.y = y || 0;
    this.scaleX = scaleX == null ? 1 : scaleX;
    this.scaleY = scaleY == null ? 1 : scaleY;
    this.rotation = rotation || 0;
    this.skewX = skewX || 0;
    this.skewY = skewY || 0;
    this.regX = regX || 0;
    this.regY = regY || 0;
    return this;
  }

  getMatrix(matrix: Matrix2D) {
    let o = this;
    let mtx = matrix || new Matrix2D();
    return (
      mtx.identity() &&
      mtx.appendTransform(
        o.x,
        o.y,
        o.scaleX,
        o.scaleY,
        o.rotation,
        o.skewX,
        o.skewY,
        o.regX,
        o.regY
      )
    );
  }

  getConcatenatedMatrix(matrix: Matrix2D) {
    let o: this | null = this;
    let mtx = this.getMatrix(matrix);
    while ((o = o.parent)) {
      mtx.prependMatrix(o.getMatrix(o._props.matrix));
    }
    return mtx;
  }

  getConcatenatedDisplayProps(props?: DisplayProps) {
    props = props ? props.identity() : new DisplayProps();
    let o: this | null = this;
    let mtx = o.getMatrix(props.matrix);
    do {
      props.prepend(o.visible, o.alpha, o.shadow, o.compositeOperation);
      if (o != this) {
        mtx.prependMatrix(o.getMatrix(o._props.matrix));
      }
    } while ((o = o.parent));
    return props;
  }

  getBounds() {
    if (this._bounds) {
      return this._rectangle.copy(this._bounds);
    }
    return null;
  }

  setBounds(x: number | null, y: number, width: number, height: number) {
    if (x === null) {
      this._bounds = null;
      return;
    }
    this._bounds = (this._bounds || new Rectangle()).setValues(x, y, width, height);
  }

  getTransformedBounds() {
    return this._getBounds();
  }

  _getBounds(matrix?: Matrix2D, ignoreTransform?: boolean) {
    return this._transformBounds(this.getBounds(), matrix, ignoreTransform);
  }

  _transformBounds(bounds: Rectangle | null, matrix: Matrix2D, ignoreTransform?: boolean) {
    if (!bounds) {
      return bounds;
    }
    let x = bounds.x,
      y = bounds.y,
      width = bounds.width,
      height = bounds.height,
      mtx = this._props.matrix;
    mtx = ignoreTransform ? mtx.identity() : this.getMatrix(mtx);

    if (x || y) {
      mtx.appendTransform(0, 0, 1, 1, 0, 0, 0, -x, -y);
    }
    if (matrix) {
      mtx.prependMatrix(matrix);
    }

    let x_a = width * mtx.a,
      x_b = width * mtx.b;
    let y_c = height * mtx.c,
      y_d = height * mtx.d;
    let tx = mtx.tx,
      ty = mtx.ty;

    let minX = tx,
      maxX = tx,
      minY = ty,
      maxY = ty;

    if ((x = x_a + tx) < minX) {
      minX = x;
    } else if (x > maxX) {
      maxX = x;
    }
    if ((x = x_a + y_c + tx) < minX) {
      minX = x;
    } else if (x > maxX) {
      maxX = x;
    }
    if ((x = y_c + tx) < minX) {
      minX = x;
    } else if (x > maxX) {
      maxX = x;
    }

    if ((y = x_b + ty) < minY) {
      minY = y;
    } else if (y > maxY) {
      maxY = y;
    }
    if ((y = x_b + y_d + ty) < minY) {
      minY = y;
    } else if (y > maxY) {
      maxY = y;
    }
    if ((y = y_d + ty) < minY) {
      minY = y;
    } else if (y > maxY) {
      maxY = y;
    }

    return bounds.setValues(minX, minY, maxX - minX, maxY - minY);
  }

  on(type: string, listener: (event: ScriptEvent) => void, options?: EventOptions | boolean) {
    this.addEventListener(type, listener, options);
  }

  off(type: string, listener: (event: ScriptEvent) => void, options?: EventOptions | boolean) {
    this.removeEventListener(type, listener, options);
  }

  addEventListener(
    type: string,
    listener: (event: ScriptEvent) => void,
    options?: EventOptions | boolean
  ) {
    if (typeof options === 'boolean') options = { capture: options };
    const { capture, once } = options || {};
    const eventListeners = capture ? _captureEventListeners : _eventListeners;
    this[eventListeners][type] = this[eventListeners][type] || [];
    this[eventListeners][type].push({ listener, once });
    return this;
  }

  removeEventListener(
    type: string,
    listener: (event: ScriptEvent) => void,
    options?: EventOptions | boolean
  ) {
    if (typeof options === 'boolean') options = { capture: options };
    const { capture } = options || {};
    const eventListeners = capture ? _captureEventListeners : _eventListeners;

    if (this[eventListeners][type]) {
      const listeners = this[eventListeners][type];
      for (let i = 0; i < listeners.length; i++) {
        const { listener: _listener } = listeners[i];
        if (listener === _listener) {
          this[eventListeners][type].splice(i, 1);
          break;
        }
      }
    }
    return this;
  }

  dispatchEvent(event: ScriptEvent) {
    event.target = this;
    const type = event.type;
    const elements = [this];
    let parent = this.parent;
    while (event.bubbles && parent) {
      elements.push(parent);
      parent = parent.parent;
    }

    // capture phase
    for (let i = elements.length - 1; i >= 0; i--) {
      const element = elements[i];
      const listeners = element[_captureEventListeners] && element[_captureEventListeners][type];
      if (listeners && listeners.length) {
        listeners.forEach(({ listener, once }) => {
          listener.call(this, event);
          if (once) {
            element.removeEventListener(event.type, listener, { capture: true });
          }
        });
      }
      if (!event.bubbles && event.cancelBubble) break;
    }

    // bubbling
    if (!event.cancelBubble) {
      for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        const listeners = element[_eventListeners] && element[_eventListeners][type];
        if (listeners && listeners.length) {
          listeners.forEach(({ listener, once }) => {
            listener.call(this, event);
            if (once) {
              element.removeEventListener(event.type, listener, { capture: false });
            }
          });
        }
        if (!event.bubbles || event.cancelBubble) break;
      }
    }
  }
}
