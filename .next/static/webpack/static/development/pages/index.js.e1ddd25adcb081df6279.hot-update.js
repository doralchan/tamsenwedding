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
        className: "jsx-2010095557" + " " + 'container',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, this.renderHoneypot(), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-2010095557",
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
      }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
        id: "2010095557",
        __self: this
      }, "@import url('https://fonts.googleapis.com/css?family=Libre+Baskerville:400,700&display=swap');:root{--color-gray-dark:#BABABA;--color-gray-light:#F3F3F3;--color-green-dark:#29341B;--color-green-light:#9DB580;--color-black:#000000;--color-white:#FFFFFF;}body{font-family:'Value',sans-serif;font-size:16px;color:var(--color-green-dark);margin:0;padding:0;height:100vh;}h1,h2,h3,h4,h5,h6{font-family:'Libre Baskerville',serif;}.container{min-height:100vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kb3JhY2hhbi93b3Jrc3BhY2UvdGFtc2Vud2VkZGluZy9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzRTJCLEFBRXdHLEFBRWpFLEFBUU0sQUFRTyxBQUd0QixpQkFDSixTQW5CYyxLQVFaLE9BUWpCLFFBUGdDLE9BUkgsdUJBU2xCLElBUm1CLEtBU2xCLE1BU2EsSUFSVixhQVRTLEFBVXhCLHNCQVR3QixzQkFDeEIsc0NBZ0JxQiw2RkFDckIiLCJmaWxlIjoiL1VzZXJzL2RvcmFjaGFuL3dvcmtzcGFjZS90YW1zZW53ZWRkaW5nL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9mb3JtJztcbmltcG9ydCBJbnB1dCBmcm9tICcuLi9jb21wb25lbnRzL2lucHV0JztcbmltcG9ydCBSYWRpbyBmcm9tICcuLi9jb21wb25lbnRzL3JhZGlvJztcbmltcG9ydCBUZXh0QXJlYSBmcm9tICcuLi9jb21wb25lbnRzL3RleHRhcmVhJztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vY29tcG9uZW50cy9idXR0b24nO1xuaW1wb3J0IFNlY3Rpb24gZnJvbSAnLi4vY29tcG9uZW50cy9zZWN0aW9uJztcblxuaW1wb3J0IEludHJvIGZyb20gJy4vX2ludHJvJztcbmltcG9ydCBHYWxsZXJ5IGZyb20gJy4vX2dhbGxlcnknO1xuaW1wb3J0IFJlZ2lzdHJ5IGZyb20gJy4vX3JlZ2lzdHJ5JztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9fZm9vdGVyJztcblxuY29uc3QgZW5jb2RlID0gKGRhdGEpID0+IHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKGRhdGEpXG4gICAgLm1hcChrZXkgPT4gZW5jb2RlVVJJQ29tcG9uZW50KGtleSkgKyBcIj1cIiArIGVuY29kZVVSSUNvbXBvbmVudChkYXRhW2tleV0pKVxuICAgIC5qb2luKFwiJlwiKTtcbn1cblxuY2xhc3MgSG9tZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7IG5hbWU6IFwiXCIsIGF0dGVuZGFuY2U6IFwiXCIsIGd1ZXN0czogXCJcIiwgcHJlZmVyZW5jZXM6IFwiXCIgfTtcbiAgfVxuXG4gIGhhbmRsZVN1Ym1pdCA9IGUgPT4ge1xuICAgIGZldGNoKFwiL1wiLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiIH0sXG4gICAgICBib2R5OiBlbmNvZGUoeyBcImZvcm0tbmFtZVwiOiBcInJzdnBcIiwgLi4udGhpcy5zdGF0ZSB9KVxuICAgIH0pXG4gICAgICAudGhlbigoKSA9PiBhbGVydChcIlN1Y2Nlc3MhXCIpKVxuICAgICAgLmNhdGNoKGVycm9yID0+IGFsZXJ0KGVycm9yKSk7XG5cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH07XG5cbiAgaGFuZGxlQ2hhbmdlID0gZSA9PiB0aGlzLnNldFN0YXRlKHsgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZSB9KTtcblxuICByZW5kZXJIb25leXBvdCgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGZvcm0gbmFtZT0ncnN2cCcgbmV0bGlmeT0ndHJ1ZScgbmV0bGlmeS1ob25leXBvdD0nYm90LWZpZWxkJyBoaWRkZW4+XG4gICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBuYW1lPSduYW1lJyAvPlxuICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgbmFtZT0nZ3Vlc3RzJyAvPlxuICAgICAgPC9mb3JtPlxuICAgIClcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IG5hbWUsIGF0dGVuZGFuY2UsIGd1ZXN0cywgcHJlZmVyZW5jZXMgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XG4gICAgICAgIHsgdGhpcy5yZW5kZXJIb25leXBvdCgpIH1cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8SW50cm8gLz5cbiAgICAgICAgICA8R2FsbGVyeSAvPlxuICAgICAgICAgIDxTZWN0aW9uPlxuICAgICAgICAgICAgPEZvcm0gc3VibWl0PXsgdGhpcy5oYW5kbGVTdWJtaXQgfSBmb3JtVGl0bGU9J1JTVlAnPlxuICAgICAgICAgICAgICA8SW5wdXQgY2hhbmdlPXsgdGhpcy5oYW5kbGVDaGFuZ2UgfSBpbnB1dE5hbWU9J25hbWUnIGxhYmVsTmFtZT0nRnVsbCBOYW1lJyBwbGFjZWhvbGRlcj0nRnVsbCBOYW1lJyAvPlxuICAgICAgICAgICAgICA8UmFkaW8gaW5wdXROYW1lPSdhdHRlbmRhbmNlJyBsYWJlbE5hbWU9J0F0dGVuZGFuY2UnPlxuICAgICAgICAgICAgICAgIDxSYWRpby5PcHRpb24gY2hhbmdlPXsgdGhpcy5oYW5kbGVDaGFuZ2UgfSB2YWx1ZT0nSm95ZnVsbHkgQXR0ZW5kaW5nJyBpbnB1dE5hbWU9J2F0dGVuZGFuY2UnIC8+XG4gICAgICAgICAgICAgICAgPFJhZGlvLk9wdGlvbiBjaGFuZ2U9eyB0aGlzLmhhbmRsZUNoYW5nZSB9IHZhbHVlPSdSZWdyZXRmdWxseSBEZWNsaW5pbmcnIGlucHV0TmFtZT0nYXR0ZW5kYW5jZScvPlxuICAgICAgICAgICAgICA8L1JhZGlvPlxuICAgICAgICAgICAgICA8SW5wdXQgY2hhbmdlPXsgdGhpcy5oYW5kbGVDaGFuZ2UgfSBpbnB1dE5hbWU9J2d1ZXN0cycgbGFiZWxOYW1lPScjIG9mIEd1ZXN0cycgcGxhY2Vob2xkZXI9JzAnIC8+XG4gICAgICAgICAgICAgIDxUZXh0QXJlYSBjaGFuZ2U9eyB0aGlzLmhhbmRsZUNoYW5nZSB9IGlucHV0TmFtZT0nZGlldCcgbGFiZWxOYW1lPSdEaWV0YXJ5IFJlc3RyaWN0aW9ucycgcGxhY2Vob2xkZXI9J0VudGVyIERlc2NyaXB0aW9uJyAvPlxuICAgICAgICAgICAgICA8QnV0dG9uIGN0YT0nU3VibWl0IFJTVlAnIC8+XG4gICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgICA8UmVnaXN0cnkgLz5cbiAgICAgICAgICA8L1NlY3Rpb24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TGlicmUrQmFza2VydmlsbGU6NDAwLDcwMCZkaXNwbGF5PXN3YXAnKTtcbiAgICAgICAgICA6cm9vdCB7XG4gICAgICAgICAgICAtLWNvbG9yLWdyYXktZGFyazogI0JBQkFCQTtcbiAgICAgICAgICAgIC0tY29sb3ItZ3JheS1saWdodDogI0YzRjNGMztcbiAgICAgICAgICAgIC0tY29sb3ItZ3JlZW4tZGFyazogIzI5MzQxQjtcbiAgICAgICAgICAgIC0tY29sb3ItZ3JlZW4tbGlnaHQ6ICM5REI1ODA7XG4gICAgICAgICAgICAtLWNvbG9yLWJsYWNrOiAjMDAwMDAwO1xuICAgICAgICAgICAgLS1jb2xvci13aGl0ZTogI0ZGRkZGRjtcbiAgICAgICAgICB9XG4gICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ1ZhbHVlJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1ncmVlbi1kYXJrKTtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgIH1cbiAgICAgICAgICBoMSwgaDIsIGgzLCBoNCwgaDUsIGg2IHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTGlicmUgQmFza2VydmlsbGUnLCBzZXJpZjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lXG4iXX0= */\n/*@ sourceURL=/Users/dorachan/workspace/tamsenwedding/pages/index.js */"));
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.e1ddd25adcb081df6279.hot-update.js.map