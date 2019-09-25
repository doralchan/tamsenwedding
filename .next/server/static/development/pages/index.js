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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/banner.js":
/*!******************************!*\
  !*** ./components/banner.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);





var _jsxFileName = "/Users/dorachan/workspace/tamsenwedding/components/banner.js";





var Banner =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Banner, _React$Component);

  function Banner() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Banner);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Banner).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Banner, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-2896186336" + " " + 'banner',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        },
        __self: this
      }, "Yay! We'll see your lovely faces soon.", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "2896186336",
        __self: this
      }, ".banner.jsx-2896186336{background-color:var(--color-green-light);color:var(--color-green-dark);padding:10px 16px;border-radius:4px;margin-top:24px;margin-bottom:40px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kb3JhY2hhbi93b3Jrc3BhY2UvdGFtc2Vud2VkZGluZy9jb21wb25lbnRzL2Jhbm5lci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRb0IsQUFHdUQsMENBQ1osOEJBQ1osa0JBQ0Esa0JBQ0YsZ0JBQ0csbUJBQ3JCIiwiZmlsZSI6Ii9Vc2Vycy9kb3JhY2hhbi93b3Jrc3BhY2UvdGFtc2Vud2VkZGluZy9jb21wb25lbnRzL2Jhbm5lci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuY2xhc3MgQmFubmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nYmFubmVyJz5cbiAgICAgICAgWWF5ISBXZSdsbCBzZWUgeW91ciBsb3ZlbHkgZmFjZXMgc29vbi5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5iYW5uZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZ3JlZW4tbGlnaHQpO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLWdyZWVuLWRhcmspO1xuICAgICAgICAgICAgcGFkZGluZzogMTBweCAxNnB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjRweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFubmVyXG4iXX0= */\n/*@ sourceURL=/Users/dorachan/workspace/tamsenwedding/components/banner.js */"));
    }
  }]);

  return Banner;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Banner);

/***/ }),

/***/ "./components/block.js":
/*!*****************************!*\
  !*** ./components/block.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);






var _jsxFileName = "/Users/dorachan/workspace/tamsenwedding/components/block.js";





var Block =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Block, _React$Component);

  function Block() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Block);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Block).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Block, [{
    key: "render",
    value: function render() {
      var blockClasses = classnames__WEBPACK_IMPORTED_MODULE_9___default()('block', this.props.className);
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        href: this.props.linkTo,
        className: "jsx-1219784326" + " " + (blockClasses || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h6", {
        className: "jsx-1219784326",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, this.props.blockTitle), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-1219784326",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, this.props.children), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "1219784326",
        __self: this
      }, ".block.jsx-1219784326{margin-bottom:32px;}.block.jsx-1219784326:last-child{margin-bottom:0;}@media (min-width:992px){.block.jsx-1219784326{max-width:90%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kb3JhY2hhbi93b3Jrc3BhY2UvdGFtc2Vud2VkZGluZy9jb21wb25lbnRzL2Jsb2NrLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlCb0IsQUFHZ0MsQUFHSCxBQUtBLGNBQ2hCLEVBTEYsR0FIQSIsImZpbGUiOiIvVXNlcnMvZG9yYWNoYW4vd29ya3NwYWNlL3RhbXNlbndlZGRpbmcvY29tcG9uZW50cy9ibG9jay5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuY2xhc3MgQmxvY2sgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBibG9ja1RpdGxlOiBQcm9wVHlwZXMuc3RyaW5nXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgYmxvY2tDbGFzc2VzID0gY2xhc3NOYW1lcygnYmxvY2snLCB0aGlzLnByb3BzLmNsYXNzTmFtZSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBocmVmPXsgdGhpcy5wcm9wcy5saW5rVG8gfSBjbGFzc05hbWU9eyBibG9ja0NsYXNzZXMgfSA+XG4gICAgICAgIDxoNj57IHRoaXMucHJvcHMuYmxvY2tUaXRsZX08L2g2PlxuICAgICAgICA8ZGl2PnsgdGhpcy5wcm9wcy5jaGlsZHJlbiB9PC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuYmxvY2sge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzJweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmJsb2NrOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgICAgICAgICAgIC5ibG9jayB7XG4gICAgICAgICAgICAgIG1heC13aWR0aDogOTAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmxvY2tcbiJdfQ== */\n/*@ sourceURL=/Users/dorachan/workspace/tamsenwedding/components/block.js */"));
    }
  }]);

  return Block;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(Block, "propTypes", {
  children: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.node.isRequired,
  className: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  blockTitle: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string
});

/* harmony default export */ __webpack_exports__["default"] = (Block);

/***/ }),

/***/ "./components/button.js":
/*!******************************!*\
  !*** ./components/button.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);






var _jsxFileName = "/Users/dorachan/workspace/tamsenwedding/components/button.js";





var Button =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Button, _React$Component);

  function Button() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Button);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Button).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Button, [{
    key: "render",
    value: function render() {
      var btnClasses = classnames__WEBPACK_IMPORTED_MODULE_9___default()('btn', 'btn-' + this.props.btnType, this.props.className);
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        type: "submit",
        className: "jsx-1416180930" + " " + (btnClasses || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, this.props.cta, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "1416180930",
        __self: this
      }, ".btn.jsx-1416180930{height:60px;font-family:inherit;font-weight:600;text-transform:uppercase;-webkit-letter-spacing:0.1em;-moz-letter-spacing:0.1em;-ms-letter-spacing:0.1em;letter-spacing:0.1em;border:0;text-rendering:optimizeLegibility;font-size:0.9em;min-width:200px;}.btn.jsx-1416180930:focus{outline:none;}.btn.jsx-1416180930:hover{cursor:pointer;}.btn-primary.jsx-1416180930{background-color:var(--color-black);color:var(--color-white);}.btn-secondary.jsx-1416180930{background-color:var(--color-white);color:var(--color-green-dark);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kb3JhY2hhbi93b3Jrc3BhY2UvdGFtc2Vud2VkZGluZy9jb21wb25lbnRzL2J1dHRvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3Qm9CLEFBR3lCLEFBV0MsQUFHRSxBQUdxQixBQUlBLFlBcEJoQixDQVd0QixFQUdBLGlCQWJrQixJQWdCUyxBQUlLLFlBbkJMLGFBZ0IzQixLQUlBLE9BbkJ1QixxR0FDWixTQUN5QixrQ0FDbEIsZ0JBQ0EsZ0JBQ2xCIiwiZmlsZSI6Ii9Vc2Vycy9kb3JhY2hhbi93b3Jrc3BhY2UvdGFtc2Vud2VkZGluZy9jb21wb25lbnRzL2J1dHRvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuY2xhc3MgQnV0dG9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBjdGE6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBidG5UeXBlOiBQcm9wVHlwZXMub25lT2YoWydwcmltYXJ5JywgJ3NlY29uZGFyeSddKVxuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBjdGE6ICdCdXR0b24nLFxuICAgIGJ0blR5cGU6ICdwcmltYXJ5J1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGJ0bkNsYXNzZXMgPSBjbGFzc05hbWVzKFxuICAgICAgJ2J0bicsXG4gICAgICAnYnRuLScrIHRoaXMucHJvcHMuYnRuVHlwZSxcbiAgICAgIHRoaXMucHJvcHMuY2xhc3NOYW1lXG4gICAgKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCcgY2xhc3NOYW1lPXsgYnRuQ2xhc3NlcyB9PlxuICAgICAgICB7IHRoaXMucHJvcHMuY3RhIH1cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5idG4ge1xuICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcbiAgICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICAgIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuOWVtO1xuICAgICAgICAgICAgbWluLXdpZHRoOiAyMDBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmJ0bjpmb2N1cyB7XG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYnRuOmhvdmVyIHtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmJ0bi1wcmltYXJ5IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJsYWNrKTtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5idG4tc2Vjb25kYXJ5IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1ncmVlbi1kYXJrKTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvYnV0dG9uPlxuICAgIClcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvblxuIl19 */\n/*@ sourceURL=/Users/dorachan/workspace/tamsenwedding/components/button.js */"));
    }
  }]);

  return Button;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(Button, "propTypes", {
  cta: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string.isRequired,
  btnType: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.oneOf(['primary', 'secondary'])
});

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(Button, "defaultProps", {
  cta: 'Button',
  btnType: 'primary'
});

/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./components/form.js":
/*!****************************!*\
  !*** ./components/form.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);






var _jsxFileName = "/Users/dorachan/workspace/tamsenwedding/components/form.js";





var Form =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Form, _React$Component);

  function Form() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Form);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Form).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Form, [{
    key: "render",
    value: function render() {
      var formClasses = classnames__WEBPACK_IMPORTED_MODULE_9___default()('form', this.props.className);
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("form", {
        name: "rsvp",
        method: "POST",
        "data-netlify": "true",
        onSubmit: this.props.submit,
        className: "jsx-2884529199" + " " + (formClasses || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "jsx-2884529199" + " " + 'hidden',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        className: "jsx-2884529199",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        name: "bot=field",
        className: "jsx-2884529199",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }))), this.props.children, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "2884529199",
        __self: this
      }, ".form.jsx-2884529199{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin-top:24px;margin-bottom:40px;}.hidden.jsx-2884529199{display:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kb3JhY2hhbi93b3Jrc3BhY2UvdGFtc2Vud2VkZGluZy9jb21wb25lbnRzL2Zvcm0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUJvQixBQUcwQixBQU1BLGFBQ2YsNkRBTndCLDhFQUNOLGdCQUNHLG1CQUNyQiIsImZpbGUiOiIvVXNlcnMvZG9yYWNoYW4vd29ya3NwYWNlL3RhbXNlbndlZGRpbmcvY29tcG9uZW50cy9mb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5jbGFzcyBGb3JtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgc3VibWl0OiBQcm9wVHlwZXMuZnVuY1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGZvcm1DbGFzc2VzID0gY2xhc3NOYW1lcygnZm9ybScsIHRoaXMucHJvcHMuY2xhc3NOYW1lKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8Zm9ybVxuICAgICAgICBuYW1lPSdyc3ZwJ1xuICAgICAgICBtZXRob2Q9J1BPU1QnXG4gICAgICAgIGRhdGEtbmV0bGlmeT0ndHJ1ZSdcbiAgICAgICAgb25TdWJtaXQ9eyB0aGlzLnByb3BzLnN1Ym1pdCB9XG4gICAgICAgIGNsYXNzTmFtZT17IGZvcm1DbGFzc2VzIH1cbiAgICAgICAgPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2hpZGRlbic+XG4gICAgICAgICAgPGxhYmVsPjxpbnB1dCBuYW1lPSdib3Q9ZmllbGQnIC8+PC9sYWJlbD5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICB7IHRoaXMucHJvcHMuY2hpbGRyZW4gfVxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmZvcm0ge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmhpZGRlbiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9mb3JtPlxuICAgIClcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm1cbiJdfQ== */\n/*@ sourceURL=/Users/dorachan/workspace/tamsenwedding/components/form.js */"));
    }
  }]);

  return Form;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(Form, "propTypes", {
  children: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.node.isRequired,
  className: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  submit: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func
});

/* harmony default export */ __webpack_exports__["default"] = (Form);

/***/ }),

