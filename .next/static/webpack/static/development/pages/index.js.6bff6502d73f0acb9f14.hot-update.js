webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
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
        className: "jsx-2013670255" + " " + 'input',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "jsx-2013670255" + " " + 'input-label',
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
        className: "jsx-2013670255" + " " + (inputClasses || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "2013670255",
        __self: this
      }, ".input.jsx-2013670255{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin-bottom:24px;-webkit-flex:1;-ms-flex:1;flex:1;}.input-label.jsx-2013670255{font-size:0.9em;text-transform:uppercase;-webkit-letter-spacing:0.1em;-moz-letter-spacing:0.1em;-ms-letter-spacing:0.1em;letter-spacing:0.1em;font-weight:600;margin-bottom:8px;}.input-text.jsx-2013670255{height:50px;font-size:inherit;padding:0 16px;border-style:solid;border-radius:0;box-shadow:none !important;border:2px solid var(--color-gray);outline:none;}.input-text.jsx-2013670255::-webkit-input-placeholder{font-weight:200;}.input-text.jsx-2013670255::-moz-placeholder{font-weight:200;}.input-text.jsx-2013670255:-ms-input-placeholder{font-weight:200;}.input-text.jsx-2013670255::placeholder{font-weight:200;}.input-text.jsx-2013670255:focus{border-color:var(--color-coral);}.input-text.jsx-2013670255:focus{outline:none;}.input-number[type=number].jsx-2013670255::-webkit-inner-spin-button,.input-number[type=number].jsx-2013670255::-webkit-outer-spin-button{-webkit-appearance:none;margin:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kb3JhY2hhbi93b3Jrc3BhY2UvdGFtc2Vud2VkZGluZy9jb21wb25lbnRzL2lucHV0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtDb0IsQUFHMEIsQUFNRyxBQU9KLEFBVUksQUFHZ0IsQUFHbkIsQUFJVyxZQW5CTixDQWdCcEIsR0F2QjJCLEFBaUIzQixRQVVXLE1BbkJNLEVBWWpCLENBUUEsUUEzQnVCLElBUUYsbUJBQ0gsVUFoQk0sTUFpQkssMkJBQ1EsbUNBVm5CLEFBV0gsVUFsQk0sR0FtQnJCLEdBWG9CLGFBUFgsS0FRVCw0QkFQQSIsImZpbGUiOiIvVXNlcnMvZG9yYWNoYW4vd29ya3NwYWNlL3RhbXNlbndlZGRpbmcvY29tcG9uZW50cy9pbnB1dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuY2xhc3MgSW5wdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGxhYmVsTmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgaW5wdXROYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHR5cGVOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHR5cGU6IFByb3BUeXBlcy5vbmVPZihbJ3RleHQnLCAnbnVtYmVyJ10pLFxuICAgIGNoYW5nZTogUHJvcFR5cGVzLmZ1bmNcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgbGFiZWxOYW1lOiAnTGFiZWwnLFxuICAgIHBsYWNlaG9sZGVyOiAnRmllbGQnLFxuICAgIHR5cGU6ICd0ZXh0J1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGlucHV0Q2xhc3NlcyA9IGNsYXNzTmFtZXMoJ2lucHV0LXRleHQnLCB0aGlzLnByb3BzLnR5cGUgPT09ICdudW1iZXInID8gJ2lucHV0LW51bWJlcicgOiAnJyk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGxhYmVsIGNsYXNzTmFtZT0naW5wdXQnPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2lucHV0LWxhYmVsJz57IHRoaXMucHJvcHMubGFiZWxOYW1lIH08L3NwYW4+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIGNsYXNzTmFtZT17IGlucHV0Q2xhc3NlcyB9XG4gICAgICAgICAgdHlwZT17IHRoaXMucHJvcHMudHlwZSB9XG4gICAgICAgICAgbmFtZT17IHRoaXMucHJvcHMuaW5wdXROYW1lIH1cbiAgICAgICAgICBwbGFjZWhvbGRlcj17IHRoaXMucHJvcHMucGxhY2Vob2xkZXIgfVxuICAgICAgICAgIHZhbHVlPXsgdGhpcy5wcm9wcy52YWx1ZSB9XG4gICAgICAgICAgb25DaGFuZ2U9eyB0aGlzLnByb3BzLmNoYW5nZSB9XG4gICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgLz5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5pbnB1dCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaW5wdXQtbGFiZWwge1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjllbTtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4xZW07XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaW5wdXQtdGV4dCB7XG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDE2cHg7XG4gICAgICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNvbG9yLWdyYXkpO1xuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmlucHV0LXRleHQ6OnBsYWNlaG9sZGVyIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5pbnB1dC10ZXh0OmZvY3VzIHtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tY29sb3ItY29yYWwpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaW5wdXQtdGV4dDpmb2N1cyB7XG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaW5wdXQtbnVtYmVyW3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcbiAgICAgICAgICAuaW5wdXQtbnVtYmVyW3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XG4gICAgICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2xhYmVsPlxuICAgIClcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IElucHV0XG4iXX0= */\n/*@ sourceURL=/Users/dorachan/workspace/tamsenwedding/components/input.js */"));
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

/***/ })

})
//# sourceMappingURL=index.js.6bff6502d73f0acb9f14.hot-update.js.map