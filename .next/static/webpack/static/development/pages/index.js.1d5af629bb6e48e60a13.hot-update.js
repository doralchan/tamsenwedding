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
        className: "jsx-740889893" + " " + ((this.props.linkType === 'link-text' ? textClasses : btnClasses) || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, this.props.children, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "740889893",
        __self: this
      }, ".link-text.jsx-740889893{-webkit-text-decoration:none;text-decoration:none;font-weight:400;color:var(--color-green);}.link-btn.jsx-740889893,.link-btn.jsx-740889893:after{-webkit-transition:all 0.3s;transition:all 0.3s;}.link-btn.jsx-740889893{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:60px;font-family:inherit;-webkit-text-decoration:none;text-decoration:none;font-weight:600;text-transform:uppercase;border:2px solid var(--color-green);color:var(--color-green);-webkit-letter-spacing:0.1em;-moz-letter-spacing:0.1em;-ms-letter-spacing:0.1em;letter-spacing:0.1em;text-rendering:optimizeLegibility;font-size:0.8em;box-sizing:border-box;margin:8px;position:relative;overflow:hidden;width:250px;}.link-btn.jsx-740889893:before,.link-btn.jsx-740889893:after{background-color:var(--color-green);content:'';position:absolute;z-index:0;}.link-btn.jsx-740889893:hover{color:var(--color-green);}.link-btn.jsx-740889893:after{height:100%;left:-35%;top:0;-webkit-transform:skew(50deg);-ms-transform:skew(50deg);transform:skew(50deg);-webkit-transition-duration:0.6s;transition-duration:0.6s;-webkit-transform-origin:top left;-ms-transform-origin:top left;transform-origin:top left;width:0;}.link-btn.jsx-740889893:hover.jsx-740889893:after{height:100%;width:135%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kb3JhY2hhbi93b3Jrc3BhY2UvdGFtc2Vud2VkZGluZy9jb21wb25lbnRzL2xpbmsuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0JvQixBQUdrQyxBQU1GLEFBR1AsQUFxQjhCLEFBTVgsQUFHcEIsQUFTQSxZQVJGLEFBU0MsVUFSTCxDQVNQLEtBUnVCLElBTHZCLFdBTlksS0F4QlosRUFOa0IsSUErQkMsWUE5QmUsTUErQnZCLEVBdkJjLFFBd0J6QixnQkEvQkEsUUF3QzBCLDBEQUNDLFNBakNOLGlGQWtDWixRQUNULElBbENjLFlBQ08sb0JBQ0Msa0RBQ0wsZ0JBQ1MseUJBQ2tCLDJDQUNYLGdDQUNYLHFHQUNhLGtDQUNsQixnQkFDTSxzQkFDWCxXQUNPLGtCQUNGLGdCQUNKLFlBQ2IiLCJmaWxlIjoiL1VzZXJzL2RvcmFjaGFuL3dvcmtzcGFjZS90YW1zZW53ZWRkaW5nL2NvbXBvbmVudHMvbGluay5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuY2xhc3MgTGluayBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGxpbmtUbzogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBsaW5rVHlwZTogUHJvcFR5cGVzLm9uZU9mKFsnbGluay10ZXh0JywgJ2xpbmstYnRuJ10pXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGxpbmtUeXBlOiAnbGluay10ZXh0J1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHRleHRDbGFzc2VzID0gY2xhc3NOYW1lcygnbGluay10ZXh0JywgdGhpcy5wcm9wcy5jbGFzc05hbWUpO1xuICAgIGNvbnN0IGJ0bkNsYXNzZXMgPSBjbGFzc05hbWVzKCdsaW5rLWJ0bicsIHRoaXMucHJvcHMuY2xhc3NOYW1lKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8YSBocmVmPXsgdGhpcy5wcm9wcy5saW5rVG8gfSBjbGFzc05hbWU9eyB0aGlzLnByb3BzLmxpbmtUeXBlID09PSAnbGluay10ZXh0JyA/IHRleHRDbGFzc2VzIDogYnRuQ2xhc3NlcyB9IHRhcmdldD0nX2JsYW5rJyA+XG4gICAgICAgIHsgdGhpcy5wcm9wcy5jaGlsZHJlbiB9XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAubGluay10ZXh0IHtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItZ3JlZW4tbWVkaXVtKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmxpbmstYnRuLFxuICAgICAgICAgIC5saW5rLWJ0bjphZnRlciB7XG4gICAgICAgICAgXHR0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICAgICAgICB9XG4gICAgICAgICAgLmxpbmstYnRuIHtcbiAgICAgICAgICBcdGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgICAgXHRmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICAgICAgICBcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICBcdGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgIFx0Ym9yZGVyOiAycHggc29saWQgdmFyKC0tY29sb3ItZ3JlZW4tbWVkaXVtKTtcbiAgICAgICAgICBcdGNvbG9yOiB2YXIoLS1jb2xvci1ncmVlbi1tZWRpdW0pO1xuICAgICAgICAgIFx0bGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xuICAgICAgICAgIFx0dGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcbiAgICAgICAgICBcdGZvbnQtc2l6ZTogMC44ZW07XG4gICAgICAgICAgXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgIFx0bWFyZ2luOiA4cHg7XG4gICAgICAgICAgXHRwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgXHRvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIFx0d2lkdGg6IDI1MHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAubGluay1idG46YmVmb3JlLFxuICAgICAgICAgIC5saW5rLWJ0bjphZnRlciB7XG4gICAgICAgICAgXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ncmVlbi1tZWRpdW0pO1xuICAgICAgICAgIFx0Y29udGVudDogJyc7XG4gICAgICAgICAgXHRwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgXHR6LWluZGV4OiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubGluay1idG46aG92ZXIge1xuICAgICAgICAgIFx0Y29sb3I6IHZhcigtLWNvbG9yLWdyZWVuLW1lZGl1bSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5saW5rLWJ0bjphZnRlciB7XG4gICAgICAgICAgXHRoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgXHRsZWZ0OiAtMzUlO1xuICAgICAgICAgIFx0dG9wOiAwO1xuICAgICAgICAgIFx0dHJhbnNmb3JtOiBza2V3KDUwZGVnKTtcbiAgICAgICAgICBcdHRyYW5zaXRpb24tZHVyYXRpb246IDAuNnM7XG4gICAgICAgICAgXHR0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgbGVmdDtcbiAgICAgICAgICBcdHdpZHRoOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubGluay1idG46aG92ZXI6YWZ0ZXIge1xuICAgICAgICAgIFx0aGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIFx0d2lkdGg6IDEzNSU7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2E+XG4gICAgKVxuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua1xuIl19 */\n/*@ sourceURL=/Users/dorachan/workspace/tamsenwedding/components/link.js */"));
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
//# sourceMappingURL=index.js.1d5af629bb6e48e60a13.hot-update.js.map