/***/ "./components/input.js":
/*!*****************************!*\
  !*** ./components/input.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);






var _jsxFileName = "/Users/dorachan/workspace/tamsenwedding/components/input.js";





var Input =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Input, _React$Component);

  function Input() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Input);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Input).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Input, [{
    key: "render",
    value: function render() {
      var inputClasses = classnames__WEBPACK_IMPORTED_MODULE_9___default()('input-text', this.props.type === 'number' ? 'input-number' : '');
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        className: "jsx-384383194" + " " + 'input',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "jsx-384383194" + " " + 'input-label',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, this.props.labelName), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: this.props.type,
        name: this.props.inputName,
        placeholder: this.props.placeholder,
        value: this.props.value,
        onChange: this.props.change,
        required: true,
        className: "jsx-384383194" + " " + (inputClasses || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "384383194",
        __self: this
      }, ".input.jsx-384383194{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin-bottom:24px;-webkit-flex:1;-ms-flex:1;flex:1;}.input-label.jsx-384383194{font-size:0.9em;text-transform:uppercase;-webkit-letter-spacing:0.1em;-moz-letter-spacing:0.1em;-ms-letter-spacing:0.1em;letter-spacing:0.1em;font-weight:600;margin-bottom:8px;}.input-text.jsx-384383194{height:50px;font-size:inherit;padding:0 16px;border-style:solid;border-radius:0;box-shadow:none;border:2px solid var(--color-gray-medium);outline:none;}.input-text.jsx-384383194::-webkit-input-placeholder{font-weight:200;}.input-text.jsx-384383194::-moz-placeholder{font-weight:200;}.input-text.jsx-384383194:-ms-input-placeholder{font-weight:200;}.input-text.jsx-384383194::placeholder{font-weight:200;}.input-text.jsx-384383194:focus{border-color:var(--color-green-medium);}.input-text.jsx-384383194:focus{outline:none;}.input-number[type=number].jsx-384383194::-webkit-inner-spin-button,.input-number[type=number].jsx-384383194::-webkit-outer-spin-button{-webkit-appearance:none;margin:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kb3JhY2hhbi93b3Jrc3BhY2UvdGFtc2Vud2VkZGluZy9jb21wb25lbnRzL2lucHV0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtDb0IsQUFHMEIsQUFNRyxBQU9KLEFBVUksQUFHdUIsQUFHMUIsQUFJVyxZQW5CTixDQWdCcEIsR0F2QjJCLEFBaUIzQixRQVVXLE1BbkJNLEdBb0JqQixNQVJBLEVBbkJ1QixJQVFGLG1CQUNILFVBaEJNLE1BaUJOLGdCQUMwQiwwQ0FDN0IsSUFYRyxTQVlsQixDQW5CcUIsTUFRRCxhQVBYLEtBUVQsNEJBUEEiLCJmaWxlIjoiL1VzZXJzL2RvcmFjaGFuL3dvcmtzcGFjZS90YW1zZW53ZWRkaW5nL2NvbXBvbmVudHMvaW5wdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmNsYXNzIElucHV0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBsYWJlbE5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGlucHV0TmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB0eXBlTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB0eXBlOiBQcm9wVHlwZXMub25lT2YoWyd0ZXh0JywgJ251bWJlciddKSxcbiAgICBjaGFuZ2U6IFByb3BUeXBlcy5mdW5jXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGxhYmVsTmFtZTogJ0xhYmVsJyxcbiAgICBwbGFjZWhvbGRlcjogJ0ZpZWxkJyxcbiAgICB0eXBlOiAndGV4dCdcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBpbnB1dENsYXNzZXMgPSBjbGFzc05hbWVzKCdpbnB1dC10ZXh0JywgdGhpcy5wcm9wcy50eXBlID09PSAnbnVtYmVyJyA/ICdpbnB1dC1udW1iZXInIDogJycpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxsYWJlbCBjbGFzc05hbWU9J2lucHV0Jz5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdpbnB1dC1sYWJlbCc+eyB0aGlzLnByb3BzLmxhYmVsTmFtZSB9PC9zcGFuPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBjbGFzc05hbWU9eyBpbnB1dENsYXNzZXMgfVxuICAgICAgICAgIHR5cGU9eyB0aGlzLnByb3BzLnR5cGUgfVxuICAgICAgICAgIG5hbWU9eyB0aGlzLnByb3BzLmlucHV0TmFtZSB9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9eyB0aGlzLnByb3BzLnBsYWNlaG9sZGVyIH1cbiAgICAgICAgICB2YWx1ZT17IHRoaXMucHJvcHMudmFsdWUgfVxuICAgICAgICAgIG9uQ2hhbmdlPXsgdGhpcy5wcm9wcy5jaGFuZ2UgfVxuICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgIC8+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuaW5wdXQge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmlucHV0LWxhYmVsIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45ZW07XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmlucHV0LXRleHQge1xuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgICAgICAgICAgcGFkZGluZzogMCAxNnB4O1xuICAgICAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tY29sb3ItZ3JheS1tZWRpdW0pO1xuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmlucHV0LXRleHQ6OnBsYWNlaG9sZGVyIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5pbnB1dC10ZXh0OmZvY3VzIHtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tY29sb3ItZ3JlZW4tbWVkaXVtKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmlucHV0LXRleHQ6Zm9jdXMge1xuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmlucHV0LW51bWJlclt0eXBlPW51bWJlcl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXG4gICAgICAgICAgLmlucHV0LW51bWJlclt0eXBlPW51bWJlcl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xuICAgICAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9sYWJlbD5cbiAgICApXG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnB1dFxuIl19 */\n/*@ sourceURL=/Users/dorachan/workspace/tamsenwedding/components/input.js */"));
    }
  }]);

  return Input;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(Input, "propTypes", {
  labelName: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string.isRequired,
  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string.isRequired,
  inputName: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  typeName: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  type: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.oneOf(['text', 'number']),
  change: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func
});

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(Input, "defaultProps", {
  labelName: 'Label',
  placeholder: 'Field',
  type: 'text'
});

/* harmony default export */ __webpack_exports__["default"] = (Input);

/***/ }),

/***/ "./components/link.js":
/*!****************************!*\
  !*** ./components/link.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);






var _jsxFileName = "/Users/dorachan/workspace/tamsenwedding/components/link.js";





var Link =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Link, _React$Component);

  function Link() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Link);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Link).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Link, [{
    key: "render",
    value: function render() {
      var linkClasses = classnames__WEBPACK_IMPORTED_MODULE_9___default()('link', this.props.className);
      var btnClasses = classnames__WEBPACK_IMPORTED_MODULE_9___default()('btn', this.props.className);
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: this.props.linkTo,
        target: "_blank",
        className: "jsx-1269348551" + " " + ((this.props.linkType === 'text' ? linkClasses : btnClasses) || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, this.props.children, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "1269348551",
        __self: this
      }, ".link.jsx-1269348551{-webkit-text-decoration:none;text-decoration:none;font-weight:400;color:var(--color-green-medium);}.btn.jsx-1269348551{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:60px;font-family:inherit;-webkit-text-decoration:none;text-decoration:none;font-weight:600;text-transform:uppercase;background-color:var(--color-white);color:var(--color-green-dark);-webkit-letter-spacing:0.1em;-moz-letter-spacing:0.1em;-ms-letter-spacing:0.1em;letter-spacing:0.1em;border:0;text-rendering:optimizeLegibility;font-size:0.9em;min-width:220px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kb3JhY2hhbi93b3Jrc3BhY2UvdGFtc2Vud2VkZGluZy9jb21wb25lbnRzL2xpbmsuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0JvQixBQUdrQyxBQUtSLGtEQUpHLGdCQUNnQixRQUlULHdCQUh6QiwyRUFJcUIsNkZBQ1AsWUFDUSxvQkFDQyxrREFDTCxnQkFDUyx5QkFDVyxvQ0FDTiw4QkFDVCxxR0FDWixTQUN5QixrQ0FDbEIsZ0JBQ0EsZ0JBQ2xCIiwiZmlsZSI6Ii9Vc2Vycy9kb3JhY2hhbi93b3Jrc3BhY2UvdGFtc2Vud2VkZGluZy9jb21wb25lbnRzL2xpbmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmNsYXNzIExpbmsgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBsaW5rVG86IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgbGlua1R5cGU6IFByb3BUeXBlcy5vbmVPZihbJ3RleHQnLCAnYnRuJ10pXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGxpbmtUeXBlOiAndGV4dCdcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBsaW5rQ2xhc3NlcyA9IGNsYXNzTmFtZXMoJ2xpbmsnLCB0aGlzLnByb3BzLmNsYXNzTmFtZSk7XG4gICAgY29uc3QgYnRuQ2xhc3NlcyA9IGNsYXNzTmFtZXMoJ2J0bicsIHRoaXMucHJvcHMuY2xhc3NOYW1lKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8YSBocmVmPXsgdGhpcy5wcm9wcy5saW5rVG8gfSBjbGFzc05hbWU9eyB0aGlzLnByb3BzLmxpbmtUeXBlID09PSAndGV4dCcgPyBsaW5rQ2xhc3NlcyA6IGJ0bkNsYXNzZXMgfSB0YXJnZXQ9J19ibGFuaycgPlxuICAgICAgICB7IHRoaXMucHJvcHMuY2hpbGRyZW4gfVxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmxpbmsge1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1ncmVlbi1tZWRpdW0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYnRuIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgICAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLWdyZWVuLWRhcmspO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xuICAgICAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICAgICAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45ZW07XG4gICAgICAgICAgICBtaW4td2lkdGg6IDIyMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9hPlxuICAgIClcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtcbiJdfQ== */\n/*@ sourceURL=/Users/dorachan/workspace/tamsenwedding/components/link.js */"));
    }
  }]);

  return Link;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(Link, "propTypes", {
  children: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.node.isRequired,
  className: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  linkTo: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  linkType: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.oneOf(['text', 'btn'])
});

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(Link, "defaultProps", {
  linkType: 'text'
});

/* harmony default export */ __webpack_exports__["default"] = (Link);

/***/ }),

/***/ "./components/list.js":
/*!****************************!*\
  !*** ./components/list.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);







var _jsxFileName = "/Users/dorachan/workspace/tamsenwedding/components/list.js",
    _class,
    _temp;






var List =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(List, _React$Component);

  function List() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, List);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(List).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(List, [{
    key: "render",
    value: function render() {
      var listClasses = classnames__WEBPACK_IMPORTED_MODULE_9___default()('list', this.props.className);
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "jsx-167231214" + " " + (listClasses || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, this.props.children, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "167231214",
        __self: this
      }, ".list.jsx-167231214{list-style:none;margin:4px 0;padding:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kb3JhY2hhbi93b3Jrc3BhY2UvdGFtc2Vud2VkZGluZy9jb21wb25lbnRzL2xpc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZW9CLEFBRzZCLGdCQUNILGFBQ0gsVUFDWiIsImZpbGUiOiIvVXNlcnMvZG9yYWNoYW4vd29ya3NwYWNlL3RhbXNlbndlZGRpbmcvY29tcG9uZW50cy9saXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5jbGFzcyBMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmdcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBsaXN0Q2xhc3NlcyA9IGNsYXNzTmFtZXMoJ2xpc3QnLCB0aGlzLnByb3BzLmNsYXNzTmFtZSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPHVsIGNsYXNzTmFtZT17IGxpc3RDbGFzc2VzIH0+XG4gICAgICAgIHsgdGhpcy5wcm9wcy5jaGlsZHJlbiB9XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAubGlzdCB7XG4gICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgICAgbWFyZ2luOiA0cHggMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L3VsPlxuICAgIClcbiAgfVxuXG59XG5cbkxpc3QuSXRlbSA9IGNsYXNzIExpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZ1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGl0ZW1DbGFzc2VzID0gY2xhc3NOYW1lcygnaXRlbScsIHRoaXMucHJvcHMuY2xhc3NOYW1lKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8bGkgY2xhc3NOYW1lPXsgaXRlbUNsYXNzZXMgfT5cbiAgICAgICAgeyB0aGlzLnByb3BzLmNoaWxkcmVuIH1cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5saXN0LWl0ZW06YmVmb3JlIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9saT5cbiAgICApXG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBMaXN0XG4iXX0= */\n/*@ sourceURL=/Users/dorachan/workspace/tamsenwedding/components/list.js */"));
    }
  }]);

  return List;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(List, "propTypes", {
  children: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.node.isRequired,
  className: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string
});

