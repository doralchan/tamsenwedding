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
        className: "jsx-3001220103" + " " + 'container',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, this.renderHoneypot(), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-3001220103" + " " + 'container-sections',
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
        id: "3001220103",
        __self: this
      }, "@import url('https://fonts.googleapis.com/css?family=Libre+Baskerville&display=swap');:root{--color-gray-dark:#BABABA;--color-gray-light:#F3F3F3;--color-green-dark:#29341B;--color-green-light:#9DB580;--color-black:#000000;--color-white:#FFFFFF;}body{font-family:'Value',sans-serif;font-size:16px;color:var(--color-green-dark);margin:0;padding:0;height:100vh;}h1,h2,h3,h4,h5{font-family:'Libre Baskerville',serif;text-transform:uppercase;font-weight:100;margin:0;}h1{font-size:3em;}h6{font-size:1em;text-transform:uppercase;-webkit-letter-spacing:0.1em;-moz-letter-spacing:0.1em;-ms-letter-spacing:0.1em;letter-spacing:0.1em;font-weight:600;margin:0;}.container{min-height:100vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.container-section{display:grid;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kb3JhY2hhbi93b3Jrc3BhY2UvdGFtc2Vud2VkZGluZy9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1RTJCLEFBRWdHLEFBRXpELEFBUU0sQUFRTyxBQU16QixBQUdBLEFBT0csQUFNSixhQUNmLENBaEJBLEFBRzJCLEdBT1osU0FoQ2MsS0FRWixPQVFVLENBVUosT0FqQlMsT0FSSCxVQWdCWCxhQVBQLEdBUUEsQ0FoQm1CLEtBU2xCLEdBUVosR0FjeUIsSUFyQlYsYUFUUyxBQVV4QixzQkFUd0IsVUF1Qk4sWUF0QmxCLElBdUJXLFNBQ1gseUJBS3FCLDZGQUNyQiIsImZpbGUiOiIvVXNlcnMvZG9yYWNoYW4vd29ya3NwYWNlL3RhbXNlbndlZGRpbmcvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRm9ybSBmcm9tICcuLi9jb21wb25lbnRzL2Zvcm0nO1xuaW1wb3J0IElucHV0IGZyb20gJy4uL2NvbXBvbmVudHMvaW5wdXQnO1xuaW1wb3J0IFJhZGlvIGZyb20gJy4uL2NvbXBvbmVudHMvcmFkaW8nO1xuaW1wb3J0IFRleHRBcmVhIGZyb20gJy4uL2NvbXBvbmVudHMvdGV4dGFyZWEnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9jb21wb25lbnRzL2J1dHRvbic7XG5pbXBvcnQgU2VjdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL3NlY3Rpb24nO1xuXG5pbXBvcnQgSW50cm8gZnJvbSAnLi9faW50cm8nO1xuaW1wb3J0IEdhbGxlcnkgZnJvbSAnLi9fZ2FsbGVyeSc7XG5pbXBvcnQgUmVnaXN0cnkgZnJvbSAnLi9fcmVnaXN0cnknO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuL19mb290ZXInO1xuXG5jb25zdCBlbmNvZGUgPSAoZGF0YSkgPT4ge1xuICByZXR1cm4gT2JqZWN0LmtleXMoZGF0YSlcbiAgICAubWFwKGtleSA9PiBlbmNvZGVVUklDb21wb25lbnQoa2V5KSArIFwiPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KGRhdGFba2V5XSkpXG4gICAgLmpvaW4oXCImXCIpO1xufVxuXG5jbGFzcyBIb21lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgbmFtZTogXCJcIiwgYXR0ZW5kYW5jZTogXCJcIiwgZ3Vlc3RzOiBcIlwiLCBwcmVmZXJlbmNlczogXCJcIiB9O1xuICB9XG5cbiAgaGFuZGxlU3VibWl0ID0gZSA9PiB7XG4gICAgZmV0Y2goXCIvXCIsIHtcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIgfSxcbiAgICAgIGJvZHk6IGVuY29kZSh7IFwiZm9ybS1uYW1lXCI6IFwicnN2cFwiLCAuLi50aGlzLnN0YXRlIH0pXG4gICAgfSlcbiAgICAgIC50aGVuKCgpID0+IGFsZXJ0KFwiU3VjY2VzcyFcIikpXG4gICAgICAuY2F0Y2goZXJyb3IgPT4gYWxlcnQoZXJyb3IpKTtcblxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgfTtcblxuICBoYW5kbGVDaGFuZ2UgPSBlID0+IHRoaXMuc2V0U3RhdGUoeyBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlIH0pO1xuXG4gIHJlbmRlckhvbmV5cG90KCkge1xuICAgIHJldHVybiAoXG4gICAgICA8Zm9ybSBuYW1lPSdyc3ZwJyBuZXRsaWZ5PSd0cnVlJyBuZXRsaWZ5LWhvbmV5cG90PSdib3QtZmllbGQnIGhpZGRlbj5cbiAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIG5hbWU9J25hbWUnIC8+XG4gICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBuYW1lPSdndWVzdHMnIC8+XG4gICAgICA8L2Zvcm0+XG4gICAgKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbmFtZSwgYXR0ZW5kYW5jZSwgZ3Vlc3RzLCBwcmVmZXJlbmNlcyB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cbiAgICAgICAgeyB0aGlzLnJlbmRlckhvbmV5cG90KCkgfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyLXNlY3Rpb25zJz5cbiAgICAgICAgICA8SW50cm8gLz5cbiAgICAgICAgICA8R2FsbGVyeSAvPlxuICAgICAgICAgIDxTZWN0aW9uPlxuICAgICAgICAgICAgPEZvcm0gc3VibWl0PXsgdGhpcy5oYW5kbGVTdWJtaXQgfSBmb3JtVGl0bGU9J1JTVlAnPlxuICAgICAgICAgICAgICA8SW5wdXQgY2hhbmdlPXsgdGhpcy5oYW5kbGVDaGFuZ2UgfSBpbnB1dE5hbWU9J25hbWUnIGxhYmVsTmFtZT0nRnVsbCBOYW1lJyBwbGFjZWhvbGRlcj0nRnVsbCBOYW1lJyAvPlxuICAgICAgICAgICAgICA8UmFkaW8gaW5wdXROYW1lPSdhdHRlbmRhbmNlJyBsYWJlbE5hbWU9J0F0dGVuZGFuY2UnPlxuICAgICAgICAgICAgICAgIDxSYWRpby5PcHRpb24gY2hhbmdlPXsgdGhpcy5oYW5kbGVDaGFuZ2UgfSB2YWx1ZT0nSm95ZnVsbHkgQXR0ZW5kaW5nJyBpbnB1dE5hbWU9J2F0dGVuZGFuY2UnIC8+XG4gICAgICAgICAgICAgICAgPFJhZGlvLk9wdGlvbiBjaGFuZ2U9eyB0aGlzLmhhbmRsZUNoYW5nZSB9IHZhbHVlPSdSZWdyZXRmdWxseSBEZWNsaW5pbmcnIGlucHV0TmFtZT0nYXR0ZW5kYW5jZScvPlxuICAgICAgICAgICAgICA8L1JhZGlvPlxuICAgICAgICAgICAgICA8SW5wdXQgY2hhbmdlPXsgdGhpcy5oYW5kbGVDaGFuZ2UgfSBpbnB1dE5hbWU9J2d1ZXN0cycgbGFiZWxOYW1lPScjIG9mIEd1ZXN0cycgcGxhY2Vob2xkZXI9JzAnIC8+XG4gICAgICAgICAgICAgIDxUZXh0QXJlYSBjaGFuZ2U9eyB0aGlzLmhhbmRsZUNoYW5nZSB9IGlucHV0TmFtZT0nZGlldCcgbGFiZWxOYW1lPSdEaWV0YXJ5IFJlc3RyaWN0aW9ucycgcGxhY2Vob2xkZXI9J0VudGVyIERlc2NyaXB0aW9uJyAvPlxuICAgICAgICAgICAgICA8QnV0dG9uIGN0YT0nU3VibWl0IFJTVlAnIC8+XG4gICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgICA8UmVnaXN0cnkgLz5cbiAgICAgICAgICA8L1NlY3Rpb24+XG4gICAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUxpYnJlK0Jhc2tlcnZpbGxlJmRpc3BsYXk9c3dhcCcpO1xuICAgICAgICAgIDpyb290IHtcbiAgICAgICAgICAgIC0tY29sb3ItZ3JheS1kYXJrOiAjQkFCQUJBO1xuICAgICAgICAgICAgLS1jb2xvci1ncmF5LWxpZ2h0OiAjRjNGM0YzO1xuICAgICAgICAgICAgLS1jb2xvci1ncmVlbi1kYXJrOiAjMjkzNDFCO1xuICAgICAgICAgICAgLS1jb2xvci1ncmVlbi1saWdodDogIzlEQjU4MDtcbiAgICAgICAgICAgIC0tY29sb3ItYmxhY2s6ICMwMDAwMDA7XG4gICAgICAgICAgICAtLWNvbG9yLXdoaXRlOiAjRkZGRkZGO1xuICAgICAgICAgIH1cbiAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnVmFsdWUnLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLWdyZWVuLWRhcmspO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGgxLCBoMiwgaDMsIGg0LCBoNSB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ0xpYnJlIEJhc2tlcnZpbGxlJywgc2VyaWY7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaDEge1xuICAgICAgICAgICAgZm9udC1zaXplOiAzZW07XG4gICAgICAgICAgfVxuICAgICAgICAgIGg2IHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY29udGFpbmVyLXNlY3Rpb24ge1xuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVcbiJdfQ== */\n/*@ sourceURL=/Users/dorachan/workspace/tamsenwedding/pages/index.js */"));
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.04719177fd895f2132a9.hot-update.js.map