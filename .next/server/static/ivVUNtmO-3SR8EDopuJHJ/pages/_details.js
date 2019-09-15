module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/+oN":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("8OZ8");


/***/ }),

/***/ "0iUn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "8OZ8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__("0iUn");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js
var createClass = __webpack_require__("sLSF");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__("MI3g");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("a7VT");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js
var inherits = __webpack_require__("Tit0");

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__("HJQg");
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// CONCATENATED MODULE: ./components/block.js









var block_Block =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["default"])(Block, _React$Component);

  function Block() {
    Object(classCallCheck["default"])(this, Block);

    return Object(possibleConstructorReturn["default"])(this, Object(getPrototypeOf["default"])(Block).apply(this, arguments));
  }

  Object(createClass["default"])(Block, [{
    key: "render",
    value: function render() {
      var blockClasses = external_classnames_default()('block', this.props.className);
      return external_react_default.a.createElement("div", {
        href: this.props.linkTo,
        className: "jsx-1219784326" + " " + (blockClasses || "")
      }, external_react_default.a.createElement("h6", {
        className: "jsx-1219784326"
      }, this.props.blockTitle), external_react_default.a.createElement("div", {
        className: "jsx-1219784326"
      }, this.props.children), external_react_default.a.createElement(style_default.a, {
        id: "1219784326"
      }, [".block.jsx-1219784326{margin-bottom:32px;}", ".block.jsx-1219784326:last-child{margin-bottom:0;}", "@media (min-width:992px){.block.jsx-1219784326{max-width:90%;}}"]));
    }
  }]);

  return Block;
}(external_react_default.a.Component);

/* harmony default export */ var block = (block_Block);
// CONCATENATED MODULE: ./components/list.js









var list_List =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["default"])(List, _React$Component);

  function List() {
    Object(classCallCheck["default"])(this, List);

    return Object(possibleConstructorReturn["default"])(this, Object(getPrototypeOf["default"])(List).apply(this, arguments));
  }

  Object(createClass["default"])(List, [{
    key: "render",
    value: function render() {
      var listClasses = external_classnames_default()('list', this.props.className);
      return external_react_default.a.createElement("ul", {
        className: "jsx-167231214" + " " + (listClasses || "")
      }, this.props.children, external_react_default.a.createElement(style_default.a, {
        id: "167231214"
      }, [".list.jsx-167231214{list-style:none;margin:4px 0;padding:0;}"]));
    }
  }]);

  return List;
}(external_react_default.a.Component);

list_List.Item =
/*#__PURE__*/
function (_React$Component2) {
  Object(inherits["default"])(List, _React$Component2);

  function List() {
    Object(classCallCheck["default"])(this, List);

    return Object(possibleConstructorReturn["default"])(this, Object(getPrototypeOf["default"])(List).apply(this, arguments));
  }

  Object(createClass["default"])(List, [{
    key: "render",
    value: function render() {
      var itemClasses = external_classnames_default()('item', this.props.className);
      return external_react_default.a.createElement("li", {
        className: "jsx-3444295585" + " " + (itemClasses || "")
      }, this.props.children, external_react_default.a.createElement(style_default.a, {
        id: "3444295585"
      }, [".list-item.jsx-3444295585:before{content:'';}"]));
    }
  }]);

  return List;
}(external_react_default.a.Component);

/* harmony default export */ var list = (list_List);
// CONCATENATED MODULE: ./components/link.js









var link_Link =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["default"])(Link, _React$Component);

  function Link() {
    Object(classCallCheck["default"])(this, Link);

    return Object(possibleConstructorReturn["default"])(this, Object(getPrototypeOf["default"])(Link).apply(this, arguments));
  }

  Object(createClass["default"])(Link, [{
    key: "render",
    value: function render() {
      var linkClasses = external_classnames_default()('link', this.props.className);
      return external_react_default.a.createElement("a", {
        href: this.props.linkTo,
        target: "_blank",
        className: "jsx-1670624372" + " " + (linkClasses || "")
      }, this.props.children, " >", external_react_default.a.createElement(style_default.a, {
        id: "1670624372"
      }, [".link.jsx-1670624372{-webkit-text-decoration:none;text-decoration:none;font-weight:400;color:var(--color-green-medium);}"]));
    }
  }]);

  return Link;
}(external_react_default.a.Component);

/* harmony default export */ var components_link = (link_Link);
// CONCATENATED MODULE: ./pages/_details.js