List.Item = (_temp = _class =
/*#__PURE__*/
function (_React$Component2) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(List, _React$Component2);

  function List() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, List);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(List).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(List, [{
    key: "render",
    value: function render() {
      var itemClasses = classnames__WEBPACK_IMPORTED_MODULE_9___default()('item', this.props.className);
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "jsx-3444295585" + " " + (itemClasses || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, this.props.children, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "3444295585",
        __self: this
      }, ".list-item.jsx-3444295585:before{content:'';}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kb3JhY2hhbi93b3Jrc3BhY2UvdGFtc2Vud2VkZGluZy9jb21wb25lbnRzL2xpc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0NvQixBQUd3QixXQUNiIiwiZmlsZSI6Ii9Vc2Vycy9kb3JhY2hhbi93b3Jrc3BhY2UvdGFtc2Vud2VkZGluZy9jb21wb25lbnRzL2xpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmNsYXNzIExpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZ1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGxpc3RDbGFzc2VzID0gY2xhc3NOYW1lcygnbGlzdCcsIHRoaXMucHJvcHMuY2xhc3NOYW1lKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8dWwgY2xhc3NOYW1lPXsgbGlzdENsYXNzZXMgfT5cbiAgICAgICAgeyB0aGlzLnByb3BzLmNoaWxkcmVuIH1cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5saXN0IHtcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgICBtYXJnaW46IDRweCAwO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvdWw+XG4gICAgKVxuICB9XG5cbn1cblxuTGlzdC5JdGVtID0gY2xhc3MgTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgaXRlbUNsYXNzZXMgPSBjbGFzc05hbWVzKCdpdGVtJywgdGhpcy5wcm9wcy5jbGFzc05hbWUpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxsaSBjbGFzc05hbWU9eyBpdGVtQ2xhc3NlcyB9PlxuICAgICAgICB7IHRoaXMucHJvcHMuY2hpbGRyZW4gfVxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmxpc3QtaXRlbTpiZWZvcmUge1xuICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2xpPlxuICAgIClcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpc3RcbiJdfQ== */\n/*@ sourceURL=/Users/dorachan/workspace/tamsenwedding/components/list.js */"));
    }
  }]);

  return List;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(_class, "propTypes", {
  children: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.node.isRequired,
  className: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string
}), _temp);
/* harmony default export */ __webpack_exports__["default"] = (List);

/***/ }),

/***/ "./components/navigation.js":
/*!**********************************!*\
  !*** ./components/navigation.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_scroll_into_view__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-scroll-into-view */ "react-scroll-into-view");
/* harmony import */ var react_scroll_into_view__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_scroll_into_view__WEBPACK_IMPORTED_MODULE_7__);





var _jsxFileName = "/Users/dorachan/workspace/tamsenwedding/components/navigation.js";




var Navigation =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Navigation, _React$Component);

  function Navigation() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Navigation);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Navigation).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Navigation, [{
    key: "render",
    value: function render() {
      var navList = ['photos', 'travel', 'RSVP', 'registry'];
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("nav", {
        className: "jsx-1864418859" + " " + 'nav',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("ul", {
        className: "jsx-1864418859" + " " + 'nav-list',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, navList.map(function (i) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
          key: i,
          className: "jsx-1864418859" + " " + 'nav-list-item',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 10
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_scroll_into_view__WEBPACK_IMPORTED_MODULE_7___default.a, {
          selector: "#".concat(i),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 10
          },
          __self: this
        }, i.charAt(0).toUpperCase() + i.slice(1)));
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "1864418859",
        __self: this
      }, ".nav{width:100%;z-index:1;}.nav-list{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;padding:0;}.nav-list-item{display:block;list-style:none;cursor:pointer;font-weight:400;color:var(--color-green-medium);}@media (min-width:992px){.nav{position:absolute;right:0;top:80px;width:auto;}.nav-list{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;text-align:right;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kb3JhY2hhbi93b3Jrc3BhY2UvdGFtc2Vud2VkZGluZy9jb21wb25lbnRzL25hdmlnYXRpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVzJCLEFBR3dCLEFBSUUsQUFLQyxBQVNNLEFBTUksV0F2QmQsR0FTTSxJQVNOLEdBakJaLEtBa0JhLElBVEksS0FVRixVQVRHLENBVWhCLGVBVGdDLGFBUkgsSUFvQlYsZUFYckIsRUFZRSxzR0FwQlUsVUFDWiIsImZpbGUiOiIvVXNlcnMvZG9yYWNoYW4vd29ya3NwYWNlL3RhbXNlbndlZGRpbmcvY29tcG9uZW50cy9uYXZpZ2F0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNjcm9sbFRvIGZyb20gJ3JlYWN0LXNjcm9sbC1pbnRvLXZpZXcnO1xuXG5jbGFzcyBOYXZpZ2F0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IG5hdkxpc3QgPSBbJ3Bob3RvcycsICd0cmF2ZWwnLCAnUlNWUCcsICdyZWdpc3RyeSddO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxuYXYgY2xhc3NOYW1lPSduYXYnPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPSduYXYtbGlzdCc+XG4gICAgICAgICAgeyBuYXZMaXN0Lm1hcChpID0+ICggPGxpIGNsYXNzTmFtZT0nbmF2LWxpc3QtaXRlbScga2V5PXtpfT48U2Nyb2xsVG8gc2VsZWN0b3I9e2AjJHtpfWB9PnsgaS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGkuc2xpY2UoMSkgfTwvU2Nyb2xsVG8+PC9saT4gKSl9XG4gICAgICAgIDwvdWw+XG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgLm5hdiB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5uYXYtbGlzdCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubmF2LWxpc3QtaXRlbSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLWdyZWVuLW1lZGl1bSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gICAgICAgICAgICAubmF2IHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgdG9wOiA4MHB4O1xuICAgICAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5uYXYtbGlzdCB7XG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9uYXY+XG4gICAgKVxuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2aWdhdGlvbjtcbiJdfQ== */\n/*@ sourceURL=/Users/dorachan/workspace/tamsenwedding/components/navigation.js */"));
    }
  }]);

  return Navigation;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Navigation);

/***/ }),

/***/ "./components/radio.js":
/*!*****************************!*\
  !*** ./components/radio.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);







var _jsxFileName = "/Users/dorachan/workspace/tamsenwedding/components/radio.js",
    _class,
    _temp;






var Radio =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Radio, _React$Component);

  function Radio() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Radio);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Radio).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Radio, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-1148305500" + " " + 'radio',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-1148305500" + " " + 'radio-label',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, this.props.labelName), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-1148305500" + " " + 'radio-options',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, this.props.children), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "1148305500",
        __self: this
      }, ".radio.jsx-1148305500{margin-bottom:24px;}.radio-label.jsx-1148305500{font-size:0.9em;text-transform:uppercase;-webkit-letter-spacing:0.1em;-moz-letter-spacing:0.1em;-ms-letter-spacing:0.1em;letter-spacing:0.1em;font-weight:600;margin-bottom:8px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kb3JhY2hhbi93b3Jrc3BhY2UvdGFtc2Vud2VkZGluZy9jb21wb25lbnRzL3JhZGlvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1Cb0IsQUFHZ0MsQUFHSCxnQkFDUyxHQUgzQixzQkFJdUIscUdBQ0wsZ0JBQ0Usa0JBQ3BCIiwiZmlsZSI6Ii9Vc2Vycy9kb3JhY2hhbi93b3Jrc3BhY2UvdGFtc2Vud2VkZGluZy9jb21wb25lbnRzL3JhZGlvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5jbGFzcyBSYWRpbyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGxhYmVsTmFtZTogUHJvcFR5cGVzLnN0cmluZ1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBsYWJlbE5hbWU6ICdMYWJlbCdcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J3JhZGlvJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JhZGlvLWxhYmVsJz57IHRoaXMucHJvcHMubGFiZWxOYW1lIH08L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JhZGlvLW9wdGlvbnMnPnsgdGhpcy5wcm9wcy5jaGlsZHJlbiB9PC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAucmFkaW8ge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnJhZGlvLWxhYmVsIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45ZW07XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5SYWRpby5PcHRpb24gPSBjbGFzcyBPcHRpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgICBpbnB1dE5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNoZWNrZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIGNoYW5nZTogUHJvcFR5cGVzLmZ1bmNcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGxhYmVsXG4gICAgICAgIGNsYXNzTmFtZT0ncmFkaW8tb3B0aW9uJ1xuICAgICAgICBodG1sRm9yPXsgdGhpcy5wcm9wcy52YWx1ZSB9XG4gICAgICAgID5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT0ncmFkaW8nXG4gICAgICAgICAgY2xhc3NOYW1lPSdyYWRpby1vcHRpb24taW5wdXQnXG4gICAgICAgICAgbmFtZT17IHRoaXMucHJvcHMuaW5wdXROYW1lIH1cbiAgICAgICAgICB2YWx1ZT17IHRoaXMucHJvcHMudmFsdWUgfVxuICAgICAgICAgIGlkPXsgdGhpcy5wcm9wcy52YWx1ZSB9XG4gICAgICAgICAgZGVmYXVsdENoZWNrZWQ9eyB0aGlzLnByb3BzLmNoZWNrZWQgfVxuICAgICAgICAgIG9uQ2hhbmdlPXsgdGhpcy5wcm9wcy5jaGFuZ2UgfVxuICAgICAgICAgIC8+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ncmFkaW8tb3B0aW9uLWxhYmVsJz5cbiAgICAgICAgICB7IHRoaXMucHJvcHMudmFsdWUgfVxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAucmFkaW8tb3B0aW9uIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgICBtYXJnaW46IDhweCAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucmFkaW8tb3B0aW9uLWlucHV0IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5yYWRpby1vcHRpb24taW5wdXQgKyBzcGFuIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5yYWRpby1vcHRpb24taW5wdXQgKyBzcGFuOmJlZm9yZSB7XG4gICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAycHg7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgd2lkdGg6IDE2cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDE2cHg7XG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2xvci1ncmF5LW1lZGl1bSk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci13aGl0ZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5yYWRpby1vcHRpb24taW5wdXQgKyBzcGFuOmFmdGVyIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB3aWR0aDogMTBweDtcbiAgICAgICAgICAgIGhlaWdodDogMTBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLWdyZWVuLW1lZGl1bSk7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICB0b3A6IDdweDtcbiAgICAgICAgICAgIGxlZnQ6IDVweDtcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAsMCk7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMTAwbXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5yYWRpby1vcHRpb24taW5wdXQ6Y2hlY2tlZCArIHNwYW46YWZ0ZXIge1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSwxKTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvbGFiZWw+XG4gICAgKVxuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmFkaW87XG4iXX0= */\n/*@ sourceURL=/Users/dorachan/workspace/tamsenwedding/components/radio.js */"));
    }
  }]);

  return Radio;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(Radio, "propTypes", {
  children: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.node.isRequired,
  className: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  labelName: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string
});

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(Radio, "defaultProps", {
  labelName: 'Label'
});

