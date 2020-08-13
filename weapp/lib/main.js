(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["miniProgramsRC"] = factory();
	else
		root["miniProgramsRC"] = factory();
})(window, function() {
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
var _type = Symbol('type');
var _bubbles = Symbol('bubbles');
var _originalEvent = Symbol('_originalEvent');
var Event = /** @class */ (function () {
    function Event() {
        this[_type] = '';
        this[_originalEvent] = null;
        this[_bubbles] = true;
        this.cancelBubble = false;
    }
    Event.prototype.stopPropagation = function () {
        this.cancelBubble = true;
    };
    Object.defineProperty(Event.prototype, "type", {
        get: function () {
            return this[_type];
        },
        set: function (value) {
            this[_type] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Event.prototype, "originalEvent", {
        get: function () {
            return this[_originalEvent];
        },
        set: function (value) {
            this[_originalEvent] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Event.prototype, "bubbles", {
        get: function () {
            return this[_bubbles];
        },
        set: function (value) {
            this[_bubbles] = value;
        },
        enumerable: false,
        configurable: true
    });
    return Event;
}());
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
var matrix2d_1 = __importDefault(__webpack_require__(/*! ./matrix2d */ "./src/geom/matrix2d.js"));
var DisplayProps = /** @class */ (function () {
    function DisplayProps(visible, alpha, shadow, compositeOperation, matrix) {
        this.setValue(visible, alpha, shadow, compositeOperation, matrix);
    }
    DisplayProps.prototype.setValue = function (visible, alpha, shadow, compositeOperation, matrix) {
        this.visible = visible == null ? true : !!visible;
        this.alpha = alpha == null ? 1 : alpha;
        this.shadow = shadow || null;
        this.compositeOperation = compositeOperation || null;
        this.matrix = matrix || (this.matrix && this.matrix.identity()) || new matrix2d_1.default();
        return this;
    };
    DisplayProps.prototype.append = function (visible, alpha, shadow, compositeOperation, matrix) {
        this.alpha *= alpha;
        this.shadow = shadow || this.shadow;
        this.compositeOperation = compositeOperation || this.compositeOperation;
        this.visible = this.visible && visible;
        matrix && this.matrix.appendMatrix(matrix);
        return this;
    };
    DisplayProps.prototype.prepend = function (visible, alpha, shadow, compositeOperation, matrix) {
        this.alpha *= alpha;
        this.shadow = this.shadow || shadow;
        this.compositeOperation = this.compositeOperation || compositeOperation;
        this.visible = this.visible && visible;
        matrix && this.matrix.prependMatrix(matrix);
        return this;
    };
    DisplayProps.prototype.identity = function () {
        this.visible = true;
        this.alpha = 1;
        this.shadow = this.compositeOperation = null;
        this.matrix.identity();
        return this;
    };
    return DisplayProps;
}());
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
var Rectangle = /** @class */ (function () {
    function Rectangle(x, y, width, height) {
        this.setValues(x, y, width, height);
    }
    Rectangle.prototype.setValues = function (x, y, width, height) {
        this.x = x || 0;
        this.y = y || 0;
        this.width = width || 0;
        this.height = height || 0;
        return this;
    };
    Rectangle.prototype.extend = function (x, y, width, height) {
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
    };
    Rectangle.prototype.copy = function (rectangle) {
        return this.setValues(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
    };
    Rectangle.prototype.contains = function (x, y, width, height) {
        width = width || 0;
        height = height || 0;
        return (x >= this.x &&
            x + width <= this.x + this.width &&
            y >= this.y &&
            y + height <= this.y + this.height);
    };
    Rectangle.prototype.isEmpty = function () {
        return this.width <= 0 || this.height <= 0;
    };
    Rectangle.prototype.clone = function () {
        return new Rectangle(this.x, this.y, this.width, this.height);
    };
    return Rectangle;
}());
exports.default = Rectangle;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __importDefault(__webpack_require__(/*! ./render/index */ "./src/render/index.ts"));
var stage_1 = __importDefault(__webpack_require__(/*! ./node/stage */ "./src/node/stage.ts"));
var group_1 = __importDefault(__webpack_require__(/*! ./node/group */ "./src/node/group.ts"));
var graphics_1 = __importDefault(__webpack_require__(/*! ./node/graphics */ "./src/node/graphics.ts"));
var rect_1 = __importDefault(__webpack_require__(/*! ./node/shape/rect */ "./src/node/shape/rect.ts"));
var circle_1 = __importDefault(__webpack_require__(/*! ./node/shape/circle */ "./src/node/shape/circle.ts"));
var mprc = {
    Render: index_1.default,
    Stage: stage_1.default,
    Group: group_1.default,
    Rect: rect_1.default,
    Circle: circle_1.default,
    Graphics: graphics_1.default
};
exports.default = mprc;


/***/ }),

/***/ "./src/node/graphics.ts":
/*!******************************!*\
  !*** ./src/node/graphics.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var node_1 = __importDefault(__webpack_require__(/*! ./node */ "./src/node/node.ts"));
var assMap = {
    fillStyle: true,
    strokeStyle: true,
    lineWidth: true,
    lineCap: true,
    lineDashOffset: true,
    lineJoin: true,
    miterLimit: true
};
var Graphics = /** @class */ (function (_super) {
    __extends(Graphics, _super);
    function Graphics() {
        var _this = _super.call(this) || this;
        _this.cmds = [];
        _this.currentGradient = null;
        return _this;
    }
    Graphics.prototype.clearRect = function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        this.cmds.push(['clearRect', arguments]);
        return this;
    };
    Graphics.prototype.rect = function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        this.cmds.push(['rect', arguments]);
        return this;
    };
    Graphics.prototype.clear = function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        this.cmds.length = 0;
        return this;
    };
    Graphics.prototype.setLineDash = function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        this.cmds.push(['setLineDash', arguments]);
        return this;
    };
    Graphics.prototype.strokeRect = function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        this.cmds.push(['strokeRect', arguments]);
        return this;
    };
    Graphics.prototype.fillRect = function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        this.cmds.push(['fillRect', arguments]);
        return this;
    };
    Graphics.prototype.beginPath = function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        this.cmds.push(['beginPath', arguments]);
        return this;
    };
    Graphics.prototype.arc = function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        this.cmds.push(['arc', arguments]);
        return this;
    };
    Graphics.prototype.closePath = function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        this.cmds.push(['closePath', arguments]);
        return this;
    };
    Graphics.prototype.fillStyle = function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        this.cmds.push(['fillStyle', arguments]);
        return this;
    };
    Graphics.prototype.fill = function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        this.cmds.push(['fill', arguments]);
        return this;
    };
    Graphics.prototype.strokeStyle = function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        this.cmds.push(['strokeStyle', arguments]);
        return this;
    };
    Graphics.prototype.lineWidth = function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        this.cmds.push(['lineWidth', arguments]);
        return this;
    };
    Graphics.prototype.lineCap = function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        this.cmds.push(['lineCap', arguments]);
        return this;
    };
    Graphics.prototype.lineDashOffset = function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        this.cmds.push(['lineDashOffset', arguments]);
        return this;
    };
    Graphics.prototype.lineJoin = function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        this.cmds.push(['lineJoin', arguments]);
        return this;
    };
    Graphics.prototype.miterLimit = function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        this.cmds.push(['miterLimit', arguments]);
        return this;
    };
    Graphics.prototype.stroke = function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        this.cmds.push(['stroke', arguments]);
        return this;
    };
    Graphics.prototype.moveTo = function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        this.cmds.push(['moveTo', arguments]);
        return this;
    };
    Graphics.prototype.lineTo = function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        this.cmds.push(['lineTo', arguments]);
        return this;
    };
    Graphics.prototype.bezierCurveTo = function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        this.cmds.push(['bezierCurveTo', arguments]);
        return this;
    };
    Graphics.prototype.quadraticCurveTo = function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        this.cmds.push(['quadraticCurveTo', arguments]);
        return this;
    };
    Graphics.prototype.createRadialGradient = function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        this.cmds.push(['createRadialGradient', arguments]);
        return this;
    };
    Graphics.prototype.createLinearGradient = function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        this.cmds.push(['createLinearGradient', arguments]);
        return this;
    };
    Graphics.prototype.addColorStop = function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        this.cmds.push(['addColorStop', arguments]);
        return this;
    };
    Graphics.prototype.fillGradient = function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        this.cmds.push(['fillGradient']);
        return this;
    };
    Graphics.prototype.arcTo = function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        this.cmds.push(['arcTo', arguments]);
        return this;
    };
    Graphics.prototype.render = function (ctx) {
        var _this = this;
        this.cmds.forEach(function (cmd) {
            var methodName = cmd[0];
            if (assMap[methodName]) {
                ctx[methodName] = cmd[1][0];
            }
            else if (methodName === 'addColorStop') {
                _this.currentGradient && _this.currentGradient.addColorStop(cmd[1][0], cmd[1][1]);
            }
            else if (methodName === 'fillGradient') {
                ctx.fillStyle = _this.currentGradient;
            }
            else {
                var result = ctx[methodName].apply(ctx, Array.prototype.slice.call(cmd[1]));
                if (methodName === 'createRadialGradient' || methodName === 'createLinearGradient') {
                    _this.currentGradient = result;
                }
            }
        });
    };
    return Graphics;
}(node_1.default));
exports.default = Graphics;


/***/ }),

/***/ "./src/node/group.ts":
/*!***************************!*\
  !*** ./src/node/group.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var node_1 = __importDefault(__webpack_require__(/*! ./node */ "./src/node/node.ts"));
var Group = /** @class */ (function (_super) {
    __extends(Group, _super);
    function Group() {
        var _this = _super.call(this) || this;
        _this.children = [];
        _this.mouseChildren = true;
        return _this;
    }
    Group.prototype.add = function () {
        var len = arguments.length;
        for (var i = 0; i < len; i++) {
            var c = arguments[i];
            var parent_1 = c.parent;
            if (parent_1) {
                parent_1.removeChildAt(parent_1.children.indexOf(c));
            }
            this.children.push(c);
            c.parent = this;
        }
    };
    Group.prototype.addChildAt = function (child, index) {
        var par = child.parent;
        par && par.removeChildAt(par.children.indexOf(child));
        child.parent = this;
        this.children.splice(index, 0, child);
    };
    Group.prototype.removeChildAt = function (index) {
        var child = this.children[index];
        if (child) {
            child.parent = null;
        }
        this.children.splice(index, 1);
    };
    Group.prototype.replace = function (current, pre) {
        var index = pre.parent.children.indexOf(pre);
        this.removeChildAt(index);
        this.addChildAt(current, index);
    };
    Group.prototype.remove = function (child) {
        var len = arguments.length;
        var cLen = this.children.length;
        for (var i = 0; i < len; i++) {
            for (var j = 0; j < cLen; j++) {
                if (child.id === this.children[j].id) {
                    child.parent = null;
                    this.children.splice(j, 1);
                    j--;
                    cLen--;
                }
            }
        }
    };
    Group.prototype.empty = function () {
        this.children.forEach(function (child) {
            child.parent = null;
        });
        this.children.length = 0;
    };
    Group.prototype.destroy = function () {
        this.empty();
        this.parent && this.parent.destroy();
    };
    Group.prototype._getObjectsUnderPoint = function (x, y, hitCtx) {
        var ctx = hitCtx;
        if (!this._testMask(this, x, y, ctx)) {
            return null;
        }
        var children = this.children;
        var l = children.length;
        for (var i = l - 1; i >= 0; i--) {
            var child = children[i];
            if (!child.isVisible() || child.ignoreHit) {
                continue;
            }
            if (!this._testMask(child, x, y, ctx)) {
                continue;
            }
            if (child instanceof Group) {
                var result = child._getObjectsUnderPoint(x, y, ctx);
                if (result)
                    return !this.mouseChildren ? this : result;
            }
            else {
                var props = child.getConcatenatedDisplayProps(child._props);
                var mtx = props.matrix;
                if (child.hitBox) {
                    var mtxClone = mtx.clone();
                    child.setBounds(child.x, child.y, child.width, child.height);
                    if (this.checkPointInAABB(x, y, child._getBounds(mtxClone))) {
                        return !this.mouseChildren ? this : child;
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
    };
    Group.prototype._testMask = function (target, x, y, hitCtx) {
        var ctx = hitCtx;
        var mask = target.mask;
        if (!mask) {
            return true;
        }
        var mtx = this._props.matrix;
        var parent = target.parent;
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
    };
    Group.prototype._testHit = function (ctx) {
        return ctx.getImageData(0, 0, 1, 1).data[3] > 1;
    };
    Group.prototype.checkPointInAABB = function (x, y, AABB) {
        var minX = AABB[0];
        if (x < minX)
            return false;
        var minY = AABB[1];
        if (y < minY)
            return false;
        var maxX = minX + AABB[2];
        if (x > maxX)
            return false;
        var maxY = minY + AABB[3];
        if (y > maxY)
            return false;
        return true;
    };
    return Group;
}(node_1.default));
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
var uid_1 = __importDefault(__webpack_require__(/*! ../utils/uid */ "./src/utils/uid.ts"));
var displayProps_1 = __importDefault(__webpack_require__(/*! ../geom/displayProps */ "./src/geom/displayProps.ts"));
var rectangle_1 = __importDefault(__webpack_require__(/*! ../geom/rectangle */ "./src/geom/rectangle.ts"));
var matrix2d_1 = __importDefault(__webpack_require__(/*! ../geom/matrix2d */ "./src/geom/matrix2d.js"));
var _eventListeners = Symbol('eventListeners');
var _captureEventListeners = Symbol('captureEventListeners');
var Node = /** @class */ (function () {
    function Node() {
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
        this.hitBox = false;
        this.ignoreHit = false;
    }
    Object.defineProperty(Node.prototype, "stage", {
        get: function () {
            var o = this;
            while (o.parent) {
                o = o.parent;
            }
            if (o.___instanceof === 'Stage')
                return o;
            return null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "scale", {
        get: function () {
            return this.scaleX;
        },
        set: function (scale) {
            this.scaleX = this.scaleY = scale;
        },
        enumerable: false,
        configurable: true
    });
    Node.prototype.isVisible = function () {
        return this.visible && this.alpha > 0 && this.scaleX !== 0 && this.scaleY !== 0;
    };
    Node.prototype.clip = function (graphics) {
        this.mask = graphics;
    };
    Node.prototype.unclip = function () {
        this.mask = null;
    };
    Node.prototype.setTransform = function (x, y, scaleX, scaleY, rotation, skewX, skewY, regX, regY) {
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
    };
    Node.prototype.getMatrix = function (matrix) {
        var o = this;
        var mtx = matrix || new matrix2d_1.default();
        return (mtx.identity() &&
            mtx.appendTransform(o.x, o.y, o.scaleX, o.scaleY, o.rotation, o.skewX, o.skewY, o.regX, o.regY));
    };
    Node.prototype.getConcatenatedMatrix = function (matrix) {
        var o = this;
        var mtx = this.getMatrix(matrix);
        while ((o = o.parent)) {
            mtx.prependMatrix(o.getMatrix(o._props.matrix));
        }
        return mtx;
    };
    Node.prototype.getConcatenatedDisplayProps = function (props) {
        props = props ? props.identity() : new displayProps_1.default();
        var o = this;
        var mtx = o.getMatrix(props.matrix);
        do {
            props.prepend(o.visible, o.alpha, o.shadow, o.compositeOperation);
            if (o != this) {
                mtx.prependMatrix(o.getMatrix(o._props.matrix));
            }
        } while ((o = o.parent));
        return props;
    };
    Node.prototype.getBounds = function () {
        if (this._bounds) {
            return this._rectangle.copy(this._bounds);
        }
        return null;
    };
    Node.prototype.setBounds = function (x, y, width, height) {
        if (x === null) {
            this._bounds = x;
            return;
        }
        this._bounds = (this._bounds || new rectangle_1.default()).setValues(x, y, width, height);
    };
    Node.prototype.getTransformedBounds = function () {
        return this._getBounds();
    };
    Node.prototype._getBounds = function (matrix, ignoreTransform) {
        return this._transformBounds(this.getBounds(), matrix, ignoreTransform);
    };
    Node.prototype._transformBounds = function (bounds, matrix, ignoreTransform) {
        if (!bounds) {
            return bounds;
        }
        var x = bounds.x, y = bounds.y, width = bounds.width, height = bounds.height, mtx = this._props.matrix;
        mtx = ignoreTransform ? mtx.identity() : this.getMatrix(mtx);
        if (x || y) {
            mtx.appendTransform(0, 0, 1, 1, 0, 0, 0, -x, -y);
        }
        if (matrix) {
            mtx.prependMatrix(matrix);
        }
        var x_a = width * mtx.a, x_b = width * mtx.b;
        var y_c = height * mtx.c, y_d = height * mtx.d;
        var tx = mtx.tx, ty = mtx.ty;
        var minX = tx, maxX = tx, minY = ty, maxY = ty;
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
    };
    Node.prototype.on = function (type, listener, options) {
        this.addEventListener(type, listener, options);
    };
    Node.prototype.off = function (type, listener, options) {
        this.removeEventListener(type, listener, options);
    };
    Node.prototype.addEventListener = function (type, listener, options) {
        if (typeof options === 'boolean')
            options = { capture: options };
        var _a = options || {}, capture = _a.capture, once = _a.once;
        var eventListeners = capture ? _captureEventListeners : _eventListeners;
        this[eventListeners][type] = this[eventListeners][type] || [];
        this[eventListeners][type].push({ listener: listener, once: once });
        return this;
    };
    Node.prototype.removeEventListener = function (type, listener, options) {
        if (typeof options === 'boolean')
            options = { capture: options };
        var capture = (options || {}).capture;
        var eventListeners = capture ? _captureEventListeners : _eventListeners;
        if (this[eventListeners][type]) {
            var listeners = this[eventListeners][type];
            for (var i = 0; i < listeners.length; i++) {
                var _listener = listeners[i].listener;
                if (listener === _listener) {
                    this[eventListeners][type].splice(i, 1);
                    break;
                }
            }
        }
        return this;
    };
    Node.prototype.dispatchEvent = function (event) {
        var _this = this;
        event.target = this;
        var type = event.type;
        var elements = [this];
        var parent = this.parent;
        while (event.bubbles && parent) {
            elements.push(parent);
            parent = parent.parent;
        }
        var _loop_1 = function (i) {
            var element = elements[i];
            var listeners = element[_captureEventListeners] && element[_captureEventListeners][type];
            if (listeners && listeners.length) {
                listeners.forEach(function (_a) {
                    var listener = _a.listener, once = _a.once;
                    listener.call(_this, event);
                    if (once) {
                        element.removeEventListener(event.type, listener, { capture: true });
                    }
                });
            }
            if (!event.bubbles && event.cancelBubble)
                return "break";
        };
        // capture phase
        for (var i = elements.length - 1; i >= 0; i--) {
            var state_1 = _loop_1(i);
            if (state_1 === "break")
                break;
        }
        // bubbling
        if (!event.cancelBubble) {
            var _loop_2 = function (i) {
                var element = elements[i];
                var listeners = element[_eventListeners] && element[_eventListeners][type];
                if (listeners && listeners.length) {
                    listeners.forEach(function (_a) {
                        var listener = _a.listener, once = _a.once;
                        listener.call(_this, event);
                        if (once) {
                            element.removeEventListener(event.type, listener, { capture: false });
                        }
                    });
                }
                if (!event.bubbles || event.cancelBubble)
                    return "break";
            };
            for (var i = 0; i < elements.length; i++) {
                var state_2 = _loop_2(i);
                if (state_2 === "break")
                    break;
            }
        }
    };
    return Node;
}());
exports.default = Node;


/***/ }),

/***/ "./src/node/shape.ts":
/*!***************************!*\
  !*** ./src/node/shape.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var graphics_1 = __importDefault(__webpack_require__(/*! ./graphics */ "./src/node/graphics.ts"));
var Shape = /** @class */ (function (_super) {
    __extends(Shape, _super);
    function Shape() {
        return _super.call(this) || this;
    }
    Shape.prototype.render = function (ctx) {
        this.clear();
        this.draw();
        _super.prototype.render.call(this, ctx);
    };
    return Shape;
}(graphics_1.default));
exports.default = Shape;


/***/ }),

