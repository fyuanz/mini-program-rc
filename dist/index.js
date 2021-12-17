(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("miniProgramRC", [], factory);
	else if(typeof exports === 'object')
		exports["miniProgramRC"] = factory();
	else
		root["miniProgramRC"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/event/event.ts":
/*!****************************!*\
  !*** ./src/event/event.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _type = Symbol('type');
const _bubbles = Symbol('bubbles');
const _originalEvent = Symbol('_originalEvent');
class Event {
    constructor() {
        this[_type] = '';
        this[_originalEvent] = null;
        this[_bubbles] = true;
        this.cancelBubble = false;
    }
    stopPropagation() {
        this.cancelBubble = true;
    }
    get type() {
        return this[_type];
    }
    set type(value) {
        this[_type] = value;
    }
    get originalEvent() {
        return this[_originalEvent];
    }
    set originalEvent(value) {
        this[_originalEvent] = value;
    }
    get bubbles() {
        return this[_bubbles];
    }
    set bubbles(value) {
        this[_bubbles] = value;
    }
}
exports.default = Event;


/***/ }),

/***/ "./src/geom/displayProps.ts":
/*!**********************************!*\
  !*** ./src/geom/displayProps.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const matrix2d_1 = __importDefault(__webpack_require__(/*! ./matrix2d */ "./src/geom/matrix2d.js"));
class DisplayProps {
    constructor(visible, alpha, shadow, compositeOperation, matrix) {
        this.setValue(visible, alpha, shadow, compositeOperation, matrix);
    }
    setValue(visible, alpha, shadow, compositeOperation, matrix) {
        this.visible = visible == null ? true : !!visible;
        this.alpha = alpha == null ? 1 : alpha;
        this.shadow = shadow || null;
        this.compositeOperation = compositeOperation || null;
        this.matrix = matrix || (this.matrix && this.matrix.identity()) || new matrix2d_1.default();
        return this;
    }
    append(visible, alpha, shadow, compositeOperation, matrix) {
        this.alpha *= alpha;
        this.shadow = shadow || this.shadow;
        this.compositeOperation = compositeOperation || this.compositeOperation;
        this.visible = this.visible && visible;
        matrix && this.matrix.appendMatrix(matrix);
        return this;
    }
    prepend(visible, alpha, shadow, compositeOperation, matrix) {
        this.alpha *= alpha;
        this.shadow = this.shadow || shadow;
        this.compositeOperation = this.compositeOperation || compositeOperation;
        this.visible = this.visible && visible;
        matrix && this.matrix.prependMatrix(matrix);
        return this;
    }
    identity() {
        this.visible = true;
        this.alpha = 1;
        this.shadow = this.compositeOperation = null;
        this.matrix.identity();
        return this;
    }
}
exports.default = DisplayProps;


/***/ }),

/***/ "./src/geom/matrix2d.js":
/*!******************************!*\
  !*** ./src/geom/matrix2d.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
 * Matrix2D
 * Visit http://createjs.com/ for documentation, updates and examples.
 *
 * Copyright (c) 2010 gskinner.com, inc.
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */

// constructor:
/**
 * Represents an affine transformation matrix, and provides tools for constructing and concatenating matrices.
 *
 * This matrix can be visualized as:
 *
 * 	[ a  c  tx
 * 	  b  d  ty
 * 	  0  0  1  ]
 *
 * Note the locations of b and c.
 *
 * @class Matrix2D
 * @param {Number} [a=1] Specifies the a property for the new matrix.
 * @param {Number} [b=0] Specifies the b property for the new matrix.
 * @param {Number} [c=0] Specifies the c property for the new matrix.
 * @param {Number} [d=1] Specifies the d property for the new matrix.
 * @param {Number} [tx=0] Specifies the tx property for the new matrix.
 * @param {Number} [ty=0] Specifies the ty property for the new matrix.
 * @constructor
 **/
function Matrix2D(a, b, c, d, tx, ty) {
  this.setValues(a, b, c, d, tx, ty);

  // public properties:
  // assigned in the setValues method.
  /**
   * Position (0, 0) in a 3x3 affine transformation matrix.
   * @property a
   * @type Number
   **/

  /**
   * Position (0, 1) in a 3x3 affine transformation matrix.
   * @property b
   * @type Number
   **/

  /**
   * Position (1, 0) in a 3x3 affine transformation matrix.
   * @property c
   * @type Number
   **/

  /**
   * Position (1, 1) in a 3x3 affine transformation matrix.
   * @property d
   * @type Number
   **/

  /**
   * Position (2, 0) in a 3x3 affine transformation matrix.
   * @property tx
   * @type Number
   **/

  /**
   * Position (2, 1) in a 3x3 affine transformation matrix.
   * @property ty
   * @type Number
   **/
}
var p = Matrix2D.prototype;

// constants:
/**
 * Multiplier for converting degrees to radians. Used internally by Matrix2D.
 * @property DEG_TO_RAD
 * @static
 * @final
 * @type Number
 * @readonly
 **/
Matrix2D.DEG_TO_RAD = Math.PI / 180;

// static public properties:
/**
 * An identity matrix, representing a null transformation.
 * @property identity
 * @static
 * @type Matrix2D
 * @readonly
 **/
Matrix2D.identity = null; // set at bottom of class definition.

// public methods:
/**
 * Sets the specified values on this instance.
 * @method setValues
 * @param {Number} [a=1] Specifies the a property for the new matrix.
 * @param {Number} [b=0] Specifies the b property for the new matrix.
 * @param {Number} [c=0] Specifies the c property for the new matrix.
 * @param {Number} [d=1] Specifies the d property for the new matrix.
 * @param {Number} [tx=0] Specifies the tx property for the new matrix.
 * @param {Number} [ty=0] Specifies the ty property for the new matrix.
 * @return {Matrix2D} This instance. Useful for chaining method calls.
 */
p.setValues = function (a, b, c, d, tx, ty) {
  // don't forget to update docs in the constructor if these change:
  this.a = a == null ? 1 : a;
  this.b = b || 0;
  this.c = c || 0;
  this.d = d == null ? 1 : d;
  this.tx = tx || 0;
  this.ty = ty || 0;
  return this;
};

/**
 * Appends the specified matrix properties to this matrix. All parameters are required.
 * This is the equivalent of multiplying `(this matrix) * (specified matrix)`.
 * @method append
 * @param {Number} a
 * @param {Number} b
 * @param {Number} c
 * @param {Number} d
 * @param {Number} tx
 * @param {Number} ty
 * @return {Matrix2D} This matrix. Useful for chaining method calls.
 **/
p.append = function (a, b, c, d, tx, ty) {
  var a1 = this.a;
  var b1 = this.b;
  var c1 = this.c;
  var d1 = this.d;
  if (a != 1 || b != 0 || c != 0 || d != 1) {
    this.a = a1 * a + c1 * b;
    this.b = b1 * a + d1 * b;
    this.c = a1 * c + c1 * d;
    this.d = b1 * c + d1 * d;
  }
  this.tx = a1 * tx + c1 * ty + this.tx;
  this.ty = b1 * tx + d1 * ty + this.ty;
  return this;
};

/**
 * Prepends the specified matrix properties to this matrix.
 * This is the equivalent of multiplying `(specified matrix) * (this matrix)`.
 * All parameters are required.
 * @method prepend
 * @param {Number} a
 * @param {Number} b
 * @param {Number} c
 * @param {Number} d
 * @param {Number} tx
 * @param {Number} ty
 * @return {Matrix2D} This matrix. Useful for chaining method calls.
 **/
