webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/checkbox.js":
/*!********************************!*\
  !*** ./components/checkbox.js ***!
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);







var _jsxFileName = "/Users/dorachan/workspace/tamsenwedding/components/checkbox.js",
    _class,
    _temp;





var Checkbox =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Checkbox, _React$Component);

  function Checkbox() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Checkbox);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Checkbox).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Checkbox, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "checkbox",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "checkbox-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, this.props.labelName), this.props.children);
    }
  }]);

  return Checkbox;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(Checkbox, "propTypes", {
  children: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.node.isRequired,
  className: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
  labelName: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string
});

Checkbox.Option = (_temp = _class =
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
        className: "checkbox-option",
        htmlFor: this.props.value,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        type: "checkbox",
        name: this.props.name,
        value: this.props.value,
        id: this.props.value,
        className: "checkbox-option-input",
        defaultChecked: this.props.checked,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "checkbox-option-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, this.props.value));
    }
  }]);

  return Option;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(_class, "propTypes", {
  children: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.node,
  value: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
  className: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
  checked: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool
}), _temp);
/* harmony default export */ __webpack_exports__["default"] = (Checkbox);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/form */ "./components/form.js");
/* harmony import */ var _components_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/input */ "./components/input.js");
/* harmony import */ var _components_radio__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/radio */ "./components/radio.js");
/* harmony import */ var _components_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/select */ "./components/select.js");
/* harmony import */ var _components_checkbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/checkbox */ "./components/checkbox.js");
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/button */ "./components/button.js");





var _jsxFileName = "/Users/dorachan/workspace/tamsenwedding/pages/index.js";









