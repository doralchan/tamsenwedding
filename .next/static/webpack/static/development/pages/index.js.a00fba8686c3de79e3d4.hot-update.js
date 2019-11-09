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
        className: "jsx-2231433040" + " " + 'nav',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("ul", {
        className: "jsx-2231433040" + " " + 'nav-list',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, navList.map(function (i) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
          key: i,
          className: "jsx-2231433040" + " " + 'nav-list-item',
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
        id: "2231433040",
        __self: this
      }, ".nav{width:100%;z-index:1;}.nav-list{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;padding:0;}.nav-list-item{display:block;list-style:none;cursor:pointer;font-weight:400;color:var(--color-coral);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;height:60px;}.nav-list-item:nth-child(4){background-color:var(--color-coral);border:2px solid var(--color-coral-light);color:var(--color-white);text-rendering:optimizeLegibility;box-sizing:border-box;min-width:120px;border-radius:4px;position:relative;overflow:hidden;}.nav-list-item:nth-child(4):before,.nav-list-item:nth-child(4):after{background-color:var(--color-coral);content:'';position:absolute;z-index:-1;}.nav-list-item:nth-child(4):hover{border-color:var(--color-coral);cursor:pointer;z-index:2;}@media (min-width:992px){.nav{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;min-height:100px;}.nav-list{width:400px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kb3JhY2hhbi93b3Jrc3BhY2UvdGFtc2Vud2VkZGluZy9jb21wb25lbnRzL25hdmlnYXRpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVzJCLEFBR3dCLEFBS0UsQUFNQyxBQVlzQixBQWFBLEFBT0osQUFRakIsQUFPRCxXQXpESixDQTBEVixFQS9DZ0IsT0FWbEIsU0FXaUIsRUErQkEsSUFwQjJCLEFBYS9CLFNBdkJLLEVBd0JFLEFBT1IsVUFDWixJQS9CMkIsSUF3QmQsU0FqQ2tCLEFBOENGLEVBWjdCLEVBZjJCLFFBVFosaUJBVXFCLGtDQUNaLHNCQUNOLENBWEcsV0FvQ0UsSUF4Qkgsa0JBQ0EsSUF2QlIsVUFDWixJQXVCa0IsZ0JBQ2xCLDBCQWR5QixXQW9DSixpQkFDbkIsdUVBcENZLFlBQ2QiLCJmaWxlIjoiL1VzZXJzL2RvcmFjaGFuL3dvcmtzcGFjZS90YW1zZW53ZWRkaW5nL2NvbXBvbmVudHMvbmF2aWdhdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTY3JvbGxUbyBmcm9tICdyZWFjdC1zY3JvbGwtaW50by12aWV3JztcblxuY2xhc3MgTmF2aWdhdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBuYXZMaXN0ID0gWydwaG90b3MnLCAndHJhdmVsJywgJ3JlZ2lzdHJ5JywgJ1JTVlAnXTtcblxuICAgIHJldHVybiAoXG4gICAgICA8bmF2IGNsYXNzTmFtZT0nbmF2Jz5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT0nbmF2LWxpc3QnPlxuICAgICAgICAgIHsgbmF2TGlzdC5tYXAoaSA9PiAoIDxsaSBjbGFzc05hbWU9J25hdi1saXN0LWl0ZW0nIGtleT17aX0+PFNjcm9sbFRvIHNlbGVjdG9yPXtgIyR7aX1gfT57IGkuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBpLnNsaWNlKDEpIH08L1Njcm9sbFRvPjwvbGk+ICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgIC5uYXYge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5uYXYtbGlzdCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5uYXYtbGlzdC1pdGVtIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItY29yYWwpO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubmF2LWxpc3QtaXRlbTpudGgtY2hpbGQoNCkge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItY29yYWwpO1xuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tY29sb3ItY29yYWwtbGlnaHQpO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcbiAgICAgICAgICAgIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgbWluLXdpZHRoOiAxMjBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm5hdi1saXN0LWl0ZW06bnRoLWNoaWxkKDQpOmJlZm9yZSxcbiAgICAgICAgICAubmF2LWxpc3QtaXRlbTpudGgtY2hpbGQoNCk6YWZ0ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItY29yYWwpO1xuICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB6LWluZGV4OiAtMTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubmF2LWxpc3QtaXRlbTpudGgtY2hpbGQoNCk6aG92ZXIge1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci1jb3JhbCk7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuXG4gICAgICAgICAgICAubmF2IHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgbWluLWhlaWdodDogMTAwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5uYXYtbGlzdCB7XG4gICAgICAgICAgICAgIHdpZHRoOiA0MDBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9uYXY+XG4gICAgKVxuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2aWdhdGlvbjtcbiJdfQ== */\n/*@ sourceURL=/Users/dorachan/workspace/tamsenwedding/components/navigation.js */"));
    }
  }]);

  return Navigation;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Navigation);

/***/ })

})
//# sourceMappingURL=index.js.a00fba8686c3de79e3d4.hot-update.js.map