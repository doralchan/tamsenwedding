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
        className: "jsx-1914287710" + " " + (btnClasses || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, this.props.cta, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "1914287710",
        __self: this
      }, ".btn.jsx-1914287710,.btn.jsx-1914287710:after,.btn.jsx-1914287710:hover{-webkit-transition:all 0.4s ease-in-out;transition:all 0.4s ease-in-out;}.btn.jsx-1914287710{height:60px;font-family:inherit;font-weight:600;text-transform:uppercase;border:2px solid var(--color-black-light);background-color:var(--color-black-light);color:var(--color-white);-webkit-letter-spacing:0.1em;-moz-letter-spacing:0.1em;-ms-letter-spacing:0.1em;letter-spacing:0.1em;text-rendering:optimizeLegibility;box-sizing:border-box;font-size:0.8em;min-width:200px;position:relative;overflow:hidden;}.btn.jsx-1914287710:focus{outline:none;}.btn.jsx-1914287710:before,.btn.jsx-1914287710:after{background-color:var(--color-black);content:'';position:absolute;z-index:-1;}.btn.jsx-1914287710:hover{border-color:var(--color-black);cursor:pointer;z-index:2;}.btn.jsx-1914287710:after{height:100%;left:-35%;top:0;-webkit-transform:skew(50deg);-ms-transform:skew(50deg);transform:skew(50deg);-webkit-transition-duration:0.6s;transition-duration:0.6s;-webkit-transform-origin:top left;-ms-transform-origin:top left;transform-origin:top left;width:0;}.btn.jsx-1914287710:hover.jsx-1914287710:after{height:100%;width:135%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kb3JhY2hhbi93b3Jrc3BhY2UvdGFtc2Vud2VkZGluZy9jb21wb25lbnRzL2J1dHRvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQm9CLEFBSzZDLEFBR3BCLEFBZ0JDLEFBSXVCLEFBTUosQUFLcEIsQUFTQSxZQXZDUSxBQStCVixBQVNDLENBeEJiLFNBZ0JRLENBU1IsS0FSd0IsSUFoQ04sQUF5QkQsSUFOSixXQUNPLEFBTVIsQ0F6QmUsU0EwQjNCLFFBTmEsT0F6QmIsQ0FNNEMsR0FvQjVDLDhCQVcyQixTQTlCaUIsMENBQ2pCLE9BOEJDLGtCQTdCTCx3RUE4QmIsUUFDVixxQkE5Qm9DLGtDQUNaLHNCQUNOLGdCQUNBLGdCQUNFLGtCQUNGLGdCQUNsQiIsImZpbGUiOiIvVXNlcnMvZG9yYWNoYW4vd29ya3NwYWNlL3RhbXNlbndlZGRpbmcvY29tcG9uZW50cy9idXR0b24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmNsYXNzIEJ1dHRvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgY3RhOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgY3RhOiAnQnV0dG9uJ1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGJ0bkNsYXNzZXMgPSBjbGFzc05hbWVzKFxuICAgICAgJ2J0bicsXG4gICAgICAnYnRuLScrIHRoaXMucHJvcHMuYnRuVHlwZSxcbiAgICAgIHRoaXMucHJvcHMuY2xhc3NOYW1lXG4gICAgKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCcgY2xhc3NOYW1lPXsgYnRuQ2xhc3NlcyB9PlxuICAgICAgICB7IHRoaXMucHJvcHMuY3RhIH1cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5idG4sXG4gICAgICAgICAgLmJ0bjphZnRlcixcbiAgICAgICAgICAuYnRuOmhvdmVyIHtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYnRuIHtcbiAgICAgICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2xvci1ibGFjay1saWdodCk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ibGFjay1saWdodCk7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xuICAgICAgICAgICAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuOGVtO1xuICAgICAgICAgICAgbWluLXdpZHRoOiAyMDBweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgfVxuICAgICAgICAgIC5idG46Zm9jdXMge1xuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmJ0bjpiZWZvcmUsXG4gICAgICAgICAgLmJ0bjphZnRlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ibGFjayk7XG4gICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYnRuOmhvdmVyIHtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tY29sb3ItYmxhY2spO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmJ0bjphZnRlciB7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBsZWZ0OiAtMzUlO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBza2V3KDUwZGVnKTtcbiAgICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNnM7XG4gICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgbGVmdDtcbiAgICAgICAgICAgIHdpZHRoOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYnRuOmhvdmVyOmFmdGVyIHtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIHdpZHRoOiAxMzUlO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9idXR0b24+XG4gICAgKVxuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uXG4iXX0= */\n/*@ sourceURL=/Users/dorachan/workspace/tamsenwedding/components/button.js */"));
    }
  }]);

  return Button;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(Button, "propTypes", {
  cta: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string.isRequired
});

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(Button, "defaultProps", {
  cta: 'Button'
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
        className: "jsx-3720623214" + " " + 'input',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "jsx-3720623214" + " " + 'input-label',
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
        className: "jsx-3720623214" + " " + (inputClasses || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "3720623214",
        __self: this
      }, ".input.jsx-3720623214{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin-bottom:24px;-webkit-flex:1;-ms-flex:1;flex:1;}.input-label.jsx-3720623214{font-size:0.9em;text-transform:uppercase;-webkit-letter-spacing:0.1em;-moz-letter-spacing:0.1em;-ms-letter-spacing:0.1em;letter-spacing:0.1em;font-weight:600;margin-bottom:8px;}.input-text.jsx-3720623214{height:50px;font-size:inherit;padding:0 16px;border-style:solid;border-radius:0;box-shadow:none !important;border:2px solid var(--color-gray);outline:none;}.input-text.jsx-3720623214::-webkit-input-placeholder{font-weight:200;}.input-text.jsx-3720623214::-moz-placeholder{font-weight:200;}.input-text.jsx-3720623214:-ms-input-placeholder{font-weight:200;}.input-text.jsx-3720623214::placeholder{font-weight:200;}.input-text.jsx-3720623214:focus{border-color:var(--color-green-light);}.input-text.jsx-3720623214:focus{outline:none;}.input-number[type=number].jsx-3720623214::-webkit-inner-spin-button,.input-number[type=number].jsx-3720623214::-webkit-outer-spin-button{-webkit-appearance:none;margin:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kb3JhY2hhbi93b3Jrc3BhY2UvdGFtc2Vud2VkZGluZy9jb21wb25lbnRzL2lucHV0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtDb0IsQUFHMEIsQUFNRyxBQU9KLEFBVUksQUFHc0IsQUFHekIsQUFJVyxZQW5CTixDQWdCcEIsR0F2QjJCLEFBaUIzQixRQVVXLE1BbkJNLEdBb0JqQixLQVJBLEdBbkJ1QixJQVFGLG1CQUNILFVBaEJNLE1BaUJLLDJCQUNRLG1DQVZuQixBQVdILFVBbEJNLEdBbUJyQixHQVhvQixhQVBYLEtBUVQsNEJBUEEiLCJmaWxlIjoiL1VzZXJzL2RvcmFjaGFuL3dvcmtzcGFjZS90YW1zZW53ZWRkaW5nL2NvbXBvbmVudHMvaW5wdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmNsYXNzIElucHV0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBsYWJlbE5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGlucHV0TmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB0eXBlTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB0eXBlOiBQcm9wVHlwZXMub25lT2YoWyd0ZXh0JywgJ251bWJlciddKSxcbiAgICBjaGFuZ2U6IFByb3BUeXBlcy5mdW5jXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGxhYmVsTmFtZTogJ0xhYmVsJyxcbiAgICBwbGFjZWhvbGRlcjogJ0ZpZWxkJyxcbiAgICB0eXBlOiAndGV4dCdcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBpbnB1dENsYXNzZXMgPSBjbGFzc05hbWVzKCdpbnB1dC10ZXh0JywgdGhpcy5wcm9wcy50eXBlID09PSAnbnVtYmVyJyA/ICdpbnB1dC1udW1iZXInIDogJycpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxsYWJlbCBjbGFzc05hbWU9J2lucHV0Jz5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdpbnB1dC1sYWJlbCc+eyB0aGlzLnByb3BzLmxhYmVsTmFtZSB9PC9zcGFuPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBjbGFzc05hbWU9eyBpbnB1dENsYXNzZXMgfVxuICAgICAgICAgIHR5cGU9eyB0aGlzLnByb3BzLnR5cGUgfVxuICAgICAgICAgIG5hbWU9eyB0aGlzLnByb3BzLmlucHV0TmFtZSB9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9eyB0aGlzLnByb3BzLnBsYWNlaG9sZGVyIH1cbiAgICAgICAgICB2YWx1ZT17IHRoaXMucHJvcHMudmFsdWUgfVxuICAgICAgICAgIG9uQ2hhbmdlPXsgdGhpcy5wcm9wcy5jaGFuZ2UgfVxuICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgIC8+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuaW5wdXQge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmlucHV0LWxhYmVsIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45ZW07XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmlucHV0LXRleHQge1xuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgICAgICAgICAgcGFkZGluZzogMCAxNnB4O1xuICAgICAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2xvci1ncmF5KTtcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5pbnB1dC10ZXh0OjpwbGFjZWhvbGRlciB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogMjAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaW5wdXQtdGV4dDpmb2N1cyB7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLWdyZWVuLWxpZ2h0KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmlucHV0LXRleHQ6Zm9jdXMge1xuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmlucHV0LW51bWJlclt0eXBlPW51bWJlcl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXG4gICAgICAgICAgLmlucHV0LW51bWJlclt0eXBlPW51bWJlcl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xuICAgICAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9sYWJlbD5cbiAgICApXG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnB1dFxuIl19 */\n/*@ sourceURL=/Users/dorachan/workspace/tamsenwedding/components/input.js */"));
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
      var textClasses = classnames__WEBPACK_IMPORTED_MODULE_9___default()('link-text', this.props.className);
      var btnClasses = classnames__WEBPACK_IMPORTED_MODULE_9___default()('link-btn', this.props.className);
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: this.props.linkTo,
        target: "_blank",
        className: "jsx-1221105804" + " " + ((this.props.linkType === 'link-text' ? textClasses : btnClasses) || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, this.props.children, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "1221105804",
        __self: this
      }, ".link-text.jsx-1221105804{-webkit-text-decoration:none;text-decoration:none;font-weight:400;color:var(--color-coral);}.link-btn.jsx-1221105804,.link-btn.jsx-1221105804:after,.link-btn.jsx-1221105804:hover{-webkit-transition:all 0.4s;transition:all 0.4s;}.link-btn.jsx-1221105804{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:60px;font-family:inherit;-webkit-text-decoration:none;text-decoration:none;font-weight:600;text-transform:uppercase;border:2px solid var(--color-yellow);color:var(--color-yellow);-webkit-letter-spacing:0.1em;-moz-letter-spacing:0.1em;-ms-letter-spacing:0.1em;letter-spacing:0.1em;text-rendering:optimizeLegibility;font-size:0.8em;box-sizing:border-box;margin:8px;position:relative;overflow:hidden;width:250px;}.link-btn.jsx-1221105804:before,.link-btn.jsx-1221105804:after{background-color:var(--color-green-dark);content:'';position:absolute;z-index:-1;}.link-btn.jsx-1221105804:hover{border-color:var(--color-green-dark);color:var(--color-white);z-index:2;}.link-btn.jsx-1221105804:after{height:100%;left:-35%;top:0;-webkit-transform:skew(50deg);-ms-transform:skew(50deg);transform:skew(50deg);-webkit-transition-duration:0.6s;transition-duration:0.6s;-webkit-transform-origin:top left;-ms-transform-origin:top left;transform-origin:top left;width:0;}.link-btn.jsx-1221105804:hover.jsx-1221105804:after{height:100%;width:135%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kb3JhY2hhbi93b3Jrc3BhY2UvdGFtc2Vud2VkZGluZy9jb21wb25lbnRzL2xpbmsuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0JvQixBQUdrQyxBQU9GLEFBR1AsQUFxQjRCLEFBTUgsQUFLMUIsQUFTQSxZQVJGLEFBU0MsVUFSTCxDQVNQLEtBUnVCLFNBUEcsSUFOZCxPQXhCWixFQVBrQixFQWdDQyxVQU1QLElBckNlLElBZ0NmLEVBTVosRUE3QnlCLE9Bd0J6QixVQWhDQSxlQTJDMEIsMERBQ0MsU0FuQ04saUZBb0NaLFFBQ1QsSUFwQ2MsWUFDTyxvQkFDQyxrREFDTCxnQkFDUyx5QkFDWSxxQ0FDWCwwQkFDTCxxR0FDYSxrQ0FDbEIsZ0JBQ00sc0JBQ1gsV0FDTyxrQkFDRixnQkFDSixZQUNiIiwiZmlsZSI6Ii9Vc2Vycy9kb3JhY2hhbi93b3Jrc3BhY2UvdGFtc2Vud2VkZGluZy9jb21wb25lbnRzL2xpbmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmNsYXNzIExpbmsgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBsaW5rVG86IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgbGlua1R5cGU6IFByb3BUeXBlcy5vbmVPZihbJ2xpbmstdGV4dCcsICdsaW5rLWJ0biddKVxuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBsaW5rVHlwZTogJ2xpbmstdGV4dCdcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB0ZXh0Q2xhc3NlcyA9IGNsYXNzTmFtZXMoJ2xpbmstdGV4dCcsIHRoaXMucHJvcHMuY2xhc3NOYW1lKTtcbiAgICBjb25zdCBidG5DbGFzc2VzID0gY2xhc3NOYW1lcygnbGluay1idG4nLCB0aGlzLnByb3BzLmNsYXNzTmFtZSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGEgaHJlZj17IHRoaXMucHJvcHMubGlua1RvIH0gY2xhc3NOYW1lPXsgdGhpcy5wcm9wcy5saW5rVHlwZSA9PT0gJ2xpbmstdGV4dCcgPyB0ZXh0Q2xhc3NlcyA6IGJ0bkNsYXNzZXMgfSB0YXJnZXQ9J19ibGFuaycgPlxuICAgICAgICB7IHRoaXMucHJvcHMuY2hpbGRyZW4gfVxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmxpbmstdGV4dCB7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLWNvcmFsKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmxpbmstYnRuLFxuICAgICAgICAgIC5saW5rLWJ0bjphZnRlcixcbiAgICAgICAgICAubGluay1idG46aG92ZXIge1xuICAgICAgICAgIFx0dHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5saW5rLWJ0biB7XG4gICAgICAgICAgXHRkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICAgIFx0Zm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gICAgICAgICAgXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgXHRmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgIFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICBcdGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNvbG9yLXllbGxvdyk7XG4gICAgICAgICAgXHRjb2xvcjogdmFyKC0tY29sb3IteWVsbG93KTtcbiAgICAgICAgICBcdGxldHRlci1zcGFjaW5nOiAwLjFlbTtcbiAgICAgICAgICBcdHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XG4gICAgICAgICAgXHRmb250LXNpemU6IDAuOGVtO1xuICAgICAgICAgIFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICBcdG1hcmdpbjogOHB4O1xuICAgICAgICAgIFx0cG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIFx0b3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICBcdHdpZHRoOiAyNTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmxpbmstYnRuOmJlZm9yZSxcbiAgICAgICAgICAubGluay1idG46YWZ0ZXIge1xuICAgICAgICAgIFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZ3JlZW4tZGFyayk7XG4gICAgICAgICAgXHRjb250ZW50OiAnJztcbiAgICAgICAgICBcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBcdHotaW5kZXg6IC0xO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubGluay1idG46aG92ZXIge1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci1ncmVlbi1kYXJrKTtcbiAgICAgICAgICBcdGNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XG4gICAgICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubGluay1idG46YWZ0ZXIge1xuICAgICAgICAgIFx0aGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIFx0bGVmdDogLTM1JTtcbiAgICAgICAgICBcdHRvcDogMDtcbiAgICAgICAgICBcdHRyYW5zZm9ybTogc2tldyg1MGRlZyk7XG4gICAgICAgICAgXHR0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjZzO1xuICAgICAgICAgIFx0dHJhbnNmb3JtLW9yaWdpbjogdG9wIGxlZnQ7XG4gICAgICAgICAgXHR3aWR0aDogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmxpbmstYnRuOmhvdmVyOmFmdGVyIHtcbiAgICAgICAgICBcdGhlaWdodDogMTAwJTtcbiAgICAgICAgICBcdHdpZHRoOiAxMzUlO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9hPlxuICAgIClcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtcbiJdfQ== */\n/*@ sourceURL=/Users/dorachan/workspace/tamsenwedding/components/link.js */"));
    }
  }]);

  return Link;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(Link, "propTypes", {
  children: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.node.isRequired,
  className: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  linkTo: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  linkType: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.oneOf(['link-text', 'link-btn'])
});

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(Link, "defaultProps", {
  linkType: 'link-text'
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
        className: "jsx-2169948104" + " " + 'nav',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("ul", {
        className: "jsx-2169948104" + " " + 'nav-list',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, navList.map(function (i) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
          key: i,
          className: "jsx-2169948104" + " " + 'nav-list-item',
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
        id: "2169948104",
        __self: this
      }, ".nav{width:100%;z-index:1;}.nav-list{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;padding:0;}.nav-list-item{display:block;list-style:none;cursor:pointer;font-weight:400;color:var(--color-coral);}@media (min-width:992px){.nav{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}.nav-list{width:400px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kb3JhY2hhbi93b3Jrc3BhY2UvdGFtc2Vud2VkZGluZy9jb21wb25lbnRzL25hdmlnYXRpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVzJCLEFBR3dCLEFBS0UsQUFNQyxBQVVDLEFBS0QsV0F6QkosQ0EwQlYsRUFmZ0IsT0FWbEIsU0FXaUIsZUFDQyxnQkFDUyxhQVRJLEFBZ0JGLFlBTjdCLHFGQU9FLDBCQWhCVSxVQUNaIiwiZmlsZSI6Ii9Vc2Vycy9kb3JhY2hhbi93b3Jrc3BhY2UvdGFtc2Vud2VkZGluZy9jb21wb25lbnRzL25hdmlnYXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2Nyb2xsVG8gZnJvbSAncmVhY3Qtc2Nyb2xsLWludG8tdmlldyc7XG5cbmNsYXNzIE5hdmlnYXRpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgbmF2TGlzdCA9IFsncGhvdG9zJywgJ3RyYXZlbCcsICdSU1ZQJywgJ3JlZ2lzdHJ5J107XG5cbiAgICByZXR1cm4gKFxuICAgICAgPG5hdiBjbGFzc05hbWU9J25hdic+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9J25hdi1saXN0Jz5cbiAgICAgICAgICB7IG5hdkxpc3QubWFwKGkgPT4gKCA8bGkgY2xhc3NOYW1lPSduYXYtbGlzdC1pdGVtJyBrZXk9e2l9PjxTY3JvbGxUbyBzZWxlY3Rvcj17YCMke2l9YH0+eyBpLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgaS5zbGljZSgxKSB9PC9TY3JvbGxUbz48L2xpPiApKX1cbiAgICAgICAgPC91bD5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICAubmF2IHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubmF2LWxpc3Qge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubmF2LWxpc3QtaXRlbSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLWNvcmFsKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcblxuICAgICAgICAgICAgLm5hdiB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5uYXYtbGlzdCB7XG4gICAgICAgICAgICAgIHdpZHRoOiA0MDBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9uYXY+XG4gICAgKVxuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2aWdhdGlvbjtcbiJdfQ== */\n/*@ sourceURL=/Users/dorachan/workspace/tamsenwedding/components/navigation.js */"));
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
      }, ".radio.jsx-1148305500{margin-bottom:24px;}.radio-label.jsx-1148305500{font-size:0.9em;text-transform:uppercase;-webkit-letter-spacing:0.1em;-moz-letter-spacing:0.1em;-ms-letter-spacing:0.1em;letter-spacing:0.1em;font-weight:600;margin-bottom:8px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kb3JhY2hhbi93b3Jrc3BhY2UvdGFtc2Vud2VkZGluZy9jb21wb25lbnRzL3JhZGlvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1Cb0IsQUFHZ0MsQUFHSCxnQkFDUyxHQUgzQixzQkFJdUIscUdBQ0wsZ0JBQ0Usa0JBQ3BCIiwiZmlsZSI6Ii9Vc2Vycy9kb3JhY2hhbi93b3Jrc3BhY2UvdGFtc2Vud2VkZGluZy9jb21wb25lbnRzL3JhZGlvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5jbGFzcyBSYWRpbyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGxhYmVsTmFtZTogUHJvcFR5cGVzLnN0cmluZ1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBsYWJlbE5hbWU6ICdMYWJlbCdcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J3JhZGlvJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JhZGlvLWxhYmVsJz57IHRoaXMucHJvcHMubGFiZWxOYW1lIH08L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JhZGlvLW9wdGlvbnMnPnsgdGhpcy5wcm9wcy5jaGlsZHJlbiB9PC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAucmFkaW8ge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnJhZGlvLWxhYmVsIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45ZW07XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5SYWRpby5PcHRpb24gPSBjbGFzcyBPcHRpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgICBpbnB1dE5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNoZWNrZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIGNoYW5nZTogUHJvcFR5cGVzLmZ1bmNcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGxhYmVsXG4gICAgICAgIGNsYXNzTmFtZT0ncmFkaW8tb3B0aW9uJ1xuICAgICAgICBodG1sRm9yPXsgdGhpcy5wcm9wcy52YWx1ZSB9XG4gICAgICAgID5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT0ncmFkaW8nXG4gICAgICAgICAgY2xhc3NOYW1lPSdyYWRpby1vcHRpb24taW5wdXQnXG4gICAgICAgICAgbmFtZT17IHRoaXMucHJvcHMuaW5wdXROYW1lIH1cbiAgICAgICAgICB2YWx1ZT17IHRoaXMucHJvcHMudmFsdWUgfVxuICAgICAgICAgIGlkPXsgdGhpcy5wcm9wcy52YWx1ZSB9XG4gICAgICAgICAgZGVmYXVsdENoZWNrZWQ9eyB0aGlzLnByb3BzLmNoZWNrZWQgfVxuICAgICAgICAgIG9uQ2hhbmdlPXsgdGhpcy5wcm9wcy5jaGFuZ2UgfVxuICAgICAgICAgIC8+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ncmFkaW8tb3B0aW9uLWxhYmVsJz5cbiAgICAgICAgICB7IHRoaXMucHJvcHMudmFsdWUgfVxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAucmFkaW8tb3B0aW9uIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgICBtYXJnaW46IDhweCAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucmFkaW8tb3B0aW9uLWlucHV0IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5yYWRpby1vcHRpb24taW5wdXQgKyBzcGFuIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5yYWRpby1vcHRpb24taW5wdXQgKyBzcGFuOmJlZm9yZSB7XG4gICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAycHg7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgd2lkdGg6IDE2cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDE2cHg7XG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2xvci1ncmF5KTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXdoaXRlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnJhZGlvLW9wdGlvbi1pbnB1dCArIHNwYW46YWZ0ZXIge1xuICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIHdpZHRoOiAxMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItY29yYWwpO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgdG9wOiA3cHg7XG4gICAgICAgICAgICBsZWZ0OiA1cHg7XG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLDApO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDEwMG1zIGVhc2UtaW4tb3V0O1xuICAgICAgICAgIH1cbiAgICAgICAgICAucmFkaW8tb3B0aW9uLWlucHV0OmNoZWNrZWQgKyBzcGFuOmFmdGVyIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsMSk7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2xhYmVsPlxuICAgIClcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJhZGlvO1xuIl19 */\n/*@ sourceURL=/Users/dorachan/workspace/tamsenwedding/components/radio.js */"));
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
        className: "jsx-1111652235" + " " + 'radio-option',
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
        className: "jsx-1111652235" + " " + 'radio-option-input',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "jsx-1111652235" + " " + 'radio-option-label',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, this.props.value), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "1111652235",
        __self: this
      }, ".radio-option.jsx-1111652235{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-flex:1;-ms-flex:1;flex:1;margin:8px 0;}.radio-option-input.jsx-1111652235{display:none;}.radio-option-input.jsx-1111652235+span.jsx-1111652235{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;position:relative;padding-left:30px;line-height:24px;}.radio-option-input.jsx-1111652235+span.jsx-1111652235:before{content:'';display:block;position:absolute;top:2px;left:0;border-radius:50%;width:16px;height:16px;border:2px solid var(--color-gray);background:var(--color-white);}.radio-option-input.jsx-1111652235+span.jsx-1111652235:after{content:'';display:block;width:10px;height:10px;background:var(--color-coral);position:absolute;border-radius:50%;top:7px;left:5px;opacity:0;-webkit-transform:scale(0,0);-ms-transform:scale(0,0);transform:scale(0,0);-webkit-transition:all 100ms ease-in-out;transition:all 100ms ease-in-out;}.radio-option-input.jsx-1111652235:checked+span.jsx-1111652235:after{opacity:1;-webkit-transform:scale(1,1);-ms-transform:scale(1,1);transform:scale(1,1);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kb3JhY2hhbi93b3Jrc3BhY2UvdGFtc2Vud2VkZGluZy9jb21wb25lbnRzL3JhZGlvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdFb0IsQUFHMEIsQUFPQSxBQUdBLEFBT0YsQUFZQSxBQWNELFVBQ1csQ0ExQlAsQUFZQSxFQXRCaEIsWUFXb0IsQUFZUCxXQUNDLE9BWkosS0Fhc0IsR0FadkIsT0FDVyxnQkFyQkgsQUFVTyxFQVlYLEVBV08sT0FXcEIsRUFyQmMsRUF0QkssT0FpQ0MsR0FWaUIsZUFXM0IsUUFDQyxTQUNDLEdBWm9CLE9BYVQsV0EzQkgsWUFlcEIsTUFkb0IsSUFWWCxjQVdVLGlCQUNuQixFQVhlLFNBb0NvQixJQW5DbkMsc0VBb0NBIiwiZmlsZSI6Ii9Vc2Vycy9kb3JhY2hhbi93b3Jrc3BhY2UvdGFtc2Vud2VkZGluZy9jb21wb25lbnRzL3JhZGlvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5jbGFzcyBSYWRpbyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGxhYmVsTmFtZTogUHJvcFR5cGVzLnN0cmluZ1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBsYWJlbE5hbWU6ICdMYWJlbCdcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J3JhZGlvJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JhZGlvLWxhYmVsJz57IHRoaXMucHJvcHMubGFiZWxOYW1lIH08L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JhZGlvLW9wdGlvbnMnPnsgdGhpcy5wcm9wcy5jaGlsZHJlbiB9PC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAucmFkaW8ge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnJhZGlvLWxhYmVsIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45ZW07XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5SYWRpby5PcHRpb24gPSBjbGFzcyBPcHRpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgICBpbnB1dE5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNoZWNrZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIGNoYW5nZTogUHJvcFR5cGVzLmZ1bmNcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGxhYmVsXG4gICAgICAgIGNsYXNzTmFtZT0ncmFkaW8tb3B0aW9uJ1xuICAgICAgICBodG1sRm9yPXsgdGhpcy5wcm9wcy52YWx1ZSB9XG4gICAgICAgID5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT0ncmFkaW8nXG4gICAgICAgICAgY2xhc3NOYW1lPSdyYWRpby1vcHRpb24taW5wdXQnXG4gICAgICAgICAgbmFtZT17IHRoaXMucHJvcHMuaW5wdXROYW1lIH1cbiAgICAgICAgICB2YWx1ZT17IHRoaXMucHJvcHMudmFsdWUgfVxuICAgICAgICAgIGlkPXsgdGhpcy5wcm9wcy52YWx1ZSB9XG4gICAgICAgICAgZGVmYXVsdENoZWNrZWQ9eyB0aGlzLnByb3BzLmNoZWNrZWQgfVxuICAgICAgICAgIG9uQ2hhbmdlPXsgdGhpcy5wcm9wcy5jaGFuZ2UgfVxuICAgICAgICAgIC8+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ncmFkaW8tb3B0aW9uLWxhYmVsJz5cbiAgICAgICAgICB7IHRoaXMucHJvcHMudmFsdWUgfVxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAucmFkaW8tb3B0aW9uIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgICBtYXJnaW46IDhweCAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucmFkaW8tb3B0aW9uLWlucHV0IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5yYWRpby1vcHRpb24taW5wdXQgKyBzcGFuIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5yYWRpby1vcHRpb24taW5wdXQgKyBzcGFuOmJlZm9yZSB7XG4gICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAycHg7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgd2lkdGg6IDE2cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDE2cHg7XG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2xvci1ncmF5KTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXdoaXRlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnJhZGlvLW9wdGlvbi1pbnB1dCArIHNwYW46YWZ0ZXIge1xuICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIHdpZHRoOiAxMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItY29yYWwpO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgdG9wOiA3cHg7XG4gICAgICAgICAgICBsZWZ0OiA1cHg7XG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLDApO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDEwMG1zIGVhc2UtaW4tb3V0O1xuICAgICAgICAgIH1cbiAgICAgICAgICAucmFkaW8tb3B0aW9uLWlucHV0OmNoZWNrZWQgKyBzcGFuOmFmdGVyIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsMSk7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2xhYmVsPlxuICAgIClcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJhZGlvO1xuIl19 */\n/*@ sourceURL=/Users/dorachan/workspace/tamsenwedding/components/radio.js */"));
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
        className: "jsx-3443192133" + " " + 'input',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "jsx-3443192133" + " " + 'input-label',
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
        className: "jsx-3443192133" + " " + 'input-textarea',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "3443192133",
        __self: this
      }, ".input.jsx-3443192133{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin-bottom:24px;-webkit-flex:1;-ms-flex:1;flex:1;}.input-label.jsx-3443192133{font-size:0.9em;text-transform:uppercase;-webkit-letter-spacing:0.1em;-moz-letter-spacing:0.1em;-ms-letter-spacing:0.1em;letter-spacing:0.1em;font-weight:600;margin-bottom:8px;}.input-textarea.jsx-3443192133{height:100px;font-size:inherit;padding:10px 16px;line-height:24px;border-style:solid;border-radius:0;box-shadow:none !important;resize:none;border:2px solid var(--color-gray);outline:none;}.input-textarea.jsx-3443192133::-webkit-input-placeholder{font-weight:200;}.input-textarea.jsx-3443192133::-moz-placeholder{font-weight:200;}.input-textarea.jsx-3443192133:-ms-input-placeholder{font-weight:200;}.input-textarea.jsx-3443192133::placeholder{font-weight:200;}.input-textarea.jsx-3443192133:focus{border-color:var(--color-green-light);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kb3JhY2hhbi93b3Jrc3BhY2UvdGFtc2Vud2VkZGluZy9jb21wb25lbnRzL3RleHRhcmVhLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThCb0IsQUFHMEIsQUFNRyxBQU9ILEFBWUcsQUFHc0IsYUFkcEIsR0FQTyxBQW1CM0IsZUFYb0IsT0FjcEIsR0FyQnVCLFFBUUosaUJBQ0UsUUFoQkcsV0FpQk4sZ0JBQ1csMkJBQ2YsWUFDdUIsRUFabkIsVUFQRyxNQVFELGFBUFgsSUFtQk0sQ0FYZixZQVlBLGdCQW5CQSIsImZpbGUiOiIvVXNlcnMvZG9yYWNoYW4vd29ya3NwYWNlL3RhbXNlbndlZGRpbmcvY29tcG9uZW50cy90ZXh0YXJlYS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuY2xhc3MgVGV4dEFyZWEgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGxhYmVsTmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgaW5wdXROYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHR5cGVOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNoYW5nZTogUHJvcFR5cGVzLmZ1bmNcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgbGFiZWxOYW1lOiAnTGFiZWwnLFxuICAgIHBsYWNlaG9sZGVyOiAnRmllbGQnXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxsYWJlbCBjbGFzc05hbWU9J2lucHV0Jz5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdpbnB1dC1sYWJlbCc+eyB0aGlzLnByb3BzLmxhYmVsTmFtZSB9PC9zcGFuPlxuICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICB0eXBlPSd0ZXh0J1xuICAgICAgICAgIGNsYXNzTmFtZT0naW5wdXQtdGV4dGFyZWEnXG4gICAgICAgICAgbmFtZT17IHRoaXMucHJvcHMuaW5wdXROYW1lIH1cbiAgICAgICAgICBwbGFjZWhvbGRlcj17IHRoaXMucHJvcHMucGxhY2Vob2xkZXIgfVxuICAgICAgICAgIHZhbHVlPXsgdGhpcy5wcm9wcy52YWx1ZSB9XG4gICAgICAgICAgb25DaGFuZ2U9eyB0aGlzLnByb3BzLmNoYW5nZSB9XG4gICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgLz5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5pbnB1dCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaW5wdXQtbGFiZWwge1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjllbTtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4xZW07XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaW5wdXQtdGV4dGFyZWEge1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMTZweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICByZXNpemU6IG5vbmU7XG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2xvci1ncmF5KTtcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5pbnB1dC10ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmlucHV0LXRleHRhcmVhOmZvY3VzIHtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tY29sb3ItZ3JlZW4tbGlnaHQpO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9sYWJlbD5cbiAgICApXG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBUZXh0QXJlYVxuIl19 */\n/*@ sourceURL=/Users/dorachan/workspace/tamsenwedding/components/textarea.js */"));
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
        className: "jsx-1878665355" + " " + 'footer',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-1878665355" + " " + 'footer-image',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-1878665355" + " " + 'footer-content',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, "\xA9 Made by Dora"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "1878665355",
        __self: this
      }, ".footer.jsx-1878665355{grid-area:footer;}.footer-image.jsx-1878665355{height:140px;background-size:auto 140px,cover;background-image:url(/static/icon_forest.svg);background-position:top center;background-repeat:repeat-x;}.footer-content.jsx-1878665355{padding:40px;text-align:center;}@media (min-width:992px){.footer-image.jsx-1878665355{height:160px;background-size:auto 160px,cover;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kb3JhY2hhbi93b3Jrc3BhY2UvdGFtc2Vud2VkZGluZy9wYWdlcy9fZm9vdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdvQixBQUc4QixBQUlKLEFBUUEsQUFPRSxhQWRrQixBQVFmLEFBT2lCLElBbkJyQyxjQWFBLGVBUmdELEFBZTlDLDhDQWQrQiwrQkFDSiwyQkFDN0IiLCJmaWxlIjoiL1VzZXJzL2RvcmFjaGFuL3dvcmtzcGFjZS90YW1zZW53ZWRkaW5nL3BhZ2VzL19mb290ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmNsYXNzIEZvb3RlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9J2Zvb3Rlcic+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb290ZXItaW1hZ2UnIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb290ZXItY29udGVudCc+XG4gICAgICAgICAgwqkgTWFkZSBieSBEb3JhXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmZvb3RlciB7XG4gICAgICAgICAgICBncmlkLWFyZWE6IGZvb3RlcjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuZm9vdGVyLWltYWdlIHtcbiAgICAgICAgICAgIGhlaWdodDogMTQwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGF1dG8gMTQwcHgsY292ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL3N0YXRpYy9pY29uX2ZvcmVzdC5zdmcpO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIGNlbnRlcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuZm9vdGVyLWNvbnRlbnQge1xuICAgICAgICAgICAgcGFkZGluZzogNDBweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcblxuICAgICAgICAgICAgLmZvb3Rlci1pbWFnZSB7XG4gICAgICAgICAgICAgIGhlaWdodDogMTYwcHg7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogYXV0byAxNjBweCxjb3ZlcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH1cblxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICApXG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBGb290ZXJcbiJdfQ== */\n/*@ sourceURL=/Users/dorachan/workspace/tamsenwedding/pages/_footer.js */"));
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
        className: "jsx-2872791306" + " " + 'intro',
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
        className: "jsx-2872791306",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-2872791306" + " " + 'intro-header',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h6", {
        className: "jsx-2872791306",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, "Join us on Sunday, May 17th at 3:00 PM"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", {
        className: "jsx-2872791306",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, "Dora & Derek")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-2872791306" + " " + 'intro-image',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: "/static/icon_trees.svg",
        alt: "",
        className: "jsx-2872791306",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-2872791306" + " " + 'intro-description',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, "You've been invited to our little wedding! We found each other ~3 years ago and had one of our first dates catching Pokemon in Golden Gate Park. It was clear we were meant to be. Since then, we've been on an epic journey, picking up a little Noe Valley home and idiosycratic cats on the way. We hope you can celebrate with us on Sunday, May 17th.")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "2872791306",
        __self: this
      }, ".intro.jsx-2872791306{grid-area:intro;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;min-height:60vh;}.intro-header.jsx-2872791306{text-align:center;margin-top:56px;}.intro-description.jsx-2872791306{margin-top:24px;margin-bottom:24px;}@media (min-width:992px){.intro.jsx-2872791306{min-height:100vh;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.intro-header.jsx-2872791306{text-align:left;}.intro-image.jsx-2872791306{z-index:-1;margin-top:-50px;}.intro-description.jsx-2872791306{-webkit-column-count:2;column-count:2;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kb3JhY2hhbi93b3Jrc3BhY2UvdGFtc2Vud2VkZGluZy9wYWdlcy9faW50cm8uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0JvQixBQUc2QixBQVNFLEFBS0YsQUFPRyxBQUtELEFBSUwsQUFLSSxXQUpFLEtBOUJOLEFBY00sQUFZbkIsQ0FMcUIsQ0FaTCxVQXNCaEIsTUFyQkYsQ0FLQSxHQW9CRSxvREFsQ3NCLG9CQXFCdEIsMERBcEJ1QixtR0FDSiw2RkFDSCxnQkFDbEIiLCJmaWxlIjoiL1VzZXJzL2RvcmFjaGFuL3dvcmtzcGFjZS90YW1zZW53ZWRkaW5nL3BhZ2VzL19pbnRyby5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSAnLi4vY29tcG9uZW50cy9uYXZpZ2F0aW9uJztcblxuY2xhc3MgSW50cm8gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPSdpbnRybyc+XG4gICAgICAgIDxOYXZpZ2F0aW9uIC8+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ludHJvLWhlYWRlcic+XG4gICAgICAgICAgICA8aDY+Sm9pbiB1cyBvbiBTdW5kYXksIE1heSAxN3RoIGF0IDM6MDAgUE08L2g2PlxuICAgICAgICAgICAgPGgxPkRvcmEgJiBEZXJlazwvaDE+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ludHJvLWltYWdlJz5cbiAgICAgICAgICAgIDxpbWcgc3JjPScvc3RhdGljL2ljb25fdHJlZXMuc3ZnJyBhbHQ9JycgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW50cm8tZGVzY3JpcHRpb24nPlxuICAgICAgICAgICAgWW91J3ZlIGJlZW4gaW52aXRlZCB0byBvdXIgbGl0dGxlIHdlZGRpbmchIFdlIGZvdW5kIGVhY2ggb3RoZXIgfjMgeWVhcnMgYWdvIGFuZCBoYWQgb25lIG9mIG91ciBmaXJzdCBkYXRlcyBjYXRjaGluZyBQb2tlbW9uIGluIEdvbGRlbiBHYXRlIFBhcmsuIEl0IHdhcyBjbGVhciB3ZSB3ZXJlIG1lYW50IHRvIGJlLiBTaW5jZSB0aGVuLCB3ZSd2ZSBiZWVuIG9uIGFuIGVwaWMgam91cm5leSwgcGlja2luZyB1cCBhIGxpdHRsZSBOb2UgVmFsbGV5IGhvbWUgYW5kIGlkaW9zeWNyYXRpYyBjYXRzIG9uIHRoZSB3YXkuIFdlIGhvcGUgeW91IGNhbiBjZWxlYnJhdGUgd2l0aCB1cyBvbiBTdW5kYXksIE1heSAxN3RoLiBcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuaW50cm8ge1xuICAgICAgICAgICAgZ3JpZC1hcmVhOiBpbnRybztcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgbWluLWhlaWdodDogNjB2aDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuaW50cm8taGVhZGVyIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDU2cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmludHJvLWRlc2NyaXB0aW9uIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDI0cHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuXG4gICAgICAgICAgICAuaW50cm8ge1xuICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmludHJvLWhlYWRlciB7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5pbnRyby1pbWFnZSB7XG4gICAgICAgICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtNTBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmludHJvLWRlc2NyaXB0aW9uIHtcbiAgICAgICAgICAgICAgY29sdW1uLWNvdW50OiAyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2hlYWRlcj5cbiAgICApXG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnRyb1xuIl19 */\n/*@ sourceURL=/Users/dorachan/workspace/tamsenwedding/pages/_intro.js */"));
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
        className: "jsx-2747705159" + " " + 'registry',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h3", {
        className: "jsx-2747705159",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, "Registries"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-2747705159" + " " + 'registry-cta',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_link__WEBPACK_IMPORTED_MODULE_11__["default"], {
        linkType: "link-btn",
        linkTo: "https://www.zola.com/registry/derekanddora",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, "Browse Zola"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_link__WEBPACK_IMPORTED_MODULE_11__["default"], {
        linkType: "link-btn",
        linkTo: "https://www.amazon.com/wedding/share/doraderek",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, "Browse Amazon")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "2747705159",
        __self: this
      }, ".registry.jsx-2747705159{grid-area:registry;background-color:var(--color-green);color:var(--color-white);padding:40px 32px;text-align:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.registry.jsx-2747705159 h3.jsx-2747705159{margin-top:8px;margin-bottom:8px;}@media (min-width:992px){.registry-cta.jsx-2747705159{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kb3JhY2hhbi93b3Jrc3BhY2UvdGFtc2Vud2VkZGluZy9wYWdlcy9fcmVnaXN0cnkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0JvQixBQUdnQyxBQVVKLEFBT0EsZUFORyxJQVZrQixjQVd0QyxzQkFWMkIsbUJBZ0J6QixNQWZrQixrQkFDQSxrQkFDTCwwRUFDUyw4RUFDSCw2RkFDckIiLCJmaWxlIjoiL1VzZXJzL2RvcmFjaGFuL3dvcmtzcGFjZS90YW1zZW53ZWRkaW5nL3BhZ2VzL19yZWdpc3RyeS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuaW1wb3J0IEJsb2NrIGZyb20gJy4uL2NvbXBvbmVudHMvYmxvY2snO1xuaW1wb3J0IExpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9saXN0JztcbmltcG9ydCBMaW5rIGZyb20gJy4uL2NvbXBvbmVudHMvbGluayc7XG5cbmNsYXNzIFJlZ2lzdHJ5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8c2VjdGlvbiBpZD0ncmVnaXN0cnknIGNsYXNzTmFtZT0ncmVnaXN0cnknPlxuICAgICAgICA8aDM+UmVnaXN0cmllczwvaDM+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyZWdpc3RyeS1jdGEnPlxuICAgICAgICAgIDxMaW5rIGxpbmtUeXBlPSdsaW5rLWJ0bicgbGlua1RvPSdodHRwczovL3d3dy56b2xhLmNvbS9yZWdpc3RyeS9kZXJla2FuZGRvcmEnPlxuICAgICAgICAgICAgQnJvd3NlIFpvbGFcbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPExpbmsgbGlua1R5cGU9J2xpbmstYnRuJyBsaW5rVG89J2h0dHBzOi8vd3d3LmFtYXpvbi5jb20vd2VkZGluZy9zaGFyZS9kb3JhZGVyZWsnPlxuICAgICAgICAgICAgQnJvd3NlIEFtYXpvblxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAucmVnaXN0cnkge1xuICAgICAgICAgICAgZ3JpZC1hcmVhOiByZWdpc3RyeTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWdyZWVuKTtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XG4gICAgICAgICAgICBwYWRkaW5nOiA0MHB4IDMycHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5yZWdpc3RyeSBoMyB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG5cbiAgICAgICAgICAgIC5yZWdpc3RyeS1jdGEge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfVxuXG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICApXG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWdpc3RyeVxuIl19 */\n/*@ sourceURL=/Users/dorachan/workspace/tamsenwedding/pages/_registry.js */"));
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
        className: "jsx-357103840" + " " + 'container',
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
        className: "jsx-357103840",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, "Tamsen Wedding"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("link", {
        rel: "shortcut icon",
        href: "/static/favicon.ico",
        className: "jsx-357103840",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      })), this.renderHoneypot(), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-357103840" + " " + 'container-sections',
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
        className: "jsx-357103840" + " " + 'rsvp',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h3", {
        className: "jsx-357103840",
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
        id: "357103840",
        __self: this
      }, "@import url('https://fonts.googleapis.com/css?family=Poppins:200,300,400,600&display=swap');@import url(/static/coniferous-reg.otf);:root{--color-black:#000000;--color-black-light:#252525;--color-white:#FFFFFF;--color-gray-dark:#BCC5C5;--color-gray:#E0E6E0;--color-gray-light:#F3F3F3;--color-green-dark:#29341B;--color-green:#3A442E;--color-green-light:#9DB580;--color-yellow:#EEBA57;--color-coral:#C56241;}body{font-family:'Poppins',sans-serif;font-weight:200;font-size:17px;color:var(--color-green-dark);margin:0;padding:0;height:100vh;}h4,h5,h6{text-transform:uppercase;-webkit-letter-spacing:0.1em;-moz-letter-spacing:0.1em;-ms-letter-spacing:0.1em;letter-spacing:0.1em;}h1,h2,h3,h4,h5{font-family:'Coniferous',serif;font-weight:500;margin:0;line-height:110%;}h1{font-size:4.768em;}h2{font-size:3.015em;}h3{font-size:2.441em;}h4{font-size:1.25em;}h5{font-size:1em;}h6{font-size:0.8em;font-weight:600;margin:0;}.container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:0 auto;}.container-sections{display:grid;grid-template-columns:24px 1fr 24px;grid-row-gap:40px;grid-template-areas: \". intro .\" \". gallery .\" \". travel .\" \". rsvp .\" \". registry .\" \"footer footer footer\";}.rsvp{grid-area:rsvp;padding-top:24px;}@media (min-width:768px) and (max-width:992px){.container-sections{grid-template-columns:48px 1fr 48px;grid-row-gap:80px;}}@media (min-width:992px){body{font-size:16px;font-weight:300;}h1{font-size:6.96em;}h2{font-size:4.768em;}h3{font-size:3.015em;}h4{font-size:2.441em;}h5{font-size:1.25em;}h6{font-size:0.9em;}.container-sections{grid-template-columns:1fr 3fr 3fr 1fr;grid-row-gap:100px;grid-column-gap:10px;grid-template-areas: \". intro intro .\" \". gallery gallery .\" \". travel rsvp .\" \". registry registry .\" \"footer footer footer footer\";}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kb3JhY2hhbi93b3Jrc3BhY2UvdGFtc2Vud2VkZGluZy9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnRzJCLEFBRXNHLEFBQ3BELEFBR2YsQUFpQlksQUFVVCxBQUtPLEFBT2QsQUFHQSxBQUdBLEFBR0QsQUFHSCxBQUdFLEFBTUgsQUFPQSxBQWNFLEFBT3VCLEFBU3JCLEFBS0UsQUFHQyxBQUdBLEFBR0EsQUFHRCxBQUdELEFBSXNCLGFBckRKLENBaEJ0QyxDQThCbUIsQUFnQkMsQ0EzQ0YsQUErRGhCLENBckVGLEFBc0RFLEFBWUEsQ0EzRUYsQUFHQSxBQUdBLEFBNERFLEFBR0EsQUFHQSxJQS9HNEIsR0EyQlAsTUFLTCxBQWtFaEIsQ0EzQ1MsQUEyQlgsQ0FqRWtCLEdBdUVJLEVBaUNDLEdBakV2QixNQXZCVyxFQWZNLEFBa0RHLENBbkVJLElBd0Z0QixFQXZEaUIsQ0F3Rk0sT0F2R08sR0F5RDlCLEtBekUwQixDQWdDNUIsQ0F5QnlCLElBcUVyQixnQkE3R08sSUFoQlksS0FpQlgsVUFDRyxNQWpCYyxPQWtCN0IsQUFLQSxvQkFyQjZCLDJCQUNMLEFBcURILEdBZ0JyQixtQkFwRThCLGdCQXlINUIsWUF2SHVCLHVCQUNELG9CQWtEUixFQWpEaEIsWUFrREEiLCJmaWxlIjoiL1VzZXJzL2RvcmFjaGFuL3dvcmtzcGFjZS90YW1zZW53ZWRkaW5nL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcblxuaW1wb3J0IEZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9mb3JtJztcbmltcG9ydCBCYW5uZXIgZnJvbSAnLi4vY29tcG9uZW50cy9iYW5uZXInO1xuaW1wb3J0IElucHV0IGZyb20gJy4uL2NvbXBvbmVudHMvaW5wdXQnO1xuaW1wb3J0IFJhZGlvIGZyb20gJy4uL2NvbXBvbmVudHMvcmFkaW8nO1xuaW1wb3J0IFRleHRBcmVhIGZyb20gJy4uL2NvbXBvbmVudHMvdGV4dGFyZWEnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9jb21wb25lbnRzL2J1dHRvbic7XG5cbmltcG9ydCBJbnRybyBmcm9tICcuL19pbnRybyc7XG5pbXBvcnQgR2FsbGVyeSBmcm9tICcuL19nYWxsZXJ5JztcbmltcG9ydCBUcmF2ZWwgZnJvbSAnLi9fdHJhdmVsJztcbmltcG9ydCBSZWdpc3RyeSBmcm9tICcuL19yZWdpc3RyeSc7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vX2Zvb3Rlcic7XG5cbmNvbnN0IGVuY29kZSA9IChkYXRhKSA9PiB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhkYXRhKVxuICAgIC5tYXAoa2V5ID0+IGVuY29kZVVSSUNvbXBvbmVudChrZXkpICsgXCI9XCIgKyBlbmNvZGVVUklDb21wb25lbnQoZGF0YVtrZXldKSlcbiAgICAuam9pbihcIiZcIik7XG59XG5cbmNsYXNzIEhvbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0geyBuYW1lOiBcIlwiLCBhdHRlbmRhbmNlOiBcIlwiLCBndWVzdHM6IFwiXCIsIHByZWZlcmVuY2VzOiBcIlwiLCBpc0hpZGRlbjogZmFsc2UgfTtcbiAgfVxuXG4gIHRvZ2dsZUhpZGRlbigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGlzSGlkZGVuOiB0aGlzLnN0YXRlLmlzSGlkZGVuXG4gICAgfSlcbiAgfVxuXG5cbiAgaGFuZGxlU3VibWl0ID0gZSA9PiB7XG4gICAgZmV0Y2goXCIvXCIsIHtcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIgfSxcbiAgICAgIGJvZHk6IGVuY29kZSh7IFwiZm9ybS1uYW1lXCI6IFwicnN2cFwiLCAuLi50aGlzLnN0YXRlIH0pXG4gICAgfSlcbiAgICAgIC50aGVuKCgpID0+IHsgdGhpcy5zZXRTdGF0ZSh7IGlzSGlkZGVuOiB0cnVlIH0pfSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiBhbGVydChlcnJvcikpO1xuXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9O1xuXG4gIGhhbmRsZUNoYW5nZSA9IGUgPT5cbiAgICB0aGlzLnNldFN0YXRlKHsgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZSB9KTtcblxuICByZW5kZXJIb25leXBvdCgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGZvcm0gbmFtZT0ncnN2cCcgbmV0bGlmeT0ndHJ1ZScgbmV0bGlmeS1ob25leXBvdD0nYm90LWZpZWxkJyBoaWRkZW4+XG4gICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBuYW1lPSduYW1lJyAvPlxuICAgICAgICA8aW5wdXQgdHlwZT0ncmFkaW8nIG5hbWU9J2F0dGVuZGFuY2UnIC8+XG4gICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBuYW1lPSdndWVzdHMnIC8+XG4gICAgICAgIDx0ZXh0YXJlYSBuYW1lPSdkaWV0JyAvPlxuICAgICAgPC9mb3JtPlxuICAgIClcbiAgfVxuXG4gIHJlbmRlckZvcm0oKSB7XG4gICAgY29uc3QgeyBuYW1lLCBhdHRlbmRhbmNlLCBndWVzdHMsIGRpZXQgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPEZvcm0gc3VibWl0PXsgdGhpcy5oYW5kbGVTdWJtaXQgfT5cbiAgICAgICAgPElucHV0IGNoYW5nZT17IHRoaXMuaGFuZGxlQ2hhbmdlIH0gaW5wdXROYW1lPSduYW1lJyBsYWJlbE5hbWU9J0Z1bGwgTmFtZScgcGxhY2Vob2xkZXI9J0Z1bGwgTmFtZScgLz5cbiAgICAgICAgPFJhZGlvIGlucHV0TmFtZT0nYXR0ZW5kYW5jZScgbGFiZWxOYW1lPSdBdHRlbmRhbmNlJz5cbiAgICAgICAgICA8UmFkaW8uT3B0aW9uIGNoYW5nZT17IHRoaXMuaGFuZGxlQ2hhbmdlIH0gdmFsdWU9J0pveWZ1bGx5IGF0dGVuZGluZycgaW5wdXROYW1lPSdhdHRlbmRhbmNlJyAvPlxuICAgICAgICAgIDxSYWRpby5PcHRpb24gY2hhbmdlPXsgdGhpcy5oYW5kbGVDaGFuZ2UgfSB2YWx1ZT0nUmVncmV0ZnVsbHkgZGVjbGluaW5nJyBpbnB1dE5hbWU9J2F0dGVuZGFuY2UnLz5cbiAgICAgICAgPC9SYWRpbz5cbiAgICAgICAgPElucHV0IHR5cGU9J251bWJlcicgY2hhbmdlPXsgdGhpcy5oYW5kbGVDaGFuZ2UgfSBpbnB1dE5hbWU9J2d1ZXN0cycgbGFiZWxOYW1lPScjIG9mIEd1ZXN0cycgcGxhY2Vob2xkZXI9JzAnIC8+XG4gICAgICAgIDxUZXh0QXJlYSBjaGFuZ2U9eyB0aGlzLmhhbmRsZUNoYW5nZSB9IGlucHV0TmFtZT0nZGlldCcgbGFiZWxOYW1lPSdEaWV0YXJ5IFJlc3RyaWN0aW9ucycgcGxhY2Vob2xkZXI9J0Rlc2NyaXB0aW9uJyAvPlxuICAgICAgICA8QnV0dG9uIGN0YT0nU3VibWl0IFJTVlAnIC8+XG4gICAgICA8L0Zvcm0+XG4gICAgKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPHRpdGxlPlRhbXNlbiBXZWRkaW5nPC90aXRsZT5cbiAgICAgICAgICA8bGluayByZWw9XCJzaG9ydGN1dCBpY29uXCIgaHJlZj1cIi9zdGF0aWMvZmF2aWNvbi5pY29cIi8+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgeyB0aGlzLnJlbmRlckhvbmV5cG90KCkgfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyLXNlY3Rpb25zJz5cbiAgICAgICAgICA8SW50cm8gLz5cbiAgICAgICAgICA8R2FsbGVyeSAvPlxuICAgICAgICAgIDxkaXYgaWQ9J1JTVlAnIGNsYXNzTmFtZT0ncnN2cCc+XG4gICAgICAgICAgICA8aDM+UlNWUDwvaDM+XG4gICAgICAgICAgICB7ICF0aGlzLnN0YXRlLmlzSGlkZGVuID8gdGhpcy5yZW5kZXJGb3JtKCkgOiA8QmFubmVyIC8+IH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8VHJhdmVsIC8+XG4gICAgICAgICAgPFJlZ2lzdHJ5IC8+XG4gICAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVBvcHBpbnM6MjAwLDMwMCw0MDAsNjAwJmRpc3BsYXk9c3dhcCcpO1xuICAgICAgICAgIEBpbXBvcnQgdXJsKC9zdGF0aWMvY29uaWZlcm91cy1yZWcub3RmKTtcblxuICAgICAgICAgIDpyb290IHtcbiAgICAgICAgICAgIC0tY29sb3ItYmxhY2s6ICMwMDAwMDA7XG4gICAgICAgICAgICAtLWNvbG9yLWJsYWNrLWxpZ2h0OiAjMjUyNTI1O1xuICAgICAgICAgICAgLS1jb2xvci13aGl0ZTogI0ZGRkZGRjtcblxuICAgICAgICAgICAgLS1jb2xvci1ncmF5LWRhcms6ICNCQ0M1QzU7XG4gICAgICAgICAgICAtLWNvbG9yLWdyYXk6ICNFMEU2RTA7XG4gICAgICAgICAgICAtLWNvbG9yLWdyYXktbGlnaHQ6ICNGM0YzRjM7XG5cbiAgICAgICAgICAgIC0tY29sb3ItZ3JlZW4tZGFyazogIzI5MzQxQjtcbiAgICAgICAgICAgIC0tY29sb3ItZ3JlZW46ICMzQTQ0MkU7XG4gICAgICAgICAgICAtLWNvbG9yLWdyZWVuLWxpZ2h0OiAjOURCNTgwO1xuXG4gICAgICAgICAgICAtLWNvbG9yLXllbGxvdzogI0VFQkE1NztcbiAgICAgICAgICAgIC0tY29sb3ItY29yYWw6ICNDNTYyNDE7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1ncmVlbi1kYXJrKTtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGg0LCBoNSwgaDYge1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBoMSwgaDIsIGgzLCBoNCwgaDUge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdDb25pZmVyb3VzJywgc2VyaWY7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDExMCU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaDEge1xuICAgICAgICAgICAgZm9udC1zaXplOiA0Ljc2OGVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICBoMiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDMuMDE1ZW07XG4gICAgICAgICAgfVxuICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMi40NDFlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaDQge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjI1ZW07XG4gICAgICAgICAgfVxuICAgICAgICAgIGg1IHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICBoNiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuOGVtO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuY29udGFpbmVyLXNlY3Rpb25zIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI0cHggMWZyIDI0cHg7XG4gICAgICAgICAgICBncmlkLXJvdy1nYXA6IDQwcHg7XG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgICAgICAgICAgICBcIi4gaW50cm8gLlwiXG4gICAgICAgICAgICAgIFwiLiBnYWxsZXJ5IC5cIlxuICAgICAgICAgICAgICBcIi4gdHJhdmVsIC5cIlxuICAgICAgICAgICAgICBcIi4gcnN2cCAuXCJcbiAgICAgICAgICAgICAgXCIuIHJlZ2lzdHJ5IC5cIlxuICAgICAgICAgICAgICBcImZvb3RlciBmb290ZXIgZm9vdGVyXCJcbiAgICAgICAgICAgIDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAucnN2cCB7XG4gICAgICAgICAgICBncmlkLWFyZWE6IHJzdnA7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMjRweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuXG4gICAgICAgICAgICAuY29udGFpbmVyLXNlY3Rpb25zIHtcbiAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0OHB4IDFmciA0OHB4O1xuICAgICAgICAgICAgICBncmlkLXJvdy1nYXA6IDgwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcblxuICAgICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaDEge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDYuOTZlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiA0Ljc2OGVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaDMge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDMuMDE1ZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoNCB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMi40NDFlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGg1IHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjI1ZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoNiB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45ZW07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5jb250YWluZXItc2VjdGlvbnMge1xuICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnIgM2ZyIDFmcjtcbiAgICAgICAgICAgICAgZ3JpZC1yb3ctZ2FwOiAxMDBweDtcbiAgICAgICAgICAgICAgZ3JpZC1jb2x1bW4tZ2FwOiAxMHB4O1xuICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgICAgICAgICAgICAgIFwiLiBpbnRybyBpbnRybyAuXCJcbiAgICAgICAgICAgICAgICBcIi4gZ2FsbGVyeSBnYWxsZXJ5IC5cIlxuICAgICAgICAgICAgICAgIFwiLiB0cmF2ZWwgcnN2cCAuXCJcbiAgICAgICAgICAgICAgICBcIi4gcmVnaXN0cnkgcmVnaXN0cnkgLlwiXG4gICAgICAgICAgICAgICAgXCJmb290ZXIgZm9vdGVyIGZvb3RlciBmb290ZXJcIlxuICAgICAgICAgICAgICA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVcbiJdfQ== */\n/*@ sourceURL=/Users/dorachan/workspace/tamsenwedding/pages/index.js */"));
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