webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
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
        className: "jsx-2646221346" + " " + ((this.props.linkType === 'link-text' ? textClasses : btnClasses) || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, this.props.children, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "2646221346",
        __self: this
      }, ".link-text.jsx-2646221346{-webkit-text-decoration:none;text-decoration:none;font-weight:400;color:var(--color-coral);}.link-btn.jsx-2646221346,.link-btn.jsx-2646221346:after,.link-btn.jsx-2646221346:hover{-webkit-transition:all 0.4s;transition:all 0.4s;}.link-btn.jsx-2646221346{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:60px;font-size:inherit;font-weight:500;-webkit-text-decoration:none;text-decoration:none;border:2px solid var(--color-yellow);color:var(--color-yellow);text-rendering:optimizeLegibility;box-sizing:border-box;margin:8px;position:relative;overflow:hidden;width:100%;max-width:250px;}.link-btn.jsx-2646221346:before,.link-btn.jsx-2646221346:after{background-color:var(--color-green-dark);content:'';position:absolute;z-index:-1;}.link-btn.jsx-2646221346:hover{border-color:var(--color-green-dark);color:var(--color-white);z-index:2;}.link-btn.jsx-2646221346:after{height:100%;left:-35%;top:0;-webkit-transform:skew(50deg);-ms-transform:skew(50deg);transform:skew(50deg);-webkit-transition-duration:0.6s;transition-duration:0.6s;-webkit-transform-origin:top left;-ms-transform-origin:top left;transform-origin:top left;width:0;}.link-btn.jsx-2646221346:hover.jsx-2646221346:after{height:100%;width:135%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kb3JhY2hhbi93b3Jrc3BhY2UvdGFtc2Vud2VkZGluZy9jb21wb25lbnRzL2xpbmsuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0JvQixBQUdrQyxBQU9GLEFBR1AsQUFtQjRCLEFBTUgsQUFLMUIsQUFTQSxZQVJGLEFBU0MsVUFSTCxDQVNQLEtBUnVCLFNBUEcsSUFOZCxPQXRCWixFQVBrQixFQThCQyxVQU1QLElBbkNlLElBOEJmLEVBTVosRUEzQnlCLE9Bc0J6QixVQTlCQSxlQXlDMEIsMERBQ0MsU0FqQ04saUZBa0NaLFFBQ1QsSUFsQ2MsWUFDTSxrQkFDRixnQkFDSSxrREFDZ0IscUNBQ1gsMEJBQ1Esa0NBQ1osc0JBQ1gsV0FDTyxrQkFDRixnQkFDTCxXQUNNLGdCQUNsQiIsImZpbGUiOiIvVXNlcnMvZG9yYWNoYW4vd29ya3NwYWNlL3RhbXNlbndlZGRpbmcvY29tcG9uZW50cy9saW5rLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5jbGFzcyBMaW5rIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgbGlua1RvOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGxpbmtUeXBlOiBQcm9wVHlwZXMub25lT2YoWydsaW5rLXRleHQnLCAnbGluay1idG4nXSlcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgbGlua1R5cGU6ICdsaW5rLXRleHQnXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgdGV4dENsYXNzZXMgPSBjbGFzc05hbWVzKCdsaW5rLXRleHQnLCB0aGlzLnByb3BzLmNsYXNzTmFtZSk7XG4gICAgY29uc3QgYnRuQ2xhc3NlcyA9IGNsYXNzTmFtZXMoJ2xpbmstYnRuJywgdGhpcy5wcm9wcy5jbGFzc05hbWUpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxhIGhyZWY9eyB0aGlzLnByb3BzLmxpbmtUbyB9IGNsYXNzTmFtZT17IHRoaXMucHJvcHMubGlua1R5cGUgPT09ICdsaW5rLXRleHQnID8gdGV4dENsYXNzZXMgOiBidG5DbGFzc2VzIH0gdGFyZ2V0PSdfYmxhbmsnID5cbiAgICAgICAgeyB0aGlzLnByb3BzLmNoaWxkcmVuIH1cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5saW5rLXRleHQge1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1jb3JhbCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5saW5rLWJ0bixcbiAgICAgICAgICAubGluay1idG46YWZ0ZXIsXG4gICAgICAgICAgLmxpbmstYnRuOmhvdmVyIHtcbiAgICAgICAgICBcdHRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubGluay1idG4ge1xuICAgICAgICAgIFx0ZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgXHRib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2xvci15ZWxsb3cpO1xuICAgICAgICAgIFx0Y29sb3I6IHZhcigtLWNvbG9yLXllbGxvdyk7XG4gICAgICAgICAgXHR0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xuICAgICAgICAgIFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICBcdG1hcmdpbjogOHB4O1xuICAgICAgICAgIFx0cG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIFx0b3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICBcdHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAyNTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmxpbmstYnRuOmJlZm9yZSxcbiAgICAgICAgICAubGluay1idG46YWZ0ZXIge1xuICAgICAgICAgIFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZ3JlZW4tZGFyayk7XG4gICAgICAgICAgXHRjb250ZW50OiAnJztcbiAgICAgICAgICBcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBcdHotaW5kZXg6IC0xO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubGluay1idG46aG92ZXIge1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci1ncmVlbi1kYXJrKTtcbiAgICAgICAgICBcdGNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XG4gICAgICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubGluay1idG46YWZ0ZXIge1xuICAgICAgICAgIFx0aGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIFx0bGVmdDogLTM1JTtcbiAgICAgICAgICBcdHRvcDogMDtcbiAgICAgICAgICBcdHRyYW5zZm9ybTogc2tldyg1MGRlZyk7XG4gICAgICAgICAgXHR0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjZzO1xuICAgICAgICAgIFx0dHJhbnNmb3JtLW9yaWdpbjogdG9wIGxlZnQ7XG4gICAgICAgICAgXHR3aWR0aDogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmxpbmstYnRuOmhvdmVyOmFmdGVyIHtcbiAgICAgICAgICBcdGhlaWdodDogMTAwJTtcbiAgICAgICAgICBcdHdpZHRoOiAxMzUlO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9hPlxuICAgIClcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtcbiJdfQ== */\n/*@ sourceURL=/Users/dorachan/workspace/tamsenwedding/components/link.js */"));
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

/***/ })

})
//# sourceMappingURL=index.js.4a959b4a62f977c318bb.hot-update.js.map