var Home =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Home, _React$Component);

  function Home() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Home);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Home).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Home, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-2934843551" + " " + 'container',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-2934843551" + " " + '',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", {
        className: "jsx-2934843551",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, "RSVP"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_form__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_input__WEBPACK_IMPORTED_MODULE_8__["default"], {
        labelName: "Full Name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_radio__WEBPACK_IMPORTED_MODULE_9__["default"], {
        labelName: "RSVP",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_radio__WEBPACK_IMPORTED_MODULE_9__["default"].Option, {
        value: "Happily accepts",
        inputName: "attendance",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_radio__WEBPACK_IMPORTED_MODULE_9__["default"].Option, {
        value: "Regretfully declines",
        inputName: "attendance",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_select__WEBPACK_IMPORTED_MODULE_10__["default"], {
        labelName: "Number of guests attending",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_select__WEBPACK_IMPORTED_MODULE_10__["default"].Option, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, "0"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_select__WEBPACK_IMPORTED_MODULE_10__["default"].Option, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, "1"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_select__WEBPACK_IMPORTED_MODULE_10__["default"].Option, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, "2"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_select__WEBPACK_IMPORTED_MODULE_10__["default"].Option, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, "3"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_select__WEBPACK_IMPORTED_MODULE_10__["default"].Option, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, "4"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_select__WEBPACK_IMPORTED_MODULE_10__["default"].Option, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, "5"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_select__WEBPACK_IMPORTED_MODULE_10__["default"].Option, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, "6")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_checkbox__WEBPACK_IMPORTED_MODULE_11__["default"], {
        labelName: "Preference",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_checkbox__WEBPACK_IMPORTED_MODULE_11__["default"].Option, {
        value: "I am vegetarian",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_button__WEBPACK_IMPORTED_MODULE_12__["default"], {
        cta: "Submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "2934843551",
        __self: this
      }, "body{margin:0;padding:0;height:100vh;font-size:16px;}.container{height:100vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.hide{display:none;}.flex{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kb3JhY2hhbi93b3Jrc3BhY2UvdGFtc2Vud2VkZGluZy9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQzJCLEFBR3NCLEFBTUksQUFNQSxBQUdBLFNBZEgsSUFNRyxBQU1mLE1BWGUsYUFDRSxlQUNqQiwyQkFZQSxhQVJ5QixtR0FDSiw2RkFDckIiLCJmaWxlIjoiL1VzZXJzL2RvcmFjaGFuL3dvcmtzcGFjZS90YW1zZW53ZWRkaW5nL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9mb3JtJztcbmltcG9ydCBJbnB1dCBmcm9tICcuLi9jb21wb25lbnRzL2lucHV0JztcbmltcG9ydCBSYWRpbyBmcm9tICcuLi9jb21wb25lbnRzL3JhZGlvJztcbmltcG9ydCBTZWxlY3QgZnJvbSAnLi4vY29tcG9uZW50cy9zZWxlY3QnO1xuaW1wb3J0IENoZWNrYm94IGZyb20gJy4uL2NvbXBvbmVudHMvY2hlY2tib3gnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9jb21wb25lbnRzL2J1dHRvbic7XG5cbmNsYXNzIEhvbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nJz5cbiAgICAgICAgICA8aDE+UlNWUDwvaDE+XG4gICAgICAgICAgPEZvcm0+XG4gICAgICAgICAgICA8SW5wdXQgbGFiZWxOYW1lPSdGdWxsIE5hbWUnIC8+XG4gICAgICAgICAgICA8UmFkaW8gbGFiZWxOYW1lPSdSU1ZQJz5cbiAgICAgICAgICAgICAgPFJhZGlvLk9wdGlvbiB2YWx1ZT0nSGFwcGlseSBhY2NlcHRzJyBpbnB1dE5hbWU9J2F0dGVuZGFuY2UnIC8+XG4gICAgICAgICAgICAgIDxSYWRpby5PcHRpb24gdmFsdWU9J1JlZ3JldGZ1bGx5IGRlY2xpbmVzJyBpbnB1dE5hbWU9J2F0dGVuZGFuY2UnLz5cbiAgICAgICAgICAgIDwvUmFkaW8+XG4gICAgICAgICAgICA8U2VsZWN0IGxhYmVsTmFtZT0nTnVtYmVyIG9mIGd1ZXN0cyBhdHRlbmRpbmcnPlxuICAgICAgICAgICAgICA8U2VsZWN0Lk9wdGlvbj4wPC9TZWxlY3QuT3B0aW9uPlxuICAgICAgICAgICAgICA8U2VsZWN0Lk9wdGlvbj4xPC9TZWxlY3QuT3B0aW9uPlxuICAgICAgICAgICAgICA8U2VsZWN0Lk9wdGlvbj4yPC9TZWxlY3QuT3B0aW9uPlxuICAgICAgICAgICAgICA8U2VsZWN0Lk9wdGlvbj4zPC9TZWxlY3QuT3B0aW9uPlxuICAgICAgICAgICAgICA8U2VsZWN0Lk9wdGlvbj40PC9TZWxlY3QuT3B0aW9uPlxuICAgICAgICAgICAgICA8U2VsZWN0Lk9wdGlvbj41PC9TZWxlY3QuT3B0aW9uPlxuICAgICAgICAgICAgICA8U2VsZWN0Lk9wdGlvbj42PC9TZWxlY3QuT3B0aW9uPlxuICAgICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgICAgICA8Q2hlY2tib3ggbGFiZWxOYW1lPSdQcmVmZXJlbmNlJz5cbiAgICAgICAgICAgICAgPENoZWNrYm94Lk9wdGlvbiB2YWx1ZT0nSSBhbSB2ZWdldGFyaWFuJyAvPlxuICAgICAgICAgICAgPC9DaGVja2JveD5cbiAgICAgICAgICAgIDxCdXR0b24gY3RhPSdTdWJtaXQnIC8+XG4gICAgICAgICAgPC9Gb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaGlkZSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZmxleCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVxuIl19 */\n/*@ sourceURL=/Users/dorachan/workspace/tamsenwedding/pages/index.js */"));
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.0010dc2422c45a22272e.hot-update.js.map