p.prepend = function (a, b, c, d, tx, ty) {
  var a1 = this.a;
  var c1 = this.c;
  var tx1 = this.tx;

  this.a = a * a1 + c * this.b;
  this.b = b * a1 + d * this.b;
  this.c = a * c1 + c * this.d;
  this.d = b * c1 + d * this.d;
  this.tx = a * tx1 + c * this.ty + tx;
  this.ty = b * tx1 + d * this.ty + ty;
  return this;
};

/**
 * Appends the specified matrix to this matrix.
 * This is the equivalent of multiplying `(this matrix) * (specified matrix)`.
 * @method appendMatrix
 * @param {Matrix2D} matrix
 * @return {Matrix2D} This matrix. Useful for chaining method calls.
 **/
p.appendMatrix = function (matrix) {
  return this.append(matrix.a, matrix.b, matrix.c, matrix.d, matrix.tx, matrix.ty);
};

/**
 * Prepends the specified matrix to this matrix.
 * This is the equivalent of multiplying `(specified matrix) * (this matrix)`.
 * For example, you could calculate the combined transformation for a child object using:
 *
 * 	var o = myDisplayObject;
 * 	var mtx = o.getMatrix();
 * 	while (o = o.parent) {
 * 		// prepend each parent's transformation in turn:
 * 		o.prependMatrix(o.getMatrix());
 * 	}
 * @method prependMatrix
 * @param {Matrix2D} matrix
 * @return {Matrix2D} This matrix. Useful for chaining method calls.
 **/
p.prependMatrix = function (matrix) {
  return this.prepend(matrix.a, matrix.b, matrix.c, matrix.d, matrix.tx, matrix.ty);
};

/**
 * Generates matrix properties from the specified display object transform properties, and appends them to this matrix.
 * For example, you can use this to generate a matrix representing the transformations of a display object:
 *
 * 	var mtx = new createjs.Matrix2D();
 * 	mtx.appendTransform(o.x, o.y, o.scaleX, o.scaleY, o.rotation);
 * @method appendTransform
 * @param {Number} x
 * @param {Number} y
 * @param {Number} scaleX
 * @param {Number} scaleY
 * @param {Number} rotation
 * @param {Number} skewX
 * @param {Number} skewY
 * @param {Number} regX Optional.
 * @param {Number} regY Optional.
 * @return {Matrix2D} This matrix. Useful for chaining method calls.
 **/
p.appendTransform = function (x, y, scaleX, scaleY, rotation, skewX, skewY, regX, regY) {
  if (rotation % 360) {
    var r = rotation * Matrix2D.DEG_TO_RAD;
    var cos = Math.cos(r);
    var sin = Math.sin(r);
  } else {
    cos = 1;
    sin = 0;
  }

  if (skewX || skewY) {
    // TODO: can this be combined into a single append operation?
    skewX *= Matrix2D.DEG_TO_RAD;
    skewY *= Matrix2D.DEG_TO_RAD;
    this.append(Math.cos(skewY), Math.sin(skewY), -Math.sin(skewX), Math.cos(skewX), x, y);
    this.append(cos * scaleX, sin * scaleX, -sin * scaleY, cos * scaleY, 0, 0);
  } else {
    this.append(cos * scaleX, sin * scaleX, -sin * scaleY, cos * scaleY, x, y);
  }

  if (regX || regY) {
    // append the registration offset:
    this.tx -= regX * this.a + regY * this.c;
    this.ty -= regX * this.b + regY * this.d;
  }
  return this;
};

/**
 * Generates matrix properties from the specified display object transform properties, and prepends them to this matrix.
 * For example, you could calculate the combined transformation for a child object using:
 *
 * 	var o = myDisplayObject;
 * 	var mtx = new createjs.Matrix2D();
 * 	do  {
 * 		// prepend each parent's transformation in turn:
 * 		mtx.prependTransform(o.x, o.y, o.scaleX, o.scaleY, o.rotation, o.skewX, o.skewY, o.regX, o.regY);
 * 	} while (o = o.parent);
 *
 * 	Note that the above example would not account for {{#crossLink "DisplayObject/transformMatrix:property"}}{{/crossLink}}
 * 	values. See {{#crossLink "Matrix2D/prependMatrix"}}{{/crossLink}} for an example that does.
 * @method prependTransform
 * @param {Number} x
 * @param {Number} y
 * @param {Number} scaleX
 * @param {Number} scaleY
 * @param {Number} rotation
 * @param {Number} skewX
 * @param {Number} skewY
 * @param {Number} regX Optional.
 * @param {Number} regY Optional.
 * @return {Matrix2D} This matrix. Useful for chaining method calls.
 **/
p.prependTransform = function (x, y, scaleX, scaleY, rotation, skewX, skewY, regX, regY) {
  if (rotation % 360) {
    var r = rotation * Matrix2D.DEG_TO_RAD;
    var cos = Math.cos(r);
    var sin = Math.sin(r);
  } else {
    cos = 1;
    sin = 0;
  }

  if (regX || regY) {
    // prepend the registration offset:
    this.tx -= regX;
    this.ty -= regY;
  }
  if (skewX || skewY) {
    // TODO: can this be combined into a single prepend operation?
    skewX *= Matrix2D.DEG_TO_RAD;
    skewY *= Matrix2D.DEG_TO_RAD;
    this.prepend(cos * scaleX, sin * scaleX, -sin * scaleY, cos * scaleY, 0, 0);
    this.prepend(Math.cos(skewY), Math.sin(skewY), -Math.sin(skewX), Math.cos(skewX), x, y);
  } else {
    this.prepend(cos * scaleX, sin * scaleX, -sin * scaleY, cos * scaleY, x, y);
  }
  return this;
};

/**
 * Applies a clockwise rotation transformation to the matrix.
 * @method rotate
 * @param {Number} angle The angle to rotate by, in degrees. To use a value in radians, multiply it by `Math.PI/180`.
 * @return {Matrix2D} This matrix. Useful for chaining method calls.
 **/
p.rotate = function (angle) {
  angle = angle * Matrix2D.DEG_TO_RAD;
  var cos = Math.cos(angle);
  var sin = Math.sin(angle);

  var a1 = this.a;
  var b1 = this.b;

  this.a = a1 * cos + this.c * sin;
  this.b = b1 * cos + this.d * sin;
  this.c = -a1 * sin + this.c * cos;
  this.d = -b1 * sin + this.d * cos;
  return this;
};

/**
 * Applies a skew transformation to the matrix.
 * @method skew
 * @param {Number} skewX The amount to skew horizontally in degrees. To use a value in radians, multiply it by `Math.PI/180`.
 * @param {Number} skewY The amount to skew vertically in degrees.
 * @return {Matrix2D} This matrix. Useful for chaining method calls.
 */
p.skew = function (skewX, skewY) {
  skewX = skewX * Matrix2D.DEG_TO_RAD;
  skewY = skewY * Matrix2D.DEG_TO_RAD;
  this.append(Math.cos(skewY), Math.sin(skewY), -Math.sin(skewX), Math.cos(skewX), 0, 0);
  return this;
};

/**
 * Applies a scale transformation to the matrix.
 * @method scale
 * @param {Number} x The amount to scale horizontally. E.G. a value of 2 will double the size in the X direction, and 0.5 will halve it.
 * @param {Number} y The amount to scale vertically.
 * @return {Matrix2D} This matrix. Useful for chaining method calls.
 **/