Radio.Option = (_temp = _class =
/*#__PURE__*/
function (_React$Component2) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Option, _React$Component2);

  function Option() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Option);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Option).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Option, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: this.props.value,
        className: "jsx-3145561966" + " " + 'radio-option',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "radio",
        name: this.props.inputName,
        value: this.props.value,
        id: this.props.value,
        defaultChecked: this.props.checked,
        onChange: this.props.change,
        className: "jsx-3145561966" + " " + 'radio-option-input',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "jsx-3145561966" + " " + 'radio-option-label',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, this.props.value), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "3145561966",
        __self: this
      }, ".radio-option.jsx-3145561966{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-flex:1;-ms-flex:1;flex:1;margin:8px 0;}.radio-option-input.jsx-3145561966{display:none;}.radio-option-input.jsx-3145561966+span.jsx-3145561966{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;position:relative;padding-left:30px;line-height:24px;}.radio-option-input.jsx-3145561966+span.jsx-3145561966:before{content:'';display:block;position:absolute;top:2px;left:0;border-radius:50%;width:16px;height:16px;border:2px solid var(--color-gray-medium);background:var(--color-white);}.radio-option-input.jsx-3145561966+span.jsx-3145561966:after{content:'';display:block;width:10px;height:10px;background:var(--color-green-medium);position:absolute;border-radius:50%;top:7px;left:5px;opacity:0;-webkit-transform:scale(0,0);-ms-transform:scale(0,0);transform:scale(0,0);-webkit-transition:all 100ms ease-in-out;transition:all 100ms ease-in-out;}.radio-option-input.jsx-3145561966:checked+span.jsx-3145561966:after{opacity:1;-webkit-transform:scale(1,1);-ms-transform:scale(1,1);transform:scale(1,1);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kb3JhY2hhbi93b3Jrc3BhY2UvdGFtc2Vud2VkZGluZy9jb21wb25lbnRzL3JhZGlvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdFb0IsQUFHMEIsQUFPQSxBQUdBLEFBT0YsQUFZQSxBQWNELFVBQ1csQ0ExQlAsQUFZQSxFQXRCaEIsWUFXb0IsQUFZUCxXQUNDLE9BWkosS0FhNkIsR0FaOUIsT0FDVyxnQkFyQkgsQUFVTyxFQVlYLFNBV08sQUFXcEIsRUFyQmMsRUF0QkssVUF1QnlCLElBVXhCLGtCQUNWLFFBQ0MsU0FDQyxHQVpvQixPQWFULElBM0JILGtCQUNBLENBY3BCLEdBeEJTLGNBV1UsaUJBQ25CLEVBWGUsYUFDZixHQW1DbUMsMEVBQ25DIiwiZmlsZSI6Ii9Vc2Vycy9kb3JhY2hhbi93b3Jrc3BhY2UvdGFtc2Vud2VkZGluZy9jb21wb25lbnRzL3JhZGlvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5jbGFzcyBSYWRpbyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGxhYmVsTmFtZTogUHJvcFR5cGVzLnN0cmluZ1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBsYWJlbE5hbWU6ICdMYWJlbCdcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J3JhZGlvJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JhZGlvLWxhYmVsJz57IHRoaXMucHJvcHMubGFiZWxOYW1lIH08L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JhZGlvLW9wdGlvbnMnPnsgdGhpcy5wcm9wcy5jaGlsZHJlbiB9PC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAucmFkaW8ge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnJhZGlvLWxhYmVsIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45ZW07XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5SYWRpby5PcHRpb24gPSBjbGFzcyBPcHRpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgICBpbnB1dE5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNoZWNrZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIGNoYW5nZTogUHJvcFR5cGVzLmZ1bmNcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGxhYmVsXG4gICAgICAgIGNsYXNzTmFtZT0ncmFkaW8tb3B0aW9uJ1xuICAgICAgICBodG1sRm9yPXsgdGhpcy5wcm9wcy52YWx1ZSB9XG4gICAgICAgID5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT0ncmFkaW8nXG4gICAgICAgICAgY2xhc3NOYW1lPSdyYWRpby1vcHRpb24taW5wdXQnXG4gICAgICAgICAgbmFtZT17IHRoaXMucHJvcHMuaW5wdXROYW1lIH1cbiAgICAgICAgICB2YWx1ZT17IHRoaXMucHJvcHMudmFsdWUgfVxuICAgICAgICAgIGlkPXsgdGhpcy5wcm9wcy52YWx1ZSB9XG4gICAgICAgICAgZGVmYXVsdENoZWNrZWQ9eyB0aGlzLnByb3BzLmNoZWNrZWQgfVxuICAgICAgICAgIG9uQ2hhbmdlPXsgdGhpcy5wcm9wcy5jaGFuZ2UgfVxuICAgICAgICAgIC8+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ncmFkaW8tb3B0aW9uLWxhYmVsJz5cbiAgICAgICAgICB7IHRoaXMucHJvcHMudmFsdWUgfVxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAucmFkaW8tb3B0aW9uIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgICBtYXJnaW46IDhweCAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucmFkaW8tb3B0aW9uLWlucHV0IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5yYWRpby1vcHRpb24taW5wdXQgKyBzcGFuIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5yYWRpby1vcHRpb24taW5wdXQgKyBzcGFuOmJlZm9yZSB7XG4gICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAycHg7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgd2lkdGg6IDE2cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDE2cHg7XG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2xvci1ncmF5LW1lZGl1bSk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci13aGl0ZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5yYWRpby1vcHRpb24taW5wdXQgKyBzcGFuOmFmdGVyIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB3aWR0aDogMTBweDtcbiAgICAgICAgICAgIGhlaWdodDogMTBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLWdyZWVuLW1lZGl1bSk7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICB0b3A6IDdweDtcbiAgICAgICAgICAgIGxlZnQ6IDVweDtcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAsMCk7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMTAwbXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5yYWRpby1vcHRpb24taW5wdXQ6Y2hlY2tlZCArIHNwYW46YWZ0ZXIge1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSwxKTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvbGFiZWw+XG4gICAgKVxuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmFkaW87XG4iXX0= */\n/*@ sourceURL=/Users/dorachan/workspace/tamsenwedding/components/radio.js */"));
    }
  }]);

  return Option;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(_class, "propTypes", {
  children: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.node,
  inputName: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  value: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  className: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  checked: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  change: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func
}), _temp);
/* harmony default export */ __webpack_exports__["default"] = (Radio);

/***/ }),

/***/ "./components/textarea.js":
/*!********************************!*\
  !*** ./components/textarea.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);






var _jsxFileName = "/Users/dorachan/workspace/tamsenwedding/components/textarea.js";





var TextArea =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(TextArea, _React$Component);

  function TextArea() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TextArea);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(TextArea).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(TextArea, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        className: "jsx-3496858851" + " " + 'input',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "jsx-3496858851" + " " + 'input-label',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, this.props.labelName), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("textarea", {
        type: "text",
        name: this.props.inputName,
        placeholder: this.props.placeholder,
        value: this.props.value,
        onChange: this.props.change,
        required: true,
        className: "jsx-3496858851" + " " + 'input-textarea',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "3496858851",
        __self: this
      }, ".input.jsx-3496858851{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin-bottom:24px;-webkit-flex:1;-ms-flex:1;flex:1;}.input-label.jsx-3496858851{font-size:0.9em;text-transform:uppercase;-webkit-letter-spacing:0.1em;-moz-letter-spacing:0.1em;-ms-letter-spacing:0.1em;letter-spacing:0.1em;font-weight:600;margin-bottom:8px;}.input-textarea.jsx-3496858851{height:100px;font-size:inherit;padding:10px 16px;line-height:24px;border-style:solid;border-radius:0;box-shadow:none;resize:none;border:2px solid var(--color-gray-medium);outline:none;}.input-textarea.jsx-3496858851::-webkit-input-placeholder{font-weight:200;}.input-textarea.jsx-3496858851::-moz-placeholder{font-weight:200;}.input-textarea.jsx-3496858851:-ms-input-placeholder{font-weight:200;}.input-textarea.jsx-3496858851::placeholder{font-weight:200;}.input-textarea.jsx-3496858851:focus{border-color:var(--color-green-medium);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kb3JhY2hhbi93b3Jrc3BhY2UvdGFtc2Vud2VkZGluZy9jb21wb25lbnRzL3RleHRhcmVhLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThCb0IsQUFHMEIsQUFNRyxBQU9ILEFBWUcsQUFHdUIsYUFkckIsR0FQTyxBQW1CM0IsZUFYb0IsUUFjcEIsRUFyQnVCLFFBUUosaUJBQ0UsUUFoQkcsV0FpQk4sZ0JBQ0EsZ0JBQ0osWUFDOEIsYUFaMUIsVUFQRyxNQVFELGFBUFgsQUFtQk0sS0FYZixRQVlBLG9CQW5CQSIsImZpbGUiOiIvVXNlcnMvZG9yYWNoYW4vd29ya3NwYWNlL3RhbXNlbndlZGRpbmcvY29tcG9uZW50cy90ZXh0YXJlYS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuY2xhc3MgVGV4dEFyZWEgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGxhYmVsTmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgaW5wdXROYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHR5cGVOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNoYW5nZTogUHJvcFR5cGVzLmZ1bmNcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgbGFiZWxOYW1lOiAnTGFiZWwnLFxuICAgIHBsYWNlaG9sZGVyOiAnRmllbGQnXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxsYWJlbCBjbGFzc05hbWU9J2lucHV0Jz5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdpbnB1dC1sYWJlbCc+eyB0aGlzLnByb3BzLmxhYmVsTmFtZSB9PC9zcGFuPlxuICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICB0eXBlPSd0ZXh0J1xuICAgICAgICAgIGNsYXNzTmFtZT0naW5wdXQtdGV4dGFyZWEnXG4gICAgICAgICAgbmFtZT17IHRoaXMucHJvcHMuaW5wdXROYW1lIH1cbiAgICAgICAgICBwbGFjZWhvbGRlcj17IHRoaXMucHJvcHMucGxhY2Vob2xkZXIgfVxuICAgICAgICAgIHZhbHVlPXsgdGhpcy5wcm9wcy52YWx1ZSB9XG4gICAgICAgICAgb25DaGFuZ2U9eyB0aGlzLnByb3BzLmNoYW5nZSB9XG4gICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgLz5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5pbnB1dCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaW5wdXQtbGFiZWwge1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjllbTtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4xZW07XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaW5wdXQtdGV4dGFyZWEge1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMTZweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgICAgICAgcmVzaXplOiBub25lO1xuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tY29sb3ItZ3JheS1tZWRpdW0pO1xuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmlucHV0LXRleHRhcmVhOjpwbGFjZWhvbGRlciB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogMjAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaW5wdXQtdGV4dGFyZWE6Zm9jdXMge1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci1ncmVlbi1tZWRpdW0pO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9sYWJlbD5cbiAgICApXG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBUZXh0QXJlYVxuIl19 */\n/*@ sourceURL=/Users/dorachan/workspace/tamsenwedding/components/textarea.js */"));
    }
  }]);

  return TextArea;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(TextArea, "propTypes", {
  labelName: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string.isRequired,
  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string.isRequired,
  inputName: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  typeName: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  change: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func
});

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(TextArea, "defaultProps", {
  labelName: 'Label',
  placeholder: 'Field'
});

