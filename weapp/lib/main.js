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
        if (!child)
            return;
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
                    var mtxClone = mtx.clone();
                    child.setBounds(hitBox[0], hitBox[1], hitBox[2], hitBox[3]);
                    var bounds = child._getBounds(mtxClone, true);
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
        this.hitBox = null;
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
        _this.touchObject = null;
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
        var p1 = evt.touches[0];
        evt.stageX = Math.round(p1.x);
        evt.stageY = Math.round(p1.y);
        var obj = this.getObjectUnderPoint(evt);
        this.touchObject = obj;
        this._mouseDownX = evt.stageX;
        this._mouseDownY = evt.stageY;
        this.preStageX = evt.stageX;
        this.preStageY = evt.stageY;
        this.__dispatchEvent(obj, evt);
    };
    Stage.prototype.touchMoveHandler = function (evt) {
        var p1 = evt.touches[0];
        var touchesLength = evt.touches.length;
        evt.stageX = Math.round(p1.x);
        evt.stageY = Math.round(p1.y);
        var mockEvt = new event_1.default();
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
    };
    Stage.prototype.touchEndHandler = function (evt) {
        var p1 = evt.changedTouches[0];
        evt.stageX = Math.round(p1.x);
        evt.stageY = Math.round(p1.y);
        var obj = this.getObjectUnderPoint(evt);
        this._mouseUpX = evt.stageX;
        this._mouseUpY = evt.stageY;
        this.__dispatchEvent(this.touchObject, evt);
        this.touchObject = null;
        this.preStageX = null;
        this.preStageY = null;
        if (obj &&
            Math.abs(this._mouseDownX - this._mouseUpX) < 10 &&
            Math.abs(this._mouseDownY - this._mouseUpY) < 10) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9taW5pUHJvZ3JhbVJDL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9taW5pUHJvZ3JhbVJDL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL21pbmlQcm9ncmFtUkMvLi9zcmMvZXZlbnQvZXZlbnQudHMiLCJ3ZWJwYWNrOi8vbWluaVByb2dyYW1SQy8uL3NyYy9nZW9tL2Rpc3BsYXlQcm9wcy50cyIsIndlYnBhY2s6Ly9taW5pUHJvZ3JhbVJDLy4vc3JjL2dlb20vbWF0cml4MmQuanMiLCJ3ZWJwYWNrOi8vbWluaVByb2dyYW1SQy8uL3NyYy9nZW9tL3JlY3RhbmdsZS50cyIsIndlYnBhY2s6Ly9taW5pUHJvZ3JhbVJDLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL21pbmlQcm9ncmFtUkMvLi9zcmMvbm9kZS9iaXRtYXAudHMiLCJ3ZWJwYWNrOi8vbWluaVByb2dyYW1SQy8uL3NyYy9ub2RlL2dyYXBoaWNzLnRzIiwid2VicGFjazovL21pbmlQcm9ncmFtUkMvLi9zcmMvbm9kZS9ncm91cC50cyIsIndlYnBhY2s6Ly9taW5pUHJvZ3JhbVJDLy4vc3JjL25vZGUvbm9kZS50cyIsIndlYnBhY2s6Ly9taW5pUHJvZ3JhbVJDLy4vc3JjL25vZGUvc2hhcGUvYXJyb3ctcGF0aC50cyIsIndlYnBhY2s6Ly9taW5pUHJvZ3JhbVJDLy4vc3JjL25vZGUvc2hhcGUvY2lyY2xlLnRzIiwid2VicGFjazovL21pbmlQcm9ncmFtUkMvLi9zcmMvbm9kZS9zaGFwZS9lbGxpcHNlLnRzIiwid2VicGFjazovL21pbmlQcm9ncmFtUkMvLi9zcmMvbm9kZS9zaGFwZS9lcXVpbGF0ZXJhbC1wb2x5Z29uLnRzIiwid2VicGFjazovL21pbmlQcm9ncmFtUkMvLi9zcmMvbm9kZS9zaGFwZS9wb2x5Z29uLnRzIiwid2VicGFjazovL21pbmlQcm9ncmFtUkMvLi9zcmMvbm9kZS9zaGFwZS9yZWN0LnRzIiwid2VicGFjazovL21pbmlQcm9ncmFtUkMvLi9zcmMvbm9kZS9zaGFwZS9yb3VuZGVkLXJlY3QudHMiLCJ3ZWJwYWNrOi8vbWluaVByb2dyYW1SQy8uL3NyYy9ub2RlL3NoYXBlL3NlY3Rvci50cyIsIndlYnBhY2s6Ly9taW5pUHJvZ3JhbVJDLy4vc3JjL25vZGUvc2hhcGUvc2hhcGUudHMiLCJ3ZWJwYWNrOi8vbWluaVByb2dyYW1SQy8uL3NyYy9ub2RlL3N0YWdlLnRzIiwid2VicGFjazovL21pbmlQcm9ncmFtUkMvLi9zcmMvbm9kZS90ZXh0LnRzIiwid2VicGFjazovL21pbmlQcm9ncmFtUkMvLi9zcmMvcmVuZGVyL2luZGV4LnRzIiwid2VicGFjazovL21pbmlQcm9ncmFtUkMvLi9zcmMvdXRpbHMvdWlkLnRzIiwid2VicGFjazovL21pbmlQcm9ncmFtUkMvLi9zcmMvdXRpbHMvdXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztR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QUF3Qix1QkFBdUI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsdUJBQXVCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHVCQUF1QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix1QkFBdUI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsdUJBQXVCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHVCQUF1QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix1QkFBdUI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsdUJBQXVCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHVCQUF1QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix1QkFBdUI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsdUJBQXVCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHVCQUF1QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix1QkFBdUI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsdUJBQXVCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHVCQUF1QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix1QkFBdUI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsdUJBQXVCO0FBQy9DO0FB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QUFDNUM7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCw4QkFBOEIsbUJBQU8sQ0FBQywwQ0FBZTtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixPQUFPO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixPQUFPO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUN2RmE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ1JhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIm1pbmlQcm9ncmFtUkNcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wibWluaVByb2dyYW1SQ1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJtaW5pUHJvZ3JhbVJDXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgX3R5cGUgPSBTeW1ib2woJ3R5cGUnKTtcclxudmFyIF9idWJibGVzID0gU3ltYm9sKCdidWJibGVzJyk7XHJcbnZhciBfb3JpZ2luYWxFdmVudCA9IFN5bWJvbCgnX29yaWdpbmFsRXZlbnQnKTtcclxudmFyIEV2ZW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gRXZlbnQoKSB7XHJcbiAgICAgICAgdGhpc1tfdHlwZV0gPSAnJztcclxuICAgICAgICB0aGlzW19vcmlnaW5hbEV2ZW50XSA9IG51bGw7XHJcbiAgICAgICAgdGhpc1tfYnViYmxlc10gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuY2FuY2VsQnViYmxlID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBFdmVudC5wcm90b3R5cGUuc3RvcFByb3BhZ2F0aW9uID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuY2FuY2VsQnViYmxlID0gdHJ1ZTtcclxuICAgIH07XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRXZlbnQucHJvdG90eXBlLCBcInR5cGVcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpc1tfdHlwZV07XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzW190eXBlXSA9IHZhbHVlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShFdmVudC5wcm90b3R5cGUsIFwib3JpZ2luYWxFdmVudFwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzW19vcmlnaW5hbEV2ZW50XTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXNbX29yaWdpbmFsRXZlbnRdID0gdmFsdWU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEV2ZW50LnByb3RvdHlwZSwgXCJidWJibGVzXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXNbX2J1YmJsZXNdO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpc1tfYnViYmxlc10gPSB2YWx1ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gRXZlbnQ7XHJcbn0oKSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IEV2ZW50O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgbWF0cml4MmRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9tYXRyaXgyZFwiKSk7XHJcbnZhciBEaXNwbGF5UHJvcHMgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBEaXNwbGF5UHJvcHModmlzaWJsZSwgYWxwaGEsIHNoYWRvdywgY29tcG9zaXRlT3BlcmF0aW9uLCBtYXRyaXgpIHtcclxuICAgICAgICB0aGlzLnNldFZhbHVlKHZpc2libGUsIGFscGhhLCBzaGFkb3csIGNvbXBvc2l0ZU9wZXJhdGlvbiwgbWF0cml4KTtcclxuICAgIH1cclxuICAgIERpc3BsYXlQcm9wcy5wcm90b3R5cGUuc2V0VmFsdWUgPSBmdW5jdGlvbiAodmlzaWJsZSwgYWxwaGEsIHNoYWRvdywgY29tcG9zaXRlT3BlcmF0aW9uLCBtYXRyaXgpIHtcclxuICAgICAgICB0aGlzLnZpc2libGUgPSB2aXNpYmxlID09IG51bGwgPyB0cnVlIDogISF2aXNpYmxlO1xyXG4gICAgICAgIHRoaXMuYWxwaGEgPSBhbHBoYSA9PSBudWxsID8gMSA6IGFscGhhO1xyXG4gICAgICAgIHRoaXMuc2hhZG93ID0gc2hhZG93IHx8IG51bGw7XHJcbiAgICAgICAgdGhpcy5jb21wb3NpdGVPcGVyYXRpb24gPSBjb21wb3NpdGVPcGVyYXRpb24gfHwgbnVsbDtcclxuICAgICAgICB0aGlzLm1hdHJpeCA9IG1hdHJpeCB8fCAodGhpcy5tYXRyaXggJiYgdGhpcy5tYXRyaXguaWRlbnRpdHkoKSkgfHwgbmV3IG1hdHJpeDJkXzEuZGVmYXVsdCgpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIERpc3BsYXlQcm9wcy5wcm90b3R5cGUuYXBwZW5kID0gZnVuY3Rpb24gKHZpc2libGUsIGFscGhhLCBzaGFkb3csIGNvbXBvc2l0ZU9wZXJhdGlvbiwgbWF0cml4KSB7XHJcbiAgICAgICAgdGhpcy5hbHBoYSAqPSBhbHBoYTtcclxuICAgICAgICB0aGlzLnNoYWRvdyA9IHNoYWRvdyB8fCB0aGlzLnNoYWRvdztcclxuICAgICAgICB0aGlzLmNvbXBvc2l0ZU9wZXJhdGlvbiA9IGNvbXBvc2l0ZU9wZXJhdGlvbiB8fCB0aGlzLmNvbXBvc2l0ZU9wZXJhdGlvbjtcclxuICAgICAgICB0aGlzLnZpc2libGUgPSB0aGlzLnZpc2libGUgJiYgdmlzaWJsZTtcclxuICAgICAgICBtYXRyaXggJiYgdGhpcy5tYXRyaXguYXBwZW5kTWF0cml4KG1hdHJpeCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgRGlzcGxheVByb3BzLnByb3RvdHlwZS5wcmVwZW5kID0gZnVuY3Rpb24gKHZpc2libGUsIGFscGhhLCBzaGFkb3csIGNvbXBvc2l0ZU9wZXJhdGlvbiwgbWF0cml4KSB7XHJcbiAgICAgICAgdGhpcy5hbHBoYSAqPSBhbHBoYTtcclxuICAgICAgICB0aGlzLnNoYWRvdyA9IHRoaXMuc2hhZG93IHx8IHNoYWRvdztcclxuICAgICAgICB0aGlzLmNvbXBvc2l0ZU9wZXJhdGlvbiA9IHRoaXMuY29tcG9zaXRlT3BlcmF0aW9uIHx8IGNvbXBvc2l0ZU9wZXJhdGlvbjtcclxuICAgICAgICB0aGlzLnZpc2libGUgPSB0aGlzLnZpc2libGUgJiYgdmlzaWJsZTtcclxuICAgICAgICBtYXRyaXggJiYgdGhpcy5tYXRyaXgucHJlcGVuZE1hdHJpeChtYXRyaXgpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIERpc3BsYXlQcm9wcy5wcm90b3R5cGUuaWRlbnRpdHkgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmFscGhhID0gMTtcclxuICAgICAgICB0aGlzLnNoYWRvdyA9IHRoaXMuY29tcG9zaXRlT3BlcmF0aW9uID0gbnVsbDtcclxuICAgICAgICB0aGlzLm1hdHJpeC5pZGVudGl0eSgpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBEaXNwbGF5UHJvcHM7XHJcbn0oKSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IERpc3BsYXlQcm9wcztcclxuIiwiLypcclxuICogTWF0cml4MkRcclxuICogVmlzaXQgaHR0cDovL2NyZWF0ZWpzLmNvbS8gZm9yIGRvY3VtZW50YXRpb24sIHVwZGF0ZXMgYW5kIGV4YW1wbGVzLlxyXG4gKlxyXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTAgZ3NraW5uZXIuY29tLCBpbmMuXHJcbiAqXHJcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uXHJcbiAqIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uXHJcbiAqIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dFxyXG4gKiByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSxcclxuICogY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcclxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlXHJcbiAqIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nXHJcbiAqIGNvbmRpdGlvbnM6XHJcbiAqXHJcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlXHJcbiAqIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG4gKlxyXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELFxyXG4gKiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVNcclxuICogT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkRcclxuICogTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFRcclxuICogSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksXHJcbiAqIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lOR1xyXG4gKiBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SXHJcbiAqIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cclxuICovXHJcblxyXG4vLyBjb25zdHJ1Y3RvcjpcclxuLyoqXHJcbiAqIFJlcHJlc2VudHMgYW4gYWZmaW5lIHRyYW5zZm9ybWF0aW9uIG1hdHJpeCwgYW5kIHByb3ZpZGVzIHRvb2xzIGZvciBjb25zdHJ1Y3RpbmcgYW5kIGNvbmNhdGVuYXRpbmcgbWF0cmljZXMuXHJcbiAqXHJcbiAqIFRoaXMgbWF0cml4IGNhbiBiZSB2aXN1YWxpemVkIGFzOlxyXG4gKlxyXG4gKiBcdFsgYSAgYyAgdHhcclxuICogXHQgIGIgIGQgIHR5XHJcbiAqIFx0ICAwICAwICAxICBdXHJcbiAqXHJcbiAqIE5vdGUgdGhlIGxvY2F0aW9ucyBvZiBiIGFuZCBjLlxyXG4gKlxyXG4gKiBAY2xhc3MgTWF0cml4MkRcclxuICogQHBhcmFtIHtOdW1iZXJ9IFthPTFdIFNwZWNpZmllcyB0aGUgYSBwcm9wZXJ0eSBmb3IgdGhlIG5ldyBtYXRyaXguXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBbYj0wXSBTcGVjaWZpZXMgdGhlIGIgcHJvcGVydHkgZm9yIHRoZSBuZXcgbWF0cml4LlxyXG4gKiBAcGFyYW0ge051bWJlcn0gW2M9MF0gU3BlY2lmaWVzIHRoZSBjIHByb3BlcnR5IGZvciB0aGUgbmV3IG1hdHJpeC5cclxuICogQHBhcmFtIHtOdW1iZXJ9IFtkPTFdIFNwZWNpZmllcyB0aGUgZCBwcm9wZXJ0eSBmb3IgdGhlIG5ldyBtYXRyaXguXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBbdHg9MF0gU3BlY2lmaWVzIHRoZSB0eCBwcm9wZXJ0eSBmb3IgdGhlIG5ldyBtYXRyaXguXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBbdHk9MF0gU3BlY2lmaWVzIHRoZSB0eSBwcm9wZXJ0eSBmb3IgdGhlIG5ldyBtYXRyaXguXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKiovXHJcbmZ1bmN0aW9uIE1hdHJpeDJEKGEsIGIsIGMsIGQsIHR4LCB0eSkge1xyXG4gIHRoaXMuc2V0VmFsdWVzKGEsIGIsIGMsIGQsIHR4LCB0eSk7XHJcblxyXG4gIC8vIHB1YmxpYyBwcm9wZXJ0aWVzOlxyXG4gIC8vIGFzc2lnbmVkIGluIHRoZSBzZXRWYWx1ZXMgbWV0aG9kLlxyXG4gIC8qKlxyXG4gICAqIFBvc2l0aW9uICgwLCAwKSBpbiBhIDN4MyBhZmZpbmUgdHJhbnNmb3JtYXRpb24gbWF0cml4LlxyXG4gICAqIEBwcm9wZXJ0eSBhXHJcbiAgICogQHR5cGUgTnVtYmVyXHJcbiAgICoqL1xyXG5cclxuICAvKipcclxuICAgKiBQb3NpdGlvbiAoMCwgMSkgaW4gYSAzeDMgYWZmaW5lIHRyYW5zZm9ybWF0aW9uIG1hdHJpeC5cclxuICAgKiBAcHJvcGVydHkgYlxyXG4gICAqIEB0eXBlIE51bWJlclxyXG4gICAqKi9cclxuXHJcbiAgLyoqXHJcbiAgICogUG9zaXRpb24gKDEsIDApIGluIGEgM3gzIGFmZmluZSB0cmFuc2Zvcm1hdGlvbiBtYXRyaXguXHJcbiAgICogQHByb3BlcnR5IGNcclxuICAgKiBAdHlwZSBOdW1iZXJcclxuICAgKiovXHJcblxyXG4gIC8qKlxyXG4gICAqIFBvc2l0aW9uICgxLCAxKSBpbiBhIDN4MyBhZmZpbmUgdHJhbnNmb3JtYXRpb24gbWF0cml4LlxyXG4gICAqIEBwcm9wZXJ0eSBkXHJcbiAgICogQHR5cGUgTnVtYmVyXHJcbiAgICoqL1xyXG5cclxuICAvKipcclxuICAgKiBQb3NpdGlvbiAoMiwgMCkgaW4gYSAzeDMgYWZmaW5lIHRyYW5zZm9ybWF0aW9uIG1hdHJpeC5cclxuICAgKiBAcHJvcGVydHkgdHhcclxuICAgKiBAdHlwZSBOdW1iZXJcclxuICAgKiovXHJcblxyXG4gIC8qKlxyXG4gICAqIFBvc2l0aW9uICgyLCAxKSBpbiBhIDN4MyBhZmZpbmUgdHJhbnNmb3JtYXRpb24gbWF0cml4LlxyXG4gICAqIEBwcm9wZXJ0eSB0eVxyXG4gICAqIEB0eXBlIE51bWJlclxyXG4gICAqKi9cclxufVxyXG52YXIgcCA9IE1hdHJpeDJELnByb3RvdHlwZTtcclxuXHJcbi8vIGNvbnN0YW50czpcclxuLyoqXHJcbiAqIE11bHRpcGxpZXIgZm9yIGNvbnZlcnRpbmcgZGVncmVlcyB0byByYWRpYW5zLiBVc2VkIGludGVybmFsbHkgYnkgTWF0cml4MkQuXHJcbiAqIEBwcm9wZXJ0eSBERUdfVE9fUkFEXHJcbiAqIEBzdGF0aWNcclxuICogQGZpbmFsXHJcbiAqIEB0eXBlIE51bWJlclxyXG4gKiBAcmVhZG9ubHlcclxuICoqL1xyXG5NYXRyaXgyRC5ERUdfVE9fUkFEID0gTWF0aC5QSSAvIDE4MDtcclxuXHJcbi8vIHN0YXRpYyBwdWJsaWMgcHJvcGVydGllczpcclxuLyoqXHJcbiAqIEFuIGlkZW50aXR5IG1hdHJpeCwgcmVwcmVzZW50aW5nIGEgbnVsbCB0cmFuc2Zvcm1hdGlvbi5cclxuICogQHByb3BlcnR5IGlkZW50aXR5XHJcbiAqIEBzdGF0aWNcclxuICogQHR5cGUgTWF0cml4MkRcclxuICogQHJlYWRvbmx5XHJcbiAqKi9cclxuTWF0cml4MkQuaWRlbnRpdHkgPSBudWxsOyAvLyBzZXQgYXQgYm90dG9tIG9mIGNsYXNzIGRlZmluaXRpb24uXHJcblxyXG4vLyBwdWJsaWMgbWV0aG9kczpcclxuLyoqXHJcbiAqIFNldHMgdGhlIHNwZWNpZmllZCB2YWx1ZXMgb24gdGhpcyBpbnN0YW5jZS5cclxuICogQG1ldGhvZCBzZXRWYWx1ZXNcclxuICogQHBhcmFtIHtOdW1iZXJ9IFthPTFdIFNwZWNpZmllcyB0aGUgYSBwcm9wZXJ0eSBmb3IgdGhlIG5ldyBtYXRyaXguXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBbYj0wXSBTcGVjaWZpZXMgdGhlIGIgcHJvcGVydHkgZm9yIHRoZSBuZXcgbWF0cml4LlxyXG4gKiBAcGFyYW0ge051bWJlcn0gW2M9MF0gU3BlY2lmaWVzIHRoZSBjIHByb3BlcnR5IGZvciB0aGUgbmV3IG1hdHJpeC5cclxuICogQHBhcmFtIHtOdW1iZXJ9IFtkPTFdIFNwZWNpZmllcyB0aGUgZCBwcm9wZXJ0eSBmb3IgdGhlIG5ldyBtYXRyaXguXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBbdHg9MF0gU3BlY2lmaWVzIHRoZSB0eCBwcm9wZXJ0eSBmb3IgdGhlIG5ldyBtYXRyaXguXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBbdHk9MF0gU3BlY2lmaWVzIHRoZSB0eSBwcm9wZXJ0eSBmb3IgdGhlIG5ldyBtYXRyaXguXHJcbiAqIEByZXR1cm4ge01hdHJpeDJEfSBUaGlzIGluc3RhbmNlLiBVc2VmdWwgZm9yIGNoYWluaW5nIG1ldGhvZCBjYWxscy5cclxuICovXHJcbnAuc2V0VmFsdWVzID0gZnVuY3Rpb24gKGEsIGIsIGMsIGQsIHR4LCB0eSkge1xyXG4gIC8vIGRvbid0IGZvcmdldCB0byB1cGRhdGUgZG9jcyBpbiB0aGUgY29uc3RydWN0b3IgaWYgdGhlc2UgY2hhbmdlOlxyXG4gIHRoaXMuYSA9IGEgPT0gbnVsbCA/IDEgOiBhO1xyXG4gIHRoaXMuYiA9IGIgfHwgMDtcclxuICB0aGlzLmMgPSBjIHx8IDA7XHJcbiAgdGhpcy5kID0gZCA9PSBudWxsID8gMSA6IGQ7XHJcbiAgdGhpcy50eCA9IHR4IHx8IDA7XHJcbiAgdGhpcy50eSA9IHR5IHx8IDA7XHJcbiAgcmV0dXJuIHRoaXM7XHJcbn07XHJcblxyXG4vKipcclxuICogQXBwZW5kcyB0aGUgc3BlY2lmaWVkIG1hdHJpeCBwcm9wZXJ0aWVzIHRvIHRoaXMgbWF0cml4LiBBbGwgcGFyYW1ldGVycyBhcmUgcmVxdWlyZWQuXHJcbiAqIFRoaXMgaXMgdGhlIGVxdWl2YWxlbnQgb2YgbXVsdGlwbHlpbmcgYCh0aGlzIG1hdHJpeCkgKiAoc3BlY2lmaWVkIG1hdHJpeClgLlxyXG4gKiBAbWV0aG9kIGFwcGVuZFxyXG4gKiBAcGFyYW0ge051bWJlcn0gYVxyXG4gKiBAcGFyYW0ge051bWJlcn0gYlxyXG4gKiBAcGFyYW0ge051bWJlcn0gY1xyXG4gKiBAcGFyYW0ge051bWJlcn0gZFxyXG4gKiBAcGFyYW0ge051bWJlcn0gdHhcclxuICogQHBhcmFtIHtOdW1iZXJ9IHR5XHJcbiAqIEByZXR1cm4ge01hdHJpeDJEfSBUaGlzIG1hdHJpeC4gVXNlZnVsIGZvciBjaGFpbmluZyBtZXRob2QgY2FsbHMuXHJcbiAqKi9cclxucC5hcHBlbmQgPSBmdW5jdGlvbiAoYSwgYiwgYywgZCwgdHgsIHR5KSB7XHJcbiAgdmFyIGExID0gdGhpcy5hO1xyXG4gIHZhciBiMSA9IHRoaXMuYjtcclxuICB2YXIgYzEgPSB0aGlzLmM7XHJcbiAgdmFyIGQxID0gdGhpcy5kO1xyXG4gIGlmIChhICE9IDEgfHwgYiAhPSAwIHx8IGMgIT0gMCB8fCBkICE9IDEpIHtcclxuICAgIHRoaXMuYSA9IGExICogYSArIGMxICogYjtcclxuICAgIHRoaXMuYiA9IGIxICogYSArIGQxICogYjtcclxuICAgIHRoaXMuYyA9IGExICogYyArIGMxICogZDtcclxuICAgIHRoaXMuZCA9IGIxICogYyArIGQxICogZDtcclxuICB9XHJcbiAgdGhpcy50eCA9IGExICogdHggKyBjMSAqIHR5ICsgdGhpcy50eDtcclxuICB0aGlzLnR5ID0gYjEgKiB0eCArIGQxICogdHkgKyB0aGlzLnR5O1xyXG4gIHJldHVybiB0aGlzO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFByZXBlbmRzIHRoZSBzcGVjaWZpZWQgbWF0cml4IHByb3BlcnRpZXMgdG8gdGhpcyBtYXRyaXguXHJcbiAqIFRoaXMgaXMgdGhlIGVxdWl2YWxlbnQgb2YgbXVsdGlwbHlpbmcgYChzcGVjaWZpZWQgbWF0cml4KSAqICh0aGlzIG1hdHJpeClgLlxyXG4gKiBBbGwgcGFyYW1ldGVycyBhcmUgcmVxdWlyZWQuXHJcbiAqIEBtZXRob2QgcHJlcGVuZFxyXG4gKiBAcGFyYW0ge051bWJlcn0gYVxyXG4gKiBAcGFyYW0ge051bWJlcn0gYlxyXG4gKiBAcGFyYW0ge051bWJlcn0gY1xyXG4gKiBAcGFyYW0ge051bWJlcn0gZFxyXG4gKiBAcGFyYW0ge051bWJlcn0gdHhcclxuICogQHBhcmFtIHtOdW1iZXJ9IHR5XHJcbiAqIEByZXR1cm4ge01hdHJpeDJEfSBUaGlzIG1hdHJpeC4gVXNlZnVsIGZvciBjaGFpbmluZyBtZXRob2QgY2FsbHMuXHJcbiAqKi9cclxucC5wcmVwZW5kID0gZnVuY3Rpb24gKGEsIGIsIGMsIGQsIHR4LCB0eSkge1xyXG4gIHZhciBhMSA9IHRoaXMuYTtcclxuICB2YXIgYzEgPSB0aGlzLmM7XHJcbiAgdmFyIHR4MSA9IHRoaXMudHg7XHJcblxyXG4gIHRoaXMuYSA9IGEgKiBhMSArIGMgKiB0aGlzLmI7XHJcbiAgdGhpcy5iID0gYiAqIGExICsgZCAqIHRoaXMuYjtcclxuICB0aGlzLmMgPSBhICogYzEgKyBjICogdGhpcy5kO1xyXG4gIHRoaXMuZCA9IGIgKiBjMSArIGQgKiB0aGlzLmQ7XHJcbiAgdGhpcy50eCA9IGEgKiB0eDEgKyBjICogdGhpcy50eSArIHR4O1xyXG4gIHRoaXMudHkgPSBiICogdHgxICsgZCAqIHRoaXMudHkgKyB0eTtcclxuICByZXR1cm4gdGhpcztcclxufTtcclxuXHJcbi8qKlxyXG4gKiBBcHBlbmRzIHRoZSBzcGVjaWZpZWQgbWF0cml4IHRvIHRoaXMgbWF0cml4LlxyXG4gKiBUaGlzIGlzIHRoZSBlcXVpdmFsZW50IG9mIG11bHRpcGx5aW5nIGAodGhpcyBtYXRyaXgpICogKHNwZWNpZmllZCBtYXRyaXgpYC5cclxuICogQG1ldGhvZCBhcHBlbmRNYXRyaXhcclxuICogQHBhcmFtIHtNYXRyaXgyRH0gbWF0cml4XHJcbiAqIEByZXR1cm4ge01hdHJpeDJEfSBUaGlzIG1hdHJpeC4gVXNlZnVsIGZvciBjaGFpbmluZyBtZXRob2QgY2FsbHMuXHJcbiAqKi9cclxucC5hcHBlbmRNYXRyaXggPSBmdW5jdGlvbiAobWF0cml4KSB7XHJcbiAgcmV0dXJuIHRoaXMuYXBwZW5kKG1hdHJpeC5hLCBtYXRyaXguYiwgbWF0cml4LmMsIG1hdHJpeC5kLCBtYXRyaXgudHgsIG1hdHJpeC50eSk7XHJcbn07XHJcblxyXG4vKipcclxuICogUHJlcGVuZHMgdGhlIHNwZWNpZmllZCBtYXRyaXggdG8gdGhpcyBtYXRyaXguXHJcbiAqIFRoaXMgaXMgdGhlIGVxdWl2YWxlbnQgb2YgbXVsdGlwbHlpbmcgYChzcGVjaWZpZWQgbWF0cml4KSAqICh0aGlzIG1hdHJpeClgLlxyXG4gKiBGb3IgZXhhbXBsZSwgeW91IGNvdWxkIGNhbGN1bGF0ZSB0aGUgY29tYmluZWQgdHJhbnNmb3JtYXRpb24gZm9yIGEgY2hpbGQgb2JqZWN0IHVzaW5nOlxyXG4gKlxyXG4gKiBcdHZhciBvID0gbXlEaXNwbGF5T2JqZWN0O1xyXG4gKiBcdHZhciBtdHggPSBvLmdldE1hdHJpeCgpO1xyXG4gKiBcdHdoaWxlIChvID0gby5wYXJlbnQpIHtcclxuICogXHRcdC8vIHByZXBlbmQgZWFjaCBwYXJlbnQncyB0cmFuc2Zvcm1hdGlvbiBpbiB0dXJuOlxyXG4gKiBcdFx0by5wcmVwZW5kTWF0cml4KG8uZ2V0TWF0cml4KCkpO1xyXG4gKiBcdH1cclxuICogQG1ldGhvZCBwcmVwZW5kTWF0cml4XHJcbiAqIEBwYXJhbSB7TWF0cml4MkR9IG1hdHJpeFxyXG4gKiBAcmV0dXJuIHtNYXRyaXgyRH0gVGhpcyBtYXRyaXguIFVzZWZ1bCBmb3IgY2hhaW5pbmcgbWV0aG9kIGNhbGxzLlxyXG4gKiovXHJcbnAucHJlcGVuZE1hdHJpeCA9IGZ1bmN0aW9uIChtYXRyaXgpIHtcclxuICByZXR1cm4gdGhpcy5wcmVwZW5kKG1hdHJpeC5hLCBtYXRyaXguYiwgbWF0cml4LmMsIG1hdHJpeC5kLCBtYXRyaXgudHgsIG1hdHJpeC50eSk7XHJcbn07XHJcblxyXG4vKipcclxuICogR2VuZXJhdGVzIG1hdHJpeCBwcm9wZXJ0aWVzIGZyb20gdGhlIHNwZWNpZmllZCBkaXNwbGF5IG9iamVjdCB0cmFuc2Zvcm0gcHJvcGVydGllcywgYW5kIGFwcGVuZHMgdGhlbSB0byB0aGlzIG1hdHJpeC5cclxuICogRm9yIGV4YW1wbGUsIHlvdSBjYW4gdXNlIHRoaXMgdG8gZ2VuZXJhdGUgYSBtYXRyaXggcmVwcmVzZW50aW5nIHRoZSB0cmFuc2Zvcm1hdGlvbnMgb2YgYSBkaXNwbGF5IG9iamVjdDpcclxuICpcclxuICogXHR2YXIgbXR4ID0gbmV3IGNyZWF0ZWpzLk1hdHJpeDJEKCk7XHJcbiAqIFx0bXR4LmFwcGVuZFRyYW5zZm9ybShvLngsIG8ueSwgby5zY2FsZVgsIG8uc2NhbGVZLCBvLnJvdGF0aW9uKTtcclxuICogQG1ldGhvZCBhcHBlbmRUcmFuc2Zvcm1cclxuICogQHBhcmFtIHtOdW1iZXJ9IHhcclxuICogQHBhcmFtIHtOdW1iZXJ9IHlcclxuICogQHBhcmFtIHtOdW1iZXJ9IHNjYWxlWFxyXG4gKiBAcGFyYW0ge051bWJlcn0gc2NhbGVZXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSByb3RhdGlvblxyXG4gKiBAcGFyYW0ge051bWJlcn0gc2tld1hcclxuICogQHBhcmFtIHtOdW1iZXJ9IHNrZXdZXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSByZWdYIE9wdGlvbmFsLlxyXG4gKiBAcGFyYW0ge051bWJlcn0gcmVnWSBPcHRpb25hbC5cclxuICogQHJldHVybiB7TWF0cml4MkR9IFRoaXMgbWF0cml4LiBVc2VmdWwgZm9yIGNoYWluaW5nIG1ldGhvZCBjYWxscy5cclxuICoqL1xyXG5wLmFwcGVuZFRyYW5zZm9ybSA9IGZ1bmN0aW9uICh4LCB5LCBzY2FsZVgsIHNjYWxlWSwgcm90YXRpb24sIHNrZXdYLCBza2V3WSwgcmVnWCwgcmVnWSkge1xyXG4gIGlmIChyb3RhdGlvbiAlIDM2MCkge1xyXG4gICAgdmFyIHIgPSByb3RhdGlvbiAqIE1hdHJpeDJELkRFR19UT19SQUQ7XHJcbiAgICB2YXIgY29zID0gTWF0aC5jb3Mocik7XHJcbiAgICB2YXIgc2luID0gTWF0aC5zaW4ocik7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvcyA9IDE7XHJcbiAgICBzaW4gPSAwO1xyXG4gIH1cclxuXHJcbiAgaWYgKHNrZXdYIHx8IHNrZXdZKSB7XHJcbiAgICAvLyBUT0RPOiBjYW4gdGhpcyBiZSBjb21iaW5lZCBpbnRvIGEgc2luZ2xlIGFwcGVuZCBvcGVyYXRpb24/XHJcbiAgICBza2V3WCAqPSBNYXRyaXgyRC5ERUdfVE9fUkFEO1xyXG4gICAgc2tld1kgKj0gTWF0cml4MkQuREVHX1RPX1JBRDtcclxuICAgIHRoaXMuYXBwZW5kKE1hdGguY29zKHNrZXdZKSwgTWF0aC5zaW4oc2tld1kpLCAtTWF0aC5zaW4oc2tld1gpLCBNYXRoLmNvcyhza2V3WCksIHgsIHkpO1xyXG4gICAgdGhpcy5hcHBlbmQoY29zICogc2NhbGVYLCBzaW4gKiBzY2FsZVgsIC1zaW4gKiBzY2FsZVksIGNvcyAqIHNjYWxlWSwgMCwgMCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHRoaXMuYXBwZW5kKGNvcyAqIHNjYWxlWCwgc2luICogc2NhbGVYLCAtc2luICogc2NhbGVZLCBjb3MgKiBzY2FsZVksIHgsIHkpO1xyXG4gIH1cclxuXHJcbiAgaWYgKHJlZ1ggfHwgcmVnWSkge1xyXG4gICAgLy8gYXBwZW5kIHRoZSByZWdpc3RyYXRpb24gb2Zmc2V0OlxyXG4gICAgdGhpcy50eCAtPSByZWdYICogdGhpcy5hICsgcmVnWSAqIHRoaXMuYztcclxuICAgIHRoaXMudHkgLT0gcmVnWCAqIHRoaXMuYiArIHJlZ1kgKiB0aGlzLmQ7XHJcbiAgfVxyXG4gIHJldHVybiB0aGlzO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEdlbmVyYXRlcyBtYXRyaXggcHJvcGVydGllcyBmcm9tIHRoZSBzcGVjaWZpZWQgZGlzcGxheSBvYmplY3QgdHJhbnNmb3JtIHByb3BlcnRpZXMsIGFuZCBwcmVwZW5kcyB0aGVtIHRvIHRoaXMgbWF0cml4LlxyXG4gKiBGb3IgZXhhbXBsZSwgeW91IGNvdWxkIGNhbGN1bGF0ZSB0aGUgY29tYmluZWQgdHJhbnNmb3JtYXRpb24gZm9yIGEgY2hpbGQgb2JqZWN0IHVzaW5nOlxyXG4gKlxyXG4gKiBcdHZhciBvID0gbXlEaXNwbGF5T2JqZWN0O1xyXG4gKiBcdHZhciBtdHggPSBuZXcgY3JlYXRlanMuTWF0cml4MkQoKTtcclxuICogXHRkbyAge1xyXG4gKiBcdFx0Ly8gcHJlcGVuZCBlYWNoIHBhcmVudCdzIHRyYW5zZm9ybWF0aW9uIGluIHR1cm46XHJcbiAqIFx0XHRtdHgucHJlcGVuZFRyYW5zZm9ybShvLngsIG8ueSwgby5zY2FsZVgsIG8uc2NhbGVZLCBvLnJvdGF0aW9uLCBvLnNrZXdYLCBvLnNrZXdZLCBvLnJlZ1gsIG8ucmVnWSk7XHJcbiAqIFx0fSB3aGlsZSAobyA9IG8ucGFyZW50KTtcclxuICpcclxuICogXHROb3RlIHRoYXQgdGhlIGFib3ZlIGV4YW1wbGUgd291bGQgbm90IGFjY291bnQgZm9yIHt7I2Nyb3NzTGluayBcIkRpc3BsYXlPYmplY3QvdHJhbnNmb3JtTWF0cml4OnByb3BlcnR5XCJ9fXt7L2Nyb3NzTGlua319XHJcbiAqIFx0dmFsdWVzLiBTZWUge3sjY3Jvc3NMaW5rIFwiTWF0cml4MkQvcHJlcGVuZE1hdHJpeFwifX17ey9jcm9zc0xpbmt9fSBmb3IgYW4gZXhhbXBsZSB0aGF0IGRvZXMuXHJcbiAqIEBtZXRob2QgcHJlcGVuZFRyYW5zZm9ybVxyXG4gKiBAcGFyYW0ge051bWJlcn0geFxyXG4gKiBAcGFyYW0ge051bWJlcn0geVxyXG4gKiBAcGFyYW0ge051bWJlcn0gc2NhbGVYXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBzY2FsZVlcclxuICogQHBhcmFtIHtOdW1iZXJ9IHJvdGF0aW9uXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBza2V3WFxyXG4gKiBAcGFyYW0ge051bWJlcn0gc2tld1lcclxuICogQHBhcmFtIHtOdW1iZXJ9IHJlZ1ggT3B0aW9uYWwuXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSByZWdZIE9wdGlvbmFsLlxyXG4gKiBAcmV0dXJuIHtNYXRyaXgyRH0gVGhpcyBtYXRyaXguIFVzZWZ1bCBmb3IgY2hhaW5pbmcgbWV0aG9kIGNhbGxzLlxyXG4gKiovXHJcbnAucHJlcGVuZFRyYW5zZm9ybSA9IGZ1bmN0aW9uICh4LCB5LCBzY2FsZVgsIHNjYWxlWSwgcm90YXRpb24sIHNrZXdYLCBza2V3WSwgcmVnWCwgcmVnWSkge1xyXG4gIGlmIChyb3RhdGlvbiAlIDM2MCkge1xyXG4gICAgdmFyIHIgPSByb3RhdGlvbiAqIE1hdHJpeDJELkRFR19UT19SQUQ7XHJcbiAgICB2YXIgY29zID0gTWF0aC5jb3Mocik7XHJcbiAgICB2YXIgc2luID0gTWF0aC5zaW4ocik7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvcyA9IDE7XHJcbiAgICBzaW4gPSAwO1xyXG4gIH1cclxuXHJcbiAgaWYgKHJlZ1ggfHwgcmVnWSkge1xyXG4gICAgLy8gcHJlcGVuZCB0aGUgcmVnaXN0cmF0aW9uIG9mZnNldDpcclxuICAgIHRoaXMudHggLT0gcmVnWDtcclxuICAgIHRoaXMudHkgLT0gcmVnWTtcclxuICB9XHJcbiAgaWYgKHNrZXdYIHx8IHNrZXdZKSB7XHJcbiAgICAvLyBUT0RPOiBjYW4gdGhpcyBiZSBjb21iaW5lZCBpbnRvIGEgc2luZ2xlIHByZXBlbmQgb3BlcmF0aW9uP1xyXG4gICAgc2tld1ggKj0gTWF0cml4MkQuREVHX1RPX1JBRDtcclxuICAgIHNrZXdZICo9IE1hdHJpeDJELkRFR19UT19SQUQ7XHJcbiAgICB0aGlzLnByZXBlbmQoY29zICogc2NhbGVYLCBzaW4gKiBzY2FsZVgsIC1zaW4gKiBzY2FsZVksIGNvcyAqIHNjYWxlWSwgMCwgMCk7XHJcbiAgICB0aGlzLnByZXBlbmQoTWF0aC5jb3Moc2tld1kpLCBNYXRoLnNpbihza2V3WSksIC1NYXRoLnNpbihza2V3WCksIE1hdGguY29zKHNrZXdYKSwgeCwgeSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHRoaXMucHJlcGVuZChjb3MgKiBzY2FsZVgsIHNpbiAqIHNjYWxlWCwgLXNpbiAqIHNjYWxlWSwgY29zICogc2NhbGVZLCB4LCB5KTtcclxuICB9XHJcbiAgcmV0dXJuIHRoaXM7XHJcbn07XHJcblxyXG4vKipcclxuICogQXBwbGllcyBhIGNsb2Nrd2lzZSByb3RhdGlvbiB0cmFuc2Zvcm1hdGlvbiB0byB0aGUgbWF0cml4LlxyXG4gKiBAbWV0aG9kIHJvdGF0ZVxyXG4gKiBAcGFyYW0ge051bWJlcn0gYW5nbGUgVGhlIGFuZ2xlIHRvIHJvdGF0ZSBieSwgaW4gZGVncmVlcy4gVG8gdXNlIGEgdmFsdWUgaW4gcmFkaWFucywgbXVsdGlwbHkgaXQgYnkgYE1hdGguUEkvMTgwYC5cclxuICogQHJldHVybiB7TWF0cml4MkR9IFRoaXMgbWF0cml4LiBVc2VmdWwgZm9yIGNoYWluaW5nIG1ldGhvZCBjYWxscy5cclxuICoqL1xyXG5wLnJvdGF0ZSA9IGZ1bmN0aW9uIChhbmdsZSkge1xyXG4gIGFuZ2xlID0gYW5nbGUgKiBNYXRyaXgyRC5ERUdfVE9fUkFEO1xyXG4gIHZhciBjb3MgPSBNYXRoLmNvcyhhbmdsZSk7XHJcbiAgdmFyIHNpbiA9IE1hdGguc2luKGFuZ2xlKTtcclxuXHJcbiAgdmFyIGExID0gdGhpcy5hO1xyXG4gIHZhciBiMSA9IHRoaXMuYjtcclxuXHJcbiAgdGhpcy5hID0gYTEgKiBjb3MgKyB0aGlzLmMgKiBzaW47XHJcbiAgdGhpcy5iID0gYjEgKiBjb3MgKyB0aGlzLmQgKiBzaW47XHJcbiAgdGhpcy5jID0gLWExICogc2luICsgdGhpcy5jICogY29zO1xyXG4gIHRoaXMuZCA9IC1iMSAqIHNpbiArIHRoaXMuZCAqIGNvcztcclxuICByZXR1cm4gdGhpcztcclxufTtcclxuXHJcbi8qKlxyXG4gKiBBcHBsaWVzIGEgc2tldyB0cmFuc2Zvcm1hdGlvbiB0byB0aGUgbWF0cml4LlxyXG4gKiBAbWV0aG9kIHNrZXdcclxuICogQHBhcmFtIHtOdW1iZXJ9IHNrZXdYIFRoZSBhbW91bnQgdG8gc2tldyBob3Jpem9udGFsbHkgaW4gZGVncmVlcy4gVG8gdXNlIGEgdmFsdWUgaW4gcmFkaWFucywgbXVsdGlwbHkgaXQgYnkgYE1hdGguUEkvMTgwYC5cclxuICogQHBhcmFtIHtOdW1iZXJ9IHNrZXdZIFRoZSBhbW91bnQgdG8gc2tldyB2ZXJ0aWNhbGx5IGluIGRlZ3JlZXMuXHJcbiAqIEByZXR1cm4ge01hdHJpeDJEfSBUaGlzIG1hdHJpeC4gVXNlZnVsIGZvciBjaGFpbmluZyBtZXRob2QgY2FsbHMuXHJcbiAqL1xyXG5wLnNrZXcgPSBmdW5jdGlvbiAoc2tld1gsIHNrZXdZKSB7XHJcbiAgc2tld1ggPSBza2V3WCAqIE1hdHJpeDJELkRFR19UT19SQUQ7XHJcbiAgc2tld1kgPSBza2V3WSAqIE1hdHJpeDJELkRFR19UT19SQUQ7XHJcbiAgdGhpcy5hcHBlbmQoTWF0aC5jb3Moc2tld1kpLCBNYXRoLnNpbihza2V3WSksIC1NYXRoLnNpbihza2V3WCksIE1hdGguY29zKHNrZXdYKSwgMCwgMCk7XHJcbiAgcmV0dXJuIHRoaXM7XHJcbn07XHJcblxyXG4vKipcclxuICogQXBwbGllcyBhIHNjYWxlIHRyYW5zZm9ybWF0aW9uIHRvIHRoZSBtYXRyaXguXHJcbiAqIEBtZXRob2Qgc2NhbGVcclxuICogQHBhcmFtIHtOdW1iZXJ9IHggVGhlIGFtb3VudCB0byBzY2FsZSBob3Jpem9udGFsbHkuIEUuRy4gYSB2YWx1ZSBvZiAyIHdpbGwgZG91YmxlIHRoZSBzaXplIGluIHRoZSBYIGRpcmVjdGlvbiwgYW5kIDAuNSB3aWxsIGhhbHZlIGl0LlxyXG4gKiBAcGFyYW0ge051bWJlcn0geSBUaGUgYW1vdW50IHRvIHNjYWxlIHZlcnRpY2FsbHkuXHJcbiAqIEByZXR1cm4ge01hdHJpeDJEfSBUaGlzIG1hdHJpeC4gVXNlZnVsIGZvciBjaGFpbmluZyBtZXRob2QgY2FsbHMuXHJcbiAqKi9cclxucC5zY2FsZSA9IGZ1bmN0aW9uICh4LCB5KSB7XHJcbiAgdGhpcy5hICo9IHg7XHJcbiAgdGhpcy5iICo9IHg7XHJcbiAgdGhpcy5jICo9IHk7XHJcbiAgdGhpcy5kICo9IHk7XHJcbiAgLy90aGlzLnR4ICo9IHg7XHJcbiAgLy90aGlzLnR5ICo9IHk7XHJcbiAgcmV0dXJuIHRoaXM7XHJcbn07XHJcblxyXG4vKipcclxuICogVHJhbnNsYXRlcyB0aGUgbWF0cml4IG9uIHRoZSB4IGFuZCB5IGF4ZXMuXHJcbiAqIEBtZXRob2QgdHJhbnNsYXRlXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSB4XHJcbiAqIEBwYXJhbSB7TnVtYmVyfSB5XHJcbiAqIEByZXR1cm4ge01hdHJpeDJEfSBUaGlzIG1hdHJpeC4gVXNlZnVsIGZvciBjaGFpbmluZyBtZXRob2QgY2FsbHMuXHJcbiAqKi9cclxucC50cmFuc2xhdGUgPSBmdW5jdGlvbiAoeCwgeSkge1xyXG4gIHRoaXMudHggKz0gdGhpcy5hICogeCArIHRoaXMuYyAqIHk7XHJcbiAgdGhpcy50eSArPSB0aGlzLmIgKiB4ICsgdGhpcy5kICogeTtcclxuICByZXR1cm4gdGhpcztcclxufTtcclxuXHJcbi8qKlxyXG4gKiBTZXRzIHRoZSBwcm9wZXJ0aWVzIG9mIHRoZSBtYXRyaXggdG8gdGhvc2Ugb2YgYW4gaWRlbnRpdHkgbWF0cml4IChvbmUgdGhhdCBhcHBsaWVzIGEgbnVsbCB0cmFuc2Zvcm1hdGlvbikuXHJcbiAqIEBtZXRob2QgaWRlbnRpdHlcclxuICogQHJldHVybiB7TWF0cml4MkR9IFRoaXMgbWF0cml4LiBVc2VmdWwgZm9yIGNoYWluaW5nIG1ldGhvZCBjYWxscy5cclxuICoqL1xyXG5wLmlkZW50aXR5ID0gZnVuY3Rpb24gKCkge1xyXG4gIHRoaXMuYSA9IHRoaXMuZCA9IDE7XHJcbiAgdGhpcy5iID0gdGhpcy5jID0gdGhpcy50eCA9IHRoaXMudHkgPSAwO1xyXG4gIHJldHVybiB0aGlzO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEludmVydHMgdGhlIG1hdHJpeCwgY2F1c2luZyBpdCB0byBwZXJmb3JtIHRoZSBvcHBvc2l0ZSB0cmFuc2Zvcm1hdGlvbi5cclxuICogQG1ldGhvZCBpbnZlcnRcclxuICogQHJldHVybiB7TWF0cml4MkR9IFRoaXMgbWF0cml4LiBVc2VmdWwgZm9yIGNoYWluaW5nIG1ldGhvZCBjYWxscy5cclxuICoqL1xyXG5wLmludmVydCA9IGZ1bmN0aW9uICgpIHtcclxuICB2YXIgYTEgPSB0aGlzLmE7XHJcbiAgdmFyIGIxID0gdGhpcy5iO1xyXG4gIHZhciBjMSA9IHRoaXMuYztcclxuICB2YXIgZDEgPSB0aGlzLmQ7XHJcbiAgdmFyIHR4MSA9IHRoaXMudHg7XHJcbiAgdmFyIG4gPSBhMSAqIGQxIC0gYjEgKiBjMTtcclxuXHJcbiAgdGhpcy5hID0gZDEgLyBuO1xyXG4gIHRoaXMuYiA9IC1iMSAvIG47XHJcbiAgdGhpcy5jID0gLWMxIC8gbjtcclxuICB0aGlzLmQgPSBhMSAvIG47XHJcbiAgdGhpcy50eCA9IChjMSAqIHRoaXMudHkgLSBkMSAqIHR4MSkgLyBuO1xyXG4gIHRoaXMudHkgPSAtKGExICogdGhpcy50eSAtIGIxICogdHgxKSAvIG47XHJcbiAgcmV0dXJuIHRoaXM7XHJcbn07XHJcblxyXG4vKipcclxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBtYXRyaXggaXMgYW4gaWRlbnRpdHkgbWF0cml4LlxyXG4gKiBAbWV0aG9kIGlzSWRlbnRpdHlcclxuICogQHJldHVybiB7Qm9vbGVhbn1cclxuICoqL1xyXG5wLmlzSWRlbnRpdHkgPSBmdW5jdGlvbiAoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIHRoaXMudHggPT09IDAgJiYgdGhpcy50eSA9PT0gMCAmJiB0aGlzLmEgPT09IDEgJiYgdGhpcy5iID09PSAwICYmIHRoaXMuYyA9PT0gMCAmJiB0aGlzLmQgPT09IDFcclxuICApO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGlzIG1hdHJpeCBpcyBlcXVhbCB0byB0aGUgc3BlY2lmaWVkIG1hdHJpeCAoYWxsIHByb3BlcnR5IHZhbHVlcyBhcmUgZXF1YWwpLlxyXG4gKiBAbWV0aG9kIGVxdWFsc1xyXG4gKiBAcGFyYW0ge01hdHJpeDJEfSBtYXRyaXggVGhlIG1hdHJpeCB0byBjb21wYXJlLlxyXG4gKiBAcmV0dXJuIHtCb29sZWFufVxyXG4gKiovXHJcbnAuZXF1YWxzID0gZnVuY3Rpb24gKG1hdHJpeCkge1xyXG4gIHJldHVybiAoXHJcbiAgICB0aGlzLnR4ID09PSBtYXRyaXgudHggJiZcclxuICAgIHRoaXMudHkgPT09IG1hdHJpeC50eSAmJlxyXG4gICAgdGhpcy5hID09PSBtYXRyaXguYSAmJlxyXG4gICAgdGhpcy5iID09PSBtYXRyaXguYiAmJlxyXG4gICAgdGhpcy5jID09PSBtYXRyaXguYyAmJlxyXG4gICAgdGhpcy5kID09PSBtYXRyaXguZFxyXG4gICk7XHJcbn07XHJcblxyXG4vKipcclxuICogVHJhbnNmb3JtcyBhIHBvaW50IGFjY29yZGluZyB0byB0aGlzIG1hdHJpeC5cclxuICogQG1ldGhvZCB0cmFuc2Zvcm1Qb2ludFxyXG4gKiBAcGFyYW0ge051bWJlcn0geCBUaGUgeCBjb21wb25lbnQgb2YgdGhlIHBvaW50IHRvIHRyYW5zZm9ybS5cclxuICogQHBhcmFtIHtOdW1iZXJ9IHkgVGhlIHkgY29tcG9uZW50IG9mIHRoZSBwb2ludCB0byB0cmFuc2Zvcm0uXHJcbiAqIEBwYXJhbSB7UG9pbnQgfCBPYmplY3R9IFtwdF0gQW4gb2JqZWN0IHRvIGNvcHkgdGhlIHJlc3VsdCBpbnRvLiBJZiBvbWl0dGVkIGEgZ2VuZXJpYyBvYmplY3Qgd2l0aCB4L3kgcHJvcGVydGllcyB3aWxsIGJlIHJldHVybmVkLlxyXG4gKiBAcmV0dXJuIHtQb2ludH0gVGhpcyBtYXRyaXguIFVzZWZ1bCBmb3IgY2hhaW5pbmcgbWV0aG9kIGNhbGxzLlxyXG4gKiovXHJcbnAudHJhbnNmb3JtUG9pbnQgPSBmdW5jdGlvbiAoeCwgeSwgcHQpIHtcclxuICBwdCA9IHB0IHx8IHt9O1xyXG4gIHB0LnggPSB4ICogdGhpcy5hICsgeSAqIHRoaXMuYyArIHRoaXMudHg7XHJcbiAgcHQueSA9IHggKiB0aGlzLmIgKyB5ICogdGhpcy5kICsgdGhpcy50eTtcclxuICByZXR1cm4gcHQ7XHJcbn07XHJcblxyXG4vKipcclxuICogRGVjb21wb3NlcyB0aGUgbWF0cml4IGludG8gdHJhbnNmb3JtIHByb3BlcnRpZXMgKHgsIHksIHNjYWxlWCwgc2NhbGVZLCBhbmQgcm90YXRpb24pLiBOb3RlIHRoYXQgdGhlc2UgdmFsdWVzXHJcbiAqIG1heSBub3QgbWF0Y2ggdGhlIHRyYW5zZm9ybSBwcm9wZXJ0aWVzIHlvdSB1c2VkIHRvIGdlbmVyYXRlIHRoZSBtYXRyaXgsIHRob3VnaCB0aGV5IHdpbGwgcHJvZHVjZSB0aGUgc2FtZSB2aXN1YWxcclxuICogcmVzdWx0cy5cclxuICogQG1ldGhvZCBkZWNvbXBvc2VcclxuICogQHBhcmFtIHtPYmplY3R9IHRhcmdldCBUaGUgb2JqZWN0IHRvIGFwcGx5IHRoZSB0cmFuc2Zvcm0gcHJvcGVydGllcyB0by4gSWYgbnVsbCwgdGhlbiBhIG5ldyBvYmplY3Qgd2lsbCBiZSByZXR1cm5lZC5cclxuICogQHJldHVybiB7T2JqZWN0fSBUaGUgdGFyZ2V0LCBvciBhIG5ldyBnZW5lcmljIG9iamVjdCB3aXRoIHRoZSB0cmFuc2Zvcm0gcHJvcGVydGllcyBhcHBsaWVkLlxyXG4gKi9cclxucC5kZWNvbXBvc2UgPSBmdW5jdGlvbiAodGFyZ2V0KSB7XHJcbiAgLy8gVE9ETzogaXQgd291bGQgYmUgbmljZSB0byBiZSBhYmxlIHRvIHNvbHZlIGZvciB3aGV0aGVyIHRoZSBtYXRyaXggY2FuIGJlIGRlY29tcG9zZWQgaW50byBvbmx5IHNjYWxlL3JvdGF0aW9uIGV2ZW4gd2hlbiBzY2FsZSBpcyBuZWdhdGl2ZVxyXG4gIGlmICh0YXJnZXQgPT0gbnVsbCkge1xyXG4gICAgdGFyZ2V0ID0ge307XHJcbiAgfVxyXG4gIHRhcmdldC54ID0gdGhpcy50eDtcclxuICB0YXJnZXQueSA9IHRoaXMudHk7XHJcbiAgdGFyZ2V0LnNjYWxlWCA9IE1hdGguc3FydCh0aGlzLmEgKiB0aGlzLmEgKyB0aGlzLmIgKiB0aGlzLmIpO1xyXG4gIHRhcmdldC5zY2FsZVkgPSBNYXRoLnNxcnQodGhpcy5jICogdGhpcy5jICsgdGhpcy5kICogdGhpcy5kKTtcclxuXHJcbiAgdmFyIHNrZXdYID0gTWF0aC5hdGFuMigtdGhpcy5jLCB0aGlzLmQpO1xyXG4gIHZhciBza2V3WSA9IE1hdGguYXRhbjIodGhpcy5iLCB0aGlzLmEpO1xyXG5cclxuICB2YXIgZGVsdGEgPSBNYXRoLmFicygxIC0gc2tld1ggLyBza2V3WSk7XHJcbiAgaWYgKGRlbHRhIDwgMC4wMDAwMSkge1xyXG4gICAgLy8gZWZmZWN0aXZlbHkgaWRlbnRpY2FsLCBjYW4gdXNlIHJvdGF0aW9uOlxyXG4gICAgdGFyZ2V0LnJvdGF0aW9uID0gc2tld1kgLyBNYXRyaXgyRC5ERUdfVE9fUkFEO1xyXG4gICAgaWYgKHRoaXMuYSA8IDAgJiYgdGhpcy5kID49IDApIHtcclxuICAgICAgdGFyZ2V0LnJvdGF0aW9uICs9IHRhcmdldC5yb3RhdGlvbiA8PSAwID8gMTgwIDogLTE4MDtcclxuICAgIH1cclxuICAgIHRhcmdldC5za2V3WCA9IHRhcmdldC5za2V3WSA9IDA7XHJcbiAgfSBlbHNlIHtcclxuICAgIHRhcmdldC5za2V3WCA9IHNrZXdYIC8gTWF0cml4MkQuREVHX1RPX1JBRDtcclxuICAgIHRhcmdldC5za2V3WSA9IHNrZXdZIC8gTWF0cml4MkQuREVHX1RPX1JBRDtcclxuICB9XHJcbiAgcmV0dXJuIHRhcmdldDtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBDb3BpZXMgYWxsIHByb3BlcnRpZXMgZnJvbSB0aGUgc3BlY2lmaWVkIG1hdHJpeCB0byB0aGlzIG1hdHJpeC5cclxuICogQG1ldGhvZCBjb3B5XHJcbiAqIEBwYXJhbSB7TWF0cml4MkR9IG1hdHJpeCBUaGUgbWF0cml4IHRvIGNvcHkgcHJvcGVydGllcyBmcm9tLlxyXG4gKiBAcmV0dXJuIHtNYXRyaXgyRH0gVGhpcyBtYXRyaXguIFVzZWZ1bCBmb3IgY2hhaW5pbmcgbWV0aG9kIGNhbGxzLlxyXG4gKi9cclxucC5jb3B5ID0gZnVuY3Rpb24gKG1hdHJpeCkge1xyXG4gIHJldHVybiB0aGlzLnNldFZhbHVlcyhtYXRyaXguYSwgbWF0cml4LmIsIG1hdHJpeC5jLCBtYXRyaXguZCwgbWF0cml4LnR4LCBtYXRyaXgudHkpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYSBjbG9uZSBvZiB0aGUgTWF0cml4MkQgaW5zdGFuY2UuXHJcbiAqIEBtZXRob2QgY2xvbmVcclxuICogQHJldHVybiB7TWF0cml4MkR9IGEgY2xvbmUgb2YgdGhlIE1hdHJpeDJEIGluc3RhbmNlLlxyXG4gKiovXHJcbnAuY2xvbmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgcmV0dXJuIG5ldyBNYXRyaXgyRCh0aGlzLmEsIHRoaXMuYiwgdGhpcy5jLCB0aGlzLmQsIHRoaXMudHgsIHRoaXMudHkpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBvYmplY3QuXHJcbiAqIEBtZXRob2QgdG9TdHJpbmdcclxuICogQHJldHVybiB7U3RyaW5nfSBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgaW5zdGFuY2UuXHJcbiAqKi9cclxucC50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgJ1tNYXRyaXgyRCAoYT0nICtcclxuICAgIHRoaXMuYSArXHJcbiAgICAnIGI9JyArXHJcbiAgICB0aGlzLmIgK1xyXG4gICAgJyBjPScgK1xyXG4gICAgdGhpcy5jICtcclxuICAgICcgZD0nICtcclxuICAgIHRoaXMuZCArXHJcbiAgICAnIHR4PScgK1xyXG4gICAgdGhpcy50eCArXHJcbiAgICAnIHR5PScgK1xyXG4gICAgdGhpcy50eSArXHJcbiAgICAnKV0nXHJcbiAgKTtcclxufTtcclxuXHJcbi8vIHRoaXMgaGFzIHRvIGJlIHBvcHVsYXRlZCBhZnRlciB0aGUgY2xhc3MgaXMgZGVmaW5lZDpcclxuTWF0cml4MkQuaWRlbnRpdHkgPSBuZXcgTWF0cml4MkQoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1hdHJpeDJEO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgUmVjdGFuZ2xlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gUmVjdGFuZ2xlKHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcclxuICAgICAgICB0aGlzLnNldFZhbHVlcyh4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcclxuICAgIH1cclxuICAgIFJlY3RhbmdsZS5wcm90b3R5cGUuc2V0VmFsdWVzID0gZnVuY3Rpb24gKHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcclxuICAgICAgICB0aGlzLnggPSB4IHx8IDA7XHJcbiAgICAgICAgdGhpcy55ID0geSB8fCAwO1xyXG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aCB8fCAwO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0IHx8IDA7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgUmVjdGFuZ2xlLnByb3RvdHlwZS5leHRlbmQgPSBmdW5jdGlvbiAoeCwgeSwgd2lkdGgsIGhlaWdodCkge1xyXG4gICAgICAgIHdpZHRoID0gd2lkdGggfHwgMDtcclxuICAgICAgICBoZWlnaHQgPSBoZWlnaHQgfHwgMDtcclxuICAgICAgICBpZiAoeCArIHdpZHRoID4gdGhpcy54ICsgdGhpcy53aWR0aCkge1xyXG4gICAgICAgICAgICB0aGlzLndpZHRoID0geCArIHdpZHRoIC0gdGhpcy54O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoeSArIGhlaWdodCA+IHRoaXMueSArIHRoaXMuaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0geSArIGhlaWdodCAtIHRoaXMueTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHggPCB0aGlzLngpIHtcclxuICAgICAgICAgICAgdGhpcy53aWR0aCArPSB0aGlzLnggLSB4O1xyXG4gICAgICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoeSA8IHRoaXMueSkge1xyXG4gICAgICAgICAgICB0aGlzLmhlaWdodCArPSB0aGlzLnkgLSB5O1xyXG4gICAgICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBSZWN0YW5nbGUucHJvdG90eXBlLmNvcHkgPSBmdW5jdGlvbiAocmVjdGFuZ2xlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0VmFsdWVzKHJlY3RhbmdsZS54LCByZWN0YW5nbGUueSwgcmVjdGFuZ2xlLndpZHRoLCByZWN0YW5nbGUuaGVpZ2h0KTtcclxuICAgIH07XHJcbiAgICBSZWN0YW5nbGUucHJvdG90eXBlLmNvbnRhaW5zID0gZnVuY3Rpb24gKHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcclxuICAgICAgICB3aWR0aCA9IHdpZHRoIHx8IDA7XHJcbiAgICAgICAgaGVpZ2h0ID0gaGVpZ2h0IHx8IDA7XHJcbiAgICAgICAgcmV0dXJuICh4ID49IHRoaXMueCAmJlxyXG4gICAgICAgICAgICB4ICsgd2lkdGggPD0gdGhpcy54ICsgdGhpcy53aWR0aCAmJlxyXG4gICAgICAgICAgICB5ID49IHRoaXMueSAmJlxyXG4gICAgICAgICAgICB5ICsgaGVpZ2h0IDw9IHRoaXMueSArIHRoaXMuaGVpZ2h0KTtcclxuICAgIH07XHJcbiAgICBSZWN0YW5nbGUucHJvdG90eXBlLmlzRW1wdHkgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMud2lkdGggPD0gMCB8fCB0aGlzLmhlaWdodCA8PSAwO1xyXG4gICAgfTtcclxuICAgIFJlY3RhbmdsZS5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBSZWN0YW5nbGUodGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gUmVjdGFuZ2xlO1xyXG59KCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBSZWN0YW5nbGU7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH0pO1xyXG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIG9bazJdID0gbVtrXTtcclxufSkpO1xyXG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX3NldE1vZHVsZURlZmF1bHQpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcclxufSkgOiBmdW5jdGlvbihvLCB2KSB7XHJcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XHJcbn0pO1xyXG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoayAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcclxuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBpbmRleF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL3JlbmRlci9pbmRleFwiKSk7XHJcbnZhciBzdGFnZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL25vZGUvc3RhZ2VcIikpO1xyXG52YXIgZ3JvdXBfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9ub2RlL2dyb3VwXCIpKTtcclxudmFyIGJpdG1hcF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL25vZGUvYml0bWFwXCIpKTtcclxudmFyIHRleHRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9ub2RlL3RleHRcIikpO1xyXG52YXIgZ3JhcGhpY3NfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9ub2RlL2dyYXBoaWNzXCIpKTtcclxudmFyIHNoYXBlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vbm9kZS9zaGFwZS9zaGFwZVwiKSk7XHJcbnZhciByZWN0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vbm9kZS9zaGFwZS9yZWN0XCIpKTtcclxudmFyIGNpcmNsZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL25vZGUvc2hhcGUvY2lyY2xlXCIpKTtcclxudmFyIHJvdW5kZWRfcmVjdF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL25vZGUvc2hhcGUvcm91bmRlZC1yZWN0XCIpKTtcclxudmFyIGFycm93X3BhdGhfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9ub2RlL3NoYXBlL2Fycm93LXBhdGhcIikpO1xyXG52YXIgZWxsaXBzZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL25vZGUvc2hhcGUvZWxsaXBzZVwiKSk7XHJcbnZhciBwb2x5Z29uXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vbm9kZS9zaGFwZS9wb2x5Z29uXCIpKTtcclxudmFyIHNlY3Rvcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL25vZGUvc2hhcGUvc2VjdG9yXCIpKTtcclxudmFyIGVxdWlsYXRlcmFsX3BvbHlnb25fMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9ub2RlL3NoYXBlL2VxdWlsYXRlcmFsLXBvbHlnb25cIikpO1xyXG52YXIgdXRpbHMgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vdXRpbHMvdXRpbFwiKSk7XHJcbnZhciBtcHJjID0ge1xyXG4gICAgUmVuZGVyOiBpbmRleF8xLmRlZmF1bHQsXHJcbiAgICBTdGFnZTogc3RhZ2VfMS5kZWZhdWx0LFxyXG4gICAgR3JvdXA6IGdyb3VwXzEuZGVmYXVsdCxcclxuICAgIEJpdG1hcDogYml0bWFwXzEuZGVmYXVsdCxcclxuICAgIFRleHQ6IHRleHRfMS5kZWZhdWx0LFxyXG4gICAgR3JhcGhpY3M6IGdyYXBoaWNzXzEuZGVmYXVsdCxcclxuICAgIFNoYXBlOiBzaGFwZV8xLmRlZmF1bHQsXHJcbiAgICBSZWN0OiByZWN0XzEuZGVmYXVsdCxcclxuICAgIENpcmNsZTogY2lyY2xlXzEuZGVmYXVsdCxcclxuICAgIFJvdW5kZWRSZWN0OiByb3VuZGVkX3JlY3RfMS5kZWZhdWx0LFxyXG4gICAgQXJyb3dQYXRoOiBhcnJvd19wYXRoXzEuZGVmYXVsdCxcclxuICAgIEVsbGlwc2U6IGVsbGlwc2VfMS5kZWZhdWx0LFxyXG4gICAgUG9seWdvbjogcG9seWdvbl8xLmRlZmF1bHQsXHJcbiAgICBTZWN0b3I6IHNlY3Rvcl8xLmRlZmF1bHQsXHJcbiAgICBFcXVpbGF0ZXJhbFBvbHlnb246IGVxdWlsYXRlcmFsX3BvbHlnb25fMS5kZWZhdWx0LFxyXG4gICAgbG9hZEltYWdlOiB1dGlscy5sb2FkSW1hZ2VcclxufTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gbXByYztcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBub2RlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vbm9kZVwiKSk7XHJcbnZhciBCaXRtYXAgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoQml0bWFwLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gQml0bWFwKGltZykge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XHJcbiAgICAgICAgaWYgKEJpdG1hcC5jYWNoZVtpbWcuc3JjXSkge1xyXG4gICAgICAgICAgICBfdGhpcy5pbWcgPSBCaXRtYXAuY2FjaGVbaW1nLnNyY107XHJcbiAgICAgICAgICAgIF90aGlzLnJlY3QgPSBbMCwgMCwgX3RoaXMuaW1nLndpZHRoLCBfdGhpcy5pbWcuaGVpZ2h0XTtcclxuICAgICAgICAgICAgX3RoaXMud2lkdGggPSBfdGhpcy5pbWcud2lkdGg7XHJcbiAgICAgICAgICAgIF90aGlzLmhlaWdodCA9IF90aGlzLmltZy5oZWlnaHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBfdGhpcy5pbWcgPSBpbWc7XHJcbiAgICAgICAgICAgIF90aGlzLnJlY3QgPSBbMCwgMCwgaW1nLndpZHRoLCBpbWcuaGVpZ2h0XTtcclxuICAgICAgICAgICAgX3RoaXMud2lkdGggPSBpbWcud2lkdGg7XHJcbiAgICAgICAgICAgIF90aGlzLmhlaWdodCA9IGltZy5oZWlnaHQ7XHJcbiAgICAgICAgICAgIEJpdG1hcC5jYWNoZVtpbWcuc3JjXSA9IGltZztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgQml0bWFwLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoY3R4KSB7XHJcbiAgICAgICAgdmFyIHJlY3QgPSB0aGlzLnJlY3Q7XHJcbiAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLmltZywgcmVjdFswXSwgcmVjdFsxXSwgcmVjdFsyXSwgcmVjdFszXSwgMCwgMCwgcmVjdFsyXSwgcmVjdFszXSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEJpdG1hcDtcclxufShub2RlXzEuZGVmYXVsdCkpO1xyXG5CaXRtYXAuY2FjaGUgPSB7fTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gQml0bWFwO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIG5vZGVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9ub2RlXCIpKTtcclxudmFyIGFzc01hcCA9IHtcclxuICAgIGZpbGxTdHlsZTogdHJ1ZSxcclxuICAgIHN0cm9rZVN0eWxlOiB0cnVlLFxyXG4gICAgbGluZVdpZHRoOiB0cnVlLFxyXG4gICAgbGluZUNhcDogdHJ1ZSxcclxuICAgIGxpbmVEYXNoT2Zmc2V0OiB0cnVlLFxyXG4gICAgbGluZUpvaW46IHRydWUsXHJcbiAgICBtaXRlckxpbWl0OiB0cnVlXHJcbn07XHJcbnZhciBHcmFwaGljcyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhHcmFwaGljcywgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIEdyYXBoaWNzKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMuY21kcyA9IFtdO1xyXG4gICAgICAgIF90aGlzLmN1cnJlbnRHcmFkaWVudCA9IG51bGw7XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgR3JhcGhpY3MucHJvdG90eXBlLmNsZWFyUmVjdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgcGFyYW1zID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgcGFyYW1zW19pXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY21kcy5wdXNoKFsnY2xlYXJSZWN0JywgYXJndW1lbnRzXSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgR3JhcGhpY3MucHJvdG90eXBlLnJlY3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHBhcmFtcyA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgIHBhcmFtc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNtZHMucHVzaChbJ3JlY3QnLCBhcmd1bWVudHNdKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBHcmFwaGljcy5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHBhcmFtcyA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgIHBhcmFtc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNtZHMubGVuZ3RoID0gMDtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBHcmFwaGljcy5wcm90b3R5cGUuc2V0TGluZURhc2ggPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHBhcmFtcyA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgIHBhcmFtc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNtZHMucHVzaChbJ3NldExpbmVEYXNoJywgYXJndW1lbnRzXSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgR3JhcGhpY3MucHJvdG90eXBlLnN0cm9rZVJlY3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHBhcmFtcyA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgIHBhcmFtc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNtZHMucHVzaChbJ3N0cm9rZVJlY3QnLCBhcmd1bWVudHNdKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBHcmFwaGljcy5wcm90b3R5cGUuZmlsbFJlY3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHBhcmFtcyA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgIHBhcmFtc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNtZHMucHVzaChbJ2ZpbGxSZWN0JywgYXJndW1lbnRzXSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgR3JhcGhpY3MucHJvdG90eXBlLmJlZ2luUGF0aCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgcGFyYW1zID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgcGFyYW1zW19pXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY21kcy5wdXNoKFsnYmVnaW5QYXRoJywgYXJndW1lbnRzXSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgR3JhcGhpY3MucHJvdG90eXBlLmFyYyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgcGFyYW1zID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgcGFyYW1zW19pXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY21kcy5wdXNoKFsnYXJjJywgYXJndW1lbnRzXSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgR3JhcGhpY3MucHJvdG90eXBlLmNsb3NlUGF0aCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgcGFyYW1zID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgcGFyYW1zW19pXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY21kcy5wdXNoKFsnY2xvc2VQYXRoJywgYXJndW1lbnRzXSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgR3JhcGhpY3MucHJvdG90eXBlLmZpbGxTdHlsZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgcGFyYW1zID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgcGFyYW1zW19pXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY21kcy5wdXNoKFsnZmlsbFN0eWxlJywgYXJndW1lbnRzXSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgR3JhcGhpY3MucHJvdG90eXBlLmZpbGwgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHBhcmFtcyA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgIHBhcmFtc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNtZHMucHVzaChbJ2ZpbGwnLCBhcmd1bWVudHNdKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBHcmFwaGljcy5wcm90b3R5cGUuc3Ryb2tlU3R5bGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHBhcmFtcyA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgIHBhcmFtc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNtZHMucHVzaChbJ3N0cm9rZVN0eWxlJywgYXJndW1lbnRzXSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgR3JhcGhpY3MucHJvdG90eXBlLmxpbmVXaWR0aCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgcGFyYW1zID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgcGFyYW1zW19pXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY21kcy5wdXNoKFsnbGluZVdpZHRoJywgYXJndW1lbnRzXSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgR3JhcGhpY3MucHJvdG90eXBlLmxpbmVDYXAgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHBhcmFtcyA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgIHBhcmFtc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNtZHMucHVzaChbJ2xpbmVDYXAnLCBhcmd1bWVudHNdKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBHcmFwaGljcy5wcm90b3R5cGUubGluZURhc2hPZmZzZXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHBhcmFtcyA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgIHBhcmFtc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNtZHMucHVzaChbJ2xpbmVEYXNoT2Zmc2V0JywgYXJndW1lbnRzXSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgR3JhcGhpY3MucHJvdG90eXBlLmxpbmVKb2luID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBwYXJhbXMgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICBwYXJhbXNbX2ldID0gYXJndW1lbnRzW19pXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jbWRzLnB1c2goWydsaW5lSm9pbicsIGFyZ3VtZW50c10pO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIEdyYXBoaWNzLnByb3RvdHlwZS5taXRlckxpbWl0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBwYXJhbXMgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICBwYXJhbXNbX2ldID0gYXJndW1lbnRzW19pXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jbWRzLnB1c2goWydtaXRlckxpbWl0JywgYXJndW1lbnRzXSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgR3JhcGhpY3MucHJvdG90eXBlLnN0cm9rZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgcGFyYW1zID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgcGFyYW1zW19pXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY21kcy5wdXNoKFsnc3Ryb2tlJywgYXJndW1lbnRzXSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgR3JhcGhpY3MucHJvdG90eXBlLm1vdmVUbyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgcGFyYW1zID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgcGFyYW1zW19pXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY21kcy5wdXNoKFsnbW92ZVRvJywgYXJndW1lbnRzXSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgR3JhcGhpY3MucHJvdG90eXBlLmxpbmVUbyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgcGFyYW1zID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgcGFyYW1zW19pXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY21kcy5wdXNoKFsnbGluZVRvJywgYXJndW1lbnRzXSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgR3JhcGhpY3MucHJvdG90eXBlLmJlemllckN1cnZlVG8gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHBhcmFtcyA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgIHBhcmFtc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNtZHMucHVzaChbJ2JlemllckN1cnZlVG8nLCBhcmd1bWVudHNdKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBHcmFwaGljcy5wcm90b3R5cGUucXVhZHJhdGljQ3VydmVUbyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgcGFyYW1zID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgcGFyYW1zW19pXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY21kcy5wdXNoKFsncXVhZHJhdGljQ3VydmVUbycsIGFyZ3VtZW50c10pO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIEdyYXBoaWNzLnByb3RvdHlwZS5jcmVhdGVSYWRpYWxHcmFkaWVudCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgcGFyYW1zID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgcGFyYW1zW19pXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY21kcy5wdXNoKFsnY3JlYXRlUmFkaWFsR3JhZGllbnQnLCBhcmd1bWVudHNdKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBHcmFwaGljcy5wcm90b3R5cGUuY3JlYXRlTGluZWFyR3JhZGllbnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHBhcmFtcyA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgIHBhcmFtc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNtZHMucHVzaChbJ2NyZWF0ZUxpbmVhckdyYWRpZW50JywgYXJndW1lbnRzXSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgR3JhcGhpY3MucHJvdG90eXBlLmFkZENvbG9yU3RvcCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgcGFyYW1zID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgcGFyYW1zW19pXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY21kcy5wdXNoKFsnYWRkQ29sb3JTdG9wJywgYXJndW1lbnRzXSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgR3JhcGhpY3MucHJvdG90eXBlLmZpbGxHcmFkaWVudCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgcGFyYW1zID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgcGFyYW1zW19pXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY21kcy5wdXNoKFsnZmlsbEdyYWRpZW50J10pO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIEdyYXBoaWNzLnByb3RvdHlwZS5hcmNUbyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgcGFyYW1zID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgcGFyYW1zW19pXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY21kcy5wdXNoKFsnYXJjVG8nLCBhcmd1bWVudHNdKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBHcmFwaGljcy5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKGN0eCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5jbWRzLmZvckVhY2goZnVuY3Rpb24gKGNtZCkge1xyXG4gICAgICAgICAgICB2YXIgbWV0aG9kTmFtZSA9IGNtZFswXTtcclxuICAgICAgICAgICAgaWYgKGFzc01hcFttZXRob2ROYW1lXSkge1xyXG4gICAgICAgICAgICAgICAgY3R4W21ldGhvZE5hbWVdID0gY21kWzFdWzBdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKG1ldGhvZE5hbWUgPT09ICdhZGRDb2xvclN0b3AnKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5jdXJyZW50R3JhZGllbnQgJiYgX3RoaXMuY3VycmVudEdyYWRpZW50LmFkZENvbG9yU3RvcChjbWRbMV1bMF0sIGNtZFsxXVsxXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAobWV0aG9kTmFtZSA9PT0gJ2ZpbGxHcmFkaWVudCcpIHtcclxuICAgICAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBfdGhpcy5jdXJyZW50R3JhZGllbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gY3R4W21ldGhvZE5hbWVdLmFwcGx5KGN0eCwgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoY21kWzFdKSk7XHJcbiAgICAgICAgICAgICAgICBpZiAobWV0aG9kTmFtZSA9PT0gJ2NyZWF0ZVJhZGlhbEdyYWRpZW50JyB8fCBtZXRob2ROYW1lID09PSAnY3JlYXRlTGluZWFyR3JhZGllbnQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuY3VycmVudEdyYWRpZW50ID0gcmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEdyYXBoaWNzO1xyXG59KG5vZGVfMS5kZWZhdWx0KSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IEdyYXBoaWNzO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIG5vZGVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9ub2RlXCIpKTtcclxudmFyIEdyb3VwID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKEdyb3VwLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gR3JvdXAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5jaGlsZHJlbiA9IFtdO1xyXG4gICAgICAgIF90aGlzLm1vdXNlQ2hpbGRyZW4gPSB0cnVlO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIEdyb3VwLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgYyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgdmFyIHBhcmVudF8xID0gYy5wYXJlbnQ7XHJcbiAgICAgICAgICAgIGlmIChwYXJlbnRfMSkge1xyXG4gICAgICAgICAgICAgICAgcGFyZW50XzEucmVtb3ZlQ2hpbGRBdChwYXJlbnRfMS5jaGlsZHJlbi5pbmRleE9mKGMpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmNoaWxkcmVuLnB1c2goYyk7XHJcbiAgICAgICAgICAgIGMucGFyZW50ID0gdGhpcztcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgR3JvdXAucHJvdG90eXBlLmFkZENoaWxkQXQgPSBmdW5jdGlvbiAoY2hpbGQsIGluZGV4KSB7XHJcbiAgICAgICAgdmFyIHBhciA9IGNoaWxkLnBhcmVudDtcclxuICAgICAgICBwYXIgJiYgcGFyLnJlbW92ZUNoaWxkQXQocGFyLmNoaWxkcmVuLmluZGV4T2YoY2hpbGQpKTtcclxuICAgICAgICBjaGlsZC5wYXJlbnQgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuY2hpbGRyZW4uc3BsaWNlKGluZGV4LCAwLCBjaGlsZCk7XHJcbiAgICB9O1xyXG4gICAgR3JvdXAucHJvdG90eXBlLnJlbW92ZUNoaWxkQXQgPSBmdW5jdGlvbiAoaW5kZXgpIHtcclxuICAgICAgICB2YXIgY2hpbGQgPSB0aGlzLmNoaWxkcmVuW2luZGV4XTtcclxuICAgICAgICBpZiAoY2hpbGQpIHtcclxuICAgICAgICAgICAgY2hpbGQucGFyZW50ID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jaGlsZHJlbi5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgfTtcclxuICAgIEdyb3VwLnByb3RvdHlwZS5yZXBsYWNlID0gZnVuY3Rpb24gKGN1cnJlbnQsIHByZSkge1xyXG4gICAgICAgIHZhciBpbmRleCA9IHByZS5wYXJlbnQuY2hpbGRyZW4uaW5kZXhPZihwcmUpO1xyXG4gICAgICAgIHRoaXMucmVtb3ZlQ2hpbGRBdChpbmRleCk7XHJcbiAgICAgICAgdGhpcy5hZGRDaGlsZEF0KGN1cnJlbnQsIGluZGV4KTtcclxuICAgIH07XHJcbiAgICBHcm91cC5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gKGNoaWxkKSB7XHJcbiAgICAgICAgaWYgKCFjaGlsZClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIHZhciBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xyXG4gICAgICAgIHZhciBjTGVuID0gdGhpcy5jaGlsZHJlbi5sZW5ndGg7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGNMZW47IGorKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkLmlkID09PSB0aGlzLmNoaWxkcmVuW2pdLmlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQucGFyZW50ID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoaWxkcmVuLnNwbGljZShqLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICBqLS07XHJcbiAgICAgICAgICAgICAgICAgICAgY0xlbi0tO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIEdyb3VwLnByb3RvdHlwZS5lbXB0eSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XHJcbiAgICAgICAgICAgIGNoaWxkLnBhcmVudCA9IG51bGw7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5jaGlsZHJlbi5sZW5ndGggPSAwO1xyXG4gICAgfTtcclxuICAgIEdyb3VwLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuZW1wdHkoKTtcclxuICAgICAgICB0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC5kZXN0cm95KCk7XHJcbiAgICB9O1xyXG4gICAgR3JvdXAucHJvdG90eXBlLl9nZXRPYmplY3RzVW5kZXJQb2ludCA9IGZ1bmN0aW9uICh4LCB5LCBoaXRDdHgpIHtcclxuICAgICAgICB2YXIgY3R4ID0gaGl0Q3R4O1xyXG4gICAgICAgIGlmICghdGhpcy5fdGVzdE1hc2sodGhpcywgeCwgeSwgY3R4KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGNoaWxkcmVuID0gdGhpcy5jaGlsZHJlbjtcclxuICAgICAgICB2YXIgbCA9IGNoaWxkcmVuLmxlbmd0aDtcclxuICAgICAgICBmb3IgKHZhciBpID0gbCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgIHZhciBjaGlsZCA9IGNoaWxkcmVuW2ldO1xyXG4gICAgICAgICAgICB2YXIgaGl0Qm94ID0gY2hpbGQuaGl0Qm94O1xyXG4gICAgICAgICAgICBpZiAoIWNoaWxkLmlzVmlzaWJsZSgpIHx8IGNoaWxkLmlnbm9yZUhpdCkge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCF0aGlzLl90ZXN0TWFzayhjaGlsZCwgeCwgeSwgY3R4KSkge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFoaXRCb3ggJiYgY2hpbGQgaW5zdGFuY2VvZiBHcm91cCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IGNoaWxkLl9nZXRPYmplY3RzVW5kZXJQb2ludCh4LCB5LCBjdHgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdClcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gIXRoaXMubW91c2VDaGlsZHJlbiA/IHRoaXMgOiByZXN1bHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcHJvcHMgPSBjaGlsZC5nZXRDb25jYXRlbmF0ZWREaXNwbGF5UHJvcHMoY2hpbGQuX3Byb3BzKTtcclxuICAgICAgICAgICAgICAgIHZhciBtdHggPSBwcm9wcy5tYXRyaXg7XHJcbiAgICAgICAgICAgICAgICBpZiAoaGl0Qm94KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG10eENsb25lID0gbXR4LmNsb25lKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQuc2V0Qm91bmRzKGhpdEJveFswXSwgaGl0Qm94WzFdLCBoaXRCb3hbMl0sIGhpdEJveFszXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGJvdW5kcyA9IGNoaWxkLl9nZXRCb3VuZHMobXR4Q2xvbmUsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBBQUJCID0gW2JvdW5kcy54LCBib3VuZHMueSwgYm91bmRzLndpZHRoLCBib3VuZHMuaGVpZ2h0XTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuY2hlY2tQb2ludEluQUFCQih4LCB5LCBBQUJCKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoaWxkIGluc3RhbmNlb2YgR3JvdXApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IGNoaWxkLl9nZXRPYmplY3RzVW5kZXJQb2ludCh4LCB5LCBjdHgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gIXRoaXMubW91c2VDaGlsZHJlbiA/IHRoaXMgOiByZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2hpbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjdHguZ2xvYmFsQWxwaGEgPSBwcm9wcy5hbHBoYTtcclxuICAgICAgICAgICAgICAgIGN0eC5zZXRUcmFuc2Zvcm0obXR4LmEsIG10eC5iLCBtdHguYywgbXR4LmQsIG10eC50eCAtIHgsIG10eC50eSAtIHkpO1xyXG4gICAgICAgICAgICAgICAgY2hpbGQucmVuZGVyKGN0eCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuX3Rlc3RIaXQoY3R4KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY3R4LnNldFRyYW5zZm9ybSgxLCAwLCAwLCAxLCAwLCAwKTtcclxuICAgICAgICAgICAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgMiwgMik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gIXRoaXMubW91c2VDaGlsZHJlbiA/IHRoaXMgOiBjaGlsZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH07XHJcbiAgICBHcm91cC5wcm90b3R5cGUuX3Rlc3RNYXNrID0gZnVuY3Rpb24gKHRhcmdldCwgeCwgeSwgaGl0Q3R4KSB7XHJcbiAgICAgICAgdmFyIGN0eCA9IGhpdEN0eDtcclxuICAgICAgICB2YXIgbWFzayA9IHRhcmdldC5tYXNrO1xyXG4gICAgICAgIGlmICghbWFzaykge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIG10eCA9IHRoaXMuX3Byb3BzLm1hdHJpeDtcclxuICAgICAgICB2YXIgcGFyZW50ID0gdGFyZ2V0LnBhcmVudDtcclxuICAgICAgICBtdHggPSBwYXJlbnQgPyBwYXJlbnQuZ2V0Q29uY2F0ZW5hdGVkTWF0cml4KG10eCkgOiBtdHguaWRlbnRpdHkoKTtcclxuICAgICAgICBtdHggPSBtYXNrLmdldE1hdHJpeChtYXNrLl9wcm9wcy5tYXRyaXgpLnByZXBlbmRNYXRyaXgobXR4KTtcclxuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgY3R4LnNldFRyYW5zZm9ybShtdHguYSwgbXR4LmIsIG10eC5jLCBtdHguZCwgbXR4LnR4IC0geCwgbXR4LnR5IC0geSk7XHJcbiAgICAgICAgbWFzay5yZW5kZXIoY3R4KTtcclxuICAgICAgICBjdHguZmlsbFN0eWxlID0gJyMwMDAnO1xyXG4gICAgICAgIGN0eC5maWxsKCk7XHJcbiAgICAgICAgaWYgKCF0aGlzLl90ZXN0SGl0KGN0eCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjdHguc2V0VHJhbnNmb3JtKDEsIDAsIDAsIDEsIDAsIDApO1xyXG4gICAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgMiwgMik7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9O1xyXG4gICAgR3JvdXAucHJvdG90eXBlLl90ZXN0SGl0ID0gZnVuY3Rpb24gKGN0eCkge1xyXG4gICAgICAgIHJldHVybiBjdHguZ2V0SW1hZ2VEYXRhKDAsIDAsIDEsIDEpLmRhdGFbM10gPiAxO1xyXG4gICAgfTtcclxuICAgIEdyb3VwLnByb3RvdHlwZS5jaGVja1BvaW50SW5BQUJCID0gZnVuY3Rpb24gKHgsIHksIEFBQkIpIHtcclxuICAgICAgICB2YXIgbWluWCA9IEFBQkJbMF07XHJcbiAgICAgICAgaWYgKHggPCBtaW5YKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgdmFyIG1pblkgPSBBQUJCWzFdO1xyXG4gICAgICAgIGlmICh5IDwgbWluWSlcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIHZhciBtYXhYID0gbWluWCArIEFBQkJbMl07XHJcbiAgICAgICAgaWYgKHggPiBtYXhYKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgdmFyIG1heFkgPSBtaW5ZICsgQUFCQlszXTtcclxuICAgICAgICBpZiAoeSA+IG1heFkpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gR3JvdXA7XHJcbn0obm9kZV8xLmRlZmF1bHQpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gR3JvdXA7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciB1aWRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vdXRpbHMvdWlkXCIpKTtcclxudmFyIGRpc3BsYXlQcm9wc18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9nZW9tL2Rpc3BsYXlQcm9wc1wiKSk7XHJcbnZhciByZWN0YW5nbGVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vZ2VvbS9yZWN0YW5nbGVcIikpO1xyXG52YXIgbWF0cml4MmRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vZ2VvbS9tYXRyaXgyZFwiKSk7XHJcbnZhciBfZXZlbnRMaXN0ZW5lcnMgPSBTeW1ib2woJ2V2ZW50TGlzdGVuZXJzJyk7XHJcbnZhciBfY2FwdHVyZUV2ZW50TGlzdGVuZXJzID0gU3ltYm9sKCdjYXB0dXJlRXZlbnRMaXN0ZW5lcnMnKTtcclxudmFyIE5vZGUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBOb2RlKCkge1xyXG4gICAgICAgIHRoaXNbX2V2ZW50TGlzdGVuZXJzXSA9IHt9O1xyXG4gICAgICAgIHRoaXNbX2NhcHR1cmVFdmVudExpc3RlbmVyc10gPSB7fTtcclxuICAgICAgICB0aGlzLnBhcmVudCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5pZCA9IHVpZF8xLmRlZmF1bHQuZ2V0KCk7XHJcbiAgICAgICAgdGhpcy54ID0gMDtcclxuICAgICAgICB0aGlzLnkgPSAwO1xyXG4gICAgICAgIHRoaXMuc2NhbGUgPSAxO1xyXG4gICAgICAgIHRoaXMuc2NhbGVYID0gMTtcclxuICAgICAgICB0aGlzLnNjYWxlWSA9IDE7XHJcbiAgICAgICAgdGhpcy5yb3RhdGlvbiA9IDA7XHJcbiAgICAgICAgdGhpcy5za2V3WCA9IDA7XHJcbiAgICAgICAgdGhpcy5za2V3WSA9IDA7XHJcbiAgICAgICAgdGhpcy5yZWdYID0gMDtcclxuICAgICAgICB0aGlzLnJlZ1kgPSAwO1xyXG4gICAgICAgIHRoaXMuYWxwaGEgPSAxO1xyXG4gICAgICAgIHRoaXMudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zaGFkb3cgPSBudWxsO1xyXG4gICAgICAgIHRoaXMubWFzayA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5fcHJvcHMgPSBuZXcgZGlzcGxheVByb3BzXzEuZGVmYXVsdCgpO1xyXG4gICAgICAgIHRoaXMuX3JlY3RhbmdsZSA9IG5ldyByZWN0YW5nbGVfMS5kZWZhdWx0KCk7XHJcbiAgICAgICAgdGhpcy5fYm91bmRzID0gbnVsbDtcclxuICAgICAgICB0aGlzLmNvbXBvc2l0ZU9wZXJhdGlvbiA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5oaXRCb3ggPSBudWxsO1xyXG4gICAgICAgIHRoaXMuaWdub3JlSGl0ID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTm9kZS5wcm90b3R5cGUsIFwic3RhZ2VcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgbyA9IHRoaXM7XHJcbiAgICAgICAgICAgIHdoaWxlIChvLnBhcmVudCkge1xyXG4gICAgICAgICAgICAgICAgbyA9IG8ucGFyZW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChvLl9fX2luc3RhbmNlb2YgPT09ICdTdGFnZScpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbztcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE5vZGUucHJvdG90eXBlLCBcInNjYWxlXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2NhbGVYO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoc2NhbGUpIHtcclxuICAgICAgICAgICAgdGhpcy5zY2FsZVggPSB0aGlzLnNjYWxlWSA9IHNjYWxlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE5vZGUucHJvdG90eXBlLmlzVmlzaWJsZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy52aXNpYmxlICYmIHRoaXMuYWxwaGEgPiAwICYmIHRoaXMuc2NhbGVYICE9PSAwICYmIHRoaXMuc2NhbGVZICE9PSAwO1xyXG4gICAgfTtcclxuICAgIE5vZGUucHJvdG90eXBlLmNsaXAgPSBmdW5jdGlvbiAoZ3JhcGhpY3MpIHtcclxuICAgICAgICB0aGlzLm1hc2sgPSBncmFwaGljcztcclxuICAgIH07XHJcbiAgICBOb2RlLnByb3RvdHlwZS51bmNsaXAgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5tYXNrID0gbnVsbDtcclxuICAgIH07XHJcbiAgICBOb2RlLnByb3RvdHlwZS5zZXRUcmFuc2Zvcm0gPSBmdW5jdGlvbiAoeCwgeSwgc2NhbGVYLCBzY2FsZVksIHJvdGF0aW9uLCBza2V3WCwgc2tld1ksIHJlZ1gsIHJlZ1kpIHtcclxuICAgICAgICB0aGlzLnggPSB4IHx8IDA7XHJcbiAgICAgICAgdGhpcy55ID0geSB8fCAwO1xyXG4gICAgICAgIHRoaXMuc2NhbGVYID0gc2NhbGVYID09IG51bGwgPyAxIDogc2NhbGVYO1xyXG4gICAgICAgIHRoaXMuc2NhbGVZID0gc2NhbGVZID09IG51bGwgPyAxIDogc2NhbGVZO1xyXG4gICAgICAgIHRoaXMucm90YXRpb24gPSByb3RhdGlvbiB8fCAwO1xyXG4gICAgICAgIHRoaXMuc2tld1ggPSBza2V3WCB8fCAwO1xyXG4gICAgICAgIHRoaXMuc2tld1kgPSBza2V3WSB8fCAwO1xyXG4gICAgICAgIHRoaXMucmVnWCA9IHJlZ1ggfHwgMDtcclxuICAgICAgICB0aGlzLnJlZ1kgPSByZWdZIHx8IDA7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgTm9kZS5wcm90b3R5cGUuZ2V0TWF0cml4ID0gZnVuY3Rpb24gKG1hdHJpeCkge1xyXG4gICAgICAgIHZhciBvID0gdGhpcztcclxuICAgICAgICB2YXIgbXR4ID0gbWF0cml4IHx8IG5ldyBtYXRyaXgyZF8xLmRlZmF1bHQoKTtcclxuICAgICAgICByZXR1cm4gKG10eC5pZGVudGl0eSgpICYmXHJcbiAgICAgICAgICAgIG10eC5hcHBlbmRUcmFuc2Zvcm0oby54LCBvLnksIG8uc2NhbGVYLCBvLnNjYWxlWSwgby5yb3RhdGlvbiwgby5za2V3WCwgby5za2V3WSwgby5yZWdYLCBvLnJlZ1kpKTtcclxuICAgIH07XHJcbiAgICBOb2RlLnByb3RvdHlwZS5nZXRDb25jYXRlbmF0ZWRNYXRyaXggPSBmdW5jdGlvbiAobWF0cml4KSB7XHJcbiAgICAgICAgdmFyIG8gPSB0aGlzO1xyXG4gICAgICAgIHZhciBtdHggPSB0aGlzLmdldE1hdHJpeChtYXRyaXgpO1xyXG4gICAgICAgIHdoaWxlICgobyA9IG8ucGFyZW50KSkge1xyXG4gICAgICAgICAgICBtdHgucHJlcGVuZE1hdHJpeChvLmdldE1hdHJpeChvLl9wcm9wcy5tYXRyaXgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG10eDtcclxuICAgIH07XHJcbiAgICBOb2RlLnByb3RvdHlwZS5nZXRDb25jYXRlbmF0ZWREaXNwbGF5UHJvcHMgPSBmdW5jdGlvbiAocHJvcHMpIHtcclxuICAgICAgICBwcm9wcyA9IHByb3BzID8gcHJvcHMuaWRlbnRpdHkoKSA6IG5ldyBkaXNwbGF5UHJvcHNfMS5kZWZhdWx0KCk7XHJcbiAgICAgICAgdmFyIG8gPSB0aGlzO1xyXG4gICAgICAgIHZhciBtdHggPSBvLmdldE1hdHJpeChwcm9wcy5tYXRyaXgpO1xyXG4gICAgICAgIGRvIHtcclxuICAgICAgICAgICAgcHJvcHMucHJlcGVuZChvLnZpc2libGUsIG8uYWxwaGEsIG8uc2hhZG93LCBvLmNvbXBvc2l0ZU9wZXJhdGlvbik7XHJcbiAgICAgICAgICAgIGlmIChvICE9IHRoaXMpIHtcclxuICAgICAgICAgICAgICAgIG10eC5wcmVwZW5kTWF0cml4KG8uZ2V0TWF0cml4KG8uX3Byb3BzLm1hdHJpeCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSB3aGlsZSAoKG8gPSBvLnBhcmVudCkpO1xyXG4gICAgICAgIHJldHVybiBwcm9wcztcclxuICAgIH07XHJcbiAgICBOb2RlLnByb3RvdHlwZS5nZXRCb3VuZHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2JvdW5kcykge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVjdGFuZ2xlLmNvcHkodGhpcy5fYm91bmRzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9O1xyXG4gICAgTm9kZS5wcm90b3R5cGUuc2V0Qm91bmRzID0gZnVuY3Rpb24gKHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcclxuICAgICAgICBpZiAoeCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLl9ib3VuZHMgPSB4O1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2JvdW5kcyA9ICh0aGlzLl9ib3VuZHMgfHwgbmV3IHJlY3RhbmdsZV8xLmRlZmF1bHQoKSkuc2V0VmFsdWVzKHgsIHksIHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgfTtcclxuICAgIE5vZGUucHJvdG90eXBlLmdldFRyYW5zZm9ybWVkQm91bmRzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRCb3VuZHMoKTtcclxuICAgIH07XHJcbiAgICBOb2RlLnByb3RvdHlwZS5fZ2V0Qm91bmRzID0gZnVuY3Rpb24gKG1hdHJpeCwgaWdub3JlVHJhbnNmb3JtKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RyYW5zZm9ybUJvdW5kcyh0aGlzLmdldEJvdW5kcygpLCBtYXRyaXgsIGlnbm9yZVRyYW5zZm9ybSk7XHJcbiAgICB9O1xyXG4gICAgTm9kZS5wcm90b3R5cGUuX3RyYW5zZm9ybUJvdW5kcyA9IGZ1bmN0aW9uIChib3VuZHMsIG1hdHJpeCwgaWdub3JlVHJhbnNmb3JtKSB7XHJcbiAgICAgICAgaWYgKCFib3VuZHMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGJvdW5kcztcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHggPSBib3VuZHMueCwgeSA9IGJvdW5kcy55LCB3aWR0aCA9IGJvdW5kcy53aWR0aCwgaGVpZ2h0ID0gYm91bmRzLmhlaWdodCwgbXR4ID0gdGhpcy5fcHJvcHMubWF0cml4O1xyXG4gICAgICAgIG10eCA9IGlnbm9yZVRyYW5zZm9ybSA/IG10eC5pZGVudGl0eSgpIDogdGhpcy5nZXRNYXRyaXgobXR4KTtcclxuICAgICAgICBpZiAoeCB8fCB5KSB7XHJcbiAgICAgICAgICAgIG10eC5hcHBlbmRUcmFuc2Zvcm0oMCwgMCwgMSwgMSwgMCwgMCwgMCwgLXgsIC15KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG1hdHJpeCkge1xyXG4gICAgICAgICAgICBtdHgucHJlcGVuZE1hdHJpeChtYXRyaXgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgeF9hID0gd2lkdGggKiBtdHguYSwgeF9iID0gd2lkdGggKiBtdHguYjtcclxuICAgICAgICB2YXIgeV9jID0gaGVpZ2h0ICogbXR4LmMsIHlfZCA9IGhlaWdodCAqIG10eC5kO1xyXG4gICAgICAgIHZhciB0eCA9IG10eC50eCwgdHkgPSBtdHgudHk7XHJcbiAgICAgICAgdmFyIG1pblggPSB0eCwgbWF4WCA9IHR4LCBtaW5ZID0gdHksIG1heFkgPSB0eTtcclxuICAgICAgICBpZiAoKHggPSB4X2EgKyB0eCkgPCBtaW5YKSB7XHJcbiAgICAgICAgICAgIG1pblggPSB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh4ID4gbWF4WCkge1xyXG4gICAgICAgICAgICBtYXhYID0geDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCh4ID0geF9hICsgeV9jICsgdHgpIDwgbWluWCkge1xyXG4gICAgICAgICAgICBtaW5YID0geDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoeCA+IG1heFgpIHtcclxuICAgICAgICAgICAgbWF4WCA9IHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICgoeCA9IHlfYyArIHR4KSA8IG1pblgpIHtcclxuICAgICAgICAgICAgbWluWCA9IHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHggPiBtYXhYKSB7XHJcbiAgICAgICAgICAgIG1heFggPSB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoKHkgPSB4X2IgKyB0eSkgPCBtaW5ZKSB7XHJcbiAgICAgICAgICAgIG1pblkgPSB5O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh5ID4gbWF4WSkge1xyXG4gICAgICAgICAgICBtYXhZID0geTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCh5ID0geF9iICsgeV9kICsgdHkpIDwgbWluWSkge1xyXG4gICAgICAgICAgICBtaW5ZID0geTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoeSA+IG1heFkpIHtcclxuICAgICAgICAgICAgbWF4WSA9IHk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICgoeSA9IHlfZCArIHR5KSA8IG1pblkpIHtcclxuICAgICAgICAgICAgbWluWSA9IHk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHkgPiBtYXhZKSB7XHJcbiAgICAgICAgICAgIG1heFkgPSB5O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYm91bmRzLnNldFZhbHVlcyhtaW5YLCBtaW5ZLCBtYXhYIC0gbWluWCwgbWF4WSAtIG1pblkpO1xyXG4gICAgfTtcclxuICAgIE5vZGUucHJvdG90eXBlLm9uID0gZnVuY3Rpb24gKHR5cGUsIGxpc3RlbmVyLCBvcHRpb25zKSB7XHJcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyLCBvcHRpb25zKTtcclxuICAgIH07XHJcbiAgICBOb2RlLnByb3RvdHlwZS5vZmYgPSBmdW5jdGlvbiAodHlwZSwgbGlzdGVuZXIsIG9wdGlvbnMpIHtcclxuICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIsIG9wdGlvbnMpO1xyXG4gICAgfTtcclxuICAgIE5vZGUucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbiAodHlwZSwgbGlzdGVuZXIsIG9wdGlvbnMpIHtcclxuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdib29sZWFuJylcclxuICAgICAgICAgICAgb3B0aW9ucyA9IHsgY2FwdHVyZTogb3B0aW9ucyB9O1xyXG4gICAgICAgIHZhciBfYSA9IG9wdGlvbnMgfHwge30sIGNhcHR1cmUgPSBfYS5jYXB0dXJlLCBvbmNlID0gX2Eub25jZTtcclxuICAgICAgICB2YXIgZXZlbnRMaXN0ZW5lcnMgPSBjYXB0dXJlID8gX2NhcHR1cmVFdmVudExpc3RlbmVycyA6IF9ldmVudExpc3RlbmVycztcclxuICAgICAgICB0aGlzW2V2ZW50TGlzdGVuZXJzXVt0eXBlXSA9IHRoaXNbZXZlbnRMaXN0ZW5lcnNdW3R5cGVdIHx8IFtdO1xyXG4gICAgICAgIHRoaXNbZXZlbnRMaXN0ZW5lcnNdW3R5cGVdLnB1c2goeyBsaXN0ZW5lcjogbGlzdGVuZXIsIG9uY2U6IG9uY2UgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgTm9kZS5wcm90b3R5cGUucmVtb3ZlRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uICh0eXBlLCBsaXN0ZW5lciwgb3B0aW9ucykge1xyXG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ2Jvb2xlYW4nKVxyXG4gICAgICAgICAgICBvcHRpb25zID0geyBjYXB0dXJlOiBvcHRpb25zIH07XHJcbiAgICAgICAgdmFyIGNhcHR1cmUgPSAob3B0aW9ucyB8fCB7fSkuY2FwdHVyZTtcclxuICAgICAgICB2YXIgZXZlbnRMaXN0ZW5lcnMgPSBjYXB0dXJlID8gX2NhcHR1cmVFdmVudExpc3RlbmVycyA6IF9ldmVudExpc3RlbmVycztcclxuICAgICAgICBpZiAodGhpc1tldmVudExpc3RlbmVyc11bdHlwZV0pIHtcclxuICAgICAgICAgICAgdmFyIGxpc3RlbmVycyA9IHRoaXNbZXZlbnRMaXN0ZW5lcnNdW3R5cGVdO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3RlbmVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIF9saXN0ZW5lciA9IGxpc3RlbmVyc1tpXS5saXN0ZW5lcjtcclxuICAgICAgICAgICAgICAgIGlmIChsaXN0ZW5lciA9PT0gX2xpc3RlbmVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpc1tldmVudExpc3RlbmVyc11bdHlwZV0uc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIE5vZGUucHJvdG90eXBlLmRpc3BhdGNoRXZlbnQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIGV2ZW50LnRhcmdldCA9IHRoaXM7XHJcbiAgICAgICAgdmFyIHR5cGUgPSBldmVudC50eXBlO1xyXG4gICAgICAgIHZhciBlbGVtZW50cyA9IFt0aGlzXTtcclxuICAgICAgICB2YXIgcGFyZW50ID0gdGhpcy5wYXJlbnQ7XHJcbiAgICAgICAgd2hpbGUgKGV2ZW50LmJ1YmJsZXMgJiYgcGFyZW50KSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnRzLnB1c2gocGFyZW50KTtcclxuICAgICAgICAgICAgcGFyZW50ID0gcGFyZW50LnBhcmVudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIF9sb29wXzEgPSBmdW5jdGlvbiAoaSkge1xyXG4gICAgICAgICAgICB2YXIgZWxlbWVudCA9IGVsZW1lbnRzW2ldO1xyXG4gICAgICAgICAgICB2YXIgbGlzdGVuZXJzID0gZWxlbWVudFtfY2FwdHVyZUV2ZW50TGlzdGVuZXJzXSAmJiBlbGVtZW50W19jYXB0dXJlRXZlbnRMaXN0ZW5lcnNdW3R5cGVdO1xyXG4gICAgICAgICAgICBpZiAobGlzdGVuZXJzICYmIGxpc3RlbmVycy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGxpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBsaXN0ZW5lciA9IF9hLmxpc3RlbmVyLCBvbmNlID0gX2Eub25jZTtcclxuICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lci5jYWxsKF90aGlzLCBldmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9uY2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LnR5cGUsIGxpc3RlbmVyLCB7IGNhcHR1cmU6IHRydWUgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFldmVudC5idWJibGVzICYmIGV2ZW50LmNhbmNlbEJ1YmJsZSlcclxuICAgICAgICAgICAgICAgIHJldHVybiBcImJyZWFrXCI7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLyBjYXB0dXJlIHBoYXNlXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IGVsZW1lbnRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgIHZhciBzdGF0ZV8xID0gX2xvb3BfMShpKTtcclxuICAgICAgICAgICAgaWYgKHN0YXRlXzEgPT09IFwiYnJlYWtcIilcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBidWJibGluZ1xyXG4gICAgICAgIGlmICghZXZlbnQuY2FuY2VsQnViYmxlKSB7XHJcbiAgICAgICAgICAgIHZhciBfbG9vcF8yID0gZnVuY3Rpb24gKGkpIHtcclxuICAgICAgICAgICAgICAgIHZhciBlbGVtZW50ID0gZWxlbWVudHNbaV07XHJcbiAgICAgICAgICAgICAgICB2YXIgbGlzdGVuZXJzID0gZWxlbWVudFtfZXZlbnRMaXN0ZW5lcnNdICYmIGVsZW1lbnRbX2V2ZW50TGlzdGVuZXJzXVt0eXBlXTtcclxuICAgICAgICAgICAgICAgIGlmIChsaXN0ZW5lcnMgJiYgbGlzdGVuZXJzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbGlzdGVuZXIgPSBfYS5saXN0ZW5lciwgb25jZSA9IF9hLm9uY2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RlbmVyLmNhbGwoX3RoaXMsIGV2ZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9uY2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudC50eXBlLCBsaXN0ZW5lciwgeyBjYXB0dXJlOiBmYWxzZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKCFldmVudC5idWJibGVzIHx8IGV2ZW50LmNhbmNlbEJ1YmJsZSlcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJicmVha1wiO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc3RhdGVfMiA9IF9sb29wXzIoaSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhdGVfMiA9PT0gXCJicmVha1wiKVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBOb2RlO1xyXG59KCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBOb2RlO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIHNoYXBlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vc2hhcGVcIikpO1xyXG52YXIgQXJyb3dQYXRoID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKEFycm93UGF0aCwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIEFycm93UGF0aChwYXRoLCBvcHRpb24pIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLnBhdGggPSBwYXRoO1xyXG4gICAgICAgIF90aGlzLm9wdGlvbiA9IE9iamVjdC5hc3NpZ24oe1xyXG4gICAgICAgICAgICBzdHJva2VTdHlsZTogJ2JsYWNrJyxcclxuICAgICAgICAgICAgbGluZVdpZHRoOiAxLFxyXG4gICAgICAgICAgICBoZWFkU2l6ZTogMTBcclxuICAgICAgICB9LCBvcHRpb24pO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIEFycm93UGF0aC5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgcGF0aCA9IHRoaXMucGF0aDtcclxuICAgICAgICB0aGlzLmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIHZhciBsZW4gPSBwYXRoLmxlbmd0aDtcclxuICAgICAgICBpZiAobGVuID09PSAyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZHJhd0Fycm93KHBhdGhbMF0ueCwgcGF0aFswXS55LCBwYXRoWzFdLngsIHBhdGhbMV0ueSwgMzApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5tb3ZlVG8ocGF0aFswXS54LCBwYXRoWzBdLnkpO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGxlbiAtIDE7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5saW5lVG8ocGF0aFtpXS54LCBwYXRoW2ldLnkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuZHJhd0Fycm93KHBhdGhbbGVuIC0gMl0ueCwgcGF0aFtsZW4gLSAyXS55LCBwYXRoW2xlbiAtIDFdLngsIHBhdGhbbGVuIC0gMV0ueSwgMzApO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnN0cm9rZSgpO1xyXG4gICAgfTtcclxuICAgIEFycm93UGF0aC5wcm90b3R5cGUuZHJhd0Fycm93ID0gZnVuY3Rpb24gKGZyb21YLCBmcm9tWSwgdG9YLCB0b1ksIHRoZXRhKSB7XHJcbiAgICAgICAgdmFyIGFuZ2xlID0gKE1hdGguYXRhbjIoZnJvbVkgLSB0b1ksIGZyb21YIC0gdG9YKSAqIDE4MCkgLyBNYXRoLlBJLCBhbmdsZTEgPSAoKGFuZ2xlICsgdGhldGEpICogTWF0aC5QSSkgLyAxODAsIGFuZ2xlMiA9ICgoYW5nbGUgLSB0aGV0YSkgKiBNYXRoLlBJKSAvIDE4MCwgaHMgPSB0aGlzLm9wdGlvbi5oZWFkU2l6ZSwgdG9wWCA9IGhzICogTWF0aC5jb3MoYW5nbGUxKSwgdG9wWSA9IGhzICogTWF0aC5zaW4oYW5nbGUxKSwgYm90WCA9IGhzICogTWF0aC5jb3MoYW5nbGUyKSwgYm90WSA9IGhzICogTWF0aC5zaW4oYW5nbGUyKTtcclxuICAgICAgICB2YXIgYXJyb3dYID0gZnJvbVggLSB0b3BYLCBhcnJvd1kgPSBmcm9tWSAtIHRvcFk7XHJcbiAgICAgICAgdGhpcy5tb3ZlVG8oYXJyb3dYLCBhcnJvd1kpO1xyXG4gICAgICAgIHRoaXMubW92ZVRvKGZyb21YLCBmcm9tWSk7XHJcbiAgICAgICAgdGhpcy5saW5lVG8odG9YLCB0b1kpO1xyXG4gICAgICAgIGFycm93WCA9IHRvWCArIHRvcFg7XHJcbiAgICAgICAgYXJyb3dZID0gdG9ZICsgdG9wWTtcclxuICAgICAgICB0aGlzLm1vdmVUbyhhcnJvd1gsIGFycm93WSk7XHJcbiAgICAgICAgdGhpcy5saW5lVG8odG9YLCB0b1kpO1xyXG4gICAgICAgIGFycm93WCA9IHRvWCArIGJvdFg7XHJcbiAgICAgICAgYXJyb3dZID0gdG9ZICsgYm90WTtcclxuICAgICAgICB0aGlzLmxpbmVUbyhhcnJvd1gsIGFycm93WSk7XHJcbiAgICAgICAgdGhpcy5zdHJva2VTdHlsZSh0aGlzLm9wdGlvbi5zdHJva2VTdHlsZSk7XHJcbiAgICAgICAgdGhpcy5saW5lV2lkdGgodGhpcy5vcHRpb24ubGluZVdpZHRoKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gQXJyb3dQYXRoO1xyXG59KHNoYXBlXzEuZGVmYXVsdCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBBcnJvd1BhdGg7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgc2hhcGVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9zaGFwZVwiKSk7XHJcbnZhciBDaXJjbGUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoQ2lyY2xlLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gQ2lyY2xlKHIsIG9wdGlvbikge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMub3B0aW9uID0gb3B0aW9uIHx8IHt9O1xyXG4gICAgICAgIF90aGlzLnIgPSByO1xyXG4gICAgICAgIF90aGlzLl9kcCA9IE1hdGguUEkgKiAyO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIENpcmNsZS5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIHRoaXMuYXJjKDAsIDAsIHRoaXMuciwgMCwgdGhpcy5fZHAsIGZhbHNlKTtcclxuICAgICAgICBpZiAodGhpcy5vcHRpb24uc3Ryb2tlU3R5bGUpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9uLmxpbmVXaWR0aCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxpbmVXaWR0aCh0aGlzLm9wdGlvbi5saW5lV2lkdGgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc3Ryb2tlU3R5bGUodGhpcy5vcHRpb24uc3Ryb2tlU3R5bGUpO1xyXG4gICAgICAgICAgICB0aGlzLnN0cm9rZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5vcHRpb24uZmlsbFN0eWxlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsbFN0eWxlKHRoaXMub3B0aW9uLmZpbGxTdHlsZSk7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gQ2lyY2xlO1xyXG59KHNoYXBlXzEuZGVmYXVsdCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBDaXJjbGU7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgc2hhcGVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9zaGFwZVwiKSk7XHJcbnZhciBFbGxpcHNlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKEVsbGlwc2UsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBFbGxpcHNlKHdpZHRoLCBoZWlnaHQsIG9wdGlvbikge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMub3B0aW9uID0gb3B0aW9uIHx8IHt9O1xyXG4gICAgICAgIF90aGlzLndpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgX3RoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIEVsbGlwc2UucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHcgPSB0aGlzLndpZHRoO1xyXG4gICAgICAgIHZhciBoID0gdGhpcy5oZWlnaHQ7XHJcbiAgICAgICAgdmFyIGsgPSAwLjU1MjI4NDg7XHJcbiAgICAgICAgdmFyIG94ID0gKHcgLyAyKSAqIGs7XHJcbiAgICAgICAgdmFyIG95ID0gKGggLyAyKSAqIGs7XHJcbiAgICAgICAgdmFyIHhlID0gdztcclxuICAgICAgICB2YXIgeWUgPSBoO1xyXG4gICAgICAgIHZhciB4bSA9IHcgLyAyO1xyXG4gICAgICAgIHZhciB5bSA9IGggLyAyO1xyXG4gICAgICAgIHRoaXMuYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgdGhpcy5tb3ZlVG8oMCwgeW0pO1xyXG4gICAgICAgIHRoaXMuYmV6aWVyQ3VydmVUbygwLCB5bSAtIG95LCB4bSAtIG94LCAwLCB4bSwgMCk7XHJcbiAgICAgICAgdGhpcy5iZXppZXJDdXJ2ZVRvKHhtICsgb3gsIDAsIHhlLCB5bSAtIG95LCB4ZSwgeW0pO1xyXG4gICAgICAgIHRoaXMuYmV6aWVyQ3VydmVUbyh4ZSwgeW0gKyBveSwgeG0gKyBveCwgeWUsIHhtLCB5ZSk7XHJcbiAgICAgICAgdGhpcy5iZXppZXJDdXJ2ZVRvKHhtIC0gb3gsIHllLCAwLCB5bSArIG95LCAwLCB5bSk7XHJcbiAgICAgICAgaWYgKHRoaXMub3B0aW9uLnN0cm9rZVN0eWxlKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbi5saW5lV2lkdGggIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5saW5lV2lkdGgodGhpcy5vcHRpb24ubGluZVdpZHRoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnN0cm9rZVN0eWxlKHRoaXMub3B0aW9uLnN0cm9rZVN0eWxlKTtcclxuICAgICAgICAgICAgdGhpcy5zdHJva2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMub3B0aW9uLmZpbGxTdHlsZSkge1xyXG4gICAgICAgICAgICB0aGlzLmZpbGxTdHlsZSh0aGlzLm9wdGlvbi5maWxsU3R5bGUpO1xyXG4gICAgICAgICAgICB0aGlzLmZpbGwoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEVsbGlwc2U7XHJcbn0oc2hhcGVfMS5kZWZhdWx0KSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IEVsbGlwc2U7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgc2hhcGVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9zaGFwZVwiKSk7XHJcbnZhciBFcXVpbGF0ZXJhbFBvbHlnb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoRXF1aWxhdGVyYWxQb2x5Z29uLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gRXF1aWxhdGVyYWxQb2x5Z29uKG51bSwgciwgb3B0aW9ucykge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMubnVtID0gbnVtO1xyXG4gICAgICAgIF90aGlzLnIgPSByO1xyXG4gICAgICAgIF90aGlzLm9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xyXG4gICAgICAgIF90aGlzLnZlcnRleCA9IFtdO1xyXG4gICAgICAgIF90aGlzLmluaXRWZXJ0ZXgoKTtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICBFcXVpbGF0ZXJhbFBvbHlnb24ucHJvdG90eXBlLmluaXRWZXJ0ZXggPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy52ZXJ0ZXgubGVuZ3RoID0gW107XHJcbiAgICAgICAgdmFyIG51bSA9IHRoaXMubnVtO1xyXG4gICAgICAgIHZhciByID0gdGhpcy5yO1xyXG4gICAgICAgIHZhciBpLCBzdGFydFgsIHN0YXJ0WSwgbmV3WCwgbmV3WTtcclxuICAgICAgICBpZiAobnVtICUgMiA9PT0gMCkge1xyXG4gICAgICAgICAgICBzdGFydFggPSByICogTWF0aC5jb3MoKDIgKiBNYXRoLlBJICogMCkgLyBudW0pO1xyXG4gICAgICAgICAgICBzdGFydFkgPSByICogTWF0aC5zaW4oKDIgKiBNYXRoLlBJICogMCkgLyBudW0pO1xyXG4gICAgICAgICAgICB0aGlzLnZlcnRleC5wdXNoKFtzdGFydFgsIHN0YXJ0WV0pO1xyXG4gICAgICAgICAgICBmb3IgKGkgPSAxOyBpIDwgbnVtOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIG5ld1ggPSByICogTWF0aC5jb3MoKDIgKiBNYXRoLlBJICogaSkgLyBudW0pO1xyXG4gICAgICAgICAgICAgICAgbmV3WSA9IHIgKiBNYXRoLnNpbigoMiAqIE1hdGguUEkgKiBpKSAvIG51bSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZlcnRleC5wdXNoKFtuZXdYLCBuZXdZXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHN0YXJ0WCA9IHIgKiBNYXRoLmNvcygoMiAqIE1hdGguUEkgKiAwKSAvIG51bSAtIE1hdGguUEkgLyAyKTtcclxuICAgICAgICAgICAgc3RhcnRZID0gciAqIE1hdGguc2luKCgyICogTWF0aC5QSSAqIDApIC8gbnVtIC0gTWF0aC5QSSAvIDIpO1xyXG4gICAgICAgICAgICB0aGlzLnZlcnRleC5wdXNoKFtzdGFydFgsIHN0YXJ0WV0pO1xyXG4gICAgICAgICAgICBmb3IgKGkgPSAxOyBpIDwgbnVtOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIG5ld1ggPSByICogTWF0aC5jb3MoKDIgKiBNYXRoLlBJICogaSkgLyBudW0gLSBNYXRoLlBJIC8gMik7XHJcbiAgICAgICAgICAgICAgICBuZXdZID0gciAqIE1hdGguc2luKCgyICogTWF0aC5QSSAqIGkpIC8gbnVtIC0gTWF0aC5QSSAvIDIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy52ZXJ0ZXgucHVzaChbbmV3WCwgbmV3WV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIEVxdWlsYXRlcmFsUG9seWdvbi5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIHRoaXMubW92ZVRvKHRoaXMudmVydGV4WzBdWzBdLCB0aGlzLnZlcnRleFswXVsxXSk7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDEsIGxlbiA9IHRoaXMudmVydGV4Lmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGluZVRvKHRoaXMudmVydGV4W2ldWzBdLCB0aGlzLnZlcnRleFtpXVsxXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2xvc2VQYXRoKCk7XHJcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5maWxsU3R5bGUpIHtcclxuICAgICAgICAgICAgdGhpcy5maWxsU3R5bGUodGhpcy5vcHRpb25zLmZpbGxTdHlsZSk7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsbCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnN0cm9rZVN0eWxlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3Ryb2tlU3R5bGUodGhpcy5vcHRpb25zLnN0cm9rZVN0eWxlKTtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMubGluZVdpZHRoID09PSAnbnVtYmVyJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5saW5lV2lkdGgodGhpcy5vcHRpb25zLmxpbmVXaWR0aCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5zdHJva2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEVxdWlsYXRlcmFsUG9seWdvbjtcclxufShzaGFwZV8xLmRlZmF1bHQpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gRXF1aWxhdGVyYWxQb2x5Z29uO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIHNoYXBlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vc2hhcGVcIikpO1xyXG52YXIgUG9seWdvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhQb2x5Z29uLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gUG9seWdvbih2ZXJ0ZXgsIG9wdGlvbnMpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLnZlcnRleCA9IHZlcnRleCB8fCBbXTtcclxuICAgICAgICBfdGhpcy5vcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuICAgICAgICBfdGhpcy5zdHJva2VDb2xvciA9IF90aGlzLm9wdGlvbnMuc3Ryb2tlQ29sb3I7XHJcbiAgICAgICAgX3RoaXMuZmlsbENvbG9yID0gX3RoaXMub3B0aW9ucy5maWxsQ29sb3I7XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgUG9seWdvbi5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmNsZWFyKCkuYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgdGhpcy5zdHJva2VTdHlsZSh0aGlzLnN0cm9rZUNvbG9yKTtcclxuICAgICAgICB0aGlzLm1vdmVUbyh0aGlzLnZlcnRleFswXVswXSwgdGhpcy52ZXJ0ZXhbMF1bMV0pO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAxLCBsZW4gPSB0aGlzLnZlcnRleC5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLmxpbmVUbyh0aGlzLnZlcnRleFtpXVswXSwgdGhpcy52ZXJ0ZXhbaV1bMV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNsb3NlUGF0aCgpO1xyXG4gICAgICAgIC8vIOi3r+W+hOmXreWQiFxyXG4gICAgICAgIC8vICBpZiAodGhpcy5vcHRpb25zLnN0cm9rZVN0eWxlKSB7XHJcbiAgICAgICAgLy8gICAgdGhpcy5zdHJva2VTdHlsZSA9IHN0cm9rZVN0eWxlO1xyXG4gICAgICAgIC8vIHRoaXMubGluZVdpZHRoKHRoaXMub3B0aW9ucy53aWR0aCk7XHJcbiAgICAgICAgLy8gdGhpcy5saW5lSm9pbigncm91bmQnKTtcclxuICAgICAgICAvLyB0aGlzLnN0cm9rZSgpO1xyXG4gICAgICAgIC8vICB9XHJcbiAgICAgICAgaWYgKHRoaXMuc3Ryb2tlQ29sb3IpIHtcclxuICAgICAgICAgICAgdGhpcy5zdHJva2VTdHlsZSh0aGlzLnN0cm9rZUNvbG9yKTtcclxuICAgICAgICAgICAgdGhpcy5zdHJva2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuZmlsbENvbG9yKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsbFN0eWxlKHRoaXMuZmlsbENvbG9yKTtcclxuICAgICAgICAgICAgdGhpcy5maWxsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBQb2x5Z29uO1xyXG59KHNoYXBlXzEuZGVmYXVsdCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBQb2x5Z29uO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIHNoYXBlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vc2hhcGVcIikpO1xyXG52YXIgUmVjdCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhSZWN0LCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gUmVjdCh3aWR0aCwgaGVpZ2h0LCBvcHRpb24pIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLndpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgX3RoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgICAgIF90aGlzLm9wdGlvbiA9IG9wdGlvbiB8fCB7fTtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICBSZWN0LnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbi5maWxsU3R5bGUpIHtcclxuICAgICAgICAgICAgdGhpcy5maWxsU3R5bGUodGhpcy5vcHRpb24uZmlsbFN0eWxlKTtcclxuICAgICAgICAgICAgdGhpcy5maWxsUmVjdCgwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbi5zdHJva2VTdHlsZSkge1xyXG4gICAgICAgICAgICB0aGlzLnN0cm9rZVN0eWxlKHRoaXMub3B0aW9uLnN0cm9rZVN0eWxlKTtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbi5saW5lV2lkdGggPT09ICdudW1iZXInKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxpbmVXaWR0aCh0aGlzLm9wdGlvbi5saW5lV2lkdGgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc3Ryb2tlUmVjdCgwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBSZWN0O1xyXG59KHNoYXBlXzEuZGVmYXVsdCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBSZWN0O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIHNoYXBlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vc2hhcGVcIikpO1xyXG52YXIgUm91bmRlZFJlY3QgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoUm91bmRlZFJlY3QsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBSb3VuZGVkUmVjdCh3aWR0aCwgaGVpZ2h0LCByLCBvcHRpb24pIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLm9wdGlvbiA9IE9iamVjdC5hc3NpZ24oe1xyXG4gICAgICAgICAgICBsaW5lV2lkdGg6IDEsXHJcbiAgICAgICAgICAgIGx0OiB0cnVlLFxyXG4gICAgICAgICAgICBydDogdHJ1ZSxcclxuICAgICAgICAgICAgbGI6IHRydWUsXHJcbiAgICAgICAgICAgIHJiOiB0cnVlXHJcbiAgICAgICAgfSwgb3B0aW9uKTtcclxuICAgICAgICBfdGhpcy5yID0gciB8fCAwO1xyXG4gICAgICAgIF90aGlzLndpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgX3RoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIFJvdW5kZWRSZWN0LnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciB3aWR0aCA9IHRoaXMud2lkdGgsIGhlaWdodCA9IHRoaXMuaGVpZ2h0LCByID0gdGhpcy5yO1xyXG4gICAgICAgIHZhciBheCA9IHIsIGF5ID0gMCwgYnggPSB3aWR0aCwgYnkgPSAwLCBjeCA9IHdpZHRoLCBjeSA9IGhlaWdodCwgZHggPSAwLCBkeSA9IGhlaWdodCwgZXggPSAwLCBleSA9IDA7XHJcbiAgICAgICAgdGhpcy5iZWdpblBhdGgoKTtcclxuICAgICAgICB0aGlzLm1vdmVUbyhheCwgYXkpO1xyXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbi5ydCkge1xyXG4gICAgICAgICAgICB0aGlzLmFyY1RvKGJ4LCBieSwgY3gsIGN5LCByKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubGluZVRvKGJ4LCBieSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbi5yYikge1xyXG4gICAgICAgICAgICB0aGlzLmFyY1RvKGN4LCBjeSwgZHgsIGR5LCByKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubGluZVRvKGN4LCBjeSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbi5sYikge1xyXG4gICAgICAgICAgICB0aGlzLmFyY1RvKGR4LCBkeSwgZXgsIGV5LCByKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubGluZVRvKGR4LCBkeSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbi5sdCkge1xyXG4gICAgICAgICAgICB0aGlzLmFyY1RvKGV4LCBleSwgYXgsIGF5LCByKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubGluZVRvKGV4LCBleSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbi5maWxsU3R5bGUpIHtcclxuICAgICAgICAgICAgdGhpcy5jbG9zZVBhdGgoKTtcclxuICAgICAgICAgICAgdGhpcy5maWxsU3R5bGUodGhpcy5vcHRpb24uZmlsbFN0eWxlKTtcclxuICAgICAgICAgICAgdGhpcy5maWxsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbi5zdHJva2VTdHlsZSkge1xyXG4gICAgICAgICAgICB0aGlzLmxpbmVXaWR0aCh0aGlzLm9wdGlvbi5saW5lV2lkdGgpO1xyXG4gICAgICAgICAgICB0aGlzLnN0cm9rZVN0eWxlKHRoaXMub3B0aW9uLnN0cm9rZVN0eWxlKTtcclxuICAgICAgICAgICAgdGhpcy5zdHJva2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFJvdW5kZWRSZWN0O1xyXG59KHNoYXBlXzEuZGVmYXVsdCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBSb3VuZGVkUmVjdDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBzaGFwZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL3NoYXBlXCIpKTtcclxudmFyIFNlY3RvciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhTZWN0b3IsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBTZWN0b3IociwgZnJvbSwgdG8sIG9wdGlvbikge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMub3B0aW9uID0gb3B0aW9uIHx8IHt9O1xyXG4gICAgICAgIF90aGlzLnIgPSByO1xyXG4gICAgICAgIF90aGlzLmZyb20gPSBmcm9tO1xyXG4gICAgICAgIF90aGlzLnRvID0gdG87XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgU2VjdG9yLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuYmVnaW5QYXRoKClcclxuICAgICAgICAgICAgLm1vdmVUbygwLCAwKVxyXG4gICAgICAgICAgICAuYXJjKDAsIDAsIHRoaXMuciwgdGhpcy5mcm9tLCB0aGlzLnRvKVxyXG4gICAgICAgICAgICAuY2xvc2VQYXRoKClcclxuICAgICAgICAgICAgLmZpbGxTdHlsZSh0aGlzLm9wdGlvbi5maWxsU3R5bGUpXHJcbiAgICAgICAgICAgIC5maWxsKClcclxuICAgICAgICAgICAgLnN0cm9rZVN0eWxlKHRoaXMub3B0aW9uLnN0cm9rZVN0eWxlKVxyXG4gICAgICAgICAgICAubGluZVdpZHRoKHRoaXMub3B0aW9uLmxpbmVXaWR0aClcclxuICAgICAgICAgICAgLnN0cm9rZSgpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBTZWN0b3I7XHJcbn0oc2hhcGVfMS5kZWZhdWx0KSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IFNlY3RvcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBncmFwaGljc18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9ncmFwaGljc1wiKSk7XHJcbnZhciBTaGFwZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhTaGFwZSwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIFNoYXBlKCkge1xyXG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcclxuICAgIH1cclxuICAgIFNoYXBlLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24gKCkgeyB9O1xyXG4gICAgU2hhcGUucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIChjdHgpIHtcclxuICAgICAgICB0aGlzLmNsZWFyKCk7XHJcbiAgICAgICAgdGhpcy5kcmF3KCk7XHJcbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5yZW5kZXIuY2FsbCh0aGlzLCBjdHgpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBTaGFwZTtcclxufShncmFwaGljc18xLmRlZmF1bHQpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gU2hhcGU7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgZ3JvdXBfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9ncm91cFwiKSk7XHJcbnZhciBpbmRleF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9yZW5kZXIvaW5kZXhcIikpO1xyXG52YXIgZXZlbnRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vZXZlbnQvZXZlbnRcIikpO1xyXG52YXIgU3RhZ2UgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoU3RhZ2UsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBTdGFnZShjb250YWluZXIsIHdpZHRoLCBoZWlnaHQpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcclxuICAgICAgICBfdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgICAgIF90aGlzLmhlaWdodCA9IGhlaWdodDtcclxuICAgICAgICB2YXIgY3R4ID0gY29udGFpbmVyLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgIHZhciBkcHIgPSB3eC5nZXRTeXN0ZW1JbmZvU3luYygpLnBpeGVsUmF0aW87XHJcbiAgICAgICAgY29udGFpbmVyLndpZHRoID0gd2lkdGggKiBkcHI7XHJcbiAgICAgICAgY29udGFpbmVyLmhlaWdodCA9IGhlaWdodCAqIGRwcjtcclxuICAgICAgICBjdHguc2NhbGUoZHByLCBkcHIpO1xyXG4gICAgICAgIF90aGlzLmRwciA9IGRwcjtcclxuICAgICAgICBfdGhpcy5jdHggPSBjdHg7XHJcbiAgICAgICAgX3RoaXMucmVuZGVyID0gbmV3IGluZGV4XzEuZGVmYXVsdChjdHgsIGNvbnRhaW5lci53aWR0aCwgY29udGFpbmVyLmhlaWdodCk7XHJcbiAgICAgICAgX3RoaXMuaGl0Q3R4ID0gbnVsbDtcclxuICAgICAgICBfdGhpcy50b3VjaE9iamVjdCA9IG51bGw7XHJcbiAgICAgICAgX3RoaXMuX19faW5zdGFuY2VvZiA9ICdTdGFnZSc7XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgU3RhZ2UucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnJlbmRlci51cGRhdGUodGhpcyk7XHJcbiAgICB9O1xyXG4gICAgU3RhZ2UucHJvdG90eXBlLnNldEhpdENhbnZhcyA9IGZ1bmN0aW9uIChoaXRDYW52YXMpIHtcclxuICAgICAgICB2YXIgaGl0Q3R4ID0gaGl0Q2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgICAgaGl0Q2FudmFzLndpZHRoID0gdGhpcy53aWR0aDtcclxuICAgICAgICBoaXRDYW52YXMuaGVpZ2h0ID0gdGhpcy5oZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5oaXRDdHggPSBoaXRDdHg7XHJcbiAgICB9O1xyXG4gICAgU3RhZ2UucHJvdG90eXBlLmdldFRleHRXaWR0aCA9IGZ1bmN0aW9uICh0ZXh0LCBmb250KSB7XHJcbiAgICAgICAgdGhpcy5jdHguZm9udCA9IGZvbnQ7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY3R4Lm1lYXN1cmVUZXh0KHRleHQpLndpZHRoO1xyXG4gICAgfTtcclxuICAgIFN0YWdlLnByb3RvdHlwZS5sb2FkSW1hZ2UgPSBmdW5jdGlvbiAodXJsKSB7XHJcbiAgICAgICAgdmFyIGNhbnZhcyA9IHRoaXMuY29udGFpbmVyO1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgICAgIHZhciBpbWFnZSA9IGNhbnZhcy5jcmVhdGVJbWFnZSgpO1xyXG4gICAgICAgICAgICBpbWFnZS5zcmMgPSB1cmw7XHJcbiAgICAgICAgICAgIGltYWdlLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoaW1hZ2UpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBpbWFnZS5vbmVycm9yID0gZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIFN0YWdlLnByb3RvdHlwZS50b3VjaFN0YXJ0SGFuZGxlciA9IGZ1bmN0aW9uIChldnQpIHtcclxuICAgICAgICB2YXIgcDEgPSBldnQudG91Y2hlc1swXTtcclxuICAgICAgICBldnQuc3RhZ2VYID0gTWF0aC5yb3VuZChwMS54KTtcclxuICAgICAgICBldnQuc3RhZ2VZID0gTWF0aC5yb3VuZChwMS55KTtcclxuICAgICAgICB2YXIgb2JqID0gdGhpcy5nZXRPYmplY3RVbmRlclBvaW50KGV2dCk7XHJcbiAgICAgICAgdGhpcy50b3VjaE9iamVjdCA9IG9iajtcclxuICAgICAgICB0aGlzLl9tb3VzZURvd25YID0gZXZ0LnN0YWdlWDtcclxuICAgICAgICB0aGlzLl9tb3VzZURvd25ZID0gZXZ0LnN0YWdlWTtcclxuICAgICAgICB0aGlzLnByZVN0YWdlWCA9IGV2dC5zdGFnZVg7XHJcbiAgICAgICAgdGhpcy5wcmVTdGFnZVkgPSBldnQuc3RhZ2VZO1xyXG4gICAgICAgIHRoaXMuX19kaXNwYXRjaEV2ZW50KG9iaiwgZXZ0KTtcclxuICAgIH07XHJcbiAgICBTdGFnZS5wcm90b3R5cGUudG91Y2hNb3ZlSGFuZGxlciA9IGZ1bmN0aW9uIChldnQpIHtcclxuICAgICAgICB2YXIgcDEgPSBldnQudG91Y2hlc1swXTtcclxuICAgICAgICB2YXIgdG91Y2hlc0xlbmd0aCA9IGV2dC50b3VjaGVzLmxlbmd0aDtcclxuICAgICAgICBldnQuc3RhZ2VYID0gTWF0aC5yb3VuZChwMS54KTtcclxuICAgICAgICBldnQuc3RhZ2VZID0gTWF0aC5yb3VuZChwMS55KTtcclxuICAgICAgICB2YXIgbW9ja0V2dCA9IG5ldyBldmVudF8xLmRlZmF1bHQoKTtcclxuICAgICAgICBtb2NrRXZ0LnN0YWdlWCA9IGV2dC5zdGFnZVg7XHJcbiAgICAgICAgbW9ja0V2dC5zdGFnZVkgPSBldnQuc3RhZ2VZO1xyXG4gICAgICAgIG1vY2tFdnQub3JpZ2luYWxFdmVudCA9IGV2dDtcclxuICAgICAgICBpZiAodGhpcy50b3VjaE9iamVjdCAmJiB0b3VjaGVzTGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgIG1vY2tFdnQudHlwZSA9ICdkcmFnJztcclxuICAgICAgICAgICAgbW9ja0V2dC5keCA9IG1vY2tFdnQuc3RhZ2VYIC0gdGhpcy5wcmVTdGFnZVg7XHJcbiAgICAgICAgICAgIG1vY2tFdnQuZHkgPSBtb2NrRXZ0LnN0YWdlWSAtIHRoaXMucHJlU3RhZ2VZO1xyXG4gICAgICAgICAgICB0aGlzLnByZVN0YWdlWCA9IG1vY2tFdnQuc3RhZ2VYO1xyXG4gICAgICAgICAgICB0aGlzLnByZVN0YWdlWSA9IG1vY2tFdnQuc3RhZ2VZO1xyXG4gICAgICAgICAgICB0aGlzLnRvdWNoT2JqZWN0LmRpc3BhdGNoRXZlbnQobW9ja0V2dCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX19kaXNwYXRjaEV2ZW50KHRoaXMudG91Y2hPYmplY3QsIGV2dCk7XHJcbiAgICB9O1xyXG4gICAgU3RhZ2UucHJvdG90eXBlLnRvdWNoRW5kSGFuZGxlciA9IGZ1bmN0aW9uIChldnQpIHtcclxuICAgICAgICB2YXIgcDEgPSBldnQuY2hhbmdlZFRvdWNoZXNbMF07XHJcbiAgICAgICAgZXZ0LnN0YWdlWCA9IE1hdGgucm91bmQocDEueCk7XHJcbiAgICAgICAgZXZ0LnN0YWdlWSA9IE1hdGgucm91bmQocDEueSk7XHJcbiAgICAgICAgdmFyIG9iaiA9IHRoaXMuZ2V0T2JqZWN0VW5kZXJQb2ludChldnQpO1xyXG4gICAgICAgIHRoaXMuX21vdXNlVXBYID0gZXZ0LnN0YWdlWDtcclxuICAgICAgICB0aGlzLl9tb3VzZVVwWSA9IGV2dC5zdGFnZVk7XHJcbiAgICAgICAgdGhpcy5fX2Rpc3BhdGNoRXZlbnQodGhpcy50b3VjaE9iamVjdCwgZXZ0KTtcclxuICAgICAgICB0aGlzLnRvdWNoT2JqZWN0ID0gbnVsbDtcclxuICAgICAgICB0aGlzLnByZVN0YWdlWCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5wcmVTdGFnZVkgPSBudWxsO1xyXG4gICAgICAgIGlmIChvYmogJiZcclxuICAgICAgICAgICAgTWF0aC5hYnModGhpcy5fbW91c2VEb3duWCAtIHRoaXMuX21vdXNlVXBYKSA8IDEwICYmXHJcbiAgICAgICAgICAgIE1hdGguYWJzKHRoaXMuX21vdXNlRG93blkgLSB0aGlzLl9tb3VzZVVwWSkgPCAxMCkge1xyXG4gICAgICAgICAgICB2YXIgbW9ja0V2dCA9IG5ldyBldmVudF8xLmRlZmF1bHQoKTtcclxuICAgICAgICAgICAgbW9ja0V2dC5zdGFnZVggPSBldnQuc3RhZ2VYO1xyXG4gICAgICAgICAgICBtb2NrRXZ0LnN0YWdlWSA9IGV2dC5zdGFnZVk7XHJcbiAgICAgICAgICAgIG1vY2tFdnQub3JpZ2luYWxFdmVudCA9IGV2dDtcclxuICAgICAgICAgICAgbW9ja0V2dC50eXBlID0gJ3RhcCc7XHJcbiAgICAgICAgICAgIG9iai5kaXNwYXRjaEV2ZW50KG1vY2tFdnQpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBTdGFnZS5wcm90b3R5cGUuZ2V0T2JqZWN0VW5kZXJQb2ludCA9IGZ1bmN0aW9uIChldnQpIHtcclxuICAgICAgICB2YXIgeCA9IGV2dC5zdGFnZVg7XHJcbiAgICAgICAgdmFyIHkgPSBldnQuc3RhZ2VZO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRPYmplY3RzVW5kZXJQb2ludCh4LCB5LCB0aGlzLmhpdEN0eCkgfHwgdGhpcztcclxuICAgIH07XHJcbiAgICBTdGFnZS5wcm90b3R5cGUuX19kaXNwYXRjaEV2ZW50ID0gZnVuY3Rpb24gKG9iaiwgZXZ0KSB7XHJcbiAgICAgICAgaWYgKCFvYmopXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB2YXIgbW9ja0V2dCA9IG5ldyBldmVudF8xLmRlZmF1bHQoKTtcclxuICAgICAgICBtb2NrRXZ0LnN0YWdlWCA9IGV2dC5zdGFnZVg7XHJcbiAgICAgICAgbW9ja0V2dC5zdGFnZVkgPSBldnQuc3RhZ2VZO1xyXG4gICAgICAgIG1vY2tFdnQub3JpZ2luYWxFdmVudCA9IGV2dDtcclxuICAgICAgICBtb2NrRXZ0LnR5cGUgPSBldnQudHlwZTtcclxuICAgICAgICBvYmouZGlzcGF0Y2hFdmVudChtb2NrRXZ0KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gU3RhZ2U7XHJcbn0oZ3JvdXBfMS5kZWZhdWx0KSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IFN0YWdlO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIG5vZGVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9ub2RlXCIpKTtcclxudmFyIFRleHQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoVGV4dCwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIFRleHQodGV4dCwgb3B0aW9uKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy50ZXh0ID0gdGV4dDtcclxuICAgICAgICBvcHRpb24gPSBvcHRpb24gfHwge307XHJcbiAgICAgICAgX3RoaXMuZm9udCA9IG9wdGlvbi5mb250IHx8ICcxMHB4IHNhbnMtc2VyaWYnO1xyXG4gICAgICAgIF90aGlzLmNvbG9yID0gb3B0aW9uLmNvbG9yIHx8ICdibGFjayc7XHJcbiAgICAgICAgX3RoaXMudGV4dEFsaWduID0gb3B0aW9uLnRleHRBbGlnbiB8fCAnbGVmdCc7XHJcbiAgICAgICAgX3RoaXMuYmFzZWxpbmUgPSBvcHRpb24uYmFzZWxpbmUgfHwgJ3RvcCc7XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgVGV4dC5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKGN0eCkge1xyXG4gICAgICAgIGN0eC5mb250ID0gdGhpcy5mb250O1xyXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xyXG4gICAgICAgIGN0eC50ZXh0QWxpZ24gPSB0aGlzLnRleHRBbGlnbjtcclxuICAgICAgICBjdHgudGV4dEJhc2VsaW5lID0gdGhpcy5iYXNlbGluZTtcclxuICAgICAgICBjdHguZmlsbFRleHQodGhpcy50ZXh0LCAwLCAwKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gVGV4dDtcclxufShub2RlXzEuZGVmYXVsdCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBUZXh0O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgZ3JvdXBfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vbm9kZS9ncm91cFwiKSk7XHJcbnZhciBSZW5kZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBSZW5kZXIoY3R4LCB3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgfVxyXG4gICAgUmVuZGVyLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoc3RhZ2UpIHtcclxuICAgICAgICB0aGlzLmNsZWFyKHRoaXMuY3R4LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXIodGhpcy5jdHgsIHN0YWdlKTtcclxuICAgIH07XHJcbiAgICBSZW5kZXIucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gKGN0eCwgd2lkdGgsIGhlaWdodCkge1xyXG4gICAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgd2lkdGgsIGhlaWdodCk7XHJcbiAgICB9O1xyXG4gICAgUmVuZGVyLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoY3R4LCBvKSB7XHJcbiAgICAgICAgdmFyIG10eCA9IG8uX3Byb3BzLm1hdHJpeDtcclxuICAgICAgICBvLmdldE1hdHJpeChtdHgpO1xyXG4gICAgICAgIGlmIChvLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgIHZhciBsaXN0ID0gby5jaGlsZHJlbi5zbGljZSgwKTtcclxuICAgICAgICAgICAgdmFyIGwgPSBsaXN0Lmxlbmd0aDtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHZhciBjaGlsZCA9IGxpc3RbaV07XHJcbiAgICAgICAgICAgICAgICBpZiAoIWNoaWxkLmlzVmlzaWJsZSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjdHguc2F2ZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyKGN0eCwgY2hpbGQsIG10eCk7XHJcbiAgICAgICAgICAgICAgICBjdHgucmVzdG9yZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9yZW5kZXIoY3R4LCBvLCBtdHgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBSZW5kZXIucHJvdG90eXBlLl9yZW5kZXIgPSBmdW5jdGlvbiAoY3R4LCBvLCBtdHgpIHtcclxuICAgICAgICB2YXIgbWFzayA9IG8ubWFzaztcclxuICAgICAgICBpZiAobXR4KSB7XHJcbiAgICAgICAgICAgIGN0eC50cmFuc2Zvcm0obXR4LmEsIG10eC5iLCBtdHguYywgbXR4LmQsIG10eC50eCwgbXR4LnR5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbXR4ID0gby5fcHJvcHMubWF0cml4O1xyXG4gICAgICAgIGlmIChtYXNrKSB7XHJcbiAgICAgICAgICAgIG1hc2suZ2V0TWF0cml4KG10eCk7XHJcbiAgICAgICAgICAgIGN0eC50cmFuc2Zvcm0obXR4LmEsIG10eC5iLCBtdHguYywgbXR4LmQsIG10eC50eCwgbXR4LnR5KTtcclxuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgICAgICBtYXNrLnJlbmRlcihjdHgpO1xyXG4gICAgICAgICAgICBjdHguY2xpcCgpO1xyXG4gICAgICAgICAgICBtdHguaW52ZXJ0KCk7XHJcbiAgICAgICAgICAgIGN0eC50cmFuc2Zvcm0obXR4LmEsIG10eC5iLCBtdHguYywgbXR4LmQsIG10eC50eCwgbXR4LnR5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgby5nZXRNYXRyaXgobXR4KTtcclxuICAgICAgICBjdHgudHJhbnNmb3JtKG10eC5hLCBtdHguYiwgbXR4LmMsIG10eC5kLCBtdHgudHgsIG10eC50eSk7XHJcbiAgICAgICAgdmFyIHByb3BzID0gby5nZXRDb25jYXRlbmF0ZWREaXNwbGF5UHJvcHMoby5fcHJvcHMpO1xyXG4gICAgICAgIG10eCA9IHByb3BzLm1hdHJpeDtcclxuICAgICAgICBjdHguZ2xvYmFsQWxwaGEgKj0gby5fcHJvcHMuYWxwaGE7XHJcbiAgICAgICAgaWYgKG8uY29tcG9zaXRlT3BlcmF0aW9uKSB7XHJcbiAgICAgICAgICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSBvLmNvbXBvc2l0ZU9wZXJhdGlvbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG8uc2hhZG93KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2FwcGx5U2hhZG93KGN0eCwgby5zaGFkb3cpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobyBpbnN0YW5jZW9mIGdyb3VwXzEuZGVmYXVsdCkge1xyXG4gICAgICAgICAgICB2YXIgbGlzdCA9IG8uY2hpbGRyZW4uc2xpY2UoMCk7XHJcbiAgICAgICAgICAgIHZhciBsID0gbGlzdC5sZW5ndGg7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjdHguc2F2ZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyKGN0eCwgbGlzdFtpXSk7XHJcbiAgICAgICAgICAgICAgICBjdHgucmVzdG9yZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBvLnJlbmRlcihjdHgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBSZW5kZXIucHJvdG90eXBlLl9hcHBseVNoYWRvdyA9IGZ1bmN0aW9uIChjdHgsIHNoYWRvdykge1xyXG4gICAgICAgIHNoYWRvdyA9IHNoYWRvdztcclxuICAgICAgICBjdHguc2hhZG93Q29sb3IgPSBzaGFkb3cuY29sb3I7XHJcbiAgICAgICAgY3R4LnNoYWRvd09mZnNldFggPSBzaGFkb3cub2Zmc2V0WDtcclxuICAgICAgICBjdHguc2hhZG93T2Zmc2V0WSA9IHNoYWRvdy5vZmZzZXRZO1xyXG4gICAgICAgIGN0eC5zaGFkb3dCbHVyID0gc2hhZG93LmJsdXI7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFJlbmRlcjtcclxufSgpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gUmVuZGVyO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgVUlEID0ge1xyXG4gICAgX25leHRJRDogMCxcclxuICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBVSUQuX25leHRJRCsrO1xyXG4gICAgfVxyXG59O1xyXG5leHBvcnRzLmRlZmF1bHQgPSBVSUQ7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMubG9hZEltYWdlID0gdm9pZCAwO1xyXG5mdW5jdGlvbiBsb2FkSW1hZ2UodXJsLCBjYW52YXMpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgdmFyIGltYWdlID0gY2FudmFzLmNyZWF0ZUltYWdlKCk7XHJcbiAgICAgICAgaW1hZ2Uuc3JjID0gdXJsO1xyXG4gICAgICAgIGltYWdlLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmVzb2x2ZShpbWFnZSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBpbWFnZS5vbmVycm9yID0gZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAgIHJlamVjdChlcnJvcik7XHJcbiAgICAgICAgfTtcclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydHMubG9hZEltYWdlID0gbG9hZEltYWdlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9