p.scale = function (x, y) {
  this.a *= x;
  this.b *= x;
  this.c *= y;
  this.d *= y;
  //this.tx *= x;
  //this.ty *= y;
  return this;
};

/**
 * Translates the matrix on the x and y axes.
 * @method translate
 * @param {Number} x
 * @param {Number} y
 * @return {Matrix2D} This matrix. Useful for chaining method calls.
 **/
p.translate = function (x, y) {
  this.tx += this.a * x + this.c * y;
  this.ty += this.b * x + this.d * y;
  return this;
};

/**
 * Sets the properties of the matrix to those of an identity matrix (one that applies a null transformation).
 * @method identity
 * @return {Matrix2D} This matrix. Useful for chaining method calls.
 **/
p.identity = function () {
  this.a = this.d = 1;
  this.b = this.c = this.tx = this.ty = 0;
  return this;
};

/**
 * Inverts the matrix, causing it to perform the opposite transformation.
 * @method invert
 * @return {Matrix2D} This matrix. Useful for chaining method calls.
 **/
p.invert = function () {
  var a1 = this.a;
  var b1 = this.b;
  var c1 = this.c;
  var d1 = this.d;
  var tx1 = this.tx;
  var n = a1 * d1 - b1 * c1;

  this.a = d1 / n;
  this.b = -b1 / n;
  this.c = -c1 / n;
  this.d = a1 / n;
  this.tx = (c1 * this.ty - d1 * tx1) / n;
  this.ty = -(a1 * this.ty - b1 * tx1) / n;
  return this;
};

/**
 * Returns true if the matrix is an identity matrix.
 * @method isIdentity
 * @return {Boolean}
 **/
p.isIdentity = function () {
  return (
    this.tx === 0 && this.ty === 0 && this.a === 1 && this.b === 0 && this.c === 0 && this.d === 1
  );
};

/**
 * Returns true if this matrix is equal to the specified matrix (all property values are equal).
 * @method equals
 * @param {Matrix2D} matrix The matrix to compare.
 * @return {Boolean}
 **/
p.equals = function (matrix) {
  return (
    this.tx === matrix.tx &&
    this.ty === matrix.ty &&
    this.a === matrix.a &&
    this.b === matrix.b &&
    this.c === matrix.c &&
    this.d === matrix.d
  );
};

/**
 * Transforms a point according to this matrix.
 * @method transformPoint
 * @param {Number} x The x component of the point to transform.
 * @param {Number} y The y component of the point to transform.
 * @param {Point | Object} [pt] An object to copy the result into. If omitted a generic object with x/y properties will be returned.
 * @return {Point} This matrix. Useful for chaining method calls.
 **/
p.transformPoint = function (x, y, pt) {
  pt = pt || {};
  pt.x = x * this.a + y * this.c + this.tx;
  pt.y = x * this.b + y * this.d + this.ty;
  return pt;
};

/**
 * Decomposes the matrix into transform properties (x, y, scaleX, scaleY, and rotation). Note that these values
 * may not match the transform properties you used to generate the matrix, though they will produce the same visual
 * results.
 * @method decompose
 * @param {Object} target The object to apply the transform properties to. If null, then a new object will be returned.
 * @return {Object} The target, or a new generic object with the transform properties applied.
 */
p.decompose = function (target) {
  // TODO: it would be nice to be able to solve for whether the matrix can be decomposed into only scale/rotation even when scale is negative
  if (target == null) {
    target = {};
  }
  target.x = this.tx;
  target.y = this.ty;
  target.scaleX = Math.sqrt(this.a * this.a + this.b * this.b);
  target.scaleY = Math.sqrt(this.c * this.c + this.d * this.d);

  var skewX = Math.atan2(-this.c, this.d);
  var skewY = Math.atan2(this.b, this.a);

  var delta = Math.abs(1 - skewX / skewY);
  if (delta < 0.00001) {
    // effectively identical, can use rotation:
    target.rotation = skewY / Matrix2D.DEG_TO_RAD;
    if (this.a < 0 && this.d >= 0) {
      target.rotation += target.rotation <= 0 ? 180 : -180;
    }
    target.skewX = target.skewY = 0;
  } else {
    target.skewX = skewX / Matrix2D.DEG_TO_RAD;
    target.skewY = skewY / Matrix2D.DEG_TO_RAD;
  }
  return target;
};

/**
 * Copies all properties from the specified matrix to this matrix.
 * @method copy
 * @param {Matrix2D} matrix The matrix to copy properties from.
 * @return {Matrix2D} This matrix. Useful for chaining method calls.
 */
p.copy = function (matrix) {
  return this.setValues(matrix.a, matrix.b, matrix.c, matrix.d, matrix.tx, matrix.ty);
};

/**
 * Returns a clone of the Matrix2D instance.
 * @method clone
 * @return {Matrix2D} a clone of the Matrix2D instance.
 **/
p.clone = function () {
  return new Matrix2D(this.a, this.b, this.c, this.d, this.tx, this.ty);
};

/**
 * Returns a string representation of this object.
 * @method toString
 * @return {String} a string representation of the instance.
 **/
p.toString = function () {
  return (
    '[Matrix2D (a=' +
    this.a +
    ' b=' +
    this.b +
    ' c=' +
    this.c +
    ' d=' +
    this.d +
    ' tx=' +
    this.tx +
    ' ty=' +
    this.ty +
    ')]'
  );
};

// this has to be populated after the class is defined:
Matrix2D.identity = new Matrix2D();

/* harmony default export */ __webpack_exports__["default"] = (Matrix2D);


/***/ }),

/***/ "./src/geom/rectangle.ts":
/*!*******************************!*\
  !*** ./src/geom/rectangle.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Rectangle {
    constructor(x, y, width, height) {
        this.setValues(x, y, width, height);
    }
    setValues(x, y, width, height) {
        this.x = x || 0;
        this.y = y || 0;
        this.width = width || 0;
        this.height = height || 0;
        return this;
    }
    extend(x, y, width, height) {
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
    copy(rectangle) {
        return this.setValues(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
    }
    contains(x, y, width, height) {
        width = width || 0;
        height = height || 0;
        return (x >= this.x &&
            x + width <= this.x + this.width &&
            y >= this.y &&
            y + height <= this.y + this.height);
    }
    isEmpty() {
        return this.width <= 0 || this.height <= 0;
    }
    clone() {
        return new Rectangle(this.x, this.y, this.width, this.height);
    }
}
exports.default = Rectangle;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(__webpack_require__(/*! ./render/index */ "./src/render/index.ts"));
const stage_1 = __importDefault(__webpack_require__(/*! ./node/stage */ "./src/node/stage.ts"));
const group_1 = __importDefault(__webpack_require__(/*! ./node/group */ "./src/node/group.ts"));
const bitmap_1 = __importDefault(__webpack_require__(/*! ./node/bitmap */ "./src/node/bitmap.ts"));
const text_1 = __importDefault(__webpack_require__(/*! ./node/text */ "./src/node/text.ts"));
const graphics_1 = __importDefault(__webpack_require__(/*! ./node/graphics */ "./src/node/graphics.ts"));
const shape_1 = __importDefault(__webpack_require__(/*! ./node/shape/shape */ "./src/node/shape/shape.ts"));
const rect_1 = __importDefault(__webpack_require__(/*! ./node/shape/rect */ "./src/node/shape/rect.ts"));
const circle_1 = __importDefault(__webpack_require__(/*! ./node/shape/circle */ "./src/node/shape/circle.ts"));
const rounded_rect_1 = __importDefault(__webpack_require__(/*! ./node/shape/rounded-rect */ "./src/node/shape/rounded-rect.ts"));
const arrow_path_1 = __importDefault(__webpack_require__(/*! ./node/shape/arrow-path */ "./src/node/shape/arrow-path.ts"));
const ellipse_1 = __importDefault(__webpack_require__(/*! ./node/shape/ellipse */ "./src/node/shape/ellipse.ts"));
const polygon_1 = __importDefault(__webpack_require__(/*! ./node/shape/polygon */ "./src/node/shape/polygon.ts"));
const sector_1 = __importDefault(__webpack_require__(/*! ./node/shape/sector */ "./src/node/shape/sector.ts"));
const equilateral_polygon_1 = __importDefault(__webpack_require__(/*! ./node/shape/equilateral-polygon */ "./src/node/shape/equilateral-polygon.ts"));
const utils = __importStar(__webpack_require__(/*! ./utils/util */ "./src/utils/util.ts"));
const cax = {
    Render: index_1.default,
    Stage: stage_1.default,
    Group: group_1.default,
    Bitmap: bitmap_1.default,
    Text: text_1.default,
    Graphics: graphics_1.default,
    Shape: shape_1.default,
    Rect: rect_1.default,
    Circle: circle_1.default,
    RoundedRect: rounded_rect_1.default,
    ArrowPath: arrow_path_1.default,
    Ellipse: ellipse_1.default,
    Polygon: polygon_1.default,
    Sector: sector_1.default,
    EquilateralPolygon: equilateral_polygon_1.default,
    loadImage: utils.loadImage,
};
exports.default = cax;


