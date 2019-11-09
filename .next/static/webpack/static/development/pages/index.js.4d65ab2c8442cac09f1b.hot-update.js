webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_scroll_into_view__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-scroll-into-view */ "./node_modules/react-scroll-into-view/dist/index.js");
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
      var navList = ['photos', 'travel', 'registry', 'RSVP'];
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("nav", {
        className: "jsx-1182314380" + " " + 'nav',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("ul", {
        className: "jsx-1182314380" + " " + 'nav-list',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, navList.map(function (i) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
          key: i,
          className: "jsx-1182314380" + " " + 'nav-list-item',
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
        id: "1182314380",
        __self: this
      }, ".nav{width:100%;z-index:1;}.nav-list{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;padding:0;}.nav-list-item{display:block;list-style:none;cursor:pointer;font-weight:400;color:var(--color-coral);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;height:60px;}.nav-list-item:nth-child(4){background-color:var(--color-coral);border:2px solid var(--color-coral-light);color:var(--color-white);text-rendering:optimizeLegibility;box-sizing:border-box;min-width:120px;border-radius:4px;position:relative;overflow:hidden;}.nav-list-item:nth-child(4):before,.nav-list-item:nth-child(4):after{background-color:var(--color-coral);content:'';position:absolute;z-index:-1;}.nav-list-item:nth-child(4):hover{border-color:var(--color-coral);cursor:pointer;z-index:2;}.nav-list-item:nth-child(4):after{height:100%;left:-35%;top:0;-webkit-transform:skew(50deg);-ms-transform:skew(50deg);transform:skew(50deg);-webkit-transition-duration:0.6s;transition-duration:0.6s;-webkit-transform-origin:top left;-ms-transform-origin:top left;transform-origin:top left;width:0;}.btn:hover:after{height:100%;width:135%;}@media (min-width:992px){.nav{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;min-height:100px;}.nav-list{width:400px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kb3JhY2hhbi93b3Jrc3BhY2UvdGFtc2Vud2VkZGluZy9jb21wb25lbnRzL25hdmlnYXRpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVzJCLEFBR3dCLEFBS0UsQUFNQyxBQVlzQixBQWFBLEFBT0osQUFNcEIsQUFVQSxBQU9HLEFBT0QsV0F4RUosQ0FpREEsQUFVQyxBQWNYLEVBOURnQixPQVZsQixDQWlEUSxDQVVSLEtBVHdCLEVBdkNQLEVBK0JBLElBcEIyQixBQWEvQixTQXZCSyxFQXdCRSxBQU9SLFVBQ1osSUEvQjJCLElBd0JkLFNBakNrQixBQTZERixFQTNCN0IsRUFmMkIsUUFUWixpQkFVcUIsR0EyQlQsK0JBMUJILHNCQUNOLENBWEcsSUFxQ08sT0FjTCxJQXZDSCxrQkFDQSxJQXZCUixVQUNaLElBdUJrQixnQkFDbEIsMEJBZHlCLENBcUNmLFFBQ1YsRUFhcUIsaUJBQ25CLHVFQW5EWSxZQUNkIiwiZmlsZSI6Ii9Vc2Vycy9kb3JhY2hhbi93b3Jrc3BhY2UvdGFtc2Vud2VkZGluZy9jb21wb25lbnRzL25hdmlnYXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2Nyb2xsVG8gZnJvbSAncmVhY3Qtc2Nyb2xsLWludG8tdmlldyc7XG5cbmNsYXNzIE5hdmlnYXRpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgbmF2TGlzdCA9IFsncGhvdG9zJywgJ3RyYXZlbCcsICdyZWdpc3RyeScsICdSU1ZQJ107XG5cbiAgICByZXR1cm4gKFxuICAgICAgPG5hdiBjbGFzc05hbWU9J25hdic+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9J25hdi1saXN0Jz5cbiAgICAgICAgICB7IG5hdkxpc3QubWFwKGkgPT4gKCA8bGkgY2xhc3NOYW1lPSduYXYtbGlzdC1pdGVtJyBrZXk9e2l9PjxTY3JvbGxUbyBzZWxlY3Rvcj17YCMke2l9YH0+eyBpLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgaS5zbGljZSgxKSB9PC9TY3JvbGxUbz48L2xpPiApKX1cbiAgICAgICAgPC91bD5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICAubmF2IHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubmF2LWxpc3Qge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubmF2LWxpc3QtaXRlbSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLWNvcmFsKTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm5hdi1saXN0LWl0ZW06bnRoLWNoaWxkKDQpIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWNvcmFsKTtcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNvbG9yLWNvcmFsLWxpZ2h0KTtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XG4gICAgICAgICAgICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIG1pbi13aWR0aDogMTIwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5uYXYtbGlzdC1pdGVtOm50aC1jaGlsZCg0KTpiZWZvcmUsXG4gICAgICAgICAgLm5hdi1saXN0LWl0ZW06bnRoLWNoaWxkKDQpOmFmdGVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWNvcmFsKTtcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgei1pbmRleDogLTE7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm5hdi1saXN0LWl0ZW06bnRoLWNoaWxkKDQpOmhvdmVyIHtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tY29sb3ItY29yYWwpO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubmF2LWxpc3QtaXRlbTpudGgtY2hpbGQoNCk6YWZ0ZXIge1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgbGVmdDogLTM1JTtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2tldyg1MGRlZyk7XG4gICAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjZzO1xuICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wIGxlZnQ7XG4gICAgICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuYnRuOmhvdmVyOmFmdGVyIHtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIHdpZHRoOiAxMzUlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuXG4gICAgICAgICAgICAubmF2IHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgbWluLWhlaWdodDogMTAwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5uYXYtbGlzdCB7XG4gICAgICAgICAgICAgIHdpZHRoOiA0MDBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9uYXY+XG4gICAgKVxuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2aWdhdGlvbjtcbiJdfQ== */\n/*@ sourceURL=/Users/dorachan/workspace/tamsenwedding/components/navigation.js */"));
    }
  }]);

  return Navigation;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Navigation);

/***/ })

})
//# sourceMappingURL=index.js.4d65ab2c8442cac09f1b.hot-update.js.map