/***/ "./src/node/shape/circle.ts":
/*!**********************************!*\
  !*** ./src/node/shape/circle.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var shape_1 = __importDefault(__webpack_require__(/*! ../shape */ "./src/node/shape.ts"));
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(r, option) {
        var _this = _super.call(this) || this;
        _this.option = option || {};
        _this.r = r;
        _this._dp = Math.PI * 2;
        return _this;
    }
    Circle.prototype.draw = function () {
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
    };
    return Circle;
}(shape_1.default));
exports.default = Circle;


/***/ }),

/***/ "./src/node/shape/rect.ts":
/*!********************************!*\
  !*** ./src/node/shape/rect.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var shape_1 = __importDefault(__webpack_require__(/*! ../shape */ "./src/node/shape.ts"));
var Rect = /** @class */ (function (_super) {
    __extends(Rect, _super);
    function Rect(width, height, option) {
        var _this = _super.call(this) || this;
        _this.width = width;
        _this.height = height;
        _this.option = option || {};
        return _this;
    }
    Rect.prototype.draw = function () {
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
    };
    return Rect;
}(shape_1.default));
exports.default = Rect;


/***/ }),

/***/ "./src/node/stage.ts":
/*!***************************!*\
  !*** ./src/node/stage.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var group_1 = __importDefault(__webpack_require__(/*! ./group */ "./src/node/group.ts"));
