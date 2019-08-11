webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);







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
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "radio",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "radio-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, this.props.labelName), this.props.children);
    }
  }]);

  return Radio;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(Radio, "propTypes", {
  children: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.node.isRequired,
  className: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
  labelName: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string
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
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        className: "radio-option",
        htmlFor: this.props.value,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        type: "radio",
        className: "radio-option-input",
        name: this.props.inputName,
        value: this.props.value,
        id: this.props.value,
        defaultChecked: this.props.checked,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "radio-option-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, this.props.value), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "text-gray",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, this.props.children)));
    }
  }]);

  return Option;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(_class, "propTypes", {
  children: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.node,
  value: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
  className: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
  checked: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool
}), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(_class, "defaultProps", {
  value: 'Value'
}), _temp);
/* harmony default export */ __webpack_exports__["default"] = (Radio);

/***/ })

})
//# sourceMappingURL=index.js.8e80c9fd7a6c3e70fc06.hot-update.js.map