/***/ }),

/***/ "./src/node/bitmap.ts":
/*!****************************!*\
  !*** ./src/node/bitmap.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_1 = __importDefault(__webpack_require__(/*! ./node */ "./src/node/node.ts"));
class Bitmap extends node_1.default {
    constructor(img) {
        super();
        if (Bitmap.cache[img.src]) {
            this.img = Bitmap.cache[img.src];
            this.rect = [0, 0, this.img.width, this.img.height];
            this.width = this.img.width;
            this.height = this.img.height;
        }
        else {
            this.img = img;
            this.rect = [0, 0, img.width, img.height];
            this.width = img.width;
            this.height = img.height;
            Bitmap.cache[img.src] = img;
        }
    }
    render(ctx) {
        let rect = this.rect;
        ctx.drawImage(this.img, rect[0], rect[1], rect[2], rect[3], 0, 0, rect[2], rect[3]);
    }
}
Bitmap.cache = {};
exports.default = Bitmap;


/***/ }),

/***/ "./src/node/graphics.ts":
/*!******************************!*\
  !*** ./src/node/graphics.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_1 = __importDefault(__webpack_require__(/*! ./node */ "./src/node/node.ts"));
const assMap = {
    fillStyle: true,
    strokeStyle: true,
    lineWidth: true,
    lineCap: true,
    lineDashOffset: true,
    lineJoin: true,
    miterLimit: true
};
class Graphics extends node_1.default {
    constructor() {
        super();
        this.cmds = [];
        this.currentGradient = null;
    }
    clearRect(...params) {
        this.cmds.push(['clearRect', arguments]);
        return this;
    }
    rect(...params) {
        this.cmds.push(['rect', arguments]);
        return this;
    }
    clear(...params) {
        this.cmds.length = 0;
        return this;
    }
    setLineDash(...params) {
        this.cmds.push(['setLineDash', arguments]);
        return this;
    }
    strokeRect(...params) {
        this.cmds.push(['strokeRect', arguments]);
        return this;
    }
    fillRect(...params) {
        this.cmds.push(['fillRect', arguments]);
        return this;
    }
    beginPath(...params) {
        this.cmds.push(['beginPath', arguments]);
        return this;
    }
    arc(...params) {
        this.cmds.push(['arc', arguments]);
        return this;
    }
    closePath(...params) {
        this.cmds.push(['closePath', arguments]);
        return this;
    }
    fillStyle(...params) {
        this.cmds.push(['fillStyle', arguments]);
        return this;
    }
    fill(...params) {
        this.cmds.push(['fill', arguments]);
        return this;
    }
    strokeStyle(...params) {
        this.cmds.push(['strokeStyle', arguments]);
        return this;
    }
    lineWidth(...params) {
        this.cmds.push(['lineWidth', arguments]);
        return this;
    }
    lineCap(...params) {
        this.cmds.push(['lineCap', arguments]);
        return this;
    }
    lineDashOffset(...params) {
        this.cmds.push(['lineDashOffset', arguments]);
        return this;
    }
    lineJoin(...params) {
        this.cmds.push(['lineJoin', arguments]);
        return this;
    }
    miterLimit(...params) {
        this.cmds.push(['miterLimit', arguments]);
        return this;
    }
    stroke(...params) {
        this.cmds.push(['stroke', arguments]);
        return this;
    }
    moveTo(...params) {
        this.cmds.push(['moveTo', arguments]);
        return this;
    }
    lineTo(...params) {
        this.cmds.push(['lineTo', arguments]);
        return this;
    }
    bezierCurveTo(...params) {
        this.cmds.push(['bezierCurveTo', arguments]);
        return this;
    }
    quadraticCurveTo(...params) {
        this.cmds.push(['quadraticCurveTo', arguments]);
        return this;
    }
    createRadialGradient(...params) {
        this.cmds.push(['createRadialGradient', arguments]);
        return this;
    }
    createLinearGradient(...params) {
        this.cmds.push(['createLinearGradient', arguments]);
        return this;
    }
    addColorStop(...params) {
        this.cmds.push(['addColorStop', arguments]);
        return this;
    }
    fillGradient(...params) {
        this.cmds.push(['fillGradient']);
        return this;
    }
    arcTo(...params) {
        this.cmds.push(['arcTo', arguments]);
        return this;
    }
    render(ctx) {
        this.cmds.forEach(cmd => {
            const methodName = cmd[0];
            if (assMap[methodName]) {
                ctx[methodName] = cmd[1][0];
            }
            else if (methodName === 'addColorStop') {
                this.currentGradient && this.currentGradient.addColorStop(cmd[1][0], cmd[1][1]);
            }
            else if (methodName === 'fillGradient') {
                ctx.fillStyle = this.currentGradient;
            }
            else {
                let result = ctx[methodName].apply(ctx, Array.prototype.slice.call(cmd[1]));
                if (methodName === 'createRadialGradient' || methodName === 'createLinearGradient') {
                    this.currentGradient = result;
                }
            }
        });
    }
}
exports.default = Graphics;


/***/ }),

/***/ "./src/node/group.ts":
/*!***************************!*\
  !*** ./src/node/group.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_1 = __importDefault(__webpack_require__(/*! ./node */ "./src/node/node.ts"));