/* harmony default export */ __webpack_exports__["default"] = (TextArea);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \***************************************************************************/
/*! exports provided: default */
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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");


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
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);



function _typeof2(obj) { if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _typeof2(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./pages/_footer.js":
/*!**************************!*\
  !*** ./pages/_footer.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);





var _jsxFileName = "/Users/dorachan/workspace/tamsenwedding/pages/_footer.js";





var Footer =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Footer, _React$Component);

  function Footer() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Footer);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Footer).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Footer, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("footer", {
        className: "jsx-3513232941" + " " + 'footer',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-3513232941" + " " + 'footer-image',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-3513232941" + " " + 'footer-content',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, "\xA9 Made by Dora"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "3513232941",
        __self: this
      }, ".footer.jsx-3513232941{grid-area:footer;}.footer-image.jsx-3513232941{height:160px;background-size:auto 160px,cover;background-image:url(/static/icon_forest.png);background-position:top center;background-repeat:repeat-x;}.footer-content.jsx-3513232941{padding:24px;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kb3JhY2hhbi93b3Jrc3BhY2UvdGFtc2Vud2VkZGluZy9wYWdlcy9fZm9vdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdvQixBQUc4QixBQUlKLEFBUUEsYUFQb0IsQUFRZixJQVpwQixjQWFBLGVBUmdELDhDQUNmLCtCQUNKLDJCQUM3QiIsImZpbGUiOiIvVXNlcnMvZG9yYWNoYW4vd29ya3NwYWNlL3RhbXNlbndlZGRpbmcvcGFnZXMvX2Zvb3Rlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuY2xhc3MgRm9vdGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8Zm9vdGVyIGNsYXNzTmFtZT0nZm9vdGVyJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvb3Rlci1pbWFnZScgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvb3Rlci1jb250ZW50Jz5cbiAgICAgICAgICDCqSBNYWRlIGJ5IERvcmFcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuZm9vdGVyIHtcbiAgICAgICAgICAgIGdyaWQtYXJlYTogZm9vdGVyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5mb290ZXItaW1hZ2Uge1xuICAgICAgICAgICAgaGVpZ2h0OiAxNjBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogYXV0byAxNjBweCxjb3ZlcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvc3RhdGljL2ljb25fZm9yZXN0LnBuZyk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgY2VudGVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5mb290ZXItY29udGVudCB7XG4gICAgICAgICAgICBwYWRkaW5nOiAyNHB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIH1cblxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICApXG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBGb290ZXJcbiJdfQ== */\n/*@ sourceURL=/Users/dorachan/workspace/tamsenwedding/pages/_footer.js */"));
    }
  }]);

  return Footer;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./pages/_gallery.js":
/*!***************************!*\
  !*** ./pages/_gallery.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);





var _jsxFileName = "/Users/dorachan/workspace/tamsenwedding/pages/_gallery.js";





var Gallery =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Gallery, _React$Component);

  function Gallery() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Gallery);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Gallery).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Gallery, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("section", {
        id: "photos",
        className: "jsx-2868625315" + " " + 'gallery',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-2868625315" + " " + 'gallery-grid',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-2868625315" + " " + 'grid-large',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: "/static/bg_gallery_1.png",
        alt: "",
        className: "jsx-2868625315",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-2868625315" + " " + 'grid-small',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: "/static/bg_gallery_2.png",
        alt: "",
        className: "jsx-2868625315",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-2868625315" + " " + 'grid-small',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: "/static/bg_gallery_3.png",
        alt: "",
        className: "jsx-2868625315",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-2868625315" + " " + 'grid-small',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: "/static/bg_gallery_4.png",
        alt: "",
        className: "jsx-2868625315",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-2868625315" + " " + 'grid-small',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: "/static/bg_gallery_5.png",
        alt: "",
        className: "jsx-2868625315",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "2868625315",
        __self: this
      }, ".gallery.jsx-2868625315{grid-area:gallery;}.gallery-grid.jsx-2868625315{display:grid;grid-auto-rows:1fr;grid-gap:10px;}.gallery-grid.jsx-2868625315:before{content:'';width:0;padding-bottom:100%;grid-row:1/1;grid-column:1/1;}.grid-small.jsx-2868625315,.grid-large.jsx-2868625315{background-color:var(--color-gray-light);overflow:hidden;position:relative;}.grid-large.jsx-2868625315{grid-column:1/3;grid-row:1/3;}.grid-small.jsx-2868625315 img.jsx-2868625315,.grid-large.jsx-2868625315 img.jsx-2868625315{position:absolute;bottom:0;}.grid-small.jsx-2868625315 img.jsx-2868625315{width:100%;}.grid-large.jsx-2868625315 img.jsx-2868625315{height:100%;}@media (min-width:992px){.gallery-grid.jsx-2868625315{grid-template-columns:repeat(auto-fill,minmax(22%,1fr));grid-auto-rows:1fr;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kb3JhY2hhbi93b3Jrc3BhY2UvdGFtc2Vud2VkZGluZy9wYWdlcy9fZ2FsbGVyeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFjb0IsQUFHK0IsQUFHTCxBQUtGLEFBUThCLEFBS3pCLEFBS0UsQUFJUCxBQUdDLEFBS2dELFdBN0JwRCxBQXNCVixDQUdBLENBOUJxQixHQWtCTixFQXJCZixBQTBCVyxDQWpCVyxRQWtCdEIsRUFMQSxHQWxCZ0IsT0FNRCxFQU1HLEtBWGxCLE1BTWtCLElBMkJLLENBckJILFdBTHBCLE9BTUEsQUFxQkUiLCJmaWxlIjoiL1VzZXJzL2RvcmFjaGFuL3dvcmtzcGFjZS90YW1zZW53ZWRkaW5nL3BhZ2VzL19nYWxsZXJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5jbGFzcyBHYWxsZXJ5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8c2VjdGlvbiBpZD0ncGhvdG9zJyBjbGFzc05hbWU9J2dhbGxlcnknPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZ2FsbGVyeS1ncmlkJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZ3JpZC1sYXJnZSc+PGltZyBzcmM9Jy9zdGF0aWMvYmdfZ2FsbGVyeV8xLnBuZycgYWx0PScnIC8+PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2dyaWQtc21hbGwnPjxpbWcgc3JjPScvc3RhdGljL2JnX2dhbGxlcnlfMi5wbmcnIGFsdD0nJyAvPjwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdncmlkLXNtYWxsJz48aW1nIHNyYz0nL3N0YXRpYy9iZ19nYWxsZXJ5XzMucG5nJyBhbHQ9JycgLz48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZ3JpZC1zbWFsbCc+PGltZyBzcmM9Jy9zdGF0aWMvYmdfZ2FsbGVyeV80LnBuZycgYWx0PScnIC8+PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2dyaWQtc21hbGwnPjxpbWcgc3JjPScvc3RhdGljL2JnX2dhbGxlcnlfNS5wbmcnIGFsdD0nJyAvPjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5nYWxsZXJ5IHtcbiAgICAgICAgICAgIGdyaWQtYXJlYTogZ2FsbGVyeTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmdhbGxlcnktZ3JpZCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgZ3JpZC1hdXRvLXJvd3M6IDFmcjtcbiAgICAgICAgICAgIGdyaWQtZ2FwOiAxMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZ2FsbGVyeS1ncmlkOmJlZm9yZSB7XG4gICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgIHdpZHRoOiAwO1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwMCU7XG4gICAgICAgICAgICBncmlkLXJvdzogMS8xO1xuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDEvMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmdyaWQtc21hbGwsXG4gICAgICAgICAgLmdyaWQtbGFyZ2Uge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZ3JheS1saWdodCk7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZ3JpZC1sYXJnZSB7XG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMS8zO1xuICAgICAgICAgICAgZ3JpZC1yb3c6IDEvMztcbiAgICAgICAgICB9XG4gICAgICAgICAgLmdyaWQtc21hbGwgaW1nLFxuICAgICAgICAgIC5ncmlkLWxhcmdlIGltZyB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5ncmlkLXNtYWxsIGltZyB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmdyaWQtbGFyZ2UgaW1nIHtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG5cbiAgICAgICAgICAgIC5nYWxsZXJ5LWdyaWQge1xuICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgyMiUsIDFmcikpO1xuICAgICAgICAgICAgICBncmlkLWF1dG8tcm93czogMWZyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgKVxuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FsbGVyeVxuIl19 */\n/*@ sourceURL=/Users/dorachan/workspace/tamsenwedding/pages/_gallery.js */"));
    }
  }]);

  return Gallery;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Gallery);

/***/ }),

/***/ "./pages/_intro.js":
/*!*************************!*\
  !*** ./pages/_intro.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_navigation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/navigation */ "./components/navigation.js");





var _jsxFileName = "/Users/dorachan/workspace/tamsenwedding/pages/_intro.js";






