webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_form__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/form */ "./components/form.js");
/* harmony import */ var _components_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/input */ "./components/input.js");
/* harmony import */ var _components_radio__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/radio */ "./components/radio.js");
/* harmony import */ var _components_textarea__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/textarea */ "./components/textarea.js");
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/button */ "./components/button.js");
/* harmony import */ var _components_section__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/section */ "./components/section.js");
/* harmony import */ var _intro__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./_intro */ "./pages/_intro.js");
/* harmony import */ var _gallery__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./_gallery */ "./pages/_gallery.js");
/* harmony import */ var _registry__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./_registry */ "./pages/_registry.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./_footer */ "./pages/_footer.js");









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
        return alert("Success!");
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
      preferences: ""
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Home, [{
    key: "renderHoneypot",
    value: function renderHoneypot() {
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("form", {
        name: "rsvp",
        netlify: "true",
        "netlify-honeypot": "bot-field",
        hidden: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("input", {
        type: "text",
        name: "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("input", {
        type: "text",
        name: "guests",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          name = _this$state.name,
          attendance = _this$state.attendance,
          guests = _this$state.guests,
          preferences = _this$state.preferences;
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-4130395068" + " " + 'container',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, this.renderHoneypot(), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-4130395068" + " " + 'container-sections',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_intro__WEBPACK_IMPORTED_MODULE_17__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_gallery__WEBPACK_IMPORTED_MODULE_18__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_section__WEBPACK_IMPORTED_MODULE_16__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_form__WEBPACK_IMPORTED_MODULE_11__["default"], {
        submit: this.handleSubmit,
        formTitle: "RSVP",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_input__WEBPACK_IMPORTED_MODULE_12__["default"], {
        change: this.handleChange,
        inputName: "name",
        labelName: "Full Name",
        placeholder: "Full Name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_radio__WEBPACK_IMPORTED_MODULE_13__["default"], {
        inputName: "attendance",
        labelName: "Attendance",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_radio__WEBPACK_IMPORTED_MODULE_13__["default"].Option, {
        change: this.handleChange,
        value: "Joyfully Attending",
        inputName: "attendance",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_radio__WEBPACK_IMPORTED_MODULE_13__["default"].Option, {
        change: this.handleChange,
        value: "Regretfully Declining",
        inputName: "attendance",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_input__WEBPACK_IMPORTED_MODULE_12__["default"], {
        change: this.handleChange,
        inputName: "guests",
        labelName: "# of Guests",
        placeholder: "0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_textarea__WEBPACK_IMPORTED_MODULE_14__["default"], {
        change: this.handleChange,
        inputName: "diet",
        labelName: "Dietary Restrictions",
        placeholder: "Enter Description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_button__WEBPACK_IMPORTED_MODULE_15__["default"], {
        cta: "Submit RSVP",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_registry__WEBPACK_IMPORTED_MODULE_19__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_footer__WEBPACK_IMPORTED_MODULE_20__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
        id: "4130395068",
        __self: this
      }, "@import url('https://fonts.googleapis.com/css?family=Libre+Baskerville:400,700&display=swap');:root{--color-gray-dark:#BABABA;--color-gray-light:#F3F3F3;--color-green-dark:#29341B;--color-green-light:#9DB580;--color-black:#000000;--color-white:#FFFFFF;}body{font-family:'Value',sans-serif;font-size:16px;color:var(--color-green-dark);margin:0;padding:0;height:100vh;}h1,h2,h3,h4,h5,h6{font-family:'Libre Baskerville',serif;font-weight:bold;}.container{min-height:100vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.container-section{display:grid;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kb3JhY2hhbi93b3Jrc3BhY2UvdGFtc2Vud2VkZGluZy9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1RTJCLEFBRXdHLEFBRWpFLEFBUU0sQUFRTyxBQUl0QixBQU1KLGFBQ2YsSUFOZSxTQXBCYyxLQVFaLE9BUUUsUUFQYSxPQVJILEVBZ0I3QixxQkFQVyxJQVJtQixLQVNsQixNQVVhLElBVFYsYUFUUyxBQVV4QixzQkFUd0Isc0JBQ3hCLHNDQWlCcUIsNkZBQ3JCIiwiZmlsZSI6Ii9Vc2Vycy9kb3JhY2hhbi93b3Jrc3BhY2UvdGFtc2Vud2VkZGluZy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvZm9ybSc7XG5pbXBvcnQgSW5wdXQgZnJvbSAnLi4vY29tcG9uZW50cy9pbnB1dCc7XG5pbXBvcnQgUmFkaW8gZnJvbSAnLi4vY29tcG9uZW50cy9yYWRpbyc7XG5pbXBvcnQgVGV4dEFyZWEgZnJvbSAnLi4vY29tcG9uZW50cy90ZXh0YXJlYSc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL2NvbXBvbmVudHMvYnV0dG9uJztcbmltcG9ydCBTZWN0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvc2VjdGlvbic7XG5cbmltcG9ydCBJbnRybyBmcm9tICcuL19pbnRybyc7XG5pbXBvcnQgR2FsbGVyeSBmcm9tICcuL19nYWxsZXJ5JztcbmltcG9ydCBSZWdpc3RyeSBmcm9tICcuL19yZWdpc3RyeSc7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vX2Zvb3Rlcic7XG5cbmNvbnN0IGVuY29kZSA9IChkYXRhKSA9PiB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhkYXRhKVxuICAgIC5tYXAoa2V5ID0+IGVuY29kZVVSSUNvbXBvbmVudChrZXkpICsgXCI9XCIgKyBlbmNvZGVVUklDb21wb25lbnQoZGF0YVtrZXldKSlcbiAgICAuam9pbihcIiZcIik7XG59XG5cbmNsYXNzIEhvbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0geyBuYW1lOiBcIlwiLCBhdHRlbmRhbmNlOiBcIlwiLCBndWVzdHM6IFwiXCIsIHByZWZlcmVuY2VzOiBcIlwiIH07XG4gIH1cblxuICBoYW5kbGVTdWJtaXQgPSBlID0+IHtcbiAgICBmZXRjaChcIi9cIiwge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIiB9LFxuICAgICAgYm9keTogZW5jb2RlKHsgXCJmb3JtLW5hbWVcIjogXCJyc3ZwXCIsIC4uLnRoaXMuc3RhdGUgfSlcbiAgICB9KVxuICAgICAgLnRoZW4oKCkgPT4gYWxlcnQoXCJTdWNjZXNzIVwiKSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiBhbGVydChlcnJvcikpO1xuXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9O1xuXG4gIGhhbmRsZUNoYW5nZSA9IGUgPT4gdGhpcy5zZXRTdGF0ZSh7IFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUgfSk7XG5cbiAgcmVuZGVySG9uZXlwb3QoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxmb3JtIG5hbWU9J3JzdnAnIG5ldGxpZnk9J3RydWUnIG5ldGxpZnktaG9uZXlwb3Q9J2JvdC1maWVsZCcgaGlkZGVuPlxuICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgbmFtZT0nbmFtZScgLz5cbiAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIG5hbWU9J2d1ZXN0cycgLz5cbiAgICAgIDwvZm9ybT5cbiAgICApXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBuYW1lLCBhdHRlbmRhbmNlLCBndWVzdHMsIHByZWZlcmVuY2VzIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxuICAgICAgICB7IHRoaXMucmVuZGVySG9uZXlwb3QoKSB9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXItc2VjdGlvbnMnPlxuICAgICAgICAgIDxJbnRybyAvPlxuICAgICAgICAgIDxHYWxsZXJ5IC8+XG4gICAgICAgICAgPFNlY3Rpb24+XG4gICAgICAgICAgICA8Rm9ybSBzdWJtaXQ9eyB0aGlzLmhhbmRsZVN1Ym1pdCB9IGZvcm1UaXRsZT0nUlNWUCc+XG4gICAgICAgICAgICAgIDxJbnB1dCBjaGFuZ2U9eyB0aGlzLmhhbmRsZUNoYW5nZSB9IGlucHV0TmFtZT0nbmFtZScgbGFiZWxOYW1lPSdGdWxsIE5hbWUnIHBsYWNlaG9sZGVyPSdGdWxsIE5hbWUnIC8+XG4gICAgICAgICAgICAgIDxSYWRpbyBpbnB1dE5hbWU9J2F0dGVuZGFuY2UnIGxhYmVsTmFtZT0nQXR0ZW5kYW5jZSc+XG4gICAgICAgICAgICAgICAgPFJhZGlvLk9wdGlvbiBjaGFuZ2U9eyB0aGlzLmhhbmRsZUNoYW5nZSB9IHZhbHVlPSdKb3lmdWxseSBBdHRlbmRpbmcnIGlucHV0TmFtZT0nYXR0ZW5kYW5jZScgLz5cbiAgICAgICAgICAgICAgICA8UmFkaW8uT3B0aW9uIGNoYW5nZT17IHRoaXMuaGFuZGxlQ2hhbmdlIH0gdmFsdWU9J1JlZ3JldGZ1bGx5IERlY2xpbmluZycgaW5wdXROYW1lPSdhdHRlbmRhbmNlJy8+XG4gICAgICAgICAgICAgIDwvUmFkaW8+XG4gICAgICAgICAgICAgIDxJbnB1dCBjaGFuZ2U9eyB0aGlzLmhhbmRsZUNoYW5nZSB9IGlucHV0TmFtZT0nZ3Vlc3RzJyBsYWJlbE5hbWU9JyMgb2YgR3Vlc3RzJyBwbGFjZWhvbGRlcj0nMCcgLz5cbiAgICAgICAgICAgICAgPFRleHRBcmVhIGNoYW5nZT17IHRoaXMuaGFuZGxlQ2hhbmdlIH0gaW5wdXROYW1lPSdkaWV0JyBsYWJlbE5hbWU9J0RpZXRhcnkgUmVzdHJpY3Rpb25zJyBwbGFjZWhvbGRlcj0nRW50ZXIgRGVzY3JpcHRpb24nIC8+XG4gICAgICAgICAgICAgIDxCdXR0b24gY3RhPSdTdWJtaXQgUlNWUCcgLz5cbiAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICAgIDxSZWdpc3RyeSAvPlxuICAgICAgICAgIDwvU2VjdGlvbj5cbiAgICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TGlicmUrQmFza2VydmlsbGU6NDAwLDcwMCZkaXNwbGF5PXN3YXAnKTtcbiAgICAgICAgICA6cm9vdCB7XG4gICAgICAgICAgICAtLWNvbG9yLWdyYXktZGFyazogI0JBQkFCQTtcbiAgICAgICAgICAgIC0tY29sb3ItZ3JheS1saWdodDogI0YzRjNGMztcbiAgICAgICAgICAgIC0tY29sb3ItZ3JlZW4tZGFyazogIzI5MzQxQjtcbiAgICAgICAgICAgIC0tY29sb3ItZ3JlZW4tbGlnaHQ6ICM5REI1ODA7XG4gICAgICAgICAgICAtLWNvbG9yLWJsYWNrOiAjMDAwMDAwO1xuICAgICAgICAgICAgLS1jb2xvci13aGl0ZTogI0ZGRkZGRjtcbiAgICAgICAgICB9XG4gICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ1ZhbHVlJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1ncmVlbi1kYXJrKTtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgIH1cbiAgICAgICAgICBoMSwgaDIsIGgzLCBoNCwgaDUsIGg2IHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTGlicmUgQmFza2VydmlsbGUnLCBzZXJpZjtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNvbnRhaW5lci1zZWN0aW9uIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lXG4iXX0= */\n/*@ sourceURL=/Users/dorachan/workspace/tamsenwedding/pages/index.js */"));
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.bab5562738195a54d9ed.hot-update.js.map