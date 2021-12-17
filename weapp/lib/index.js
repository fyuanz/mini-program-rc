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
            this._bounds = x;
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
        evt.stageX = Math.round(p1.x);
        evt.stageY = Math.round(p1.y);
        let obj = this.getObjectUnderPoint(evt);
        this.touchObject = obj;
        this._mouseDownX = evt.stageX;
        this._mouseDownY = evt.stageY;
        this.preStageX = evt.stageX;
        this.preStageY = evt.stageY;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9taW5pUHJvZ3JhbVJDL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9taW5pUHJvZ3JhbVJDL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL21pbmlQcm9ncmFtUkMvLi9zcmMvZXZlbnQvZXZlbnQudHMiLCJ3ZWJwYWNrOi8vbWluaVByb2dyYW1SQy8uL3NyYy9nZW9tL2Rpc3BsYXlQcm9wcy50cyIsIndlYnBhY2s6Ly9taW5pUHJvZ3JhbVJDLy4vc3JjL2dlb20vbWF0cml4MmQuanMiLCJ3ZWJwYWNrOi8vbWluaVByb2dyYW1SQy8uL3NyYy9nZW9tL3JlY3RhbmdsZS50cyIsIndlYnBhY2s6Ly9taW5pUHJvZ3JhbVJDLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL21pbmlQcm9ncmFtUkMvLi9zcmMvbm9kZS9iaXRtYXAudHMiLCJ3ZWJwYWNrOi8vbWluaVByb2dyYW1SQy8uL3NyYy9ub2RlL2dyYXBoaWNzLnRzIiwid2VicGFjazovL21pbmlQcm9ncmFtUkMvLi9zcmMvbm9kZS9ncm91cC50cyIsIndlYnBhY2s6Ly9taW5pUHJvZ3JhbVJDLy4vc3JjL25vZGUvbm9kZS50cyIsIndlYnBhY2s6Ly9taW5pUHJvZ3JhbVJDLy4vc3JjL25vZGUvc2hhcGUvYXJyb3ctcGF0aC50cyIsIndlYnBhY2s6Ly9taW5pUHJvZ3JhbVJDLy4vc3JjL25vZGUvc2hhcGUvY2lyY2xlLnRzIiwid2VicGFjazovL21pbmlQcm9ncmFtUkMvLi9zcmMvbm9kZS9zaGFwZS9lbGxpcHNlLnRzIiwid2VicGFjazovL21pbmlQcm9ncmFtUkMvLi9zcmMvbm9kZS9zaGFwZS9lcXVpbGF0ZXJhbC1wb2x5Z29uLnRzIiwid2VicGFjazovL21pbmlQcm9ncmFtUkMvLi9zcmMvbm9kZS9zaGFwZS9wb2x5Z29uLnRzIiwid2VicGFjazovL21pbmlQcm9ncmFtUkMvLi9zcmMvbm9kZS9zaGFwZS9yZWN0LnRzIiwid2VicGFjazovL21pbmlQcm9ncmFtUkMvLi9zcmMvbm9kZS9zaGFwZS9yb3VuZGVkLXJlY3QudHMiLCJ3ZWJwYWNrOi8vbWluaVByb2dyYW1SQy8uL3NyYy9ub2RlL3NoYXBlL3NlY3Rvci50cyIsIndlYnBhY2s6Ly9taW5pUHJvZ3JhbVJDLy4vc3JjL25vZGUvc2hhcGUvc2hhcGUudHMiLCJ3ZWJwYWNrOi8vbWluaVByb2dyYW1SQy8uL3NyYy9ub2RlL3N0YWdlLnRzIiwid2VicGFjazovL21pbmlQcm9ncmFtUkMvLi9zcmMvbm9kZS90ZXh0LnRzIiwid2VicGFjazovL21pbmlQcm9ncmFtUkMvLi9zcmMvcmVuZGVyL2luZGV4LnRzIiwid2VicGFjazovL21pbmlQcm9ncmFtUkMvLi9zcmMvdXRpbHMvdWlkLnRzIiwid2VicGFjazovL21pbmlQcm9ncmFtUkMvLi9zcmMvdXRpbHMvdXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztR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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixTQUFTO0FBQ2hDLDJCQUEyQixVQUFVO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixRQUFRO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xLYTtBQUNiO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsOEJBQThCLG1CQUFPLENBQUMsd0NBQWM7QUFDcEQsdUNBQXVDLG1CQUFPLENBQUMsd0RBQXNCO0FBQ3JFLG9DQUFvQyxtQkFBTyxDQUFDLGtEQUFtQjtBQUMvRCxtQ0FBbUMsbUJBQU8sQ0FBQyxnREFBa0I7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIm1pbmlQcm9ncmFtUkNcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wibWluaVByb2dyYW1SQ1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJtaW5pUHJvZ3JhbVJDXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IF90eXBlID0gU3ltYm9sKCd0eXBlJyk7XG5jb25zdCBfYnViYmxlcyA9IFN5bWJvbCgnYnViYmxlcycpO1xuY29uc3QgX29yaWdpbmFsRXZlbnQgPSBTeW1ib2woJ19vcmlnaW5hbEV2ZW50Jyk7XG5jbGFzcyBFdmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXNbX3R5cGVdID0gJyc7XG4gICAgICAgIHRoaXNbX29yaWdpbmFsRXZlbnRdID0gbnVsbDtcbiAgICAgICAgdGhpc1tfYnViYmxlc10gPSB0cnVlO1xuICAgICAgICB0aGlzLmNhbmNlbEJ1YmJsZSA9IGZhbHNlO1xuICAgIH1cbiAgICBzdG9wUHJvcGFnYXRpb24oKSB7XG4gICAgICAgIHRoaXMuY2FuY2VsQnViYmxlID0gdHJ1ZTtcbiAgICB9XG4gICAgZ2V0IHR5cGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzW190eXBlXTtcbiAgICB9XG4gICAgc2V0IHR5cGUodmFsdWUpIHtcbiAgICAgICAgdGhpc1tfdHlwZV0gPSB2YWx1ZTtcbiAgICB9XG4gICAgZ2V0IG9yaWdpbmFsRXZlbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzW19vcmlnaW5hbEV2ZW50XTtcbiAgICB9XG4gICAgc2V0IG9yaWdpbmFsRXZlbnQodmFsdWUpIHtcbiAgICAgICAgdGhpc1tfb3JpZ2luYWxFdmVudF0gPSB2YWx1ZTtcbiAgICB9XG4gICAgZ2V0IGJ1YmJsZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzW19idWJibGVzXTtcbiAgICB9XG4gICAgc2V0IGJ1YmJsZXModmFsdWUpIHtcbiAgICAgICAgdGhpc1tfYnViYmxlc10gPSB2YWx1ZTtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBFdmVudDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgbWF0cml4MmRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9tYXRyaXgyZFwiKSk7XG5jbGFzcyBEaXNwbGF5UHJvcHMge1xuICAgIGNvbnN0cnVjdG9yKHZpc2libGUsIGFscGhhLCBzaGFkb3csIGNvbXBvc2l0ZU9wZXJhdGlvbiwgbWF0cml4KSB7XG4gICAgICAgIHRoaXMuc2V0VmFsdWUodmlzaWJsZSwgYWxwaGEsIHNoYWRvdywgY29tcG9zaXRlT3BlcmF0aW9uLCBtYXRyaXgpO1xuICAgIH1cbiAgICBzZXRWYWx1ZSh2aXNpYmxlLCBhbHBoYSwgc2hhZG93LCBjb21wb3NpdGVPcGVyYXRpb24sIG1hdHJpeCkge1xuICAgICAgICB0aGlzLnZpc2libGUgPSB2aXNpYmxlID09IG51bGwgPyB0cnVlIDogISF2aXNpYmxlO1xuICAgICAgICB0aGlzLmFscGhhID0gYWxwaGEgPT0gbnVsbCA/IDEgOiBhbHBoYTtcbiAgICAgICAgdGhpcy5zaGFkb3cgPSBzaGFkb3cgfHwgbnVsbDtcbiAgICAgICAgdGhpcy5jb21wb3NpdGVPcGVyYXRpb24gPSBjb21wb3NpdGVPcGVyYXRpb24gfHwgbnVsbDtcbiAgICAgICAgdGhpcy5tYXRyaXggPSBtYXRyaXggfHwgKHRoaXMubWF0cml4ICYmIHRoaXMubWF0cml4LmlkZW50aXR5KCkpIHx8IG5ldyBtYXRyaXgyZF8xLmRlZmF1bHQoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGFwcGVuZCh2aXNpYmxlLCBhbHBoYSwgc2hhZG93LCBjb21wb3NpdGVPcGVyYXRpb24sIG1hdHJpeCkge1xuICAgICAgICB0aGlzLmFscGhhICo9IGFscGhhO1xuICAgICAgICB0aGlzLnNoYWRvdyA9IHNoYWRvdyB8fCB0aGlzLnNoYWRvdztcbiAgICAgICAgdGhpcy5jb21wb3NpdGVPcGVyYXRpb24gPSBjb21wb3NpdGVPcGVyYXRpb24gfHwgdGhpcy5jb21wb3NpdGVPcGVyYXRpb247XG4gICAgICAgIHRoaXMudmlzaWJsZSA9IHRoaXMudmlzaWJsZSAmJiB2aXNpYmxlO1xuICAgICAgICBtYXRyaXggJiYgdGhpcy5tYXRyaXguYXBwZW5kTWF0cml4KG1hdHJpeCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBwcmVwZW5kKHZpc2libGUsIGFscGhhLCBzaGFkb3csIGNvbXBvc2l0ZU9wZXJhdGlvbiwgbWF0cml4KSB7XG4gICAgICAgIHRoaXMuYWxwaGEgKj0gYWxwaGE7XG4gICAgICAgIHRoaXMuc2hhZG93ID0gdGhpcy5zaGFkb3cgfHwgc2hhZG93O1xuICAgICAgICB0aGlzLmNvbXBvc2l0ZU9wZXJhdGlvbiA9IHRoaXMuY29tcG9zaXRlT3BlcmF0aW9uIHx8IGNvbXBvc2l0ZU9wZXJhdGlvbjtcbiAgICAgICAgdGhpcy52aXNpYmxlID0gdGhpcy52aXNpYmxlICYmIHZpc2libGU7XG4gICAgICAgIG1hdHJpeCAmJiB0aGlzLm1hdHJpeC5wcmVwZW5kTWF0cml4KG1hdHJpeCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBpZGVudGl0eSgpIHtcbiAgICAgICAgdGhpcy52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5hbHBoYSA9IDE7XG4gICAgICAgIHRoaXMuc2hhZG93ID0gdGhpcy5jb21wb3NpdGVPcGVyYXRpb24gPSBudWxsO1xuICAgICAgICB0aGlzLm1hdHJpeC5pZGVudGl0eSgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBEaXNwbGF5UHJvcHM7XG4iLCIvKlxuICogTWF0cml4MkRcbiAqIFZpc2l0IGh0dHA6Ly9jcmVhdGVqcy5jb20vIGZvciBkb2N1bWVudGF0aW9uLCB1cGRhdGVzIGFuZCBleGFtcGxlcy5cbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTAgZ3NraW5uZXIuY29tLCBpbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb25cbiAqIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uXG4gKiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXRcbiAqIHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLFxuICogY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZVxuICogU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmdcbiAqIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmVcbiAqIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsXG4gKiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVNcbiAqIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EXG4gKiBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVFxuICogSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksXG4gKiBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcbiAqIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1JcbiAqIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG4vLyBjb25zdHJ1Y3Rvcjpcbi8qKlxuICogUmVwcmVzZW50cyBhbiBhZmZpbmUgdHJhbnNmb3JtYXRpb24gbWF0cml4LCBhbmQgcHJvdmlkZXMgdG9vbHMgZm9yIGNvbnN0cnVjdGluZyBhbmQgY29uY2F0ZW5hdGluZyBtYXRyaWNlcy5cbiAqXG4gKiBUaGlzIG1hdHJpeCBjYW4gYmUgdmlzdWFsaXplZCBhczpcbiAqXG4gKiBcdFsgYSAgYyAgdHhcbiAqIFx0ICBiICBkICB0eVxuICogXHQgIDAgIDAgIDEgIF1cbiAqXG4gKiBOb3RlIHRoZSBsb2NhdGlvbnMgb2YgYiBhbmQgYy5cbiAqXG4gKiBAY2xhc3MgTWF0cml4MkRcbiAqIEBwYXJhbSB7TnVtYmVyfSBbYT0xXSBTcGVjaWZpZXMgdGhlIGEgcHJvcGVydHkgZm9yIHRoZSBuZXcgbWF0cml4LlxuICogQHBhcmFtIHtOdW1iZXJ9IFtiPTBdIFNwZWNpZmllcyB0aGUgYiBwcm9wZXJ0eSBmb3IgdGhlIG5ldyBtYXRyaXguXG4gKiBAcGFyYW0ge051bWJlcn0gW2M9MF0gU3BlY2lmaWVzIHRoZSBjIHByb3BlcnR5IGZvciB0aGUgbmV3IG1hdHJpeC5cbiAqIEBwYXJhbSB7TnVtYmVyfSBbZD0xXSBTcGVjaWZpZXMgdGhlIGQgcHJvcGVydHkgZm9yIHRoZSBuZXcgbWF0cml4LlxuICogQHBhcmFtIHtOdW1iZXJ9IFt0eD0wXSBTcGVjaWZpZXMgdGhlIHR4IHByb3BlcnR5IGZvciB0aGUgbmV3IG1hdHJpeC5cbiAqIEBwYXJhbSB7TnVtYmVyfSBbdHk9MF0gU3BlY2lmaWVzIHRoZSB0eSBwcm9wZXJ0eSBmb3IgdGhlIG5ldyBtYXRyaXguXG4gKiBAY29uc3RydWN0b3JcbiAqKi9cbmZ1bmN0aW9uIE1hdHJpeDJEKGEsIGIsIGMsIGQsIHR4LCB0eSkge1xuICB0aGlzLnNldFZhbHVlcyhhLCBiLCBjLCBkLCB0eCwgdHkpO1xuXG4gIC8vIHB1YmxpYyBwcm9wZXJ0aWVzOlxuICAvLyBhc3NpZ25lZCBpbiB0aGUgc2V0VmFsdWVzIG1ldGhvZC5cbiAgLyoqXG4gICAqIFBvc2l0aW9uICgwLCAwKSBpbiBhIDN4MyBhZmZpbmUgdHJhbnNmb3JtYXRpb24gbWF0cml4LlxuICAgKiBAcHJvcGVydHkgYVxuICAgKiBAdHlwZSBOdW1iZXJcbiAgICoqL1xuXG4gIC8qKlxuICAgKiBQb3NpdGlvbiAoMCwgMSkgaW4gYSAzeDMgYWZmaW5lIHRyYW5zZm9ybWF0aW9uIG1hdHJpeC5cbiAgICogQHByb3BlcnR5IGJcbiAgICogQHR5cGUgTnVtYmVyXG4gICAqKi9cblxuICAvKipcbiAgICogUG9zaXRpb24gKDEsIDApIGluIGEgM3gzIGFmZmluZSB0cmFuc2Zvcm1hdGlvbiBtYXRyaXguXG4gICAqIEBwcm9wZXJ0eSBjXG4gICAqIEB0eXBlIE51bWJlclxuICAgKiovXG5cbiAgLyoqXG4gICAqIFBvc2l0aW9uICgxLCAxKSBpbiBhIDN4MyBhZmZpbmUgdHJhbnNmb3JtYXRpb24gbWF0cml4LlxuICAgKiBAcHJvcGVydHkgZFxuICAgKiBAdHlwZSBOdW1iZXJcbiAgICoqL1xuXG4gIC8qKlxuICAgKiBQb3NpdGlvbiAoMiwgMCkgaW4gYSAzeDMgYWZmaW5lIHRyYW5zZm9ybWF0aW9uIG1hdHJpeC5cbiAgICogQHByb3BlcnR5IHR4XG4gICAqIEB0eXBlIE51bWJlclxuICAgKiovXG5cbiAgLyoqXG4gICAqIFBvc2l0aW9uICgyLCAxKSBpbiBhIDN4MyBhZmZpbmUgdHJhbnNmb3JtYXRpb24gbWF0cml4LlxuICAgKiBAcHJvcGVydHkgdHlcbiAgICogQHR5cGUgTnVtYmVyXG4gICAqKi9cbn1cbnZhciBwID0gTWF0cml4MkQucHJvdG90eXBlO1xuXG4vLyBjb25zdGFudHM6XG4vKipcbiAqIE11bHRpcGxpZXIgZm9yIGNvbnZlcnRpbmcgZGVncmVlcyB0byByYWRpYW5zLiBVc2VkIGludGVybmFsbHkgYnkgTWF0cml4MkQuXG4gKiBAcHJvcGVydHkgREVHX1RPX1JBRFxuICogQHN0YXRpY1xuICogQGZpbmFsXG4gKiBAdHlwZSBOdW1iZXJcbiAqIEByZWFkb25seVxuICoqL1xuTWF0cml4MkQuREVHX1RPX1JBRCA9IE1hdGguUEkgLyAxODA7XG5cbi8vIHN0YXRpYyBwdWJsaWMgcHJvcGVydGllczpcbi8qKlxuICogQW4gaWRlbnRpdHkgbWF0cml4LCByZXByZXNlbnRpbmcgYSBudWxsIHRyYW5zZm9ybWF0aW9uLlxuICogQHByb3BlcnR5IGlkZW50aXR5XG4gKiBAc3RhdGljXG4gKiBAdHlwZSBNYXRyaXgyRFxuICogQHJlYWRvbmx5XG4gKiovXG5NYXRyaXgyRC5pZGVudGl0eSA9IG51bGw7IC8vIHNldCBhdCBib3R0b20gb2YgY2xhc3MgZGVmaW5pdGlvbi5cblxuLy8gcHVibGljIG1ldGhvZHM6XG4vKipcbiAqIFNldHMgdGhlIHNwZWNpZmllZCB2YWx1ZXMgb24gdGhpcyBpbnN0YW5jZS5cbiAqIEBtZXRob2Qgc2V0VmFsdWVzXG4gKiBAcGFyYW0ge051bWJlcn0gW2E9MV0gU3BlY2lmaWVzIHRoZSBhIHByb3BlcnR5IGZvciB0aGUgbmV3IG1hdHJpeC5cbiAqIEBwYXJhbSB7TnVtYmVyfSBbYj0wXSBTcGVjaWZpZXMgdGhlIGIgcHJvcGVydHkgZm9yIHRoZSBuZXcgbWF0cml4LlxuICogQHBhcmFtIHtOdW1iZXJ9IFtjPTBdIFNwZWNpZmllcyB0aGUgYyBwcm9wZXJ0eSBmb3IgdGhlIG5ldyBtYXRyaXguXG4gKiBAcGFyYW0ge051bWJlcn0gW2Q9MV0gU3BlY2lmaWVzIHRoZSBkIHByb3BlcnR5IGZvciB0aGUgbmV3IG1hdHJpeC5cbiAqIEBwYXJhbSB7TnVtYmVyfSBbdHg9MF0gU3BlY2lmaWVzIHRoZSB0eCBwcm9wZXJ0eSBmb3IgdGhlIG5ldyBtYXRyaXguXG4gKiBAcGFyYW0ge051bWJlcn0gW3R5PTBdIFNwZWNpZmllcyB0aGUgdHkgcHJvcGVydHkgZm9yIHRoZSBuZXcgbWF0cml4LlxuICogQHJldHVybiB7TWF0cml4MkR9IFRoaXMgaW5zdGFuY2UuIFVzZWZ1bCBmb3IgY2hhaW5pbmcgbWV0aG9kIGNhbGxzLlxuICovXG5wLnNldFZhbHVlcyA9IGZ1bmN0aW9uIChhLCBiLCBjLCBkLCB0eCwgdHkpIHtcbiAgLy8gZG9uJ3QgZm9yZ2V0IHRvIHVwZGF0ZSBkb2NzIGluIHRoZSBjb25zdHJ1Y3RvciBpZiB0aGVzZSBjaGFuZ2U6XG4gIHRoaXMuYSA9IGEgPT0gbnVsbCA/IDEgOiBhO1xuICB0aGlzLmIgPSBiIHx8IDA7XG4gIHRoaXMuYyA9IGMgfHwgMDtcbiAgdGhpcy5kID0gZCA9PSBudWxsID8gMSA6IGQ7XG4gIHRoaXMudHggPSB0eCB8fCAwO1xuICB0aGlzLnR5ID0gdHkgfHwgMDtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIEFwcGVuZHMgdGhlIHNwZWNpZmllZCBtYXRyaXggcHJvcGVydGllcyB0byB0aGlzIG1hdHJpeC4gQWxsIHBhcmFtZXRlcnMgYXJlIHJlcXVpcmVkLlxuICogVGhpcyBpcyB0aGUgZXF1aXZhbGVudCBvZiBtdWx0aXBseWluZyBgKHRoaXMgbWF0cml4KSAqIChzcGVjaWZpZWQgbWF0cml4KWAuXG4gKiBAbWV0aG9kIGFwcGVuZFxuICogQHBhcmFtIHtOdW1iZXJ9IGFcbiAqIEBwYXJhbSB7TnVtYmVyfSBiXG4gKiBAcGFyYW0ge051bWJlcn0gY1xuICogQHBhcmFtIHtOdW1iZXJ9IGRcbiAqIEBwYXJhbSB7TnVtYmVyfSB0eFxuICogQHBhcmFtIHtOdW1iZXJ9IHR5XG4gKiBAcmV0dXJuIHtNYXRyaXgyRH0gVGhpcyBtYXRyaXguIFVzZWZ1bCBmb3IgY2hhaW5pbmcgbWV0aG9kIGNhbGxzLlxuICoqL1xucC5hcHBlbmQgPSBmdW5jdGlvbiAoYSwgYiwgYywgZCwgdHgsIHR5KSB7XG4gIHZhciBhMSA9IHRoaXMuYTtcbiAgdmFyIGIxID0gdGhpcy5iO1xuICB2YXIgYzEgPSB0aGlzLmM7XG4gIHZhciBkMSA9IHRoaXMuZDtcbiAgaWYgKGEgIT0gMSB8fCBiICE9IDAgfHwgYyAhPSAwIHx8IGQgIT0gMSkge1xuICAgIHRoaXMuYSA9IGExICogYSArIGMxICogYjtcbiAgICB0aGlzLmIgPSBiMSAqIGEgKyBkMSAqIGI7XG4gICAgdGhpcy5jID0gYTEgKiBjICsgYzEgKiBkO1xuICAgIHRoaXMuZCA9IGIxICogYyArIGQxICogZDtcbiAgfVxuICB0aGlzLnR4ID0gYTEgKiB0eCArIGMxICogdHkgKyB0aGlzLnR4O1xuICB0aGlzLnR5ID0gYjEgKiB0eCArIGQxICogdHkgKyB0aGlzLnR5O1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogUHJlcGVuZHMgdGhlIHNwZWNpZmllZCBtYXRyaXggcHJvcGVydGllcyB0byB0aGlzIG1hdHJpeC5cbiAqIFRoaXMgaXMgdGhlIGVxdWl2YWxlbnQgb2YgbXVsdGlwbHlpbmcgYChzcGVjaWZpZWQgbWF0cml4KSAqICh0aGlzIG1hdHJpeClgLlxuICogQWxsIHBhcmFtZXRlcnMgYXJlIHJlcXVpcmVkLlxuICogQG1ldGhvZCBwcmVwZW5kXG4gKiBAcGFyYW0ge051bWJlcn0gYVxuICogQHBhcmFtIHtOdW1iZXJ9IGJcbiAqIEBwYXJhbSB7TnVtYmVyfSBjXG4gKiBAcGFyYW0ge051bWJlcn0gZFxuICogQHBhcmFtIHtOdW1iZXJ9IHR4XG4gKiBAcGFyYW0ge051bWJlcn0gdHlcbiAqIEByZXR1cm4ge01hdHJpeDJEfSBUaGlzIG1hdHJpeC4gVXNlZnVsIGZvciBjaGFpbmluZyBtZXRob2QgY2FsbHMuXG4gKiovXG5wLnByZXBlbmQgPSBmdW5jdGlvbiAoYSwgYiwgYywgZCwgdHgsIHR5KSB7XG4gIHZhciBhMSA9IHRoaXMuYTtcbiAgdmFyIGMxID0gdGhpcy5jO1xuICB2YXIgdHgxID0gdGhpcy50eDtcblxuICB0aGlzLmEgPSBhICogYTEgKyBjICogdGhpcy5iO1xuICB0aGlzLmIgPSBiICogYTEgKyBkICogdGhpcy5iO1xuICB0aGlzLmMgPSBhICogYzEgKyBjICogdGhpcy5kO1xuICB0aGlzLmQgPSBiICogYzEgKyBkICogdGhpcy5kO1xuICB0aGlzLnR4ID0gYSAqIHR4MSArIGMgKiB0aGlzLnR5ICsgdHg7XG4gIHRoaXMudHkgPSBiICogdHgxICsgZCAqIHRoaXMudHkgKyB0eTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIEFwcGVuZHMgdGhlIHNwZWNpZmllZCBtYXRyaXggdG8gdGhpcyBtYXRyaXguXG4gKiBUaGlzIGlzIHRoZSBlcXVpdmFsZW50IG9mIG11bHRpcGx5aW5nIGAodGhpcyBtYXRyaXgpICogKHNwZWNpZmllZCBtYXRyaXgpYC5cbiAqIEBtZXRob2QgYXBwZW5kTWF0cml4XG4gKiBAcGFyYW0ge01hdHJpeDJEfSBtYXRyaXhcbiAqIEByZXR1cm4ge01hdHJpeDJEfSBUaGlzIG1hdHJpeC4gVXNlZnVsIGZvciBjaGFpbmluZyBtZXRob2QgY2FsbHMuXG4gKiovXG5wLmFwcGVuZE1hdHJpeCA9IGZ1bmN0aW9uIChtYXRyaXgpIHtcbiAgcmV0dXJuIHRoaXMuYXBwZW5kKG1hdHJpeC5hLCBtYXRyaXguYiwgbWF0cml4LmMsIG1hdHJpeC5kLCBtYXRyaXgudHgsIG1hdHJpeC50eSk7XG59O1xuXG4vKipcbiAqIFByZXBlbmRzIHRoZSBzcGVjaWZpZWQgbWF0cml4IHRvIHRoaXMgbWF0cml4LlxuICogVGhpcyBpcyB0aGUgZXF1aXZhbGVudCBvZiBtdWx0aXBseWluZyBgKHNwZWNpZmllZCBtYXRyaXgpICogKHRoaXMgbWF0cml4KWAuXG4gKiBGb3IgZXhhbXBsZSwgeW91IGNvdWxkIGNhbGN1bGF0ZSB0aGUgY29tYmluZWQgdHJhbnNmb3JtYXRpb24gZm9yIGEgY2hpbGQgb2JqZWN0IHVzaW5nOlxuICpcbiAqIFx0dmFyIG8gPSBteURpc3BsYXlPYmplY3Q7XG4gKiBcdHZhciBtdHggPSBvLmdldE1hdHJpeCgpO1xuICogXHR3aGlsZSAobyA9IG8ucGFyZW50KSB7XG4gKiBcdFx0Ly8gcHJlcGVuZCBlYWNoIHBhcmVudCdzIHRyYW5zZm9ybWF0aW9uIGluIHR1cm46XG4gKiBcdFx0by5wcmVwZW5kTWF0cml4KG8uZ2V0TWF0cml4KCkpO1xuICogXHR9XG4gKiBAbWV0aG9kIHByZXBlbmRNYXRyaXhcbiAqIEBwYXJhbSB7TWF0cml4MkR9IG1hdHJpeFxuICogQHJldHVybiB7TWF0cml4MkR9IFRoaXMgbWF0cml4LiBVc2VmdWwgZm9yIGNoYWluaW5nIG1ldGhvZCBjYWxscy5cbiAqKi9cbnAucHJlcGVuZE1hdHJpeCA9IGZ1bmN0aW9uIChtYXRyaXgpIHtcbiAgcmV0dXJuIHRoaXMucHJlcGVuZChtYXRyaXguYSwgbWF0cml4LmIsIG1hdHJpeC5jLCBtYXRyaXguZCwgbWF0cml4LnR4LCBtYXRyaXgudHkpO1xufTtcblxuLyoqXG4gKiBHZW5lcmF0ZXMgbWF0cml4IHByb3BlcnRpZXMgZnJvbSB0aGUgc3BlY2lmaWVkIGRpc3BsYXkgb2JqZWN0IHRyYW5zZm9ybSBwcm9wZXJ0aWVzLCBhbmQgYXBwZW5kcyB0aGVtIHRvIHRoaXMgbWF0cml4LlxuICogRm9yIGV4YW1wbGUsIHlvdSBjYW4gdXNlIHRoaXMgdG8gZ2VuZXJhdGUgYSBtYXRyaXggcmVwcmVzZW50aW5nIHRoZSB0cmFuc2Zvcm1hdGlvbnMgb2YgYSBkaXNwbGF5IG9iamVjdDpcbiAqXG4gKiBcdHZhciBtdHggPSBuZXcgY3JlYXRlanMuTWF0cml4MkQoKTtcbiAqIFx0bXR4LmFwcGVuZFRyYW5zZm9ybShvLngsIG8ueSwgby5zY2FsZVgsIG8uc2NhbGVZLCBvLnJvdGF0aW9uKTtcbiAqIEBtZXRob2QgYXBwZW5kVHJhbnNmb3JtXG4gKiBAcGFyYW0ge051bWJlcn0geFxuICogQHBhcmFtIHtOdW1iZXJ9IHlcbiAqIEBwYXJhbSB7TnVtYmVyfSBzY2FsZVhcbiAqIEBwYXJhbSB7TnVtYmVyfSBzY2FsZVlcbiAqIEBwYXJhbSB7TnVtYmVyfSByb3RhdGlvblxuICogQHBhcmFtIHtOdW1iZXJ9IHNrZXdYXG4gKiBAcGFyYW0ge051bWJlcn0gc2tld1lcbiAqIEBwYXJhbSB7TnVtYmVyfSByZWdYIE9wdGlvbmFsLlxuICogQHBhcmFtIHtOdW1iZXJ9IHJlZ1kgT3B0aW9uYWwuXG4gKiBAcmV0dXJuIHtNYXRyaXgyRH0gVGhpcyBtYXRyaXguIFVzZWZ1bCBmb3IgY2hhaW5pbmcgbWV0aG9kIGNhbGxzLlxuICoqL1xucC5hcHBlbmRUcmFuc2Zvcm0gPSBmdW5jdGlvbiAoeCwgeSwgc2NhbGVYLCBzY2FsZVksIHJvdGF0aW9uLCBza2V3WCwgc2tld1ksIHJlZ1gsIHJlZ1kpIHtcbiAgaWYgKHJvdGF0aW9uICUgMzYwKSB7XG4gICAgdmFyIHIgPSByb3RhdGlvbiAqIE1hdHJpeDJELkRFR19UT19SQUQ7XG4gICAgdmFyIGNvcyA9IE1hdGguY29zKHIpO1xuICAgIHZhciBzaW4gPSBNYXRoLnNpbihyKTtcbiAgfSBlbHNlIHtcbiAgICBjb3MgPSAxO1xuICAgIHNpbiA9IDA7XG4gIH1cblxuICBpZiAoc2tld1ggfHwgc2tld1kpIHtcbiAgICAvLyBUT0RPOiBjYW4gdGhpcyBiZSBjb21iaW5lZCBpbnRvIGEgc2luZ2xlIGFwcGVuZCBvcGVyYXRpb24/XG4gICAgc2tld1ggKj0gTWF0cml4MkQuREVHX1RPX1JBRDtcbiAgICBza2V3WSAqPSBNYXRyaXgyRC5ERUdfVE9fUkFEO1xuICAgIHRoaXMuYXBwZW5kKE1hdGguY29zKHNrZXdZKSwgTWF0aC5zaW4oc2tld1kpLCAtTWF0aC5zaW4oc2tld1gpLCBNYXRoLmNvcyhza2V3WCksIHgsIHkpO1xuICAgIHRoaXMuYXBwZW5kKGNvcyAqIHNjYWxlWCwgc2luICogc2NhbGVYLCAtc2luICogc2NhbGVZLCBjb3MgKiBzY2FsZVksIDAsIDApO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuYXBwZW5kKGNvcyAqIHNjYWxlWCwgc2luICogc2NhbGVYLCAtc2luICogc2NhbGVZLCBjb3MgKiBzY2FsZVksIHgsIHkpO1xuICB9XG5cbiAgaWYgKHJlZ1ggfHwgcmVnWSkge1xuICAgIC8vIGFwcGVuZCB0aGUgcmVnaXN0cmF0aW9uIG9mZnNldDpcbiAgICB0aGlzLnR4IC09IHJlZ1ggKiB0aGlzLmEgKyByZWdZICogdGhpcy5jO1xuICAgIHRoaXMudHkgLT0gcmVnWCAqIHRoaXMuYiArIHJlZ1kgKiB0aGlzLmQ7XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIEdlbmVyYXRlcyBtYXRyaXggcHJvcGVydGllcyBmcm9tIHRoZSBzcGVjaWZpZWQgZGlzcGxheSBvYmplY3QgdHJhbnNmb3JtIHByb3BlcnRpZXMsIGFuZCBwcmVwZW5kcyB0aGVtIHRvIHRoaXMgbWF0cml4LlxuICogRm9yIGV4YW1wbGUsIHlvdSBjb3VsZCBjYWxjdWxhdGUgdGhlIGNvbWJpbmVkIHRyYW5zZm9ybWF0aW9uIGZvciBhIGNoaWxkIG9iamVjdCB1c2luZzpcbiAqXG4gKiBcdHZhciBvID0gbXlEaXNwbGF5T2JqZWN0O1xuICogXHR2YXIgbXR4ID0gbmV3IGNyZWF0ZWpzLk1hdHJpeDJEKCk7XG4gKiBcdGRvICB7XG4gKiBcdFx0Ly8gcHJlcGVuZCBlYWNoIHBhcmVudCdzIHRyYW5zZm9ybWF0aW9uIGluIHR1cm46XG4gKiBcdFx0bXR4LnByZXBlbmRUcmFuc2Zvcm0oby54LCBvLnksIG8uc2NhbGVYLCBvLnNjYWxlWSwgby5yb3RhdGlvbiwgby5za2V3WCwgby5za2V3WSwgby5yZWdYLCBvLnJlZ1kpO1xuICogXHR9IHdoaWxlIChvID0gby5wYXJlbnQpO1xuICpcbiAqIFx0Tm90ZSB0aGF0IHRoZSBhYm92ZSBleGFtcGxlIHdvdWxkIG5vdCBhY2NvdW50IGZvciB7eyNjcm9zc0xpbmsgXCJEaXNwbGF5T2JqZWN0L3RyYW5zZm9ybU1hdHJpeDpwcm9wZXJ0eVwifX17ey9jcm9zc0xpbmt9fVxuICogXHR2YWx1ZXMuIFNlZSB7eyNjcm9zc0xpbmsgXCJNYXRyaXgyRC9wcmVwZW5kTWF0cml4XCJ9fXt7L2Nyb3NzTGlua319IGZvciBhbiBleGFtcGxlIHRoYXQgZG9lcy5cbiAqIEBtZXRob2QgcHJlcGVuZFRyYW5zZm9ybVxuICogQHBhcmFtIHtOdW1iZXJ9IHhcbiAqIEBwYXJhbSB7TnVtYmVyfSB5XG4gKiBAcGFyYW0ge051bWJlcn0gc2NhbGVYXG4gKiBAcGFyYW0ge051bWJlcn0gc2NhbGVZXG4gKiBAcGFyYW0ge051bWJlcn0gcm90YXRpb25cbiAqIEBwYXJhbSB7TnVtYmVyfSBza2V3WFxuICogQHBhcmFtIHtOdW1iZXJ9IHNrZXdZXG4gKiBAcGFyYW0ge051bWJlcn0gcmVnWCBPcHRpb25hbC5cbiAqIEBwYXJhbSB7TnVtYmVyfSByZWdZIE9wdGlvbmFsLlxuICogQHJldHVybiB7TWF0cml4MkR9IFRoaXMgbWF0cml4LiBVc2VmdWwgZm9yIGNoYWluaW5nIG1ldGhvZCBjYWxscy5cbiAqKi9cbnAucHJlcGVuZFRyYW5zZm9ybSA9IGZ1bmN0aW9uICh4LCB5LCBzY2FsZVgsIHNjYWxlWSwgcm90YXRpb24sIHNrZXdYLCBza2V3WSwgcmVnWCwgcmVnWSkge1xuICBpZiAocm90YXRpb24gJSAzNjApIHtcbiAgICB2YXIgciA9IHJvdGF0aW9uICogTWF0cml4MkQuREVHX1RPX1JBRDtcbiAgICB2YXIgY29zID0gTWF0aC5jb3Mocik7XG4gICAgdmFyIHNpbiA9IE1hdGguc2luKHIpO1xuICB9IGVsc2Uge1xuICAgIGNvcyA9IDE7XG4gICAgc2luID0gMDtcbiAgfVxuXG4gIGlmIChyZWdYIHx8IHJlZ1kpIHtcbiAgICAvLyBwcmVwZW5kIHRoZSByZWdpc3RyYXRpb24gb2Zmc2V0OlxuICAgIHRoaXMudHggLT0gcmVnWDtcbiAgICB0aGlzLnR5IC09IHJlZ1k7XG4gIH1cbiAgaWYgKHNrZXdYIHx8IHNrZXdZKSB7XG4gICAgLy8gVE9ETzogY2FuIHRoaXMgYmUgY29tYmluZWQgaW50byBhIHNpbmdsZSBwcmVwZW5kIG9wZXJhdGlvbj9cbiAgICBza2V3WCAqPSBNYXRyaXgyRC5ERUdfVE9fUkFEO1xuICAgIHNrZXdZICo9IE1hdHJpeDJELkRFR19UT19SQUQ7XG4gICAgdGhpcy5wcmVwZW5kKGNvcyAqIHNjYWxlWCwgc2luICogc2NhbGVYLCAtc2luICogc2NhbGVZLCBjb3MgKiBzY2FsZVksIDAsIDApO1xuICAgIHRoaXMucHJlcGVuZChNYXRoLmNvcyhza2V3WSksIE1hdGguc2luKHNrZXdZKSwgLU1hdGguc2luKHNrZXdYKSwgTWF0aC5jb3Moc2tld1gpLCB4LCB5KTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLnByZXBlbmQoY29zICogc2NhbGVYLCBzaW4gKiBzY2FsZVgsIC1zaW4gKiBzY2FsZVksIGNvcyAqIHNjYWxlWSwgeCwgeSk7XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIEFwcGxpZXMgYSBjbG9ja3dpc2Ugcm90YXRpb24gdHJhbnNmb3JtYXRpb24gdG8gdGhlIG1hdHJpeC5cbiAqIEBtZXRob2Qgcm90YXRlXG4gKiBAcGFyYW0ge051bWJlcn0gYW5nbGUgVGhlIGFuZ2xlIHRvIHJvdGF0ZSBieSwgaW4gZGVncmVlcy4gVG8gdXNlIGEgdmFsdWUgaW4gcmFkaWFucywgbXVsdGlwbHkgaXQgYnkgYE1hdGguUEkvMTgwYC5cbiAqIEByZXR1cm4ge01hdHJpeDJEfSBUaGlzIG1hdHJpeC4gVXNlZnVsIGZvciBjaGFpbmluZyBtZXRob2QgY2FsbHMuXG4gKiovXG5wLnJvdGF0ZSA9IGZ1bmN0aW9uIChhbmdsZSkge1xuICBhbmdsZSA9IGFuZ2xlICogTWF0cml4MkQuREVHX1RPX1JBRDtcbiAgdmFyIGNvcyA9IE1hdGguY29zKGFuZ2xlKTtcbiAgdmFyIHNpbiA9IE1hdGguc2luKGFuZ2xlKTtcblxuICB2YXIgYTEgPSB0aGlzLmE7XG4gIHZhciBiMSA9IHRoaXMuYjtcblxuICB0aGlzLmEgPSBhMSAqIGNvcyArIHRoaXMuYyAqIHNpbjtcbiAgdGhpcy5iID0gYjEgKiBjb3MgKyB0aGlzLmQgKiBzaW47XG4gIHRoaXMuYyA9IC1hMSAqIHNpbiArIHRoaXMuYyAqIGNvcztcbiAgdGhpcy5kID0gLWIxICogc2luICsgdGhpcy5kICogY29zO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogQXBwbGllcyBhIHNrZXcgdHJhbnNmb3JtYXRpb24gdG8gdGhlIG1hdHJpeC5cbiAqIEBtZXRob2Qgc2tld1xuICogQHBhcmFtIHtOdW1iZXJ9IHNrZXdYIFRoZSBhbW91bnQgdG8gc2tldyBob3Jpem9udGFsbHkgaW4gZGVncmVlcy4gVG8gdXNlIGEgdmFsdWUgaW4gcmFkaWFucywgbXVsdGlwbHkgaXQgYnkgYE1hdGguUEkvMTgwYC5cbiAqIEBwYXJhbSB7TnVtYmVyfSBza2V3WSBUaGUgYW1vdW50IHRvIHNrZXcgdmVydGljYWxseSBpbiBkZWdyZWVzLlxuICogQHJldHVybiB7TWF0cml4MkR9IFRoaXMgbWF0cml4LiBVc2VmdWwgZm9yIGNoYWluaW5nIG1ldGhvZCBjYWxscy5cbiAqL1xucC5za2V3ID0gZnVuY3Rpb24gKHNrZXdYLCBza2V3WSkge1xuICBza2V3WCA9IHNrZXdYICogTWF0cml4MkQuREVHX1RPX1JBRDtcbiAgc2tld1kgPSBza2V3WSAqIE1hdHJpeDJELkRFR19UT19SQUQ7XG4gIHRoaXMuYXBwZW5kKE1hdGguY29zKHNrZXdZKSwgTWF0aC5zaW4oc2tld1kpLCAtTWF0aC5zaW4oc2tld1gpLCBNYXRoLmNvcyhza2V3WCksIDAsIDApO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogQXBwbGllcyBhIHNjYWxlIHRyYW5zZm9ybWF0aW9uIHRvIHRoZSBtYXRyaXguXG4gKiBAbWV0aG9kIHNjYWxlXG4gKiBAcGFyYW0ge051bWJlcn0geCBUaGUgYW1vdW50IHRvIHNjYWxlIGhvcml6b250YWxseS4gRS5HLiBhIHZhbHVlIG9mIDIgd2lsbCBkb3VibGUgdGhlIHNpemUgaW4gdGhlIFggZGlyZWN0aW9uLCBhbmQgMC41IHdpbGwgaGFsdmUgaXQuXG4gKiBAcGFyYW0ge051bWJlcn0geSBUaGUgYW1vdW50IHRvIHNjYWxlIHZlcnRpY2FsbHkuXG4gKiBAcmV0dXJuIHtNYXRyaXgyRH0gVGhpcyBtYXRyaXguIFVzZWZ1bCBmb3IgY2hhaW5pbmcgbWV0aG9kIGNhbGxzLlxuICoqL1xucC5zY2FsZSA9IGZ1bmN0aW9uICh4LCB5KSB7XG4gIHRoaXMuYSAqPSB4O1xuICB0aGlzLmIgKj0geDtcbiAgdGhpcy5jICo9IHk7XG4gIHRoaXMuZCAqPSB5O1xuICAvL3RoaXMudHggKj0geDtcbiAgLy90aGlzLnR5ICo9IHk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBUcmFuc2xhdGVzIHRoZSBtYXRyaXggb24gdGhlIHggYW5kIHkgYXhlcy5cbiAqIEBtZXRob2QgdHJhbnNsYXRlXG4gKiBAcGFyYW0ge051bWJlcn0geFxuICogQHBhcmFtIHtOdW1iZXJ9IHlcbiAqIEByZXR1cm4ge01hdHJpeDJEfSBUaGlzIG1hdHJpeC4gVXNlZnVsIGZvciBjaGFpbmluZyBtZXRob2QgY2FsbHMuXG4gKiovXG5wLnRyYW5zbGF0ZSA9IGZ1bmN0aW9uICh4LCB5KSB7XG4gIHRoaXMudHggKz0gdGhpcy5hICogeCArIHRoaXMuYyAqIHk7XG4gIHRoaXMudHkgKz0gdGhpcy5iICogeCArIHRoaXMuZCAqIHk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBTZXRzIHRoZSBwcm9wZXJ0aWVzIG9mIHRoZSBtYXRyaXggdG8gdGhvc2Ugb2YgYW4gaWRlbnRpdHkgbWF0cml4IChvbmUgdGhhdCBhcHBsaWVzIGEgbnVsbCB0cmFuc2Zvcm1hdGlvbikuXG4gKiBAbWV0aG9kIGlkZW50aXR5XG4gKiBAcmV0dXJuIHtNYXRyaXgyRH0gVGhpcyBtYXRyaXguIFVzZWZ1bCBmb3IgY2hhaW5pbmcgbWV0aG9kIGNhbGxzLlxuICoqL1xucC5pZGVudGl0eSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5hID0gdGhpcy5kID0gMTtcbiAgdGhpcy5iID0gdGhpcy5jID0gdGhpcy50eCA9IHRoaXMudHkgPSAwO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogSW52ZXJ0cyB0aGUgbWF0cml4LCBjYXVzaW5nIGl0IHRvIHBlcmZvcm0gdGhlIG9wcG9zaXRlIHRyYW5zZm9ybWF0aW9uLlxuICogQG1ldGhvZCBpbnZlcnRcbiAqIEByZXR1cm4ge01hdHJpeDJEfSBUaGlzIG1hdHJpeC4gVXNlZnVsIGZvciBjaGFpbmluZyBtZXRob2QgY2FsbHMuXG4gKiovXG5wLmludmVydCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGExID0gdGhpcy5hO1xuICB2YXIgYjEgPSB0aGlzLmI7XG4gIHZhciBjMSA9IHRoaXMuYztcbiAgdmFyIGQxID0gdGhpcy5kO1xuICB2YXIgdHgxID0gdGhpcy50eDtcbiAgdmFyIG4gPSBhMSAqIGQxIC0gYjEgKiBjMTtcblxuICB0aGlzLmEgPSBkMSAvIG47XG4gIHRoaXMuYiA9IC1iMSAvIG47XG4gIHRoaXMuYyA9IC1jMSAvIG47XG4gIHRoaXMuZCA9IGExIC8gbjtcbiAgdGhpcy50eCA9IChjMSAqIHRoaXMudHkgLSBkMSAqIHR4MSkgLyBuO1xuICB0aGlzLnR5ID0gLShhMSAqIHRoaXMudHkgLSBiMSAqIHR4MSkgLyBuO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBtYXRyaXggaXMgYW4gaWRlbnRpdHkgbWF0cml4LlxuICogQG1ldGhvZCBpc0lkZW50aXR5XG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICoqL1xucC5pc0lkZW50aXR5ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gKFxuICAgIHRoaXMudHggPT09IDAgJiYgdGhpcy50eSA9PT0gMCAmJiB0aGlzLmEgPT09IDEgJiYgdGhpcy5iID09PSAwICYmIHRoaXMuYyA9PT0gMCAmJiB0aGlzLmQgPT09IDFcbiAgKTtcbn07XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoaXMgbWF0cml4IGlzIGVxdWFsIHRvIHRoZSBzcGVjaWZpZWQgbWF0cml4IChhbGwgcHJvcGVydHkgdmFsdWVzIGFyZSBlcXVhbCkuXG4gKiBAbWV0aG9kIGVxdWFsc1xuICogQHBhcmFtIHtNYXRyaXgyRH0gbWF0cml4IFRoZSBtYXRyaXggdG8gY29tcGFyZS5cbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKiovXG5wLmVxdWFscyA9IGZ1bmN0aW9uIChtYXRyaXgpIHtcbiAgcmV0dXJuIChcbiAgICB0aGlzLnR4ID09PSBtYXRyaXgudHggJiZcbiAgICB0aGlzLnR5ID09PSBtYXRyaXgudHkgJiZcbiAgICB0aGlzLmEgPT09IG1hdHJpeC5hICYmXG4gICAgdGhpcy5iID09PSBtYXRyaXguYiAmJlxuICAgIHRoaXMuYyA9PT0gbWF0cml4LmMgJiZcbiAgICB0aGlzLmQgPT09IG1hdHJpeC5kXG4gICk7XG59O1xuXG4vKipcbiAqIFRyYW5zZm9ybXMgYSBwb2ludCBhY2NvcmRpbmcgdG8gdGhpcyBtYXRyaXguXG4gKiBAbWV0aG9kIHRyYW5zZm9ybVBvaW50XG4gKiBAcGFyYW0ge051bWJlcn0geCBUaGUgeCBjb21wb25lbnQgb2YgdGhlIHBvaW50IHRvIHRyYW5zZm9ybS5cbiAqIEBwYXJhbSB7TnVtYmVyfSB5IFRoZSB5IGNvbXBvbmVudCBvZiB0aGUgcG9pbnQgdG8gdHJhbnNmb3JtLlxuICogQHBhcmFtIHtQb2ludCB8IE9iamVjdH0gW3B0XSBBbiBvYmplY3QgdG8gY29weSB0aGUgcmVzdWx0IGludG8uIElmIG9taXR0ZWQgYSBnZW5lcmljIG9iamVjdCB3aXRoIHgveSBwcm9wZXJ0aWVzIHdpbGwgYmUgcmV0dXJuZWQuXG4gKiBAcmV0dXJuIHtQb2ludH0gVGhpcyBtYXRyaXguIFVzZWZ1bCBmb3IgY2hhaW5pbmcgbWV0aG9kIGNhbGxzLlxuICoqL1xucC50cmFuc2Zvcm1Qb2ludCA9IGZ1bmN0aW9uICh4LCB5LCBwdCkge1xuICBwdCA9IHB0IHx8IHt9O1xuICBwdC54ID0geCAqIHRoaXMuYSArIHkgKiB0aGlzLmMgKyB0aGlzLnR4O1xuICBwdC55ID0geCAqIHRoaXMuYiArIHkgKiB0aGlzLmQgKyB0aGlzLnR5O1xuICByZXR1cm4gcHQ7XG59O1xuXG4vKipcbiAqIERlY29tcG9zZXMgdGhlIG1hdHJpeCBpbnRvIHRyYW5zZm9ybSBwcm9wZXJ0aWVzICh4LCB5LCBzY2FsZVgsIHNjYWxlWSwgYW5kIHJvdGF0aW9uKS4gTm90ZSB0aGF0IHRoZXNlIHZhbHVlc1xuICogbWF5IG5vdCBtYXRjaCB0aGUgdHJhbnNmb3JtIHByb3BlcnRpZXMgeW91IHVzZWQgdG8gZ2VuZXJhdGUgdGhlIG1hdHJpeCwgdGhvdWdoIHRoZXkgd2lsbCBwcm9kdWNlIHRoZSBzYW1lIHZpc3VhbFxuICogcmVzdWx0cy5cbiAqIEBtZXRob2QgZGVjb21wb3NlXG4gKiBAcGFyYW0ge09iamVjdH0gdGFyZ2V0IFRoZSBvYmplY3QgdG8gYXBwbHkgdGhlIHRyYW5zZm9ybSBwcm9wZXJ0aWVzIHRvLiBJZiBudWxsLCB0aGVuIGEgbmV3IG9iamVjdCB3aWxsIGJlIHJldHVybmVkLlxuICogQHJldHVybiB7T2JqZWN0fSBUaGUgdGFyZ2V0LCBvciBhIG5ldyBnZW5lcmljIG9iamVjdCB3aXRoIHRoZSB0cmFuc2Zvcm0gcHJvcGVydGllcyBhcHBsaWVkLlxuICovXG5wLmRlY29tcG9zZSA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgLy8gVE9ETzogaXQgd291bGQgYmUgbmljZSB0byBiZSBhYmxlIHRvIHNvbHZlIGZvciB3aGV0aGVyIHRoZSBtYXRyaXggY2FuIGJlIGRlY29tcG9zZWQgaW50byBvbmx5IHNjYWxlL3JvdGF0aW9uIGV2ZW4gd2hlbiBzY2FsZSBpcyBuZWdhdGl2ZVxuICBpZiAodGFyZ2V0ID09IG51bGwpIHtcbiAgICB0YXJnZXQgPSB7fTtcbiAgfVxuICB0YXJnZXQueCA9IHRoaXMudHg7XG4gIHRhcmdldC55ID0gdGhpcy50eTtcbiAgdGFyZ2V0LnNjYWxlWCA9IE1hdGguc3FydCh0aGlzLmEgKiB0aGlzLmEgKyB0aGlzLmIgKiB0aGlzLmIpO1xuICB0YXJnZXQuc2NhbGVZID0gTWF0aC5zcXJ0KHRoaXMuYyAqIHRoaXMuYyArIHRoaXMuZCAqIHRoaXMuZCk7XG5cbiAgdmFyIHNrZXdYID0gTWF0aC5hdGFuMigtdGhpcy5jLCB0aGlzLmQpO1xuICB2YXIgc2tld1kgPSBNYXRoLmF0YW4yKHRoaXMuYiwgdGhpcy5hKTtcblxuICB2YXIgZGVsdGEgPSBNYXRoLmFicygxIC0gc2tld1ggLyBza2V3WSk7XG4gIGlmIChkZWx0YSA8IDAuMDAwMDEpIHtcbiAgICAvLyBlZmZlY3RpdmVseSBpZGVudGljYWwsIGNhbiB1c2Ugcm90YXRpb246XG4gICAgdGFyZ2V0LnJvdGF0aW9uID0gc2tld1kgLyBNYXRyaXgyRC5ERUdfVE9fUkFEO1xuICAgIGlmICh0aGlzLmEgPCAwICYmIHRoaXMuZCA+PSAwKSB7XG4gICAgICB0YXJnZXQucm90YXRpb24gKz0gdGFyZ2V0LnJvdGF0aW9uIDw9IDAgPyAxODAgOiAtMTgwO1xuICAgIH1cbiAgICB0YXJnZXQuc2tld1ggPSB0YXJnZXQuc2tld1kgPSAwO1xuICB9IGVsc2Uge1xuICAgIHRhcmdldC5za2V3WCA9IHNrZXdYIC8gTWF0cml4MkQuREVHX1RPX1JBRDtcbiAgICB0YXJnZXQuc2tld1kgPSBza2V3WSAvIE1hdHJpeDJELkRFR19UT19SQUQ7XG4gIH1cbiAgcmV0dXJuIHRhcmdldDtcbn07XG5cbi8qKlxuICogQ29waWVzIGFsbCBwcm9wZXJ0aWVzIGZyb20gdGhlIHNwZWNpZmllZCBtYXRyaXggdG8gdGhpcyBtYXRyaXguXG4gKiBAbWV0aG9kIGNvcHlcbiAqIEBwYXJhbSB7TWF0cml4MkR9IG1hdHJpeCBUaGUgbWF0cml4IHRvIGNvcHkgcHJvcGVydGllcyBmcm9tLlxuICogQHJldHVybiB7TWF0cml4MkR9IFRoaXMgbWF0cml4LiBVc2VmdWwgZm9yIGNoYWluaW5nIG1ldGhvZCBjYWxscy5cbiAqL1xucC5jb3B5ID0gZnVuY3Rpb24gKG1hdHJpeCkge1xuICByZXR1cm4gdGhpcy5zZXRWYWx1ZXMobWF0cml4LmEsIG1hdHJpeC5iLCBtYXRyaXguYywgbWF0cml4LmQsIG1hdHJpeC50eCwgbWF0cml4LnR5KTtcbn07XG5cbi8qKlxuICogUmV0dXJucyBhIGNsb25lIG9mIHRoZSBNYXRyaXgyRCBpbnN0YW5jZS5cbiAqIEBtZXRob2QgY2xvbmVcbiAqIEByZXR1cm4ge01hdHJpeDJEfSBhIGNsb25lIG9mIHRoZSBNYXRyaXgyRCBpbnN0YW5jZS5cbiAqKi9cbnAuY2xvbmUgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBuZXcgTWF0cml4MkQodGhpcy5hLCB0aGlzLmIsIHRoaXMuYywgdGhpcy5kLCB0aGlzLnR4LCB0aGlzLnR5KTtcbn07XG5cbi8qKlxuICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIG9iamVjdC5cbiAqIEBtZXRob2QgdG9TdHJpbmdcbiAqIEByZXR1cm4ge1N0cmluZ30gYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIGluc3RhbmNlLlxuICoqL1xucC50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIChcbiAgICAnW01hdHJpeDJEIChhPScgK1xuICAgIHRoaXMuYSArXG4gICAgJyBiPScgK1xuICAgIHRoaXMuYiArXG4gICAgJyBjPScgK1xuICAgIHRoaXMuYyArXG4gICAgJyBkPScgK1xuICAgIHRoaXMuZCArXG4gICAgJyB0eD0nICtcbiAgICB0aGlzLnR4ICtcbiAgICAnIHR5PScgK1xuICAgIHRoaXMudHkgK1xuICAgICcpXSdcbiAgKTtcbn07XG5cbi8vIHRoaXMgaGFzIHRvIGJlIHBvcHVsYXRlZCBhZnRlciB0aGUgY2xhc3MgaXMgZGVmaW5lZDpcbk1hdHJpeDJELmlkZW50aXR5ID0gbmV3IE1hdHJpeDJEKCk7XG5cbmV4cG9ydCBkZWZhdWx0IE1hdHJpeDJEO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jbGFzcyBSZWN0YW5nbGUge1xuICAgIGNvbnN0cnVjdG9yKHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgdGhpcy5zZXRWYWx1ZXMoeCwgeSwgd2lkdGgsIGhlaWdodCk7XG4gICAgfVxuICAgIHNldFZhbHVlcyh4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIHRoaXMueCA9IHggfHwgMDtcbiAgICAgICAgdGhpcy55ID0geSB8fCAwO1xuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGggfHwgMDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQgfHwgMDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGV4dGVuZCh4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIHdpZHRoID0gd2lkdGggfHwgMDtcbiAgICAgICAgaGVpZ2h0ID0gaGVpZ2h0IHx8IDA7XG4gICAgICAgIGlmICh4ICsgd2lkdGggPiB0aGlzLnggKyB0aGlzLndpZHRoKSB7XG4gICAgICAgICAgICB0aGlzLndpZHRoID0geCArIHdpZHRoIC0gdGhpcy54O1xuICAgICAgICB9XG4gICAgICAgIGlmICh5ICsgaGVpZ2h0ID4gdGhpcy55ICsgdGhpcy5oZWlnaHQpIHtcbiAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0geSArIGhlaWdodCAtIHRoaXMueTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoeCA8IHRoaXMueCkge1xuICAgICAgICAgICAgdGhpcy53aWR0aCArPSB0aGlzLnggLSB4O1xuICAgICAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoeSA8IHRoaXMueSkge1xuICAgICAgICAgICAgdGhpcy5oZWlnaHQgKz0gdGhpcy55IC0geTtcbiAgICAgICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGNvcHkocmVjdGFuZ2xlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldFZhbHVlcyhyZWN0YW5nbGUueCwgcmVjdGFuZ2xlLnksIHJlY3RhbmdsZS53aWR0aCwgcmVjdGFuZ2xlLmhlaWdodCk7XG4gICAgfVxuICAgIGNvbnRhaW5zKHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgd2lkdGggPSB3aWR0aCB8fCAwO1xuICAgICAgICBoZWlnaHQgPSBoZWlnaHQgfHwgMDtcbiAgICAgICAgcmV0dXJuICh4ID49IHRoaXMueCAmJlxuICAgICAgICAgICAgeCArIHdpZHRoIDw9IHRoaXMueCArIHRoaXMud2lkdGggJiZcbiAgICAgICAgICAgIHkgPj0gdGhpcy55ICYmXG4gICAgICAgICAgICB5ICsgaGVpZ2h0IDw9IHRoaXMueSArIHRoaXMuaGVpZ2h0KTtcbiAgICB9XG4gICAgaXNFbXB0eSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMud2lkdGggPD0gMCB8fCB0aGlzLmhlaWdodCA8PSAwO1xuICAgIH1cbiAgICBjbG9uZSgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBSZWN0YW5nbGUodGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBSZWN0YW5nbGU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9KTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBvW2syXSA9IG1ba107XG59KSk7XG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX3NldE1vZHVsZURlZmF1bHQpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XG59KTtcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGspO1xuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBpbmRleF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL3JlbmRlci9pbmRleFwiKSk7XG5jb25zdCBzdGFnZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL25vZGUvc3RhZ2VcIikpO1xuY29uc3QgZ3JvdXBfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9ub2RlL2dyb3VwXCIpKTtcbmNvbnN0IGJpdG1hcF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL25vZGUvYml0bWFwXCIpKTtcbmNvbnN0IHRleHRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9ub2RlL3RleHRcIikpO1xuY29uc3QgZ3JhcGhpY3NfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9ub2RlL2dyYXBoaWNzXCIpKTtcbmNvbnN0IHNoYXBlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vbm9kZS9zaGFwZS9zaGFwZVwiKSk7XG5jb25zdCByZWN0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vbm9kZS9zaGFwZS9yZWN0XCIpKTtcbmNvbnN0IGNpcmNsZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL25vZGUvc2hhcGUvY2lyY2xlXCIpKTtcbmNvbnN0IHJvdW5kZWRfcmVjdF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL25vZGUvc2hhcGUvcm91bmRlZC1yZWN0XCIpKTtcbmNvbnN0IGFycm93X3BhdGhfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9ub2RlL3NoYXBlL2Fycm93LXBhdGhcIikpO1xuY29uc3QgZWxsaXBzZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL25vZGUvc2hhcGUvZWxsaXBzZVwiKSk7XG5jb25zdCBwb2x5Z29uXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vbm9kZS9zaGFwZS9wb2x5Z29uXCIpKTtcbmNvbnN0IHNlY3Rvcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL25vZGUvc2hhcGUvc2VjdG9yXCIpKTtcbmNvbnN0IGVxdWlsYXRlcmFsX3BvbHlnb25fMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9ub2RlL3NoYXBlL2VxdWlsYXRlcmFsLXBvbHlnb25cIikpO1xuY29uc3QgdXRpbHMgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vdXRpbHMvdXRpbFwiKSk7XG5jb25zdCBjYXggPSB7XG4gICAgUmVuZGVyOiBpbmRleF8xLmRlZmF1bHQsXG4gICAgU3RhZ2U6IHN0YWdlXzEuZGVmYXVsdCxcbiAgICBHcm91cDogZ3JvdXBfMS5kZWZhdWx0LFxuICAgIEJpdG1hcDogYml0bWFwXzEuZGVmYXVsdCxcbiAgICBUZXh0OiB0ZXh0XzEuZGVmYXVsdCxcbiAgICBHcmFwaGljczogZ3JhcGhpY3NfMS5kZWZhdWx0LFxuICAgIFNoYXBlOiBzaGFwZV8xLmRlZmF1bHQsXG4gICAgUmVjdDogcmVjdF8xLmRlZmF1bHQsXG4gICAgQ2lyY2xlOiBjaXJjbGVfMS5kZWZhdWx0LFxuICAgIFJvdW5kZWRSZWN0OiByb3VuZGVkX3JlY3RfMS5kZWZhdWx0LFxuICAgIEFycm93UGF0aDogYXJyb3dfcGF0aF8xLmRlZmF1bHQsXG4gICAgRWxsaXBzZTogZWxsaXBzZV8xLmRlZmF1bHQsXG4gICAgUG9seWdvbjogcG9seWdvbl8xLmRlZmF1bHQsXG4gICAgU2VjdG9yOiBzZWN0b3JfMS5kZWZhdWx0LFxuICAgIEVxdWlsYXRlcmFsUG9seWdvbjogZXF1aWxhdGVyYWxfcG9seWdvbl8xLmRlZmF1bHQsXG4gICAgbG9hZEltYWdlOiB1dGlscy5sb2FkSW1hZ2UsXG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gY2F4O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBub2RlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vbm9kZVwiKSk7XG5jbGFzcyBCaXRtYXAgZXh0ZW5kcyBub2RlXzEuZGVmYXVsdCB7XG4gICAgY29uc3RydWN0b3IoaW1nKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIGlmIChCaXRtYXAuY2FjaGVbaW1nLnNyY10pIHtcbiAgICAgICAgICAgIHRoaXMuaW1nID0gQml0bWFwLmNhY2hlW2ltZy5zcmNdO1xuICAgICAgICAgICAgdGhpcy5yZWN0ID0gWzAsIDAsIHRoaXMuaW1nLndpZHRoLCB0aGlzLmltZy5oZWlnaHRdO1xuICAgICAgICAgICAgdGhpcy53aWR0aCA9IHRoaXMuaW1nLndpZHRoO1xuICAgICAgICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLmltZy5oZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmltZyA9IGltZztcbiAgICAgICAgICAgIHRoaXMucmVjdCA9IFswLCAwLCBpbWcud2lkdGgsIGltZy5oZWlnaHRdO1xuICAgICAgICAgICAgdGhpcy53aWR0aCA9IGltZy53aWR0aDtcbiAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gaW1nLmhlaWdodDtcbiAgICAgICAgICAgIEJpdG1hcC5jYWNoZVtpbWcuc3JjXSA9IGltZztcbiAgICAgICAgfVxuICAgIH1cbiAgICByZW5kZXIoY3R4KSB7XG4gICAgICAgIGxldCByZWN0ID0gdGhpcy5yZWN0O1xuICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMuaW1nLCByZWN0WzBdLCByZWN0WzFdLCByZWN0WzJdLCByZWN0WzNdLCAwLCAwLCByZWN0WzJdLCByZWN0WzNdKTtcbiAgICB9XG59XG5CaXRtYXAuY2FjaGUgPSB7fTtcbmV4cG9ydHMuZGVmYXVsdCA9IEJpdG1hcDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3Qgbm9kZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL25vZGVcIikpO1xuY29uc3QgYXNzTWFwID0ge1xuICAgIGZpbGxTdHlsZTogdHJ1ZSxcbiAgICBzdHJva2VTdHlsZTogdHJ1ZSxcbiAgICBsaW5lV2lkdGg6IHRydWUsXG4gICAgbGluZUNhcDogdHJ1ZSxcbiAgICBsaW5lRGFzaE9mZnNldDogdHJ1ZSxcbiAgICBsaW5lSm9pbjogdHJ1ZSxcbiAgICBtaXRlckxpbWl0OiB0cnVlXG59O1xuY2xhc3MgR3JhcGhpY3MgZXh0ZW5kcyBub2RlXzEuZGVmYXVsdCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuY21kcyA9IFtdO1xuICAgICAgICB0aGlzLmN1cnJlbnRHcmFkaWVudCA9IG51bGw7XG4gICAgfVxuICAgIGNsZWFyUmVjdCguLi5wYXJhbXMpIHtcbiAgICAgICAgdGhpcy5jbWRzLnB1c2goWydjbGVhclJlY3QnLCBhcmd1bWVudHNdKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHJlY3QoLi4ucGFyYW1zKSB7XG4gICAgICAgIHRoaXMuY21kcy5wdXNoKFsncmVjdCcsIGFyZ3VtZW50c10pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgY2xlYXIoLi4ucGFyYW1zKSB7XG4gICAgICAgIHRoaXMuY21kcy5sZW5ndGggPSAwO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgc2V0TGluZURhc2goLi4ucGFyYW1zKSB7XG4gICAgICAgIHRoaXMuY21kcy5wdXNoKFsnc2V0TGluZURhc2gnLCBhcmd1bWVudHNdKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHN0cm9rZVJlY3QoLi4ucGFyYW1zKSB7XG4gICAgICAgIHRoaXMuY21kcy5wdXNoKFsnc3Ryb2tlUmVjdCcsIGFyZ3VtZW50c10pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZmlsbFJlY3QoLi4ucGFyYW1zKSB7XG4gICAgICAgIHRoaXMuY21kcy5wdXNoKFsnZmlsbFJlY3QnLCBhcmd1bWVudHNdKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGJlZ2luUGF0aCguLi5wYXJhbXMpIHtcbiAgICAgICAgdGhpcy5jbWRzLnB1c2goWydiZWdpblBhdGgnLCBhcmd1bWVudHNdKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGFyYyguLi5wYXJhbXMpIHtcbiAgICAgICAgdGhpcy5jbWRzLnB1c2goWydhcmMnLCBhcmd1bWVudHNdKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGNsb3NlUGF0aCguLi5wYXJhbXMpIHtcbiAgICAgICAgdGhpcy5jbWRzLnB1c2goWydjbG9zZVBhdGgnLCBhcmd1bWVudHNdKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGZpbGxTdHlsZSguLi5wYXJhbXMpIHtcbiAgICAgICAgdGhpcy5jbWRzLnB1c2goWydmaWxsU3R5bGUnLCBhcmd1bWVudHNdKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGZpbGwoLi4ucGFyYW1zKSB7XG4gICAgICAgIHRoaXMuY21kcy5wdXNoKFsnZmlsbCcsIGFyZ3VtZW50c10pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgc3Ryb2tlU3R5bGUoLi4ucGFyYW1zKSB7XG4gICAgICAgIHRoaXMuY21kcy5wdXNoKFsnc3Ryb2tlU3R5bGUnLCBhcmd1bWVudHNdKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGxpbmVXaWR0aCguLi5wYXJhbXMpIHtcbiAgICAgICAgdGhpcy5jbWRzLnB1c2goWydsaW5lV2lkdGgnLCBhcmd1bWVudHNdKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGxpbmVDYXAoLi4ucGFyYW1zKSB7XG4gICAgICAgIHRoaXMuY21kcy5wdXNoKFsnbGluZUNhcCcsIGFyZ3VtZW50c10pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgbGluZURhc2hPZmZzZXQoLi4ucGFyYW1zKSB7XG4gICAgICAgIHRoaXMuY21kcy5wdXNoKFsnbGluZURhc2hPZmZzZXQnLCBhcmd1bWVudHNdKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGxpbmVKb2luKC4uLnBhcmFtcykge1xuICAgICAgICB0aGlzLmNtZHMucHVzaChbJ2xpbmVKb2luJywgYXJndW1lbnRzXSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBtaXRlckxpbWl0KC4uLnBhcmFtcykge1xuICAgICAgICB0aGlzLmNtZHMucHVzaChbJ21pdGVyTGltaXQnLCBhcmd1bWVudHNdKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHN0cm9rZSguLi5wYXJhbXMpIHtcbiAgICAgICAgdGhpcy5jbWRzLnB1c2goWydzdHJva2UnLCBhcmd1bWVudHNdKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIG1vdmVUbyguLi5wYXJhbXMpIHtcbiAgICAgICAgdGhpcy5jbWRzLnB1c2goWydtb3ZlVG8nLCBhcmd1bWVudHNdKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGxpbmVUbyguLi5wYXJhbXMpIHtcbiAgICAgICAgdGhpcy5jbWRzLnB1c2goWydsaW5lVG8nLCBhcmd1bWVudHNdKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGJlemllckN1cnZlVG8oLi4ucGFyYW1zKSB7XG4gICAgICAgIHRoaXMuY21kcy5wdXNoKFsnYmV6aWVyQ3VydmVUbycsIGFyZ3VtZW50c10pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgcXVhZHJhdGljQ3VydmVUbyguLi5wYXJhbXMpIHtcbiAgICAgICAgdGhpcy5jbWRzLnB1c2goWydxdWFkcmF0aWNDdXJ2ZVRvJywgYXJndW1lbnRzXSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBjcmVhdGVSYWRpYWxHcmFkaWVudCguLi5wYXJhbXMpIHtcbiAgICAgICAgdGhpcy5jbWRzLnB1c2goWydjcmVhdGVSYWRpYWxHcmFkaWVudCcsIGFyZ3VtZW50c10pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgY3JlYXRlTGluZWFyR3JhZGllbnQoLi4ucGFyYW1zKSB7XG4gICAgICAgIHRoaXMuY21kcy5wdXNoKFsnY3JlYXRlTGluZWFyR3JhZGllbnQnLCBhcmd1bWVudHNdKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGFkZENvbG9yU3RvcCguLi5wYXJhbXMpIHtcbiAgICAgICAgdGhpcy5jbWRzLnB1c2goWydhZGRDb2xvclN0b3AnLCBhcmd1bWVudHNdKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGZpbGxHcmFkaWVudCguLi5wYXJhbXMpIHtcbiAgICAgICAgdGhpcy5jbWRzLnB1c2goWydmaWxsR3JhZGllbnQnXSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBhcmNUbyguLi5wYXJhbXMpIHtcbiAgICAgICAgdGhpcy5jbWRzLnB1c2goWydhcmNUbycsIGFyZ3VtZW50c10pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgcmVuZGVyKGN0eCkge1xuICAgICAgICB0aGlzLmNtZHMuZm9yRWFjaChjbWQgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWV0aG9kTmFtZSA9IGNtZFswXTtcbiAgICAgICAgICAgIGlmIChhc3NNYXBbbWV0aG9kTmFtZV0pIHtcbiAgICAgICAgICAgICAgICBjdHhbbWV0aG9kTmFtZV0gPSBjbWRbMV1bMF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChtZXRob2ROYW1lID09PSAnYWRkQ29sb3JTdG9wJykge1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEdyYWRpZW50ICYmIHRoaXMuY3VycmVudEdyYWRpZW50LmFkZENvbG9yU3RvcChjbWRbMV1bMF0sIGNtZFsxXVsxXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChtZXRob2ROYW1lID09PSAnZmlsbEdyYWRpZW50Jykge1xuICAgICAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLmN1cnJlbnRHcmFkaWVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSBjdHhbbWV0aG9kTmFtZV0uYXBwbHkoY3R4LCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChjbWRbMV0pKTtcbiAgICAgICAgICAgICAgICBpZiAobWV0aG9kTmFtZSA9PT0gJ2NyZWF0ZVJhZGlhbEdyYWRpZW50JyB8fCBtZXRob2ROYW1lID09PSAnY3JlYXRlTGluZWFyR3JhZGllbnQnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEdyYWRpZW50ID0gcmVzdWx0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gR3JhcGhpY3M7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IG5vZGVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9ub2RlXCIpKTtcbmNsYXNzIEdyb3VwIGV4dGVuZHMgbm9kZV8xLmRlZmF1bHQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmNoaWxkcmVuID0gW107XG4gICAgICAgIHRoaXMubW91c2VDaGlsZHJlbiA9IHRydWU7XG4gICAgfVxuICAgIGFkZChjaGlsZCkge1xuICAgICAgICBjb25zdCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBjID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gYy5wYXJlbnQ7XG4gICAgICAgICAgICBpZiAocGFyZW50KSB7XG4gICAgICAgICAgICAgICAgcGFyZW50LnJlbW92ZUNoaWxkQXQocGFyZW50LmNoaWxkcmVuLmluZGV4T2YoYykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jaGlsZHJlbi5wdXNoKGMpO1xuICAgICAgICAgICAgYy5wYXJlbnQgPSB0aGlzO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFkZENoaWxkQXQoY2hpbGQsIGluZGV4KSB7XG4gICAgICAgIGxldCBwYXIgPSBjaGlsZC5wYXJlbnQ7XG4gICAgICAgIHBhciAmJiBwYXIucmVtb3ZlQ2hpbGRBdChwYXIuY2hpbGRyZW4uaW5kZXhPZihjaGlsZCkpO1xuICAgICAgICBjaGlsZC5wYXJlbnQgPSB0aGlzO1xuICAgICAgICB0aGlzLmNoaWxkcmVuLnNwbGljZShpbmRleCwgMCwgY2hpbGQpO1xuICAgIH1cbiAgICByZW1vdmVDaGlsZEF0KGluZGV4KSB7XG4gICAgICAgIGxldCBjaGlsZCA9IHRoaXMuY2hpbGRyZW5baW5kZXhdO1xuICAgICAgICBpZiAoY2hpbGQpIHtcbiAgICAgICAgICAgIGNoaWxkLnBhcmVudCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jaGlsZHJlbi5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbiAgICByZXBsYWNlKGN1cnJlbnQsIHByZSkge1xuICAgICAgICBjb25zdCBpbmRleCA9IHByZS5wYXJlbnQuY2hpbGRyZW4uaW5kZXhPZihwcmUpO1xuICAgICAgICB0aGlzLnJlbW92ZUNoaWxkQXQoaW5kZXgpO1xuICAgICAgICB0aGlzLmFkZENoaWxkQXQoY3VycmVudCwgaW5kZXgpO1xuICAgIH1cbiAgICByZW1vdmUoY2hpbGQpIHtcbiAgICAgICAgaWYgKCFjaGlsZClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgY29uc3QgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgbGV0IGNMZW4gPSB0aGlzLmNoaWxkcmVuLmxlbmd0aDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjTGVuOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoY2hpbGQuaWQgPT09IHRoaXMuY2hpbGRyZW5bal0uaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQucGFyZW50ID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGlsZHJlbi5zcGxpY2UoaiwgMSk7XG4gICAgICAgICAgICAgICAgICAgIGotLTtcbiAgICAgICAgICAgICAgICAgICAgY0xlbi0tO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBlbXB0eSgpIHtcbiAgICAgICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICAgICAgICAgIGNoaWxkLnBhcmVudCA9IG51bGw7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNoaWxkcmVuLmxlbmd0aCA9IDA7XG4gICAgfVxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuZW1wdHkoKTtcbiAgICAgICAgdGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuZGVzdHJveSgpO1xuICAgIH1cbiAgICBfZ2V0T2JqZWN0c1VuZGVyUG9pbnQoeCwgeSwgaGl0Q3R4KSB7XG4gICAgICAgIGNvbnN0IGN0eCA9IGhpdEN0eDtcbiAgICAgICAgaWYgKCF0aGlzLl90ZXN0TWFzayh0aGlzLCB4LCB5LCBjdHgpKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgY2hpbGRyZW4gPSB0aGlzLmNoaWxkcmVuO1xuICAgICAgICBsZXQgbCA9IGNoaWxkcmVuLmxlbmd0aDtcbiAgICAgICAgZm9yIChsZXQgaSA9IGwgLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgbGV0IGNoaWxkID0gY2hpbGRyZW5baV07XG4gICAgICAgICAgICBsZXQgaGl0Qm94ID0gY2hpbGQuaGl0Qm94O1xuICAgICAgICAgICAgaWYgKCFjaGlsZC5pc1Zpc2libGUoKSB8fCBjaGlsZC5pZ25vcmVIaXQpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghdGhpcy5fdGVzdE1hc2soY2hpbGQsIHgsIHksIGN0eCkpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghaGl0Qm94ICYmIGNoaWxkIGluc3RhbmNlb2YgR3JvdXApIHtcbiAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gY2hpbGQuX2dldE9iamVjdHNVbmRlclBvaW50KHgsIHksIGN0eCk7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICF0aGlzLm1vdXNlQ2hpbGRyZW4gPyB0aGlzIDogcmVzdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IHByb3BzID0gY2hpbGQuZ2V0Q29uY2F0ZW5hdGVkRGlzcGxheVByb3BzKGNoaWxkLl9wcm9wcyk7XG4gICAgICAgICAgICAgICAgbGV0IG10eCA9IHByb3BzLm1hdHJpeDtcbiAgICAgICAgICAgICAgICBpZiAoaGl0Qm94KSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBtdHhDbG9uZSA9IG10eC5jbG9uZSgpO1xuICAgICAgICAgICAgICAgICAgICBjaGlsZC5zZXRCb3VuZHMoaGl0Qm94WzBdLCBoaXRCb3hbMV0sIGhpdEJveFsyXSwgaGl0Qm94WzNdKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGJvdW5kcyA9IGNoaWxkLl9nZXRCb3VuZHMobXR4Q2xvbmUsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgQUFCQiA9IFtib3VuZHMueCwgYm91bmRzLnksIGJvdW5kcy53aWR0aCwgYm91bmRzLmhlaWdodF07XG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5jaGVja1BvaW50SW5BQUJCKHgsIHksIEFBQkIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoY2hpbGQgaW5zdGFuY2VvZiBHcm91cCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9IGNoaWxkLl9nZXRPYmplY3RzVW5kZXJQb2ludCh4LCB5LCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAhdGhpcy5tb3VzZUNoaWxkcmVuID8gdGhpcyA6IHJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjaGlsZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjdHguZ2xvYmFsQWxwaGEgPSBwcm9wcy5hbHBoYTtcbiAgICAgICAgICAgICAgICBjdHguc2V0VHJhbnNmb3JtKG10eC5hLCBtdHguYiwgbXR4LmMsIG10eC5kLCBtdHgudHggLSB4LCBtdHgudHkgLSB5KTtcbiAgICAgICAgICAgICAgICBjaGlsZC5yZW5kZXIoY3R4KTtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuX3Rlc3RIaXQoY3R4KSkge1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY3R4LnNldFRyYW5zZm9ybSgxLCAwLCAwLCAxLCAwLCAwKTtcbiAgICAgICAgICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIDIsIDIpO1xuICAgICAgICAgICAgICAgIHJldHVybiAhdGhpcy5tb3VzZUNoaWxkcmVuID8gdGhpcyA6IGNoaWxkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBfdGVzdE1hc2sodGFyZ2V0LCB4LCB5LCBoaXRDdHgpIHtcbiAgICAgICAgY29uc3QgY3R4ID0gaGl0Q3R4O1xuICAgICAgICBjb25zdCBtYXNrID0gdGFyZ2V0Lm1hc2s7XG4gICAgICAgIGlmICghbWFzaykge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG10eCA9IHRoaXMuX3Byb3BzLm1hdHJpeDtcbiAgICAgICAgbGV0IHBhcmVudCA9IHRhcmdldC5wYXJlbnQ7XG4gICAgICAgIG10eCA9IHBhcmVudCA/IHBhcmVudC5nZXRDb25jYXRlbmF0ZWRNYXRyaXgobXR4KSA6IG10eC5pZGVudGl0eSgpO1xuICAgICAgICBtdHggPSBtYXNrLmdldE1hdHJpeChtYXNrLl9wcm9wcy5tYXRyaXgpLnByZXBlbmRNYXRyaXgobXR4KTtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHguc2V0VHJhbnNmb3JtKG10eC5hLCBtdHguYiwgbXR4LmMsIG10eC5kLCBtdHgudHggLSB4LCBtdHgudHkgLSB5KTtcbiAgICAgICAgbWFzay5yZW5kZXIoY3R4KTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9ICcjMDAwJztcbiAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgaWYgKCF0aGlzLl90ZXN0SGl0KGN0eCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBjdHguc2V0VHJhbnNmb3JtKDEsIDAsIDAsIDEsIDAsIDApO1xuICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIDIsIDIpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgX3Rlc3RIaXQoY3R4KSB7XG4gICAgICAgIHJldHVybiBjdHguZ2V0SW1hZ2VEYXRhKDAsIDAsIDEsIDEpLmRhdGFbM10gPiAxO1xuICAgIH1cbiAgICBjaGVja1BvaW50SW5BQUJCKHgsIHksIEFBQkIpIHtcbiAgICAgICAgbGV0IG1pblggPSBBQUJCWzBdO1xuICAgICAgICBpZiAoeCA8IG1pblgpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGxldCBtaW5ZID0gQUFCQlsxXTtcbiAgICAgICAgaWYgKHkgPCBtaW5ZKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICBsZXQgbWF4WCA9IG1pblggKyBBQUJCWzJdO1xuICAgICAgICBpZiAoeCA+IG1heFgpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGxldCBtYXhZID0gbWluWSArIEFBQkJbM107XG4gICAgICAgIHJldHVybiB5IDw9IG1heFk7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gR3JvdXA7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHVpZF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi91dGlscy91aWRcIikpO1xuY29uc3QgZGlzcGxheVByb3BzXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL2dlb20vZGlzcGxheVByb3BzXCIpKTtcbmNvbnN0IHJlY3RhbmdsZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9nZW9tL3JlY3RhbmdsZVwiKSk7XG5jb25zdCBtYXRyaXgyZF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9nZW9tL21hdHJpeDJkXCIpKTtcbmNvbnN0IF9ldmVudExpc3RlbmVycyA9IFN5bWJvbCgnZXZlbnRMaXN0ZW5lcnMnKTtcbmNvbnN0IF9jYXB0dXJlRXZlbnRMaXN0ZW5lcnMgPSBTeW1ib2woJ2NhcHR1cmVFdmVudExpc3RlbmVycycpO1xuY2xhc3MgTm9kZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXNbX2V2ZW50TGlzdGVuZXJzXSA9IHt9O1xuICAgICAgICB0aGlzW19jYXB0dXJlRXZlbnRMaXN0ZW5lcnNdID0ge307XG4gICAgICAgIHRoaXMucGFyZW50ID0gbnVsbDtcbiAgICAgICAgdGhpcy5pZCA9IHVpZF8xLmRlZmF1bHQuZ2V0KCk7XG4gICAgICAgIHRoaXMueCA9IDA7XG4gICAgICAgIHRoaXMueSA9IDA7XG4gICAgICAgIHRoaXMuc2NhbGUgPSAxO1xuICAgICAgICB0aGlzLnNjYWxlWCA9IDE7XG4gICAgICAgIHRoaXMuc2NhbGVZID0gMTtcbiAgICAgICAgdGhpcy5yb3RhdGlvbiA9IDA7XG4gICAgICAgIHRoaXMuc2tld1ggPSAwO1xuICAgICAgICB0aGlzLnNrZXdZID0gMDtcbiAgICAgICAgdGhpcy5yZWdYID0gMDtcbiAgICAgICAgdGhpcy5yZWdZID0gMDtcbiAgICAgICAgdGhpcy5hbHBoYSA9IDE7XG4gICAgICAgIHRoaXMudmlzaWJsZSA9IHRydWU7XG4gICAgICAgIHRoaXMuc2hhZG93ID0gbnVsbDtcbiAgICAgICAgdGhpcy5tYXNrID0gbnVsbDtcbiAgICAgICAgdGhpcy5fcHJvcHMgPSBuZXcgZGlzcGxheVByb3BzXzEuZGVmYXVsdCgpO1xuICAgICAgICB0aGlzLl9yZWN0YW5nbGUgPSBuZXcgcmVjdGFuZ2xlXzEuZGVmYXVsdCgpO1xuICAgICAgICB0aGlzLl9ib3VuZHMgPSBudWxsO1xuICAgICAgICB0aGlzLmNvbXBvc2l0ZU9wZXJhdGlvbiA9IG51bGw7XG4gICAgICAgIHRoaXMuaGl0Qm94ID0gbnVsbDtcbiAgICAgICAgdGhpcy5pZ25vcmVIaXQgPSBmYWxzZTtcbiAgICB9XG4gICAgZ2V0IHN0YWdlKCkge1xuICAgICAgICBsZXQgbyA9IHRoaXM7XG4gICAgICAgIHdoaWxlIChvLnBhcmVudCkge1xuICAgICAgICAgICAgbyA9IG8ucGFyZW50O1xuICAgICAgICB9XG4gICAgICAgIGlmIChvLl9fX2luc3RhbmNlb2YgPT09ICdTdGFnZScpXG4gICAgICAgICAgICByZXR1cm4gbztcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGdldCBzY2FsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NhbGVYO1xuICAgIH1cbiAgICBzZXQgc2NhbGUoc2NhbGUpIHtcbiAgICAgICAgdGhpcy5zY2FsZVggPSB0aGlzLnNjYWxlWSA9IHNjYWxlO1xuICAgIH1cbiAgICBpc1Zpc2libGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZpc2libGUgJiYgdGhpcy5hbHBoYSA+IDAgJiYgdGhpcy5zY2FsZVggIT09IDAgJiYgdGhpcy5zY2FsZVkgIT09IDA7XG4gICAgfVxuICAgIGNsaXAoZ3JhcGhpY3MpIHtcbiAgICAgICAgdGhpcy5tYXNrID0gZ3JhcGhpY3M7XG4gICAgfVxuICAgIHVuY2xpcCgpIHtcbiAgICAgICAgdGhpcy5tYXNrID0gbnVsbDtcbiAgICB9XG4gICAgc2V0VHJhbnNmb3JtKHgsIHksIHNjYWxlWCwgc2NhbGVZLCByb3RhdGlvbiwgc2tld1gsIHNrZXdZLCByZWdYLCByZWdZKSB7XG4gICAgICAgIHRoaXMueCA9IHggfHwgMDtcbiAgICAgICAgdGhpcy55ID0geSB8fCAwO1xuICAgICAgICB0aGlzLnNjYWxlWCA9IHNjYWxlWCA9PSBudWxsID8gMSA6IHNjYWxlWDtcbiAgICAgICAgdGhpcy5zY2FsZVkgPSBzY2FsZVkgPT0gbnVsbCA/IDEgOiBzY2FsZVk7XG4gICAgICAgIHRoaXMucm90YXRpb24gPSByb3RhdGlvbiB8fCAwO1xuICAgICAgICB0aGlzLnNrZXdYID0gc2tld1ggfHwgMDtcbiAgICAgICAgdGhpcy5za2V3WSA9IHNrZXdZIHx8IDA7XG4gICAgICAgIHRoaXMucmVnWCA9IHJlZ1ggfHwgMDtcbiAgICAgICAgdGhpcy5yZWdZID0gcmVnWSB8fCAwO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZ2V0TWF0cml4KG1hdHJpeCkge1xuICAgICAgICBsZXQgbyA9IHRoaXM7XG4gICAgICAgIGxldCBtdHggPSBtYXRyaXggfHwgbmV3IG1hdHJpeDJkXzEuZGVmYXVsdCgpO1xuICAgICAgICByZXR1cm4gKG10eC5pZGVudGl0eSgpICYmXG4gICAgICAgICAgICBtdHguYXBwZW5kVHJhbnNmb3JtKG8ueCwgby55LCBvLnNjYWxlWCwgby5zY2FsZVksIG8ucm90YXRpb24sIG8uc2tld1gsIG8uc2tld1ksIG8ucmVnWCwgby5yZWdZKSk7XG4gICAgfVxuICAgIGdldENvbmNhdGVuYXRlZE1hdHJpeChtYXRyaXgpIHtcbiAgICAgICAgbGV0IG8gPSB0aGlzO1xuICAgICAgICBsZXQgbXR4ID0gdGhpcy5nZXRNYXRyaXgobWF0cml4KTtcbiAgICAgICAgd2hpbGUgKChvID0gby5wYXJlbnQpKSB7XG4gICAgICAgICAgICBtdHgucHJlcGVuZE1hdHJpeChvLmdldE1hdHJpeChvLl9wcm9wcy5tYXRyaXgpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbXR4O1xuICAgIH1cbiAgICBnZXRDb25jYXRlbmF0ZWREaXNwbGF5UHJvcHMocHJvcHMpIHtcbiAgICAgICAgcHJvcHMgPSBwcm9wcyA/IHByb3BzLmlkZW50aXR5KCkgOiBuZXcgZGlzcGxheVByb3BzXzEuZGVmYXVsdCgpO1xuICAgICAgICBsZXQgbyA9IHRoaXM7XG4gICAgICAgIGxldCBtdHggPSBvLmdldE1hdHJpeChwcm9wcy5tYXRyaXgpO1xuICAgICAgICBkbyB7XG4gICAgICAgICAgICBwcm9wcy5wcmVwZW5kKG8udmlzaWJsZSwgby5hbHBoYSwgby5zaGFkb3csIG8uY29tcG9zaXRlT3BlcmF0aW9uKTtcbiAgICAgICAgICAgIGlmIChvICE9IHRoaXMpIHtcbiAgICAgICAgICAgICAgICBtdHgucHJlcGVuZE1hdHJpeChvLmdldE1hdHJpeChvLl9wcm9wcy5tYXRyaXgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSB3aGlsZSAoKG8gPSBvLnBhcmVudCkpO1xuICAgICAgICByZXR1cm4gcHJvcHM7XG4gICAgfVxuICAgIGdldEJvdW5kcygpIHtcbiAgICAgICAgaWYgKHRoaXMuX2JvdW5kcykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3JlY3RhbmdsZS5jb3B5KHRoaXMuX2JvdW5kcyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHNldEJvdW5kcyh4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIGlmICh4ID09PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLl9ib3VuZHMgPSB4O1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2JvdW5kcyA9ICh0aGlzLl9ib3VuZHMgfHwgbmV3IHJlY3RhbmdsZV8xLmRlZmF1bHQoKSkuc2V0VmFsdWVzKHgsIHksIHdpZHRoLCBoZWlnaHQpO1xuICAgIH1cbiAgICBnZXRUcmFuc2Zvcm1lZEJvdW5kcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldEJvdW5kcygpO1xuICAgIH1cbiAgICBfZ2V0Qm91bmRzKG1hdHJpeCwgaWdub3JlVHJhbnNmb3JtKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl90cmFuc2Zvcm1Cb3VuZHModGhpcy5nZXRCb3VuZHMoKSwgbWF0cml4LCBpZ25vcmVUcmFuc2Zvcm0pO1xuICAgIH1cbiAgICBfdHJhbnNmb3JtQm91bmRzKGJvdW5kcywgbWF0cml4LCBpZ25vcmVUcmFuc2Zvcm0pIHtcbiAgICAgICAgaWYgKCFib3VuZHMpIHtcbiAgICAgICAgICAgIHJldHVybiBib3VuZHM7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHggPSBib3VuZHMueCwgeSA9IGJvdW5kcy55LCB3aWR0aCA9IGJvdW5kcy53aWR0aCwgaGVpZ2h0ID0gYm91bmRzLmhlaWdodCwgbXR4ID0gdGhpcy5fcHJvcHMubWF0cml4O1xuICAgICAgICBtdHggPSBpZ25vcmVUcmFuc2Zvcm0gPyBtdHguaWRlbnRpdHkoKSA6IHRoaXMuZ2V0TWF0cml4KG10eCk7XG4gICAgICAgIGlmICh4IHx8IHkpIHtcbiAgICAgICAgICAgIG10eC5hcHBlbmRUcmFuc2Zvcm0oMCwgMCwgMSwgMSwgMCwgMCwgMCwgLXgsIC15KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobWF0cml4KSB7XG4gICAgICAgICAgICBtdHgucHJlcGVuZE1hdHJpeChtYXRyaXgpO1xuICAgICAgICB9XG4gICAgICAgIGxldCB4X2EgPSB3aWR0aCAqIG10eC5hLCB4X2IgPSB3aWR0aCAqIG10eC5iO1xuICAgICAgICBsZXQgeV9jID0gaGVpZ2h0ICogbXR4LmMsIHlfZCA9IGhlaWdodCAqIG10eC5kO1xuICAgICAgICBsZXQgdHggPSBtdHgudHgsIHR5ID0gbXR4LnR5O1xuICAgICAgICBsZXQgbWluWCA9IHR4LCBtYXhYID0gdHgsIG1pblkgPSB0eSwgbWF4WSA9IHR5O1xuICAgICAgICBpZiAoKHggPSB4X2EgKyB0eCkgPCBtaW5YKSB7XG4gICAgICAgICAgICBtaW5YID0geDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh4ID4gbWF4WCkge1xuICAgICAgICAgICAgbWF4WCA9IHg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCh4ID0geF9hICsgeV9jICsgdHgpIDwgbWluWCkge1xuICAgICAgICAgICAgbWluWCA9IHg7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoeCA+IG1heFgpIHtcbiAgICAgICAgICAgIG1heFggPSB4O1xuICAgICAgICB9XG4gICAgICAgIGlmICgoeCA9IHlfYyArIHR4KSA8IG1pblgpIHtcbiAgICAgICAgICAgIG1pblggPSB4O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHggPiBtYXhYKSB7XG4gICAgICAgICAgICBtYXhYID0geDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKHkgPSB4X2IgKyB0eSkgPCBtaW5ZKSB7XG4gICAgICAgICAgICBtaW5ZID0geTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh5ID4gbWF4WSkge1xuICAgICAgICAgICAgbWF4WSA9IHk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCh5ID0geF9iICsgeV9kICsgdHkpIDwgbWluWSkge1xuICAgICAgICAgICAgbWluWSA9IHk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoeSA+IG1heFkpIHtcbiAgICAgICAgICAgIG1heFkgPSB5O1xuICAgICAgICB9XG4gICAgICAgIGlmICgoeSA9IHlfZCArIHR5KSA8IG1pblkpIHtcbiAgICAgICAgICAgIG1pblkgPSB5O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHkgPiBtYXhZKSB7XG4gICAgICAgICAgICBtYXhZID0geTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYm91bmRzLnNldFZhbHVlcyhtaW5YLCBtaW5ZLCBtYXhYIC0gbWluWCwgbWF4WSAtIG1pblkpO1xuICAgIH1cbiAgICBvbih0eXBlLCBsaXN0ZW5lciwgb3B0aW9ucykge1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIsIG9wdGlvbnMpO1xuICAgIH1cbiAgICBvZmYodHlwZSwgbGlzdGVuZXIsIG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyLCBvcHRpb25zKTtcbiAgICB9XG4gICAgYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lciwgb3B0aW9ucykge1xuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdib29sZWFuJylcbiAgICAgICAgICAgIG9wdGlvbnMgPSB7IGNhcHR1cmU6IG9wdGlvbnMgfTtcbiAgICAgICAgY29uc3QgeyBjYXB0dXJlLCBvbmNlIH0gPSBvcHRpb25zIHx8IHt9O1xuICAgICAgICBjb25zdCBldmVudExpc3RlbmVycyA9IGNhcHR1cmUgPyBfY2FwdHVyZUV2ZW50TGlzdGVuZXJzIDogX2V2ZW50TGlzdGVuZXJzO1xuICAgICAgICB0aGlzW2V2ZW50TGlzdGVuZXJzXVt0eXBlXSA9IHRoaXNbZXZlbnRMaXN0ZW5lcnNdW3R5cGVdIHx8IFtdO1xuICAgICAgICB0aGlzW2V2ZW50TGlzdGVuZXJzXVt0eXBlXS5wdXNoKHsgbGlzdGVuZXIsIG9uY2UgfSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICByZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyLCBvcHRpb25zKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ2Jvb2xlYW4nKVxuICAgICAgICAgICAgb3B0aW9ucyA9IHsgY2FwdHVyZTogb3B0aW9ucyB9O1xuICAgICAgICBjb25zdCB7IGNhcHR1cmUgfSA9IG9wdGlvbnMgfHwge307XG4gICAgICAgIGNvbnN0IGV2ZW50TGlzdGVuZXJzID0gY2FwdHVyZSA/IF9jYXB0dXJlRXZlbnRMaXN0ZW5lcnMgOiBfZXZlbnRMaXN0ZW5lcnM7XG4gICAgICAgIGlmICh0aGlzW2V2ZW50TGlzdGVuZXJzXVt0eXBlXSkge1xuICAgICAgICAgICAgY29uc3QgbGlzdGVuZXJzID0gdGhpc1tldmVudExpc3RlbmVyc11bdHlwZV07XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3RlbmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgbGlzdGVuZXI6IF9saXN0ZW5lciB9ID0gbGlzdGVuZXJzW2ldO1xuICAgICAgICAgICAgICAgIGlmIChsaXN0ZW5lciA9PT0gX2xpc3RlbmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXNbZXZlbnRMaXN0ZW5lcnNdW3R5cGVdLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBkaXNwYXRjaEV2ZW50KGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnRhcmdldCA9IHRoaXM7XG4gICAgICAgIGNvbnN0IHR5cGUgPSBldmVudC50eXBlO1xuICAgICAgICBjb25zdCBlbGVtZW50cyA9IFt0aGlzXTtcbiAgICAgICAgbGV0IHBhcmVudCA9IHRoaXMucGFyZW50O1xuICAgICAgICB3aGlsZSAoZXZlbnQuYnViYmxlcyAmJiBwYXJlbnQpIHtcbiAgICAgICAgICAgIGVsZW1lbnRzLnB1c2gocGFyZW50KTtcbiAgICAgICAgICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgLy8gY2FwdHVyZSBwaGFzZVxuICAgICAgICBmb3IgKGxldCBpID0gZWxlbWVudHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBlbGVtZW50c1tpXTtcbiAgICAgICAgICAgIGNvbnN0IGxpc3RlbmVycyA9IGVsZW1lbnRbX2NhcHR1cmVFdmVudExpc3RlbmVyc10gJiYgZWxlbWVudFtfY2FwdHVyZUV2ZW50TGlzdGVuZXJzXVt0eXBlXTtcbiAgICAgICAgICAgIGlmIChsaXN0ZW5lcnMgJiYgbGlzdGVuZXJzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGxpc3RlbmVycy5mb3JFYWNoKCh7IGxpc3RlbmVyLCBvbmNlIH0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXIuY2FsbCh0aGlzLCBldmVudCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvbmNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQudHlwZSwgbGlzdGVuZXIsIHsgY2FwdHVyZTogdHJ1ZSB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFldmVudC5idWJibGVzICYmIGV2ZW50LmNhbmNlbEJ1YmJsZSlcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICAvLyBidWJibGluZ1xuICAgICAgICBpZiAoIWV2ZW50LmNhbmNlbEJ1YmJsZSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBlbGVtZW50c1tpXTtcbiAgICAgICAgICAgICAgICBjb25zdCBsaXN0ZW5lcnMgPSBlbGVtZW50W19ldmVudExpc3RlbmVyc10gJiYgZWxlbWVudFtfZXZlbnRMaXN0ZW5lcnNdW3R5cGVdO1xuICAgICAgICAgICAgICAgIGlmIChsaXN0ZW5lcnMgJiYgbGlzdGVuZXJzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lcnMuZm9yRWFjaCgoeyBsaXN0ZW5lciwgb25jZSB9KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lci5jYWxsKHRoaXMsIGV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvbmNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LnR5cGUsIGxpc3RlbmVyLCB7IGNhcHR1cmU6IGZhbHNlIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFldmVudC5idWJibGVzIHx8IGV2ZW50LmNhbmNlbEJ1YmJsZSlcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBOb2RlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBzaGFwZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL3NoYXBlXCIpKTtcbmNsYXNzIEFycm93UGF0aCBleHRlbmRzIHNoYXBlXzEuZGVmYXVsdCB7XG4gICAgY29uc3RydWN0b3IocGF0aCwgb3B0aW9uKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMucGF0aCA9IHBhdGg7XG4gICAgICAgIHRoaXMub3B0aW9uID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICBzdHJva2VTdHlsZTogJ2JsYWNrJyxcbiAgICAgICAgICAgIGxpbmVXaWR0aDogMSxcbiAgICAgICAgICAgIGhlYWRTaXplOiAxMFxuICAgICAgICB9LCBvcHRpb24pO1xuICAgIH1cbiAgICBkcmF3KCkge1xuICAgICAgICBjb25zdCBwYXRoID0gdGhpcy5wYXRoO1xuICAgICAgICB0aGlzLmJlZ2luUGF0aCgpO1xuICAgICAgICBjb25zdCBsZW4gPSBwYXRoLmxlbmd0aDtcbiAgICAgICAgaWYgKGxlbiA9PT0gMikge1xuICAgICAgICAgICAgdGhpcy5kcmF3QXJyb3cocGF0aFswXS54LCBwYXRoWzBdLnksIHBhdGhbMV0ueCwgcGF0aFsxXS55LCAzMCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm1vdmVUbyhwYXRoWzBdLngsIHBhdGhbMF0ueSk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IGxlbiAtIDE7IGkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMubGluZVRvKHBhdGhbaV0ueCwgcGF0aFtpXS55KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZHJhd0Fycm93KHBhdGhbbGVuIC0gMl0ueCwgcGF0aFtsZW4gLSAyXS55LCBwYXRoW2xlbiAtIDFdLngsIHBhdGhbbGVuIC0gMV0ueSwgMzApO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3Ryb2tlKCk7XG4gICAgfVxuICAgIGRyYXdBcnJvdyhmcm9tWCwgZnJvbVksIHRvWCwgdG9ZLCB0aGV0YSkge1xuICAgICAgICBsZXQgYW5nbGUgPSAoTWF0aC5hdGFuMihmcm9tWSAtIHRvWSwgZnJvbVggLSB0b1gpICogMTgwKSAvIE1hdGguUEksIGFuZ2xlMSA9ICgoYW5nbGUgKyB0aGV0YSkgKiBNYXRoLlBJKSAvIDE4MCwgYW5nbGUyID0gKChhbmdsZSAtIHRoZXRhKSAqIE1hdGguUEkpIC8gMTgwLCBocyA9IHRoaXMub3B0aW9uLmhlYWRTaXplLCB0b3BYID0gaHMgKiBNYXRoLmNvcyhhbmdsZTEpLCB0b3BZID0gaHMgKiBNYXRoLnNpbihhbmdsZTEpLCBib3RYID0gaHMgKiBNYXRoLmNvcyhhbmdsZTIpLCBib3RZID0gaHMgKiBNYXRoLnNpbihhbmdsZTIpO1xuICAgICAgICBsZXQgYXJyb3dYID0gZnJvbVggLSB0b3BYLCBhcnJvd1kgPSBmcm9tWSAtIHRvcFk7XG4gICAgICAgIHRoaXMubW92ZVRvKGFycm93WCwgYXJyb3dZKTtcbiAgICAgICAgdGhpcy5tb3ZlVG8oZnJvbVgsIGZyb21ZKTtcbiAgICAgICAgdGhpcy5saW5lVG8odG9YLCB0b1kpO1xuICAgICAgICBhcnJvd1ggPSB0b1ggKyB0b3BYO1xuICAgICAgICBhcnJvd1kgPSB0b1kgKyB0b3BZO1xuICAgICAgICB0aGlzLm1vdmVUbyhhcnJvd1gsIGFycm93WSk7XG4gICAgICAgIHRoaXMubGluZVRvKHRvWCwgdG9ZKTtcbiAgICAgICAgYXJyb3dYID0gdG9YICsgYm90WDtcbiAgICAgICAgYXJyb3dZID0gdG9ZICsgYm90WTtcbiAgICAgICAgdGhpcy5saW5lVG8oYXJyb3dYLCBhcnJvd1kpO1xuICAgICAgICB0aGlzLnN0cm9rZVN0eWxlKHRoaXMub3B0aW9uLnN0cm9rZVN0eWxlKTtcbiAgICAgICAgdGhpcy5saW5lV2lkdGgodGhpcy5vcHRpb24ubGluZVdpZHRoKTtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBBcnJvd1BhdGg7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHNoYXBlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vc2hhcGVcIikpO1xuY2xhc3MgQ2lyY2xlIGV4dGVuZHMgc2hhcGVfMS5kZWZhdWx0IHtcbiAgICBjb25zdHJ1Y3RvcihyLCBvcHRpb24pIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5vcHRpb24gPSBvcHRpb24gfHwge307XG4gICAgICAgIHRoaXMuciA9IHI7XG4gICAgICAgIHRoaXMuX2RwID0gTWF0aC5QSSAqIDI7XG4gICAgfVxuICAgIGRyYXcoKSB7XG4gICAgICAgIHRoaXMuYmVnaW5QYXRoKCk7XG4gICAgICAgIHRoaXMuYXJjKDAsIDAsIHRoaXMuciwgMCwgdGhpcy5fZHAsIGZhbHNlKTtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9uLnN0cm9rZVN0eWxlKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb24ubGluZVdpZHRoICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxpbmVXaWR0aCh0aGlzLm9wdGlvbi5saW5lV2lkdGgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zdHJva2VTdHlsZSh0aGlzLm9wdGlvbi5zdHJva2VTdHlsZSk7XG4gICAgICAgICAgICB0aGlzLnN0cm9rZSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbi5maWxsU3R5bGUpIHtcbiAgICAgICAgICAgIHRoaXMuZmlsbFN0eWxlKHRoaXMub3B0aW9uLmZpbGxTdHlsZSk7XG4gICAgICAgICAgICB0aGlzLmZpbGwoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IENpcmNsZTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3Qgc2hhcGVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9zaGFwZVwiKSk7XG5jbGFzcyBFbGxpcHNlIGV4dGVuZHMgc2hhcGVfMS5kZWZhdWx0IHtcbiAgICBjb25zdHJ1Y3Rvcih3aWR0aCwgaGVpZ2h0LCBvcHRpb24pIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5vcHRpb24gPSBvcHRpb24gfHwge307XG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgfVxuICAgIGRyYXcoKSB7XG4gICAgICAgIGNvbnN0IHcgPSB0aGlzLndpZHRoO1xuICAgICAgICBjb25zdCBoID0gdGhpcy5oZWlnaHQ7XG4gICAgICAgIGNvbnN0IGsgPSAwLjU1MjI4NDg7XG4gICAgICAgIGNvbnN0IG94ID0gKHcgLyAyKSAqIGs7XG4gICAgICAgIGNvbnN0IG95ID0gKGggLyAyKSAqIGs7XG4gICAgICAgIGNvbnN0IHhlID0gdztcbiAgICAgICAgY29uc3QgeWUgPSBoO1xuICAgICAgICBjb25zdCB4bSA9IHcgLyAyO1xuICAgICAgICBjb25zdCB5bSA9IGggLyAyO1xuICAgICAgICB0aGlzLmJlZ2luUGF0aCgpO1xuICAgICAgICB0aGlzLm1vdmVUbygwLCB5bSk7XG4gICAgICAgIHRoaXMuYmV6aWVyQ3VydmVUbygwLCB5bSAtIG95LCB4bSAtIG94LCAwLCB4bSwgMCk7XG4gICAgICAgIHRoaXMuYmV6aWVyQ3VydmVUbyh4bSArIG94LCAwLCB4ZSwgeW0gLSBveSwgeGUsIHltKTtcbiAgICAgICAgdGhpcy5iZXppZXJDdXJ2ZVRvKHhlLCB5bSArIG95LCB4bSArIG94LCB5ZSwgeG0sIHllKTtcbiAgICAgICAgdGhpcy5iZXppZXJDdXJ2ZVRvKHhtIC0gb3gsIHllLCAwLCB5bSArIG95LCAwLCB5bSk7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbi5zdHJva2VTdHlsZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9uLmxpbmVXaWR0aCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5saW5lV2lkdGgodGhpcy5vcHRpb24ubGluZVdpZHRoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc3Ryb2tlU3R5bGUodGhpcy5vcHRpb24uc3Ryb2tlU3R5bGUpO1xuICAgICAgICAgICAgdGhpcy5zdHJva2UoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5vcHRpb24uZmlsbFN0eWxlKSB7XG4gICAgICAgICAgICB0aGlzLmZpbGxTdHlsZSh0aGlzLm9wdGlvbi5maWxsU3R5bGUpO1xuICAgICAgICAgICAgdGhpcy5maWxsKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBFbGxpcHNlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBzaGFwZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL3NoYXBlXCIpKTtcbmNsYXNzIEVxdWlsYXRlcmFsUG9seWdvbiBleHRlbmRzIHNoYXBlXzEuZGVmYXVsdCB7XG4gICAgY29uc3RydWN0b3IobnVtLCByLCBvcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubnVtID0gbnVtO1xuICAgICAgICB0aGlzLnIgPSByO1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgICAgICB0aGlzLnZlcnRleCA9IFtdO1xuICAgICAgICB0aGlzLmluaXRWZXJ0ZXgoKTtcbiAgICB9XG4gICAgaW5pdFZlcnRleCgpIHtcbiAgICAgICAgdGhpcy52ZXJ0ZXgubGVuZ3RoID0gW107XG4gICAgICAgIGNvbnN0IG51bSA9IHRoaXMubnVtO1xuICAgICAgICBjb25zdCByID0gdGhpcy5yO1xuICAgICAgICBsZXQgaSwgc3RhcnRYLCBzdGFydFksIG5ld1gsIG5ld1k7XG4gICAgICAgIGlmIChudW0gJSAyID09PSAwKSB7XG4gICAgICAgICAgICBzdGFydFggPSByICogTWF0aC5jb3MoKDIgKiBNYXRoLlBJICogMCkgLyBudW0pO1xuICAgICAgICAgICAgc3RhcnRZID0gciAqIE1hdGguc2luKCgyICogTWF0aC5QSSAqIDApIC8gbnVtKTtcbiAgICAgICAgICAgIHRoaXMudmVydGV4LnB1c2goW3N0YXJ0WCwgc3RhcnRZXSk7XG4gICAgICAgICAgICBmb3IgKGkgPSAxOyBpIDwgbnVtOyBpKyspIHtcbiAgICAgICAgICAgICAgICBuZXdYID0gciAqIE1hdGguY29zKCgyICogTWF0aC5QSSAqIGkpIC8gbnVtKTtcbiAgICAgICAgICAgICAgICBuZXdZID0gciAqIE1hdGguc2luKCgyICogTWF0aC5QSSAqIGkpIC8gbnVtKTtcbiAgICAgICAgICAgICAgICB0aGlzLnZlcnRleC5wdXNoKFtuZXdYLCBuZXdZXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzdGFydFggPSByICogTWF0aC5jb3MoKDIgKiBNYXRoLlBJICogMCkgLyBudW0gLSBNYXRoLlBJIC8gMik7XG4gICAgICAgICAgICBzdGFydFkgPSByICogTWF0aC5zaW4oKDIgKiBNYXRoLlBJICogMCkgLyBudW0gLSBNYXRoLlBJIC8gMik7XG4gICAgICAgICAgICB0aGlzLnZlcnRleC5wdXNoKFtzdGFydFgsIHN0YXJ0WV0pO1xuICAgICAgICAgICAgZm9yIChpID0gMTsgaSA8IG51bTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbmV3WCA9IHIgKiBNYXRoLmNvcygoMiAqIE1hdGguUEkgKiBpKSAvIG51bSAtIE1hdGguUEkgLyAyKTtcbiAgICAgICAgICAgICAgICBuZXdZID0gciAqIE1hdGguc2luKCgyICogTWF0aC5QSSAqIGkpIC8gbnVtIC0gTWF0aC5QSSAvIDIpO1xuICAgICAgICAgICAgICAgIHRoaXMudmVydGV4LnB1c2goW25ld1gsIG5ld1ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBkcmF3KCkge1xuICAgICAgICB0aGlzLmJlZ2luUGF0aCgpO1xuICAgICAgICB0aGlzLm1vdmVUbyh0aGlzLnZlcnRleFswXVswXSwgdGhpcy52ZXJ0ZXhbMF1bMV0pO1xuICAgICAgICBmb3IgKGxldCBpID0gMSwgbGVuID0gdGhpcy52ZXJ0ZXgubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMubGluZVRvKHRoaXMudmVydGV4W2ldWzBdLCB0aGlzLnZlcnRleFtpXVsxXSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jbG9zZVBhdGgoKTtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5maWxsU3R5bGUpIHtcbiAgICAgICAgICAgIHRoaXMuZmlsbFN0eWxlKHRoaXMub3B0aW9ucy5maWxsU3R5bGUpO1xuICAgICAgICAgICAgdGhpcy5maWxsKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5zdHJva2VTdHlsZSkge1xuICAgICAgICAgICAgdGhpcy5zdHJva2VTdHlsZSh0aGlzLm9wdGlvbnMuc3Ryb2tlU3R5bGUpO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMubGluZVdpZHRoID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICAgIHRoaXMubGluZVdpZHRoKHRoaXMub3B0aW9ucy5saW5lV2lkdGgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zdHJva2UoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IEVxdWlsYXRlcmFsUG9seWdvbjtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3Qgc2hhcGVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9zaGFwZVwiKSk7XG5jbGFzcyBQb2x5Z29uIGV4dGVuZHMgc2hhcGVfMS5kZWZhdWx0IHtcbiAgICBjb25zdHJ1Y3Rvcih2ZXJ0ZXgsIG9wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy52ZXJ0ZXggPSB2ZXJ0ZXggfHwgW107XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgICAgIHRoaXMuc3Ryb2tlQ29sb3IgPSB0aGlzLm9wdGlvbnMuc3Ryb2tlQ29sb3I7XG4gICAgICAgIHRoaXMuZmlsbENvbG9yID0gdGhpcy5vcHRpb25zLmZpbGxDb2xvcjtcbiAgICB9XG4gICAgZHJhdygpIHtcbiAgICAgICAgdGhpcy5jbGVhcigpLmJlZ2luUGF0aCgpO1xuICAgICAgICB0aGlzLnN0cm9rZVN0eWxlKHRoaXMuc3Ryb2tlQ29sb3IpO1xuICAgICAgICB0aGlzLm1vdmVUbyh0aGlzLnZlcnRleFswXVswXSwgdGhpcy52ZXJ0ZXhbMF1bMV0pO1xuICAgICAgICBmb3IgKGxldCBpID0gMSwgbGVuID0gdGhpcy52ZXJ0ZXgubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMubGluZVRvKHRoaXMudmVydGV4W2ldWzBdLCB0aGlzLnZlcnRleFtpXVsxXSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jbG9zZVBhdGgoKTtcbiAgICAgICAgLy8g6Lev5b6E6Zet5ZCIXG4gICAgICAgIC8vICBpZiAodGhpcy5vcHRpb25zLnN0cm9rZVN0eWxlKSB7XG4gICAgICAgIC8vICAgIHRoaXMuc3Ryb2tlU3R5bGUgPSBzdHJva2VTdHlsZTtcbiAgICAgICAgLy8gdGhpcy5saW5lV2lkdGgodGhpcy5vcHRpb25zLndpZHRoKTtcbiAgICAgICAgLy8gdGhpcy5saW5lSm9pbigncm91bmQnKTtcbiAgICAgICAgLy8gdGhpcy5zdHJva2UoKTtcbiAgICAgICAgLy8gIH1cbiAgICAgICAgaWYgKHRoaXMuc3Ryb2tlQ29sb3IpIHtcbiAgICAgICAgICAgIHRoaXMuc3Ryb2tlU3R5bGUodGhpcy5zdHJva2VDb2xvcik7XG4gICAgICAgICAgICB0aGlzLnN0cm9rZSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmZpbGxDb2xvcikge1xuICAgICAgICAgICAgdGhpcy5maWxsU3R5bGUodGhpcy5maWxsQ29sb3IpO1xuICAgICAgICAgICAgdGhpcy5maWxsKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBQb2x5Z29uO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBzaGFwZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL3NoYXBlXCIpKTtcbmNsYXNzIFJlY3QgZXh0ZW5kcyBzaGFwZV8xLmRlZmF1bHQge1xuICAgIGNvbnN0cnVjdG9yKHdpZHRoLCBoZWlnaHQsIG9wdGlvbikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICB0aGlzLm9wdGlvbiA9IG9wdGlvbiB8fCB7fTtcbiAgICB9XG4gICAgZHJhdygpIHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9uLmZpbGxTdHlsZSkge1xuICAgICAgICAgICAgdGhpcy5maWxsU3R5bGUodGhpcy5vcHRpb24uZmlsbFN0eWxlKTtcbiAgICAgICAgICAgIHRoaXMuZmlsbFJlY3QoMCwgMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbi5zdHJva2VTdHlsZSkge1xuICAgICAgICAgICAgdGhpcy5zdHJva2VTdHlsZSh0aGlzLm9wdGlvbi5zdHJva2VTdHlsZSk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9uLmxpbmVXaWR0aCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxpbmVXaWR0aCh0aGlzLm9wdGlvbi5saW5lV2lkdGgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zdHJva2VSZWN0KDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IFJlY3Q7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHNoYXBlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vc2hhcGVcIikpO1xuY2xhc3MgUm91bmRlZFJlY3QgZXh0ZW5kcyBzaGFwZV8xLmRlZmF1bHQge1xuICAgIGNvbnN0cnVjdG9yKHdpZHRoLCBoZWlnaHQsIHIsIG9wdGlvbikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm9wdGlvbiA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgbGluZVdpZHRoOiAxLFxuICAgICAgICAgICAgbHQ6IHRydWUsXG4gICAgICAgICAgICBydDogdHJ1ZSxcbiAgICAgICAgICAgIGxiOiB0cnVlLFxuICAgICAgICAgICAgcmI6IHRydWVcbiAgICAgICAgfSwgb3B0aW9uKTtcbiAgICAgICAgdGhpcy5yID0gciB8fCAwO1xuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIH1cbiAgICBkcmF3KCkge1xuICAgICAgICBjb25zdCB3aWR0aCA9IHRoaXMud2lkdGgsIGhlaWdodCA9IHRoaXMuaGVpZ2h0LCByID0gdGhpcy5yO1xuICAgICAgICBjb25zdCBheCA9IHIsIGF5ID0gMCwgYnggPSB3aWR0aCwgYnkgPSAwLCBjeCA9IHdpZHRoLCBjeSA9IGhlaWdodCwgZHggPSAwLCBkeSA9IGhlaWdodCwgZXggPSAwLCBleSA9IDA7XG4gICAgICAgIHRoaXMuYmVnaW5QYXRoKCk7XG4gICAgICAgIHRoaXMubW92ZVRvKGF4LCBheSk7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbi5ydCkge1xuICAgICAgICAgICAgdGhpcy5hcmNUbyhieCwgYnksIGN4LCBjeSwgcik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmxpbmVUbyhieCwgYnkpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbi5yYikge1xuICAgICAgICAgICAgdGhpcy5hcmNUbyhjeCwgY3ksIGR4LCBkeSwgcik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmxpbmVUbyhjeCwgY3kpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbi5sYikge1xuICAgICAgICAgICAgdGhpcy5hcmNUbyhkeCwgZHksIGV4LCBleSwgcik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmxpbmVUbyhkeCwgZHkpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbi5sdCkge1xuICAgICAgICAgICAgdGhpcy5hcmNUbyhleCwgZXksIGF4LCBheSwgcik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmxpbmVUbyhleCwgZXkpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbi5maWxsU3R5bGUpIHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICB0aGlzLmZpbGxTdHlsZSh0aGlzLm9wdGlvbi5maWxsU3R5bGUpO1xuICAgICAgICAgICAgdGhpcy5maWxsKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMub3B0aW9uLnN0cm9rZVN0eWxlKSB7XG4gICAgICAgICAgICB0aGlzLmxpbmVXaWR0aCh0aGlzLm9wdGlvbi5saW5lV2lkdGgpO1xuICAgICAgICAgICAgdGhpcy5zdHJva2VTdHlsZSh0aGlzLm9wdGlvbi5zdHJva2VTdHlsZSk7XG4gICAgICAgICAgICB0aGlzLnN0cm9rZSgpO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gUm91bmRlZFJlY3Q7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHNoYXBlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vc2hhcGVcIikpO1xuY2xhc3MgU2VjdG9yIGV4dGVuZHMgc2hhcGVfMS5kZWZhdWx0IHtcbiAgICBjb25zdHJ1Y3RvcihyLCBmcm9tLCB0bywgb3B0aW9uKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMub3B0aW9uID0gb3B0aW9uIHx8IHt9O1xuICAgICAgICB0aGlzLnIgPSByO1xuICAgICAgICB0aGlzLmZyb20gPSBmcm9tO1xuICAgICAgICB0aGlzLnRvID0gdG87XG4gICAgfVxuICAgIGRyYXcoKSB7XG4gICAgICAgIHRoaXMuYmVnaW5QYXRoKClcbiAgICAgICAgICAgIC5tb3ZlVG8oMCwgMClcbiAgICAgICAgICAgIC5hcmMoMCwgMCwgdGhpcy5yLCB0aGlzLmZyb20sIHRoaXMudG8pXG4gICAgICAgICAgICAuY2xvc2VQYXRoKClcbiAgICAgICAgICAgIC5maWxsU3R5bGUodGhpcy5vcHRpb24uZmlsbFN0eWxlKVxuICAgICAgICAgICAgLmZpbGwoKVxuICAgICAgICAgICAgLnN0cm9rZVN0eWxlKHRoaXMub3B0aW9uLnN0cm9rZVN0eWxlKVxuICAgICAgICAgICAgLmxpbmVXaWR0aCh0aGlzLm9wdGlvbi5saW5lV2lkdGgpXG4gICAgICAgICAgICAuc3Ryb2tlKCk7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gU2VjdG9yO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBncmFwaGljc18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9ncmFwaGljc1wiKSk7XG5jbGFzcyBTaGFwZSBleHRlbmRzIGdyYXBoaWNzXzEuZGVmYXVsdCB7XG4gICAgZHJhdygpIHsgfVxuICAgIHJlbmRlcihjdHgpIHtcbiAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgICAgICB0aGlzLmRyYXcoKTtcbiAgICAgICAgc3VwZXIucmVuZGVyKGN0eCk7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gU2hhcGU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGdyb3VwXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vZ3JvdXBcIikpO1xuY29uc3QgaW5kZXhfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vcmVuZGVyL2luZGV4XCIpKTtcbmNvbnN0IGV2ZW50XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL2V2ZW50L2V2ZW50XCIpKTtcbmNsYXNzIFN0YWdlIGV4dGVuZHMgZ3JvdXBfMS5kZWZhdWx0IHtcbiAgICBjb25zdHJ1Y3Rvcihjb250YWluZXIsIHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIGNvbnN0IGN0eCA9IGNvbnRhaW5lci5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGNvbnN0IGRwciA9IHd4LmdldFN5c3RlbUluZm9TeW5jKCkucGl4ZWxSYXRpbztcbiAgICAgICAgY29udGFpbmVyLndpZHRoID0gd2lkdGggKiBkcHI7XG4gICAgICAgIGNvbnRhaW5lci5oZWlnaHQgPSBoZWlnaHQgKiBkcHI7XG4gICAgICAgIGN0eC5zY2FsZShkcHIsIGRwcik7XG4gICAgICAgIHRoaXMuZHByID0gZHByO1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5yZW5kZXIgPSBuZXcgaW5kZXhfMS5kZWZhdWx0KGN0eCwgY29udGFpbmVyLndpZHRoLCBjb250YWluZXIuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5oaXRDdHggPSBudWxsO1xuICAgICAgICB0aGlzLnRvdWNoT2JqZWN0ID0gbnVsbDtcbiAgICAgICAgdGhpcy5fX19pbnN0YW5jZW9mID0gJ1N0YWdlJztcbiAgICB9XG4gICAgdXBkYXRlKCkge1xuICAgICAgICB0aGlzLnJlbmRlci51cGRhdGUodGhpcyk7XG4gICAgfVxuICAgIHNldEhpdENhbnZhcyhoaXRDYW52YXMpIHtcbiAgICAgICAgY29uc3QgaGl0Q3R4ID0gaGl0Q2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIGhpdENhbnZhcy53aWR0aCA9IHRoaXMud2lkdGg7XG4gICAgICAgIGhpdENhbnZhcy5oZWlnaHQgPSB0aGlzLmhlaWdodDtcbiAgICAgICAgdGhpcy5oaXRDdHggPSBoaXRDdHg7XG4gICAgfVxuICAgIGdldFRleHRXaWR0aCh0ZXh0LCBmb250KSB7XG4gICAgICAgIHRoaXMuY3R4LmZvbnQgPSBmb250O1xuICAgICAgICByZXR1cm4gdGhpcy5jdHgubWVhc3VyZVRleHQodGV4dCkud2lkdGg7XG4gICAgfVxuICAgIGxvYWRJbWFnZSh1cmwpIHtcbiAgICAgICAgY29uc3QgY2FudmFzID0gdGhpcy5jb250YWluZXI7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbWFnZSA9IGNhbnZhcy5jcmVhdGVJbWFnZSgpO1xuICAgICAgICAgICAgaW1hZ2Uuc3JjID0gdXJsO1xuICAgICAgICAgICAgaW1hZ2Uub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoaW1hZ2UpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGltYWdlLm9uZXJyb3IgPSBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHRvdWNoU3RhcnRIYW5kbGVyKGV2dCkge1xuICAgICAgICBjb25zdCBwMSA9IGV2dC50b3VjaGVzWzBdO1xuICAgICAgICBldnQuc3RhZ2VYID0gTWF0aC5yb3VuZChwMS54KTtcbiAgICAgICAgZXZ0LnN0YWdlWSA9IE1hdGgucm91bmQocDEueSk7XG4gICAgICAgIGxldCBvYmogPSB0aGlzLmdldE9iamVjdFVuZGVyUG9pbnQoZXZ0KTtcbiAgICAgICAgdGhpcy50b3VjaE9iamVjdCA9IG9iajtcbiAgICAgICAgdGhpcy5fbW91c2VEb3duWCA9IGV2dC5zdGFnZVg7XG4gICAgICAgIHRoaXMuX21vdXNlRG93blkgPSBldnQuc3RhZ2VZO1xuICAgICAgICB0aGlzLnByZVN0YWdlWCA9IGV2dC5zdGFnZVg7XG4gICAgICAgIHRoaXMucHJlU3RhZ2VZID0gZXZ0LnN0YWdlWTtcbiAgICAgICAgdGhpcy5fX2Rpc3BhdGNoRXZlbnQob2JqLCBldnQpO1xuICAgIH1cbiAgICB0b3VjaE1vdmVIYW5kbGVyKGV2dCkge1xuICAgICAgICBjb25zdCBwMSA9IGV2dC50b3VjaGVzWzBdO1xuICAgICAgICBjb25zdCB0b3VjaGVzTGVuZ3RoID0gZXZ0LnRvdWNoZXMubGVuZ3RoO1xuICAgICAgICBldnQuc3RhZ2VYID0gTWF0aC5yb3VuZChwMS54KTtcbiAgICAgICAgZXZ0LnN0YWdlWSA9IE1hdGgucm91bmQocDEueSk7XG4gICAgICAgIGxldCBtb2NrRXZ0ID0gbmV3IGV2ZW50XzEuZGVmYXVsdCgpO1xuICAgICAgICBtb2NrRXZ0LnN0YWdlWCA9IGV2dC5zdGFnZVg7XG4gICAgICAgIG1vY2tFdnQuc3RhZ2VZID0gZXZ0LnN0YWdlWTtcbiAgICAgICAgbW9ja0V2dC5vcmlnaW5hbEV2ZW50ID0gZXZ0O1xuICAgICAgICBpZiAodGhpcy50b3VjaE9iamVjdCAmJiB0b3VjaGVzTGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICBtb2NrRXZ0LnR5cGUgPSAnZHJhZyc7XG4gICAgICAgICAgICBtb2NrRXZ0LmR4ID0gbW9ja0V2dC5zdGFnZVggLSB0aGlzLnByZVN0YWdlWDtcbiAgICAgICAgICAgIG1vY2tFdnQuZHkgPSBtb2NrRXZ0LnN0YWdlWSAtIHRoaXMucHJlU3RhZ2VZO1xuICAgICAgICAgICAgdGhpcy5wcmVTdGFnZVggPSBtb2NrRXZ0LnN0YWdlWDtcbiAgICAgICAgICAgIHRoaXMucHJlU3RhZ2VZID0gbW9ja0V2dC5zdGFnZVk7XG4gICAgICAgICAgICB0aGlzLnRvdWNoT2JqZWN0LmRpc3BhdGNoRXZlbnQobW9ja0V2dCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fX2Rpc3BhdGNoRXZlbnQodGhpcy50b3VjaE9iamVjdCwgZXZ0KTtcbiAgICB9XG4gICAgdG91Y2hFbmRIYW5kbGVyKGV2dCkge1xuICAgICAgICBjb25zdCBwMSA9IGV2dC5jaGFuZ2VkVG91Y2hlc1swXTtcbiAgICAgICAgZXZ0LnN0YWdlWCA9IE1hdGgucm91bmQocDEueCk7XG4gICAgICAgIGV2dC5zdGFnZVkgPSBNYXRoLnJvdW5kKHAxLnkpO1xuICAgICAgICBsZXQgb2JqID0gdGhpcy5nZXRPYmplY3RVbmRlclBvaW50KGV2dCk7XG4gICAgICAgIHRoaXMuX21vdXNlVXBYID0gZXZ0LnN0YWdlWDtcbiAgICAgICAgdGhpcy5fbW91c2VVcFkgPSBldnQuc3RhZ2VZO1xuICAgICAgICB0aGlzLl9fZGlzcGF0Y2hFdmVudCh0aGlzLnRvdWNoT2JqZWN0LCBldnQpO1xuICAgICAgICB0aGlzLnRvdWNoT2JqZWN0ID0gbnVsbDtcbiAgICAgICAgdGhpcy5wcmVTdGFnZVggPSBudWxsO1xuICAgICAgICB0aGlzLnByZVN0YWdlWSA9IG51bGw7XG4gICAgICAgIGlmIChvYmogJiZcbiAgICAgICAgICAgIE1hdGguYWJzKHRoaXMuX21vdXNlRG93blggLSB0aGlzLl9tb3VzZVVwWCkgPCAxMCAmJlxuICAgICAgICAgICAgTWF0aC5hYnModGhpcy5fbW91c2VEb3duWSAtIHRoaXMuX21vdXNlVXBZKSA8IDEwKSB7XG4gICAgICAgICAgICBsZXQgbW9ja0V2dCA9IG5ldyBldmVudF8xLmRlZmF1bHQoKTtcbiAgICAgICAgICAgIG1vY2tFdnQuc3RhZ2VYID0gZXZ0LnN0YWdlWDtcbiAgICAgICAgICAgIG1vY2tFdnQuc3RhZ2VZID0gZXZ0LnN0YWdlWTtcbiAgICAgICAgICAgIG1vY2tFdnQub3JpZ2luYWxFdmVudCA9IGV2dDtcbiAgICAgICAgICAgIG1vY2tFdnQudHlwZSA9ICd0YXAnO1xuICAgICAgICAgICAgb2JqLmRpc3BhdGNoRXZlbnQobW9ja0V2dCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0T2JqZWN0VW5kZXJQb2ludChldnQpIHtcbiAgICAgICAgY29uc3QgeCA9IGV2dC5zdGFnZVg7XG4gICAgICAgIGNvbnN0IHkgPSBldnQuc3RhZ2VZO1xuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T2JqZWN0c1VuZGVyUG9pbnQoeCwgeSwgdGhpcy5oaXRDdHgpIHx8IHRoaXM7XG4gICAgfVxuICAgIF9fZGlzcGF0Y2hFdmVudChvYmosIGV2dCkge1xuICAgICAgICBpZiAoIW9iailcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgbGV0IG1vY2tFdnQgPSBuZXcgZXZlbnRfMS5kZWZhdWx0KCk7XG4gICAgICAgIG1vY2tFdnQuc3RhZ2VYID0gZXZ0LnN0YWdlWDtcbiAgICAgICAgbW9ja0V2dC5zdGFnZVkgPSBldnQuc3RhZ2VZO1xuICAgICAgICBtb2NrRXZ0Lm9yaWdpbmFsRXZlbnQgPSBldnQ7XG4gICAgICAgIG1vY2tFdnQudHlwZSA9IGV2dC50eXBlO1xuICAgICAgICBvYmouZGlzcGF0Y2hFdmVudChtb2NrRXZ0KTtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBTdGFnZTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3Qgbm9kZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL25vZGVcIikpO1xuY2xhc3MgVGV4dCBleHRlbmRzIG5vZGVfMS5kZWZhdWx0IHtcbiAgICBjb25zdHJ1Y3Rvcih0ZXh0LCBvcHRpb24pIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy50ZXh0ID0gdGV4dDtcbiAgICAgICAgb3B0aW9uID0gb3B0aW9uIHx8IHt9O1xuICAgICAgICB0aGlzLmZvbnQgPSBvcHRpb24uZm9udCB8fCAnMTBweCBzYW5zLXNlcmlmJztcbiAgICAgICAgdGhpcy5jb2xvciA9IG9wdGlvbi5jb2xvciB8fCAnYmxhY2snO1xuICAgICAgICB0aGlzLnRleHRBbGlnbiA9IG9wdGlvbi50ZXh0QWxpZ24gfHwgJ2xlZnQnO1xuICAgICAgICB0aGlzLmJhc2VsaW5lID0gb3B0aW9uLmJhc2VsaW5lIHx8ICd0b3AnO1xuICAgIH1cbiAgICByZW5kZXIoY3R4KSB7XG4gICAgICAgIGN0eC5mb250ID0gdGhpcy5mb250O1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICAgICAgY3R4LnRleHRBbGlnbiA9IHRoaXMudGV4dEFsaWduO1xuICAgICAgICBjdHgudGV4dEJhc2VsaW5lID0gdGhpcy5iYXNlbGluZTtcbiAgICAgICAgY3R4LmZpbGxUZXh0KHRoaXMudGV4dCwgMCwgMCk7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gVGV4dDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgZ3JvdXBfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vbm9kZS9ncm91cFwiKSk7XG5jbGFzcyBSZW5kZXIge1xuICAgIGNvbnN0cnVjdG9yKGN0eCwgd2lkdGgsIGhlaWdodCkge1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICB9XG4gICAgdXBkYXRlKHN0YWdlKSB7XG4gICAgICAgIHRoaXMuY2xlYXIodGhpcy5jdHgsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5yZW5kZXIodGhpcy5jdHgsIHN0YWdlKTtcbiAgICB9XG4gICAgY2xlYXIoY3R4LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgd2lkdGgsIGhlaWdodCk7XG4gICAgfVxuICAgIHJlbmRlcihjdHgsIG8pIHtcbiAgICAgICAgbGV0IG10eCA9IG8uX3Byb3BzLm1hdHJpeDtcbiAgICAgICAgby5nZXRNYXRyaXgobXR4KTtcbiAgICAgICAgaWYgKG8uY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIGxldCBsaXN0ID0gby5jaGlsZHJlbi5zbGljZSgwKTtcbiAgICAgICAgICAgIGxldCBsID0gbGlzdC5sZW5ndGg7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBjaGlsZCA9IGxpc3RbaV07XG4gICAgICAgICAgICAgICAgaWYgKCFjaGlsZC5pc1Zpc2libGUoKSkge1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY3R4LnNhdmUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW5kZXIoY3R4LCBjaGlsZCwgbXR4KTtcbiAgICAgICAgICAgICAgICBjdHgucmVzdG9yZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fcmVuZGVyKGN0eCwgbywgbXR4KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBfcmVuZGVyKGN0eCwgbywgbXR4KSB7XG4gICAgICAgIGxldCBtYXNrID0gby5tYXNrO1xuICAgICAgICBpZiAobXR4KSB7XG4gICAgICAgICAgICBjdHgudHJhbnNmb3JtKG10eC5hLCBtdHguYiwgbXR4LmMsIG10eC5kLCBtdHgudHgsIG10eC50eSk7XG4gICAgICAgIH1cbiAgICAgICAgbXR4ID0gby5fcHJvcHMubWF0cml4O1xuICAgICAgICBpZiAobWFzaykge1xuICAgICAgICAgICAgbWFzay5nZXRNYXRyaXgobXR4KTtcbiAgICAgICAgICAgIGN0eC50cmFuc2Zvcm0obXR4LmEsIG10eC5iLCBtdHguYywgbXR4LmQsIG10eC50eCwgbXR4LnR5KTtcbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIG1hc2sucmVuZGVyKGN0eCk7XG4gICAgICAgICAgICBjdHguY2xpcCgpO1xuICAgICAgICAgICAgbXR4LmludmVydCgpO1xuICAgICAgICAgICAgY3R4LnRyYW5zZm9ybShtdHguYSwgbXR4LmIsIG10eC5jLCBtdHguZCwgbXR4LnR4LCBtdHgudHkpO1xuICAgICAgICB9XG4gICAgICAgIG8uZ2V0TWF0cml4KG10eCk7XG4gICAgICAgIGN0eC50cmFuc2Zvcm0obXR4LmEsIG10eC5iLCBtdHguYywgbXR4LmQsIG10eC50eCwgbXR4LnR5KTtcbiAgICAgICAgbGV0IHByb3BzID0gby5nZXRDb25jYXRlbmF0ZWREaXNwbGF5UHJvcHMoby5fcHJvcHMpO1xuICAgICAgICBtdHggPSBwcm9wcy5tYXRyaXg7XG4gICAgICAgIGN0eC5nbG9iYWxBbHBoYSAqPSBvLl9wcm9wcy5hbHBoYTtcbiAgICAgICAgaWYgKG8uY29tcG9zaXRlT3BlcmF0aW9uKSB7XG4gICAgICAgICAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gby5jb21wb3NpdGVPcGVyYXRpb247XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG8uc2hhZG93KSB7XG4gICAgICAgICAgICB0aGlzLl9hcHBseVNoYWRvdyhjdHgsIG8uc2hhZG93KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobyBpbnN0YW5jZW9mIGdyb3VwXzEuZGVmYXVsdCkge1xuICAgICAgICAgICAgbGV0IGxpc3QgPSBvLmNoaWxkcmVuLnNsaWNlKDApO1xuICAgICAgICAgICAgbGV0IGwgPSBsaXN0Lmxlbmd0aDtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY3R4LnNhdmUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW5kZXIoY3R4LCBsaXN0W2ldKTtcbiAgICAgICAgICAgICAgICBjdHgucmVzdG9yZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgby5yZW5kZXIoY3R4KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBfYXBwbHlTaGFkb3coY3R4LCBzaGFkb3cpIHtcbiAgICAgICAgc2hhZG93ID0gc2hhZG93O1xuICAgICAgICBjdHguc2hhZG93Q29sb3IgPSBzaGFkb3cuY29sb3I7XG4gICAgICAgIGN0eC5zaGFkb3dPZmZzZXRYID0gc2hhZG93Lm9mZnNldFg7XG4gICAgICAgIGN0eC5zaGFkb3dPZmZzZXRZID0gc2hhZG93Lm9mZnNldFk7XG4gICAgICAgIGN0eC5zaGFkb3dCbHVyID0gc2hhZG93LmJsdXI7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gUmVuZGVyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5sZXQgVUlEID0ge1xuICAgIF9uZXh0SUQ6IDAsXG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBVSUQuX25leHRJRCsrO1xuICAgIH1cbn07XG5leHBvcnRzLmRlZmF1bHQgPSBVSUQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMubG9hZEltYWdlID0gdm9pZCAwO1xuZnVuY3Rpb24gbG9hZEltYWdlKHVybCwgY2FudmFzKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgY29uc3QgaW1hZ2UgPSBjYW52YXMuY3JlYXRlSW1hZ2UoKTtcbiAgICAgICAgaW1hZ2Uuc3JjID0gdXJsO1xuICAgICAgICBpbWFnZS5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXNvbHZlKGltYWdlKTtcbiAgICAgICAgfTtcbiAgICAgICAgaW1hZ2Uub25lcnJvciA9IGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgfTtcbiAgICB9KTtcbn1cbmV4cG9ydHMubG9hZEltYWdlID0gbG9hZEltYWdlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==