class Group extends node_1.default {
    constructor() {
        super();
        this.children = [];
        this.mouseChildren = true;
    }
    add(child) {
        const len = arguments.length;
        for (let i = 0; i < len; i++) {
            const c = arguments[i];
            const parent = c.parent;
            if (parent) {
                parent.removeChildAt(parent.children.indexOf(c));
            }
            this.children.push(c);
            c.parent = this;
        }
    }
    addChildAt(child, index) {
        let par = child.parent;
        par && par.removeChildAt(par.children.indexOf(child));
        child.parent = this;
        this.children.splice(index, 0, child);
    }
    removeChildAt(index) {
        let child = this.children[index];
        if (child) {
            child.parent = null;
        }
        this.children.splice(index, 1);
    }
    replace(current, pre) {
        const index = pre.parent.children.indexOf(pre);
        this.removeChildAt(index);
        this.addChildAt(current, index);
    }
    remove(child) {
        if (!child)
            return;
        const len = arguments.length;
        let cLen = this.children.length;
        for (let i = 0; i < len; i++) {
            for (let j = 0; j < cLen; j++) {
                if (child.id === this.children[j].id) {
                    child.parent = null;
                    this.children.splice(j, 1);
                    j--;
                    cLen--;
                }
            }
        }
    }
    empty() {
        this.children.forEach(child => {
            child.parent = null;
        });
        this.children.length = 0;
    }
    destroy() {
        this.empty();
        this.parent && this.parent.destroy();
    }
    _getObjectsUnderPoint(x, y, hitCtx) {
        const ctx = hitCtx;
        if (!this._testMask(this, x, y, ctx)) {
            return null;
        }
        let children = this.children;
        let l = children.length;
        for (let i = l - 1; i >= 0; i--) {
            let child = children[i];
            let hitBox = child.hitBox;
            if (!child.isVisible() || child.ignoreHit) {
                continue;
            }
            if (!this._testMask(child, x, y, ctx)) {
                continue;
            }
            if (!hitBox && child instanceof Group) {
                let result = child._getObjectsUnderPoint(x, y, ctx);
                if (result)
                    return !this.mouseChildren ? this : result;
            }
            else {
                let props = child.getConcatenatedDisplayProps(child._props);
                let mtx = props.matrix;
                if (hitBox) {
                    let mtxClone = mtx.clone();
                    child.setBounds(hitBox[0], hitBox[1], hitBox[2], hitBox[3]);
                    let bounds = child._getBounds(mtxClone, true);
                    let AABB = [bounds.x, bounds.y, bounds.width, bounds.height];
                    if (!this.checkPointInAABB(x, y, AABB)) {
                        continue;
                    }
                    if (child instanceof Group) {
                        let result = child._getObjectsUnderPoint(x, y, ctx);
                        if (result) {
                            return !this.mouseChildren ? this : result;
                        }
                        else {
                            return child;
                        }
                    }
                }
                ctx.globalAlpha = props.alpha;
                ctx.setTransform(mtx.a, mtx.b, mtx.c, mtx.d, mtx.tx - x, mtx.ty - y);
                child.render(ctx);
                if (!this._testHit(ctx)) {
                    continue;
                }
                ctx.setTransform(1, 0, 0, 1, 0, 0);
                ctx.clearRect(0, 0, 2, 2);
                return !this.mouseChildren ? this : child;
            }
        }
        return null;
    }
    _testMask(target, x, y, hitCtx) {
        const ctx = hitCtx;
        const mask = target.mask;
        if (!mask) {
            return true;
        }
        let mtx = this._props.matrix;
        let parent = target.parent;
        mtx = parent ? parent.getConcatenatedMatrix(mtx) : mtx.identity();
        mtx = mask.getMatrix(mask._props.matrix).prependMatrix(mtx);
        ctx.beginPath();
        ctx.setTransform(mtx.a, mtx.b, mtx.c, mtx.d, mtx.tx - x, mtx.ty - y);
        mask.render(ctx);
        ctx.fillStyle = '#000';
        ctx.fill();
        if (!this._testHit(ctx)) {
            return false;
        }
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.clearRect(0, 0, 2, 2);
        return true;
    }
    _testHit(ctx) {
        return ctx.getImageData(0, 0, 1, 1).data[3] > 1;
    }
    checkPointInAABB(x, y, AABB) {
        let minX = AABB[0];
        if (x < minX)
            return false;
        let minY = AABB[1];
        if (y < minY)
            return false;
        let maxX = minX + AABB[2];
        if (x > maxX)
            return false;
        let maxY = minY + AABB[3];
        return y <= maxY;
    }
}
exports.default = Group;


/***/ }),

/***/ "./src/node/node.ts":
/*!**************************!*\
  !*** ./src/node/node.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const uid_1 = __importDefault(__webpack_require__(/*! ../utils/uid */ "./src/utils/uid.ts"));
const displayProps_1 = __importDefault(__webpack_require__(/*! ../geom/displayProps */ "./src/geom/displayProps.ts"));
const rectangle_1 = __importDefault(__webpack_require__(/*! ../geom/rectangle */ "./src/geom/rectangle.ts"));
const matrix2d_1 = __importDefault(__webpack_require__(/*! ../geom/matrix2d */ "./src/geom/matrix2d.js"));
const _eventListeners = Symbol('eventListeners');
const _captureEventListeners = Symbol('captureEventListeners');
class Node {
    constructor() {
        this[_eventListeners] = {};
        this[_captureEventListeners] = {};
        this.parent = null;
        this.id = uid_1.default.get();
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
        this._props = new displayProps_1.default();
        this._rectangle = new rectangle_1.default();
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
        if (o.___instanceof === 'Stage')
            return o;
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
    clip(graphics) {
        this.mask = graphics;
    }
    unclip() {
        this.mask = null;
    }
    setTransform(x, y, scaleX, scaleY, rotation, skewX, skewY, regX, regY) {
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
    getMatrix(matrix) {
        let o = this;
        let mtx = matrix || new matrix2d_1.default();
        return (mtx.identity() &&
            mtx.appendTransform(o.x, o.y, o.scaleX, o.scaleY, o.rotation, o.skewX, o.skewY, o.regX, o.regY));
    }
    getConcatenatedMatrix(matrix) {
        let o = this;
        let mtx = this.getMatrix(matrix);
        while ((o = o.parent)) {
            mtx.prependMatrix(o.getMatrix(o._props.matrix));
        }
        return mtx;
    }
    getConcatenatedDisplayProps(props) {
        props = props ? props.identity() : new displayProps_1.default();
        let o = this;
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
    setBounds(x, y, width, height) {
        if (x === null) {
            this._bounds = null;
            return;
        }
        this._bounds = (this._bounds || new rectangle_1.default()).setValues(x, y, width, height);
    }
    getTransformedBounds() {
        return this._getBounds();
    }
    _getBounds(matrix, ignoreTransform) {
        return this._transformBounds(this.getBounds(), matrix, ignoreTransform);
    }
    _transformBounds(bounds, matrix, ignoreTransform) {
        if (!bounds) {
            return bounds;
        }
        let x = bounds.x, y = bounds.y, width = bounds.width, height = bounds.height, mtx = this._props.matrix;
        mtx = ignoreTransform ? mtx.identity() : this.getMatrix(mtx);
        if (x || y) {
            mtx.appendTransform(0, 0, 1, 1, 0, 0, 0, -x, -y);
        }
        if (matrix) {
            mtx.prependMatrix(matrix);
        }
        let x_a = width * mtx.a, x_b = width * mtx.b;
        let y_c = height * mtx.c, y_d = height * mtx.d;
        let tx = mtx.tx, ty = mtx.ty;
        let minX = tx, maxX = tx, minY = ty, maxY = ty;
        if ((x = x_a + tx) < minX) {
            minX = x;
        }
        else if (x > maxX) {
            maxX = x;
        }
        if ((x = x_a + y_c + tx) < minX) {
            minX = x;
        }
        else if (x > maxX) {
            maxX = x;
        }
        if ((x = y_c + tx) < minX) {
            minX = x;
        }
        else if (x > maxX) {
            maxX = x;
        }
        if ((y = x_b + ty) < minY) {
            minY = y;
        }
        else if (y > maxY) {
            maxY = y;
        }
        if ((y = x_b + y_d + ty) < minY) {
            minY = y;
        }
        else if (y > maxY) {
            maxY = y;
        }
        if ((y = y_d + ty) < minY) {
            minY = y;
        }
        else if (y > maxY) {
            maxY = y;
        }
        return bounds.setValues(minX, minY, maxX - minX, maxY - minY);
    }
    on(type, listener, options) {
        this.addEventListener(type, listener, options);
    }
    off(type, listener, options) {
        this.removeEventListener(type, listener, options);
    }
    addEventListener(type, listener, options) {
        if (typeof options === 'boolean')
            options = { capture: options };
        const { capture, once } = options || {};
        const eventListeners = capture ? _captureEventListeners : _eventListeners;
        this[eventListeners][type] = this[eventListeners][type] || [];
        this[eventListeners][type].push({ listener, once });
        return this;
    }
    removeEventListener(type, listener, options) {
        if (typeof options === 'boolean')
            options = { capture: options };
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
    dispatchEvent(event) {
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
            if (!event.bubbles && event.cancelBubble)
                break;
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
                if (!event.bubbles || event.cancelBubble)
                    break;
            }
        }
    }
}
exports.default = Node;


/***/ }),