var Intro =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Intro, _React$Component);

  function Intro() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Intro);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Intro).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Intro, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("header", {
        className: "jsx-3549175352" + " " + 'intro',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_navigation__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-3549175352",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-3549175352" + " " + 'intro-header',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: "/static/icon_trees.png",
        alt: "",
        className: "jsx-3549175352" + " " + 'intro-image',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h6", {
        className: "jsx-3549175352",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, "Sunday \u2022 May 17, 2020 \u2022 3:00 PM"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", {
        className: "jsx-3549175352",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, "Dora & Derek"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h6", {
        className: "jsx-3549175352",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, "The Outdoor Art Club in Mill Valley, CA")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-3549175352" + " " + 'intro-description',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, "You've been invited to our little wedding! We found each other ~3 years ago and had one of our first dates catching Pokemon in Golden Gate Park. It was clear we were meant to be. Since then, we've been on an epic journey, picking up a DIY house and idiosycratic cats on the way. We hope you can celebrate with us!")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "3549175352",
        __self: this
      }, ".intro.jsx-3549175352{grid-area:intro;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center;min-height:60vh;position:relative;}.intro-image.jsx-3549175352{height:140px;margin-bottom:24px;}.intro-description.jsx-3549175352{padding-top:20px;max-width:850px;text-align:left;}@media (min-width:768px) and (max-width:992px){.intro.jsx-3549175352{min-height:50vh;}}@media (min-width:992px){.intro.jsx-3549175352{-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;min-height:500px;margin-bottom:30px;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;}.intro-image.jsx-3549175352{position:absolute;height:240px;left:-70px;top:-50px;z-index:-1;}.intro-header.jsx-3549175352{padding-top:160px;position:relative;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kb3JhY2hhbi93b3Jrc3BhY2UvdGFtc2Vud2VkZGluZy9wYWdlcy9faW50cm8uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUJvQixBQUc2QixBQVdILEFBS0ksQUFRQyxBQVFHLEFBTUQsQUFPQSxhQWpDRCxHQVhOLEFBd0JiLENBUmdCLENBc0JELEFBT0ssYUFOUCxDQTNCZixDQUtrQixHQTZCaEIsTUFOWSxPQXRCZCxHQXVCZSxXQUNiLE1BVm1CLGlCQUNFLElBaENDLGVBaUNDLCtEQWhDQSxzQ0FpQ3ZCLDZEQWhDbUIsNkZBQ0Qsa0JBQ0YsZ0JBQ0Usa0JBQ3BCIiwiZmlsZSI6Ii9Vc2Vycy9kb3JhY2hhbi93b3Jrc3BhY2UvdGFtc2Vud2VkZGluZy9wYWdlcy9faW50cm8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvbmF2aWdhdGlvbic7XG5cbmNsYXNzIEludHJvIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8aGVhZGVyIGNsYXNzTmFtZT0naW50cm8nPlxuICAgICAgICA8TmF2aWdhdGlvbiAvPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbnRyby1oZWFkZXInPlxuICAgICAgICAgICAgPGltZyBzcmM9Jy9zdGF0aWMvaWNvbl90cmVlcy5wbmcnIGNsYXNzTmFtZT0naW50cm8taW1hZ2UnIGFsdD0nJyAvPlxuICAgICAgICAgICAgPGg2PlN1bmRheSDigKIgTWF5IDE3LCAyMDIwIOKAoiAzOjAwIFBNPC9oNj5cbiAgICAgICAgICAgIDxoMT5Eb3JhICYgRGVyZWs8L2gxPlxuICAgICAgICAgICAgPGg2PlRoZSBPdXRkb29yIEFydCBDbHViIGluIE1pbGwgVmFsbGV5LCBDQTwvaDY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ludHJvLWRlc2NyaXB0aW9uJz5cbiAgICAgICAgICAgIFlvdSd2ZSBiZWVuIGludml0ZWQgdG8gb3VyIGxpdHRsZSB3ZWRkaW5nISBXZSBmb3VuZCBlYWNoIG90aGVyIH4zIHllYXJzIGFnbyBhbmQgaGFkIG9uZSBvZiBvdXIgZmlyc3QgZGF0ZXMgY2F0Y2hpbmcgUG9rZW1vbiBpbiBHb2xkZW4gR2F0ZSBQYXJrLiBJdCB3YXMgY2xlYXIgd2Ugd2VyZSBtZWFudCB0byBiZS4gU2luY2UgdGhlbiwgd2UndmUgYmVlbiBvbiBhbiBlcGljIGpvdXJuZXksIHBpY2tpbmcgdXAgYSBESVkgaG91c2UgYW5kIGlkaW9zeWNyYXRpYyBjYXRzIG9uIHRoZSB3YXkuIFdlIGhvcGUgeW91IGNhbiBjZWxlYnJhdGUgd2l0aCB1cyFcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuaW50cm8ge1xuICAgICAgICAgICAgZ3JpZC1hcmVhOiBpbnRybztcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgbWluLWhlaWdodDogNjB2aDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuaW50cm8taW1hZ2Uge1xuICAgICAgICAgICAgaGVpZ2h0OiAxNDBweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmludHJvLWRlc2NyaXB0aW9uIHtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgICAgICAgICAgbWF4LXdpZHRoOiA4NTBweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcblxuICAgICAgICAgICAgLmludHJvIHtcbiAgICAgICAgICAgICAgbWluLWhlaWdodDogNTB2aDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuXG4gICAgICAgICAgICAuaW50cm8ge1xuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA1MDBweDtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmludHJvLWltYWdlIHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDI0MHB4O1xuICAgICAgICAgICAgICBsZWZ0OiAtNzBweDtcbiAgICAgICAgICAgICAgdG9wOiAtNTBweDtcbiAgICAgICAgICAgICAgei1pbmRleDogLTE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuaW50cm8taGVhZGVyIHtcbiAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDE2MHB4O1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvaGVhZGVyPlxuICAgIClcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEludHJvXG4iXX0= */\n/*@ sourceURL=/Users/dorachan/workspace/tamsenwedding/pages/_intro.js */"));
    }
  }]);

  return Intro;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Intro);

/***/ }),

/***/ "./pages/_registry.js":
/*!****************************!*\
  !*** ./pages/_registry.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_block__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/block */ "./components/block.js");
/* harmony import */ var _components_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/list */ "./components/list.js");
/* harmony import */ var _components_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/link */ "./components/link.js");





var _jsxFileName = "/Users/dorachan/workspace/tamsenwedding/pages/_registry.js";








var Registry =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Registry, _React$Component);

  function Registry() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Registry);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Registry).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Registry, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("section", {
        id: "registry",
        className: "jsx-747987350" + " " + 'registry',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h3", {
        className: "jsx-747987350",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, "Registry"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_link__WEBPACK_IMPORTED_MODULE_11__["default"], {
        linkType: "btn",
        linkTo: "https://www.zola.com/registry/derekanddora",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: "/static/icon_zola.svg",
        alt: "",
        className: "jsx-747987350" + " " + 'btn-icon',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "jsx-747987350" + " " + 'btn-cta',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, "Browse Zola")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "747987350",
        __self: this
      }, ".registry.jsx-747987350{grid-area:registry;background-color:var(--color-grue);color:var(--color-white);padding:40px 32px 48px 32px;text-align:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.registry.jsx-747987350 h3.jsx-747987350{margin-top:8px;margin-bottom:16px;}.btn-icon.jsx-747987350{width:30px;margin-right:8px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kb3JhY2hhbi93b3Jrc3BhY2UvdGFtc2Vud2VkZGluZy9wYWdlcy9fcmVnaXN0cnkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0JvQixBQUdnQyxBQVVKLEFBSUosV0FDTSxJQUpFLElBVmdCLFNBZXJDLE1BSkEsb0JBVjJCLHlCQUNHLDRCQUNWLGtCQUNMLDBFQUNTLDhFQUNILDZGQUNyQiIsImZpbGUiOiIvVXNlcnMvZG9yYWNoYW4vd29ya3NwYWNlL3RhbXNlbndlZGRpbmcvcGFnZXMvX3JlZ2lzdHJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5pbXBvcnQgQmxvY2sgZnJvbSAnLi4vY29tcG9uZW50cy9ibG9jayc7XG5pbXBvcnQgTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL2xpc3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnLi4vY29tcG9uZW50cy9saW5rJztcblxuY2xhc3MgUmVnaXN0cnkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxzZWN0aW9uIGlkPSdyZWdpc3RyeScgY2xhc3NOYW1lPSdyZWdpc3RyeSc+XG4gICAgICAgIDxoMz5SZWdpc3RyeTwvaDM+XG4gICAgICAgIDxMaW5rIGxpbmtUeXBlPSdidG4nIGxpbmtUbz0naHR0cHM6Ly93d3cuem9sYS5jb20vcmVnaXN0cnkvZGVyZWthbmRkb3JhJz5cbiAgICAgICAgICA8aW1nIHNyYz0nL3N0YXRpYy9pY29uX3pvbGEuc3ZnJyBjbGFzc05hbWU9J2J0bi1pY29uJyBhbHQ9JycgLz5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2J0bi1jdGEnPkJyb3dzZSBab2xhPC9zcGFuPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAucmVnaXN0cnkge1xuICAgICAgICAgICAgZ3JpZC1hcmVhOiByZWdpc3RyeTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWdydWUpO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDQwcHggMzJweCA0OHB4IDMycHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5yZWdpc3RyeSBoMyB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYnRuLWljb24ge1xuICAgICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICApXG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWdpc3RyeVxuIl19 */\n/*@ sourceURL=/Users/dorachan/workspace/tamsenwedding/pages/_registry.js */"));
    }
  }]);

  return Registry;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Registry);

/***/ }),

/***/ "./pages/_travel.js":
/*!**************************!*\
  !*** ./pages/_travel.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_block__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/block */ "./components/block.js");
/* harmony import */ var _components_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/list */ "./components/list.js");
/* harmony import */ var _components_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/link */ "./components/link.js");





var _jsxFileName = "/Users/dorachan/workspace/tamsenwedding/pages/_travel.js";








var Travel =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Travel, _React$Component);

  function Travel() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Travel);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Travel).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Travel, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        id: "travel",
        className: "jsx-2546728655" + " " + 'travel',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h3", {
        className: "jsx-2546728655",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, "Travel"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_block__WEBPACK_IMPORTED_MODULE_9__["default"], {
        blockTitle: "Location",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-2546728655",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, "The Outdoor Art Club"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-2546728655",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, "1 West Blithedale Avenue, Mill Valley CA 94941"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_list__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_list__WEBPACK_IMPORTED_MODULE_10__["default"].Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_link__WEBPACK_IMPORTED_MODULE_11__["default"], {
        linkTo: "https://goo.gl/maps/j939V7DoxNk18MA19",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, "Get Directions >")))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_block__WEBPACK_IMPORTED_MODULE_9__["default"], {
        blockTitle: "Parking & Transportation",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, "The venue doesn't have it's own parking but there is an outdoor lot one block away. It's only a 3-5 minute walk. If you're extra lazy we can arrange a pedicab. Kidding. They don't have pedicabs in Mill Valley.", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_list__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_list__WEBPACK_IMPORTED_MODULE_10__["default"].Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_link__WEBPACK_IMPORTED_MODULE_11__["default"], {
        linkTo: "https://goo.gl/maps/umZszdRDe5SbM7mk7",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, "Get Directions >")))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_block__WEBPACK_IMPORTED_MODULE_9__["default"], {
        blockTitle: "Accomodations",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, "If you're coming in from out of town, we recommend staying in San Francisco or Mill Valley. Treat yo self.", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_list__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_list__WEBPACK_IMPORTED_MODULE_10__["default"].Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_link__WEBPACK_IMPORTED_MODULE_11__["default"], {
        linkTo: "https://www.airbnb.com/s/Mill-Valley--CA",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, "Browse Airbnb >")))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "2546728655",
        __self: this
      }, ".travel.jsx-2546728655{grid-area:travel;padding-top:24px;}.travel.jsx-2546728655 h3.jsx-2546728655{margin-bottom:24px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kb3JhY2hhbi93b3Jrc3BhY2UvdGFtc2Vud2VkZGluZy9wYWdlcy9fdHJhdmVsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStCb0IsQUFHOEIsQUFJRSxpQkFIRixFQUluQixlQUhBIiwiZmlsZSI6Ii9Vc2Vycy9kb3JhY2hhbi93b3Jrc3BhY2UvdGFtc2Vud2VkZGluZy9wYWdlcy9fdHJhdmVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5pbXBvcnQgQmxvY2sgZnJvbSAnLi4vY29tcG9uZW50cy9ibG9jayc7XG5pbXBvcnQgTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL2xpc3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnLi4vY29tcG9uZW50cy9saW5rJztcblxuY2xhc3MgVHJhdmVsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGlkPSd0cmF2ZWwnIGNsYXNzTmFtZT0ndHJhdmVsJz5cbiAgICAgICAgPGgzPlRyYXZlbDwvaDM+XG4gICAgICAgIDxCbG9jayBibG9ja1RpdGxlPSdMb2NhdGlvbic+XG4gICAgICAgICAgPGRpdj5UaGUgT3V0ZG9vciBBcnQgQ2x1YjwvZGl2PlxuICAgICAgICAgIDxkaXY+MSBXZXN0IEJsaXRoZWRhbGUgQXZlbnVlLCBNaWxsIFZhbGxleSBDQSA5NDk0MTwvZGl2PlxuICAgICAgICAgIDxMaXN0PlxuICAgICAgICAgICAgPExpc3QuSXRlbT48TGluayBsaW5rVG89J2h0dHBzOi8vZ29vLmdsL21hcHMvajkzOVY3RG94TmsxOE1BMTknPkdldCBEaXJlY3Rpb25zID48L0xpbms+PC9MaXN0Lkl0ZW0+XG4gICAgICAgICAgPC9MaXN0PlxuICAgICAgICA8L0Jsb2NrPlxuICAgICAgICA8QmxvY2sgYmxvY2tUaXRsZT0nUGFya2luZyAmIFRyYW5zcG9ydGF0aW9uJz5cbiAgICAgICAgICBUaGUgdmVudWUgZG9lc24ndCBoYXZlIGl0J3Mgb3duIHBhcmtpbmcgYnV0IHRoZXJlIGlzIGFuIG91dGRvb3IgbG90IG9uZSBibG9jayBhd2F5LiBJdCdzIG9ubHkgYSAzLTUgbWludXRlIHdhbGsuIElmIHlvdSdyZSBleHRyYSBsYXp5IHdlIGNhbiBhcnJhbmdlIGEgcGVkaWNhYi4gS2lkZGluZy4gVGhleSBkb24ndCBoYXZlIHBlZGljYWJzIGluIE1pbGwgVmFsbGV5LlxuICAgICAgICAgIDxMaXN0PlxuICAgICAgICAgICAgPExpc3QuSXRlbT48TGluayBsaW5rVG89J2h0dHBzOi8vZ29vLmdsL21hcHMvdW1ac3pkUkRlNVNiTTdtazcnPkdldCBEaXJlY3Rpb25zID48L0xpbms+PC9MaXN0Lkl0ZW0+XG4gICAgICAgICAgPC9MaXN0PlxuICAgICAgICA8L0Jsb2NrPlxuICAgICAgICA8QmxvY2sgYmxvY2tUaXRsZT0nQWNjb21vZGF0aW9ucyc+XG4gICAgICAgICAgSWYgeW91J3JlIGNvbWluZyBpbiBmcm9tIG91dCBvZiB0b3duLCB3ZSByZWNvbW1lbmQgc3RheWluZyBpbiBTYW4gRnJhbmNpc2NvIG9yIE1pbGwgVmFsbGV5LiBUcmVhdCB5byBzZWxmLlxuICAgICAgICAgIDxMaXN0PlxuICAgICAgICAgICAgPExpc3QuSXRlbT48TGluayBsaW5rVG89J2h0dHBzOi8vd3d3LmFpcmJuYi5jb20vcy9NaWxsLVZhbGxleS0tQ0EnPkJyb3dzZSBBaXJibmIgPjwvTGluaz48L0xpc3QuSXRlbT5cbiAgICAgICAgICA8L0xpc3Q+XG4gICAgICAgIDwvQmxvY2s+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAudHJhdmVsIHtcbiAgICAgICAgICAgIGdyaWQtYXJlYTogdHJhdmVsO1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDI0cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC50cmF2ZWwgaDMge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRyYXZlbFxuIl19 */\n/*@ sourceURL=/Users/dorachan/workspace/tamsenwedding/pages/_travel.js */"));
    }
  }]);

  return Travel;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Travel);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_form__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/form */ "./components/form.js");
