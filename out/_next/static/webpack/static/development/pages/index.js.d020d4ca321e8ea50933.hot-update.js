webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/select.js":
/*!******************************!*\
  !*** ./components/select.js ***!
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);







var _jsxFileName = "/Users/dorachan/workspace/tamsenwedding/components/select.js",
    _class,
    _temp;





var Select =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Select, _React$Component);

  function Select() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Select);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Select).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Select, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "select",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "select-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, this.props.labelName), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("select", {
        className: "select-option",
        defaultValue: this.props.defaultValue,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        disabled: true,
        value: "Select",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, "Select"), this.props.children));
    }
  }]);

  return Select;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(Select, "propTypes", {
  children: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.node.isRequired,
  className: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
  labelName: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
  defaultValue: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string
});

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(Select, "defaultProps", {
  defaultValue: 'Select',
  labelName: 'Label'
});

Select.Option = (_temp = _class =
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
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        className: "select-option-input",
        value: this.props.children,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, this.props.children);
    }
  }]);

  return Option;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(_class, "propTypes", {
  children: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.node.isRequired
}), _temp);
/* harmony default export */ __webpack_exports__["default"] = (Select);

/***/ })

})
//# sourceMappingURL=index.js.d020d4ca321e8ea50933.hot-update.js.map