/***/ "./src/node/shape/arrow-path.ts":
/*!**************************************!*\
  !*** ./src/node/shape/arrow-path.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const shape_1 = __importDefault(__webpack_require__(/*! ./shape */ "./src/node/shape/shape.ts"));
class ArrowPath extends shape_1.default {
    constructor(path, option) {
        super();
        this.path = path;
        this.option = Object.assign({
            strokeStyle: 'black',
            lineWidth: 1,
            headSize: 10
        }, option);
    }
    draw() {
        const path = this.path;
        this.beginPath();
        const len = path.length;
        if (len === 2) {
            this.drawArrow(path[0].x, path[0].y, path[1].x, path[1].y, 30);
        }
        else {
            this.moveTo(path[0].x, path[0].y);
            for (let i = 1; i < len - 1; i++) {
                this.lineTo(path[i].x, path[i].y);
            }
            this.drawArrow(path[len - 2].x, path[len - 2].y, path[len - 1].x, path[len - 1].y, 30);
        }
        this.stroke();
    }
    drawArrow(fromX, fromY, toX, toY, theta) {
        let angle = (Math.atan2(fromY - toY, fromX - toX) * 180) / Math.PI, angle1 = ((angle + theta) * Math.PI) / 180, angle2 = ((angle - theta) * Math.PI) / 180, hs = this.option.headSize, topX = hs * Math.cos(angle1), topY = hs * Math.sin(angle1), botX = hs * Math.cos(angle2), botY = hs * Math.sin(angle2);
        let arrowX = fromX - topX, arrowY = fromY - topY;
        this.moveTo(arrowX, arrowY);
        this.moveTo(fromX, fromY);
        this.lineTo(toX, toY);
        arrowX = toX + topX;
        arrowY = toY + topY;
        this.moveTo(arrowX, arrowY);
        this.lineTo(toX, toY);
        arrowX = toX + botX;
        arrowY = toY + botY;
        this.lineTo(arrowX, arrowY);
        this.strokeStyle(this.option.strokeStyle);
        this.lineWidth(this.option.lineWidth);
    }
}
exports.default = ArrowPath;


/***/ }),

/***/ "./src/node/shape/circle.ts":
/*!**********************************!*\
  !*** ./src/node/shape/circle.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const shape_1 = __importDefault(__webpack_require__(/*! ./shape */ "./src/node/shape/shape.ts"));
class Circle extends shape_1.default {
    constructor(r, option) {
        super();
        this.option = option || {};
        this.r = r;
        this._dp = Math.PI * 2;
    }
    draw() {
        this.beginPath();
        this.arc(0, 0, this.r, 0, this._dp, false);
        if (this.option.strokeStyle) {
            if (this.option.lineWidth !== undefined) {
                this.lineWidth(this.option.lineWidth);
            }
            this.strokeStyle(this.option.strokeStyle);
            this.stroke();
        }
        if (this.option.fillStyle) {
            this.fillStyle(this.option.fillStyle);
            this.fill();
        }
    }
}
exports.default = Circle;


/***/ }),

/***/ "./src/node/shape/ellipse.ts":
/*!***********************************!*\
  !*** ./src/node/shape/ellipse.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const shape_1 = __importDefault(__webpack_require__(/*! ./shape */ "./src/node/shape/shape.ts"));
class Ellipse extends shape_1.default {
    constructor(width, height, option) {
        super();
        this.option = option || {};
        this.width = width;
        this.height = height;
    }
    draw() {
        const w = this.width;
        const h = this.height;
        const k = 0.5522848;
        const ox = (w / 2) * k;
        const oy = (h / 2) * k;
        const xe = w;
        const ye = h;
        const xm = w / 2;
        const ym = h / 2;
        this.beginPath();
        this.moveTo(0, ym);
        this.bezierCurveTo(0, ym - oy, xm - ox, 0, xm, 0);
        this.bezierCurveTo(xm + ox, 0, xe, ym - oy, xe, ym);
        this.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
        this.bezierCurveTo(xm - ox, ye, 0, ym + oy, 0, ym);
        if (this.option.strokeStyle) {
            if (this.option.lineWidth !== undefined) {
                this.lineWidth(this.option.lineWidth);
            }
            this.strokeStyle(this.option.strokeStyle);
            this.stroke();
        }
        if (this.option.fillStyle) {
            this.fillStyle(this.option.fillStyle);
            this.fill();
        }
    }
}
exports.default = Ellipse;


/***/ }),

/***/ "./src/node/shape/equilateral-polygon.ts":
/*!***********************************************!*\
  !*** ./src/node/shape/equilateral-polygon.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const shape_1 = __importDefault(__webpack_require__(/*! ./shape */ "./src/node/shape/shape.ts"));
class EquilateralPolygon extends shape_1.default {
    constructor(num, r, options) {
        super();
        this.num = num;
        this.r = r;
        this.options = options || {};
        this.vertex = [];
        this.initVertex();
    }
    initVertex() {
        this.vertex.length = [];
        const num = this.num;
        const r = this.r;
        let i, startX, startY, newX, newY;
        if (num % 2 === 0) {
            startX = r * Math.cos((2 * Math.PI * 0) / num);
            startY = r * Math.sin((2 * Math.PI * 0) / num);
            this.vertex.push([startX, startY]);
            for (i = 1; i < num; i++) {
                newX = r * Math.cos((2 * Math.PI * i) / num);
                newY = r * Math.sin((2 * Math.PI * i) / num);
                this.vertex.push([newX, newY]);
            }
        }
        else {
            startX = r * Math.cos((2 * Math.PI * 0) / num - Math.PI / 2);
            startY = r * Math.sin((2 * Math.PI * 0) / num - Math.PI / 2);
            this.vertex.push([startX, startY]);
            for (i = 1; i < num; i++) {
                newX = r * Math.cos((2 * Math.PI * i) / num - Math.PI / 2);
                newY = r * Math.sin((2 * Math.PI * i) / num - Math.PI / 2);
                this.vertex.push([newX, newY]);
            }
        }
    }
    draw() {
        this.beginPath();
        this.moveTo(this.vertex[0][0], this.vertex[0][1]);
        for (let i = 1, len = this.vertex.length; i < len; i++) {
            this.lineTo(this.vertex[i][0], this.vertex[i][1]);
        }
        this.closePath();
        if (this.options.fillStyle) {
            this.fillStyle(this.options.fillStyle);
            this.fill();
        }
        if (this.options.strokeStyle) {
            this.strokeStyle(this.options.strokeStyle);
            if (typeof this.options.lineWidth === 'number') {
                this.lineWidth(this.options.lineWidth);
            }
            this.stroke();
        }
    }
}
exports.default = EquilateralPolygon;


