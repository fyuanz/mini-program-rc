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
var index_1 = __importDefault(__webpack_require__(/*! ./render/index */ "./src/render/index.ts"));
var stage_1 = __importDefault(__webpack_require__(/*! ./node/stage */ "./src/node/stage.ts"));
var group_1 = __importDefault(__webpack_require__(/*! ./node/group */ "./src/node/group.ts"));
var bitmap_1 = __importDefault(__webpack_require__(/*! ./node/bitmap */ "./src/node/bitmap.ts"));
var text_1 = __importDefault(__webpack_require__(/*! ./node/text */ "./src/node/text.ts"));
var graphics_1 = __importDefault(__webpack_require__(/*! ./node/graphics */ "./src/node/graphics.ts"));
var shape_1 = __importDefault(__webpack_require__(/*! ./node/shape/shape */ "./src/node/shape/shape.ts"));
var rect_1 = __importDefault(__webpack_require__(/*! ./node/shape/rect */ "./src/node/shape/rect.ts"));
var circle_1 = __importDefault(__webpack_require__(/*! ./node/shape/circle */ "./src/node/shape/circle.ts"));
var rounded_rect_1 = __importDefault(__webpack_require__(/*! ./node/shape/rounded-rect */ "./src/node/shape/rounded-rect.ts"));
var arrow_path_1 = __importDefault(__webpack_require__(/*! ./node/shape/arrow-path */ "./src/node/shape/arrow-path.ts"));
var ellipse_1 = __importDefault(__webpack_require__(/*! ./node/shape/ellipse */ "./src/node/shape/ellipse.ts"));
var polygon_1 = __importDefault(__webpack_require__(/*! ./node/shape/polygon */ "./src/node/shape/polygon.ts"));
var sector_1 = __importDefault(__webpack_require__(/*! ./node/shape/sector */ "./src/node/shape/sector.ts"));
var equilateral_polygon_1 = __importDefault(__webpack_require__(/*! ./node/shape/equilateral-polygon */ "./src/node/shape/equilateral-polygon.ts"));
var utils = __importStar(__webpack_require__(/*! ./utils/util */ "./src/utils/util.ts"));
var mprc = {
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
    loadImage: utils.loadImage
};
exports.default = mprc;


/***/ }),

/***/ "./src/node/bitmap.ts":
/*!****************************!*\
  !*** ./src/node/bitmap.ts ***!
  \****************************/
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
var Bitmap = /** @class */ (function (_super) {
    __extends(Bitmap, _super);
    function Bitmap(img) {
        var _this = _super.call(this) || this;
        if (Bitmap.cache[img.src]) {
            _this.img = Bitmap.cache[img.src];
            _this.rect = [0, 0, _this.img.width, _this.img.height];
            _this.width = _this.img.width;
            _this.height = _this.img.height;
        }
        else {
            _this.img = img;
            _this.rect = [0, 0, img.width, img.height];
            _this.width = img.width;
            _this.height = img.height;
            Bitmap.cache[img.src] = img;
        }
        return _this;
    }
    Bitmap.prototype.render = function (ctx) {
        var rect = this.rect;
        ctx.drawImage(this.img, rect[0], rect[1], rect[2], rect[3], 0, 0, rect[2], rect[3]);
    };
    return Bitmap;
}(node_1.default));
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
            var hitBox = child.hitBox;
            if (!child.isVisible() || child.ignoreHit) {
                continue;
            }
            if (!this._testMask(child, x, y, ctx)) {
                continue;
            }
            if (!hitBox && child instanceof Group) {
                var result = child._getObjectsUnderPoint(x, y, ctx);
                if (result)
                    return !this.mouseChildren ? this : result;
            }
            else {
                var props = child.getConcatenatedDisplayProps(child._props);
                var mtx = props.matrix;
                if (hitBox) {
                    child.setBounds(0, 0, child.width, child.height);
                    var bounds = child._getBounds(child.parent._props.matrix);
                    var AABB = [bounds.x, bounds.y, bounds.width, bounds.height];
                    if (!this.checkPointInAABB(x, y, AABB)) {
                        continue;
                    }
                    if (child instanceof Group) {
                        var result = child._getObjectsUnderPoint(x, y, ctx);
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

/***/ "./src/node/shape/arrow-path.ts":
/*!**************************************!*\
  !*** ./src/node/shape/arrow-path.ts ***!
  \**************************************/
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
var shape_1 = __importDefault(__webpack_require__(/*! ./shape */ "./src/node/shape/shape.ts"));
var ArrowPath = /** @class */ (function (_super) {
    __extends(ArrowPath, _super);
    function ArrowPath(path, option) {
        var _this = _super.call(this) || this;
        _this.path = path;
        _this.option = Object.assign({
            strokeStyle: 'black',
            lineWidth: 1,
            headSize: 10
        }, option);
        return _this;
    }
    ArrowPath.prototype.draw = function () {
        var path = this.path;
        this.beginPath();
        var len = path.length;
        if (len === 2) {
            this.drawArrow(path[0].x, path[0].y, path[1].x, path[1].y, 30);
        }
        else {
            this.moveTo(path[0].x, path[0].y);
            for (var i = 1; i < len - 1; i++) {
                this.lineTo(path[i].x, path[i].y);
            }
            this.drawArrow(path[len - 2].x, path[len - 2].y, path[len - 1].x, path[len - 1].y, 30);
        }
        this.stroke();
    };
    ArrowPath.prototype.drawArrow = function (fromX, fromY, toX, toY, theta) {
        var angle = (Math.atan2(fromY - toY, fromX - toX) * 180) / Math.PI, angle1 = ((angle + theta) * Math.PI) / 180, angle2 = ((angle - theta) * Math.PI) / 180, hs = this.option.headSize, topX = hs * Math.cos(angle1), topY = hs * Math.sin(angle1), botX = hs * Math.cos(angle2), botY = hs * Math.sin(angle2);
        var arrowX = fromX - topX, arrowY = fromY - topY;
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
    };
    return ArrowPath;
}(shape_1.default));
exports.default = ArrowPath;


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
var shape_1 = __importDefault(__webpack_require__(/*! ./shape */ "./src/node/shape/shape.ts"));
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

/***/ "./src/node/shape/ellipse.ts":
/*!***********************************!*\
  !*** ./src/node/shape/ellipse.ts ***!
  \***********************************/
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
var shape_1 = __importDefault(__webpack_require__(/*! ./shape */ "./src/node/shape/shape.ts"));
var Ellipse = /** @class */ (function (_super) {
    __extends(Ellipse, _super);
    function Ellipse(width, height, option) {
        var _this = _super.call(this) || this;
        _this.option = option || {};
        _this.width = width;
        _this.height = height;
        return _this;
    }
    Ellipse.prototype.draw = function () {
        var w = this.width;
        var h = this.height;
        var k = 0.5522848;
        var ox = (w / 2) * k;
        var oy = (h / 2) * k;
        var xe = w;
        var ye = h;
        var xm = w / 2;
        var ym = h / 2;
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
    };
    return Ellipse;
}(shape_1.default));
exports.default = Ellipse;


/***/ }),

/***/ "./src/node/shape/equilateral-polygon.ts":
/*!***********************************************!*\
  !*** ./src/node/shape/equilateral-polygon.ts ***!
  \***********************************************/
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
var shape_1 = __importDefault(__webpack_require__(/*! ./shape */ "./src/node/shape/shape.ts"));
var EquilateralPolygon = /** @class */ (function (_super) {
    __extends(EquilateralPolygon, _super);
    function EquilateralPolygon(num, r, options) {
        var _this = _super.call(this) || this;
        _this.num = num;
        _this.r = r;
        _this.options = options || {};
        _this.vertex = [];
        _this.initVertex();
        return _this;
    }
    EquilateralPolygon.prototype.initVertex = function () {
        this.vertex.length = [];
        var num = this.num;
        var r = this.r;
        var i, startX, startY, newX, newY;
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
    };
    EquilateralPolygon.prototype.draw = function () {
        this.beginPath();
        this.moveTo(this.vertex[0][0], this.vertex[0][1]);
        for (var i = 1, len = this.vertex.length; i < len; i++) {
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
    };
    return EquilateralPolygon;
}(shape_1.default));
exports.default = EquilateralPolygon;


/***/ }),

/***/ "./src/node/shape/polygon.ts":
/*!***********************************!*\
  !*** ./src/node/shape/polygon.ts ***!
  \***********************************/
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
var shape_1 = __importDefault(__webpack_require__(/*! ./shape */ "./src/node/shape/shape.ts"));
var Polygon = /** @class */ (function (_super) {
    __extends(Polygon, _super);
    function Polygon(vertex, options) {
        var _this = _super.call(this) || this;
        _this.vertex = vertex || [];
        _this.options = options || {};
        _this.strokeColor = _this.options.strokeColor;
        _this.fillColor = _this.options.fillColor;
        return _this;
    }
    Polygon.prototype.draw = function () {
        this.clear().beginPath();
        this.strokeStyle(this.strokeColor);
        this.moveTo(this.vertex[0][0], this.vertex[0][1]);
        for (var i = 1, len = this.vertex.length; i < len; i++) {
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
    };
    return Polygon;
}(shape_1.default));
exports.default = Polygon;


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
var shape_1 = __importDefault(__webpack_require__(/*! ./shape */ "./src/node/shape/shape.ts"));
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

/***/ "./src/node/shape/rounded-rect.ts":
/*!****************************************!*\
  !*** ./src/node/shape/rounded-rect.ts ***!
  \****************************************/
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
var shape_1 = __importDefault(__webpack_require__(/*! ./shape */ "./src/node/shape/shape.ts"));
var RoundedRect = /** @class */ (function (_super) {
    __extends(RoundedRect, _super);
    function RoundedRect(width, height, r, option) {
        var _this = _super.call(this) || this;
        _this.option = Object.assign({
            lineWidth: 1,
            lt: true,
            rt: true,
            lb: true,
            rb: true
        }, option);
        _this.r = r || 0;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    RoundedRect.prototype.draw = function () {
        var width = this.width, height = this.height, r = this.r;
        var ax = r, ay = 0, bx = width, by = 0, cx = width, cy = height, dx = 0, dy = height, ex = 0, ey = 0;
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
    };
    return RoundedRect;
}(shape_1.default));
exports.default = RoundedRect;


/***/ }),

/***/ "./src/node/shape/sector.ts":
/*!**********************************!*\
  !*** ./src/node/shape/sector.ts ***!
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
var shape_1 = __importDefault(__webpack_require__(/*! ./shape */ "./src/node/shape/shape.ts"));
var Sector = /** @class */ (function (_super) {
    __extends(Sector, _super);
    function Sector(r, from, to, option) {
        var _this = _super.call(this) || this;
        _this.option = option || {};
        _this.r = r;
        _this.from = from;
        _this.to = to;
        return _this;
    }
    Sector.prototype.draw = function () {
        this.beginPath()
            .moveTo(0, 0)
            .arc(0, 0, this.r, this.from, this.to)
            .closePath()
            .fillStyle(this.option.fillStyle)
            .fill()
            .strokeStyle(this.option.strokeStyle)
            .lineWidth(this.option.lineWidth)
            .stroke();
    };
    return Sector;
}(shape_1.default));
exports.default = Sector;


/***/ }),