var _details_Details =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["default"])(Details, _React$Component);

  function Details() {
    Object(classCallCheck["default"])(this, Details);

    return Object(possibleConstructorReturn["default"])(this, Object(getPrototypeOf["default"])(Details).apply(this, arguments));
  }

  Object(createClass["default"])(Details, [{
    key: "renderTravel",
    value: function renderTravel() {
      return external_react_default.a.createElement("div", {
        id: "travel",
        className: "jsx-3950715653" + " " + 'details-travel'
      }, external_react_default.a.createElement("h3", {
        className: "jsx-3950715653"
      }, "Travel"), external_react_default.a.createElement(block, {
        blockTitle: "Location"
      }, "1 West Blithedale Avenue, Mill Valley CA 94941", external_react_default.a.createElement(list, null, external_react_default.a.createElement(list.Item, null, external_react_default.a.createElement(components_link, {
        linkTo: "https://goo.gl/maps/j939V7DoxNk18MA19"
      }, "Get Directions")))), external_react_default.a.createElement(block, {
        blockTitle: "Parking & Transportation"
      }, "The venue doesn't have it's own parking but there is an outdoor lot one block away. It's only a 3-5 minute walk. If you're extra lazy we can arrange a pedicab. Kidding. They don't have pedicabs in Mill Valley.", external_react_default.a.createElement(list, null, external_react_default.a.createElement(list.Item, null, external_react_default.a.createElement(components_link, {
        linkTo: "https://goo.gl/maps/umZszdRDe5SbM7mk7"
      }, "Get Directions")))), external_react_default.a.createElement(block, {
        blockTitle: "Accomodations"
      }, "If you're coming in from out of town, we recommend staying in San Francisco or Mill Valley. Treat yo self.", external_react_default.a.createElement(list, null, external_react_default.a.createElement(list.Item, null, external_react_default.a.createElement(components_link, {
        linkTo: "https://www.airbnb.com/s/Mill-Valley--CA"
      }, "Browse Airbnb")))), external_react_default.a.createElement(style_default.a, {
        id: "3950715653"
      }, [".details-travel.jsx-3950715653{padding-top:24px;padding-bottom:24px;}", ".details-travel.jsx-3950715653 h3.jsx-3950715653{margin-bottom:24px;}"]));
    }
  }, {
    key: "renderRegistry",
    value: function renderRegistry() {
      return external_react_default.a.createElement("div", {
        id: "registry",
        className: "jsx-3177864525" + " " + 'details-registry'
      }, external_react_default.a.createElement("h3", {
        className: "jsx-3177864525"
      }, "Registry"), external_react_default.a.createElement(block, {
        blockTitle: "Online"
      }, external_react_default.a.createElement(list, null, external_react_default.a.createElement(list.Item, null, external_react_default.a.createElement(components_link, {
        linkTo: "https://www.zola.com/registry/derekanddora"
      }, "Zola")))), external_react_default.a.createElement(style_default.a, {
        id: "3177864525"
      }, [".details-registry.jsx-3177864525{padding-top:24px;padding-bottom:24px;}", ".details-registry.jsx-3177864525 h3.jsx-3177864525{margin-bottom:24px;}"]));
    }
  }, {
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", {
        className: "jsx-3767120851" + " " + 'details'
      }, this.renderRegistry(), this.renderTravel(), external_react_default.a.createElement(style_default.a, {
        id: "3767120851"
      }, [".details.jsx-3767120851{grid-area:details;}"]));
    }
  }]);

  return Details;
}(external_react_default.a.Component);

/* harmony default export */ var _details = __webpack_exports__["default"] = (_details_Details);

/***/ }),

/***/ "AT/M":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "Bhuq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/+oN");

/***/ }),

/***/ "HJQg":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "K2gz":
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "MI3g":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js
var iterator = __webpack_require__("XVgq");
var iterator_default = /*#__PURE__*/__webpack_require__.n(iterator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol.js
var symbol = __webpack_require__("Z7t5");
var symbol_default = /*#__PURE__*/__webpack_require__.n(symbol);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js



function typeof_typeof2(obj) { if (typeof symbol_default.a === "function" && typeof iterator_default.a === "symbol") { typeof_typeof2 = function _typeof2(obj) { return typeof obj; }; } else { typeof_typeof2 = function _typeof2(obj) { return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof obj; }; } return typeof_typeof2(obj); }

function typeof_typeof(obj) {
  if (typeof symbol_default.a === "function" && typeof_typeof2(iterator_default.a) === "symbol") {
    typeof_typeof = function _typeof(obj) {
      return typeof_typeof2(obj);
    };
  } else {
    typeof_typeof = function _typeof(obj) {
      return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof_typeof2(obj);
    };
  }

  return typeof_typeof(obj);
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("AT/M");

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });


function _possibleConstructorReturn(self, call) {
  if (call && (typeof_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(assertThisInitialized["a" /* default */])(self);
}

/***/ }),

/***/ "SqZg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("o5io");

/***/ }),

/***/ "TRZx":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Wk4r");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "Tit0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("SqZg");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("VLay");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(subClass, superClass);
}

/***/ }),

/***/ "VLay":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("TRZx");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "Wk4r":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "XVgq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("gHn/");

/***/ }),

/***/ "Z7t5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("vqFK");

/***/ }),

/***/ "a7VT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Bhuq");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("TRZx");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "gHn/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "sLSF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "vqFK":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ })

/******/ });