/***/ }),

/***/ "./src/node/shape/polygon.ts":
/*!***********************************!*\
  !*** ./src/node/shape/polygon.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const shape_1 = __importDefault(__webpack_require__(/*! ./shape */ "./src/node/shape/shape.ts"));
class Polygon extends shape_1.default {
    constructor(vertex, options) {
        super();
        this.vertex = vertex || [];
        this.options = options || {};
        this.strokeColor = this.options.strokeColor;
        this.fillColor = this.options.fillColor;
    }
    draw() {
        this.clear().beginPath();
        this.strokeStyle(this.strokeColor);
        this.moveTo(this.vertex[0][0], this.vertex[0][1]);
        for (let i = 1, len = this.vertex.length; i < len; i++) {
            this.lineTo(this.vertex[i][0], this.vertex[i][1]);
        }
        this.closePath();
        // 路径闭合
        //  if (this.options.strokeStyle) {
        //    this.strokeStyle = strokeStyle;
        // this.lineWidth(this.options.width);
        // this.lineJoin('round');
        // this.stroke();
        //  }
        if (this.strokeColor) {
            this.strokeStyle(this.strokeColor);
            this.stroke();
        }
        if (this.fillColor) {
            this.fillStyle(this.fillColor);
            this.fill();
        }
    }
}
exports.default = Polygon;


/***/ }),

/***/ "./src/node/shape/rect.ts":
/*!********************************!*\
  !*** ./src/node/shape/rect.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const shape_1 = __importDefault(__webpack_require__(/*! ./shape */ "./src/node/shape/shape.ts"));
class Rect extends shape_1.default {
    constructor(width, height, option) {
        super();
        this.width = width;
        this.height = height;
        this.option = option || {};
    }
    draw() {
        if (this.option.fillStyle) {
            this.fillStyle(this.option.fillStyle);
            this.fillRect(0, 0, this.width, this.height);
        }
        if (this.option.strokeStyle) {
            this.strokeStyle(this.option.strokeStyle);
            if (typeof this.option.lineWidth === 'number') {
                this.lineWidth(this.option.lineWidth);
            }
            this.strokeRect(0, 0, this.width, this.height);
        }
    }
}
exports.default = Rect;


/***/ }),

/***/ "./src/node/shape/rounded-rect.ts":
/*!****************************************!*\
  !*** ./src/node/shape/rounded-rect.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const shape_1 = __importDefault(__webpack_require__(/*! ./shape */ "./src/node/shape/shape.ts"));
class RoundedRect extends shape_1.default {
    constructor(width, height, r, option) {
        super();
        this.option = Object.assign({
            lineWidth: 1,
            lt: true,
            rt: true,
            lb: true,
            rb: true
        }, option);
        this.r = r || 0;
        this.width = width;
        this.height = height;
    }
    draw() {
        const width = this.width, height = this.height, r = this.r;
        const ax = r, ay = 0, bx = width, by = 0, cx = width, cy = height, dx = 0, dy = height, ex = 0, ey = 0;
        this.beginPath();
        this.moveTo(ax, ay);
        if (this.option.rt) {
            this.arcTo(bx, by, cx, cy, r);
        }
        else {
            this.lineTo(bx, by);
        }
        if (this.option.rb) {
            this.arcTo(cx, cy, dx, dy, r);
        }
        else {
            this.lineTo(cx, cy);
        }
        if (this.option.lb) {
            this.arcTo(dx, dy, ex, ey, r);
        }
        else {
            this.lineTo(dx, dy);
        }
        if (this.option.lt) {
            this.arcTo(ex, ey, ax, ay, r);
        }
        else {
            this.lineTo(ex, ey);
        }
        if (this.option.fillStyle) {
            this.closePath();
            this.fillStyle(this.option.fillStyle);
            this.fill();
        }
        if (this.option.strokeStyle) {
            this.lineWidth(this.option.lineWidth);
            this.strokeStyle(this.option.strokeStyle);
            this.stroke();
        }
    }
}
exports.default = RoundedRect;


/***/ }),

/***/ "./src/node/shape/sector.ts":
/*!**********************************!*\
  !*** ./src/node/shape/sector.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const shape_1 = __importDefault(__webpack_require__(/*! ./shape */ "./src/node/shape/shape.ts"));
class Sector extends shape_1.default {
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
exports.default = Sector;


/***/ }),

/***/ "./src/node/shape/shape.ts":
/*!*********************************!*\
  !*** ./src/node/shape/shape.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphics_1 = __importDefault(__webpack_require__(/*! ../graphics */ "./src/node/graphics.ts"));
class Shape extends graphics_1.default {
    draw() { }
    render(ctx) {
        this.clear();
        this.draw();
        super.render(ctx);
    }
}
exports.default = Shape;


/***/ }),

/***/ "./src/node/stage.ts":
/*!***************************!*\
  !*** ./src/node/stage.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const group_1 = __importDefault(__webpack_require__(/*! ./group */ "./src/node/group.ts"));
