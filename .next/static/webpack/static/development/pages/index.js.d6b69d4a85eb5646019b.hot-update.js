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
        className: "jsx-50162985" + " " + ((this.props.linkType === 'link-text' ? textClasses : btnClasses) || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, this.props.children, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "50162985",
        __self: this
      }, ".link-text.jsx-50162985{-webkit-text-decoration:none;text-decoration:none;font-weight:400;color:var(--color-green-light);}.link-btn.jsx-50162985,.link-btn.jsx-50162985:after,.link-btn.jsx-50162985:hover{-webkit-transition:all 0.4s;transition:all 0.4s;}.link-btn.jsx-50162985{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:60px;font-family:inherit;-webkit-text-decoration:none;text-decoration:none;font-weight:600;text-transform:uppercase;border:2px solid var(--color-green-light);color:var(--color-green-light);-webkit-letter-spacing:0.1em;-moz-letter-spacing:0.1em;-ms-letter-spacing:0.1em;letter-spacing:0.1em;text-rendering:optimizeLegibility;font-size:0.8em;box-sizing:border-box;margin:8px;position:relative;overflow:hidden;width:250px;}.link-btn.jsx-50162985:before,.link-btn.jsx-50162985:after{background-color:var(--color-black-light);content:'';position:absolute;z-index:-1;}.link-btn.jsx-50162985:hover{border-color:var(--color-black-light);color:var(--color-white);z-index:2;}.link-btn.jsx-50162985:after{height:100%;left:-35%;top:0;-webkit-transform:skew(50deg);-ms-transform:skew(50deg);transform:skew(50deg);-webkit-transition-duration:0.6s;transition-duration:0.6s;-webkit-transform-origin:top left;-ms-transform-origin:top left;transform-origin:top left;width:0;}.link-btn.jsx-50162985:hover.jsx-50162985:after{height:100%;width:135%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kb3JhY2hhbi93b3Jrc3BhY2UvdGFtc2Vud2VkZGluZy9jb21wb25lbnRzL2xpbmsuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0JvQixBQUdrQyxBQU9GLEFBR1AsQUFxQjZCLEFBTUgsQUFLM0IsQUFTQSxZQVJGLEFBU0MsVUFSTCxDQVNQLEtBUnVCLFVBUEcsSUFOZCxNQXhCWixFQVBrQixHQWdDQyxVQU1QLEdBckNxQixLQWdDckIsRUFNWixDQTdCeUIsUUF3QnpCLGVBaENBLFNBMkMwQiwwREFDQyxTQW5DTixpRkFvQ1osUUFDVCxJQXBDYyxZQUNPLG9CQUNDLGtEQUNMLGdCQUNTLHlCQUNpQiwwQ0FDWCwrQkFDVixxR0FDYSxrQ0FDbEIsZ0JBQ00sc0JBQ1gsV0FDTyxrQkFDRixnQkFDSixZQUNiIiwiZmlsZSI6Ii9Vc2Vycy9kb3JhY2hhbi93b3Jrc3BhY2UvdGFtc2Vud2VkZGluZy9jb21wb25lbnRzL2xpbmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmNsYXNzIExpbmsgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBsaW5rVG86IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgbGlua1R5cGU6IFByb3BUeXBlcy5vbmVPZihbJ2xpbmstdGV4dCcsICdsaW5rLWJ0biddKVxuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBsaW5rVHlwZTogJ2xpbmstdGV4dCdcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB0ZXh0Q2xhc3NlcyA9IGNsYXNzTmFtZXMoJ2xpbmstdGV4dCcsIHRoaXMucHJvcHMuY2xhc3NOYW1lKTtcbiAgICBjb25zdCBidG5DbGFzc2VzID0gY2xhc3NOYW1lcygnbGluay1idG4nLCB0aGlzLnByb3BzLmNsYXNzTmFtZSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGEgaHJlZj17IHRoaXMucHJvcHMubGlua1RvIH0gY2xhc3NOYW1lPXsgdGhpcy5wcm9wcy5saW5rVHlwZSA9PT0gJ2xpbmstdGV4dCcgPyB0ZXh0Q2xhc3NlcyA6IGJ0bkNsYXNzZXMgfSB0YXJnZXQ9J19ibGFuaycgPlxuICAgICAgICB7IHRoaXMucHJvcHMuY2hpbGRyZW4gfVxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmxpbmstdGV4dCB7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLWdyZWVuLWxpZ2h0KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmxpbmstYnRuLFxuICAgICAgICAgIC5saW5rLWJ0bjphZnRlcixcbiAgICAgICAgICAubGluay1idG46aG92ZXIge1xuICAgICAgICAgIFx0dHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5saW5rLWJ0biB7XG4gICAgICAgICAgXHRkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICAgIFx0Zm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gICAgICAgICAgXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgXHRmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgIFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICBcdGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNvbG9yLWdyZWVuLWxpZ2h0KTtcbiAgICAgICAgICBcdGNvbG9yOiB2YXIoLS1jb2xvci1ncmVlbi1saWdodCk7XG4gICAgICAgICAgXHRsZXR0ZXItc3BhY2luZzogMC4xZW07XG4gICAgICAgICAgXHR0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xuICAgICAgICAgIFx0Zm9udC1zaXplOiAwLjhlbTtcbiAgICAgICAgICBcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgXHRtYXJnaW46IDhweDtcbiAgICAgICAgICBcdHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBcdG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgXHR3aWR0aDogMjUwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5saW5rLWJ0bjpiZWZvcmUsXG4gICAgICAgICAgLmxpbmstYnRuOmFmdGVyIHtcbiAgICAgICAgICBcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJsYWNrLWxpZ2h0KTtcbiAgICAgICAgICBcdGNvbnRlbnQ6ICcnO1xuICAgICAgICAgIFx0cG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIFx0ei1pbmRleDogLTE7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5saW5rLWJ0bjpob3ZlciB7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLWJsYWNrLWxpZ2h0KTtcbiAgICAgICAgICBcdGNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XG4gICAgICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubGluay1idG46YWZ0ZXIge1xuICAgICAgICAgIFx0aGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIFx0bGVmdDogLTM1JTtcbiAgICAgICAgICBcdHRvcDogMDtcbiAgICAgICAgICBcdHRyYW5zZm9ybTogc2tldyg1MGRlZyk7XG4gICAgICAgICAgXHR0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjZzO1xuICAgICAgICAgIFx0dHJhbnNmb3JtLW9yaWdpbjogdG9wIGxlZnQ7XG4gICAgICAgICAgXHR3aWR0aDogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmxpbmstYnRuOmhvdmVyOmFmdGVyIHtcbiAgICAgICAgICBcdGhlaWdodDogMTAwJTtcbiAgICAgICAgICBcdHdpZHRoOiAxMzUlO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9hPlxuICAgIClcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtcbiJdfQ== */\n/*@ sourceURL=/Users/dorachan/workspace/tamsenwedding/components/link.js */"));
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
//# sourceMappingURL=index.js.d6b69d4a85eb5646019b.hot-update.js.map