/***/ "./src/node/shape/shape.ts":
/*!*********************************!*\
  !*** ./src/node/shape/shape.ts ***!
  \*********************************/
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
var graphics_1 = __importDefault(__webpack_require__(/*! ../graphics */ "./src/node/graphics.ts"));
var Shape = /** @class */ (function (_super) {
    __extends(Shape, _super);
    function Shape() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Shape.prototype.draw = function () { };
    Shape.prototype.render = function (ctx) {
        this.clear();
        this.draw();
        _super.prototype.render.call(this, ctx);
    };
    return Shape;
}(graphics_1.default));
exports.default = Shape;


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
    Stage.prototype.loadImage = function (url) {
        var canvas = this.container;
        return new Promise(function (resolve, reject) {
            var image = canvas.createImage();
            image.src = url;
            image.onload = function () {
                resolve(image);
            };
            image.onerror = function (error) {
                reject(error);
            };
        });
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
        if (this.willDragObject && evt.changedTouches.length === 1) {
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

/***/ "./src/node/text.ts":
/*!**************************!*\
  !*** ./src/node/text.ts ***!
  \**************************/
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
var Text = /** @class */ (function (_super) {
    __extends(Text, _super);
    function Text(text, option) {
        var _this = _super.call(this) || this;
        _this.text = text;
        option = option || {};
        _this.font = option.font || '10px sans-serif';
        _this.color = option.color || 'black';
        _this.textAlign = option.textAlign || 'left';
        _this.baseline = option.baseline || 'top';
        return _this;
    }
    Text.prototype.render = function (ctx) {
        ctx.font = this.font;
        ctx.fillStyle = this.color;
        ctx.textAlign = this.textAlign;
        ctx.textBaseline = this.baseline;
        ctx.fillText(this.text, 0, 0);
    };
    return Text;
}(node_1.default));
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
    return new Promise(function (resolve, reject) {
        var image = canvas.createImage();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9taW5pUHJvZ3JhbVJDL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9taW5pUHJvZ3JhbVJDL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL21pbmlQcm9ncmFtUkMvLi9zcmMvZXZlbnQvZXZlbnQudHMiLCJ3ZWJwYWNrOi8vbWluaVByb2dyYW1SQy8uL3NyYy9nZW9tL2Rpc3BsYXlQcm9wcy50cyIsIndlYnBhY2s6Ly9taW5pUHJvZ3JhbVJDLy4vc3JjL2dlb20vbWF0cml4MmQuanMiLCJ3ZWJwYWNrOi8vbWluaVByb2dyYW1SQy8uL3NyYy9nZW9tL3JlY3RhbmdsZS50cyIsIndlYnBhY2s6Ly9taW5pUHJvZ3JhbVJDLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL21pbmlQcm9ncmFtUkMvLi9zcmMvbm9kZS9iaXRtYXAudHMiLCJ3ZWJwYWNrOi8vbWluaVByb2dyYW1SQy8uL3NyYy9ub2RlL2dyYXBoaWNzLnRzIiwid2VicGFjazovL21pbmlQcm9ncmFtUkMvLi9zcmMvbm9kZS9ncm91cC50cyIsIndlYnBhY2s6Ly9taW5pUHJvZ3JhbVJDLy4vc3JjL25vZGUvbm9kZS50cyIsIndlYnBhY2s6Ly9taW5pUHJvZ3JhbVJDLy4vc3JjL25vZGUvc2hhcGUvYXJyb3ctcGF0aC50cyIsIndlYnBhY2s6Ly9taW5pUHJvZ3JhbVJDLy4vc3JjL25vZGUvc2hhcGUvY2lyY2xlLnRzIiwid2VicGFjazovL21pbmlQcm9ncmFtUkMvLi9zcmMvbm9kZS9zaGFwZS9lbGxpcHNlLnRzIiwid2VicGFjazovL21pbmlQcm9ncmFtUkMvLi9zcmMvbm9kZS9zaGFwZS9lcXVpbGF0ZXJhbC1wb2x5Z29uLnRzIiwid2VicGFjazovL21pbmlQcm9ncmFtUkMvLi9zcmMvbm9kZS9zaGFwZS9wb2x5Z29uLnRzIiwid2VicGFjazovL21pbmlQcm9ncmFtUkMvLi9zcmMvbm9kZS9zaGFwZS9yZWN0LnRzIiwid2VicGFjazovL21pbmlQcm9ncmFtUkMvLi9zcmMvbm9kZS9zaGFwZS9yb3VuZGVkLXJlY3QudHMiLCJ3ZWJwYWNrOi8vbWluaVByb2dyYW1SQy8uL3NyYy9ub2RlL3NoYXBlL3NlY3Rvci50cyIsIndlYnBhY2s6Ly9taW5pUHJvZ3JhbVJDLy4vc3JjL25vZGUvc2hhcGUvc2hhcGUudHMiLCJ3ZWJwYWNrOi8vbWluaVByb2dyYW1SQy8uL3NyYy9ub2RlL3N0YWdlLnRzIiwid2VicGFjazovL21pbmlQcm9ncmFtUkMvLi9zcmMvbm9kZS90ZXh0LnRzIiwid2VicGFjazovL21pbmlQcm9ncmFtUkMvLi9zcmMvcmVuZGVyL2luZGV4LnRzIiwid2VicGFjazovL21pbmlQcm9ncmFtUkMvLi9zcmMvdXRpbHMvdWlkLnRzIiwid2VicGFjazovL21pbmlQcm9ncmFtUkMvLi9zcmMvdXRpbHMvdXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztR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QUF3Qix1QkFBdUI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsdUJBQXVCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHVCQUF1QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix1QkFBdUI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsdUJBQXVCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHVCQUF1QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix1QkFBdUI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsdUJBQXVCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHVCQUF1QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix1QkFBdUI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsdUJBQXVCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHVCQUF1QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix1QkFBdUI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsdUJBQXVCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHVCQUF1QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix1QkFBdUI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsdUJBQXVCO0FBQy9DO0FB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QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUN4Q2E7QUFDYjtBQUNBLDRDQUE0QztBQUM1QztBQUNBLDhDQUE4QyxjQUFjO0FBQzVELDhCQUE4QixtQkFBTyxDQUFDLDBDQUFlO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLE9BQU87QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLE9BQU87QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7OztBQ3ZGYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDUmE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwibWluaVByb2dyYW1SQ1wiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJtaW5pUHJvZ3JhbVJDXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIm1pbmlQcm9ncmFtUkNcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBfdHlwZSA9IFN5bWJvbCgndHlwZScpO1xyXG52YXIgX2J1YmJsZXMgPSBTeW1ib2woJ2J1YmJsZXMnKTtcclxudmFyIF9vcmlnaW5hbEV2ZW50ID0gU3ltYm9sKCdfb3JpZ2luYWxFdmVudCcpO1xyXG52YXIgRXZlbnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBFdmVudCgpIHtcclxuICAgICAgICB0aGlzW190eXBlXSA9ICcnO1xyXG4gICAgICAgIHRoaXNbX29yaWdpbmFsRXZlbnRdID0gbnVsbDtcclxuICAgICAgICB0aGlzW19idWJibGVzXSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5jYW5jZWxCdWJibGUgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIEV2ZW50LnByb3RvdHlwZS5zdG9wUHJvcGFnYXRpb24gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5jYW5jZWxCdWJibGUgPSB0cnVlO1xyXG4gICAgfTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShFdmVudC5wcm90b3R5cGUsIFwidHlwZVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzW190eXBlXTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXNbX3R5cGVdID0gdmFsdWU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEV2ZW50LnByb3RvdHlwZSwgXCJvcmlnaW5hbEV2ZW50XCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXNbX29yaWdpbmFsRXZlbnRdO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpc1tfb3JpZ2luYWxFdmVudF0gPSB2YWx1ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRXZlbnQucHJvdG90eXBlLCBcImJ1YmJsZXNcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpc1tfYnViYmxlc107XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzW19idWJibGVzXSA9IHZhbHVlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBFdmVudDtcclxufSgpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gRXZlbnQ7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBtYXRyaXgyZF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL21hdHJpeDJkXCIpKTtcclxudmFyIERpc3BsYXlQcm9wcyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIERpc3BsYXlQcm9wcyh2aXNpYmxlLCBhbHBoYSwgc2hhZG93LCBjb21wb3NpdGVPcGVyYXRpb24sIG1hdHJpeCkge1xyXG4gICAgICAgIHRoaXMuc2V0VmFsdWUodmlzaWJsZSwgYWxwaGEsIHNoYWRvdywgY29tcG9zaXRlT3BlcmF0aW9uLCBtYXRyaXgpO1xyXG4gICAgfVxyXG4gICAgRGlzcGxheVByb3BzLnByb3RvdHlwZS5zZXRWYWx1ZSA9IGZ1bmN0aW9uICh2aXNpYmxlLCBhbHBoYSwgc2hhZG93LCBjb21wb3NpdGVPcGVyYXRpb24sIG1hdHJpeCkge1xyXG4gICAgICAgIHRoaXMudmlzaWJsZSA9IHZpc2libGUgPT0gbnVsbCA/IHRydWUgOiAhIXZpc2libGU7XHJcbiAgICAgICAgdGhpcy5hbHBoYSA9IGFscGhhID09IG51bGwgPyAxIDogYWxwaGE7XHJcbiAgICAgICAgdGhpcy5zaGFkb3cgPSBzaGFkb3cgfHwgbnVsbDtcclxuICAgICAgICB0aGlzLmNvbXBvc2l0ZU9wZXJhdGlvbiA9IGNvbXBvc2l0ZU9wZXJhdGlvbiB8fCBudWxsO1xyXG4gICAgICAgIHRoaXMubWF0cml4ID0gbWF0cml4IHx8ICh0aGlzLm1hdHJpeCAmJiB0aGlzLm1hdHJpeC5pZGVudGl0eSgpKSB8fCBuZXcgbWF0cml4MmRfMS5kZWZhdWx0KCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgRGlzcGxheVByb3BzLnByb3RvdHlwZS5hcHBlbmQgPSBmdW5jdGlvbiAodmlzaWJsZSwgYWxwaGEsIHNoYWRvdywgY29tcG9zaXRlT3BlcmF0aW9uLCBtYXRyaXgpIHtcclxuICAgICAgICB0aGlzLmFscGhhICo9IGFscGhhO1xyXG4gICAgICAgIHRoaXMuc2hhZG93ID0gc2hhZG93IHx8IHRoaXMuc2hhZG93O1xyXG4gICAgICAgIHRoaXMuY29tcG9zaXRlT3BlcmF0aW9uID0gY29tcG9zaXRlT3BlcmF0aW9uIHx8IHRoaXMuY29tcG9zaXRlT3BlcmF0aW9uO1xyXG4gICAgICAgIHRoaXMudmlzaWJsZSA9IHRoaXMudmlzaWJsZSAmJiB2aXNpYmxlO1xyXG4gICAgICAgIG1hdHJpeCAmJiB0aGlzLm1hdHJpeC5hcHBlbmRNYXRyaXgobWF0cml4KTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBEaXNwbGF5UHJvcHMucHJvdG90eXBlLnByZXBlbmQgPSBmdW5jdGlvbiAodmlzaWJsZSwgYWxwaGEsIHNoYWRvdywgY29tcG9zaXRlT3BlcmF0aW9uLCBtYXRyaXgpIHtcclxuICAgICAgICB0aGlzLmFscGhhICo9IGFscGhhO1xyXG4gICAgICAgIHRoaXMuc2hhZG93ID0gdGhpcy5zaGFkb3cgfHwgc2hhZG93O1xyXG4gICAgICAgIHRoaXMuY29tcG9zaXRlT3BlcmF0aW9uID0gdGhpcy5jb21wb3NpdGVPcGVyYXRpb24gfHwgY29tcG9zaXRlT3BlcmF0aW9uO1xyXG4gICAgICAgIHRoaXMudmlzaWJsZSA9IHRoaXMudmlzaWJsZSAmJiB2aXNpYmxlO1xyXG4gICAgICAgIG1hdHJpeCAmJiB0aGlzLm1hdHJpeC5wcmVwZW5kTWF0cml4KG1hdHJpeCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgRGlzcGxheVByb3BzLnByb3RvdHlwZS5pZGVudGl0eSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuYWxwaGEgPSAxO1xyXG4gICAgICAgIHRoaXMuc2hhZG93ID0gdGhpcy5jb21wb3NpdGVPcGVyYXRpb24gPSBudWxsO1xyXG4gICAgICAgIHRoaXMubWF0cml4LmlkZW50aXR5KCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIERpc3BsYXlQcm9wcztcclxufSgpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gRGlzcGxheVByb3BzO1xyXG4iLCIvKlxyXG4gKiBNYXRyaXgyRFxyXG4gKiBWaXNpdCBodHRwOi8vY3JlYXRlanMuY29tLyBmb3IgZG9jdW1lbnRhdGlvbiwgdXBkYXRlcyBhbmQgZXhhbXBsZXMuXHJcbiAqXHJcbiAqIENvcHlyaWdodCAoYykgMjAxMCBnc2tpbm5lci5jb20sIGluYy5cclxuICpcclxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb25cclxuICogb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb25cclxuICogZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0XHJcbiAqIHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLFxyXG4gKiBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxyXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGVcclxuICogU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmdcclxuICogY29uZGl0aW9uczpcclxuICpcclxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmVcclxuICogaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcbiAqXHJcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsXHJcbiAqIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFU1xyXG4gKiBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORFxyXG4gKiBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVFxyXG4gKiBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSxcclxuICogV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXHJcbiAqIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1JcclxuICogT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxyXG4gKi9cclxuXHJcbi8vIGNvbnN0cnVjdG9yOlxyXG4vKipcclxuICogUmVwcmVzZW50cyBhbiBhZmZpbmUgdHJhbnNmb3JtYXRpb24gbWF0cml4LCBhbmQgcHJvdmlkZXMgdG9vbHMgZm9yIGNvbnN0cnVjdGluZyBhbmQgY29uY2F0ZW5hdGluZyBtYXRyaWNlcy5cclxuICpcclxuICogVGhpcyBtYXRyaXggY2FuIGJlIHZpc3VhbGl6ZWQgYXM6XHJcbiAqXHJcbiAqIFx0WyBhICBjICB0eFxyXG4gKiBcdCAgYiAgZCAgdHlcclxuICogXHQgIDAgIDAgIDEgIF1cclxuICpcclxuICogTm90ZSB0aGUgbG9jYXRpb25zIG9mIGIgYW5kIGMuXHJcbiAqXHJcbiAqIEBjbGFzcyBNYXRyaXgyRFxyXG4gKiBAcGFyYW0ge051bWJlcn0gW2E9MV0gU3BlY2lmaWVzIHRoZSBhIHByb3BlcnR5IGZvciB0aGUgbmV3IG1hdHJpeC5cclxuICogQHBhcmFtIHtOdW1iZXJ9IFtiPTBdIFNwZWNpZmllcyB0aGUgYiBwcm9wZXJ0eSBmb3IgdGhlIG5ldyBtYXRyaXguXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBbYz0wXSBTcGVjaWZpZXMgdGhlIGMgcHJvcGVydHkgZm9yIHRoZSBuZXcgbWF0cml4LlxyXG4gKiBAcGFyYW0ge051bWJlcn0gW2Q9MV0gU3BlY2lmaWVzIHRoZSBkIHByb3BlcnR5IGZvciB0aGUgbmV3IG1hdHJpeC5cclxuICogQHBhcmFtIHtOdW1iZXJ9IFt0eD0wXSBTcGVjaWZpZXMgdGhlIHR4IHByb3BlcnR5IGZvciB0aGUgbmV3IG1hdHJpeC5cclxuICogQHBhcmFtIHtOdW1iZXJ9IFt0eT0wXSBTcGVjaWZpZXMgdGhlIHR5IHByb3BlcnR5IGZvciB0aGUgbmV3IG1hdHJpeC5cclxuICogQGNvbnN0cnVjdG9yXHJcbiAqKi9cclxuZnVuY3Rpb24gTWF0cml4MkQoYSwgYiwgYywgZCwgdHgsIHR5KSB7XHJcbiAgdGhpcy5zZXRWYWx1ZXMoYSwgYiwgYywgZCwgdHgsIHR5KTtcclxuXHJcbiAgLy8gcHVibGljIHByb3BlcnRpZXM6XHJcbiAgLy8gYXNzaWduZWQgaW4gdGhlIHNldFZhbHVlcyBtZXRob2QuXHJcbiAgLyoqXHJcbiAgICogUG9zaXRpb24gKDAsIDApIGluIGEgM3gzIGFmZmluZSB0cmFuc2Zvcm1hdGlvbiBtYXRyaXguXHJcbiAgICogQHByb3BlcnR5IGFcclxuICAgKiBAdHlwZSBOdW1iZXJcclxuICAgKiovXHJcblxyXG4gIC8qKlxyXG4gICAqIFBvc2l0aW9uICgwLCAxKSBpbiBhIDN4MyBhZmZpbmUgdHJhbnNmb3JtYXRpb24gbWF0cml4LlxyXG4gICAqIEBwcm9wZXJ0eSBiXHJcbiAgICogQHR5cGUgTnVtYmVyXHJcbiAgICoqL1xyXG5cclxuICAvKipcclxuICAgKiBQb3NpdGlvbiAoMSwgMCkgaW4gYSAzeDMgYWZmaW5lIHRyYW5zZm9ybWF0aW9uIG1hdHJpeC5cclxuICAgKiBAcHJvcGVydHkgY1xyXG4gICAqIEB0eXBlIE51bWJlclxyXG4gICAqKi9cclxuXHJcbiAgLyoqXHJcbiAgICogUG9zaXRpb24gKDEsIDEpIGluIGEgM3gzIGFmZmluZSB0cmFuc2Zvcm1hdGlvbiBtYXRyaXguXHJcbiAgICogQHByb3BlcnR5IGRcclxuICAgKiBAdHlwZSBOdW1iZXJcclxuICAgKiovXHJcblxyXG4gIC8qKlxyXG4gICAqIFBvc2l0aW9uICgyLCAwKSBpbiBhIDN4MyBhZmZpbmUgdHJhbnNmb3JtYXRpb24gbWF0cml4LlxyXG4gICAqIEBwcm9wZXJ0eSB0eFxyXG4gICAqIEB0eXBlIE51bWJlclxyXG4gICAqKi9cclxuXHJcbiAgLyoqXHJcbiAgICogUG9zaXRpb24gKDIsIDEpIGluIGEgM3gzIGFmZmluZSB0cmFuc2Zvcm1hdGlvbiBtYXRyaXguXHJcbiAgICogQHByb3BlcnR5IHR5XHJcbiAgICogQHR5cGUgTnVtYmVyXHJcbiAgICoqL1xyXG59XHJcbnZhciBwID0gTWF0cml4MkQucHJvdG90eXBlO1xyXG5cclxuLy8gY29uc3RhbnRzOlxyXG4vKipcclxuICogTXVsdGlwbGllciBmb3IgY29udmVydGluZyBkZWdyZWVzIHRvIHJhZGlhbnMuIFVzZWQgaW50ZXJuYWxseSBieSBNYXRyaXgyRC5cclxuICogQHByb3BlcnR5IERFR19UT19SQURcclxuICogQHN0YXRpY1xyXG4gKiBAZmluYWxcclxuICogQHR5cGUgTnVtYmVyXHJcbiAqIEByZWFkb25seVxyXG4gKiovXHJcbk1hdHJpeDJELkRFR19UT19SQUQgPSBNYXRoLlBJIC8gMTgwO1xyXG5cclxuLy8gc3RhdGljIHB1YmxpYyBwcm9wZXJ0aWVzOlxyXG4vKipcclxuICogQW4gaWRlbnRpdHkgbWF0cml4LCByZXByZXNlbnRpbmcgYSBudWxsIHRyYW5zZm9ybWF0aW9uLlxyXG4gKiBAcHJvcGVydHkgaWRlbnRpdHlcclxuICogQHN0YXRpY1xyXG4gKiBAdHlwZSBNYXRyaXgyRFxyXG4gKiBAcmVhZG9ubHlcclxuICoqL1xyXG5NYXRyaXgyRC5pZGVudGl0eSA9IG51bGw7IC8vIHNldCBhdCBib3R0b20gb2YgY2xhc3MgZGVmaW5pdGlvbi5cclxuXHJcbi8vIHB1YmxpYyBtZXRob2RzOlxyXG4vKipcclxuICogU2V0cyB0aGUgc3BlY2lmaWVkIHZhbHVlcyBvbiB0aGlzIGluc3RhbmNlLlxyXG4gKiBAbWV0aG9kIHNldFZhbHVlc1xyXG4gKiBAcGFyYW0ge051bWJlcn0gW2E9MV0gU3BlY2lmaWVzIHRoZSBhIHByb3BlcnR5IGZvciB0aGUgbmV3IG1hdHJpeC5cclxuICogQHBhcmFtIHtOdW1iZXJ9IFtiPTBdIFNwZWNpZmllcyB0aGUgYiBwcm9wZXJ0eSBmb3IgdGhlIG5ldyBtYXRyaXguXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBbYz0wXSBTcGVjaWZpZXMgdGhlIGMgcHJvcGVydHkgZm9yIHRoZSBuZXcgbWF0cml4LlxyXG4gKiBAcGFyYW0ge051bWJlcn0gW2Q9MV0gU3BlY2lmaWVzIHRoZSBkIHByb3BlcnR5IGZvciB0aGUgbmV3IG1hdHJpeC5cclxuICogQHBhcmFtIHtOdW1iZXJ9IFt0eD0wXSBTcGVjaWZpZXMgdGhlIHR4IHByb3BlcnR5IGZvciB0aGUgbmV3IG1hdHJpeC5cclxuICogQHBhcmFtIHtOdW1iZXJ9IFt0eT0wXSBTcGVjaWZpZXMgdGhlIHR5IHByb3BlcnR5IGZvciB0aGUgbmV3IG1hdHJpeC5cclxuICogQHJldHVybiB7TWF0cml4MkR9IFRoaXMgaW5zdGFuY2UuIFVzZWZ1bCBmb3IgY2hhaW5pbmcgbWV0aG9kIGNhbGxzLlxyXG4gKi9cclxucC5zZXRWYWx1ZXMgPSBmdW5jdGlvbiAoYSwgYiwgYywgZCwgdHgsIHR5KSB7XHJcbiAgLy8gZG9uJ3QgZm9yZ2V0IHRvIHVwZGF0ZSBkb2NzIGluIHRoZSBjb25zdHJ1Y3RvciBpZiB0aGVzZSBjaGFuZ2U6XHJcbiAgdGhpcy5hID0gYSA9PSBudWxsID8gMSA6IGE7XHJcbiAgdGhpcy5iID0gYiB8fCAwO1xyXG4gIHRoaXMuYyA9IGMgfHwgMDtcclxuICB0aGlzLmQgPSBkID09IG51bGwgPyAxIDogZDtcclxuICB0aGlzLnR4ID0gdHggfHwgMDtcclxuICB0aGlzLnR5ID0gdHkgfHwgMDtcclxuICByZXR1cm4gdGhpcztcclxufTtcclxuXHJcbi8qKlxyXG4gKiBBcHBlbmRzIHRoZSBzcGVjaWZpZWQgbWF0cml4IHByb3BlcnRpZXMgdG8gdGhpcyBtYXRyaXguIEFsbCBwYXJhbWV0ZXJzIGFyZSByZXF1aXJlZC5cclxuICogVGhpcyBpcyB0aGUgZXF1aXZhbGVudCBvZiBtdWx0aXBseWluZyBgKHRoaXMgbWF0cml4KSAqIChzcGVjaWZpZWQgbWF0cml4KWAuXHJcbiAqIEBtZXRob2QgYXBwZW5kXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBhXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBiXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBjXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBkXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSB0eFxyXG4gKiBAcGFyYW0ge051bWJlcn0gdHlcclxuICogQHJldHVybiB7TWF0cml4MkR9IFRoaXMgbWF0cml4LiBVc2VmdWwgZm9yIGNoYWluaW5nIG1ldGhvZCBjYWxscy5cclxuICoqL1xyXG5wLmFwcGVuZCA9IGZ1bmN0aW9uIChhLCBiLCBjLCBkLCB0eCwgdHkpIHtcclxuICB2YXIgYTEgPSB0aGlzLmE7XHJcbiAgdmFyIGIxID0gdGhpcy5iO1xyXG4gIHZhciBjMSA9IHRoaXMuYztcclxuICB2YXIgZDEgPSB0aGlzLmQ7XHJcbiAgaWYgKGEgIT0gMSB8fCBiICE9IDAgfHwgYyAhPSAwIHx8IGQgIT0gMSkge1xyXG4gICAgdGhpcy5hID0gYTEgKiBhICsgYzEgKiBiO1xyXG4gICAgdGhpcy5iID0gYjEgKiBhICsgZDEgKiBiO1xyXG4gICAgdGhpcy5jID0gYTEgKiBjICsgYzEgKiBkO1xyXG4gICAgdGhpcy5kID0gYjEgKiBjICsgZDEgKiBkO1xyXG4gIH1cclxuICB0aGlzLnR4ID0gYTEgKiB0eCArIGMxICogdHkgKyB0aGlzLnR4O1xyXG4gIHRoaXMudHkgPSBiMSAqIHR4ICsgZDEgKiB0eSArIHRoaXMudHk7XHJcbiAgcmV0dXJuIHRoaXM7XHJcbn07XHJcblxyXG4vKipcclxuICogUHJlcGVuZHMgdGhlIHNwZWNpZmllZCBtYXRyaXggcHJvcGVydGllcyB0byB0aGlzIG1hdHJpeC5cclxuICogVGhpcyBpcyB0aGUgZXF1aXZhbGVudCBvZiBtdWx0aXBseWluZyBgKHNwZWNpZmllZCBtYXRyaXgpICogKHRoaXMgbWF0cml4KWAuXHJcbiAqIEFsbCBwYXJhbWV0ZXJzIGFyZSByZXF1aXJlZC5cclxuICogQG1ldGhvZCBwcmVwZW5kXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBhXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBiXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBjXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBkXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSB0eFxyXG4gKiBAcGFyYW0ge051bWJlcn0gdHlcclxuICogQHJldHVybiB7TWF0cml4MkR9IFRoaXMgbWF0cml4LiBVc2VmdWwgZm9yIGNoYWluaW5nIG1ldGhvZCBjYWxscy5cclxuICoqL1xyXG5wLnByZXBlbmQgPSBmdW5jdGlvbiAoYSwgYiwgYywgZCwgdHgsIHR5KSB7XHJcbiAgdmFyIGExID0gdGhpcy5hO1xyXG4gIHZhciBjMSA9IHRoaXMuYztcclxuICB2YXIgdHgxID0gdGhpcy50eDtcclxuXHJcbiAgdGhpcy5hID0gYSAqIGExICsgYyAqIHRoaXMuYjtcclxuICB0aGlzLmIgPSBiICogYTEgKyBkICogdGhpcy5iO1xyXG4gIHRoaXMuYyA9IGEgKiBjMSArIGMgKiB0aGlzLmQ7XHJcbiAgdGhpcy5kID0gYiAqIGMxICsgZCAqIHRoaXMuZDtcclxuICB0aGlzLnR4ID0gYSAqIHR4MSArIGMgKiB0aGlzLnR5ICsgdHg7XHJcbiAgdGhpcy50eSA9IGIgKiB0eDEgKyBkICogdGhpcy50eSArIHR5O1xyXG4gIHJldHVybiB0aGlzO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEFwcGVuZHMgdGhlIHNwZWNpZmllZCBtYXRyaXggdG8gdGhpcyBtYXRyaXguXHJcbiAqIFRoaXMgaXMgdGhlIGVxdWl2YWxlbnQgb2YgbXVsdGlwbHlpbmcgYCh0aGlzIG1hdHJpeCkgKiAoc3BlY2lmaWVkIG1hdHJpeClgLlxyXG4gKiBAbWV0aG9kIGFwcGVuZE1hdHJpeFxyXG4gKiBAcGFyYW0ge01hdHJpeDJEfSBtYXRyaXhcclxuICogQHJldHVybiB7TWF0cml4MkR9IFRoaXMgbWF0cml4LiBVc2VmdWwgZm9yIGNoYWluaW5nIG1ldGhvZCBjYWxscy5cclxuICoqL1xyXG5wLmFwcGVuZE1hdHJpeCA9IGZ1bmN0aW9uIChtYXRyaXgpIHtcclxuICByZXR1cm4gdGhpcy5hcHBlbmQobWF0cml4LmEsIG1hdHJpeC5iLCBtYXRyaXguYywgbWF0cml4LmQsIG1hdHJpeC50eCwgbWF0cml4LnR5KTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBQcmVwZW5kcyB0aGUgc3BlY2lmaWVkIG1hdHJpeCB0byB0aGlzIG1hdHJpeC5cclxuICogVGhpcyBpcyB0aGUgZXF1aXZhbGVudCBvZiBtdWx0aXBseWluZyBgKHNwZWNpZmllZCBtYXRyaXgpICogKHRoaXMgbWF0cml4KWAuXHJcbiAqIEZvciBleGFtcGxlLCB5b3UgY291bGQgY2FsY3VsYXRlIHRoZSBjb21iaW5lZCB0cmFuc2Zvcm1hdGlvbiBmb3IgYSBjaGlsZCBvYmplY3QgdXNpbmc6XHJcbiAqXHJcbiAqIFx0dmFyIG8gPSBteURpc3BsYXlPYmplY3Q7XHJcbiAqIFx0dmFyIG10eCA9IG8uZ2V0TWF0cml4KCk7XHJcbiAqIFx0d2hpbGUgKG8gPSBvLnBhcmVudCkge1xyXG4gKiBcdFx0Ly8gcHJlcGVuZCBlYWNoIHBhcmVudCdzIHRyYW5zZm9ybWF0aW9uIGluIHR1cm46XHJcbiAqIFx0XHRvLnByZXBlbmRNYXRyaXgoby5nZXRNYXRyaXgoKSk7XHJcbiAqIFx0fVxyXG4gKiBAbWV0aG9kIHByZXBlbmRNYXRyaXhcclxuICogQHBhcmFtIHtNYXRyaXgyRH0gbWF0cml4XHJcbiAqIEByZXR1cm4ge01hdHJpeDJEfSBUaGlzIG1hdHJpeC4gVXNlZnVsIGZvciBjaGFpbmluZyBtZXRob2QgY2FsbHMuXHJcbiAqKi9cclxucC5wcmVwZW5kTWF0cml4ID0gZnVuY3Rpb24gKG1hdHJpeCkge1xyXG4gIHJldHVybiB0aGlzLnByZXBlbmQobWF0cml4LmEsIG1hdHJpeC5iLCBtYXRyaXguYywgbWF0cml4LmQsIG1hdHJpeC50eCwgbWF0cml4LnR5KTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBHZW5lcmF0ZXMgbWF0cml4IHByb3BlcnRpZXMgZnJvbSB0aGUgc3BlY2lmaWVkIGRpc3BsYXkgb2JqZWN0IHRyYW5zZm9ybSBwcm9wZXJ0aWVzLCBhbmQgYXBwZW5kcyB0aGVtIHRvIHRoaXMgbWF0cml4LlxyXG4gKiBGb3IgZXhhbXBsZSwgeW91IGNhbiB1c2UgdGhpcyB0byBnZW5lcmF0ZSBhIG1hdHJpeCByZXByZXNlbnRpbmcgdGhlIHRyYW5zZm9ybWF0aW9ucyBvZiBhIGRpc3BsYXkgb2JqZWN0OlxyXG4gKlxyXG4gKiBcdHZhciBtdHggPSBuZXcgY3JlYXRlanMuTWF0cml4MkQoKTtcclxuICogXHRtdHguYXBwZW5kVHJhbnNmb3JtKG8ueCwgby55LCBvLnNjYWxlWCwgby5zY2FsZVksIG8ucm90YXRpb24pO1xyXG4gKiBAbWV0aG9kIGFwcGVuZFRyYW5zZm9ybVxyXG4gKiBAcGFyYW0ge051bWJlcn0geFxyXG4gKiBAcGFyYW0ge051bWJlcn0geVxyXG4gKiBAcGFyYW0ge051bWJlcn0gc2NhbGVYXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBzY2FsZVlcclxuICogQHBhcmFtIHtOdW1iZXJ9IHJvdGF0aW9uXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBza2V3WFxyXG4gKiBAcGFyYW0ge051bWJlcn0gc2tld1lcclxuICogQHBhcmFtIHtOdW1iZXJ9IHJlZ1ggT3B0aW9uYWwuXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSByZWdZIE9wdGlvbmFsLlxyXG4gKiBAcmV0dXJuIHtNYXRyaXgyRH0gVGhpcyBtYXRyaXguIFVzZWZ1bCBmb3IgY2hhaW5pbmcgbWV0aG9kIGNhbGxzLlxyXG4gKiovXHJcbnAuYXBwZW5kVHJhbnNmb3JtID0gZnVuY3Rpb24gKHgsIHksIHNjYWxlWCwgc2NhbGVZLCByb3RhdGlvbiwgc2tld1gsIHNrZXdZLCByZWdYLCByZWdZKSB7XHJcbiAgaWYgKHJvdGF0aW9uICUgMzYwKSB7XHJcbiAgICB2YXIgciA9IHJvdGF0aW9uICogTWF0cml4MkQuREVHX1RPX1JBRDtcclxuICAgIHZhciBjb3MgPSBNYXRoLmNvcyhyKTtcclxuICAgIHZhciBzaW4gPSBNYXRoLnNpbihyKTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29zID0gMTtcclxuICAgIHNpbiA9IDA7XHJcbiAgfVxyXG5cclxuICBpZiAoc2tld1ggfHwgc2tld1kpIHtcclxuICAgIC8vIFRPRE86IGNhbiB0aGlzIGJlIGNvbWJpbmVkIGludG8gYSBzaW5nbGUgYXBwZW5kIG9wZXJhdGlvbj9cclxuICAgIHNrZXdYICo9IE1hdHJpeDJELkRFR19UT19SQUQ7XHJcbiAgICBza2V3WSAqPSBNYXRyaXgyRC5ERUdfVE9fUkFEO1xyXG4gICAgdGhpcy5hcHBlbmQoTWF0aC5jb3Moc2tld1kpLCBNYXRoLnNpbihza2V3WSksIC1NYXRoLnNpbihza2V3WCksIE1hdGguY29zKHNrZXdYKSwgeCwgeSk7XHJcbiAgICB0aGlzLmFwcGVuZChjb3MgKiBzY2FsZVgsIHNpbiAqIHNjYWxlWCwgLXNpbiAqIHNjYWxlWSwgY29zICogc2NhbGVZLCAwLCAwKTtcclxuICB9IGVsc2Uge1xyXG4gICAgdGhpcy5hcHBlbmQoY29zICogc2NhbGVYLCBzaW4gKiBzY2FsZVgsIC1zaW4gKiBzY2FsZVksIGNvcyAqIHNjYWxlWSwgeCwgeSk7XHJcbiAgfVxyXG5cclxuICBpZiAocmVnWCB8fCByZWdZKSB7XHJcbiAgICAvLyBhcHBlbmQgdGhlIHJlZ2lzdHJhdGlvbiBvZmZzZXQ6XHJcbiAgICB0aGlzLnR4IC09IHJlZ1ggKiB0aGlzLmEgKyByZWdZICogdGhpcy5jO1xyXG4gICAgdGhpcy50eSAtPSByZWdYICogdGhpcy5iICsgcmVnWSAqIHRoaXMuZDtcclxuICB9XHJcbiAgcmV0dXJuIHRoaXM7XHJcbn07XHJcblxyXG4vKipcclxuICogR2VuZXJhdGVzIG1hdHJpeCBwcm9wZXJ0aWVzIGZyb20gdGhlIHNwZWNpZmllZCBkaXNwbGF5IG9iamVjdCB0cmFuc2Zvcm0gcHJvcGVydGllcywgYW5kIHByZXBlbmRzIHRoZW0gdG8gdGhpcyBtYXRyaXguXHJcbiAqIEZvciBleGFtcGxlLCB5b3UgY291bGQgY2FsY3VsYXRlIHRoZSBjb21iaW5lZCB0cmFuc2Zvcm1hdGlvbiBmb3IgYSBjaGlsZCBvYmplY3QgdXNpbmc6XHJcbiAqXHJcbiAqIFx0dmFyIG8gPSBteURpc3BsYXlPYmplY3Q7XHJcbiAqIFx0dmFyIG10eCA9IG5ldyBjcmVhdGVqcy5NYXRyaXgyRCgpO1xyXG4gKiBcdGRvICB7XHJcbiAqIFx0XHQvLyBwcmVwZW5kIGVhY2ggcGFyZW50J3MgdHJhbnNmb3JtYXRpb24gaW4gdHVybjpcclxuICogXHRcdG10eC5wcmVwZW5kVHJhbnNmb3JtKG8ueCwgby55LCBvLnNjYWxlWCwgby5zY2FsZVksIG8ucm90YXRpb24sIG8uc2tld1gsIG8uc2tld1ksIG8ucmVnWCwgby5yZWdZKTtcclxuICogXHR9IHdoaWxlIChvID0gby5wYXJlbnQpO1xyXG4gKlxyXG4gKiBcdE5vdGUgdGhhdCB0aGUgYWJvdmUgZXhhbXBsZSB3b3VsZCBub3QgYWNjb3VudCBmb3Ige3sjY3Jvc3NMaW5rIFwiRGlzcGxheU9iamVjdC90cmFuc2Zvcm1NYXRyaXg6cHJvcGVydHlcIn19e3svY3Jvc3NMaW5rfX1cclxuICogXHR2YWx1ZXMuIFNlZSB7eyNjcm9zc0xpbmsgXCJNYXRyaXgyRC9wcmVwZW5kTWF0cml4XCJ9fXt7L2Nyb3NzTGlua319IGZvciBhbiBleGFtcGxlIHRoYXQgZG9lcy5cclxuICogQG1ldGhvZCBwcmVwZW5kVHJhbnNmb3JtXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSB4XHJcbiAqIEBwYXJhbSB7TnVtYmVyfSB5XHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBzY2FsZVhcclxuICogQHBhcmFtIHtOdW1iZXJ9IHNjYWxlWVxyXG4gKiBAcGFyYW0ge051bWJlcn0gcm90YXRpb25cclxuICogQHBhcmFtIHtOdW1iZXJ9IHNrZXdYXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBza2V3WVxyXG4gKiBAcGFyYW0ge051bWJlcn0gcmVnWCBPcHRpb25hbC5cclxuICogQHBhcmFtIHtOdW1iZXJ9IHJlZ1kgT3B0aW9uYWwuXHJcbiAqIEByZXR1cm4ge01hdHJpeDJEfSBUaGlzIG1hdHJpeC4gVXNlZnVsIGZvciBjaGFpbmluZyBtZXRob2QgY2FsbHMuXHJcbiAqKi9cclxucC5wcmVwZW5kVHJhbnNmb3JtID0gZnVuY3Rpb24gKHgsIHksIHNjYWxlWCwgc2NhbGVZLCByb3RhdGlvbiwgc2tld1gsIHNrZXdZLCByZWdYLCByZWdZKSB7XHJcbiAgaWYgKHJvdGF0aW9uICUgMzYwKSB7XHJcbiAgICB2YXIgciA9IHJvdGF0aW9uICogTWF0cml4MkQuREVHX1RPX1JBRDtcclxuICAgIHZhciBjb3MgPSBNYXRoLmNvcyhyKTtcclxuICAgIHZhciBzaW4gPSBNYXRoLnNpbihyKTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29zID0gMTtcclxuICAgIHNpbiA9IDA7XHJcbiAgfVxyXG5cclxuICBpZiAocmVnWCB8fCByZWdZKSB7XHJcbiAgICAvLyBwcmVwZW5kIHRoZSByZWdpc3RyYXRpb24gb2Zmc2V0OlxyXG4gICAgdGhpcy50eCAtPSByZWdYO1xyXG4gICAgdGhpcy50eSAtPSByZWdZO1xyXG4gIH1cclxuICBpZiAoc2tld1ggfHwgc2tld1kpIHtcclxuICAgIC8vIFRPRE86IGNhbiB0aGlzIGJlIGNvbWJpbmVkIGludG8gYSBzaW5nbGUgcHJlcGVuZCBvcGVyYXRpb24/XHJcbiAgICBza2V3WCAqPSBNYXRyaXgyRC5ERUdfVE9fUkFEO1xyXG4gICAgc2tld1kgKj0gTWF0cml4MkQuREVHX1RPX1JBRDtcclxuICAgIHRoaXMucHJlcGVuZChjb3MgKiBzY2FsZVgsIHNpbiAqIHNjYWxlWCwgLXNpbiAqIHNjYWxlWSwgY29zICogc2NhbGVZLCAwLCAwKTtcclxuICAgIHRoaXMucHJlcGVuZChNYXRoLmNvcyhza2V3WSksIE1hdGguc2luKHNrZXdZKSwgLU1hdGguc2luKHNrZXdYKSwgTWF0aC5jb3Moc2tld1gpLCB4LCB5KTtcclxuICB9IGVsc2Uge1xyXG4gICAgdGhpcy5wcmVwZW5kKGNvcyAqIHNjYWxlWCwgc2luICogc2NhbGVYLCAtc2luICogc2NhbGVZLCBjb3MgKiBzY2FsZVksIHgsIHkpO1xyXG4gIH1cclxuICByZXR1cm4gdGhpcztcclxufTtcclxuXHJcbi8qKlxyXG4gKiBBcHBsaWVzIGEgY2xvY2t3aXNlIHJvdGF0aW9uIHRyYW5zZm9ybWF0aW9uIHRvIHRoZSBtYXRyaXguXHJcbiAqIEBtZXRob2Qgcm90YXRlXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBhbmdsZSBUaGUgYW5nbGUgdG8gcm90YXRlIGJ5LCBpbiBkZWdyZWVzLiBUbyB1c2UgYSB2YWx1ZSBpbiByYWRpYW5zLCBtdWx0aXBseSBpdCBieSBgTWF0aC5QSS8xODBgLlxyXG4gKiBAcmV0dXJuIHtNYXRyaXgyRH0gVGhpcyBtYXRyaXguIFVzZWZ1bCBmb3IgY2hhaW5pbmcgbWV0aG9kIGNhbGxzLlxyXG4gKiovXHJcbnAucm90YXRlID0gZnVuY3Rpb24gKGFuZ2xlKSB7XHJcbiAgYW5nbGUgPSBhbmdsZSAqIE1hdHJpeDJELkRFR19UT19SQUQ7XHJcbiAgdmFyIGNvcyA9IE1hdGguY29zKGFuZ2xlKTtcclxuICB2YXIgc2luID0gTWF0aC5zaW4oYW5nbGUpO1xyXG5cclxuICB2YXIgYTEgPSB0aGlzLmE7XHJcbiAgdmFyIGIxID0gdGhpcy5iO1xyXG5cclxuICB0aGlzLmEgPSBhMSAqIGNvcyArIHRoaXMuYyAqIHNpbjtcclxuICB0aGlzLmIgPSBiMSAqIGNvcyArIHRoaXMuZCAqIHNpbjtcclxuICB0aGlzLmMgPSAtYTEgKiBzaW4gKyB0aGlzLmMgKiBjb3M7XHJcbiAgdGhpcy5kID0gLWIxICogc2luICsgdGhpcy5kICogY29zO1xyXG4gIHJldHVybiB0aGlzO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEFwcGxpZXMgYSBza2V3IHRyYW5zZm9ybWF0aW9uIHRvIHRoZSBtYXRyaXguXHJcbiAqIEBtZXRob2Qgc2tld1xyXG4gKiBAcGFyYW0ge051bWJlcn0gc2tld1ggVGhlIGFtb3VudCB0byBza2V3IGhvcml6b250YWxseSBpbiBkZWdyZWVzLiBUbyB1c2UgYSB2YWx1ZSBpbiByYWRpYW5zLCBtdWx0aXBseSBpdCBieSBgTWF0aC5QSS8xODBgLlxyXG4gKiBAcGFyYW0ge051bWJlcn0gc2tld1kgVGhlIGFtb3VudCB0byBza2V3IHZlcnRpY2FsbHkgaW4gZGVncmVlcy5cclxuICogQHJldHVybiB7TWF0cml4MkR9IFRoaXMgbWF0cml4LiBVc2VmdWwgZm9yIGNoYWluaW5nIG1ldGhvZCBjYWxscy5cclxuICovXHJcbnAuc2tldyA9IGZ1bmN0aW9uIChza2V3WCwgc2tld1kpIHtcclxuICBza2V3WCA9IHNrZXdYICogTWF0cml4MkQuREVHX1RPX1JBRDtcclxuICBza2V3WSA9IHNrZXdZICogTWF0cml4MkQuREVHX1RPX1JBRDtcclxuICB0aGlzLmFwcGVuZChNYXRoLmNvcyhza2V3WSksIE1hdGguc2luKHNrZXdZKSwgLU1hdGguc2luKHNrZXdYKSwgTWF0aC5jb3Moc2tld1gpLCAwLCAwKTtcclxuICByZXR1cm4gdGhpcztcclxufTtcclxuXHJcbi8qKlxyXG4gKiBBcHBsaWVzIGEgc2NhbGUgdHJhbnNmb3JtYXRpb24gdG8gdGhlIG1hdHJpeC5cclxuICogQG1ldGhvZCBzY2FsZVxyXG4gKiBAcGFyYW0ge051bWJlcn0geCBUaGUgYW1vdW50IHRvIHNjYWxlIGhvcml6b250YWxseS4gRS5HLiBhIHZhbHVlIG9mIDIgd2lsbCBkb3VibGUgdGhlIHNpemUgaW4gdGhlIFggZGlyZWN0aW9uLCBhbmQgMC41IHdpbGwgaGFsdmUgaXQuXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSB5IFRoZSBhbW91bnQgdG8gc2NhbGUgdmVydGljYWxseS5cclxuICogQHJldHVybiB7TWF0cml4MkR9IFRoaXMgbWF0cml4LiBVc2VmdWwgZm9yIGNoYWluaW5nIG1ldGhvZCBjYWxscy5cclxuICoqL1xyXG5wLnNjYWxlID0gZnVuY3Rpb24gKHgsIHkpIHtcclxuICB0aGlzLmEgKj0geDtcclxuICB0aGlzLmIgKj0geDtcclxuICB0aGlzLmMgKj0geTtcclxuICB0aGlzLmQgKj0geTtcclxuICAvL3RoaXMudHggKj0geDtcclxuICAvL3RoaXMudHkgKj0geTtcclxuICByZXR1cm4gdGhpcztcclxufTtcclxuXHJcbi8qKlxyXG4gKiBUcmFuc2xhdGVzIHRoZSBtYXRyaXggb24gdGhlIHggYW5kIHkgYXhlcy5cclxuICogQG1ldGhvZCB0cmFuc2xhdGVcclxuICogQHBhcmFtIHtOdW1iZXJ9IHhcclxuICogQHBhcmFtIHtOdW1iZXJ9IHlcclxuICogQHJldHVybiB7TWF0cml4MkR9IFRoaXMgbWF0cml4LiBVc2VmdWwgZm9yIGNoYWluaW5nIG1ldGhvZCBjYWxscy5cclxuICoqL1xyXG5wLnRyYW5zbGF0ZSA9IGZ1bmN0aW9uICh4LCB5KSB7XHJcbiAgdGhpcy50eCArPSB0aGlzLmEgKiB4ICsgdGhpcy5jICogeTtcclxuICB0aGlzLnR5ICs9IHRoaXMuYiAqIHggKyB0aGlzLmQgKiB5O1xyXG4gIHJldHVybiB0aGlzO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFNldHMgdGhlIHByb3BlcnRpZXMgb2YgdGhlIG1hdHJpeCB0byB0aG9zZSBvZiBhbiBpZGVudGl0eSBtYXRyaXggKG9uZSB0aGF0IGFwcGxpZXMgYSBudWxsIHRyYW5zZm9ybWF0aW9uKS5cclxuICogQG1ldGhvZCBpZGVudGl0eVxyXG4gKiBAcmV0dXJuIHtNYXRyaXgyRH0gVGhpcyBtYXRyaXguIFVzZWZ1bCBmb3IgY2hhaW5pbmcgbWV0aG9kIGNhbGxzLlxyXG4gKiovXHJcbnAuaWRlbnRpdHkgPSBmdW5jdGlvbiAoKSB7XHJcbiAgdGhpcy5hID0gdGhpcy5kID0gMTtcclxuICB0aGlzLmIgPSB0aGlzLmMgPSB0aGlzLnR4ID0gdGhpcy50eSA9IDA7XHJcbiAgcmV0dXJuIHRoaXM7XHJcbn07XHJcblxyXG4vKipcclxuICogSW52ZXJ0cyB0aGUgbWF0cml4LCBjYXVzaW5nIGl0IHRvIHBlcmZvcm0gdGhlIG9wcG9zaXRlIHRyYW5zZm9ybWF0aW9uLlxyXG4gKiBAbWV0aG9kIGludmVydFxyXG4gKiBAcmV0dXJuIHtNYXRyaXgyRH0gVGhpcyBtYXRyaXguIFVzZWZ1bCBmb3IgY2hhaW5pbmcgbWV0aG9kIGNhbGxzLlxyXG4gKiovXHJcbnAuaW52ZXJ0ID0gZnVuY3Rpb24gKCkge1xyXG4gIHZhciBhMSA9IHRoaXMuYTtcclxuICB2YXIgYjEgPSB0aGlzLmI7XHJcbiAgdmFyIGMxID0gdGhpcy5jO1xyXG4gIHZhciBkMSA9IHRoaXMuZDtcclxuICB2YXIgdHgxID0gdGhpcy50eDtcclxuICB2YXIgbiA9IGExICogZDEgLSBiMSAqIGMxO1xyXG5cclxuICB0aGlzLmEgPSBkMSAvIG47XHJcbiAgdGhpcy5iID0gLWIxIC8gbjtcclxuICB0aGlzLmMgPSAtYzEgLyBuO1xyXG4gIHRoaXMuZCA9IGExIC8gbjtcclxuICB0aGlzLnR4ID0gKGMxICogdGhpcy50eSAtIGQxICogdHgxKSAvIG47XHJcbiAgdGhpcy50eSA9IC0oYTEgKiB0aGlzLnR5IC0gYjEgKiB0eDEpIC8gbjtcclxuICByZXR1cm4gdGhpcztcclxufTtcclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIG1hdHJpeCBpcyBhbiBpZGVudGl0eSBtYXRyaXguXHJcbiAqIEBtZXRob2QgaXNJZGVudGl0eVxyXG4gKiBAcmV0dXJuIHtCb29sZWFufVxyXG4gKiovXHJcbnAuaXNJZGVudGl0eSA9IGZ1bmN0aW9uICgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgdGhpcy50eCA9PT0gMCAmJiB0aGlzLnR5ID09PSAwICYmIHRoaXMuYSA9PT0gMSAmJiB0aGlzLmIgPT09IDAgJiYgdGhpcy5jID09PSAwICYmIHRoaXMuZCA9PT0gMVxyXG4gICk7XHJcbn07XHJcblxyXG4vKipcclxuICogUmV0dXJucyB0cnVlIGlmIHRoaXMgbWF0cml4IGlzIGVxdWFsIHRvIHRoZSBzcGVjaWZpZWQgbWF0cml4IChhbGwgcHJvcGVydHkgdmFsdWVzIGFyZSBlcXVhbCkuXHJcbiAqIEBtZXRob2QgZXF1YWxzXHJcbiAqIEBwYXJhbSB7TWF0cml4MkR9IG1hdHJpeCBUaGUgbWF0cml4IHRvIGNvbXBhcmUuXHJcbiAqIEByZXR1cm4ge0Jvb2xlYW59XHJcbiAqKi9cclxucC5lcXVhbHMgPSBmdW5jdGlvbiAobWF0cml4KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIHRoaXMudHggPT09IG1hdHJpeC50eCAmJlxyXG4gICAgdGhpcy50eSA9PT0gbWF0cml4LnR5ICYmXHJcbiAgICB0aGlzLmEgPT09IG1hdHJpeC5hICYmXHJcbiAgICB0aGlzLmIgPT09IG1hdHJpeC5iICYmXHJcbiAgICB0aGlzLmMgPT09IG1hdHJpeC5jICYmXHJcbiAgICB0aGlzLmQgPT09IG1hdHJpeC5kXHJcbiAgKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBUcmFuc2Zvcm1zIGEgcG9pbnQgYWNjb3JkaW5nIHRvIHRoaXMgbWF0cml4LlxyXG4gKiBAbWV0aG9kIHRyYW5zZm9ybVBvaW50XHJcbiAqIEBwYXJhbSB7TnVtYmVyfSB4IFRoZSB4IGNvbXBvbmVudCBvZiB0aGUgcG9pbnQgdG8gdHJhbnNmb3JtLlxyXG4gKiBAcGFyYW0ge051bWJlcn0geSBUaGUgeSBjb21wb25lbnQgb2YgdGhlIHBvaW50IHRvIHRyYW5zZm9ybS5cclxuICogQHBhcmFtIHtQb2ludCB8IE9iamVjdH0gW3B0XSBBbiBvYmplY3QgdG8gY29weSB0aGUgcmVzdWx0IGludG8uIElmIG9taXR0ZWQgYSBnZW5lcmljIG9iamVjdCB3aXRoIHgveSBwcm9wZXJ0aWVzIHdpbGwgYmUgcmV0dXJuZWQuXHJcbiAqIEByZXR1cm4ge1BvaW50fSBUaGlzIG1hdHJpeC4gVXNlZnVsIGZvciBjaGFpbmluZyBtZXRob2QgY2FsbHMuXHJcbiAqKi9cclxucC50cmFuc2Zvcm1Qb2ludCA9IGZ1bmN0aW9uICh4LCB5LCBwdCkge1xyXG4gIHB0ID0gcHQgfHwge307XHJcbiAgcHQueCA9IHggKiB0aGlzLmEgKyB5ICogdGhpcy5jICsgdGhpcy50eDtcclxuICBwdC55ID0geCAqIHRoaXMuYiArIHkgKiB0aGlzLmQgKyB0aGlzLnR5O1xyXG4gIHJldHVybiBwdDtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBEZWNvbXBvc2VzIHRoZSBtYXRyaXggaW50byB0cmFuc2Zvcm0gcHJvcGVydGllcyAoeCwgeSwgc2NhbGVYLCBzY2FsZVksIGFuZCByb3RhdGlvbikuIE5vdGUgdGhhdCB0aGVzZSB2YWx1ZXNcclxuICogbWF5IG5vdCBtYXRjaCB0aGUgdHJhbnNmb3JtIHByb3BlcnRpZXMgeW91IHVzZWQgdG8gZ2VuZXJhdGUgdGhlIG1hdHJpeCwgdGhvdWdoIHRoZXkgd2lsbCBwcm9kdWNlIHRoZSBzYW1lIHZpc3VhbFxyXG4gKiByZXN1bHRzLlxyXG4gKiBAbWV0aG9kIGRlY29tcG9zZVxyXG4gKiBAcGFyYW0ge09iamVjdH0gdGFyZ2V0IFRoZSBvYmplY3QgdG8gYXBwbHkgdGhlIHRyYW5zZm9ybSBwcm9wZXJ0aWVzIHRvLiBJZiBudWxsLCB0aGVuIGEgbmV3IG9iamVjdCB3aWxsIGJlIHJldHVybmVkLlxyXG4gKiBAcmV0dXJuIHtPYmplY3R9IFRoZSB0YXJnZXQsIG9yIGEgbmV3IGdlbmVyaWMgb2JqZWN0IHdpdGggdGhlIHRyYW5zZm9ybSBwcm9wZXJ0aWVzIGFwcGxpZWQuXHJcbiAqL1xyXG5wLmRlY29tcG9zZSA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcclxuICAvLyBUT0RPOiBpdCB3b3VsZCBiZSBuaWNlIHRvIGJlIGFibGUgdG8gc29sdmUgZm9yIHdoZXRoZXIgdGhlIG1hdHJpeCBjYW4gYmUgZGVjb21wb3NlZCBpbnRvIG9ubHkgc2NhbGUvcm90YXRpb24gZXZlbiB3aGVuIHNjYWxlIGlzIG5lZ2F0aXZlXHJcbiAgaWYgKHRhcmdldCA9PSBudWxsKSB7XHJcbiAgICB0YXJnZXQgPSB7fTtcclxuICB9XHJcbiAgdGFyZ2V0LnggPSB0aGlzLnR4O1xyXG4gIHRhcmdldC55ID0gdGhpcy50eTtcclxuICB0YXJnZXQuc2NhbGVYID0gTWF0aC5zcXJ0KHRoaXMuYSAqIHRoaXMuYSArIHRoaXMuYiAqIHRoaXMuYik7XHJcbiAgdGFyZ2V0LnNjYWxlWSA9IE1hdGguc3FydCh0aGlzLmMgKiB0aGlzLmMgKyB0aGlzLmQgKiB0aGlzLmQpO1xyXG5cclxuICB2YXIgc2tld1ggPSBNYXRoLmF0YW4yKC10aGlzLmMsIHRoaXMuZCk7XHJcbiAgdmFyIHNrZXdZID0gTWF0aC5hdGFuMih0aGlzLmIsIHRoaXMuYSk7XHJcblxyXG4gIHZhciBkZWx0YSA9IE1hdGguYWJzKDEgLSBza2V3WCAvIHNrZXdZKTtcclxuICBpZiAoZGVsdGEgPCAwLjAwMDAxKSB7XHJcbiAgICAvLyBlZmZlY3RpdmVseSBpZGVudGljYWwsIGNhbiB1c2Ugcm90YXRpb246XHJcbiAgICB0YXJnZXQucm90YXRpb24gPSBza2V3WSAvIE1hdHJpeDJELkRFR19UT19SQUQ7XHJcbiAgICBpZiAodGhpcy5hIDwgMCAmJiB0aGlzLmQgPj0gMCkge1xyXG4gICAgICB0YXJnZXQucm90YXRpb24gKz0gdGFyZ2V0LnJvdGF0aW9uIDw9IDAgPyAxODAgOiAtMTgwO1xyXG4gICAgfVxyXG4gICAgdGFyZ2V0LnNrZXdYID0gdGFyZ2V0LnNrZXdZID0gMDtcclxuICB9IGVsc2Uge1xyXG4gICAgdGFyZ2V0LnNrZXdYID0gc2tld1ggLyBNYXRyaXgyRC5ERUdfVE9fUkFEO1xyXG4gICAgdGFyZ2V0LnNrZXdZID0gc2tld1kgLyBNYXRyaXgyRC5ERUdfVE9fUkFEO1xyXG4gIH1cclxuICByZXR1cm4gdGFyZ2V0O1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIENvcGllcyBhbGwgcHJvcGVydGllcyBmcm9tIHRoZSBzcGVjaWZpZWQgbWF0cml4IHRvIHRoaXMgbWF0cml4LlxyXG4gKiBAbWV0aG9kIGNvcHlcclxuICogQHBhcmFtIHtNYXRyaXgyRH0gbWF0cml4IFRoZSBtYXRyaXggdG8gY29weSBwcm9wZXJ0aWVzIGZyb20uXHJcbiAqIEByZXR1cm4ge01hdHJpeDJEfSBUaGlzIG1hdHJpeC4gVXNlZnVsIGZvciBjaGFpbmluZyBtZXRob2QgY2FsbHMuXHJcbiAqL1xyXG5wLmNvcHkgPSBmdW5jdGlvbiAobWF0cml4KSB7XHJcbiAgcmV0dXJuIHRoaXMuc2V0VmFsdWVzKG1hdHJpeC5hLCBtYXRyaXguYiwgbWF0cml4LmMsIG1hdHJpeC5kLCBtYXRyaXgudHgsIG1hdHJpeC50eSk7XHJcbn07XHJcblxyXG4vKipcclxuICogUmV0dXJucyBhIGNsb25lIG9mIHRoZSBNYXRyaXgyRCBpbnN0YW5jZS5cclxuICogQG1ldGhvZCBjbG9uZVxyXG4gKiBAcmV0dXJuIHtNYXRyaXgyRH0gYSBjbG9uZSBvZiB0aGUgTWF0cml4MkQgaW5zdGFuY2UuXHJcbiAqKi9cclxucC5jbG9uZSA9IGZ1bmN0aW9uICgpIHtcclxuICByZXR1cm4gbmV3IE1hdHJpeDJEKHRoaXMuYSwgdGhpcy5iLCB0aGlzLmMsIHRoaXMuZCwgdGhpcy50eCwgdGhpcy50eSk7XHJcbn07XHJcblxyXG4vKipcclxuICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIG9iamVjdC5cclxuICogQG1ldGhvZCB0b1N0cmluZ1xyXG4gKiBAcmV0dXJuIHtTdHJpbmd9IGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBpbnN0YW5jZS5cclxuICoqL1xyXG5wLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICAnW01hdHJpeDJEIChhPScgK1xyXG4gICAgdGhpcy5hICtcclxuICAgICcgYj0nICtcclxuICAgIHRoaXMuYiArXHJcbiAgICAnIGM9JyArXHJcbiAgICB0aGlzLmMgK1xyXG4gICAgJyBkPScgK1xyXG4gICAgdGhpcy5kICtcclxuICAgICcgdHg9JyArXHJcbiAgICB0aGlzLnR4ICtcclxuICAgICcgdHk9JyArXHJcbiAgICB0aGlzLnR5ICtcclxuICAgICcpXSdcclxuICApO1xyXG59O1xyXG5cclxuLy8gdGhpcyBoYXMgdG8gYmUgcG9wdWxhdGVkIGFmdGVyIHRoZSBjbGFzcyBpcyBkZWZpbmVkOlxyXG5NYXRyaXgyRC5pZGVudGl0eSA9IG5ldyBNYXRyaXgyRCgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWF0cml4MkQ7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBSZWN0YW5nbGUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBSZWN0YW5nbGUoeCwgeSwgd2lkdGgsIGhlaWdodCkge1xyXG4gICAgICAgIHRoaXMuc2V0VmFsdWVzKHgsIHksIHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgfVxyXG4gICAgUmVjdGFuZ2xlLnByb3RvdHlwZS5zZXRWYWx1ZXMgPSBmdW5jdGlvbiAoeCwgeSwgd2lkdGgsIGhlaWdodCkge1xyXG4gICAgICAgIHRoaXMueCA9IHggfHwgMDtcclxuICAgICAgICB0aGlzLnkgPSB5IHx8IDA7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoIHx8IDA7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQgfHwgMDtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBSZWN0YW5nbGUucHJvdG90eXBlLmV4dGVuZCA9IGZ1bmN0aW9uICh4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICAgICAgd2lkdGggPSB3aWR0aCB8fCAwO1xyXG4gICAgICAgIGhlaWdodCA9IGhlaWdodCB8fCAwO1xyXG4gICAgICAgIGlmICh4ICsgd2lkdGggPiB0aGlzLnggKyB0aGlzLndpZHRoKSB7XHJcbiAgICAgICAgICAgIHRoaXMud2lkdGggPSB4ICsgd2lkdGggLSB0aGlzLng7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh5ICsgaGVpZ2h0ID4gdGhpcy55ICsgdGhpcy5oZWlnaHQpIHtcclxuICAgICAgICAgICAgdGhpcy5oZWlnaHQgPSB5ICsgaGVpZ2h0IC0gdGhpcy55O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoeCA8IHRoaXMueCkge1xyXG4gICAgICAgICAgICB0aGlzLndpZHRoICs9IHRoaXMueCAtIHg7XHJcbiAgICAgICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh5IDwgdGhpcy55KSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGVpZ2h0ICs9IHRoaXMueSAtIHk7XHJcbiAgICAgICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIFJlY3RhbmdsZS5wcm90b3R5cGUuY29weSA9IGZ1bmN0aW9uIChyZWN0YW5nbGUpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZXRWYWx1ZXMocmVjdGFuZ2xlLngsIHJlY3RhbmdsZS55LCByZWN0YW5nbGUud2lkdGgsIHJlY3RhbmdsZS5oZWlnaHQpO1xyXG4gICAgfTtcclxuICAgIFJlY3RhbmdsZS5wcm90b3R5cGUuY29udGFpbnMgPSBmdW5jdGlvbiAoeCwgeSwgd2lkdGgsIGhlaWdodCkge1xyXG4gICAgICAgIHdpZHRoID0gd2lkdGggfHwgMDtcclxuICAgICAgICBoZWlnaHQgPSBoZWlnaHQgfHwgMDtcclxuICAgICAgICByZXR1cm4gKHggPj0gdGhpcy54ICYmXHJcbiAgICAgICAgICAgIHggKyB3aWR0aCA8PSB0aGlzLnggKyB0aGlzLndpZHRoICYmXHJcbiAgICAgICAgICAgIHkgPj0gdGhpcy55ICYmXHJcbiAgICAgICAgICAgIHkgKyBoZWlnaHQgPD0gdGhpcy55ICsgdGhpcy5oZWlnaHQpO1xyXG4gICAgfTtcclxuICAgIFJlY3RhbmdsZS5wcm90b3R5cGUuaXNFbXB0eSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy53aWR0aCA8PSAwIHx8IHRoaXMuaGVpZ2h0IDw9IDA7XHJcbiAgICB9O1xyXG4gICAgUmVjdGFuZ2xlLnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFJlY3RhbmdsZSh0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBSZWN0YW5nbGU7XHJcbn0oKSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IFJlY3RhbmdsZTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfSk7XHJcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgb1trMl0gPSBtW2tdO1xyXG59KSk7XHJcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9fc2V0TW9kdWxlRGVmYXVsdCkgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xyXG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcclxufSk7XHJcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGspO1xyXG4gICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn07XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIGluZGV4XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vcmVuZGVyL2luZGV4XCIpKTtcclxudmFyIHN0YWdlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vbm9kZS9zdGFnZVwiKSk7XHJcbnZhciBncm91cF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL25vZGUvZ3JvdXBcIikpO1xyXG52YXIgYml0bWFwXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vbm9kZS9iaXRtYXBcIikpO1xyXG52YXIgdGV4dF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL25vZGUvdGV4dFwiKSk7XHJcbnZhciBncmFwaGljc18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL25vZGUvZ3JhcGhpY3NcIikpO1xyXG52YXIgc2hhcGVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9ub2RlL3NoYXBlL3NoYXBlXCIpKTtcclxudmFyIHJlY3RfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9ub2RlL3NoYXBlL3JlY3RcIikpO1xyXG52YXIgY2lyY2xlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vbm9kZS9zaGFwZS9jaXJjbGVcIikpO1xyXG52YXIgcm91bmRlZF9yZWN0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vbm9kZS9zaGFwZS9yb3VuZGVkLXJlY3RcIikpO1xyXG52YXIgYXJyb3dfcGF0aF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL25vZGUvc2hhcGUvYXJyb3ctcGF0aFwiKSk7XHJcbnZhciBlbGxpcHNlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vbm9kZS9zaGFwZS9lbGxpcHNlXCIpKTtcclxudmFyIHBvbHlnb25fMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9ub2RlL3NoYXBlL3BvbHlnb25cIikpO1xyXG52YXIgc2VjdG9yXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vbm9kZS9zaGFwZS9zZWN0b3JcIikpO1xyXG52YXIgZXF1aWxhdGVyYWxfcG9seWdvbl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL25vZGUvc2hhcGUvZXF1aWxhdGVyYWwtcG9seWdvblwiKSk7XHJcbnZhciB1dGlscyA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi91dGlscy91dGlsXCIpKTtcclxudmFyIG1wcmMgPSB7XHJcbiAgICBSZW5kZXI6IGluZGV4XzEuZGVmYXVsdCxcclxuICAgIFN0YWdlOiBzdGFnZV8xLmRlZmF1bHQsXHJcbiAgICBHcm91cDogZ3JvdXBfMS5kZWZhdWx0LFxyXG4gICAgQml0bWFwOiBiaXRtYXBfMS5kZWZhdWx0LFxyXG4gICAgVGV4dDogdGV4dF8xLmRlZmF1bHQsXHJcbiAgICBHcmFwaGljczogZ3JhcGhpY3NfMS5kZWZhdWx0LFxyXG4gICAgU2hhcGU6IHNoYXBlXzEuZGVmYXVsdCxcclxuICAgIFJlY3Q6IHJlY3RfMS5kZWZhdWx0LFxyXG4gICAgQ2lyY2xlOiBjaXJjbGVfMS5kZWZhdWx0LFxyXG4gICAgUm91bmRlZFJlY3Q6IHJvdW5kZWRfcmVjdF8xLmRlZmF1bHQsXHJcbiAgICBBcnJvd1BhdGg6IGFycm93X3BhdGhfMS5kZWZhdWx0LFxyXG4gICAgRWxsaXBzZTogZWxsaXBzZV8xLmRlZmF1bHQsXHJcbiAgICBQb2x5Z29uOiBwb2x5Z29uXzEuZGVmYXVsdCxcclxuICAgIFNlY3Rvcjogc2VjdG9yXzEuZGVmYXVsdCxcclxuICAgIEVxdWlsYXRlcmFsUG9seWdvbjogZXF1aWxhdGVyYWxfcG9seWdvbl8xLmRlZmF1bHQsXHJcbiAgICBsb2FkSW1hZ2U6IHV0aWxzLmxvYWRJbWFnZVxyXG59O1xyXG5leHBvcnRzLmRlZmF1bHQgPSBtcHJjO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIG5vZGVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9ub2RlXCIpKTtcclxudmFyIEJpdG1hcCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhCaXRtYXAsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBCaXRtYXAoaW1nKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcclxuICAgICAgICBpZiAoQml0bWFwLmNhY2hlW2ltZy5zcmNdKSB7XHJcbiAgICAgICAgICAgIF90aGlzLmltZyA9IEJpdG1hcC5jYWNoZVtpbWcuc3JjXTtcclxuICAgICAgICAgICAgX3RoaXMucmVjdCA9IFswLCAwLCBfdGhpcy5pbWcud2lkdGgsIF90aGlzLmltZy5oZWlnaHRdO1xyXG4gICAgICAgICAgICBfdGhpcy53aWR0aCA9IF90aGlzLmltZy53aWR0aDtcclxuICAgICAgICAgICAgX3RoaXMuaGVpZ2h0ID0gX3RoaXMuaW1nLmhlaWdodDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIF90aGlzLmltZyA9IGltZztcclxuICAgICAgICAgICAgX3RoaXMucmVjdCA9IFswLCAwLCBpbWcud2lkdGgsIGltZy5oZWlnaHRdO1xyXG4gICAgICAgICAgICBfdGhpcy53aWR0aCA9IGltZy53aWR0aDtcclxuICAgICAgICAgICAgX3RoaXMuaGVpZ2h0ID0gaW1nLmhlaWdodDtcclxuICAgICAgICAgICAgQml0bWFwLmNhY2hlW2ltZy5zcmNdID0gaW1nO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICBCaXRtYXAucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIChjdHgpIHtcclxuICAgICAgICB2YXIgcmVjdCA9IHRoaXMucmVjdDtcclxuICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMuaW1nLCByZWN0WzBdLCByZWN0WzFdLCByZWN0WzJdLCByZWN0WzNdLCAwLCAwLCByZWN0WzJdLCByZWN0WzNdKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gQml0bWFwO1xyXG59KG5vZGVfMS5kZWZhdWx0KSk7XHJcbkJpdG1hcC5jYWNoZSA9IHt9O1xyXG5leHBvcnRzLmRlZmF1bHQgPSBCaXRtYXA7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgbm9kZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL25vZGVcIikpO1xyXG52YXIgYXNzTWFwID0ge1xyXG4gICAgZmlsbFN0eWxlOiB0cnVlLFxyXG4gICAgc3Ryb2tlU3R5bGU6IHRydWUsXHJcbiAgICBsaW5lV2lkdGg6IHRydWUsXHJcbiAgICBsaW5lQ2FwOiB0cnVlLFxyXG4gICAgbGluZURhc2hPZmZzZXQ6IHRydWUsXHJcbiAgICBsaW5lSm9pbjogdHJ1ZSxcclxuICAgIG1pdGVyTGltaXQ6IHRydWVcclxufTtcclxudmFyIEdyYXBoaWNzID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKEdyYXBoaWNzLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gR3JhcGhpY3MoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5jbWRzID0gW107XHJcbiAgICAgICAgX3RoaXMuY3VycmVudEdyYWRpZW50ID0gbnVsbDtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICBHcmFwaGljcy5wcm90b3R5cGUuY2xlYXJSZWN0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBwYXJhbXMgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICBwYXJhbXNbX2ldID0gYXJndW1lbnRzW19pXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jbWRzLnB1c2goWydjbGVhclJlY3QnLCBhcmd1bWVudHNdKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBHcmFwaGljcy5wcm90b3R5cGUucmVjdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgcGFyYW1zID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgcGFyYW1zW19pXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY21kcy5wdXNoKFsncmVjdCcsIGFyZ3VtZW50c10pO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIEdyYXBoaWNzLnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgcGFyYW1zID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgcGFyYW1zW19pXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY21kcy5sZW5ndGggPSAwO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIEdyYXBoaWNzLnByb3RvdHlwZS5zZXRMaW5lRGFzaCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgcGFyYW1zID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgcGFyYW1zW19pXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY21kcy5wdXNoKFsnc2V0TGluZURhc2gnLCBhcmd1bWVudHNdKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBHcmFwaGljcy5wcm90b3R5cGUuc3Ryb2tlUmVjdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgcGFyYW1zID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgcGFyYW1zW19pXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY21kcy5wdXNoKFsnc3Ryb2tlUmVjdCcsIGFyZ3VtZW50c10pO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIEdyYXBoaWNzLnByb3RvdHlwZS5maWxsUmVjdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgcGFyYW1zID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgcGFyYW1zW19pXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY21kcy5wdXNoKFsnZmlsbFJlY3QnLCBhcmd1bWVudHNdKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBHcmFwaGljcy5wcm90b3R5cGUuYmVnaW5QYXRoID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBwYXJhbXMgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICBwYXJhbXNbX2ldID0gYXJndW1lbnRzW19pXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jbWRzLnB1c2goWydiZWdpblBhdGgnLCBhcmd1bWVudHNdKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBHcmFwaGljcy5wcm90b3R5cGUuYXJjID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBwYXJhbXMgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICBwYXJhbXNbX2ldID0gYXJndW1lbnRzW19pXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jbWRzLnB1c2goWydhcmMnLCBhcmd1bWVudHNdKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBHcmFwaGljcy5wcm90b3R5cGUuY2xvc2VQYXRoID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBwYXJhbXMgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICBwYXJhbXNbX2ldID0gYXJndW1lbnRzW19pXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jbWRzLnB1c2goWydjbG9zZVBhdGgnLCBhcmd1bWVudHNdKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBHcmFwaGljcy5wcm90b3R5cGUuZmlsbFN0eWxlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBwYXJhbXMgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICBwYXJhbXNbX2ldID0gYXJndW1lbnRzW19pXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jbWRzLnB1c2goWydmaWxsU3R5bGUnLCBhcmd1bWVudHNdKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBHcmFwaGljcy5wcm90b3R5cGUuZmlsbCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgcGFyYW1zID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgcGFyYW1zW19pXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY21kcy5wdXNoKFsnZmlsbCcsIGFyZ3VtZW50c10pO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIEdyYXBoaWNzLnByb3RvdHlwZS5zdHJva2VTdHlsZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgcGFyYW1zID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgcGFyYW1zW19pXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY21kcy5wdXNoKFsnc3Ryb2tlU3R5bGUnLCBhcmd1bWVudHNdKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBHcmFwaGljcy5wcm90b3R5cGUubGluZVdpZHRoID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBwYXJhbXMgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICBwYXJhbXNbX2ldID0gYXJndW1lbnRzW19pXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jbWRzLnB1c2goWydsaW5lV2lkdGgnLCBhcmd1bWVudHNdKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBHcmFwaGljcy5wcm90b3R5cGUubGluZUNhcCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgcGFyYW1zID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgcGFyYW1zW19pXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY21kcy5wdXNoKFsnbGluZUNhcCcsIGFyZ3VtZW50c10pO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIEdyYXBoaWNzLnByb3RvdHlwZS5saW5lRGFzaE9mZnNldCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgcGFyYW1zID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgcGFyYW1zW19pXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY21kcy5wdXNoKFsnbGluZURhc2hPZmZzZXQnLCBhcmd1bWVudHNdKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBHcmFwaGljcy5wcm90b3R5cGUubGluZUpvaW4gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHBhcmFtcyA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgIHBhcmFtc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNtZHMucHVzaChbJ2xpbmVKb2luJywgYXJndW1lbnRzXSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgR3JhcGhpY3MucHJvdG90eXBlLm1pdGVyTGltaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHBhcmFtcyA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgIHBhcmFtc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNtZHMucHVzaChbJ21pdGVyTGltaXQnLCBhcmd1bWVudHNdKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBHcmFwaGljcy5wcm90b3R5cGUuc3Ryb2tlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBwYXJhbXMgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICBwYXJhbXNbX2ldID0gYXJndW1lbnRzW19pXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jbWRzLnB1c2goWydzdHJva2UnLCBhcmd1bWVudHNdKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBHcmFwaGljcy5wcm90b3R5cGUubW92ZVRvID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBwYXJhbXMgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICBwYXJhbXNbX2ldID0gYXJndW1lbnRzW19pXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jbWRzLnB1c2goWydtb3ZlVG8nLCBhcmd1bWVudHNdKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBHcmFwaGljcy5wcm90b3R5cGUubGluZVRvID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBwYXJhbXMgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICBwYXJhbXNbX2ldID0gYXJndW1lbnRzW19pXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jbWRzLnB1c2goWydsaW5lVG8nLCBhcmd1bWVudHNdKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBHcmFwaGljcy5wcm90b3R5cGUuYmV6aWVyQ3VydmVUbyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgcGFyYW1zID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgcGFyYW1zW19pXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY21kcy5wdXNoKFsnYmV6aWVyQ3VydmVUbycsIGFyZ3VtZW50c10pO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIEdyYXBoaWNzLnByb3RvdHlwZS5xdWFkcmF0aWNDdXJ2ZVRvID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBwYXJhbXMgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICBwYXJhbXNbX2ldID0gYXJndW1lbnRzW19pXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jbWRzLnB1c2goWydxdWFkcmF0aWNDdXJ2ZVRvJywgYXJndW1lbnRzXSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgR3JhcGhpY3MucHJvdG90eXBlLmNyZWF0ZVJhZGlhbEdyYWRpZW50ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBwYXJhbXMgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICBwYXJhbXNbX2ldID0gYXJndW1lbnRzW19pXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jbWRzLnB1c2goWydjcmVhdGVSYWRpYWxHcmFkaWVudCcsIGFyZ3VtZW50c10pO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIEdyYXBoaWNzLnByb3RvdHlwZS5jcmVhdGVMaW5lYXJHcmFkaWVudCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgcGFyYW1zID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgcGFyYW1zW19pXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY21kcy5wdXNoKFsnY3JlYXRlTGluZWFyR3JhZGllbnQnLCBhcmd1bWVudHNdKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBHcmFwaGljcy5wcm90b3R5cGUuYWRkQ29sb3JTdG9wID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBwYXJhbXMgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICBwYXJhbXNbX2ldID0gYXJndW1lbnRzW19pXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jbWRzLnB1c2goWydhZGRDb2xvclN0b3AnLCBhcmd1bWVudHNdKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBHcmFwaGljcy5wcm90b3R5cGUuZmlsbEdyYWRpZW50ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBwYXJhbXMgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICBwYXJhbXNbX2ldID0gYXJndW1lbnRzW19pXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jbWRzLnB1c2goWydmaWxsR3JhZGllbnQnXSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgR3JhcGhpY3MucHJvdG90eXBlLmFyY1RvID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBwYXJhbXMgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICBwYXJhbXNbX2ldID0gYXJndW1lbnRzW19pXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jbWRzLnB1c2goWydhcmNUbycsIGFyZ3VtZW50c10pO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIEdyYXBoaWNzLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoY3R4KSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLmNtZHMuZm9yRWFjaChmdW5jdGlvbiAoY21kKSB7XHJcbiAgICAgICAgICAgIHZhciBtZXRob2ROYW1lID0gY21kWzBdO1xyXG4gICAgICAgICAgICBpZiAoYXNzTWFwW21ldGhvZE5hbWVdKSB7XHJcbiAgICAgICAgICAgICAgICBjdHhbbWV0aG9kTmFtZV0gPSBjbWRbMV1bMF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAobWV0aG9kTmFtZSA9PT0gJ2FkZENvbG9yU3RvcCcpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLmN1cnJlbnRHcmFkaWVudCAmJiBfdGhpcy5jdXJyZW50R3JhZGllbnQuYWRkQ29sb3JTdG9wKGNtZFsxXVswXSwgY21kWzFdWzFdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChtZXRob2ROYW1lID09PSAnZmlsbEdyYWRpZW50Jykge1xyXG4gICAgICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IF90aGlzLmN1cnJlbnRHcmFkaWVudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSBjdHhbbWV0aG9kTmFtZV0uYXBwbHkoY3R4LCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChjbWRbMV0pKTtcclxuICAgICAgICAgICAgICAgIGlmIChtZXRob2ROYW1lID09PSAnY3JlYXRlUmFkaWFsR3JhZGllbnQnIHx8IG1ldGhvZE5hbWUgPT09ICdjcmVhdGVMaW5lYXJHcmFkaWVudCcpIHtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5jdXJyZW50R3JhZGllbnQgPSByZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gR3JhcGhpY3M7XHJcbn0obm9kZV8xLmRlZmF1bHQpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gR3JhcGhpY3M7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgbm9kZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL25vZGVcIikpO1xyXG52YXIgR3JvdXAgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoR3JvdXAsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBHcm91cCgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLmNoaWxkcmVuID0gW107XHJcbiAgICAgICAgX3RoaXMubW91c2VDaGlsZHJlbiA9IHRydWU7XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgR3JvdXAucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBjID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICB2YXIgcGFyZW50XzEgPSBjLnBhcmVudDtcclxuICAgICAgICAgICAgaWYgKHBhcmVudF8xKSB7XHJcbiAgICAgICAgICAgICAgICBwYXJlbnRfMS5yZW1vdmVDaGlsZEF0KHBhcmVudF8xLmNoaWxkcmVuLmluZGV4T2YoYykpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuY2hpbGRyZW4ucHVzaChjKTtcclxuICAgICAgICAgICAgYy5wYXJlbnQgPSB0aGlzO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBHcm91cC5wcm90b3R5cGUuYWRkQ2hpbGRBdCA9IGZ1bmN0aW9uIChjaGlsZCwgaW5kZXgpIHtcclxuICAgICAgICB2YXIgcGFyID0gY2hpbGQucGFyZW50O1xyXG4gICAgICAgIHBhciAmJiBwYXIucmVtb3ZlQ2hpbGRBdChwYXIuY2hpbGRyZW4uaW5kZXhPZihjaGlsZCkpO1xyXG4gICAgICAgIGNoaWxkLnBhcmVudCA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5jaGlsZHJlbi5zcGxpY2UoaW5kZXgsIDAsIGNoaWxkKTtcclxuICAgIH07XHJcbiAgICBHcm91cC5wcm90b3R5cGUucmVtb3ZlQ2hpbGRBdCA9IGZ1bmN0aW9uIChpbmRleCkge1xyXG4gICAgICAgIHZhciBjaGlsZCA9IHRoaXMuY2hpbGRyZW5baW5kZXhdO1xyXG4gICAgICAgIGlmIChjaGlsZCkge1xyXG4gICAgICAgICAgICBjaGlsZC5wYXJlbnQgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNoaWxkcmVuLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICB9O1xyXG4gICAgR3JvdXAucHJvdG90eXBlLnJlcGxhY2UgPSBmdW5jdGlvbiAoY3VycmVudCwgcHJlKSB7XHJcbiAgICAgICAgdmFyIGluZGV4ID0gcHJlLnBhcmVudC5jaGlsZHJlbi5pbmRleE9mKHByZSk7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVDaGlsZEF0KGluZGV4KTtcclxuICAgICAgICB0aGlzLmFkZENoaWxkQXQoY3VycmVudCwgaW5kZXgpO1xyXG4gICAgfTtcclxuICAgIEdyb3VwLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAoY2hpbGQpIHtcclxuICAgICAgICB2YXIgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcclxuICAgICAgICB2YXIgY0xlbiA9IHRoaXMuY2hpbGRyZW4ubGVuZ3RoO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBjTGVuOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChjaGlsZC5pZCA9PT0gdGhpcy5jaGlsZHJlbltqXS5pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLnBhcmVudCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGlsZHJlbi5zcGxpY2UoaiwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgai0tO1xyXG4gICAgICAgICAgICAgICAgICAgIGNMZW4tLTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBHcm91cC5wcm90b3R5cGUuZW1wdHkgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgICAgICAgICBjaGlsZC5wYXJlbnQgPSBudWxsO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuY2hpbGRyZW4ubGVuZ3RoID0gMDtcclxuICAgIH07XHJcbiAgICBHcm91cC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmVtcHR5KCk7XHJcbiAgICAgICAgdGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuZGVzdHJveSgpO1xyXG4gICAgfTtcclxuICAgIEdyb3VwLnByb3RvdHlwZS5fZ2V0T2JqZWN0c1VuZGVyUG9pbnQgPSBmdW5jdGlvbiAoeCwgeSwgaGl0Q3R4KSB7XHJcbiAgICAgICAgdmFyIGN0eCA9IGhpdEN0eDtcclxuICAgICAgICBpZiAoIXRoaXMuX3Rlc3RNYXNrKHRoaXMsIHgsIHksIGN0eCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBjaGlsZHJlbiA9IHRoaXMuY2hpbGRyZW47XHJcbiAgICAgICAgdmFyIGwgPSBjaGlsZHJlbi5sZW5ndGg7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IGwgLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICB2YXIgY2hpbGQgPSBjaGlsZHJlbltpXTtcclxuICAgICAgICAgICAgdmFyIGhpdEJveCA9IGNoaWxkLmhpdEJveDtcclxuICAgICAgICAgICAgaWYgKCFjaGlsZC5pc1Zpc2libGUoKSB8fCBjaGlsZC5pZ25vcmVIaXQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5fdGVzdE1hc2soY2hpbGQsIHgsIHksIGN0eCkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghaGl0Qm94ICYmIGNoaWxkIGluc3RhbmNlb2YgR3JvdXApIHtcclxuICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSBjaGlsZC5fZ2V0T2JqZWN0c1VuZGVyUG9pbnQoeCwgeSwgY3R4KTtcclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICF0aGlzLm1vdXNlQ2hpbGRyZW4gPyB0aGlzIDogcmVzdWx0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdmFyIHByb3BzID0gY2hpbGQuZ2V0Q29uY2F0ZW5hdGVkRGlzcGxheVByb3BzKGNoaWxkLl9wcm9wcyk7XHJcbiAgICAgICAgICAgICAgICB2YXIgbXR4ID0gcHJvcHMubWF0cml4O1xyXG4gICAgICAgICAgICAgICAgaWYgKGhpdEJveCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLnNldEJvdW5kcygwLCAwLCBjaGlsZC53aWR0aCwgY2hpbGQuaGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYm91bmRzID0gY2hpbGQuX2dldEJvdW5kcyhjaGlsZC5wYXJlbnQuX3Byb3BzLm1hdHJpeCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIEFBQkIgPSBbYm91bmRzLngsIGJvdW5kcy55LCBib3VuZHMud2lkdGgsIGJvdW5kcy5oZWlnaHRdO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5jaGVja1BvaW50SW5BQUJCKHgsIHksIEFBQkIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2hpbGQgaW5zdGFuY2VvZiBHcm91cCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gY2hpbGQuX2dldE9iamVjdHNVbmRlclBvaW50KHgsIHksIGN0eCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAhdGhpcy5tb3VzZUNoaWxkcmVuID8gdGhpcyA6IHJlc3VsdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjaGlsZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGN0eC5nbG9iYWxBbHBoYSA9IHByb3BzLmFscGhhO1xyXG4gICAgICAgICAgICAgICAgY3R4LnNldFRyYW5zZm9ybShtdHguYSwgbXR4LmIsIG10eC5jLCBtdHguZCwgbXR4LnR4IC0geCwgbXR4LnR5IC0geSk7XHJcbiAgICAgICAgICAgICAgICBjaGlsZC5yZW5kZXIoY3R4KTtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5fdGVzdEhpdChjdHgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjdHguc2V0VHJhbnNmb3JtKDEsIDAsIDAsIDEsIDAsIDApO1xyXG4gICAgICAgICAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCAyLCAyKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiAhdGhpcy5tb3VzZUNoaWxkcmVuID8gdGhpcyA6IGNoaWxkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfTtcclxuICAgIEdyb3VwLnByb3RvdHlwZS5fdGVzdE1hc2sgPSBmdW5jdGlvbiAodGFyZ2V0LCB4LCB5LCBoaXRDdHgpIHtcclxuICAgICAgICB2YXIgY3R4ID0gaGl0Q3R4O1xyXG4gICAgICAgIHZhciBtYXNrID0gdGFyZ2V0Lm1hc2s7XHJcbiAgICAgICAgaWYgKCFtYXNrKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgbXR4ID0gdGhpcy5fcHJvcHMubWF0cml4O1xyXG4gICAgICAgIHZhciBwYXJlbnQgPSB0YXJnZXQucGFyZW50O1xyXG4gICAgICAgIG10eCA9IHBhcmVudCA/IHBhcmVudC5nZXRDb25jYXRlbmF0ZWRNYXRyaXgobXR4KSA6IG10eC5pZGVudGl0eSgpO1xyXG4gICAgICAgIG10eCA9IG1hc2suZ2V0TWF0cml4KG1hc2suX3Byb3BzLm1hdHJpeCkucHJlcGVuZE1hdHJpeChtdHgpO1xyXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICBjdHguc2V0VHJhbnNmb3JtKG10eC5hLCBtdHguYiwgbXR4LmMsIG10eC5kLCBtdHgudHggLSB4LCBtdHgudHkgLSB5KTtcclxuICAgICAgICBtYXNrLnJlbmRlcihjdHgpO1xyXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSAnIzAwMCc7XHJcbiAgICAgICAgY3R4LmZpbGwoKTtcclxuICAgICAgICBpZiAoIXRoaXMuX3Rlc3RIaXQoY3R4KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGN0eC5zZXRUcmFuc2Zvcm0oMSwgMCwgMCwgMSwgMCwgMCk7XHJcbiAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCAyLCAyKTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH07XHJcbiAgICBHcm91cC5wcm90b3R5cGUuX3Rlc3RIaXQgPSBmdW5jdGlvbiAoY3R4KSB7XHJcbiAgICAgICAgcmV0dXJuIGN0eC5nZXRJbWFnZURhdGEoMCwgMCwgMSwgMSkuZGF0YVszXSA+IDE7XHJcbiAgICB9O1xyXG4gICAgR3JvdXAucHJvdG90eXBlLmNoZWNrUG9pbnRJbkFBQkIgPSBmdW5jdGlvbiAoeCwgeSwgQUFCQikge1xyXG4gICAgICAgIHZhciBtaW5YID0gQUFCQlswXTtcclxuICAgICAgICBpZiAoeCA8IG1pblgpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB2YXIgbWluWSA9IEFBQkJbMV07XHJcbiAgICAgICAgaWYgKHkgPCBtaW5ZKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgdmFyIG1heFggPSBtaW5YICsgQUFCQlsyXTtcclxuICAgICAgICBpZiAoeCA+IG1heFgpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB2YXIgbWF4WSA9IG1pblkgKyBBQUJCWzNdO1xyXG4gICAgICAgIGlmICh5ID4gbWF4WSlcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBHcm91cDtcclxufShub2RlXzEuZGVmYXVsdCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBHcm91cDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIHVpZF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi91dGlscy91aWRcIikpO1xyXG52YXIgZGlzcGxheVByb3BzXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL2dlb20vZGlzcGxheVByb3BzXCIpKTtcclxudmFyIHJlY3RhbmdsZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9nZW9tL3JlY3RhbmdsZVwiKSk7XHJcbnZhciBtYXRyaXgyZF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9nZW9tL21hdHJpeDJkXCIpKTtcclxudmFyIF9ldmVudExpc3RlbmVycyA9IFN5bWJvbCgnZXZlbnRMaXN0ZW5lcnMnKTtcclxudmFyIF9jYXB0dXJlRXZlbnRMaXN0ZW5lcnMgPSBTeW1ib2woJ2NhcHR1cmVFdmVudExpc3RlbmVycycpO1xyXG52YXIgTm9kZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIE5vZGUoKSB7XHJcbiAgICAgICAgdGhpc1tfZXZlbnRMaXN0ZW5lcnNdID0ge307XHJcbiAgICAgICAgdGhpc1tfY2FwdHVyZUV2ZW50TGlzdGVuZXJzXSA9IHt9O1xyXG4gICAgICAgIHRoaXMucGFyZW50ID0gbnVsbDtcclxuICAgICAgICB0aGlzLmlkID0gdWlkXzEuZGVmYXVsdC5nZXQoKTtcclxuICAgICAgICB0aGlzLnggPSAwO1xyXG4gICAgICAgIHRoaXMueSA9IDA7XHJcbiAgICAgICAgdGhpcy5zY2FsZSA9IDE7XHJcbiAgICAgICAgdGhpcy5zY2FsZVggPSAxO1xyXG4gICAgICAgIHRoaXMuc2NhbGVZID0gMTtcclxuICAgICAgICB0aGlzLnJvdGF0aW9uID0gMDtcclxuICAgICAgICB0aGlzLnNrZXdYID0gMDtcclxuICAgICAgICB0aGlzLnNrZXdZID0gMDtcclxuICAgICAgICB0aGlzLnJlZ1ggPSAwO1xyXG4gICAgICAgIHRoaXMucmVnWSA9IDA7XHJcbiAgICAgICAgdGhpcy5hbHBoYSA9IDE7XHJcbiAgICAgICAgdGhpcy52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNoYWRvdyA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5tYXNrID0gbnVsbDtcclxuICAgICAgICB0aGlzLl9wcm9wcyA9IG5ldyBkaXNwbGF5UHJvcHNfMS5kZWZhdWx0KCk7XHJcbiAgICAgICAgdGhpcy5fcmVjdGFuZ2xlID0gbmV3IHJlY3RhbmdsZV8xLmRlZmF1bHQoKTtcclxuICAgICAgICB0aGlzLl9ib3VuZHMgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuY29tcG9zaXRlT3BlcmF0aW9uID0gbnVsbDtcclxuICAgICAgICB0aGlzLmhpdEJveCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaWdub3JlSGl0ID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTm9kZS5wcm90b3R5cGUsIFwic3RhZ2VcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgbyA9IHRoaXM7XHJcbiAgICAgICAgICAgIHdoaWxlIChvLnBhcmVudCkge1xyXG4gICAgICAgICAgICAgICAgbyA9IG8ucGFyZW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChvLl9fX2luc3RhbmNlb2YgPT09ICdTdGFnZScpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbztcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE5vZGUucHJvdG90eXBlLCBcInNjYWxlXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2NhbGVYO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoc2NhbGUpIHtcclxuICAgICAgICAgICAgdGhpcy5zY2FsZVggPSB0aGlzLnNjYWxlWSA9IHNjYWxlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE5vZGUucHJvdG90eXBlLmlzVmlzaWJsZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy52aXNpYmxlICYmIHRoaXMuYWxwaGEgPiAwICYmIHRoaXMuc2NhbGVYICE9PSAwICYmIHRoaXMuc2NhbGVZICE9PSAwO1xyXG4gICAgfTtcclxuICAgIE5vZGUucHJvdG90eXBlLmNsaXAgPSBmdW5jdGlvbiAoZ3JhcGhpY3MpIHtcclxuICAgICAgICB0aGlzLm1hc2sgPSBncmFwaGljcztcclxuICAgIH07XHJcbiAgICBOb2RlLnByb3RvdHlwZS51bmNsaXAgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5tYXNrID0gbnVsbDtcclxuICAgIH07XHJcbiAgICBOb2RlLnByb3RvdHlwZS5zZXRUcmFuc2Zvcm0gPSBmdW5jdGlvbiAoeCwgeSwgc2NhbGVYLCBzY2FsZVksIHJvdGF0aW9uLCBza2V3WCwgc2tld1ksIHJlZ1gsIHJlZ1kpIHtcclxuICAgICAgICB0aGlzLnggPSB4IHx8IDA7XHJcbiAgICAgICAgdGhpcy55ID0geSB8fCAwO1xyXG4gICAgICAgIHRoaXMuc2NhbGVYID0gc2NhbGVYID09IG51bGwgPyAxIDogc2NhbGVYO1xyXG4gICAgICAgIHRoaXMuc2NhbGVZID0gc2NhbGVZID09IG51bGwgPyAxIDogc2NhbGVZO1xyXG4gICAgICAgIHRoaXMucm90YXRpb24gPSByb3RhdGlvbiB8fCAwO1xyXG4gICAgICAgIHRoaXMuc2tld1ggPSBza2V3WCB8fCAwO1xyXG4gICAgICAgIHRoaXMuc2tld1kgPSBza2V3WSB8fCAwO1xyXG4gICAgICAgIHRoaXMucmVnWCA9IHJlZ1ggfHwgMDtcclxuICAgICAgICB0aGlzLnJlZ1kgPSByZWdZIHx8IDA7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgTm9kZS5wcm90b3R5cGUuZ2V0TWF0cml4ID0gZnVuY3Rpb24gKG1hdHJpeCkge1xyXG4gICAgICAgIHZhciBvID0gdGhpcztcclxuICAgICAgICB2YXIgbXR4ID0gbWF0cml4IHx8IG5ldyBtYXRyaXgyZF8xLmRlZmF1bHQoKTtcclxuICAgICAgICByZXR1cm4gKG10eC5pZGVudGl0eSgpICYmXHJcbiAgICAgICAgICAgIG10eC5hcHBlbmRUcmFuc2Zvcm0oby54LCBvLnksIG8uc2NhbGVYLCBvLnNjYWxlWSwgby5yb3RhdGlvbiwgby5za2V3WCwgby5za2V3WSwgby5yZWdYLCBvLnJlZ1kpKTtcclxuICAgIH07XHJcbiAgICBOb2RlLnByb3RvdHlwZS5nZXRDb25jYXRlbmF0ZWRNYXRyaXggPSBmdW5jdGlvbiAobWF0cml4KSB7XHJcbiAgICAgICAgdmFyIG8gPSB0aGlzO1xyXG4gICAgICAgIHZhciBtdHggPSB0aGlzLmdldE1hdHJpeChtYXRyaXgpO1xyXG4gICAgICAgIHdoaWxlICgobyA9IG8ucGFyZW50KSkge1xyXG4gICAgICAgICAgICBtdHgucHJlcGVuZE1hdHJpeChvLmdldE1hdHJpeChvLl9wcm9wcy5tYXRyaXgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG10eDtcclxuICAgIH07XHJcbiAgICBOb2RlLnByb3RvdHlwZS5nZXRDb25jYXRlbmF0ZWREaXNwbGF5UHJvcHMgPSBmdW5jdGlvbiAocHJvcHMpIHtcclxuICAgICAgICBwcm9wcyA9IHByb3BzID8gcHJvcHMuaWRlbnRpdHkoKSA6IG5ldyBkaXNwbGF5UHJvcHNfMS5kZWZhdWx0KCk7XHJcbiAgICAgICAgdmFyIG8gPSB0aGlzO1xyXG4gICAgICAgIHZhciBtdHggPSBvLmdldE1hdHJpeChwcm9wcy5tYXRyaXgpO1xyXG4gICAgICAgIGRvIHtcclxuICAgICAgICAgICAgcHJvcHMucHJlcGVuZChvLnZpc2libGUsIG8uYWxwaGEsIG8uc2hhZG93LCBvLmNvbXBvc2l0ZU9wZXJhdGlvbik7XHJcbiAgICAgICAgICAgIGlmIChvICE9IHRoaXMpIHtcclxuICAgICAgICAgICAgICAgIG10eC5wcmVwZW5kTWF0cml4KG8uZ2V0TWF0cml4KG8uX3Byb3BzLm1hdHJpeCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSB3aGlsZSAoKG8gPSBvLnBhcmVudCkpO1xyXG4gICAgICAgIHJldHVybiBwcm9wcztcclxuICAgIH07XHJcbiAgICBOb2RlLnByb3RvdHlwZS5nZXRCb3VuZHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2JvdW5kcykge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVjdGFuZ2xlLmNvcHkodGhpcy5fYm91bmRzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9O1xyXG4gICAgTm9kZS5wcm90b3R5cGUuc2V0Qm91bmRzID0gZnVuY3Rpb24gKHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcclxuICAgICAgICBpZiAoeCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLl9ib3VuZHMgPSB4O1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2JvdW5kcyA9ICh0aGlzLl9ib3VuZHMgfHwgbmV3IHJlY3RhbmdsZV8xLmRlZmF1bHQoKSkuc2V0VmFsdWVzKHgsIHksIHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgfTtcclxuICAgIE5vZGUucHJvdG90eXBlLmdldFRyYW5zZm9ybWVkQm91bmRzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRCb3VuZHMoKTtcclxuICAgIH07XHJcbiAgICBOb2RlLnByb3RvdHlwZS5fZ2V0Qm91bmRzID0gZnVuY3Rpb24gKG1hdHJpeCwgaWdub3JlVHJhbnNmb3JtKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RyYW5zZm9ybUJvdW5kcyh0aGlzLmdldEJvdW5kcygpLCBtYXRyaXgsIGlnbm9yZVRyYW5zZm9ybSk7XHJcbiAgICB9O1xyXG4gICAgTm9kZS5wcm90b3R5cGUuX3RyYW5zZm9ybUJvdW5kcyA9IGZ1bmN0aW9uIChib3VuZHMsIG1hdHJpeCwgaWdub3JlVHJhbnNmb3JtKSB7XHJcbiAgICAgICAgaWYgKCFib3VuZHMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGJvdW5kcztcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHggPSBib3VuZHMueCwgeSA9IGJvdW5kcy55LCB3aWR0aCA9IGJvdW5kcy53aWR0aCwgaGVpZ2h0ID0gYm91bmRzLmhlaWdodCwgbXR4ID0gdGhpcy5fcHJvcHMubWF0cml4O1xyXG4gICAgICAgIG10eCA9IGlnbm9yZVRyYW5zZm9ybSA/IG10eC5pZGVudGl0eSgpIDogdGhpcy5nZXRNYXRyaXgobXR4KTtcclxuICAgICAgICBpZiAoeCB8fCB5KSB7XHJcbiAgICAgICAgICAgIG10eC5hcHBlbmRUcmFuc2Zvcm0oMCwgMCwgMSwgMSwgMCwgMCwgMCwgLXgsIC15KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG1hdHJpeCkge1xyXG4gICAgICAgICAgICBtdHgucHJlcGVuZE1hdHJpeChtYXRyaXgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgeF9hID0gd2lkdGggKiBtdHguYSwgeF9iID0gd2lkdGggKiBtdHguYjtcclxuICAgICAgICB2YXIgeV9jID0gaGVpZ2h0ICogbXR4LmMsIHlfZCA9IGhlaWdodCAqIG10eC5kO1xyXG4gICAgICAgIHZhciB0eCA9IG10eC50eCwgdHkgPSBtdHgudHk7XHJcbiAgICAgICAgdmFyIG1pblggPSB0eCwgbWF4WCA9IHR4LCBtaW5ZID0gdHksIG1heFkgPSB0eTtcclxuICAgICAgICBpZiAoKHggPSB4X2EgKyB0eCkgPCBtaW5YKSB7XHJcbiAgICAgICAgICAgIG1pblggPSB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh4ID4gbWF4WCkge1xyXG4gICAgICAgICAgICBtYXhYID0geDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCh4ID0geF9hICsgeV9jICsgdHgpIDwgbWluWCkge1xyXG4gICAgICAgICAgICBtaW5YID0geDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoeCA+IG1heFgpIHtcclxuICAgICAgICAgICAgbWF4WCA9IHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICgoeCA9IHlfYyArIHR4KSA8IG1pblgpIHtcclxuICAgICAgICAgICAgbWluWCA9IHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHggPiBtYXhYKSB7XHJcbiAgICAgICAgICAgIG1heFggPSB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoKHkgPSB4X2IgKyB0eSkgPCBtaW5ZKSB7XHJcbiAgICAgICAgICAgIG1pblkgPSB5O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh5ID4gbWF4WSkge1xyXG4gICAgICAgICAgICBtYXhZID0geTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCh5ID0geF9iICsgeV9kICsgdHkpIDwgbWluWSkge1xyXG4gICAgICAgICAgICBtaW5ZID0geTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoeSA+IG1heFkpIHtcclxuICAgICAgICAgICAgbWF4WSA9IHk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICgoeSA9IHlfZCArIHR5KSA8IG1pblkpIHtcclxuICAgICAgICAgICAgbWluWSA9IHk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHkgPiBtYXhZKSB7XHJcbiAgICAgICAgICAgIG1heFkgPSB5O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYm91bmRzLnNldFZhbHVlcyhtaW5YLCBtaW5ZLCBtYXhYIC0gbWluWCwgbWF4WSAtIG1pblkpO1xyXG4gICAgfTtcclxuICAgIE5vZGUucHJvdG90eXBlLm9uID0gZnVuY3Rpb24gKHR5cGUsIGxpc3RlbmVyLCBvcHRpb25zKSB7XHJcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyLCBvcHRpb25zKTtcclxuICAgIH07XHJcbiAgICBOb2RlLnByb3RvdHlwZS5vZmYgPSBmdW5jdGlvbiAodHlwZSwgbGlzdGVuZXIsIG9wdGlvbnMpIHtcclxuICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIsIG9wdGlvbnMpO1xyXG4gICAgfTtcclxuICAgIE5vZGUucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbiAodHlwZSwgbGlzdGVuZXIsIG9wdGlvbnMpIHtcclxuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdib29sZWFuJylcclxuICAgICAgICAgICAgb3B0aW9ucyA9IHsgY2FwdHVyZTogb3B0aW9ucyB9O1xyXG4gICAgICAgIHZhciBfYSA9IG9wdGlvbnMgfHwge30sIGNhcHR1cmUgPSBfYS5jYXB0dXJlLCBvbmNlID0gX2Eub25jZTtcclxuICAgICAgICB2YXIgZXZlbnRMaXN0ZW5lcnMgPSBjYXB0dXJlID8gX2NhcHR1cmVFdmVudExpc3RlbmVycyA6IF9ldmVudExpc3RlbmVycztcclxuICAgICAgICB0aGlzW2V2ZW50TGlzdGVuZXJzXVt0eXBlXSA9IHRoaXNbZXZlbnRMaXN0ZW5lcnNdW3R5cGVdIHx8IFtdO1xyXG4gICAgICAgIHRoaXNbZXZlbnRMaXN0ZW5lcnNdW3R5cGVdLnB1c2goeyBsaXN0ZW5lcjogbGlzdGVuZXIsIG9uY2U6IG9uY2UgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgTm9kZS5wcm90b3R5cGUucmVtb3ZlRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uICh0eXBlLCBsaXN0ZW5lciwgb3B0aW9ucykge1xyXG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ2Jvb2xlYW4nKVxyXG4gICAgICAgICAgICBvcHRpb25zID0geyBjYXB0dXJlOiBvcHRpb25zIH07XHJcbiAgICAgICAgdmFyIGNhcHR1cmUgPSAob3B0aW9ucyB8fCB7fSkuY2FwdHVyZTtcclxuICAgICAgICB2YXIgZXZlbnRMaXN0ZW5lcnMgPSBjYXB0dXJlID8gX2NhcHR1cmVFdmVudExpc3RlbmVycyA6IF9ldmVudExpc3RlbmVycztcclxuICAgICAgICBpZiAodGhpc1tldmVudExpc3RlbmVyc11bdHlwZV0pIHtcclxuICAgICAgICAgICAgdmFyIGxpc3RlbmVycyA9IHRoaXNbZXZlbnRMaXN0ZW5lcnNdW3R5cGVdO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3RlbmVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIF9saXN0ZW5lciA9IGxpc3RlbmVyc1tpXS5saXN0ZW5lcjtcclxuICAgICAgICAgICAgICAgIGlmIChsaXN0ZW5lciA9PT0gX2xpc3RlbmVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpc1tldmVudExpc3RlbmVyc11bdHlwZV0uc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIE5vZGUucHJvdG90eXBlLmRpc3BhdGNoRXZlbnQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIGV2ZW50LnRhcmdldCA9IHRoaXM7XHJcbiAgICAgICAgdmFyIHR5cGUgPSBldmVudC50eXBlO1xyXG4gICAgICAgIHZhciBlbGVtZW50cyA9IFt0aGlzXTtcclxuICAgICAgICB2YXIgcGFyZW50ID0gdGhpcy5wYXJlbnQ7XHJcbiAgICAgICAgd2hpbGUgKGV2ZW50LmJ1YmJsZXMgJiYgcGFyZW50KSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnRzLnB1c2gocGFyZW50KTtcclxuICAgICAgICAgICAgcGFyZW50ID0gcGFyZW50LnBhcmVudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIF9sb29wXzEgPSBmdW5jdGlvbiAoaSkge1xyXG4gICAgICAgICAgICB2YXIgZWxlbWVudCA9IGVsZW1lbnRzW2ldO1xyXG4gICAgICAgICAgICB2YXIgbGlzdGVuZXJzID0gZWxlbWVudFtfY2FwdHVyZUV2ZW50TGlzdGVuZXJzXSAmJiBlbGVtZW50W19jYXB0dXJlRXZlbnRMaXN0ZW5lcnNdW3R5cGVdO1xyXG4gICAgICAgICAgICBpZiAobGlzdGVuZXJzICYmIGxpc3RlbmVycy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGxpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBsaXN0ZW5lciA9IF9hLmxpc3RlbmVyLCBvbmNlID0gX2Eub25jZTtcclxuICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lci5jYWxsKF90aGlzLCBldmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9uY2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LnR5cGUsIGxpc3RlbmVyLCB7IGNhcHR1cmU6IHRydWUgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFldmVudC5idWJibGVzICYmIGV2ZW50LmNhbmNlbEJ1YmJsZSlcclxuICAgICAgICAgICAgICAgIHJldHVybiBcImJyZWFrXCI7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLyBjYXB0dXJlIHBoYXNlXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IGVsZW1lbnRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgIHZhciBzdGF0ZV8xID0gX2xvb3BfMShpKTtcclxuICAgICAgICAgICAgaWYgKHN0YXRlXzEgPT09IFwiYnJlYWtcIilcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBidWJibGluZ1xyXG4gICAgICAgIGlmICghZXZlbnQuY2FuY2VsQnViYmxlKSB7XHJcbiAgICAgICAgICAgIHZhciBfbG9vcF8yID0gZnVuY3Rpb24gKGkpIHtcclxuICAgICAgICAgICAgICAgIHZhciBlbGVtZW50ID0gZWxlbWVudHNbaV07XHJcbiAgICAgICAgICAgICAgICB2YXIgbGlzdGVuZXJzID0gZWxlbWVudFtfZXZlbnRMaXN0ZW5lcnNdICYmIGVsZW1lbnRbX2V2ZW50TGlzdGVuZXJzXVt0eXBlXTtcclxuICAgICAgICAgICAgICAgIGlmIChsaXN0ZW5lcnMgJiYgbGlzdGVuZXJzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbGlzdGVuZXIgPSBfYS5saXN0ZW5lciwgb25jZSA9IF9hLm9uY2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RlbmVyLmNhbGwoX3RoaXMsIGV2ZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9uY2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudC50eXBlLCBsaXN0ZW5lciwgeyBjYXB0dXJlOiBmYWxzZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKCFldmVudC5idWJibGVzIHx8IGV2ZW50LmNhbmNlbEJ1YmJsZSlcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJicmVha1wiO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc3RhdGVfMiA9IF9sb29wXzIoaSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhdGVfMiA9PT0gXCJicmVha1wiKVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBOb2RlO1xyXG59KCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBOb2RlO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIHNoYXBlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vc2hhcGVcIikpO1xyXG52YXIgQXJyb3dQYXRoID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKEFycm93UGF0aCwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIEFycm93UGF0aChwYXRoLCBvcHRpb24pIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLnBhdGggPSBwYXRoO1xyXG4gICAgICAgIF90aGlzLm9wdGlvbiA9IE9iamVjdC5hc3NpZ24oe1xyXG4gICAgICAgICAgICBzdHJva2VTdHlsZTogJ2JsYWNrJyxcclxuICAgICAgICAgICAgbGluZVdpZHRoOiAxLFxyXG4gICAgICAgICAgICBoZWFkU2l6ZTogMTBcclxuICAgICAgICB9LCBvcHRpb24pO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIEFycm93UGF0aC5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgcGF0aCA9IHRoaXMucGF0aDtcclxuICAgICAgICB0aGlzLmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIHZhciBsZW4gPSBwYXRoLmxlbmd0aDtcclxuICAgICAgICBpZiAobGVuID09PSAyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZHJhd0Fycm93KHBhdGhbMF0ueCwgcGF0aFswXS55LCBwYXRoWzFdLngsIHBhdGhbMV0ueSwgMzApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5tb3ZlVG8ocGF0aFswXS54LCBwYXRoWzBdLnkpO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGxlbiAtIDE7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5saW5lVG8ocGF0aFtpXS54LCBwYXRoW2ldLnkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuZHJhd0Fycm93KHBhdGhbbGVuIC0gMl0ueCwgcGF0aFtsZW4gLSAyXS55LCBwYXRoW2xlbiAtIDFdLngsIHBhdGhbbGVuIC0gMV0ueSwgMzApO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnN0cm9rZSgpO1xyXG4gICAgfTtcclxuICAgIEFycm93UGF0aC5wcm90b3R5cGUuZHJhd0Fycm93ID0gZnVuY3Rpb24gKGZyb21YLCBmcm9tWSwgdG9YLCB0b1ksIHRoZXRhKSB7XHJcbiAgICAgICAgdmFyIGFuZ2xlID0gKE1hdGguYXRhbjIoZnJvbVkgLSB0b1ksIGZyb21YIC0gdG9YKSAqIDE4MCkgLyBNYXRoLlBJLCBhbmdsZTEgPSAoKGFuZ2xlICsgdGhldGEpICogTWF0aC5QSSkgLyAxODAsIGFuZ2xlMiA9ICgoYW5nbGUgLSB0aGV0YSkgKiBNYXRoLlBJKSAvIDE4MCwgaHMgPSB0aGlzLm9wdGlvbi5oZWFkU2l6ZSwgdG9wWCA9IGhzICogTWF0aC5jb3MoYW5nbGUxKSwgdG9wWSA9IGhzICogTWF0aC5zaW4oYW5nbGUxKSwgYm90WCA9IGhzICogTWF0aC5jb3MoYW5nbGUyKSwgYm90WSA9IGhzICogTWF0aC5zaW4oYW5nbGUyKTtcclxuICAgICAgICB2YXIgYXJyb3dYID0gZnJvbVggLSB0b3BYLCBhcnJvd1kgPSBmcm9tWSAtIHRvcFk7XHJcbiAgICAgICAgdGhpcy5tb3ZlVG8oYXJyb3dYLCBhcnJvd1kpO1xyXG4gICAgICAgIHRoaXMubW92ZVRvKGZyb21YLCBmcm9tWSk7XHJcbiAgICAgICAgdGhpcy5saW5lVG8odG9YLCB0b1kpO1xyXG4gICAgICAgIGFycm93WCA9IHRvWCArIHRvcFg7XHJcbiAgICAgICAgYXJyb3dZID0gdG9ZICsgdG9wWTtcclxuICAgICAgICB0aGlzLm1vdmVUbyhhcnJvd1gsIGFycm93WSk7XHJcbiAgICAgICAgdGhpcy5saW5lVG8odG9YLCB0b1kpO1xyXG4gICAgICAgIGFycm93WCA9IHRvWCArIGJvdFg7XHJcbiAgICAgICAgYXJyb3dZID0gdG9ZICsgYm90WTtcclxuICAgICAgICB0aGlzLmxpbmVUbyhhcnJvd1gsIGFycm93WSk7XHJcbiAgICAgICAgdGhpcy5zdHJva2VTdHlsZSh0aGlzLm9wdGlvbi5zdHJva2VTdHlsZSk7XHJcbiAgICAgICAgdGhpcy5saW5lV2lkdGgodGhpcy5vcHRpb24ubGluZVdpZHRoKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gQXJyb3dQYXRoO1xyXG59KHNoYXBlXzEuZGVmYXVsdCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBBcnJvd1BhdGg7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgc2hhcGVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9zaGFwZVwiKSk7XHJcbnZhciBDaXJjbGUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoQ2lyY2xlLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gQ2lyY2xlKHIsIG9wdGlvbikge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMub3B0aW9uID0gb3B0aW9uIHx8IHt9O1xyXG4gICAgICAgIF90aGlzLnIgPSByO1xyXG4gICAgICAgIF90aGlzLl9kcCA9IE1hdGguUEkgKiAyO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIENpcmNsZS5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIHRoaXMuYXJjKDAsIDAsIHRoaXMuciwgMCwgdGhpcy5fZHAsIGZhbHNlKTtcclxuICAgICAgICBpZiAodGhpcy5vcHRpb24uc3Ryb2tlU3R5bGUpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9uLmxpbmVXaWR0aCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxpbmVXaWR0aCh0aGlzLm9wdGlvbi5saW5lV2lkdGgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc3Ryb2tlU3R5bGUodGhpcy5vcHRpb24uc3Ryb2tlU3R5bGUpO1xyXG4gICAgICAgICAgICB0aGlzLnN0cm9rZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5vcHRpb24uZmlsbFN0eWxlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsbFN0eWxlKHRoaXMub3B0aW9uLmZpbGxTdHlsZSk7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gQ2lyY2xlO1xyXG59KHNoYXBlXzEuZGVmYXVsdCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBDaXJjbGU7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgc2hhcGVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9zaGFwZVwiKSk7XHJcbnZhciBFbGxpcHNlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKEVsbGlwc2UsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBFbGxpcHNlKHdpZHRoLCBoZWlnaHQsIG9wdGlvbikge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMub3B0aW9uID0gb3B0aW9uIHx8IHt9O1xyXG4gICAgICAgIF90aGlzLndpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgX3RoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIEVsbGlwc2UucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHcgPSB0aGlzLndpZHRoO1xyXG4gICAgICAgIHZhciBoID0gdGhpcy5oZWlnaHQ7XHJcbiAgICAgICAgdmFyIGsgPSAwLjU1MjI4NDg7XHJcbiAgICAgICAgdmFyIG94ID0gKHcgLyAyKSAqIGs7XHJcbiAgICAgICAgdmFyIG95ID0gKGggLyAyKSAqIGs7XHJcbiAgICAgICAgdmFyIHhlID0gdztcclxuICAgICAgICB2YXIgeWUgPSBoO1xyXG4gICAgICAgIHZhciB4bSA9IHcgLyAyO1xyXG4gICAgICAgIHZhciB5bSA9IGggLyAyO1xyXG4gICAgICAgIHRoaXMuYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgdGhpcy5tb3ZlVG8oMCwgeW0pO1xyXG4gICAgICAgIHRoaXMuYmV6aWVyQ3VydmVUbygwLCB5bSAtIG95LCB4bSAtIG94LCAwLCB4bSwgMCk7XHJcbiAgICAgICAgdGhpcy5iZXppZXJDdXJ2ZVRvKHhtICsgb3gsIDAsIHhlLCB5bSAtIG95LCB4ZSwgeW0pO1xyXG4gICAgICAgIHRoaXMuYmV6aWVyQ3VydmVUbyh4ZSwgeW0gKyBveSwgeG0gKyBveCwgeWUsIHhtLCB5ZSk7XHJcbiAgICAgICAgdGhpcy5iZXppZXJDdXJ2ZVRvKHhtIC0gb3gsIHllLCAwLCB5bSArIG95LCAwLCB5bSk7XHJcbiAgICAgICAgaWYgKHRoaXMub3B0aW9uLnN0cm9rZVN0eWxlKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbi5saW5lV2lkdGggIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5saW5lV2lkdGgodGhpcy5vcHRpb24ubGluZVdpZHRoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnN0cm9rZVN0eWxlKHRoaXMub3B0aW9uLnN0cm9rZVN0eWxlKTtcclxuICAgICAgICAgICAgdGhpcy5zdHJva2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMub3B0aW9uLmZpbGxTdHlsZSkge1xyXG4gICAgICAgICAgICB0aGlzLmZpbGxTdHlsZSh0aGlzLm9wdGlvbi5maWxsU3R5bGUpO1xyXG4gICAgICAgICAgICB0aGlzLmZpbGwoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEVsbGlwc2U7XHJcbn0oc2hhcGVfMS5kZWZhdWx0KSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IEVsbGlwc2U7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgc2hhcGVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9zaGFwZVwiKSk7XHJcbnZhciBFcXVpbGF0ZXJhbFBvbHlnb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoRXF1aWxhdGVyYWxQb2x5Z29uLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gRXF1aWxhdGVyYWxQb2x5Z29uKG51bSwgciwgb3B0aW9ucykge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMubnVtID0gbnVtO1xyXG4gICAgICAgIF90aGlzLnIgPSByO1xyXG4gICAgICAgIF90aGlzLm9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xyXG4gICAgICAgIF90aGlzLnZlcnRleCA9IFtdO1xyXG4gICAgICAgIF90aGlzLmluaXRWZXJ0ZXgoKTtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICBFcXVpbGF0ZXJhbFBvbHlnb24ucHJvdG90eXBlLmluaXRWZXJ0ZXggPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy52ZXJ0ZXgubGVuZ3RoID0gW107XHJcbiAgICAgICAgdmFyIG51bSA9IHRoaXMubnVtO1xyXG4gICAgICAgIHZhciByID0gdGhpcy5yO1xyXG4gICAgICAgIHZhciBpLCBzdGFydFgsIHN0YXJ0WSwgbmV3WCwgbmV3WTtcclxuICAgICAgICBpZiAobnVtICUgMiA9PT0gMCkge1xyXG4gICAgICAgICAgICBzdGFydFggPSByICogTWF0aC5jb3MoKDIgKiBNYXRoLlBJICogMCkgLyBudW0pO1xyXG4gICAgICAgICAgICBzdGFydFkgPSByICogTWF0aC5zaW4oKDIgKiBNYXRoLlBJICogMCkgLyBudW0pO1xyXG4gICAgICAgICAgICB0aGlzLnZlcnRleC5wdXNoKFtzdGFydFgsIHN0YXJ0WV0pO1xyXG4gICAgICAgICAgICBmb3IgKGkgPSAxOyBpIDwgbnVtOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIG5ld1ggPSByICogTWF0aC5jb3MoKDIgKiBNYXRoLlBJICogaSkgLyBudW0pO1xyXG4gICAgICAgICAgICAgICAgbmV3WSA9IHIgKiBNYXRoLnNpbigoMiAqIE1hdGguUEkgKiBpKSAvIG51bSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZlcnRleC5wdXNoKFtuZXdYLCBuZXdZXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHN0YXJ0WCA9IHIgKiBNYXRoLmNvcygoMiAqIE1hdGguUEkgKiAwKSAvIG51bSAtIE1hdGguUEkgLyAyKTtcclxuICAgICAgICAgICAgc3RhcnRZID0gciAqIE1hdGguc2luKCgyICogTWF0aC5QSSAqIDApIC8gbnVtIC0gTWF0aC5QSSAvIDIpO1xyXG4gICAgICAgICAgICB0aGlzLnZlcnRleC5wdXNoKFtzdGFydFgsIHN0YXJ0WV0pO1xyXG4gICAgICAgICAgICBmb3IgKGkgPSAxOyBpIDwgbnVtOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIG5ld1ggPSByICogTWF0aC5jb3MoKDIgKiBNYXRoLlBJICogaSkgLyBudW0gLSBNYXRoLlBJIC8gMik7XHJcbiAgICAgICAgICAgICAgICBuZXdZID0gciAqIE1hdGguc2luKCgyICogTWF0aC5QSSAqIGkpIC8gbnVtIC0gTWF0aC5QSSAvIDIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy52ZXJ0ZXgucHVzaChbbmV3WCwgbmV3WV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIEVxdWlsYXRlcmFsUG9seWdvbi5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIHRoaXMubW92ZVRvKHRoaXMudmVydGV4WzBdWzBdLCB0aGlzLnZlcnRleFswXVsxXSk7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDEsIGxlbiA9IHRoaXMudmVydGV4Lmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGluZVRvKHRoaXMudmVydGV4W2ldWzBdLCB0aGlzLnZlcnRleFtpXVsxXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2xvc2VQYXRoKCk7XHJcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5maWxsU3R5bGUpIHtcclxuICAgICAgICAgICAgdGhpcy5maWxsU3R5bGUodGhpcy5vcHRpb25zLmZpbGxTdHlsZSk7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsbCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnN0cm9rZVN0eWxlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3Ryb2tlU3R5bGUodGhpcy5vcHRpb25zLnN0cm9rZVN0eWxlKTtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMubGluZVdpZHRoID09PSAnbnVtYmVyJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5saW5lV2lkdGgodGhpcy5vcHRpb25zLmxpbmVXaWR0aCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5zdHJva2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEVxdWlsYXRlcmFsUG9seWdvbjtcclxufShzaGFwZV8xLmRlZmF1bHQpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gRXF1aWxhdGVyYWxQb2x5Z29uO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIHNoYXBlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vc2hhcGVcIikpO1xyXG52YXIgUG9seWdvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhQb2x5Z29uLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gUG9seWdvbih2ZXJ0ZXgsIG9wdGlvbnMpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLnZlcnRleCA9IHZlcnRleCB8fCBbXTtcclxuICAgICAgICBfdGhpcy5vcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuICAgICAgICBfdGhpcy5zdHJva2VDb2xvciA9IF90aGlzLm9wdGlvbnMuc3Ryb2tlQ29sb3I7XHJcbiAgICAgICAgX3RoaXMuZmlsbENvbG9yID0gX3RoaXMub3B0aW9ucy5maWxsQ29sb3I7XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgUG9seWdvbi5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmNsZWFyKCkuYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgdGhpcy5zdHJva2VTdHlsZSh0aGlzLnN0cm9rZUNvbG9yKTtcclxuICAgICAgICB0aGlzLm1vdmVUbyh0aGlzLnZlcnRleFswXVswXSwgdGhpcy52ZXJ0ZXhbMF1bMV0pO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAxLCBsZW4gPSB0aGlzLnZlcnRleC5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLmxpbmVUbyh0aGlzLnZlcnRleFtpXVswXSwgdGhpcy52ZXJ0ZXhbaV1bMV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNsb3NlUGF0aCgpO1xyXG4gICAgICAgIC8vIOi3r+W+hOmXreWQiFxyXG4gICAgICAgIC8vICBpZiAodGhpcy5vcHRpb25zLnN0cm9rZVN0eWxlKSB7XHJcbiAgICAgICAgLy8gICAgdGhpcy5zdHJva2VTdHlsZSA9IHN0cm9rZVN0eWxlO1xyXG4gICAgICAgIC8vIHRoaXMubGluZVdpZHRoKHRoaXMub3B0aW9ucy53aWR0aCk7XHJcbiAgICAgICAgLy8gdGhpcy5saW5lSm9pbigncm91bmQnKTtcclxuICAgICAgICAvLyB0aGlzLnN0cm9rZSgpO1xyXG4gICAgICAgIC8vICB9XHJcbiAgICAgICAgaWYgKHRoaXMuc3Ryb2tlQ29sb3IpIHtcclxuICAgICAgICAgICAgdGhpcy5zdHJva2VTdHlsZSh0aGlzLnN0cm9rZUNvbG9yKTtcclxuICAgICAgICAgICAgdGhpcy5zdHJva2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuZmlsbENvbG9yKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsbFN0eWxlKHRoaXMuZmlsbENvbG9yKTtcclxuICAgICAgICAgICAgdGhpcy5maWxsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBQb2x5Z29uO1xyXG59KHNoYXBlXzEuZGVmYXVsdCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBQb2x5Z29uO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIHNoYXBlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vc2hhcGVcIikpO1xyXG52YXIgUmVjdCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhSZWN0LCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gUmVjdCh3aWR0aCwgaGVpZ2h0LCBvcHRpb24pIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLndpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgX3RoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgICAgIF90aGlzLm9wdGlvbiA9IG9wdGlvbiB8fCB7fTtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICBSZWN0LnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbi5maWxsU3R5bGUpIHtcclxuICAgICAgICAgICAgdGhpcy5maWxsU3R5bGUodGhpcy5vcHRpb24uZmlsbFN0eWxlKTtcclxuICAgICAgICAgICAgdGhpcy5maWxsUmVjdCgwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbi5zdHJva2VTdHlsZSkge1xyXG4gICAgICAgICAgICB0aGlzLnN0cm9rZVN0eWxlKHRoaXMub3B0aW9uLnN0cm9rZVN0eWxlKTtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbi5saW5lV2lkdGggPT09ICdudW1iZXInKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxpbmVXaWR0aCh0aGlzLm9wdGlvbi5saW5lV2lkdGgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc3Ryb2tlUmVjdCgwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBSZWN0O1xyXG59KHNoYXBlXzEuZGVmYXVsdCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBSZWN0O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIHNoYXBlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vc2hhcGVcIikpO1xyXG52YXIgUm91bmRlZFJlY3QgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoUm91bmRlZFJlY3QsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBSb3VuZGVkUmVjdCh3aWR0aCwgaGVpZ2h0LCByLCBvcHRpb24pIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLm9wdGlvbiA9IE9iamVjdC5hc3NpZ24oe1xyXG4gICAgICAgICAgICBsaW5lV2lkdGg6IDEsXHJcbiAgICAgICAgICAgIGx0OiB0cnVlLFxyXG4gICAgICAgICAgICBydDogdHJ1ZSxcclxuICAgICAgICAgICAgbGI6IHRydWUsXHJcbiAgICAgICAgICAgIHJiOiB0cnVlXHJcbiAgICAgICAgfSwgb3B0aW9uKTtcclxuICAgICAgICBfdGhpcy5yID0gciB8fCAwO1xyXG4gICAgICAgIF90aGlzLndpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgX3RoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIFJvdW5kZWRSZWN0LnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciB3aWR0aCA9IHRoaXMud2lkdGgsIGhlaWdodCA9IHRoaXMuaGVpZ2h0LCByID0gdGhpcy5yO1xyXG4gICAgICAgIHZhciBheCA9IHIsIGF5ID0gMCwgYnggPSB3aWR0aCwgYnkgPSAwLCBjeCA9IHdpZHRoLCBjeSA9IGhlaWdodCwgZHggPSAwLCBkeSA9IGhlaWdodCwgZXggPSAwLCBleSA9IDA7XHJcbiAgICAgICAgdGhpcy5iZWdpblBhdGgoKTtcclxuICAgICAgICB0aGlzLm1vdmVUbyhheCwgYXkpO1xyXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbi5ydCkge1xyXG4gICAgICAgICAgICB0aGlzLmFyY1RvKGJ4LCBieSwgY3gsIGN5LCByKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubGluZVRvKGJ4LCBieSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbi5yYikge1xyXG4gICAgICAgICAgICB0aGlzLmFyY1RvKGN4LCBjeSwgZHgsIGR5LCByKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubGluZVRvKGN4LCBjeSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbi5sYikge1xyXG4gICAgICAgICAgICB0aGlzLmFyY1RvKGR4LCBkeSwgZXgsIGV5LCByKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubGluZVRvKGR4LCBkeSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbi5sdCkge1xyXG4gICAgICAgICAgICB0aGlzLmFyY1RvKGV4LCBleSwgYXgsIGF5LCByKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubGluZVRvKGV4LCBleSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbi5maWxsU3R5bGUpIHtcclxuICAgICAgICAgICAgdGhpcy5jbG9zZVBhdGgoKTtcclxuICAgICAgICAgICAgdGhpcy5maWxsU3R5bGUodGhpcy5vcHRpb24uZmlsbFN0eWxlKTtcclxuICAgICAgICAgICAgdGhpcy5maWxsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbi5zdHJva2VTdHlsZSkge1xyXG4gICAgICAgICAgICB0aGlzLmxpbmVXaWR0aCh0aGlzLm9wdGlvbi5saW5lV2lkdGgpO1xyXG4gICAgICAgICAgICB0aGlzLnN0cm9rZVN0eWxlKHRoaXMub3B0aW9uLnN0cm9rZVN0eWxlKTtcclxuICAgICAgICAgICAgdGhpcy5zdHJva2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFJvdW5kZWRSZWN0O1xyXG59KHNoYXBlXzEuZGVmYXVsdCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBSb3VuZGVkUmVjdDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBzaGFwZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL3NoYXBlXCIpKTtcclxudmFyIFNlY3RvciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhTZWN0b3IsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBTZWN0b3IociwgZnJvbSwgdG8sIG9wdGlvbikge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMub3B0aW9uID0gb3B0aW9uIHx8IHt9O1xyXG4gICAgICAgIF90aGlzLnIgPSByO1xyXG4gICAgICAgIF90aGlzLmZyb20gPSBmcm9tO1xyXG4gICAgICAgIF90aGlzLnRvID0gdG87XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgU2VjdG9yLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuYmVnaW5QYXRoKClcclxuICAgICAgICAgICAgLm1vdmVUbygwLCAwKVxyXG4gICAgICAgICAgICAuYXJjKDAsIDAsIHRoaXMuciwgdGhpcy5mcm9tLCB0aGlzLnRvKVxyXG4gICAgICAgICAgICAuY2xvc2VQYXRoKClcclxuICAgICAgICAgICAgLmZpbGxTdHlsZSh0aGlzLm9wdGlvbi5maWxsU3R5bGUpXHJcbiAgICAgICAgICAgIC5maWxsKClcclxuICAgICAgICAgICAgLnN0cm9rZVN0eWxlKHRoaXMub3B0aW9uLnN0cm9rZVN0eWxlKVxyXG4gICAgICAgICAgICAubGluZVdpZHRoKHRoaXMub3B0aW9uLmxpbmVXaWR0aClcclxuICAgICAgICAgICAgLnN0cm9rZSgpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBTZWN0b3I7XHJcbn0oc2hhcGVfMS5kZWZhdWx0KSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IFNlY3RvcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBncmFwaGljc18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9ncmFwaGljc1wiKSk7XHJcbnZhciBTaGFwZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhTaGFwZSwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIFNoYXBlKCkge1xyXG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcclxuICAgIH1cclxuICAgIFNoYXBlLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24gKCkgeyB9O1xyXG4gICAgU2hhcGUucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIChjdHgpIHtcclxuICAgICAgICB0aGlzLmNsZWFyKCk7XHJcbiAgICAgICAgdGhpcy5kcmF3KCk7XHJcbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5yZW5kZXIuY2FsbCh0aGlzLCBjdHgpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBTaGFwZTtcclxufShncmFwaGljc18xLmRlZmF1bHQpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gU2hhcGU7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgZ3JvdXBfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9ncm91cFwiKSk7XHJcbnZhciBpbmRleF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9yZW5kZXIvaW5kZXhcIikpO1xyXG52YXIgZXZlbnRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vZXZlbnQvZXZlbnRcIikpO1xyXG52YXIgU3RhZ2UgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoU3RhZ2UsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBTdGFnZShjb250YWluZXIsIHdpZHRoLCBoZWlnaHQpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcclxuICAgICAgICBfdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgICAgIF90aGlzLmhlaWdodCA9IGhlaWdodDtcclxuICAgICAgICB2YXIgY3R4ID0gY29udGFpbmVyLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgIHZhciBkcHIgPSB3eC5nZXRTeXN0ZW1JbmZvU3luYygpLnBpeGVsUmF0aW87XHJcbiAgICAgICAgY29udGFpbmVyLndpZHRoID0gd2lkdGggKiBkcHI7XHJcbiAgICAgICAgY29udGFpbmVyLmhlaWdodCA9IGhlaWdodCAqIGRwcjtcclxuICAgICAgICBjdHguc2NhbGUoZHByLCBkcHIpO1xyXG4gICAgICAgIF90aGlzLmRwciA9IGRwcjtcclxuICAgICAgICBfdGhpcy5jdHggPSBjdHg7XHJcbiAgICAgICAgX3RoaXMucmVuZGVyID0gbmV3IGluZGV4XzEuZGVmYXVsdChjdHgsIGNvbnRhaW5lci53aWR0aCwgY29udGFpbmVyLmhlaWdodCk7XHJcbiAgICAgICAgX3RoaXMuaGl0Q3R4ID0gbnVsbDtcclxuICAgICAgICBfdGhpcy53aWxsRHJhZ09iamVjdCA9IG51bGw7XHJcbiAgICAgICAgX3RoaXMuX292ZXJPYmplY3QgPSBudWxsO1xyXG4gICAgICAgIF90aGlzLl9fX2luc3RhbmNlb2YgPSAnU3RhZ2UnO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIFN0YWdlLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXIudXBkYXRlKHRoaXMpO1xyXG4gICAgfTtcclxuICAgIFN0YWdlLnByb3RvdHlwZS5zZXRIaXRDYW52YXMgPSBmdW5jdGlvbiAoaGl0Q2FudmFzKSB7XHJcbiAgICAgICAgdmFyIGhpdEN0eCA9IGhpdENhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgIGhpdENhbnZhcy53aWR0aCA9IHRoaXMud2lkdGg7XHJcbiAgICAgICAgaGl0Q2FudmFzLmhlaWdodCA9IHRoaXMuaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuaGl0Q3R4ID0gaGl0Q3R4O1xyXG4gICAgfTtcclxuICAgIFN0YWdlLnByb3RvdHlwZS5nZXRUZXh0V2lkdGggPSBmdW5jdGlvbiAodGV4dCwgZm9udCkge1xyXG4gICAgICAgIHRoaXMuY3R4LmZvbnQgPSBmb250O1xyXG4gICAgICAgIHJldHVybiB0aGlzLmN0eC5tZWFzdXJlVGV4dCh0ZXh0KS53aWR0aDtcclxuICAgIH07XHJcbiAgICBTdGFnZS5wcm90b3R5cGUubG9hZEltYWdlID0gZnVuY3Rpb24gKHVybCkge1xyXG4gICAgICAgIHZhciBjYW52YXMgPSB0aGlzLmNvbnRhaW5lcjtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICAgICB2YXIgaW1hZ2UgPSBjYW52YXMuY3JlYXRlSW1hZ2UoKTtcclxuICAgICAgICAgICAgaW1hZ2Uuc3JjID0gdXJsO1xyXG4gICAgICAgICAgICBpbWFnZS5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKGltYWdlKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgaW1hZ2Uub25lcnJvciA9IGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBTdGFnZS5wcm90b3R5cGUudG91Y2hTdGFydEhhbmRsZXIgPSBmdW5jdGlvbiAoZXZ0KSB7XHJcbiAgICAgICAgdmFyIHAxID0gZXZ0LmNoYW5nZWRUb3VjaGVzWzBdO1xyXG4gICAgICAgIGV2dC5zdGFnZVggPSBNYXRoLnJvdW5kKHAxLnggKiB0aGlzLnNjYWxlWCk7XHJcbiAgICAgICAgZXZ0LnN0YWdlWSA9IE1hdGgucm91bmQocDEueSAqIHRoaXMuc2NhbGVZKTtcclxuICAgICAgICB2YXIgb2JqID0gdGhpcy5nZXRPYmplY3RVbmRlclBvaW50KGV2dCk7XHJcbiAgICAgICAgdGhpcy53aWxsRHJhZ09iamVjdCA9IG9iajtcclxuICAgICAgICB0aGlzLl9tb3VzZURvd25YID0gZXZ0LnN0YWdlWDtcclxuICAgICAgICB0aGlzLl9tb3VzZURvd25ZID0gZXZ0LnN0YWdlWTtcclxuICAgICAgICB0aGlzLnByZVN0YWdlWCA9IGV2dC5zdGFnZVg7XHJcbiAgICAgICAgdGhpcy5wcmVTdGFnZVkgPSBldnQuc3RhZ2VZO1xyXG4gICAgICAgIHRoaXMuX19kaXNwYXRjaEV2ZW50KG9iaiwgZXZ0KTtcclxuICAgIH07XHJcbiAgICBTdGFnZS5wcm90b3R5cGUudG91Y2hNb3ZlSGFuZGxlciA9IGZ1bmN0aW9uIChldnQpIHtcclxuICAgICAgICB2YXIgcDEgPSBldnQuY2hhbmdlZFRvdWNoZXNbMF07XHJcbiAgICAgICAgZXZ0LnN0YWdlWCA9IE1hdGgucm91bmQocDEueCAqIHRoaXMuc2NhbGVYKTtcclxuICAgICAgICBldnQuc3RhZ2VZID0gTWF0aC5yb3VuZChwMS55ICogdGhpcy5zY2FsZVkpO1xyXG4gICAgICAgIHZhciBvYmogPSB0aGlzLmdldE9iamVjdFVuZGVyUG9pbnQoZXZ0KTtcclxuICAgICAgICB2YXIgbW9ja0V2dCA9IG5ldyBldmVudF8xLmRlZmF1bHQoKTtcclxuICAgICAgICBtb2NrRXZ0LnN0YWdlWCA9IGV2dC5zdGFnZVg7XHJcbiAgICAgICAgbW9ja0V2dC5zdGFnZVkgPSBldnQuc3RhZ2VZO1xyXG4gICAgICAgIG1vY2tFdnQub3JpZ2luYWxFdmVudCA9IGV2dDtcclxuICAgICAgICBpZiAodGhpcy53aWxsRHJhZ09iamVjdCAmJiBldnQuY2hhbmdlZFRvdWNoZXMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgIG1vY2tFdnQudHlwZSA9ICdkcmFnJztcclxuICAgICAgICAgICAgbW9ja0V2dC5keCA9IG1vY2tFdnQuc3RhZ2VYIC0gdGhpcy5wcmVTdGFnZVg7XHJcbiAgICAgICAgICAgIG1vY2tFdnQuZHkgPSBtb2NrRXZ0LnN0YWdlWSAtIHRoaXMucHJlU3RhZ2VZO1xyXG4gICAgICAgICAgICB0aGlzLnByZVN0YWdlWCA9IG1vY2tFdnQuc3RhZ2VYO1xyXG4gICAgICAgICAgICB0aGlzLnByZVN0YWdlWSA9IG1vY2tFdnQuc3RhZ2VZO1xyXG4gICAgICAgICAgICB0aGlzLndpbGxEcmFnT2JqZWN0LmRpc3BhdGNoRXZlbnQobW9ja0V2dCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChvYmopIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX292ZXJPYmplY3QgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX292ZXJPYmplY3QgPSBvYmo7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAob2JqLmlkICE9PSB0aGlzLl9vdmVyT2JqZWN0LmlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fb3Zlck9iamVjdCA9IG9iajtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX19kaXNwYXRjaEV2ZW50KG9iaiwgZXZ0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLl9vdmVyT2JqZWN0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX292ZXJPYmplY3QgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBTdGFnZS5wcm90b3R5cGUudG91Y2hFbmRIYW5kbGVyID0gZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgICAgIHZhciBwMSA9IGV2dC5jaGFuZ2VkVG91Y2hlc1swXTtcclxuICAgICAgICBldnQuc3RhZ2VYID0gTWF0aC5yb3VuZChwMS54ICogdGhpcy5zY2FsZVgpO1xyXG4gICAgICAgIGV2dC5zdGFnZVkgPSBNYXRoLnJvdW5kKHAxLnkgKiB0aGlzLnNjYWxlWSk7XHJcbiAgICAgICAgdmFyIG9iaiA9IHRoaXMuZ2V0T2JqZWN0VW5kZXJQb2ludChldnQpO1xyXG4gICAgICAgIHRoaXMuX21vdXNlVXBYID0gZXZ0LnN0YWdlWDtcclxuICAgICAgICB0aGlzLl9tb3VzZVVwWSA9IGV2dC5zdGFnZVk7XHJcbiAgICAgICAgdGhpcy53aWxsRHJhZ09iamVjdCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5wcmVTdGFnZVggPSBudWxsO1xyXG4gICAgICAgIHRoaXMucHJlU3RhZ2VZID0gbnVsbDtcclxuICAgICAgICB0aGlzLl9fZGlzcGF0Y2hFdmVudChvYmosIGV2dCk7XHJcbiAgICAgICAgaWYgKG9iaiAmJlxyXG4gICAgICAgICAgICBNYXRoLmFicyh0aGlzLl9tb3VzZURvd25YIC0gdGhpcy5fbW91c2VVcFgpIDwgMzAgJiZcclxuICAgICAgICAgICAgTWF0aC5hYnModGhpcy5fbW91c2VEb3duWSAtIHRoaXMuX21vdXNlVXBZKSA8IDMwKSB7XHJcbiAgICAgICAgICAgIHZhciBtb2NrRXZ0ID0gbmV3IGV2ZW50XzEuZGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBtb2NrRXZ0LnN0YWdlWCA9IGV2dC5zdGFnZVg7XHJcbiAgICAgICAgICAgIG1vY2tFdnQuc3RhZ2VZID0gZXZ0LnN0YWdlWTtcclxuICAgICAgICAgICAgbW9ja0V2dC5vcmlnaW5hbEV2ZW50ID0gZXZ0O1xyXG4gICAgICAgICAgICBtb2NrRXZ0LnR5cGUgPSAndGFwJztcclxuICAgICAgICAgICAgb2JqLmRpc3BhdGNoRXZlbnQobW9ja0V2dCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFN0YWdlLnByb3RvdHlwZS5nZXRPYmplY3RVbmRlclBvaW50ID0gZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgICAgIHZhciB4ID0gZXZ0LnN0YWdlWDtcclxuICAgICAgICB2YXIgeSA9IGV2dC5zdGFnZVk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE9iamVjdHNVbmRlclBvaW50KHgsIHksIHRoaXMuaGl0Q3R4KSB8fCB0aGlzO1xyXG4gICAgfTtcclxuICAgIFN0YWdlLnByb3RvdHlwZS5fX2Rpc3BhdGNoRXZlbnQgPSBmdW5jdGlvbiAob2JqLCBldnQpIHtcclxuICAgICAgICBpZiAoIW9iailcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIHZhciBtb2NrRXZ0ID0gbmV3IGV2ZW50XzEuZGVmYXVsdCgpO1xyXG4gICAgICAgIG1vY2tFdnQuc3RhZ2VYID0gZXZ0LnN0YWdlWDtcclxuICAgICAgICBtb2NrRXZ0LnN0YWdlWSA9IGV2dC5zdGFnZVk7XHJcbiAgICAgICAgbW9ja0V2dC5vcmlnaW5hbEV2ZW50ID0gZXZ0O1xyXG4gICAgICAgIG1vY2tFdnQudHlwZSA9IGV2dC50eXBlO1xyXG4gICAgICAgIG9iai5kaXNwYXRjaEV2ZW50KG1vY2tFdnQpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBTdGFnZTtcclxufShncm91cF8xLmRlZmF1bHQpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gU3RhZ2U7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgbm9kZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL25vZGVcIikpO1xyXG52YXIgVGV4dCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhUZXh0LCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gVGV4dCh0ZXh0LCBvcHRpb24pIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLnRleHQgPSB0ZXh0O1xyXG4gICAgICAgIG9wdGlvbiA9IG9wdGlvbiB8fCB7fTtcclxuICAgICAgICBfdGhpcy5mb250ID0gb3B0aW9uLmZvbnQgfHwgJzEwcHggc2Fucy1zZXJpZic7XHJcbiAgICAgICAgX3RoaXMuY29sb3IgPSBvcHRpb24uY29sb3IgfHwgJ2JsYWNrJztcclxuICAgICAgICBfdGhpcy50ZXh0QWxpZ24gPSBvcHRpb24udGV4dEFsaWduIHx8ICdsZWZ0JztcclxuICAgICAgICBfdGhpcy5iYXNlbGluZSA9IG9wdGlvbi5iYXNlbGluZSB8fCAndG9wJztcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICBUZXh0LnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoY3R4KSB7XHJcbiAgICAgICAgY3R4LmZvbnQgPSB0aGlzLmZvbnQ7XHJcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XHJcbiAgICAgICAgY3R4LnRleHRBbGlnbiA9IHRoaXMudGV4dEFsaWduO1xyXG4gICAgICAgIGN0eC50ZXh0QmFzZWxpbmUgPSB0aGlzLmJhc2VsaW5lO1xyXG4gICAgICAgIGN0eC5maWxsVGV4dCh0aGlzLnRleHQsIDAsIDApO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBUZXh0O1xyXG59KG5vZGVfMS5kZWZhdWx0KSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IFRleHQ7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBncm91cF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9ub2RlL2dyb3VwXCIpKTtcclxudmFyIFJlbmRlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFJlbmRlcihjdHgsIHdpZHRoLCBoZWlnaHQpIHtcclxuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcclxuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICB9XHJcbiAgICBSZW5kZXIucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIChzdGFnZSkge1xyXG4gICAgICAgIHRoaXMuY2xlYXIodGhpcy5jdHgsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuICAgICAgICB0aGlzLnJlbmRlcih0aGlzLmN0eCwgc3RhZ2UpO1xyXG4gICAgfTtcclxuICAgIFJlbmRlci5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoY3R4LCB3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcclxuICAgIH07XHJcbiAgICBSZW5kZXIucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIChjdHgsIG8pIHtcclxuICAgICAgICB2YXIgbXR4ID0gby5fcHJvcHMubWF0cml4O1xyXG4gICAgICAgIG8uZ2V0TWF0cml4KG10eCk7XHJcbiAgICAgICAgaWYgKG8uY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgdmFyIGxpc3QgPSBvLmNoaWxkcmVuLnNsaWNlKDApO1xyXG4gICAgICAgICAgICB2YXIgbCA9IGxpc3QubGVuZ3RoO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGw7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGNoaWxkID0gbGlzdFtpXTtcclxuICAgICAgICAgICAgICAgIGlmICghY2hpbGQuaXNWaXNpYmxlKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGN0eC5zYXZlKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW5kZXIoY3R4LCBjaGlsZCwgbXR4KTtcclxuICAgICAgICAgICAgICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcihjdHgsIG8sIG10eCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFJlbmRlci5wcm90b3R5cGUuX3JlbmRlciA9IGZ1bmN0aW9uIChjdHgsIG8sIG10eCkge1xyXG4gICAgICAgIHZhciBtYXNrID0gby5tYXNrO1xyXG4gICAgICAgIGlmIChtdHgpIHtcclxuICAgICAgICAgICAgY3R4LnRyYW5zZm9ybShtdHguYSwgbXR4LmIsIG10eC5jLCBtdHguZCwgbXR4LnR4LCBtdHgudHkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBtdHggPSBvLl9wcm9wcy5tYXRyaXg7XHJcbiAgICAgICAgaWYgKG1hc2spIHtcclxuICAgICAgICAgICAgbWFzay5nZXRNYXRyaXgobXR4KTtcclxuICAgICAgICAgICAgY3R4LnRyYW5zZm9ybShtdHguYSwgbXR4LmIsIG10eC5jLCBtdHguZCwgbXR4LnR4LCBtdHgudHkpO1xyXG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgICAgIG1hc2sucmVuZGVyKGN0eCk7XHJcbiAgICAgICAgICAgIGN0eC5jbGlwKCk7XHJcbiAgICAgICAgICAgIG10eC5pbnZlcnQoKTtcclxuICAgICAgICAgICAgY3R4LnRyYW5zZm9ybShtdHguYSwgbXR4LmIsIG10eC5jLCBtdHguZCwgbXR4LnR4LCBtdHgudHkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBvLmdldE1hdHJpeChtdHgpO1xyXG4gICAgICAgIGN0eC50cmFuc2Zvcm0obXR4LmEsIG10eC5iLCBtdHguYywgbXR4LmQsIG10eC50eCwgbXR4LnR5KTtcclxuICAgICAgICB2YXIgcHJvcHMgPSBvLmdldENvbmNhdGVuYXRlZERpc3BsYXlQcm9wcyhvLl9wcm9wcyk7XHJcbiAgICAgICAgbXR4ID0gcHJvcHMubWF0cml4O1xyXG4gICAgICAgIGN0eC5nbG9iYWxBbHBoYSAqPSBvLl9wcm9wcy5hbHBoYTtcclxuICAgICAgICBpZiAoby5jb21wb3NpdGVPcGVyYXRpb24pIHtcclxuICAgICAgICAgICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9IG8uY29tcG9zaXRlT3BlcmF0aW9uO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoby5zaGFkb3cpIHtcclxuICAgICAgICAgICAgdGhpcy5fYXBwbHlTaGFkb3coY3R4LCBvLnNoYWRvdyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChvIGluc3RhbmNlb2YgZ3JvdXBfMS5kZWZhdWx0KSB7XHJcbiAgICAgICAgICAgIHZhciBsaXN0ID0gby5jaGlsZHJlbi5zbGljZSgwKTtcclxuICAgICAgICAgICAgdmFyIGwgPSBsaXN0Lmxlbmd0aDtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGN0eC5zYXZlKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW5kZXIoY3R4LCBsaXN0W2ldKTtcclxuICAgICAgICAgICAgICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIG8ucmVuZGVyKGN0eCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFJlbmRlci5wcm90b3R5cGUuX2FwcGx5U2hhZG93ID0gZnVuY3Rpb24gKGN0eCwgc2hhZG93KSB7XHJcbiAgICAgICAgc2hhZG93ID0gc2hhZG93O1xyXG4gICAgICAgIGN0eC5zaGFkb3dDb2xvciA9IHNoYWRvdy5jb2xvcjtcclxuICAgICAgICBjdHguc2hhZG93T2Zmc2V0WCA9IHNoYWRvdy5vZmZzZXRYO1xyXG4gICAgICAgIGN0eC5zaGFkb3dPZmZzZXRZID0gc2hhZG93Lm9mZnNldFk7XHJcbiAgICAgICAgY3R4LnNoYWRvd0JsdXIgPSBzaGFkb3cuYmx1cjtcclxuICAgIH07XHJcbiAgICByZXR1cm4gUmVuZGVyO1xyXG59KCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBSZW5kZXI7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBVSUQgPSB7XHJcbiAgICBfbmV4dElEOiAwLFxyXG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIFVJRC5fbmV4dElEKys7XHJcbiAgICB9XHJcbn07XHJcbmV4cG9ydHMuZGVmYXVsdCA9IFVJRDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5sb2FkSW1hZ2UgPSB2b2lkIDA7XHJcbmZ1bmN0aW9uIGxvYWRJbWFnZSh1cmwsIGNhbnZhcykge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICB2YXIgaW1hZ2UgPSBjYW52YXMuY3JlYXRlSW1hZ2UoKTtcclxuICAgICAgICBpbWFnZS5zcmMgPSB1cmw7XHJcbiAgICAgICAgaW1hZ2Uub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXNvbHZlKGltYWdlKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGltYWdlLm9uZXJyb3IgPSBmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuICAgICAgICB9O1xyXG4gICAgfSk7XHJcbn1cclxuZXhwb3J0cy5sb2FkSW1hZ2UgPSBsb2FkSW1hZ2U7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=