const index_1 = __importDefault(__webpack_require__(/*! ../render/index */ "./src/render/index.ts"));
const event_1 = __importDefault(__webpack_require__(/*! ../event/event */ "./src/event/event.ts"));
class Stage extends group_1.default {
    constructor(container, width, height) {
        super();
        this.container = container;
        this.width = width;
        this.height = height;
        const ctx = container.getContext('2d');
        // @ts-ignore
        const dpr = wx.getSystemInfoSync().pixelRatio;
        container.width = width * dpr;
        container.height = height * dpr;
        ctx.scale(dpr, dpr);
        this.dpr = dpr;
        this.ctx = ctx;
        this.render = new index_1.default(ctx, container.width, container.height);
        this.hitCtx = null;
        this.touchObject = null;
        this.___instanceof = 'Stage';
        this.pinchStartDistance = 0;
        this.startPos1 = { x: 0, y: 0 };
        this.startPos2 = { x: 0, y: 0 };
    }
    update() {
        this.render.update(this);
    }
    setHitCanvas(hitCanvas) {
        const hitCtx = hitCanvas.getContext('2d');
        hitCanvas.width = this.width;
        hitCanvas.height = this.height;
        this.hitCtx = hitCtx;
    }
    getTextWidth(text, font) {
        this.ctx.font = font;
        return this.ctx.measureText(text).width;
    }
    loadImage(url) {
        const canvas = this.container;
        return new Promise((resolve, reject) => {
            const image = canvas.createImage();
            image.src = url;
            image.onload = function () {
                resolve(image);
            };
            image.onerror = function (error) {
                reject(error);
            };
        });
    }
    touchStartHandler(evt) {
        const p1 = evt.touches[0];
        const touchesLength = evt.touches.length;
        evt.stageX = Math.round(p1.x);
        evt.stageY = Math.round(p1.y);
        let obj = this.getObjectUnderPoint(evt);
        this.touchObject = obj;
        this._mouseDownX = evt.stageX;
        this._mouseDownY = evt.stageY;
        this.preStageX = evt.stageX;
        this.preStageY = evt.stageY;
        if (obj && touchesLength === 2) {
            const p2 = evt.touches[1];
            this.pinchStartDistance = Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
            this.startPos1 = p1;
            this.startPos2 = p2;
        }
        this.__dispatchEvent(obj, evt);
    }
    touchMoveHandler(evt) {
        const p1 = evt.touches[0];
        const touchesLength = evt.touches.length;
        evt.stageX = Math.round(p1.x);
        evt.stageY = Math.round(p1.y);
        let mockEvt = new event_1.default();
        mockEvt.stageX = evt.stageX;
        mockEvt.stageY = evt.stageY;
        mockEvt.originalEvent = evt;
        if (this.touchObject && touchesLength === 1) {
            mockEvt.type = 'drag';
            mockEvt.dx = mockEvt.stageX - this.preStageX;
            mockEvt.dy = mockEvt.stageY - this.preStageY;
            this.preStageX = mockEvt.stageX;
            this.preStageY = mockEvt.stageY;
            this.touchObject.dispatchEvent(mockEvt);
        }
        if (this.touchObject && touchesLength === 2) {
            const p2 = evt.touches[1];
            if (this.pinchStartDistance > 0) {
                const distance = Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
                const deltaX1 = p1.x - this.startPos1.x;
                const deltaY1 = p1.y - this.startPos1.y;
                const deltaX2 = p2.x - this.startPos2.x;
                const deltaY2 = p2.y - this.startPos2.y;
                mockEvt.type = 'pinch';
                mockEvt.zoom = parseFloat((distance / this.pinchStartDistance).toFixed(2));
                mockEvt.dx = Math.round((deltaX1 + deltaX2) / 2);
                mockEvt.dy = Math.round((deltaY1 + deltaY2) / 2);
                this.pinchStartDistance = distance;
                this.startPos1 = p1;
                this.startPos2 = p2;
                this.touchObject.dispatchEvent(mockEvt);
            }
        }
        this.__dispatchEvent(this.touchObject, evt);
    }
    touchEndHandler(evt) {
        const p1 = evt.changedTouches[0];
        evt.stageX = Math.round(p1.x);
        evt.stageY = Math.round(p1.y);
        let obj = this.getObjectUnderPoint(evt);
        this._mouseUpX = evt.stageX;
        this._mouseUpY = evt.stageY;
        this.__dispatchEvent(this.touchObject, evt);
        this.touchObject = null;
        this.preStageX = null;
        this.preStageY = null;
        if (obj &&
            Math.abs(this._mouseDownX - this._mouseUpX) < 10 &&
            Math.abs(this._mouseDownY - this._mouseUpY) < 10) {
            let mockEvt = new event_1.default();
            mockEvt.stageX = evt.stageX;
            mockEvt.stageY = evt.stageY;
            mockEvt.originalEvent = evt;
            mockEvt.type = 'tap';
            obj.dispatchEvent(mockEvt);
        }
    }
    getObjectUnderPoint(evt) {
        const x = evt.stageX;
        const y = evt.stageY;
        return this._getObjectsUnderPoint(x, y, this.hitCtx) || this;
    }
    __dispatchEvent(obj, evt) {
        if (!obj)
            return;
        let mockEvt = new event_1.default();
        mockEvt.stageX = evt.stageX;
        mockEvt.stageY = evt.stageY;
        mockEvt.originalEvent = evt;
        mockEvt.type = evt.type;
        obj.dispatchEvent(mockEvt);
    }
}
exports.default = Stage;


/***/ }),

/***/ "./src/node/text.ts":
/*!**************************!*\
  !*** ./src/node/text.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_1 = __importDefault(__webpack_require__(/*! ./node */ "./src/node/node.ts"));
class Text extends node_1.default {
    constructor(text, option) {
        super();
        this.text = text;
        option = option || {};
        this.font = option.font || '10px sans-serif';
        this.color = option.color || 'black';
        this.textAlign = option.textAlign || 'left';
        this.baseline = option.baseline || 'top';
    }
    render(ctx) {
        ctx.font = this.font;
        ctx.fillStyle = this.color;
        ctx.textAlign = this.textAlign;
        ctx.textBaseline = this.baseline;
        ctx.fillText(this.text, 0, 0);
    }
}
exports.default = Text;


/***/ }),

/***/ "./src/render/index.ts":
/*!*****************************!*\
  !*** ./src/render/index.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const group_1 = __importDefault(__webpack_require__(/*! ../node/group */ "./src/node/group.ts"));
class Render {
    constructor(ctx, width, height) {
        this.ctx = ctx;
        this.width = width;
        this.height = height;
    }
    update(stage) {
        this.clear(this.ctx, this.width, this.height);
        this.render(this.ctx, stage);
    }
    clear(ctx, width, height) {
        ctx.clearRect(0, 0, width, height);
    }
    render(ctx, o) {
        let mtx = o._props.matrix;
        o.getMatrix(mtx);
        if (o.children) {
            let list = o.children.slice(0);
            let l = list.length;
            for (let i = 0; i < l; i++) {
                let child = list[i];
                if (!child.isVisible()) {
                    continue;
                }
                ctx.save();
                this._render(ctx, child, mtx);
                ctx.restore();
            }
        }
        else {
            this._render(ctx, o, mtx);
        }
    }
    _render(ctx, o, mtx) {
        let mask = o.mask;
        if (mtx) {
            ctx.transform(mtx.a, mtx.b, mtx.c, mtx.d, mtx.tx, mtx.ty);
        }
        mtx = o._props.matrix;
        if (mask) {
            mask.getMatrix(mtx);
            ctx.transform(mtx.a, mtx.b, mtx.c, mtx.d, mtx.tx, mtx.ty);
            ctx.beginPath();
            mask.render(ctx);
            ctx.clip();
            mtx.invert();
            ctx.transform(mtx.a, mtx.b, mtx.c, mtx.d, mtx.tx, mtx.ty);
        }
        o.getMatrix(mtx);
        ctx.transform(mtx.a, mtx.b, mtx.c, mtx.d, mtx.tx, mtx.ty);
        let props = o.getConcatenatedDisplayProps(o._props);
        mtx = props.matrix;
        ctx.globalAlpha *= o._props.alpha;
        if (o.compositeOperation) {
            ctx.globalCompositeOperation = o.compositeOperation;
        }
        if (o.shadow) {
            this._applyShadow(ctx, o.shadow);
        }
        if (o instanceof group_1.default) {
            let list = o.children.slice(0);
            let l = list.length;
            for (let i = 0; i < l; i++) {
                ctx.save();
                this._render(ctx, list[i]);
                ctx.restore();
            }
        }
        else {
            o.render(ctx);
        }
    }
    _applyShadow(ctx, shadow) {
        shadow = shadow;
        ctx.shadowColor = shadow.color;
        ctx.shadowOffsetX = shadow.offsetX;
        ctx.shadowOffsetY = shadow.offsetY;
        ctx.shadowBlur = shadow.blur;
    }
}
exports.default = Render;


/***/ }),

/***/ "./src/utils/uid.ts":
/*!**************************!*\
  !*** ./src/utils/uid.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
let UID = {
    _nextID: 0,
    get: function () {
        return UID._nextID++;
    }
};
exports.default = UID;


/***/ }),

/***/ "./src/utils/util.ts":
/*!***************************!*\
  !*** ./src/utils/util.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.loadImage = void 0;
function loadImage(url, canvas) {
    return new Promise((resolve, reject) => {
        const image = canvas.createImage();
        image.src = url;
        image.onload = function () {
            resolve(image);
        };
        image.onerror = function (error) {
            reject(error);
        };
    });
}
exports.loadImage = loadImage;


/***/ })

/******/ });
});