var index_1 = __importDefault(__webpack_require__(/*! ../render/index */ "./src/render/index.ts"));
var event_1 = __importDefault(__webpack_require__(/*! ../event/event */ "./src/event/event.ts"));
var Stage = /** @class */ (function (_super) {
    __extends(Stage, _super);
    function Stage(container, width, height) {
        var _this = _super.call(this) || this;
        _this.container = container;
        _this.width = width;
        _this.height = height;
        var ctx = container.getContext('2d');
        // @ts-ignore
        var dpr = wx.getSystemInfoSync().pixelRatio;
        container.width = width * dpr;
        container.height = height * dpr;
        ctx.scale(dpr, dpr);
        _this.dpr = dpr;
        _this.ctx = ctx;
        _this.render = new index_1.default(ctx, container.width, container.height);
        _this.hitCtx = null;
        _this.willDragObject = null;
        _this._overObject = null;
        _this.___instanceof = 'Stage';
        return _this;
    }
    Stage.prototype.update = function () {
        this.render.update(this);
    };
    Stage.prototype.setHitCanvas = function (hitCanvas) {
        var hitCtx = hitCanvas.getContext('2d');
        hitCanvas.width = this.width;
        hitCanvas.height = this.height;
        this.hitCtx = hitCtx;
    };
    Stage.prototype.getTextWidth = function (text, font) {
        this.ctx.font = font;
        return this.ctx.measureText(text).width;
    };
    Stage.prototype.touchStartHandler = function (evt) {
        var p1 = evt.changedTouches[0];
        evt.stageX = Math.round(p1.x * this.scaleX);
        evt.stageY = Math.round(p1.y * this.scaleY);
        var obj = this.getObjectUnderPoint(evt);
        this.willDragObject = obj;
        this._mouseDownX = evt.stageX;
        this._mouseDownY = evt.stageY;
        this.preStageX = evt.stageX;
        this.preStageY = evt.stageY;
        this.__dispatchEvent(obj, evt);
    };
    Stage.prototype.touchMoveHandler = function (evt) {
        var p1 = evt.changedTouches[0];
        evt.stageX = Math.round(p1.x * this.scaleX);
        evt.stageY = Math.round(p1.y * this.scaleY);
        var obj = this.getObjectUnderPoint(evt);
        var mockEvt = new event_1.default();
        mockEvt.stageX = evt.stageX;
        mockEvt.stageY = evt.stageY;
        mockEvt.originalEvent = evt;
        if (this.willDragObject) {
            mockEvt.type = 'drag';
            mockEvt.dx = mockEvt.stageX - this.preStageX;
            mockEvt.dy = mockEvt.stageY - this.preStageY;
            this.preStageX = mockEvt.stageX;
            this.preStageY = mockEvt.stageY;
            this.willDragObject.dispatchEvent(mockEvt);
        }
        if (obj) {
            if (this._overObject === null) {
                this._overObject = obj;
            }
            else {
                if (obj.id !== this._overObject.id) {
                    this._overObject = obj;
                }
                else {
                    this.__dispatchEvent(obj, evt);
                }
            }
        }
        else if (this._overObject) {
            this._overObject = null;
        }
    };
    Stage.prototype.touchEndHandler = function (evt) {
        var p1 = evt.changedTouches[0];
        evt.stageX = Math.round(p1.x * this.scaleX);
        evt.stageY = Math.round(p1.y * this.scaleY);
        var obj = this.getObjectUnderPoint(evt);
        this._mouseUpX = evt.stageX;
        this._mouseUpY = evt.stageY;
        this.willDragObject = null;
        this.preStageX = null;
        this.preStageY = null;
        this.__dispatchEvent(obj, evt);
        if (obj &&
            Math.abs(this._mouseDownX - this._mouseUpX) < 30 &&
            Math.abs(this._mouseDownY - this._mouseUpY) < 30) {
            var mockEvt = new event_1.default();
            mockEvt.stageX = evt.stageX;
            mockEvt.stageY = evt.stageY;
            mockEvt.originalEvent = evt;
            mockEvt.type = 'tap';
            obj.dispatchEvent(mockEvt);
        }
    };
    Stage.prototype.getObjectUnderPoint = function (evt) {
        var x = evt.stageX;
        var y = evt.stageY;
        return this._getObjectsUnderPoint(x, y, this.hitCtx) || this;
    };
    Stage.prototype.__dispatchEvent = function (obj, evt) {
        if (!obj)
            return;
        var mockEvt = new event_1.default();
        mockEvt.stageX = evt.stageX;
        mockEvt.stageY = evt.stageY;
        mockEvt.originalEvent = evt;
        mockEvt.type = evt.type;
        obj.dispatchEvent(mockEvt);
    };
    return Stage;
}(group_1.default));
exports.default = Stage;


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
var group_1 = __importDefault(__webpack_require__(/*! ../node/group */ "./src/node/group.ts"));
var Render = /** @class */ (function () {
    function Render(ctx, width, height) {
        this.ctx = ctx;
        this.width = width;
        this.height = height;
    }
    Render.prototype.update = function (stage) {
        this.clear(this.ctx, this.width, this.height);
        this.render(this.ctx, stage);
    };
    Render.prototype.clear = function (ctx, width, height) {
        ctx.clearRect(0, 0, width, height);
    };
    Render.prototype.render = function (ctx, o) {
        var mtx = o._props.matrix;
        o.getMatrix(mtx);
        if (o.children) {
            var list = o.children.slice(0);
            var l = list.length;
            for (var i = 0; i < l; i++) {
                var child = list[i];
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
    };
    Render.prototype._render = function (ctx, o, mtx) {
        var mask = o.mask;
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
        var props = o.getConcatenatedDisplayProps(o._props);
        mtx = props.matrix;
        ctx.globalAlpha *= o._props.alpha;
        if (o.compositeOperation) {
            ctx.globalCompositeOperation = o.compositeOperation;
        }
        if (o.shadow) {
            this._applyShadow(ctx, o.shadow);
        }
        if (o instanceof group_1.default) {
            var list = o.children.slice(0);
            var l = list.length;
            for (var i = 0; i < l; i++) {
                ctx.save();
                this._render(ctx, list[i]);
                ctx.restore();
            }
        }
        else {
            o.render(ctx);
        }
    };
    Render.prototype._applyShadow = function (ctx, shadow) {
        shadow = shadow;
        ctx.shadowColor = shadow.color;
        ctx.shadowOffsetX = shadow.offsetX;
        ctx.shadowOffsetY = shadow.offsetY;
        ctx.shadowBlur = shadow.blur;
    };
    return Render;
}());
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
var UID = {
    _nextID: 0,
    get: function () {
        return UID._nextID++;
    }
};
exports.default = UID;


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9taW5pUHJvZ3JhbXNSQy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vbWluaVByb2dyYW1zUkMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbWluaVByb2dyYW1zUkMvLi9zcmMvZXZlbnQvZXZlbnQudHMiLCJ3ZWJwYWNrOi8vbWluaVByb2dyYW1zUkMvLi9zcmMvZ2VvbS9kaXNwbGF5UHJvcHMudHMiLCJ3ZWJwYWNrOi8vbWluaVByb2dyYW1zUkMvLi9zcmMvZ2VvbS9tYXRyaXgyZC5qcyIsIndlYnBhY2s6Ly9taW5pUHJvZ3JhbXNSQy8uL3NyYy9nZW9tL3JlY3RhbmdsZS50cyIsIndlYnBhY2s6Ly9taW5pUHJvZ3JhbXNSQy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9taW5pUHJvZ3JhbXNSQy8uL3NyYy9ub2RlL2dyYXBoaWNzLnRzIiwid2VicGFjazovL21pbmlQcm9ncmFtc1JDLy4vc3JjL25vZGUvZ3JvdXAudHMiLCJ3ZWJwYWNrOi8vbWluaVByb2dyYW1zUkMvLi9zcmMvbm9kZS9ub2RlLnRzIiwid2VicGFjazovL21pbmlQcm9ncmFtc1JDLy4vc3JjL25vZGUvc2hhcGUudHMiLCJ3ZWJwYWNrOi8vbWluaVByb2dyYW1zUkMvLi9zcmMvbm9kZS9zaGFwZS9jaXJjbGUudHMiLCJ3ZWJwYWNrOi8vbWluaVByb2dyYW1zUkMvLi9zcmMvbm9kZS9zaGFwZS9yZWN0LnRzIiwid2VicGFjazovL21pbmlQcm9ncmFtc1JDLy4vc3JjL25vZGUvc3RhZ2UudHMiLCJ3ZWJwYWNrOi8vbWluaVByb2dyYW1zUkMvLi9zcmMvcmVuZGVyL2luZGV4LnRzIiwid2VicGFjazovL21pbmlQcm9ncmFtc1JDLy4vc3JjL3V0aWxzL3VpZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUMvQ2E7QUFDYjtBQUNBLDRDQUE0QztBQUM1QztBQUNBLDhDQUE4QyxjQUFjO0FBQzVELGlDQUFpQyxtQkFBTyxDQUFDLDBDQUFZO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7OztBQzNDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qjs7QUFFekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixZQUFZLFNBQVM7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFlBQVksU0FBUztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsWUFBWSxTQUFTO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQixZQUFZLFNBQVM7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCLFlBQVksU0FBUztBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFlBQVksU0FBUztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLHdEQUF3RCx1REFBdUQ7QUFDL0csa0JBQWtCLHVDQUF1QyxZQUFZO0FBQ3JFO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsWUFBWSxTQUFTO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsWUFBWSxTQUFTO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixZQUFZLFNBQVM7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixZQUFZLFNBQVM7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixZQUFZLFNBQVM7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVksU0FBUztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWSxTQUFTO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQixZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsZUFBZTtBQUMxQixZQUFZLE1BQU07QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixZQUFZLE9BQU87QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCLFlBQVksU0FBUztBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLFNBQVM7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWSxPQUFPO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVlLHVFQUFRLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUM3aEJYO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDbkRhO0FBQ2I7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCw4QkFBOEIsbUJBQU8sQ0FBQyw2Q0FBZ0I7QUFDdEQsOEJBQThCLG1CQUFPLENBQUMseUNBQWM7QUFDcEQsOEJBQThCLG1CQUFPLENBQUMseUNBQWM7QUFDcEQsaUNBQWlDLG1CQUFPLENBQUMsK0NBQWlCO0FBQzFELDZCQUE2QixtQkFBTyxDQUFDLG1EQUFtQjtBQUN4RCwrQkFBK0IsbUJBQU8sQ0FBQyx1REFBcUI7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbkJhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsY0FBYyxnQkFBZ0Isc0NBQXNDLGlCQUFpQixFQUFFO0FBQ3ZGLDZCQUE2Qix1REFBdUQ7QUFDcEY7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCw2QkFBNkIsbUJBQU8sQ0FBQyxrQ0FBUTtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix1QkFBdUI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsdUJBQXVCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHVCQUF1QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix1QkFBdUI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsdUJBQXVCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHVCQUF1QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix1QkFBdUI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsdUJBQXVCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHVCQUF1QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix1QkFBdUI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsdUJBQXVCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHVCQUF1QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix1QkFBdUI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsdUJBQXVCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHVCQUF1QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix1QkFBdUI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsdUJBQXVCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHVCQUF1QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix1QkFBdUI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsdUJBQXVCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHVCQUF1QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix1QkFBdUI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsdUJBQXVCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHVCQUF1QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix1QkFBdUI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsdUJBQXVCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHVCQUF1QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7OztBQ25SYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGNBQWMsZ0JBQWdCLHNDQUFzQyxpQkFBaUIsRUFBRTtBQUN2Riw2QkFBNkIsdURBQXVEO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsNkJBQTZCLG1CQUFPLENBQUMsa0NBQVE7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsU0FBUztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsU0FBUztBQUNoQywyQkFBMkIsVUFBVTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsUUFBUTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7OztB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QUFjO0FBQzVELDhCQUE4QixtQkFBTyxDQUFDLDBDQUFlO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLE9BQU87QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLE9BQU87QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7OztBQ3ZGYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJtaW5pUHJvZ3JhbXNSQ1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJtaW5pUHJvZ3JhbXNSQ1wiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgX3R5cGUgPSBTeW1ib2woJ3R5cGUnKTtcclxudmFyIF9idWJibGVzID0gU3ltYm9sKCdidWJibGVzJyk7XHJcbnZhciBfb3JpZ2luYWxFdmVudCA9IFN5bWJvbCgnX29yaWdpbmFsRXZlbnQnKTtcclxudmFyIEV2ZW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gRXZlbnQoKSB7XHJcbiAgICAgICAgdGhpc1tfdHlwZV0gPSAnJztcclxuICAgICAgICB0aGlzW19vcmlnaW5hbEV2ZW50XSA9IG51bGw7XHJcbiAgICAgICAgdGhpc1tfYnViYmxlc10gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuY2FuY2VsQnViYmxlID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBFdmVudC5wcm90b3R5cGUuc3RvcFByb3BhZ2F0aW9uID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuY2FuY2VsQnViYmxlID0gdHJ1ZTtcclxuICAgIH07XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRXZlbnQucHJvdG90eXBlLCBcInR5cGVcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpc1tfdHlwZV07XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzW190eXBlXSA9IHZhbHVlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShFdmVudC5wcm90b3R5cGUsIFwib3JpZ2luYWxFdmVudFwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzW19vcmlnaW5hbEV2ZW50XTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXNbX29yaWdpbmFsRXZlbnRdID0gdmFsdWU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEV2ZW50LnByb3RvdHlwZSwgXCJidWJibGVzXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXNbX2J1YmJsZXNdO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpc1tfYnViYmxlc10gPSB2YWx1ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gRXZlbnQ7XHJcbn0oKSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IEV2ZW50O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgbWF0cml4MmRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9tYXRyaXgyZFwiKSk7XHJcbnZhciBEaXNwbGF5UHJvcHMgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBEaXNwbGF5UHJvcHModmlzaWJsZSwgYWxwaGEsIHNoYWRvdywgY29tcG9zaXRlT3BlcmF0aW9uLCBtYXRyaXgpIHtcclxuICAgICAgICB0aGlzLnNldFZhbHVlKHZpc2libGUsIGFscGhhLCBzaGFkb3csIGNvbXBvc2l0ZU9wZXJhdGlvbiwgbWF0cml4KTtcclxuICAgIH1cclxuICAgIERpc3BsYXlQcm9wcy5wcm90b3R5cGUuc2V0VmFsdWUgPSBmdW5jdGlvbiAodmlzaWJsZSwgYWxwaGEsIHNoYWRvdywgY29tcG9zaXRlT3BlcmF0aW9uLCBtYXRyaXgpIHtcclxuICAgICAgICB0aGlzLnZpc2libGUgPSB2aXNpYmxlID09IG51bGwgPyB0cnVlIDogISF2aXNpYmxlO1xyXG4gICAgICAgIHRoaXMuYWxwaGEgPSBhbHBoYSA9PSBudWxsID8gMSA6IGFscGhhO1xyXG4gICAgICAgIHRoaXMuc2hhZG93ID0gc2hhZG93IHx8IG51bGw7XHJcbiAgICAgICAgdGhpcy5jb21wb3NpdGVPcGVyYXRpb24gPSBjb21wb3NpdGVPcGVyYXRpb24gfHwgbnVsbDtcclxuICAgICAgICB0aGlzLm1hdHJpeCA9IG1hdHJpeCB8fCAodGhpcy5tYXRyaXggJiYgdGhpcy5tYXRyaXguaWRlbnRpdHkoKSkgfHwgbmV3IG1hdHJpeDJkXzEuZGVmYXVsdCgpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIERpc3BsYXlQcm9wcy5wcm90b3R5cGUuYXBwZW5kID0gZnVuY3Rpb24gKHZpc2libGUsIGFscGhhLCBzaGFkb3csIGNvbXBvc2l0ZU9wZXJhdGlvbiwgbWF0cml4KSB7XHJcbiAgICAgICAgdGhpcy5hbHBoYSAqPSBhbHBoYTtcclxuICAgICAgICB0aGlzLnNoYWRvdyA9IHNoYWRvdyB8fCB0aGlzLnNoYWRvdztcclxuICAgICAgICB0aGlzLmNvbXBvc2l0ZU9wZXJhdGlvbiA9IGNvbXBvc2l0ZU9wZXJhdGlvbiB8fCB0aGlzLmNvbXBvc2l0ZU9wZXJhdGlvbjtcclxuICAgICAgICB0aGlzLnZpc2libGUgPSB0aGlzLnZpc2libGUgJiYgdmlzaWJsZTtcclxuICAgICAgICBtYXRyaXggJiYgdGhpcy5tYXRyaXguYXBwZW5kTWF0cml4KG1hdHJpeCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgRGlzcGxheVByb3BzLnByb3RvdHlwZS5wcmVwZW5kID0gZnVuY3Rpb24gKHZpc2libGUsIGFscGhhLCBzaGFkb3csIGNvbXBvc2l0ZU9wZXJhdGlvbiwgbWF0cml4KSB7XHJcbiAgICAgICAgdGhpcy5hbHBoYSAqPSBhbHBoYTtcclxuICAgICAgICB0aGlzLnNoYWRvdyA9IHRoaXMuc2hhZG93IHx8IHNoYWRvdztcclxuICAgICAgICB0aGlzLmNvbXBvc2l0ZU9wZXJhdGlvbiA9IHRoaXMuY29tcG9zaXRlT3BlcmF0aW9uIHx8IGNvbXBvc2l0ZU9wZXJhdGlvbjtcclxuICAgICAgICB0aGlzLnZpc2libGUgPSB0aGlzLnZpc2libGUgJiYgdmlzaWJsZTtcclxuICAgICAgICBtYXRyaXggJiYgdGhpcy5tYXRyaXgucHJlcGVuZE1hdHJpeChtYXRyaXgpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIERpc3BsYXlQcm9wcy5wcm90b3R5cGUuaWRlbnRpdHkgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmFscGhhID0gMTtcclxuICAgICAgICB0aGlzLnNoYWRvdyA9IHRoaXMuY29tcG9zaXRlT3BlcmF0aW9uID0gbnVsbDtcclxuICAgICAgICB0aGlzLm1hdHJpeC5pZGVudGl0eSgpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBEaXNwbGF5UHJvcHM7XHJcbn0oKSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IERpc3BsYXlQcm9wcztcclxuIiwiLypcclxuICogTWF0cml4MkRcclxuICogVmlzaXQgaHR0cDovL2NyZWF0ZWpzLmNvbS8gZm9yIGRvY3VtZW50YXRpb24sIHVwZGF0ZXMgYW5kIGV4YW1wbGVzLlxyXG4gKlxyXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTAgZ3NraW5uZXIuY29tLCBpbmMuXHJcbiAqXHJcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uXHJcbiAqIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uXHJcbiAqIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dFxyXG4gKiByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSxcclxuICogY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcclxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlXHJcbiAqIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nXHJcbiAqIGNvbmRpdGlvbnM6XHJcbiAqXHJcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlXHJcbiAqIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG4gKlxyXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELFxyXG4gKiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVNcclxuICogT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkRcclxuICogTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFRcclxuICogSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksXHJcbiAqIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lOR1xyXG4gKiBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SXHJcbiAqIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cclxuICovXHJcblxyXG4vLyBjb25zdHJ1Y3RvcjpcclxuLyoqXHJcbiAqIFJlcHJlc2VudHMgYW4gYWZmaW5lIHRyYW5zZm9ybWF0aW9uIG1hdHJpeCwgYW5kIHByb3ZpZGVzIHRvb2xzIGZvciBjb25zdHJ1Y3RpbmcgYW5kIGNvbmNhdGVuYXRpbmcgbWF0cmljZXMuXHJcbiAqXHJcbiAqIFRoaXMgbWF0cml4IGNhbiBiZSB2aXN1YWxpemVkIGFzOlxyXG4gKlxyXG4gKiBcdFsgYSAgYyAgdHhcclxuICogXHQgIGIgIGQgIHR5XHJcbiAqIFx0ICAwICAwICAxICBdXHJcbiAqXHJcbiAqIE5vdGUgdGhlIGxvY2F0aW9ucyBvZiBiIGFuZCBjLlxyXG4gKlxyXG4gKiBAY2xhc3MgTWF0cml4MkRcclxuICogQHBhcmFtIHtOdW1iZXJ9IFthPTFdIFNwZWNpZmllcyB0aGUgYSBwcm9wZXJ0eSBmb3IgdGhlIG5ldyBtYXRyaXguXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBbYj0wXSBTcGVjaWZpZXMgdGhlIGIgcHJvcGVydHkgZm9yIHRoZSBuZXcgbWF0cml4LlxyXG4gKiBAcGFyYW0ge051bWJlcn0gW2M9MF0gU3BlY2lmaWVzIHRoZSBjIHByb3BlcnR5IGZvciB0aGUgbmV3IG1hdHJpeC5cclxuICogQHBhcmFtIHtOdW1iZXJ9IFtkPTFdIFNwZWNpZmllcyB0aGUgZCBwcm9wZXJ0eSBmb3IgdGhlIG5ldyBtYXRyaXguXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBbdHg9MF0gU3BlY2lmaWVzIHRoZSB0eCBwcm9wZXJ0eSBmb3IgdGhlIG5ldyBtYXRyaXguXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBbdHk9MF0gU3BlY2lmaWVzIHRoZSB0eSBwcm9wZXJ0eSBmb3IgdGhlIG5ldyBtYXRyaXguXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKiovXHJcbmZ1bmN0aW9uIE1hdHJpeDJEKGEsIGIsIGMsIGQsIHR4LCB0eSkge1xyXG4gIHRoaXMuc2V0VmFsdWVzKGEsIGIsIGMsIGQsIHR4LCB0eSk7XHJcblxyXG4gIC8vIHB1YmxpYyBwcm9wZXJ0aWVzOlxyXG4gIC8vIGFzc2lnbmVkIGluIHRoZSBzZXRWYWx1ZXMgbWV0aG9kLlxyXG4gIC8qKlxyXG4gICAqIFBvc2l0aW9uICgwLCAwKSBpbiBhIDN4MyBhZmZpbmUgdHJhbnNmb3JtYXRpb24gbWF0cml4LlxyXG4gICAqIEBwcm9wZXJ0eSBhXHJcbiAgICogQHR5cGUgTnVtYmVyXHJcbiAgICoqL1xyXG5cclxuICAvKipcclxuICAgKiBQb3NpdGlvbiAoMCwgMSkgaW4gYSAzeDMgYWZmaW5lIHRyYW5zZm9ybWF0aW9uIG1hdHJpeC5cclxuICAgKiBAcHJvcGVydHkgYlxyXG4gICAqIEB0eXBlIE51bWJlclxyXG4gICAqKi9cclxuXHJcbiAgLyoqXHJcbiAgICogUG9zaXRpb24gKDEsIDApIGluIGEgM3gzIGFmZmluZSB0cmFuc2Zvcm1hdGlvbiBtYXRyaXguXHJcbiAgICogQHByb3BlcnR5IGNcclxuICAgKiBAdHlwZSBOdW1iZXJcclxuICAgKiovXHJcblxyXG4gIC8qKlxyXG4gICAqIFBvc2l0aW9uICgxLCAxKSBpbiBhIDN4MyBhZmZpbmUgdHJhbnNmb3JtYXRpb24gbWF0cml4LlxyXG4gICAqIEBwcm9wZXJ0eSBkXHJcbiAgICogQHR5cGUgTnVtYmVyXHJcbiAgICoqL1xyXG5cclxuICAvKipcclxuICAgKiBQb3NpdGlvbiAoMiwgMCkgaW4gYSAzeDMgYWZmaW5lIHRyYW5zZm9ybWF0aW9uIG1hdHJpeC5cclxuICAgKiBAcHJvcGVydHkgdHhcclxuICAgKiBAdHlwZSBOdW1iZXJcclxuICAgKiovXHJcblxyXG4gIC8qKlxyXG4gICAqIFBvc2l0aW9uICgyLCAxKSBpbiBhIDN4MyBhZmZpbmUgdHJhbnNmb3JtYXRpb24gbWF0cml4LlxyXG4gICAqIEBwcm9wZXJ0eSB0eVxyXG4gICAqIEB0eXBlIE51bWJlclxyXG4gICAqKi9cclxufVxyXG52YXIgcCA9IE1hdHJpeDJELnByb3RvdHlwZTtcclxuXHJcbi8vIGNvbnN0YW50czpcclxuLyoqXHJcbiAqIE11bHRpcGxpZXIgZm9yIGNvbnZlcnRpbmcgZGVncmVlcyB0byByYWRpYW5zLiBVc2VkIGludGVybmFsbHkgYnkgTWF0cml4MkQuXHJcbiAqIEBwcm9wZXJ0eSBERUdfVE9fUkFEXHJcbiAqIEBzdGF0aWNcclxuICogQGZpbmFsXHJcbiAqIEB0eXBlIE51bWJlclxyXG4gKiBAcmVhZG9ubHlcclxuICoqL1xyXG5NYXRyaXgyRC5ERUdfVE9fUkFEID0gTWF0aC5QSSAvIDE4MDtcclxuXHJcbi8vIHN0YXRpYyBwdWJsaWMgcHJvcGVydGllczpcclxuLyoqXHJcbiAqIEFuIGlkZW50aXR5IG1hdHJpeCwgcmVwcmVzZW50aW5nIGEgbnVsbCB0cmFuc2Zvcm1hdGlvbi5cclxuICogQHByb3BlcnR5IGlkZW50aXR5XHJcbiAqIEBzdGF0aWNcclxuICogQHR5cGUgTWF0cml4MkRcclxuICogQHJlYWRvbmx5XHJcbiAqKi9cclxuTWF0cml4MkQuaWRlbnRpdHkgPSBudWxsOyAvLyBzZXQgYXQgYm90dG9tIG9mIGNsYXNzIGRlZmluaXRpb24uXHJcblxyXG4vLyBwdWJsaWMgbWV0aG9kczpcclxuLyoqXHJcbiAqIFNldHMgdGhlIHNwZWNpZmllZCB2YWx1ZXMgb24gdGhpcyBpbnN0YW5jZS5cclxuICogQG1ldGhvZCBzZXRWYWx1ZXNcclxuICogQHBhcmFtIHtOdW1iZXJ9IFthPTFdIFNwZWNpZmllcyB0aGUgYSBwcm9wZXJ0eSBmb3IgdGhlIG5ldyBtYXRyaXguXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBbYj0wXSBTcGVjaWZpZXMgdGhlIGIgcHJvcGVydHkgZm9yIHRoZSBuZXcgbWF0cml4LlxyXG4gKiBAcGFyYW0ge051bWJlcn0gW2M9MF0gU3BlY2lmaWVzIHRoZSBjIHByb3BlcnR5IGZvciB0aGUgbmV3IG1hdHJpeC5cclxuICogQHBhcmFtIHtOdW1iZXJ9IFtkPTFdIFNwZWNpZmllcyB0aGUgZCBwcm9wZXJ0eSBmb3IgdGhlIG5ldyBtYXRyaXguXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBbdHg9MF0gU3BlY2lmaWVzIHRoZSB0eCBwcm9wZXJ0eSBmb3IgdGhlIG5ldyBtYXRyaXguXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBbdHk9MF0gU3BlY2lmaWVzIHRoZSB0eSBwcm9wZXJ0eSBmb3IgdGhlIG5ldyBtYXRyaXguXHJcbiAqIEByZXR1cm4ge01hdHJpeDJEfSBUaGlzIGluc3RhbmNlLiBVc2VmdWwgZm9yIGNoYWluaW5nIG1ldGhvZCBjYWxscy5cclxuICovXHJcbnAuc2V0VmFsdWVzID0gZnVuY3Rpb24gKGEsIGIsIGMsIGQsIHR4LCB0eSkge1xyXG4gIC8vIGRvbid0IGZvcmdldCB0byB1cGRhdGUgZG9jcyBpbiB0aGUgY29uc3RydWN0b3IgaWYgdGhlc2UgY2hhbmdlOlxyXG4gIHRoaXMuYSA9IGEgPT0gbnVsbCA/IDEgOiBhO1xyXG4gIHRoaXMuYiA9IGIgfHwgMDtcclxuICB0aGlzLmMgPSBjIHx8IDA7XHJcbiAgdGhpcy5kID0gZCA9PSBudWxsID8gMSA6IGQ7XHJcbiAgdGhpcy50eCA9IHR4IHx8IDA7XHJcbiAgdGhpcy50eSA9IHR5IHx8IDA7XHJcbiAgcmV0dXJuIHRoaXM7XHJcbn07XHJcblxyXG4vKipcclxuICogQXBwZW5kcyB0aGUgc3BlY2lmaWVkIG1hdHJpeCBwcm9wZXJ0aWVzIHRvIHRoaXMgbWF0cml4LiBBbGwgcGFyYW1ldGVycyBhcmUgcmVxdWlyZWQuXHJcbiAqIFRoaXMgaXMgdGhlIGVxdWl2YWxlbnQgb2YgbXVsdGlwbHlpbmcgYCh0aGlzIG1hdHJpeCkgKiAoc3BlY2lmaWVkIG1hdHJpeClgLlxyXG4gKiBAbWV0aG9kIGFwcGVuZFxyXG4gKiBAcGFyYW0ge051bWJlcn0gYVxyXG4gKiBAcGFyYW0ge051bWJlcn0gYlxyXG4gKiBAcGFyYW0ge051bWJlcn0gY1xyXG4gKiBAcGFyYW0ge051bWJlcn0gZFxyXG4gKiBAcGFyYW0ge051bWJlcn0gdHhcclxuICogQHBhcmFtIHtOdW1iZXJ9IHR5XHJcbiAqIEByZXR1cm4ge01hdHJpeDJEfSBUaGlzIG1hdHJpeC4gVXNlZnVsIGZvciBjaGFpbmluZyBtZXRob2QgY2FsbHMuXHJcbiAqKi9cclxucC5hcHBlbmQgPSBmdW5jdGlvbiAoYSwgYiwgYywgZCwgdHgsIHR5KSB7XHJcbiAgdmFyIGExID0gdGhpcy5hO1xyXG4gIHZhciBiMSA9IHRoaXMuYjtcclxuICB2YXIgYzEgPSB0aGlzLmM7XHJcbiAgdmFyIGQxID0gdGhpcy5kO1xyXG4gIGlmIChhICE9IDEgfHwgYiAhPSAwIHx8IGMgIT0gMCB8fCBkICE9IDEpIHtcclxuICAgIHRoaXMuYSA9IGExICogYSArIGMxICogYjtcclxuICAgIHRoaXMuYiA9IGIxICogYSArIGQxICogYjtcclxuICAgIHRoaXMuYyA9IGExICogYyArIGMxICogZDtcclxuICAgIHRoaXMuZCA9IGIxICogYyArIGQxICogZDtcclxuICB9XHJcbiAgdGhpcy50eCA9IGExICogdHggKyBjMSAqIHR5ICsgdGhpcy50eDtcclxuICB0aGlzLnR5ID0gYjEgKiB0eCArIGQxICogdHkgKyB0aGlzLnR5O1xyXG4gIHJldHVybiB0aGlzO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFByZXBlbmRzIHRoZSBzcGVjaWZpZWQgbWF0cml4IHByb3BlcnRpZXMgdG8gdGhpcyBtYXRyaXguXHJcbiAqIFRoaXMgaXMgdGhlIGVxdWl2YWxlbnQgb2YgbXVsdGlwbHlpbmcgYChzcGVjaWZpZWQgbWF0cml4KSAqICh0aGlzIG1hdHJpeClgLlxyXG4gKiBBbGwgcGFyYW1ldGVycyBhcmUgcmVxdWlyZWQuXHJcbiAqIEBtZXRob2QgcHJlcGVuZFxyXG4gKiBAcGFyYW0ge051bWJlcn0gYVxyXG4gKiBAcGFyYW0ge051bWJlcn0gYlxyXG4gKiBAcGFyYW0ge051bWJlcn0gY1xyXG4gKiBAcGFyYW0ge051bWJlcn0gZFxyXG4gKiBAcGFyYW0ge051bWJlcn0gdHhcclxuICogQHBhcmFtIHtOdW1iZXJ9IHR5XHJcbiAqIEByZXR1cm4ge01hdHJpeDJEfSBUaGlzIG1hdHJpeC4gVXNlZnVsIGZvciBjaGFpbmluZyBtZXRob2QgY2FsbHMuXHJcbiAqKi9cclxucC5wcmVwZW5kID0gZnVuY3Rpb24gKGEsIGIsIGMsIGQsIHR4LCB0eSkge1xyXG4gIHZhciBhMSA9IHRoaXMuYTtcclxuICB2YXIgYzEgPSB0aGlzLmM7XHJcbiAgdmFyIHR4MSA9IHRoaXMudHg7XHJcblxyXG4gIHRoaXMuYSA9IGEgKiBhMSArIGMgKiB0aGlzLmI7XHJcbiAgdGhpcy5iID0gYiAqIGExICsgZCAqIHRoaXMuYjtcclxuICB0aGlzLmMgPSBhICogYzEgKyBjICogdGhpcy5kO1xyXG4gIHRoaXMuZCA9IGIgKiBjMSArIGQgKiB0aGlzLmQ7XHJcbiAgdGhpcy50eCA9IGEgKiB0eDEgKyBjICogdGhpcy50eSArIHR4O1xyXG4gIHRoaXMudHkgPSBiICogdHgxICsgZCAqIHRoaXMudHkgKyB0eTtcclxuICByZXR1cm4gdGhpcztcclxufTtcclxuXHJcbi8qKlxyXG4gKiBBcHBlbmRzIHRoZSBzcGVjaWZpZWQgbWF0cml4IHRvIHRoaXMgbWF0cml4LlxyXG4gKiBUaGlzIGlzIHRoZSBlcXVpdmFsZW50IG9mIG11bHRpcGx5aW5nIGAodGhpcyBtYXRyaXgpICogKHNwZWNpZmllZCBtYXRyaXgpYC5cclxuICogQG1ldGhvZCBhcHBlbmRNYXRyaXhcclxuICogQHBhcmFtIHtNYXRyaXgyRH0gbWF0cml4XHJcbiAqIEByZXR1cm4ge01hdHJpeDJEfSBUaGlzIG1hdHJpeC4gVXNlZnVsIGZvciBjaGFpbmluZyBtZXRob2QgY2FsbHMuXHJcbiAqKi9cclxucC5hcHBlbmRNYXRyaXggPSBmdW5jdGlvbiAobWF0cml4KSB7XHJcbiAgcmV0dXJuIHRoaXMuYXBwZW5kKG1hdHJpeC5hLCBtYXRyaXguYiwgbWF0cml4LmMsIG1hdHJpeC5kLCBtYXRyaXgudHgsIG1hdHJpeC50eSk7XHJcbn07XHJcblxyXG4vKipcclxuICogUHJlcGVuZHMgdGhlIHNwZWNpZmllZCBtYXRyaXggdG8gdGhpcyBtYXRyaXguXHJcbiAqIFRoaXMgaXMgdGhlIGVxdWl2YWxlbnQgb2YgbXVsdGlwbHlpbmcgYChzcGVjaWZpZWQgbWF0cml4KSAqICh0aGlzIG1hdHJpeClgLlxyXG4gKiBGb3IgZXhhbXBsZSwgeW91IGNvdWxkIGNhbGN1bGF0ZSB0aGUgY29tYmluZWQgdHJhbnNmb3JtYXRpb24gZm9yIGEgY2hpbGQgb2JqZWN0IHVzaW5nOlxyXG4gKlxyXG4gKiBcdHZhciBvID0gbXlEaXNwbGF5T2JqZWN0O1xyXG4gKiBcdHZhciBtdHggPSBvLmdldE1hdHJpeCgpO1xyXG4gKiBcdHdoaWxlIChvID0gby5wYXJlbnQpIHtcclxuICogXHRcdC8vIHByZXBlbmQgZWFjaCBwYXJlbnQncyB0cmFuc2Zvcm1hdGlvbiBpbiB0dXJuOlxyXG4gKiBcdFx0by5wcmVwZW5kTWF0cml4KG8uZ2V0TWF0cml4KCkpO1xyXG4gKiBcdH1cclxuICogQG1ldGhvZCBwcmVwZW5kTWF0cml4XHJcbiAqIEBwYXJhbSB7TWF0cml4MkR9IG1hdHJpeFxyXG4gKiBAcmV0dXJuIHtNYXRyaXgyRH0gVGhpcyBtYXRyaXguIFVzZWZ1bCBmb3IgY2hhaW5pbmcgbWV0aG9kIGNhbGxzLlxyXG4gKiovXHJcbnAucHJlcGVuZE1hdHJpeCA9IGZ1bmN0aW9uIChtYXRyaXgpIHtcclxuICByZXR1cm4gdGhpcy5wcmVwZW5kKG1hdHJpeC5hLCBtYXRyaXguYiwgbWF0cml4LmMsIG1hdHJpeC5kLCBtYXRyaXgudHgsIG1hdHJpeC50eSk7XHJcbn07XHJcblxyXG4vKipcclxuICogR2VuZXJhdGVzIG1hdHJpeCBwcm9wZXJ0aWVzIGZyb20gdGhlIHNwZWNpZmllZCBkaXNwbGF5IG9iamVjdCB0cmFuc2Zvcm0gcHJvcGVydGllcywgYW5kIGFwcGVuZHMgdGhlbSB0byB0aGlzIG1hdHJpeC5cclxuICogRm9yIGV4YW1wbGUsIHlvdSBjYW4gdXNlIHRoaXMgdG8gZ2VuZXJhdGUgYSBtYXRyaXggcmVwcmVzZW50aW5nIHRoZSB0cmFuc2Zvcm1hdGlvbnMgb2YgYSBkaXNwbGF5IG9iamVjdDpcclxuICpcclxuICogXHR2YXIgbXR4ID0gbmV3IGNyZWF0ZWpzLk1hdHJpeDJEKCk7XHJcbiAqIFx0bXR4LmFwcGVuZFRyYW5zZm9ybShvLngsIG8ueSwgby5zY2FsZVgsIG8uc2NhbGVZLCBvLnJvdGF0aW9uKTtcclxuICogQG1ldGhvZCBhcHBlbmRUcmFuc2Zvcm1cclxuICogQHBhcmFtIHtOdW1iZXJ9IHhcclxuICogQHBhcmFtIHtOdW1iZXJ9IHlcclxuICogQHBhcmFtIHtOdW1iZXJ9IHNjYWxlWFxyXG4gKiBAcGFyYW0ge051bWJlcn0gc2NhbGVZXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSByb3RhdGlvblxyXG4gKiBAcGFyYW0ge051bWJlcn0gc2tld1hcclxuICogQHBhcmFtIHtOdW1iZXJ9IHNrZXdZXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSByZWdYIE9wdGlvbmFsLlxyXG4gKiBAcGFyYW0ge051bWJlcn0gcmVnWSBPcHRpb25hbC5cclxuICogQHJldHVybiB7TWF0cml4MkR9IFRoaXMgbWF0cml4LiBVc2VmdWwgZm9yIGNoYWluaW5nIG1ldGhvZCBjYWxscy5cclxuICoqL1xyXG5wLmFwcGVuZFRyYW5zZm9ybSA9IGZ1bmN0aW9uICh4LCB5LCBzY2FsZVgsIHNjYWxlWSwgcm90YXRpb24sIHNrZXdYLCBza2V3WSwgcmVnWCwgcmVnWSkge1xyXG4gIGlmIChyb3RhdGlvbiAlIDM2MCkge1xyXG4gICAgdmFyIHIgPSByb3RhdGlvbiAqIE1hdHJpeDJELkRFR19UT19SQUQ7XHJcbiAgICB2YXIgY29zID0gTWF0aC5jb3Mocik7XHJcbiAgICB2YXIgc2luID0gTWF0aC5zaW4ocik7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvcyA9IDE7XHJcbiAgICBzaW4gPSAwO1xyXG4gIH1cclxuXHJcbiAgaWYgKHNrZXdYIHx8IHNrZXdZKSB7XHJcbiAgICAvLyBUT0RPOiBjYW4gdGhpcyBiZSBjb21iaW5lZCBpbnRvIGEgc2luZ2xlIGFwcGVuZCBvcGVyYXRpb24/XHJcbiAgICBza2V3WCAqPSBNYXRyaXgyRC5ERUdfVE9fUkFEO1xyXG4gICAgc2tld1kgKj0gTWF0cml4MkQuREVHX1RPX1JBRDtcclxuICAgIHRoaXMuYXBwZW5kKE1hdGguY29zKHNrZXdZKSwgTWF0aC5zaW4oc2tld1kpLCAtTWF0aC5zaW4oc2tld1gpLCBNYXRoLmNvcyhza2V3WCksIHgsIHkpO1xyXG4gICAgdGhpcy5hcHBlbmQoY29zICogc2NhbGVYLCBzaW4gKiBzY2FsZVgsIC1zaW4gKiBzY2FsZVksIGNvcyAqIHNjYWxlWSwgMCwgMCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHRoaXMuYXBwZW5kKGNvcyAqIHNjYWxlWCwgc2luICogc2NhbGVYLCAtc2luICogc2NhbGVZLCBjb3MgKiBzY2FsZVksIHgsIHkpO1xyXG4gIH1cclxuXHJcbiAgaWYgKHJlZ1ggfHwgcmVnWSkge1xyXG4gICAgLy8gYXBwZW5kIHRoZSByZWdpc3RyYXRpb24gb2Zmc2V0OlxyXG4gICAgdGhpcy50eCAtPSByZWdYICogdGhpcy5hICsgcmVnWSAqIHRoaXMuYztcclxuICAgIHRoaXMudHkgLT0gcmVnWCAqIHRoaXMuYiArIHJlZ1kgKiB0aGlzLmQ7XHJcbiAgfVxyXG4gIHJldHVybiB0aGlzO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEdlbmVyYXRlcyBtYXRyaXggcHJvcGVydGllcyBmcm9tIHRoZSBzcGVjaWZpZWQgZGlzcGxheSBvYmplY3QgdHJhbnNmb3JtIHByb3BlcnRpZXMsIGFuZCBwcmVwZW5kcyB0aGVtIHRvIHRoaXMgbWF0cml4LlxyXG4gKiBGb3IgZXhhbXBsZSwgeW91IGNvdWxkIGNhbGN1bGF0ZSB0aGUgY29tYmluZWQgdHJhbnNmb3JtYXRpb24gZm9yIGEgY2hpbGQgb2JqZWN0IHVzaW5nOlxyXG4gKlxyXG4gKiBcdHZhciBvID0gbXlEaXNwbGF5T2JqZWN0O1xyXG4gKiBcdHZhciBtdHggPSBuZXcgY3JlYXRlanMuTWF0cml4MkQoKTtcclxuICogXHRkbyAge1xyXG4gKiBcdFx0Ly8gcHJlcGVuZCBlYWNoIHBhcmVudCdzIHRyYW5zZm9ybWF0aW9uIGluIHR1cm46XHJcbiAqIFx0XHRtdHgucHJlcGVuZFRyYW5zZm9ybShvLngsIG8ueSwgby5zY2FsZVgsIG8uc2NhbGVZLCBvLnJvdGF0aW9uLCBvLnNrZXdYLCBvLnNrZXdZLCBvLnJlZ1gsIG8ucmVnWSk7XHJcbiAqIFx0fSB3aGlsZSAobyA9IG8ucGFyZW50KTtcclxuICpcclxuICogXHROb3RlIHRoYXQgdGhlIGFib3ZlIGV4YW1wbGUgd291bGQgbm90IGFjY291bnQgZm9yIHt7I2Nyb3NzTGluayBcIkRpc3BsYXlPYmplY3QvdHJhbnNmb3JtTWF0cml4OnByb3BlcnR5XCJ9fXt7L2Nyb3NzTGlua319XHJcbiAqIFx0dmFsdWVzLiBTZWUge3sjY3Jvc3NMaW5rIFwiTWF0cml4MkQvcHJlcGVuZE1hdHJpeFwifX17ey9jcm9zc0xpbmt9fSBmb3IgYW4gZXhhbXBsZSB0aGF0IGRvZXMuXHJcbiAqIEBtZXRob2QgcHJlcGVuZFRyYW5zZm9ybVxyXG4gKiBAcGFyYW0ge051bWJlcn0geFxyXG4gKiBAcGFyYW0ge051bWJlcn0geVxyXG4gKiBAcGFyYW0ge051bWJlcn0gc2NhbGVYXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBzY2FsZVlcclxuICogQHBhcmFtIHtOdW1iZXJ9IHJvdGF0aW9uXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBza2V3WFxyXG4gKiBAcGFyYW0ge051bWJlcn0gc2tld1lcclxuICogQHBhcmFtIHtOdW1iZXJ9IHJlZ1ggT3B0aW9uYWwuXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSByZWdZIE9wdGlvbmFsLlxyXG4gKiBAcmV0dXJuIHtNYXRyaXgyRH0gVGhpcyBtYXRyaXguIFVzZWZ1bCBmb3IgY2hhaW5pbmcgbWV0aG9kIGNhbGxzLlxyXG4gKiovXHJcbnAucHJlcGVuZFRyYW5zZm9ybSA9IGZ1bmN0aW9uICh4LCB5LCBzY2FsZVgsIHNjYWxlWSwgcm90YXRpb24sIHNrZXdYLCBza2V3WSwgcmVnWCwgcmVnWSkge1xyXG4gIGlmIChyb3RhdGlvbiAlIDM2MCkge1xyXG4gICAgdmFyIHIgPSByb3RhdGlvbiAqIE1hdHJpeDJELkRFR19UT19SQUQ7XHJcbiAgICB2YXIgY29zID0gTWF0aC5jb3Mocik7XHJcbiAgICB2YXIgc2luID0gTWF0aC5zaW4ocik7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvcyA9IDE7XHJcbiAgICBzaW4gPSAwO1xyXG4gIH1cclxuXHJcbiAgaWYgKHJlZ1ggfHwgcmVnWSkge1xyXG4gICAgLy8gcHJlcGVuZCB0aGUgcmVnaXN0cmF0aW9uIG9mZnNldDpcclxuICAgIHRoaXMudHggLT0gcmVnWDtcclxuICAgIHRoaXMudHkgLT0gcmVnWTtcclxuICB9XHJcbiAgaWYgKHNrZXdYIHx8IHNrZXdZKSB7XHJcbiAgICAvLyBUT0RPOiBjYW4gdGhpcyBiZSBjb21iaW5lZCBpbnRvIGEgc2luZ2xlIHByZXBlbmQgb3BlcmF0aW9uP1xyXG4gICAgc2tld1ggKj0gTWF0cml4MkQuREVHX1RPX1JBRDtcclxuICAgIHNrZXdZICo9IE1hdHJpeDJELkRFR19UT19SQUQ7XHJcbiAgICB0aGlzLnByZXBlbmQoY29zICogc2NhbGVYLCBzaW4gKiBzY2FsZVgsIC1zaW4gKiBzY2FsZVksIGNvcyAqIHNjYWxlWSwgMCwgMCk7XHJcbiAgICB0aGlzLnByZXBlbmQoTWF0aC5jb3Moc2tld1kpLCBNYXRoLnNpbihza2V3WSksIC1NYXRoLnNpbihza2V3WCksIE1hdGguY29zKHNrZXdYKSwgeCwgeSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHRoaXMucHJlcGVuZChjb3MgKiBzY2FsZVgsIHNpbiAqIHNjYWxlWCwgLXNpbiAqIHNjYWxlWSwgY29zICogc2NhbGVZLCB4LCB5KTtcclxuICB9XHJcbiAgcmV0dXJuIHRoaXM7XHJcbn07XHJcblxyXG4vKipcclxuICogQXBwbGllcyBhIGNsb2Nrd2lzZSByb3RhdGlvbiB0cmFuc2Zvcm1hdGlvbiB0byB0aGUgbWF0cml4LlxyXG4gKiBAbWV0aG9kIHJvdGF0ZVxyXG4gKiBAcGFyYW0ge051bWJlcn0gYW5nbGUgVGhlIGFuZ2xlIHRvIHJvdGF0ZSBieSwgaW4gZGVncmVlcy4gVG8gdXNlIGEgdmFsdWUgaW4gcmFkaWFucywgbXVsdGlwbHkgaXQgYnkgYE1hdGguUEkvMTgwYC5cclxuICogQHJldHVybiB7TWF0cml4MkR9IFRoaXMgbWF0cml4LiBVc2VmdWwgZm9yIGNoYWluaW5nIG1ldGhvZCBjYWxscy5cclxuICoqL1xyXG5wLnJvdGF0ZSA9IGZ1bmN0aW9uIChhbmdsZSkge1xyXG4gIGFuZ2xlID0gYW5nbGUgKiBNYXRyaXgyRC5ERUdfVE9fUkFEO1xyXG4gIHZhciBjb3MgPSBNYXRoLmNvcyhhbmdsZSk7XHJcbiAgdmFyIHNpbiA9IE1hdGguc2luKGFuZ2xlKTtcclxuXHJcbiAgdmFyIGExID0gdGhpcy5hO1xyXG4gIHZhciBiMSA9IHRoaXMuYjtcclxuXHJcbiAgdGhpcy5hID0gYTEgKiBjb3MgKyB0aGlzLmMgKiBzaW47XHJcbiAgdGhpcy5iID0gYjEgKiBjb3MgKyB0aGlzLmQgKiBzaW47XHJcbiAgdGhpcy5jID0gLWExICogc2luICsgdGhpcy5jICogY29zO1xyXG4gIHRoaXMuZCA9IC1iMSAqIHNpbiArIHRoaXMuZCAqIGNvcztcclxuICByZXR1cm4gdGhpcztcclxufTtcclxuXHJcbi8qKlxyXG4gKiBBcHBsaWVzIGEgc2tldyB0cmFuc2Zvcm1hdGlvbiB0byB0aGUgbWF0cml4LlxyXG4gKiBAbWV0aG9kIHNrZXdcclxuICogQHBhcmFtIHtOdW1iZXJ9IHNrZXdYIFRoZSBhbW91bnQgdG8gc2tldyBob3Jpem9udGFsbHkgaW4gZGVncmVlcy4gVG8gdXNlIGEgdmFsdWUgaW4gcmFkaWFucywgbXVsdGlwbHkgaXQgYnkgYE1hdGguUEkvMTgwYC5cclxuICogQHBhcmFtIHtOdW1iZXJ9IHNrZXdZIFRoZSBhbW91bnQgdG8gc2tldyB2ZXJ0aWNhbGx5IGluIGRlZ3JlZXMuXHJcbiAqIEByZXR1cm4ge01hdHJpeDJEfSBUaGlzIG1hdHJpeC4gVXNlZnVsIGZvciBjaGFpbmluZyBtZXRob2QgY2FsbHMuXHJcbiAqL1xyXG5wLnNrZXcgPSBmdW5jdGlvbiAoc2tld1gsIHNrZXdZKSB7XHJcbiAgc2tld1ggPSBza2V3WCAqIE1hdHJpeDJELkRFR19UT19SQUQ7XHJcbiAgc2tld1kgPSBza2V3WSAqIE1hdHJpeDJELkRFR19UT19SQUQ7XHJcbiAgdGhpcy5hcHBlbmQoTWF0aC5jb3Moc2tld1kpLCBNYXRoLnNpbihza2V3WSksIC1NYXRoLnNpbihza2V3WCksIE1hdGguY29zKHNrZXdYKSwgMCwgMCk7XHJcbiAgcmV0dXJuIHRoaXM7XHJcbn07XHJcblxyXG4vKipcclxuICogQXBwbGllcyBhIHNjYWxlIHRyYW5zZm9ybWF0aW9uIHRvIHRoZSBtYXRyaXguXHJcbiAqIEBtZXRob2Qgc2NhbGVcclxuICogQHBhcmFtIHtOdW1iZXJ9IHggVGhlIGFtb3VudCB0byBzY2FsZSBob3Jpem9udGFsbHkuIEUuRy4gYSB2YWx1ZSBvZiAyIHdpbGwgZG91YmxlIHRoZSBzaXplIGluIHRoZSBYIGRpcmVjdGlvbiwgYW5kIDAuNSB3aWxsIGhhbHZlIGl0LlxyXG4gKiBAcGFyYW0ge051bWJlcn0geSBUaGUgYW1vdW50IHRvIHNjYWxlIHZlcnRpY2FsbHkuXHJcbiAqIEByZXR1cm4ge01hdHJpeDJEfSBUaGlzIG1hdHJpeC4gVXNlZnVsIGZvciBjaGFpbmluZyBtZXRob2QgY2FsbHMuXHJcbiAqKi9cclxucC5zY2FsZSA9IGZ1bmN0aW9uICh4LCB5KSB7XHJcbiAgdGhpcy5hICo9IHg7XHJcbiAgdGhpcy5iICo9IHg7XHJcbiAgdGhpcy5jICo9IHk7XHJcbiAgdGhpcy5kICo9IHk7XHJcbiAgLy90aGlzLnR4ICo9IHg7XHJcbiAgLy90aGlzLnR5ICo9IHk7XHJcbiAgcmV0dXJuIHRoaXM7XHJcbn07XHJcblxyXG4vKipcclxuICogVHJhbnNsYXRlcyB0aGUgbWF0cml4IG9uIHRoZSB4IGFuZCB5IGF4ZXMuXHJcbiAqIEBtZXRob2QgdHJhbnNsYXRlXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSB4XHJcbiAqIEBwYXJhbSB7TnVtYmVyfSB5XHJcbiAqIEByZXR1cm4ge01hdHJpeDJEfSBUaGlzIG1hdHJpeC4gVXNlZnVsIGZvciBjaGFpbmluZyBtZXRob2QgY2FsbHMuXHJcbiAqKi9cclxucC50cmFuc2xhdGUgPSBmdW5jdGlvbiAoeCwgeSkge1xyXG4gIHRoaXMudHggKz0gdGhpcy5hICogeCArIHRoaXMuYyAqIHk7XHJcbiAgdGhpcy50eSArPSB0aGlzLmIgKiB4ICsgdGhpcy5kICogeTtcclxuICByZXR1cm4gdGhpcztcclxufTtcclxuXHJcbi8qKlxyXG4gKiBTZXRzIHRoZSBwcm9wZXJ0aWVzIG9mIHRoZSBtYXRyaXggdG8gdGhvc2Ugb2YgYW4gaWRlbnRpdHkgbWF0cml4IChvbmUgdGhhdCBhcHBsaWVzIGEgbnVsbCB0cmFuc2Zvcm1hdGlvbikuXHJcbiAqIEBtZXRob2QgaWRlbnRpdHlcclxuICogQHJldHVybiB7TWF0cml4MkR9IFRoaXMgbWF0cml4LiBVc2VmdWwgZm9yIGNoYWluaW5nIG1ldGhvZCBjYWxscy5cclxuICoqL1xyXG5wLmlkZW50aXR5ID0gZnVuY3Rpb24gKCkge1xyXG4gIHRoaXMuYSA9IHRoaXMuZCA9IDE7XHJcbiAgdGhpcy5iID0gdGhpcy5jID0gdGhpcy50eCA9IHRoaXMudHkgPSAwO1xyXG4gIHJldHVybiB0aGlzO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEludmVydHMgdGhlIG1hdHJpeCwgY2F1c2luZyBpdCB0byBwZXJmb3JtIHRoZSBvcHBvc2l0ZSB0cmFuc2Zvcm1hdGlvbi5cclxuICogQG1ldGhvZCBpbnZlcnRcclxuICogQHJldHVybiB7TWF0cml4MkR9IFRoaXMgbWF0cml4LiBVc2VmdWwgZm9yIGNoYWluaW5nIG1ldGhvZCBjYWxscy5cclxuICoqL1xyXG5wLmludmVydCA9IGZ1bmN0aW9uICgpIHtcclxuICB2YXIgYTEgPSB0aGlzLmE7XHJcbiAgdmFyIGIxID0gdGhpcy5iO1xyXG4gIHZhciBjMSA9IHRoaXMuYztcclxuICB2YXIgZDEgPSB0aGlzLmQ7XHJcbiAgdmFyIHR4MSA9IHRoaXMudHg7XHJcbiAgdmFyIG4gPSBhMSAqIGQxIC0gYjEgKiBjMTtcclxuXHJcbiAgdGhpcy5hID0gZDEgLyBuO1xyXG4gIHRoaXMuYiA9IC1iMSAvIG47XHJcbiAgdGhpcy5jID0gLWMxIC8gbjtcclxuICB0aGlzLmQgPSBhMSAvIG47XHJcbiAgdGhpcy50eCA9IChjMSAqIHRoaXMudHkgLSBkMSAqIHR4MSkgLyBuO1xyXG4gIHRoaXMudHkgPSAtKGExICogdGhpcy50eSAtIGIxICogdHgxKSAvIG47XHJcbiAgcmV0dXJuIHRoaXM7XHJcbn07XHJcblxyXG4vKipcclxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBtYXRyaXggaXMgYW4gaWRlbnRpdHkgbWF0cml4LlxyXG4gKiBAbWV0aG9kIGlzSWRlbnRpdHlcclxuICogQHJldHVybiB7Qm9vbGVhbn1cclxuICoqL1xyXG5wLmlzSWRlbnRpdHkgPSBmdW5jdGlvbiAoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIHRoaXMudHggPT09IDAgJiYgdGhpcy50eSA9PT0gMCAmJiB0aGlzLmEgPT09IDEgJiYgdGhpcy5iID09PSAwICYmIHRoaXMuYyA9PT0gMCAmJiB0aGlzLmQgPT09IDFcclxuICApO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGlzIG1hdHJpeCBpcyBlcXVhbCB0byB0aGUgc3BlY2lmaWVkIG1hdHJpeCAoYWxsIHByb3BlcnR5IHZhbHVlcyBhcmUgZXF1YWwpLlxyXG4gKiBAbWV0aG9kIGVxdWFsc1xyXG4gKiBAcGFyYW0ge01hdHJpeDJEfSBtYXRyaXggVGhlIG1hdHJpeCB0byBjb21wYXJlLlxyXG4gKiBAcmV0dXJuIHtCb29sZWFufVxyXG4gKiovXHJcbnAuZXF1YWxzID0gZnVuY3Rpb24gKG1hdHJpeCkge1xyXG4gIHJldHVybiAoXHJcbiAgICB0aGlzLnR4ID09PSBtYXRyaXgudHggJiZcclxuICAgIHRoaXMudHkgPT09IG1hdHJpeC50eSAmJlxyXG4gICAgdGhpcy5hID09PSBtYXRyaXguYSAmJlxyXG4gICAgdGhpcy5iID09PSBtYXRyaXguYiAmJlxyXG4gICAgdGhpcy5jID09PSBtYXRyaXguYyAmJlxyXG4gICAgdGhpcy5kID09PSBtYXRyaXguZFxyXG4gICk7XHJcbn07XHJcblxyXG4vKipcclxuICogVHJhbnNmb3JtcyBhIHBvaW50IGFjY29yZGluZyB0byB0aGlzIG1hdHJpeC5cclxuICogQG1ldGhvZCB0cmFuc2Zvcm1Qb2ludFxyXG4gKiBAcGFyYW0ge051bWJlcn0geCBUaGUgeCBjb21wb25lbnQgb2YgdGhlIHBvaW50IHRvIHRyYW5zZm9ybS5cclxuICogQHBhcmFtIHtOdW1iZXJ9IHkgVGhlIHkgY29tcG9uZW50IG9mIHRoZSBwb2ludCB0byB0cmFuc2Zvcm0uXHJcbiAqIEBwYXJhbSB7UG9pbnQgfCBPYmplY3R9IFtwdF0gQW4gb2JqZWN0IHRvIGNvcHkgdGhlIHJlc3VsdCBpbnRvLiBJZiBvbWl0dGVkIGEgZ2VuZXJpYyBvYmplY3Qgd2l0aCB4L3kgcHJvcGVydGllcyB3aWxsIGJlIHJldHVybmVkLlxyXG4gKiBAcmV0dXJuIHtQb2ludH0gVGhpcyBtYXRyaXguIFVzZWZ1bCBmb3IgY2hhaW5pbmcgbWV0aG9kIGNhbGxzLlxyXG4gKiovXHJcbnAudHJhbnNmb3JtUG9pbnQgPSBmdW5jdGlvbiAoeCwgeSwgcHQpIHtcclxuICBwdCA9IHB0IHx8IHt9O1xyXG4gIHB0LnggPSB4ICogdGhpcy5hICsgeSAqIHRoaXMuYyArIHRoaXMudHg7XHJcbiAgcHQueSA9IHggKiB0aGlzLmIgKyB5ICogdGhpcy5kICsgdGhpcy50eTtcclxuICByZXR1cm4gcHQ7XHJcbn07XHJcblxyXG4vKipcclxuICogRGVjb21wb3NlcyB0aGUgbWF0cml4IGludG8gdHJhbnNmb3JtIHByb3BlcnRpZXMgKHgsIHksIHNjYWxlWCwgc2NhbGVZLCBhbmQgcm90YXRpb24pLiBOb3RlIHRoYXQgdGhlc2UgdmFsdWVzXHJcbiAqIG1heSBub3QgbWF0Y2ggdGhlIHRyYW5zZm9ybSBwcm9wZXJ0aWVzIHlvdSB1c2VkIHRvIGdlbmVyYXRlIHRoZSBtYXRyaXgsIHRob3VnaCB0aGV5IHdpbGwgcHJvZHVjZSB0aGUgc2FtZSB2aXN1YWxcclxuICogcmVzdWx0cy5cclxuICogQG1ldGhvZCBkZWNvbXBvc2VcclxuICogQHBhcmFtIHtPYmplY3R9IHRhcmdldCBUaGUgb2JqZWN0IHRvIGFwcGx5IHRoZSB0cmFuc2Zvcm0gcHJvcGVydGllcyB0by4gSWYgbnVsbCwgdGhlbiBhIG5ldyBvYmplY3Qgd2lsbCBiZSByZXR1cm5lZC5cclxuICogQHJldHVybiB7T2JqZWN0fSBUaGUgdGFyZ2V0LCBvciBhIG5ldyBnZW5lcmljIG9iamVjdCB3aXRoIHRoZSB0cmFuc2Zvcm0gcHJvcGVydGllcyBhcHBsaWVkLlxyXG4gKi9cclxucC5kZWNvbXBvc2UgPSBmdW5jdGlvbiAodGFyZ2V0KSB7XHJcbiAgLy8gVE9ETzogaXQgd291bGQgYmUgbmljZSB0byBiZSBhYmxlIHRvIHNvbHZlIGZvciB3aGV0aGVyIHRoZSBtYXRyaXggY2FuIGJlIGRlY29tcG9zZWQgaW50byBvbmx5IHNjYWxlL3JvdGF0aW9uIGV2ZW4gd2hlbiBzY2FsZSBpcyBuZWdhdGl2ZVxyXG4gIGlmICh0YXJnZXQgPT0gbnVsbCkge1xyXG4gICAgdGFyZ2V0ID0ge307XHJcbiAgfVxyXG4gIHRhcmdldC54ID0gdGhpcy50eDtcclxuICB0YXJnZXQueSA9IHRoaXMudHk7XHJcbiAgdGFyZ2V0LnNjYWxlWCA9IE1hdGguc3FydCh0aGlzLmEgKiB0aGlzLmEgKyB0aGlzLmIgKiB0aGlzLmIpO1xyXG4gIHRhcmdldC5zY2FsZVkgPSBNYXRoLnNxcnQodGhpcy5jICogdGhpcy5jICsgdGhpcy5kICogdGhpcy5kKTtcclxuXHJcbiAgdmFyIHNrZXdYID0gTWF0aC5hdGFuMigtdGhpcy5jLCB0aGlzLmQpO1xyXG4gIHZhciBza2V3WSA9IE1hdGguYXRhbjIodGhpcy5iLCB0aGlzLmEpO1xyXG5cclxuICB2YXIgZGVsdGEgPSBNYXRoLmFicygxIC0gc2tld1ggLyBza2V3WSk7XHJcbiAgaWYgKGRlbHRhIDwgMC4wMDAwMSkge1xyXG4gICAgLy8gZWZmZWN0aXZlbHkgaWRlbnRpY2FsLCBjYW4gdXNlIHJvdGF0aW9uOlxyXG4gICAgdGFyZ2V0LnJvdGF0aW9uID0gc2tld1kgLyBNYXRyaXgyRC5ERUdfVE9fUkFEO1xyXG4gICAgaWYgKHRoaXMuYSA8IDAgJiYgdGhpcy5kID49IDApIHtcclxuICAgICAgdGFyZ2V0LnJvdGF0aW9uICs9IHRhcmdldC5yb3RhdGlvbiA8PSAwID8gMTgwIDogLTE4MDtcclxuICAgIH1cclxuICAgIHRhcmdldC5za2V3WCA9IHRhcmdldC5za2V3WSA9IDA7XHJcbiAgfSBlbHNlIHtcclxuICAgIHRhcmdldC5za2V3WCA9IHNrZXdYIC8gTWF0cml4MkQuREVHX1RPX1JBRDtcclxuICAgIHRhcmdldC5za2V3WSA9IHNrZXdZIC8gTWF0cml4MkQuREVHX1RPX1JBRDtcclxuICB9XHJcbiAgcmV0dXJuIHRhcmdldDtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBDb3BpZXMgYWxsIHByb3BlcnRpZXMgZnJvbSB0aGUgc3BlY2lmaWVkIG1hdHJpeCB0byB0aGlzIG1hdHJpeC5cclxuICogQG1ldGhvZCBjb3B5XHJcbiAqIEBwYXJhbSB7TWF0cml4MkR9IG1hdHJpeCBUaGUgbWF0cml4IHRvIGNvcHkgcHJvcGVydGllcyBmcm9tLlxyXG4gKiBAcmV0dXJuIHtNYXRyaXgyRH0gVGhpcyBtYXRyaXguIFVzZWZ1bCBmb3IgY2hhaW5pbmcgbWV0aG9kIGNhbGxzLlxyXG4gKi9cclxucC5jb3B5ID0gZnVuY3Rpb24gKG1hdHJpeCkge1xyXG4gIHJldHVybiB0aGlzLnNldFZhbHVlcyhtYXRyaXguYSwgbWF0cml4LmIsIG1hdHJpeC5jLCBtYXRyaXguZCwgbWF0cml4LnR4LCBtYXRyaXgudHkpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYSBjbG9uZSBvZiB0aGUgTWF0cml4MkQgaW5zdGFuY2UuXHJcbiAqIEBtZXRob2QgY2xvbmVcclxuICogQHJldHVybiB7TWF0cml4MkR9IGEgY2xvbmUgb2YgdGhlIE1hdHJpeDJEIGluc3RhbmNlLlxyXG4gKiovXHJcbnAuY2xvbmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgcmV0dXJuIG5ldyBNYXRyaXgyRCh0aGlzLmEsIHRoaXMuYiwgdGhpcy5jLCB0aGlzLmQsIHRoaXMudHgsIHRoaXMudHkpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBvYmplY3QuXHJcbiAqIEBtZXRob2QgdG9TdHJpbmdcclxuICogQHJldHVybiB7U3RyaW5nfSBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgaW5zdGFuY2UuXHJcbiAqKi9cclxucC50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgJ1tNYXRyaXgyRCAoYT0nICtcclxuICAgIHRoaXMuYSArXHJcbiAgICAnIGI9JyArXHJcbiAgICB0aGlzLmIgK1xyXG4gICAgJyBjPScgK1xyXG4gICAgdGhpcy5jICtcclxuICAgICcgZD0nICtcclxuICAgIHRoaXMuZCArXHJcbiAgICAnIHR4PScgK1xyXG4gICAgdGhpcy50eCArXHJcbiAgICAnIHR5PScgK1xyXG4gICAgdGhpcy50eSArXHJcbiAgICAnKV0nXHJcbiAgKTtcclxufTtcclxuXHJcbi8vIHRoaXMgaGFzIHRvIGJlIHBvcHVsYXRlZCBhZnRlciB0aGUgY2xhc3MgaXMgZGVmaW5lZDpcclxuTWF0cml4MkQuaWRlbnRpdHkgPSBuZXcgTWF0cml4MkQoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1hdHJpeDJEO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgUmVjdGFuZ2xlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gUmVjdGFuZ2xlKHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcclxuICAgICAgICB0aGlzLnNldFZhbHVlcyh4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcclxuICAgIH1cclxuICAgIFJlY3RhbmdsZS5wcm90b3R5cGUuc2V0VmFsdWVzID0gZnVuY3Rpb24gKHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcclxuICAgICAgICB0aGlzLnggPSB4IHx8IDA7XHJcbiAgICAgICAgdGhpcy55ID0geSB8fCAwO1xyXG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aCB8fCAwO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0IHx8IDA7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgUmVjdGFuZ2xlLnByb3RvdHlwZS5leHRlbmQgPSBmdW5jdGlvbiAoeCwgeSwgd2lkdGgsIGhlaWdodCkge1xyXG4gICAgICAgIHdpZHRoID0gd2lkdGggfHwgMDtcclxuICAgICAgICBoZWlnaHQgPSBoZWlnaHQgfHwgMDtcclxuICAgICAgICBpZiAoeCArIHdpZHRoID4gdGhpcy54ICsgdGhpcy53aWR0aCkge1xyXG4gICAgICAgICAgICB0aGlzLndpZHRoID0geCArIHdpZHRoIC0gdGhpcy54O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoeSArIGhlaWdodCA+IHRoaXMueSArIHRoaXMuaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0geSArIGhlaWdodCAtIHRoaXMueTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHggPCB0aGlzLngpIHtcclxuICAgICAgICAgICAgdGhpcy53aWR0aCArPSB0aGlzLnggLSB4O1xyXG4gICAgICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoeSA8IHRoaXMueSkge1xyXG4gICAgICAgICAgICB0aGlzLmhlaWdodCArPSB0aGlzLnkgLSB5O1xyXG4gICAgICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBSZWN0YW5nbGUucHJvdG90eXBlLmNvcHkgPSBmdW5jdGlvbiAocmVjdGFuZ2xlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0VmFsdWVzKHJlY3RhbmdsZS54LCByZWN0YW5nbGUueSwgcmVjdGFuZ2xlLndpZHRoLCByZWN0YW5nbGUuaGVpZ2h0KTtcclxuICAgIH07XHJcbiAgICBSZWN0YW5nbGUucHJvdG90eXBlLmNvbnRhaW5zID0gZnVuY3Rpb24gKHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcclxuICAgICAgICB3aWR0aCA9IHdpZHRoIHx8IDA7XHJcbiAgICAgICAgaGVpZ2h0ID0gaGVpZ2h0IHx8IDA7XHJcbiAgICAgICAgcmV0dXJuICh4ID49IHRoaXMueCAmJlxyXG4gICAgICAgICAgICB4ICsgd2lkdGggPD0gdGhpcy54ICsgdGhpcy53aWR0aCAmJlxyXG4gICAgICAgICAgICB5ID49IHRoaXMueSAmJlxyXG4gICAgICAgICAgICB5ICsgaGVpZ2h0IDw9IHRoaXMueSArIHRoaXMuaGVpZ2h0KTtcclxuICAgIH07XHJcbiAgICBSZWN0YW5nbGUucHJvdG90eXBlLmlzRW1wdHkgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMud2lkdGggPD0gMCB8fCB0aGlzLmhlaWdodCA8PSAwO1xyXG4gICAgfTtcclxuICAgIFJlY3RhbmdsZS5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBSZWN0YW5nbGUodGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gUmVjdGFuZ2xlO1xyXG59KCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBSZWN0YW5nbGU7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBpbmRleF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL3JlbmRlci9pbmRleFwiKSk7XHJcbnZhciBzdGFnZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL25vZGUvc3RhZ2VcIikpO1xyXG52YXIgZ3JvdXBfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9ub2RlL2dyb3VwXCIpKTtcclxudmFyIGdyYXBoaWNzXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vbm9kZS9ncmFwaGljc1wiKSk7XHJcbnZhciByZWN0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vbm9kZS9zaGFwZS9yZWN0XCIpKTtcclxudmFyIGNpcmNsZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL25vZGUvc2hhcGUvY2lyY2xlXCIpKTtcclxudmFyIG1wcmMgPSB7XHJcbiAgICBSZW5kZXI6IGluZGV4XzEuZGVmYXVsdCxcclxuICAgIFN0YWdlOiBzdGFnZV8xLmRlZmF1bHQsXHJcbiAgICBHcm91cDogZ3JvdXBfMS5kZWZhdWx0LFxyXG4gICAgUmVjdDogcmVjdF8xLmRlZmF1bHQsXHJcbiAgICBDaXJjbGU6IGNpcmNsZV8xLmRlZmF1bHQsXHJcbiAgICBHcmFwaGljczogZ3JhcGhpY3NfMS5kZWZhdWx0XHJcbn07XHJcbmV4cG9ydHMuZGVmYXVsdCA9IG1wcmM7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgbm9kZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL25vZGVcIikpO1xyXG52YXIgYXNzTWFwID0ge1xyXG4gICAgZmlsbFN0eWxlOiB0cnVlLFxyXG4gICAgc3Ryb2tlU3R5bGU6IHRydWUsXHJcbiAgICBsaW5lV2lkdGg6IHRydWUsXHJcbiAgICBsaW5lQ2FwOiB0cnVlLFxyXG4gICAgbGluZURhc2hPZmZzZXQ6IHRydWUsXHJcbiAgICBsaW5lSm9pbjogdHJ1ZSxcclxuICAgIG1pdGVyTGltaXQ6IHRydWVcclxufTtcclxudmFyIEdyYXBoaWNzID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKEdyYXBoaWNzLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gR3JhcGhpY3MoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5jbWRzID0gW107XHJcbiAgICAgICAgX3RoaXMuY3VycmVudEdyYWRpZW50ID0gbnVsbDtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICBHcmFwaGljcy5wcm90b3R5cGUuY2xlYXJSZWN0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBwYXJhbXMgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICBwYXJhbXNbX2ldID0gYXJndW1lbnRzW19pXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jbWRzLnB1c2goWydjbGVhclJlY3QnLCBhcmd1bWVudHNdKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBHcmFwaGljcy5wcm90b3R5cGUucmVjdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgcGFyYW1zID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgcGFyYW1zW19pXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY21kcy5wdXNoKFsncmVjdCcsIGFyZ3VtZW50c10pO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIEdyYXBoaWNzLnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgcGFyYW1zID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgcGFyYW1zW19pXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY21kcy5sZW5ndGggPSAwO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIEdyYXBoaWNzLnByb3RvdHlwZS5zZXRMaW5lRGFzaCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgcGFyYW1zID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgcGFyYW1zW19pXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY21kcy5wdXNoKFsnc2V0TGluZURhc2gnLCBhcmd1bWVudHNdKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBHcmFwaGljcy5wcm90b3R5cGUuc3Ryb2tlUmVjdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgcGFyYW1zID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgcGFyYW1zW19pXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY21kcy5wdXNoKFsnc3Ryb2tlUmVjdCcsIGFyZ3VtZW50c10pO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIEdyYXBoaWNzLnByb3RvdHlwZS5maWxsUmVjdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgcGFyYW1zID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgcGFyYW1zW19pXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY21kcy5wdXNoKFsnZmlsbFJlY3QnLCBhcmd1bWVudHNdKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBHcmFwaGljcy5wcm90b3R5cGUuYmVnaW5QYXRoID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBwYXJhbXMgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICBwYXJhbXNbX2ldID0gYXJndW1lbnRzW19pXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jbWRzLnB1c2goWydiZWdpblBhdGgnLCBhcmd1bWVudHNdKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBHcmFwaGljcy5wcm90b3R5cGUuYXJjID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBwYXJhbXMgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICBwYXJhbXNbX2ldID0gYXJndW1lbnRzW19pXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jbWRzLnB1c2goWydhcmMnLCBhcmd1bWVudHNdKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBHcmFwaGljcy5wcm90b3R5cGUuY2xvc2VQYXRoID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBwYXJhbXMgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICBwYXJhbXNbX2ldID0gYXJndW1lbnRzW19pXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jbWRzLnB1c2goWydjbG9zZVBhdGgnLCBhcmd1bWVudHNdKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBHcmFwaGljcy5wcm90b3R5cGUuZmlsbFN0eWxlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBwYXJhbXMgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICBwYXJhbXNbX2ldID0gYXJndW1lbnRzW19pXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jbWRzLnB1c2goWydmaWxsU3R5bGUnLCBhcmd1bWVudHNdKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBHcmFwaGljcy5wcm90b3R5cGUuZmlsbCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgcGFyYW1zID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgcGFyYW1zW19pXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY21kcy5wdXNoKFsnZmlsbCcsIGFyZ3VtZW50c10pO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIEdyYXBoaWNzLnByb3RvdHlwZS5zdHJva2VTdHlsZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgcGFyYW1zID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgcGFyYW1zW19pXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY21kcy5wdXNoKFsnc3Ryb2tlU3R5bGUnLCBhcmd1bWVudHNdKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBHcmFwaGljcy5wcm90b3R5cGUubGluZVdpZHRoID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBwYXJhbXMgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICBwYXJhbXNbX2ldID0gYXJndW1lbnRzW19pXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jbWRzLnB1c2goWydsaW5lV2lkdGgnLCBhcmd1bWVudHNdKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBHcmFwaGljcy5wcm90b3R5cGUubGluZUNhcCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgcGFyYW1zID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgcGFyYW1zW19pXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY21kcy5wdXNoKFsnbGluZUNhcCcsIGFyZ3VtZW50c10pO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIEdyYXBoaWNzLnByb3RvdHlwZS5saW5lRGFzaE9mZnNldCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgcGFyYW1zID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgcGFyYW1zW19pXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY21kcy5wdXNoKFsnbGluZURhc2hPZmZzZXQnLCBhcmd1bWVudHNdKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBHcmFwaGljcy5wcm90b3R5cGUubGluZUpvaW4gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHBhcmFtcyA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgIHBhcmFtc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNtZHMucHVzaChbJ2xpbmVKb2luJywgYXJndW1lbnRzXSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgR3JhcGhpY3MucHJvdG90eXBlLm1pdGVyTGltaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHBhcmFtcyA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgIHBhcmFtc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNtZHMucHVzaChbJ21pdGVyTGltaXQnLCBhcmd1bWVudHNdKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBHcmFwaGljcy5wcm90b3R5cGUuc3Ryb2tlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBwYXJhbXMgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICBwYXJhbXNbX2ldID0gYXJndW1lbnRzW19pXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jbWRzLnB1c2goWydzdHJva2UnLCBhcmd1bWVudHNdKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBHcmFwaGljcy5wcm90b3R5cGUubW92ZVRvID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBwYXJhbXMgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICBwYXJhbXNbX2ldID0gYXJndW1lbnRzW19pXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jbWRzLnB1c2goWydtb3ZlVG8nLCBhcmd1bWVudHNdKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBHcmFwaGljcy5wcm90b3R5cGUubGluZVRvID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBwYXJhbXMgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICBwYXJhbXNbX2ldID0gYXJndW1lbnRzW19pXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jbWRzLnB1c2goWydsaW5lVG8nLCBhcmd1bWVudHNdKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBHcmFwaGljcy5wcm90b3R5cGUuYmV6aWVyQ3VydmVUbyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgcGFyYW1zID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgcGFyYW1zW19pXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY21kcy5wdXNoKFsnYmV6aWVyQ3VydmVUbycsIGFyZ3VtZW50c10pO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIEdyYXBoaWNzLnByb3RvdHlwZS5xdWFkcmF0aWNDdXJ2ZVRvID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBwYXJhbXMgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICBwYXJhbXNbX2ldID0gYXJndW1lbnRzW19pXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jbWRzLnB1c2goWydxdWFkcmF0aWNDdXJ2ZVRvJywgYXJndW1lbnRzXSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgR3JhcGhpY3MucHJvdG90eXBlLmNyZWF0ZVJhZGlhbEdyYWRpZW50ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBwYXJhbXMgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICBwYXJhbXNbX2ldID0gYXJndW1lbnRzW19pXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jbWRzLnB1c2goWydjcmVhdGVSYWRpYWxHcmFkaWVudCcsIGFyZ3VtZW50c10pO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIEdyYXBoaWNzLnByb3RvdHlwZS5jcmVhdGVMaW5lYXJHcmFkaWVudCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgcGFyYW1zID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgcGFyYW1zW19pXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY21kcy5wdXNoKFsnY3JlYXRlTGluZWFyR3JhZGllbnQnLCBhcmd1bWVudHNdKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBHcmFwaGljcy5wcm90b3R5cGUuYWRkQ29sb3JTdG9wID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBwYXJhbXMgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICBwYXJhbXNbX2ldID0gYXJndW1lbnRzW19pXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jbWRzLnB1c2goWydhZGRDb2xvclN0b3AnLCBhcmd1bWVudHNdKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBHcmFwaGljcy5wcm90b3R5cGUuZmlsbEdyYWRpZW50ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBwYXJhbXMgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICBwYXJhbXNbX2ldID0gYXJndW1lbnRzW19pXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jbWRzLnB1c2goWydmaWxsR3JhZGllbnQnXSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgR3JhcGhpY3MucHJvdG90eXBlLmFyY1RvID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBwYXJhbXMgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICBwYXJhbXNbX2ldID0gYXJndW1lbnRzW19pXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jbWRzLnB1c2goWydhcmNUbycsIGFyZ3VtZW50c10pO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIEdyYXBoaWNzLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoY3R4KSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLmNtZHMuZm9yRWFjaChmdW5jdGlvbiAoY21kKSB7XHJcbiAgICAgICAgICAgIHZhciBtZXRob2ROYW1lID0gY21kWzBdO1xyXG4gICAgICAgICAgICBpZiAoYXNzTWFwW21ldGhvZE5hbWVdKSB7XHJcbiAgICAgICAgICAgICAgICBjdHhbbWV0aG9kTmFtZV0gPSBjbWRbMV1bMF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAobWV0aG9kTmFtZSA9PT0gJ2FkZENvbG9yU3RvcCcpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLmN1cnJlbnRHcmFkaWVudCAmJiBfdGhpcy5jdXJyZW50R3JhZGllbnQuYWRkQ29sb3JTdG9wKGNtZFsxXVswXSwgY21kWzFdWzFdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChtZXRob2ROYW1lID09PSAnZmlsbEdyYWRpZW50Jykge1xyXG4gICAgICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IF90aGlzLmN1cnJlbnRHcmFkaWVudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSBjdHhbbWV0aG9kTmFtZV0uYXBwbHkoY3R4LCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChjbWRbMV0pKTtcclxuICAgICAgICAgICAgICAgIGlmIChtZXRob2ROYW1lID09PSAnY3JlYXRlUmFkaWFsR3JhZGllbnQnIHx8IG1ldGhvZE5hbWUgPT09ICdjcmVhdGVMaW5lYXJHcmFkaWVudCcpIHtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5jdXJyZW50R3JhZGllbnQgPSByZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gR3JhcGhpY3M7XHJcbn0obm9kZV8xLmRlZmF1bHQpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gR3JhcGhpY3M7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgbm9kZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL25vZGVcIikpO1xyXG52YXIgR3JvdXAgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoR3JvdXAsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBHcm91cCgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLmNoaWxkcmVuID0gW107XHJcbiAgICAgICAgX3RoaXMubW91c2VDaGlsZHJlbiA9IHRydWU7XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgR3JvdXAucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBjID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICB2YXIgcGFyZW50XzEgPSBjLnBhcmVudDtcclxuICAgICAgICAgICAgaWYgKHBhcmVudF8xKSB7XHJcbiAgICAgICAgICAgICAgICBwYXJlbnRfMS5yZW1vdmVDaGlsZEF0KHBhcmVudF8xLmNoaWxkcmVuLmluZGV4T2YoYykpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuY2hpbGRyZW4ucHVzaChjKTtcclxuICAgICAgICAgICAgYy5wYXJlbnQgPSB0aGlzO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBHcm91cC5wcm90b3R5cGUuYWRkQ2hpbGRBdCA9IGZ1bmN0aW9uIChjaGlsZCwgaW5kZXgpIHtcclxuICAgICAgICB2YXIgcGFyID0gY2hpbGQucGFyZW50O1xyXG4gICAgICAgIHBhciAmJiBwYXIucmVtb3ZlQ2hpbGRBdChwYXIuY2hpbGRyZW4uaW5kZXhPZihjaGlsZCkpO1xyXG4gICAgICAgIGNoaWxkLnBhcmVudCA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5jaGlsZHJlbi5zcGxpY2UoaW5kZXgsIDAsIGNoaWxkKTtcclxuICAgIH07XHJcbiAgICBHcm91cC5wcm90b3R5cGUucmVtb3ZlQ2hpbGRBdCA9IGZ1bmN0aW9uIChpbmRleCkge1xyXG4gICAgICAgIHZhciBjaGlsZCA9IHRoaXMuY2hpbGRyZW5baW5kZXhdO1xyXG4gICAgICAgIGlmIChjaGlsZCkge1xyXG4gICAgICAgICAgICBjaGlsZC5wYXJlbnQgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNoaWxkcmVuLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICB9O1xyXG4gICAgR3JvdXAucHJvdG90eXBlLnJlcGxhY2UgPSBmdW5jdGlvbiAoY3VycmVudCwgcHJlKSB7XHJcbiAgICAgICAgdmFyIGluZGV4ID0gcHJlLnBhcmVudC5jaGlsZHJlbi5pbmRleE9mKHByZSk7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVDaGlsZEF0KGluZGV4KTtcclxuICAgICAgICB0aGlzLmFkZENoaWxkQXQoY3VycmVudCwgaW5kZXgpO1xyXG4gICAgfTtcclxuICAgIEdyb3VwLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAoY2hpbGQpIHtcclxuICAgICAgICB2YXIgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcclxuICAgICAgICB2YXIgY0xlbiA9IHRoaXMuY2hpbGRyZW4ubGVuZ3RoO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBjTGVuOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChjaGlsZC5pZCA9PT0gdGhpcy5jaGlsZHJlbltqXS5pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLnBhcmVudCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGlsZHJlbi5zcGxpY2UoaiwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgai0tO1xyXG4gICAgICAgICAgICAgICAgICAgIGNMZW4tLTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBHcm91cC5wcm90b3R5cGUuZW1wdHkgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgICAgICAgICBjaGlsZC5wYXJlbnQgPSBudWxsO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuY2hpbGRyZW4ubGVuZ3RoID0gMDtcclxuICAgIH07XHJcbiAgICBHcm91cC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmVtcHR5KCk7XHJcbiAgICAgICAgdGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuZGVzdHJveSgpO1xyXG4gICAgfTtcclxuICAgIEdyb3VwLnByb3RvdHlwZS5fZ2V0T2JqZWN0c1VuZGVyUG9pbnQgPSBmdW5jdGlvbiAoeCwgeSwgaGl0Q3R4KSB7XHJcbiAgICAgICAgdmFyIGN0eCA9IGhpdEN0eDtcclxuICAgICAgICBpZiAoIXRoaXMuX3Rlc3RNYXNrKHRoaXMsIHgsIHksIGN0eCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBjaGlsZHJlbiA9IHRoaXMuY2hpbGRyZW47XHJcbiAgICAgICAgdmFyIGwgPSBjaGlsZHJlbi5sZW5ndGg7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IGwgLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICB2YXIgY2hpbGQgPSBjaGlsZHJlbltpXTtcclxuICAgICAgICAgICAgaWYgKCFjaGlsZC5pc1Zpc2libGUoKSB8fCBjaGlsZC5pZ25vcmVIaXQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5fdGVzdE1hc2soY2hpbGQsIHgsIHksIGN0eCkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjaGlsZCBpbnN0YW5jZW9mIEdyb3VwKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gY2hpbGQuX2dldE9iamVjdHNVbmRlclBvaW50KHgsIHksIGN0eCk7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0KVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAhdGhpcy5tb3VzZUNoaWxkcmVuID8gdGhpcyA6IHJlc3VsdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHZhciBwcm9wcyA9IGNoaWxkLmdldENvbmNhdGVuYXRlZERpc3BsYXlQcm9wcyhjaGlsZC5fcHJvcHMpO1xyXG4gICAgICAgICAgICAgICAgdmFyIG10eCA9IHByb3BzLm1hdHJpeDtcclxuICAgICAgICAgICAgICAgIGlmIChjaGlsZC5oaXRCb3gpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbXR4Q2xvbmUgPSBtdHguY2xvbmUoKTtcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZC5zZXRCb3VuZHMoY2hpbGQueCwgY2hpbGQueSwgY2hpbGQud2lkdGgsIGNoaWxkLmhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2tQb2ludEluQUFCQih4LCB5LCBjaGlsZC5fZ2V0Qm91bmRzKG10eENsb25lKSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICF0aGlzLm1vdXNlQ2hpbGRyZW4gPyB0aGlzIDogY2hpbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY3R4Lmdsb2JhbEFscGhhID0gcHJvcHMuYWxwaGE7XHJcbiAgICAgICAgICAgICAgICBjdHguc2V0VHJhbnNmb3JtKG10eC5hLCBtdHguYiwgbXR4LmMsIG10eC5kLCBtdHgudHggLSB4LCBtdHgudHkgLSB5KTtcclxuICAgICAgICAgICAgICAgIGNoaWxkLnJlbmRlcihjdHgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLl90ZXN0SGl0KGN0eCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGN0eC5zZXRUcmFuc2Zvcm0oMSwgMCwgMCwgMSwgMCwgMCk7XHJcbiAgICAgICAgICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIDIsIDIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICF0aGlzLm1vdXNlQ2hpbGRyZW4gPyB0aGlzIDogY2hpbGQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9O1xyXG4gICAgR3JvdXAucHJvdG90eXBlLl90ZXN0TWFzayA9IGZ1bmN0aW9uICh0YXJnZXQsIHgsIHksIGhpdEN0eCkge1xyXG4gICAgICAgIHZhciBjdHggPSBoaXRDdHg7XHJcbiAgICAgICAgdmFyIG1hc2sgPSB0YXJnZXQubWFzaztcclxuICAgICAgICBpZiAoIW1hc2spIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBtdHggPSB0aGlzLl9wcm9wcy5tYXRyaXg7XHJcbiAgICAgICAgdmFyIHBhcmVudCA9IHRhcmdldC5wYXJlbnQ7XHJcbiAgICAgICAgbXR4ID0gcGFyZW50ID8gcGFyZW50LmdldENvbmNhdGVuYXRlZE1hdHJpeChtdHgpIDogbXR4LmlkZW50aXR5KCk7XHJcbiAgICAgICAgbXR4ID0gbWFzay5nZXRNYXRyaXgobWFzay5fcHJvcHMubWF0cml4KS5wcmVwZW5kTWF0cml4KG10eCk7XHJcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIGN0eC5zZXRUcmFuc2Zvcm0obXR4LmEsIG10eC5iLCBtdHguYywgbXR4LmQsIG10eC50eCAtIHgsIG10eC50eSAtIHkpO1xyXG4gICAgICAgIG1hc2sucmVuZGVyKGN0eCk7XHJcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9ICcjMDAwJztcclxuICAgICAgICBjdHguZmlsbCgpO1xyXG4gICAgICAgIGlmICghdGhpcy5fdGVzdEhpdChjdHgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY3R4LnNldFRyYW5zZm9ybSgxLCAwLCAwLCAxLCAwLCAwKTtcclxuICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIDIsIDIpO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfTtcclxuICAgIEdyb3VwLnByb3RvdHlwZS5fdGVzdEhpdCA9IGZ1bmN0aW9uIChjdHgpIHtcclxuICAgICAgICByZXR1cm4gY3R4LmdldEltYWdlRGF0YSgwLCAwLCAxLCAxKS5kYXRhWzNdID4gMTtcclxuICAgIH07XHJcbiAgICBHcm91cC5wcm90b3R5cGUuY2hlY2tQb2ludEluQUFCQiA9IGZ1bmN0aW9uICh4LCB5LCBBQUJCKSB7XHJcbiAgICAgICAgdmFyIG1pblggPSBBQUJCWzBdO1xyXG4gICAgICAgIGlmICh4IDwgbWluWClcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIHZhciBtaW5ZID0gQUFCQlsxXTtcclxuICAgICAgICBpZiAoeSA8IG1pblkpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB2YXIgbWF4WCA9IG1pblggKyBBQUJCWzJdO1xyXG4gICAgICAgIGlmICh4ID4gbWF4WClcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIHZhciBtYXhZID0gbWluWSArIEFBQkJbM107XHJcbiAgICAgICAgaWYgKHkgPiBtYXhZKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEdyb3VwO1xyXG59KG5vZGVfMS5kZWZhdWx0KSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IEdyb3VwO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgdWlkXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL3V0aWxzL3VpZFwiKSk7XHJcbnZhciBkaXNwbGF5UHJvcHNfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vZ2VvbS9kaXNwbGF5UHJvcHNcIikpO1xyXG52YXIgcmVjdGFuZ2xlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL2dlb20vcmVjdGFuZ2xlXCIpKTtcclxudmFyIG1hdHJpeDJkXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL2dlb20vbWF0cml4MmRcIikpO1xyXG52YXIgX2V2ZW50TGlzdGVuZXJzID0gU3ltYm9sKCdldmVudExpc3RlbmVycycpO1xyXG52YXIgX2NhcHR1cmVFdmVudExpc3RlbmVycyA9IFN5bWJvbCgnY2FwdHVyZUV2ZW50TGlzdGVuZXJzJyk7XHJcbnZhciBOb2RlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gTm9kZSgpIHtcclxuICAgICAgICB0aGlzW19ldmVudExpc3RlbmVyc10gPSB7fTtcclxuICAgICAgICB0aGlzW19jYXB0dXJlRXZlbnRMaXN0ZW5lcnNdID0ge307XHJcbiAgICAgICAgdGhpcy5wYXJlbnQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuaWQgPSB1aWRfMS5kZWZhdWx0LmdldCgpO1xyXG4gICAgICAgIHRoaXMueCA9IDA7XHJcbiAgICAgICAgdGhpcy55ID0gMDtcclxuICAgICAgICB0aGlzLnNjYWxlID0gMTtcclxuICAgICAgICB0aGlzLnNjYWxlWCA9IDE7XHJcbiAgICAgICAgdGhpcy5zY2FsZVkgPSAxO1xyXG4gICAgICAgIHRoaXMucm90YXRpb24gPSAwO1xyXG4gICAgICAgIHRoaXMuc2tld1ggPSAwO1xyXG4gICAgICAgIHRoaXMuc2tld1kgPSAwO1xyXG4gICAgICAgIHRoaXMucmVnWCA9IDA7XHJcbiAgICAgICAgdGhpcy5yZWdZID0gMDtcclxuICAgICAgICB0aGlzLmFscGhhID0gMTtcclxuICAgICAgICB0aGlzLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc2hhZG93ID0gbnVsbDtcclxuICAgICAgICB0aGlzLm1hc2sgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuX3Byb3BzID0gbmV3IGRpc3BsYXlQcm9wc18xLmRlZmF1bHQoKTtcclxuICAgICAgICB0aGlzLl9yZWN0YW5nbGUgPSBuZXcgcmVjdGFuZ2xlXzEuZGVmYXVsdCgpO1xyXG4gICAgICAgIHRoaXMuX2JvdW5kcyA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5jb21wb3NpdGVPcGVyYXRpb24gPSBudWxsO1xyXG4gICAgICAgIHRoaXMuaGl0Qm94ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pZ25vcmVIaXQgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShOb2RlLnByb3RvdHlwZSwgXCJzdGFnZVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBvID0gdGhpcztcclxuICAgICAgICAgICAgd2hpbGUgKG8ucGFyZW50KSB7XHJcbiAgICAgICAgICAgICAgICBvID0gby5wYXJlbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKG8uX19faW5zdGFuY2VvZiA9PT0gJ1N0YWdlJylcclxuICAgICAgICAgICAgICAgIHJldHVybiBvO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTm9kZS5wcm90b3R5cGUsIFwic2NhbGVcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zY2FsZVg7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChzY2FsZSkge1xyXG4gICAgICAgICAgICB0aGlzLnNjYWxlWCA9IHRoaXMuc2NhbGVZID0gc2NhbGU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgTm9kZS5wcm90b3R5cGUuaXNWaXNpYmxlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZpc2libGUgJiYgdGhpcy5hbHBoYSA+IDAgJiYgdGhpcy5zY2FsZVggIT09IDAgJiYgdGhpcy5zY2FsZVkgIT09IDA7XHJcbiAgICB9O1xyXG4gICAgTm9kZS5wcm90b3R5cGUuY2xpcCA9IGZ1bmN0aW9uIChncmFwaGljcykge1xyXG4gICAgICAgIHRoaXMubWFzayA9IGdyYXBoaWNzO1xyXG4gICAgfTtcclxuICAgIE5vZGUucHJvdG90eXBlLnVuY2xpcCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLm1hc2sgPSBudWxsO1xyXG4gICAgfTtcclxuICAgIE5vZGUucHJvdG90eXBlLnNldFRyYW5zZm9ybSA9IGZ1bmN0aW9uICh4LCB5LCBzY2FsZVgsIHNjYWxlWSwgcm90YXRpb24sIHNrZXdYLCBza2V3WSwgcmVnWCwgcmVnWSkge1xyXG4gICAgICAgIHRoaXMueCA9IHggfHwgMDtcclxuICAgICAgICB0aGlzLnkgPSB5IHx8IDA7XHJcbiAgICAgICAgdGhpcy5zY2FsZVggPSBzY2FsZVggPT0gbnVsbCA/IDEgOiBzY2FsZVg7XHJcbiAgICAgICAgdGhpcy5zY2FsZVkgPSBzY2FsZVkgPT0gbnVsbCA/IDEgOiBzY2FsZVk7XHJcbiAgICAgICAgdGhpcy5yb3RhdGlvbiA9IHJvdGF0aW9uIHx8IDA7XHJcbiAgICAgICAgdGhpcy5za2V3WCA9IHNrZXdYIHx8IDA7XHJcbiAgICAgICAgdGhpcy5za2V3WSA9IHNrZXdZIHx8IDA7XHJcbiAgICAgICAgdGhpcy5yZWdYID0gcmVnWCB8fCAwO1xyXG4gICAgICAgIHRoaXMucmVnWSA9IHJlZ1kgfHwgMDtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBOb2RlLnByb3RvdHlwZS5nZXRNYXRyaXggPSBmdW5jdGlvbiAobWF0cml4KSB7XHJcbiAgICAgICAgdmFyIG8gPSB0aGlzO1xyXG4gICAgICAgIHZhciBtdHggPSBtYXRyaXggfHwgbmV3IG1hdHJpeDJkXzEuZGVmYXVsdCgpO1xyXG4gICAgICAgIHJldHVybiAobXR4LmlkZW50aXR5KCkgJiZcclxuICAgICAgICAgICAgbXR4LmFwcGVuZFRyYW5zZm9ybShvLngsIG8ueSwgby5zY2FsZVgsIG8uc2NhbGVZLCBvLnJvdGF0aW9uLCBvLnNrZXdYLCBvLnNrZXdZLCBvLnJlZ1gsIG8ucmVnWSkpO1xyXG4gICAgfTtcclxuICAgIE5vZGUucHJvdG90eXBlLmdldENvbmNhdGVuYXRlZE1hdHJpeCA9IGZ1bmN0aW9uIChtYXRyaXgpIHtcclxuICAgICAgICB2YXIgbyA9IHRoaXM7XHJcbiAgICAgICAgdmFyIG10eCA9IHRoaXMuZ2V0TWF0cml4KG1hdHJpeCk7XHJcbiAgICAgICAgd2hpbGUgKChvID0gby5wYXJlbnQpKSB7XHJcbiAgICAgICAgICAgIG10eC5wcmVwZW5kTWF0cml4KG8uZ2V0TWF0cml4KG8uX3Byb3BzLm1hdHJpeCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbXR4O1xyXG4gICAgfTtcclxuICAgIE5vZGUucHJvdG90eXBlLmdldENvbmNhdGVuYXRlZERpc3BsYXlQcm9wcyA9IGZ1bmN0aW9uIChwcm9wcykge1xyXG4gICAgICAgIHByb3BzID0gcHJvcHMgPyBwcm9wcy5pZGVudGl0eSgpIDogbmV3IGRpc3BsYXlQcm9wc18xLmRlZmF1bHQoKTtcclxuICAgICAgICB2YXIgbyA9IHRoaXM7XHJcbiAgICAgICAgdmFyIG10eCA9IG8uZ2V0TWF0cml4KHByb3BzLm1hdHJpeCk7XHJcbiAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICBwcm9wcy5wcmVwZW5kKG8udmlzaWJsZSwgby5hbHBoYSwgby5zaGFkb3csIG8uY29tcG9zaXRlT3BlcmF0aW9uKTtcclxuICAgICAgICAgICAgaWYgKG8gIT0gdGhpcykge1xyXG4gICAgICAgICAgICAgICAgbXR4LnByZXBlbmRNYXRyaXgoby5nZXRNYXRyaXgoby5fcHJvcHMubWF0cml4KSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IHdoaWxlICgobyA9IG8ucGFyZW50KSk7XHJcbiAgICAgICAgcmV0dXJuIHByb3BzO1xyXG4gICAgfTtcclxuICAgIE5vZGUucHJvdG90eXBlLmdldEJvdW5kcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodGhpcy5fYm91bmRzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZWN0YW5nbGUuY29weSh0aGlzLl9ib3VuZHMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH07XHJcbiAgICBOb2RlLnByb3RvdHlwZS5zZXRCb3VuZHMgPSBmdW5jdGlvbiAoeCwgeSwgd2lkdGgsIGhlaWdodCkge1xyXG4gICAgICAgIGlmICh4ID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2JvdW5kcyA9IHg7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fYm91bmRzID0gKHRoaXMuX2JvdW5kcyB8fCBuZXcgcmVjdGFuZ2xlXzEuZGVmYXVsdCgpKS5zZXRWYWx1ZXMoeCwgeSwgd2lkdGgsIGhlaWdodCk7XHJcbiAgICB9O1xyXG4gICAgTm9kZS5wcm90b3R5cGUuZ2V0VHJhbnNmb3JtZWRCb3VuZHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldEJvdW5kcygpO1xyXG4gICAgfTtcclxuICAgIE5vZGUucHJvdG90eXBlLl9nZXRCb3VuZHMgPSBmdW5jdGlvbiAobWF0cml4LCBpZ25vcmVUcmFuc2Zvcm0pIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdHJhbnNmb3JtQm91bmRzKHRoaXMuZ2V0Qm91bmRzKCksIG1hdHJpeCwgaWdub3JlVHJhbnNmb3JtKTtcclxuICAgIH07XHJcbiAgICBOb2RlLnByb3RvdHlwZS5fdHJhbnNmb3JtQm91bmRzID0gZnVuY3Rpb24gKGJvdW5kcywgbWF0cml4LCBpZ25vcmVUcmFuc2Zvcm0pIHtcclxuICAgICAgICBpZiAoIWJvdW5kcykge1xyXG4gICAgICAgICAgICByZXR1cm4gYm91bmRzO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgeCA9IGJvdW5kcy54LCB5ID0gYm91bmRzLnksIHdpZHRoID0gYm91bmRzLndpZHRoLCBoZWlnaHQgPSBib3VuZHMuaGVpZ2h0LCBtdHggPSB0aGlzLl9wcm9wcy5tYXRyaXg7XHJcbiAgICAgICAgbXR4ID0gaWdub3JlVHJhbnNmb3JtID8gbXR4LmlkZW50aXR5KCkgOiB0aGlzLmdldE1hdHJpeChtdHgpO1xyXG4gICAgICAgIGlmICh4IHx8IHkpIHtcclxuICAgICAgICAgICAgbXR4LmFwcGVuZFRyYW5zZm9ybSgwLCAwLCAxLCAxLCAwLCAwLCAwLCAteCwgLXkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobWF0cml4KSB7XHJcbiAgICAgICAgICAgIG10eC5wcmVwZW5kTWF0cml4KG1hdHJpeCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciB4X2EgPSB3aWR0aCAqIG10eC5hLCB4X2IgPSB3aWR0aCAqIG10eC5iO1xyXG4gICAgICAgIHZhciB5X2MgPSBoZWlnaHQgKiBtdHguYywgeV9kID0gaGVpZ2h0ICogbXR4LmQ7XHJcbiAgICAgICAgdmFyIHR4ID0gbXR4LnR4LCB0eSA9IG10eC50eTtcclxuICAgICAgICB2YXIgbWluWCA9IHR4LCBtYXhYID0gdHgsIG1pblkgPSB0eSwgbWF4WSA9IHR5O1xyXG4gICAgICAgIGlmICgoeCA9IHhfYSArIHR4KSA8IG1pblgpIHtcclxuICAgICAgICAgICAgbWluWCA9IHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHggPiBtYXhYKSB7XHJcbiAgICAgICAgICAgIG1heFggPSB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoKHggPSB4X2EgKyB5X2MgKyB0eCkgPCBtaW5YKSB7XHJcbiAgICAgICAgICAgIG1pblggPSB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh4ID4gbWF4WCkge1xyXG4gICAgICAgICAgICBtYXhYID0geDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCh4ID0geV9jICsgdHgpIDwgbWluWCkge1xyXG4gICAgICAgICAgICBtaW5YID0geDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoeCA+IG1heFgpIHtcclxuICAgICAgICAgICAgbWF4WCA9IHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICgoeSA9IHhfYiArIHR5KSA8IG1pblkpIHtcclxuICAgICAgICAgICAgbWluWSA9IHk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHkgPiBtYXhZKSB7XHJcbiAgICAgICAgICAgIG1heFkgPSB5O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoKHkgPSB4X2IgKyB5X2QgKyB0eSkgPCBtaW5ZKSB7XHJcbiAgICAgICAgICAgIG1pblkgPSB5O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh5ID4gbWF4WSkge1xyXG4gICAgICAgICAgICBtYXhZID0geTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCh5ID0geV9kICsgdHkpIDwgbWluWSkge1xyXG4gICAgICAgICAgICBtaW5ZID0geTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoeSA+IG1heFkpIHtcclxuICAgICAgICAgICAgbWF4WSA9IHk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBib3VuZHMuc2V0VmFsdWVzKG1pblgsIG1pblksIG1heFggLSBtaW5YLCBtYXhZIC0gbWluWSk7XHJcbiAgICB9O1xyXG4gICAgTm9kZS5wcm90b3R5cGUub24gPSBmdW5jdGlvbiAodHlwZSwgbGlzdGVuZXIsIG9wdGlvbnMpIHtcclxuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIsIG9wdGlvbnMpO1xyXG4gICAgfTtcclxuICAgIE5vZGUucHJvdG90eXBlLm9mZiA9IGZ1bmN0aW9uICh0eXBlLCBsaXN0ZW5lciwgb3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lciwgb3B0aW9ucyk7XHJcbiAgICB9O1xyXG4gICAgTm9kZS5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uICh0eXBlLCBsaXN0ZW5lciwgb3B0aW9ucykge1xyXG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ2Jvb2xlYW4nKVxyXG4gICAgICAgICAgICBvcHRpb25zID0geyBjYXB0dXJlOiBvcHRpb25zIH07XHJcbiAgICAgICAgdmFyIF9hID0gb3B0aW9ucyB8fCB7fSwgY2FwdHVyZSA9IF9hLmNhcHR1cmUsIG9uY2UgPSBfYS5vbmNlO1xyXG4gICAgICAgIHZhciBldmVudExpc3RlbmVycyA9IGNhcHR1cmUgPyBfY2FwdHVyZUV2ZW50TGlzdGVuZXJzIDogX2V2ZW50TGlzdGVuZXJzO1xyXG4gICAgICAgIHRoaXNbZXZlbnRMaXN0ZW5lcnNdW3R5cGVdID0gdGhpc1tldmVudExpc3RlbmVyc11bdHlwZV0gfHwgW107XHJcbiAgICAgICAgdGhpc1tldmVudExpc3RlbmVyc11bdHlwZV0ucHVzaCh7IGxpc3RlbmVyOiBsaXN0ZW5lciwgb25jZTogb25jZSB9KTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBOb2RlLnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyID0gZnVuY3Rpb24gKHR5cGUsIGxpc3RlbmVyLCBvcHRpb25zKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnYm9vbGVhbicpXHJcbiAgICAgICAgICAgIG9wdGlvbnMgPSB7IGNhcHR1cmU6IG9wdGlvbnMgfTtcclxuICAgICAgICB2YXIgY2FwdHVyZSA9IChvcHRpb25zIHx8IHt9KS5jYXB0dXJlO1xyXG4gICAgICAgIHZhciBldmVudExpc3RlbmVycyA9IGNhcHR1cmUgPyBfY2FwdHVyZUV2ZW50TGlzdGVuZXJzIDogX2V2ZW50TGlzdGVuZXJzO1xyXG4gICAgICAgIGlmICh0aGlzW2V2ZW50TGlzdGVuZXJzXVt0eXBlXSkge1xyXG4gICAgICAgICAgICB2YXIgbGlzdGVuZXJzID0gdGhpc1tldmVudExpc3RlbmVyc11bdHlwZV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdGVuZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgX2xpc3RlbmVyID0gbGlzdGVuZXJzW2ldLmxpc3RlbmVyO1xyXG4gICAgICAgICAgICAgICAgaWYgKGxpc3RlbmVyID09PSBfbGlzdGVuZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzW2V2ZW50TGlzdGVuZXJzXVt0eXBlXS5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgTm9kZS5wcm90b3R5cGUuZGlzcGF0Y2hFdmVudCA9IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgZXZlbnQudGFyZ2V0ID0gdGhpcztcclxuICAgICAgICB2YXIgdHlwZSA9IGV2ZW50LnR5cGU7XHJcbiAgICAgICAgdmFyIGVsZW1lbnRzID0gW3RoaXNdO1xyXG4gICAgICAgIHZhciBwYXJlbnQgPSB0aGlzLnBhcmVudDtcclxuICAgICAgICB3aGlsZSAoZXZlbnQuYnViYmxlcyAmJiBwYXJlbnQpIHtcclxuICAgICAgICAgICAgZWxlbWVudHMucHVzaChwYXJlbnQpO1xyXG4gICAgICAgICAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uIChpKSB7XHJcbiAgICAgICAgICAgIHZhciBlbGVtZW50ID0gZWxlbWVudHNbaV07XHJcbiAgICAgICAgICAgIHZhciBsaXN0ZW5lcnMgPSBlbGVtZW50W19jYXB0dXJlRXZlbnRMaXN0ZW5lcnNdICYmIGVsZW1lbnRbX2NhcHR1cmVFdmVudExpc3RlbmVyc11bdHlwZV07XHJcbiAgICAgICAgICAgIGlmIChsaXN0ZW5lcnMgJiYgbGlzdGVuZXJzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgbGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxpc3RlbmVyID0gX2EubGlzdGVuZXIsIG9uY2UgPSBfYS5vbmNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpc3RlbmVyLmNhbGwoX3RoaXMsIGV2ZW50KTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAob25jZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQudHlwZSwgbGlzdGVuZXIsIHsgY2FwdHVyZTogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIWV2ZW50LmJ1YmJsZXMgJiYgZXZlbnQuY2FuY2VsQnViYmxlKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiYnJlYWtcIjtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vIGNhcHR1cmUgcGhhc2VcclxuICAgICAgICBmb3IgKHZhciBpID0gZWxlbWVudHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgdmFyIHN0YXRlXzEgPSBfbG9vcF8xKGkpO1xyXG4gICAgICAgICAgICBpZiAoc3RhdGVfMSA9PT0gXCJicmVha1wiKVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGJ1YmJsaW5nXHJcbiAgICAgICAgaWYgKCFldmVudC5jYW5jZWxCdWJibGUpIHtcclxuICAgICAgICAgICAgdmFyIF9sb29wXzIgPSBmdW5jdGlvbiAoaSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSBlbGVtZW50c1tpXTtcclxuICAgICAgICAgICAgICAgIHZhciBsaXN0ZW5lcnMgPSBlbGVtZW50W19ldmVudExpc3RlbmVyc10gJiYgZWxlbWVudFtfZXZlbnRMaXN0ZW5lcnNdW3R5cGVdO1xyXG4gICAgICAgICAgICAgICAgaWYgKGxpc3RlbmVycyAmJiBsaXN0ZW5lcnMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsaXN0ZW5lciA9IF9hLmxpc3RlbmVyLCBvbmNlID0gX2Eub25jZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXIuY2FsbChfdGhpcywgZXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob25jZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LnR5cGUsIGxpc3RlbmVyLCB7IGNhcHR1cmU6IGZhbHNlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoIWV2ZW50LmJ1YmJsZXMgfHwgZXZlbnQuY2FuY2VsQnViYmxlKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcImJyZWFrXCI7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHZhciBzdGF0ZV8yID0gX2xvb3BfMihpKTtcclxuICAgICAgICAgICAgICAgIGlmIChzdGF0ZV8yID09PSBcImJyZWFrXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIE5vZGU7XHJcbn0oKSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IE5vZGU7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgZ3JhcGhpY3NfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9ncmFwaGljc1wiKSk7XHJcbnZhciBTaGFwZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhTaGFwZSwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIFNoYXBlKCkge1xyXG4gICAgICAgIHJldHVybiBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xyXG4gICAgfVxyXG4gICAgU2hhcGUucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIChjdHgpIHtcclxuICAgICAgICB0aGlzLmNsZWFyKCk7XHJcbiAgICAgICAgdGhpcy5kcmF3KCk7XHJcbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5yZW5kZXIuY2FsbCh0aGlzLCBjdHgpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBTaGFwZTtcclxufShncmFwaGljc18xLmRlZmF1bHQpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gU2hhcGU7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgc2hhcGVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vc2hhcGVcIikpO1xyXG52YXIgQ2lyY2xlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKENpcmNsZSwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIENpcmNsZShyLCBvcHRpb24pIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLm9wdGlvbiA9IG9wdGlvbiB8fCB7fTtcclxuICAgICAgICBfdGhpcy5yID0gcjtcclxuICAgICAgICBfdGhpcy5fZHAgPSBNYXRoLlBJICogMjtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICBDaXJjbGUucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5iZWdpblBhdGgoKTtcclxuICAgICAgICB0aGlzLmFyYygwLCAwLCB0aGlzLnIsIDAsIHRoaXMuX2RwLCBmYWxzZSk7XHJcbiAgICAgICAgaWYgKHRoaXMub3B0aW9uLnN0cm9rZVN0eWxlKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbi5saW5lV2lkdGggIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5saW5lV2lkdGgodGhpcy5vcHRpb24ubGluZVdpZHRoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnN0cm9rZVN0eWxlKHRoaXMub3B0aW9uLnN0cm9rZVN0eWxlKTtcclxuICAgICAgICAgICAgdGhpcy5zdHJva2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMub3B0aW9uLmZpbGxTdHlsZSkge1xyXG4gICAgICAgICAgICB0aGlzLmZpbGxTdHlsZSh0aGlzLm9wdGlvbi5maWxsU3R5bGUpO1xyXG4gICAgICAgICAgICB0aGlzLmZpbGwoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIENpcmNsZTtcclxufShzaGFwZV8xLmRlZmF1bHQpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gQ2lyY2xlO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIHNoYXBlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL3NoYXBlXCIpKTtcclxudmFyIFJlY3QgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoUmVjdCwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIFJlY3Qod2lkdGgsIGhlaWdodCwgb3B0aW9uKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgICAgIF90aGlzLmhlaWdodCA9IGhlaWdodDtcclxuICAgICAgICBfdGhpcy5vcHRpb24gPSBvcHRpb24gfHwge307XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgUmVjdC5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodGhpcy5vcHRpb24uZmlsbFN0eWxlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsbFN0eWxlKHRoaXMub3B0aW9uLmZpbGxTdHlsZSk7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsbFJlY3QoMCwgMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5vcHRpb24uc3Ryb2tlU3R5bGUpIHtcclxuICAgICAgICAgICAgdGhpcy5zdHJva2VTdHlsZSh0aGlzLm9wdGlvbi5zdHJva2VTdHlsZSk7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb24ubGluZVdpZHRoID09PSAnbnVtYmVyJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5saW5lV2lkdGgodGhpcy5vcHRpb24ubGluZVdpZHRoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnN0cm9rZVJlY3QoMCwgMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gUmVjdDtcclxufShzaGFwZV8xLmRlZmF1bHQpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gUmVjdDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBncm91cF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2dyb3VwXCIpKTtcclxudmFyIGluZGV4XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL3JlbmRlci9pbmRleFwiKSk7XHJcbnZhciBldmVudF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9ldmVudC9ldmVudFwiKSk7XHJcbnZhciBTdGFnZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhTdGFnZSwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIFN0YWdlKGNvbnRhaW5lciwgd2lkdGgsIGhlaWdodCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xyXG4gICAgICAgIF90aGlzLndpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgX3RoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgICAgIHZhciBjdHggPSBjb250YWluZXIuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgdmFyIGRwciA9IHd4LmdldFN5c3RlbUluZm9TeW5jKCkucGl4ZWxSYXRpbztcclxuICAgICAgICBjb250YWluZXIud2lkdGggPSB3aWR0aCAqIGRwcjtcclxuICAgICAgICBjb250YWluZXIuaGVpZ2h0ID0gaGVpZ2h0ICogZHByO1xyXG4gICAgICAgIGN0eC5zY2FsZShkcHIsIGRwcik7XHJcbiAgICAgICAgX3RoaXMuZHByID0gZHByO1xyXG4gICAgICAgIF90aGlzLmN0eCA9IGN0eDtcclxuICAgICAgICBfdGhpcy5yZW5kZXIgPSBuZXcgaW5kZXhfMS5kZWZhdWx0KGN0eCwgY29udGFpbmVyLndpZHRoLCBjb250YWluZXIuaGVpZ2h0KTtcclxuICAgICAgICBfdGhpcy5oaXRDdHggPSBudWxsO1xyXG4gICAgICAgIF90aGlzLndpbGxEcmFnT2JqZWN0ID0gbnVsbDtcclxuICAgICAgICBfdGhpcy5fb3Zlck9iamVjdCA9IG51bGw7XHJcbiAgICAgICAgX3RoaXMuX19faW5zdGFuY2VvZiA9ICdTdGFnZSc7XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgU3RhZ2UucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnJlbmRlci51cGRhdGUodGhpcyk7XHJcbiAgICB9O1xyXG4gICAgU3RhZ2UucHJvdG90eXBlLnNldEhpdENhbnZhcyA9IGZ1bmN0aW9uIChoaXRDYW52YXMpIHtcclxuICAgICAgICB2YXIgaGl0Q3R4ID0gaGl0Q2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgICAgaGl0Q2FudmFzLndpZHRoID0gdGhpcy53aWR0aDtcclxuICAgICAgICBoaXRDYW52YXMuaGVpZ2h0ID0gdGhpcy5oZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5oaXRDdHggPSBoaXRDdHg7XHJcbiAgICB9O1xyXG4gICAgU3RhZ2UucHJvdG90eXBlLmdldFRleHRXaWR0aCA9IGZ1bmN0aW9uICh0ZXh0LCBmb250KSB7XHJcbiAgICAgICAgdGhpcy5jdHguZm9udCA9IGZvbnQ7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY3R4Lm1lYXN1cmVUZXh0KHRleHQpLndpZHRoO1xyXG4gICAgfTtcclxuICAgIFN0YWdlLnByb3RvdHlwZS50b3VjaFN0YXJ0SGFuZGxlciA9IGZ1bmN0aW9uIChldnQpIHtcclxuICAgICAgICB2YXIgcDEgPSBldnQuY2hhbmdlZFRvdWNoZXNbMF07XHJcbiAgICAgICAgZXZ0LnN0YWdlWCA9IE1hdGgucm91bmQocDEueCAqIHRoaXMuc2NhbGVYKTtcclxuICAgICAgICBldnQuc3RhZ2VZID0gTWF0aC5yb3VuZChwMS55ICogdGhpcy5zY2FsZVkpO1xyXG4gICAgICAgIHZhciBvYmogPSB0aGlzLmdldE9iamVjdFVuZGVyUG9pbnQoZXZ0KTtcclxuICAgICAgICB0aGlzLndpbGxEcmFnT2JqZWN0ID0gb2JqO1xyXG4gICAgICAgIHRoaXMuX21vdXNlRG93blggPSBldnQuc3RhZ2VYO1xyXG4gICAgICAgIHRoaXMuX21vdXNlRG93blkgPSBldnQuc3RhZ2VZO1xyXG4gICAgICAgIHRoaXMucHJlU3RhZ2VYID0gZXZ0LnN0YWdlWDtcclxuICAgICAgICB0aGlzLnByZVN0YWdlWSA9IGV2dC5zdGFnZVk7XHJcbiAgICAgICAgdGhpcy5fX2Rpc3BhdGNoRXZlbnQob2JqLCBldnQpO1xyXG4gICAgfTtcclxuICAgIFN0YWdlLnByb3RvdHlwZS50b3VjaE1vdmVIYW5kbGVyID0gZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgICAgIHZhciBwMSA9IGV2dC5jaGFuZ2VkVG91Y2hlc1swXTtcclxuICAgICAgICBldnQuc3RhZ2VYID0gTWF0aC5yb3VuZChwMS54ICogdGhpcy5zY2FsZVgpO1xyXG4gICAgICAgIGV2dC5zdGFnZVkgPSBNYXRoLnJvdW5kKHAxLnkgKiB0aGlzLnNjYWxlWSk7XHJcbiAgICAgICAgdmFyIG9iaiA9IHRoaXMuZ2V0T2JqZWN0VW5kZXJQb2ludChldnQpO1xyXG4gICAgICAgIHZhciBtb2NrRXZ0ID0gbmV3IGV2ZW50XzEuZGVmYXVsdCgpO1xyXG4gICAgICAgIG1vY2tFdnQuc3RhZ2VYID0gZXZ0LnN0YWdlWDtcclxuICAgICAgICBtb2NrRXZ0LnN0YWdlWSA9IGV2dC5zdGFnZVk7XHJcbiAgICAgICAgbW9ja0V2dC5vcmlnaW5hbEV2ZW50ID0gZXZ0O1xyXG4gICAgICAgIGlmICh0aGlzLndpbGxEcmFnT2JqZWN0KSB7XHJcbiAgICAgICAgICAgIG1vY2tFdnQudHlwZSA9ICdkcmFnJztcclxuICAgICAgICAgICAgbW9ja0V2dC5keCA9IG1vY2tFdnQuc3RhZ2VYIC0gdGhpcy5wcmVTdGFnZVg7XHJcbiAgICAgICAgICAgIG1vY2tFdnQuZHkgPSBtb2NrRXZ0LnN0YWdlWSAtIHRoaXMucHJlU3RhZ2VZO1xyXG4gICAgICAgICAgICB0aGlzLnByZVN0YWdlWCA9IG1vY2tFdnQuc3RhZ2VYO1xyXG4gICAgICAgICAgICB0aGlzLnByZVN0YWdlWSA9IG1vY2tFdnQuc3RhZ2VZO1xyXG4gICAgICAgICAgICB0aGlzLndpbGxEcmFnT2JqZWN0LmRpc3BhdGNoRXZlbnQobW9ja0V2dCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChvYmopIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX292ZXJPYmplY3QgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX292ZXJPYmplY3QgPSBvYmo7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAob2JqLmlkICE9PSB0aGlzLl9vdmVyT2JqZWN0LmlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fb3Zlck9iamVjdCA9IG9iajtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX19kaXNwYXRjaEV2ZW50KG9iaiwgZXZ0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLl9vdmVyT2JqZWN0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX292ZXJPYmplY3QgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBTdGFnZS5wcm90b3R5cGUudG91Y2hFbmRIYW5kbGVyID0gZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgICAgIHZhciBwMSA9IGV2dC5jaGFuZ2VkVG91Y2hlc1swXTtcclxuICAgICAgICBldnQuc3RhZ2VYID0gTWF0aC5yb3VuZChwMS54ICogdGhpcy5zY2FsZVgpO1xyXG4gICAgICAgIGV2dC5zdGFnZVkgPSBNYXRoLnJvdW5kKHAxLnkgKiB0aGlzLnNjYWxlWSk7XHJcbiAgICAgICAgdmFyIG9iaiA9IHRoaXMuZ2V0T2JqZWN0VW5kZXJQb2ludChldnQpO1xyXG4gICAgICAgIHRoaXMuX21vdXNlVXBYID0gZXZ0LnN0YWdlWDtcclxuICAgICAgICB0aGlzLl9tb3VzZVVwWSA9IGV2dC5zdGFnZVk7XHJcbiAgICAgICAgdGhpcy53aWxsRHJhZ09iamVjdCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5wcmVTdGFnZVggPSBudWxsO1xyXG4gICAgICAgIHRoaXMucHJlU3RhZ2VZID0gbnVsbDtcclxuICAgICAgICB0aGlzLl9fZGlzcGF0Y2hFdmVudChvYmosIGV2dCk7XHJcbiAgICAgICAgaWYgKG9iaiAmJlxyXG4gICAgICAgICAgICBNYXRoLmFicyh0aGlzLl9tb3VzZURvd25YIC0gdGhpcy5fbW91c2VVcFgpIDwgMzAgJiZcclxuICAgICAgICAgICAgTWF0aC5hYnModGhpcy5fbW91c2VEb3duWSAtIHRoaXMuX21vdXNlVXBZKSA8IDMwKSB7XHJcbiAgICAgICAgICAgIHZhciBtb2NrRXZ0ID0gbmV3IGV2ZW50XzEuZGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBtb2NrRXZ0LnN0YWdlWCA9IGV2dC5zdGFnZVg7XHJcbiAgICAgICAgICAgIG1vY2tFdnQuc3RhZ2VZID0gZXZ0LnN0YWdlWTtcclxuICAgICAgICAgICAgbW9ja0V2dC5vcmlnaW5hbEV2ZW50ID0gZXZ0O1xyXG4gICAgICAgICAgICBtb2NrRXZ0LnR5cGUgPSAndGFwJztcclxuICAgICAgICAgICAgb2JqLmRpc3BhdGNoRXZlbnQobW9ja0V2dCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFN0YWdlLnByb3RvdHlwZS5nZXRPYmplY3RVbmRlclBvaW50ID0gZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgICAgIHZhciB4ID0gZXZ0LnN0YWdlWDtcclxuICAgICAgICB2YXIgeSA9IGV2dC5zdGFnZVk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9iamVjdHNVbmRlclBvaW50KHgsIHksIHRoaXMuaGl0Q3R4KSB8fCB0aGlzO1xyXG4gICAgfTtcclxuICAgIFN0YWdlLnByb3RvdHlwZS5fX2Rpc3BhdGNoRXZlbnQgPSBmdW5jdGlvbiAob2JqLCBldnQpIHtcclxuICAgICAgICBpZiAoIW9iailcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIHZhciBtb2NrRXZ0ID0gbmV3IGV2ZW50XzEuZGVmYXVsdCgpO1xyXG4gICAgICAgIG1vY2tFdnQuc3RhZ2VYID0gZXZ0LnN0YWdlWDtcclxuICAgICAgICBtb2NrRXZ0LnN0YWdlWSA9IGV2dC5zdGFnZVk7XHJcbiAgICAgICAgbW9ja0V2dC5vcmlnaW5hbEV2ZW50ID0gZXZ0O1xyXG4gICAgICAgIG1vY2tFdnQudHlwZSA9IGV2dC50eXBlO1xyXG4gICAgICAgIG9iai5kaXNwYXRjaEV2ZW50KG1vY2tFdnQpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBTdGFnZTtcclxufShncm91cF8xLmRlZmF1bHQpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gU3RhZ2U7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBncm91cF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9ub2RlL2dyb3VwXCIpKTtcclxudmFyIFJlbmRlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFJlbmRlcihjdHgsIHdpZHRoLCBoZWlnaHQpIHtcclxuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcclxuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICB9XHJcbiAgICBSZW5kZXIucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIChzdGFnZSkge1xyXG4gICAgICAgIHRoaXMuY2xlYXIodGhpcy5jdHgsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuICAgICAgICB0aGlzLnJlbmRlcih0aGlzLmN0eCwgc3RhZ2UpO1xyXG4gICAgfTtcclxuICAgIFJlbmRlci5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoY3R4LCB3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcclxuICAgIH07XHJcbiAgICBSZW5kZXIucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIChjdHgsIG8pIHtcclxuICAgICAgICB2YXIgbXR4ID0gby5fcHJvcHMubWF0cml4O1xyXG4gICAgICAgIG8uZ2V0TWF0cml4KG10eCk7XHJcbiAgICAgICAgaWYgKG8uY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgdmFyIGxpc3QgPSBvLmNoaWxkcmVuLnNsaWNlKDApO1xyXG4gICAgICAgICAgICB2YXIgbCA9IGxpc3QubGVuZ3RoO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGw7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGNoaWxkID0gbGlzdFtpXTtcclxuICAgICAgICAgICAgICAgIGlmICghY2hpbGQuaXNWaXNpYmxlKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGN0eC5zYXZlKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW5kZXIoY3R4LCBjaGlsZCwgbXR4KTtcclxuICAgICAgICAgICAgICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcihjdHgsIG8sIG10eCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFJlbmRlci5wcm90b3R5cGUuX3JlbmRlciA9IGZ1bmN0aW9uIChjdHgsIG8sIG10eCkge1xyXG4gICAgICAgIHZhciBtYXNrID0gby5tYXNrO1xyXG4gICAgICAgIGlmIChtdHgpIHtcclxuICAgICAgICAgICAgY3R4LnRyYW5zZm9ybShtdHguYSwgbXR4LmIsIG10eC5jLCBtdHguZCwgbXR4LnR4LCBtdHgudHkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBtdHggPSBvLl9wcm9wcy5tYXRyaXg7XHJcbiAgICAgICAgaWYgKG1hc2spIHtcclxuICAgICAgICAgICAgbWFzay5nZXRNYXRyaXgobXR4KTtcclxuICAgICAgICAgICAgY3R4LnRyYW5zZm9ybShtdHguYSwgbXR4LmIsIG10eC5jLCBtdHguZCwgbXR4LnR4LCBtdHgudHkpO1xyXG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgICAgIG1hc2sucmVuZGVyKGN0eCk7XHJcbiAgICAgICAgICAgIGN0eC5jbGlwKCk7XHJcbiAgICAgICAgICAgIG10eC5pbnZlcnQoKTtcclxuICAgICAgICAgICAgY3R4LnRyYW5zZm9ybShtdHguYSwgbXR4LmIsIG10eC5jLCBtdHguZCwgbXR4LnR4LCBtdHgudHkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBvLmdldE1hdHJpeChtdHgpO1xyXG4gICAgICAgIGN0eC50cmFuc2Zvcm0obXR4LmEsIG10eC5iLCBtdHguYywgbXR4LmQsIG10eC50eCwgbXR4LnR5KTtcclxuICAgICAgICB2YXIgcHJvcHMgPSBvLmdldENvbmNhdGVuYXRlZERpc3BsYXlQcm9wcyhvLl9wcm9wcyk7XHJcbiAgICAgICAgbXR4ID0gcHJvcHMubWF0cml4O1xyXG4gICAgICAgIGN0eC5nbG9iYWxBbHBoYSAqPSBvLl9wcm9wcy5hbHBoYTtcclxuICAgICAgICBpZiAoby5jb21wb3NpdGVPcGVyYXRpb24pIHtcclxuICAgICAgICAgICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9IG8uY29tcG9zaXRlT3BlcmF0aW9uO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoby5zaGFkb3cpIHtcclxuICAgICAgICAgICAgdGhpcy5fYXBwbHlTaGFkb3coY3R4LCBvLnNoYWRvdyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChvIGluc3RhbmNlb2YgZ3JvdXBfMS5kZWZhdWx0KSB7XHJcbiAgICAgICAgICAgIHZhciBsaXN0ID0gby5jaGlsZHJlbi5zbGljZSgwKTtcclxuICAgICAgICAgICAgdmFyIGwgPSBsaXN0Lmxlbmd0aDtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGN0eC5zYXZlKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW5kZXIoY3R4LCBsaXN0W2ldKTtcclxuICAgICAgICAgICAgICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIG8ucmVuZGVyKGN0eCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFJlbmRlci5wcm90b3R5cGUuX2FwcGx5U2hhZG93ID0gZnVuY3Rpb24gKGN0eCwgc2hhZG93KSB7XHJcbiAgICAgICAgc2hhZG93ID0gc2hhZG93O1xyXG4gICAgICAgIGN0eC5zaGFkb3dDb2xvciA9IHNoYWRvdy5jb2xvcjtcclxuICAgICAgICBjdHguc2hhZG93T2Zmc2V0WCA9IHNoYWRvdy5vZmZzZXRYO1xyXG4gICAgICAgIGN0eC5zaGFkb3dPZmZzZXRZID0gc2hhZG93Lm9mZnNldFk7XHJcbiAgICAgICAgY3R4LnNoYWRvd0JsdXIgPSBzaGFkb3cuYmx1cjtcclxuICAgIH07XHJcbiAgICByZXR1cm4gUmVuZGVyO1xyXG59KCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBSZW5kZXI7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBVSUQgPSB7XHJcbiAgICBfbmV4dElEOiAwLFxyXG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIFVJRC5fbmV4dElEKys7XHJcbiAgICB9XHJcbn07XHJcbmV4cG9ydHMuZGVmYXVsdCA9IFVJRDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==