/* harmony import */ var _components_banner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/banner */ "./components/banner.js");
/* harmony import */ var _components_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/input */ "./components/input.js");
/* harmony import */ var _components_radio__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/radio */ "./components/radio.js");
/* harmony import */ var _components_textarea__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/textarea */ "./components/textarea.js");
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/button */ "./components/button.js");
/* harmony import */ var _intro__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./_intro */ "./pages/_intro.js");
/* harmony import */ var _gallery__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./_gallery */ "./pages/_gallery.js");
/* harmony import */ var _travel__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./_travel */ "./pages/_travel.js");
/* harmony import */ var _registry__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./_registry */ "./pages/_registry.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./_footer */ "./pages/_footer.js");









var _jsxFileName = "/Users/dorachan/workspace/tamsenwedding/pages/index.js";















var encode = function encode(data) {
  return _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_8___default()(data).map(function (key) {
    return encodeURIComponent(key) + "=" + encodeURIComponent(data[key]);
  }).join("&");
};

var Home =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Home, _React$Component);

  function Home(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Home);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Home).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleSubmit", function (e) {
      fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: encode(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
          "form-name": "rsvp"
        }, _this.state))
      }).then(function () {
        _this.setState({
          isHidden: true
        });
      })["catch"](function (error) {
        return alert(error);
      });
      e.preventDefault();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleChange", function (e) {
      return _this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])({}, e.target.name, e.target.value));
    });

    _this.state = {
      name: "",
      attendance: "",
      guests: "",
      preferences: "",
      isHidden: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Home, [{
    key: "toggleHidden",
    value: function toggleHidden() {
      this.setState({
        isHidden: this.state.isHidden
      });
    }
  }, {
    key: "renderHoneypot",
    value: function renderHoneypot() {
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("form", {
        name: "rsvp",
        netlify: "true",
        "netlify-honeypot": "bot-field",
        hidden: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("input", {
        type: "text",
        name: "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("input", {
        type: "radio",
        name: "attendance",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("input", {
        type: "text",
        name: "guests",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("textarea", {
        name: "diet",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }));
    }
  }, {
    key: "renderForm",
    value: function renderForm() {
      var _this$state = this.state,
          name = _this$state.name,
          attendance = _this$state.attendance,
          guests = _this$state.guests,
          diet = _this$state.diet;
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_form__WEBPACK_IMPORTED_MODULE_12__["default"], {
        submit: this.handleSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_input__WEBPACK_IMPORTED_MODULE_14__["default"], {
        change: this.handleChange,
        inputName: "name",
        labelName: "Full Name",
        placeholder: "Full Name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_radio__WEBPACK_IMPORTED_MODULE_15__["default"], {
        inputName: "attendance",
        labelName: "Attendance",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_radio__WEBPACK_IMPORTED_MODULE_15__["default"].Option, {
        change: this.handleChange,
        value: "Joyfully attending",
        inputName: "attendance",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_radio__WEBPACK_IMPORTED_MODULE_15__["default"].Option, {
        change: this.handleChange,
        value: "Regretfully declining",
        inputName: "attendance",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_input__WEBPACK_IMPORTED_MODULE_14__["default"], {
        type: "number",
        change: this.handleChange,
        inputName: "guests",
        labelName: "# of Guests",
        placeholder: "0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_textarea__WEBPACK_IMPORTED_MODULE_16__["default"], {
        change: this.handleChange,
        inputName: "diet",
        labelName: "Dietary Restrictions",
        placeholder: "Description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_button__WEBPACK_IMPORTED_MODULE_17__["default"], {
        cta: "Submit RSVP",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }));
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-864084837" + " " + 'container',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_11___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("title", {
        className: "jsx-864084837",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, "Tamsen Wedding"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("link", {
        rel: "shortcut icon",
        href: "/static/favicon-pine.ico",
        className: "jsx-864084837",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      })), this.renderHoneypot(), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-864084837" + " " + 'container-sections',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_intro__WEBPACK_IMPORTED_MODULE_18__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_gallery__WEBPACK_IMPORTED_MODULE_19__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        id: "RSVP",
        className: "jsx-864084837" + " " + 'rsvp',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h3", {
        className: "jsx-864084837",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, "RSVP"), !this.state.isHidden ? this.renderForm() : react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_banner__WEBPACK_IMPORTED_MODULE_13__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_travel__WEBPACK_IMPORTED_MODULE_20__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_registry__WEBPACK_IMPORTED_MODULE_21__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_footer__WEBPACK_IMPORTED_MODULE_22__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
        id: "864084837",
        __self: this
      }, "@import url('https://fonts.googleapis.com/css?family=Libre+Baskerville:400,700|Poppins:200,300,400,600&display=swap');:root{--color-gray-dark:#BABABA;--color-gray-medium:#D8D8D8;--color-gray-light:#F3F3F3;--color-green-dark:#29341B;--color-green-medium:#9DB580;--color-green-light:#c2d1b0;--color-grue:#5A685B;--color-black:#000000;--color-white:#FFFFFF;}body{font-family:'Poppins',sans-serif;font-weight:200;font-size:17px;color:var(--color-green-dark);margin:0;padding:0;height:100vh;}h1,h2,h3,h4,h5,h6{text-transform:uppercase;-webkit-letter-spacing:0.1em;-moz-letter-spacing:0.1em;-ms-letter-spacing:0.1em;letter-spacing:0.1em;}h1,h2,h3,h4,h5{font-family:'Libre Baskerville',serif;font-weight:700;margin:8px 0;}h1{font-size:2.010em;}h2{font-size:1.853em;}h3{font-size:1.563em;}h4{font-size:1.25em;}h5{font-size:1em;}h6{font-size:0.8em;font-weight:600;margin:0;}.container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;max-width:1600px;margin:0 auto;}.container-sections{display:grid;grid-template-columns:24px 1fr 24px;grid-row-gap:40px;grid-template-areas: \". intro .\" \". gallery .\" \". travel .\" \". rsvp .\" \". registry .\" \"footer footer footer\";}.rsvp{grid-area:rsvp;padding-top:24px;}@media (min-width:768px) and (max-width:992px){.container-sections{grid-template-columns:48px 1fr 48px;grid-row-gap:80px;}}@media (min-width:992px){body{font-size:16px;font-weight:300;}h1{font-size:4.052em;}h2{font-size:2.010em;}h3{font-size:1.853em;}h4{font-size:1.563em;}h5{font-size:1.25em;}h6{font-size:0.9em;}.container-sections{grid-template-columns:1fr 3fr 3fr 1fr;grid-row-gap:100px;grid-column-gap:10px;grid-template-areas: \". intro intro .\" \". gallery gallery .\" \". travel rsvp .\" \". registry registry .\" \"footer footer footer footer\";}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kb3JhY2hhbi93b3Jrc3BhY2UvdGFtc2Vud2VkZGluZy9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnRzJCLEFBRWdJLEFBR3pGLEFBWVEsQUFVVCxBQUtjLEFBTXJCLEFBR0EsQUFHQSxBQUdELEFBR0gsQUFHRSxBQU1ILEFBUUEsQUFjRSxBQU91QixBQVNyQixBQUtHLEFBR0EsQUFHQSxBQUdBLEFBR0QsQUFHRCxBQUlzQixhQXJESixDQWpCdEMsQ0ErQm1CLEFBZ0JDLENBNUNGLEFBZ0VoQixDQXRFRixBQW1FRSxDQTVFRixBQUdBLEFBR0EsQUEwREUsQUFHQSxBQUdBLEFBR0EsT0FwRnFCLENBdEJPLEtBNkY1QixDQTVDUyxBQTRCWCxDQWpFa0IsR0F1RUksRUF4REosQUF5RkssR0FsRXZCLFFBckNpQixBQWtERyxLQTlEUyxBQTJCZCxBQXdEYixHQWlDdUIsT0F2R08sR0FlaEMsQUEwQ0UsT0FqQnVCLElBc0VyQixHQTFIeUIsYUFhbEIsU0FDQyxLQWJtQixLQWNoQixhQUNmLEFBS0EsV0FuQjhCLDRCQUNQLFFBa0RGLEdBaUJyQixVQWxFd0Isc0JBQ0EsR0FzSHRCLG1CQXJIRixvQ0FnRG1CLGlCQUNILGNBQ2hCIiwiZmlsZSI6Ii9Vc2Vycy9kb3JhY2hhbi93b3Jrc3BhY2UvdGFtc2Vud2VkZGluZy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5cbmltcG9ydCBGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvZm9ybSc7XG5pbXBvcnQgQmFubmVyIGZyb20gJy4uL2NvbXBvbmVudHMvYmFubmVyJztcbmltcG9ydCBJbnB1dCBmcm9tICcuLi9jb21wb25lbnRzL2lucHV0JztcbmltcG9ydCBSYWRpbyBmcm9tICcuLi9jb21wb25lbnRzL3JhZGlvJztcbmltcG9ydCBUZXh0QXJlYSBmcm9tICcuLi9jb21wb25lbnRzL3RleHRhcmVhJztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vY29tcG9uZW50cy9idXR0b24nO1xuXG5pbXBvcnQgSW50cm8gZnJvbSAnLi9faW50cm8nO1xuaW1wb3J0IEdhbGxlcnkgZnJvbSAnLi9fZ2FsbGVyeSc7XG5pbXBvcnQgVHJhdmVsIGZyb20gJy4vX3RyYXZlbCc7XG5pbXBvcnQgUmVnaXN0cnkgZnJvbSAnLi9fcmVnaXN0cnknO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuL19mb290ZXInO1xuXG5jb25zdCBlbmNvZGUgPSAoZGF0YSkgPT4ge1xuICByZXR1cm4gT2JqZWN0LmtleXMoZGF0YSlcbiAgICAubWFwKGtleSA9PiBlbmNvZGVVUklDb21wb25lbnQoa2V5KSArIFwiPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KGRhdGFba2V5XSkpXG4gICAgLmpvaW4oXCImXCIpO1xufVxuXG5jbGFzcyBIb21lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgbmFtZTogXCJcIiwgYXR0ZW5kYW5jZTogXCJcIiwgZ3Vlc3RzOiBcIlwiLCBwcmVmZXJlbmNlczogXCJcIiwgaXNIaWRkZW46IGZhbHNlIH07XG4gIH1cblxuICB0b2dnbGVIaWRkZW4oKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpc0hpZGRlbjogdGhpcy5zdGF0ZS5pc0hpZGRlblxuICAgIH0pXG4gIH1cblxuXG4gIGhhbmRsZVN1Ym1pdCA9IGUgPT4ge1xuICAgIGZldGNoKFwiL1wiLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiIH0sXG4gICAgICBib2R5OiBlbmNvZGUoeyBcImZvcm0tbmFtZVwiOiBcInJzdnBcIiwgLi4udGhpcy5zdGF0ZSB9KVxuICAgIH0pXG4gICAgICAudGhlbigoKSA9PiB7IHRoaXMuc2V0U3RhdGUoeyBpc0hpZGRlbjogdHJ1ZSB9KX0pXG4gICAgICAuY2F0Y2goZXJyb3IgPT4gYWxlcnQoZXJyb3IpKTtcblxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgfTtcblxuICBoYW5kbGVDaGFuZ2UgPSBlID0+XG4gICAgdGhpcy5zZXRTdGF0ZSh7IFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUgfSk7XG5cbiAgcmVuZGVySG9uZXlwb3QoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxmb3JtIG5hbWU9J3JzdnAnIG5ldGxpZnk9J3RydWUnIG5ldGxpZnktaG9uZXlwb3Q9J2JvdC1maWVsZCcgaGlkZGVuPlxuICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgbmFtZT0nbmFtZScgLz5cbiAgICAgICAgPGlucHV0IHR5cGU9J3JhZGlvJyBuYW1lPSdhdHRlbmRhbmNlJyAvPlxuICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgbmFtZT0nZ3Vlc3RzJyAvPlxuICAgICAgICA8dGV4dGFyZWEgbmFtZT0nZGlldCcgLz5cbiAgICAgIDwvZm9ybT5cbiAgICApXG4gIH1cblxuICByZW5kZXJGb3JtKCkge1xuICAgIGNvbnN0IHsgbmFtZSwgYXR0ZW5kYW5jZSwgZ3Vlc3RzLCBkaWV0IH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxGb3JtIHN1Ym1pdD17IHRoaXMuaGFuZGxlU3VibWl0IH0+XG4gICAgICAgIDxJbnB1dCBjaGFuZ2U9eyB0aGlzLmhhbmRsZUNoYW5nZSB9IGlucHV0TmFtZT0nbmFtZScgbGFiZWxOYW1lPSdGdWxsIE5hbWUnIHBsYWNlaG9sZGVyPSdGdWxsIE5hbWUnIC8+XG4gICAgICAgIDxSYWRpbyBpbnB1dE5hbWU9J2F0dGVuZGFuY2UnIGxhYmVsTmFtZT0nQXR0ZW5kYW5jZSc+XG4gICAgICAgICAgPFJhZGlvLk9wdGlvbiBjaGFuZ2U9eyB0aGlzLmhhbmRsZUNoYW5nZSB9IHZhbHVlPSdKb3lmdWxseSBhdHRlbmRpbmcnIGlucHV0TmFtZT0nYXR0ZW5kYW5jZScgLz5cbiAgICAgICAgICA8UmFkaW8uT3B0aW9uIGNoYW5nZT17IHRoaXMuaGFuZGxlQ2hhbmdlIH0gdmFsdWU9J1JlZ3JldGZ1bGx5IGRlY2xpbmluZycgaW5wdXROYW1lPSdhdHRlbmRhbmNlJy8+XG4gICAgICAgIDwvUmFkaW8+XG4gICAgICAgIDxJbnB1dCB0eXBlPSdudW1iZXInIGNoYW5nZT17IHRoaXMuaGFuZGxlQ2hhbmdlIH0gaW5wdXROYW1lPSdndWVzdHMnIGxhYmVsTmFtZT0nIyBvZiBHdWVzdHMnIHBsYWNlaG9sZGVyPScwJyAvPlxuICAgICAgICA8VGV4dEFyZWEgY2hhbmdlPXsgdGhpcy5oYW5kbGVDaGFuZ2UgfSBpbnB1dE5hbWU9J2RpZXQnIGxhYmVsTmFtZT0nRGlldGFyeSBSZXN0cmljdGlvbnMnIHBsYWNlaG9sZGVyPSdEZXNjcmlwdGlvbicgLz5cbiAgICAgICAgPEJ1dHRvbiBjdGE9J1N1Ym1pdCBSU1ZQJyAvPlxuICAgICAgPC9Gb3JtPlxuICAgIClcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDx0aXRsZT5UYW1zZW4gV2VkZGluZzwvdGl0bGU+XG4gICAgICAgICAgPGxpbmsgcmVsPVwic2hvcnRjdXQgaWNvblwiIGhyZWY9XCIvc3RhdGljL2Zhdmljb24tcGluZS5pY29cIi8+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgeyB0aGlzLnJlbmRlckhvbmV5cG90KCkgfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyLXNlY3Rpb25zJz5cbiAgICAgICAgICA8SW50cm8gLz5cbiAgICAgICAgICA8R2FsbGVyeSAvPlxuICAgICAgICAgIDxkaXYgaWQ9J1JTVlAnIGNsYXNzTmFtZT0ncnN2cCc+XG4gICAgICAgICAgICA8aDM+UlNWUDwvaDM+XG4gICAgICAgICAgICB7ICF0aGlzLnN0YXRlLmlzSGlkZGVuID8gdGhpcy5yZW5kZXJGb3JtKCkgOiA8QmFubmVyIC8+IH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8VHJhdmVsIC8+XG4gICAgICAgICAgPFJlZ2lzdHJ5IC8+XG4gICAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUxpYnJlK0Jhc2tlcnZpbGxlOjQwMCw3MDB8UG9wcGluczoyMDAsMzAwLDQwMCw2MDAmZGlzcGxheT1zd2FwJyk7XG5cbiAgICAgICAgICA6cm9vdCB7XG4gICAgICAgICAgICAtLWNvbG9yLWdyYXktZGFyazogI0JBQkFCQTtcbiAgICAgICAgICAgIC0tY29sb3ItZ3JheS1tZWRpdW06ICNEOEQ4RDg7XG4gICAgICAgICAgICAtLWNvbG9yLWdyYXktbGlnaHQ6ICNGM0YzRjM7XG4gICAgICAgICAgICAtLWNvbG9yLWdyZWVuLWRhcms6ICMyOTM0MUI7XG4gICAgICAgICAgICAtLWNvbG9yLWdyZWVuLW1lZGl1bTogIzlEQjU4MDtcbiAgICAgICAgICAgIC0tY29sb3ItZ3JlZW4tbGlnaHQ6ICNjMmQxYjA7XG4gICAgICAgICAgICAtLWNvbG9yLWdydWU6ICM1QTY4NUI7XG4gICAgICAgICAgICAtLWNvbG9yLWJsYWNrOiAjMDAwMDAwO1xuICAgICAgICAgICAgLS1jb2xvci13aGl0ZTogI0ZGRkZGRjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICBmb250LXdlaWdodDogMjAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLWdyZWVuLWRhcmspO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGgxLCBoMiwgaDMsIGg0LCBoNSB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ0xpYnJlIEJhc2tlcnZpbGxlJywgc2VyaWY7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgbWFyZ2luOiA4cHggMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBoMSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDIuMDEwZW07XG4gICAgICAgICAgfVxuICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS44NTNlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaDMge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjU2M2VtO1xuICAgICAgICAgIH1cbiAgICAgICAgICBoNCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuMjVlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaDUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgICAgICAgfVxuICAgICAgICAgIGg2IHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIG1heC13aWR0aDogMTYwMHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmNvbnRhaW5lci1zZWN0aW9ucyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNHB4IDFmciAyNHB4O1xuICAgICAgICAgICAgZ3JpZC1yb3ctZ2FwOiA0MHB4O1xuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICAgICAgICAgICAgXCIuIGludHJvIC5cIlxuICAgICAgICAgICAgICBcIi4gZ2FsbGVyeSAuXCJcbiAgICAgICAgICAgICAgXCIuIHRyYXZlbCAuXCJcbiAgICAgICAgICAgICAgXCIuIHJzdnAgLlwiXG4gICAgICAgICAgICAgIFwiLiByZWdpc3RyeSAuXCJcbiAgICAgICAgICAgICAgXCJmb290ZXIgZm9vdGVyIGZvb3RlclwiXG4gICAgICAgICAgICA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnJzdnAge1xuICAgICAgICAgICAgZ3JpZC1hcmVhOiByc3ZwO1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDI0cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcblxuICAgICAgICAgICAgLmNvbnRhaW5lci1zZWN0aW9ucyB7XG4gICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDhweCAxZnIgNDhweDtcbiAgICAgICAgICAgICAgZ3JpZC1yb3ctZ2FwOiA4MHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG5cbiAgICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiA0LjA1MmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDIuMDEwZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoMyB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS44NTNlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGg0IHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjU2M2VtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaDUge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDEuMjVlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGg2IHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjllbTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmNvbnRhaW5lci1zZWN0aW9ucyB7XG4gICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmciAzZnIgMWZyO1xuICAgICAgICAgICAgICBncmlkLXJvdy1nYXA6IDEwMHB4O1xuICAgICAgICAgICAgICBncmlkLWNvbHVtbi1nYXA6IDEwcHg7XG4gICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgICAgICAgICAgICAgXCIuIGludHJvIGludHJvIC5cIlxuICAgICAgICAgICAgICAgIFwiLiBnYWxsZXJ5IGdhbGxlcnkgLlwiXG4gICAgICAgICAgICAgICAgXCIuIHRyYXZlbCByc3ZwIC5cIlxuICAgICAgICAgICAgICAgIFwiLiByZWdpc3RyeSByZWdpc3RyeSAuXCJcbiAgICAgICAgICAgICAgICBcImZvb3RlciBmb290ZXIgZm9vdGVyIGZvb3RlclwiXG4gICAgICAgICAgICAgIDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVxuIl19 */\n/*@ sourceURL=/Users/dorachan/workspace/tamsenwedding/pages/index.js */"));
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/dorachan/workspace/tamsenwedding/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-scroll-into-view":
/*!*****************************************!*\
  !*** external "react-scroll-into-view" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-scroll-into-view");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map