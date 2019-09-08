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
/* harmony import */ var _intro__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./_intro */ "./pages/_intro.js");
/* harmony import */ var _gallery__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./_gallery */ "./pages/_gallery.js");
/* harmony import */ var _registry__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./_registry */ "./pages/_registry.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./_footer */ "./pages/_footer.js");









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
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("input", {
        type: "text",
        name: "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("input", {
        type: "text",
        name: "guests",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
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
        className: "jsx-4013783811" + " " + 'container',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, this.renderHoneypot(), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-4013783811" + " " + 'container-sections',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_intro__WEBPACK_IMPORTED_MODULE_16__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_gallery__WEBPACK_IMPORTED_MODULE_17__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_form__WEBPACK_IMPORTED_MODULE_11__["default"], {
        submit: this.handleSubmit,
        formTitle: "RSVP",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_input__WEBPACK_IMPORTED_MODULE_12__["default"], {
        change: this.handleChange,
        inputName: "name",
        labelName: "Full Name",
        placeholder: "Full Name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_radio__WEBPACK_IMPORTED_MODULE_13__["default"], {
        inputName: "attendance",
        labelName: "Attendance",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_radio__WEBPACK_IMPORTED_MODULE_13__["default"].Option, {
        change: this.handleChange,
        value: "Joyfully Attending",
        inputName: "attendance",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_radio__WEBPACK_IMPORTED_MODULE_13__["default"].Option, {
        change: this.handleChange,
        value: "Regretfully Declining",
        inputName: "attendance",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_input__WEBPACK_IMPORTED_MODULE_12__["default"], {
        change: this.handleChange,
        inputName: "guests",
        labelName: "# of Guests",
        placeholder: "0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_textarea__WEBPACK_IMPORTED_MODULE_14__["default"], {
        change: this.handleChange,
        inputName: "diet",
        labelName: "Dietary Restrictions",
        placeholder: "Description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_button__WEBPACK_IMPORTED_MODULE_15__["default"], {
        cta: "Submit RSVP",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_registry__WEBPACK_IMPORTED_MODULE_18__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_footer__WEBPACK_IMPORTED_MODULE_19__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
        id: "4013783811",
        __self: this
      }, "@import url('https://fonts.googleapis.com/css?family=Libre+Baskerville:400,700|Poppins:200,300,600&display=swap');:root{--color-gray-dark:#BABABA;--color-gray-light:#F3F3F3;--color-green-dark:#29341B;--color-green-light:#9DB580;--color-black:#000000;--color-white:#FFFFFF;}body{font-family:'Poppins',sans-serif;font-weight:300;font-size:16px;color:var(--color-green-dark);margin:0;padding:0;height:100vh;}h1,h2,h3,h4,h5,h6{text-transform:uppercase;-webkit-letter-spacing:0.1em;-moz-letter-spacing:0.1em;-ms-letter-spacing:0.1em;letter-spacing:0.1em;}h1,h2,h3,h4,h5{font-family:'Libre Baskerville',serif;font-weight:300;margin:16px 0;}h1{font-size:5.052em;}h2{font-size:2.441em;}h3{font-size:1.953em;}h4{font-size:1.563em;}h5{font-size:1.25em;}h6{font-size:0.9em;font-weight:600;margin:0;}.container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.container-sections{display:grid;grid-template-columns:1fr 4fr 2fr 2fr 1fr;grid-row-gap:80px;grid-column-gap:10px;grid-template-areas: \". intro intro intro .\" \". gallery gallery gallery .\" \". form . registry .\" \"footer footer footer footer footer\";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kb3JhY2hhbi93b3Jrc3BhY2UvdGFtc2Vud2VkZGluZy9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvRTJCLEFBRTRILEFBRXJGLEFBUVEsQUFTVCxBQUljLEFBS3JCLEFBR0EsQUFHQSxBQUdBLEFBR0QsQUFHRCxBQUtILEFBS0EsYUFDNkIsR0FWMUIsQ0FIbEIsQ0FaQSxBQUdBLEFBR0EsQUFHQSxPQWxCdUIsQ0FqQk0sTUEwQ2xCLENBbENPLEtBYUEsR0FzQmxCLFFBbENpQixJQVJZLENBcUJiLENBOEJJLFNBMUNZLElBYWhDLEtBOEJ1QixDQVBFLE1BNUNLLGNBU25CLEFBZ0RULFNBL0NVLEtBVFksS0FVVCxhQUNmLEFBSUEsSUFkd0Isc0JBQ3hCLHFCQTBDcUIsdURBYXJCLHNDQVpBIiwiZmlsZSI6Ii9Vc2Vycy9kb3JhY2hhbi93b3Jrc3BhY2UvdGFtc2Vud2VkZGluZy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvZm9ybSc7XG5pbXBvcnQgSW5wdXQgZnJvbSAnLi4vY29tcG9uZW50cy9pbnB1dCc7XG5pbXBvcnQgUmFkaW8gZnJvbSAnLi4vY29tcG9uZW50cy9yYWRpbyc7XG5pbXBvcnQgVGV4dEFyZWEgZnJvbSAnLi4vY29tcG9uZW50cy90ZXh0YXJlYSc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL2NvbXBvbmVudHMvYnV0dG9uJztcblxuaW1wb3J0IEludHJvIGZyb20gJy4vX2ludHJvJztcbmltcG9ydCBHYWxsZXJ5IGZyb20gJy4vX2dhbGxlcnknO1xuaW1wb3J0IFJlZ2lzdHJ5IGZyb20gJy4vX3JlZ2lzdHJ5JztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9fZm9vdGVyJztcblxuY29uc3QgZW5jb2RlID0gKGRhdGEpID0+IHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKGRhdGEpXG4gICAgLm1hcChrZXkgPT4gZW5jb2RlVVJJQ29tcG9uZW50KGtleSkgKyBcIj1cIiArIGVuY29kZVVSSUNvbXBvbmVudChkYXRhW2tleV0pKVxuICAgIC5qb2luKFwiJlwiKTtcbn1cblxuY2xhc3MgSG9tZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7IG5hbWU6IFwiXCIsIGF0dGVuZGFuY2U6IFwiXCIsIGd1ZXN0czogXCJcIiwgcHJlZmVyZW5jZXM6IFwiXCIgfTtcbiAgfVxuXG4gIGhhbmRsZVN1Ym1pdCA9IGUgPT4ge1xuICAgIGZldGNoKFwiL1wiLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiIH0sXG4gICAgICBib2R5OiBlbmNvZGUoeyBcImZvcm0tbmFtZVwiOiBcInJzdnBcIiwgLi4udGhpcy5zdGF0ZSB9KVxuICAgIH0pXG4gICAgICAudGhlbigoKSA9PiBhbGVydChcIlN1Y2Nlc3MhXCIpKVxuICAgICAgLmNhdGNoKGVycm9yID0+IGFsZXJ0KGVycm9yKSk7XG5cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH07XG5cbiAgaGFuZGxlQ2hhbmdlID0gZSA9PiB0aGlzLnNldFN0YXRlKHsgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZSB9KTtcblxuICByZW5kZXJIb25leXBvdCgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGZvcm0gbmFtZT0ncnN2cCcgbmV0bGlmeT0ndHJ1ZScgbmV0bGlmeS1ob25leXBvdD0nYm90LWZpZWxkJyBoaWRkZW4+XG4gICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBuYW1lPSduYW1lJyAvPlxuICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgbmFtZT0nZ3Vlc3RzJyAvPlxuICAgICAgPC9mb3JtPlxuICAgIClcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IG5hbWUsIGF0dGVuZGFuY2UsIGd1ZXN0cywgcHJlZmVyZW5jZXMgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XG4gICAgICAgIHsgdGhpcy5yZW5kZXJIb25leXBvdCgpIH1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lci1zZWN0aW9ucyc+XG4gICAgICAgICAgPEludHJvIC8+XG4gICAgICAgICAgPEdhbGxlcnkgLz5cbiAgICAgICAgICA8Rm9ybSBzdWJtaXQ9eyB0aGlzLmhhbmRsZVN1Ym1pdCB9IGZvcm1UaXRsZT0nUlNWUCc+XG4gICAgICAgICAgICA8SW5wdXQgY2hhbmdlPXsgdGhpcy5oYW5kbGVDaGFuZ2UgfSBpbnB1dE5hbWU9J25hbWUnIGxhYmVsTmFtZT0nRnVsbCBOYW1lJyBwbGFjZWhvbGRlcj0nRnVsbCBOYW1lJyAvPlxuICAgICAgICAgICAgPFJhZGlvIGlucHV0TmFtZT0nYXR0ZW5kYW5jZScgbGFiZWxOYW1lPSdBdHRlbmRhbmNlJz5cbiAgICAgICAgICAgICAgPFJhZGlvLk9wdGlvbiBjaGFuZ2U9eyB0aGlzLmhhbmRsZUNoYW5nZSB9IHZhbHVlPSdKb3lmdWxseSBBdHRlbmRpbmcnIGlucHV0TmFtZT0nYXR0ZW5kYW5jZScgLz5cbiAgICAgICAgICAgICAgPFJhZGlvLk9wdGlvbiBjaGFuZ2U9eyB0aGlzLmhhbmRsZUNoYW5nZSB9IHZhbHVlPSdSZWdyZXRmdWxseSBEZWNsaW5pbmcnIGlucHV0TmFtZT0nYXR0ZW5kYW5jZScvPlxuICAgICAgICAgICAgPC9SYWRpbz5cbiAgICAgICAgICAgIDxJbnB1dCBjaGFuZ2U9eyB0aGlzLmhhbmRsZUNoYW5nZSB9IGlucHV0TmFtZT0nZ3Vlc3RzJyBsYWJlbE5hbWU9JyMgb2YgR3Vlc3RzJyBwbGFjZWhvbGRlcj0nMCcgLz5cbiAgICAgICAgICAgIDxUZXh0QXJlYSBjaGFuZ2U9eyB0aGlzLmhhbmRsZUNoYW5nZSB9IGlucHV0TmFtZT0nZGlldCcgbGFiZWxOYW1lPSdEaWV0YXJ5IFJlc3RyaWN0aW9ucycgcGxhY2Vob2xkZXI9J0Rlc2NyaXB0aW9uJyAvPlxuICAgICAgICAgICAgPEJ1dHRvbiBjdGE9J1N1Ym1pdCBSU1ZQJyAvPlxuICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICA8UmVnaXN0cnkgLz5cbiAgICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TGlicmUrQmFza2VydmlsbGU6NDAwLDcwMHxQb3BwaW5zOjIwMCwzMDAsNjAwJmRpc3BsYXk9c3dhcCcpO1xuICAgICAgICAgIDpyb290IHtcbiAgICAgICAgICAgIC0tY29sb3ItZ3JheS1kYXJrOiAjQkFCQUJBO1xuICAgICAgICAgICAgLS1jb2xvci1ncmF5LWxpZ2h0OiAjRjNGM0YzO1xuICAgICAgICAgICAgLS1jb2xvci1ncmVlbi1kYXJrOiAjMjkzNDFCO1xuICAgICAgICAgICAgLS1jb2xvci1ncmVlbi1saWdodDogIzlEQjU4MDtcbiAgICAgICAgICAgIC0tY29sb3ItYmxhY2s6ICMwMDAwMDA7XG4gICAgICAgICAgICAtLWNvbG9yLXdoaXRlOiAjRkZGRkZGO1xuICAgICAgICAgIH1cbiAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLWdyZWVuLWRhcmspO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaDEsIGgyLCBoMywgaDQsIGg1IHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTGlicmUgQmFza2VydmlsbGUnLCBzZXJpZjtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgICBtYXJnaW46IDE2cHggMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaDEge1xuICAgICAgICAgICAgZm9udC1zaXplOiA1LjA1MmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICBoMiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDIuNDQxZW07XG4gICAgICAgICAgfVxuICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS45NTNlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaDQge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjU2M2VtO1xuICAgICAgICAgIH1cbiAgICAgICAgICBoNSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuMjVlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaDYge1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjllbTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNvbnRhaW5lci1zZWN0aW9ucyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyIDJmciAyZnIgMWZyO1xuICAgICAgICAgICAgZ3JpZC1yb3ctZ2FwOiA4MHB4O1xuICAgICAgICAgICAgZ3JpZC1jb2x1bW4tZ2FwOiAxMHB4O1xuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICAgICAgICAgICAgXCIuIGludHJvIGludHJvIGludHJvIC5cIlxuICAgICAgICAgICAgICBcIi4gZ2FsbGVyeSBnYWxsZXJ5IGdhbGxlcnkgLlwiXG4gICAgICAgICAgICAgIFwiLiBmb3JtIC4gcmVnaXN0cnkgLlwiXG4gICAgICAgICAgICAgIFwiZm9vdGVyIGZvb3RlciBmb290ZXIgZm9vdGVyIGZvb3RlclwiXG4gICAgICAgICAgICA7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lXG4iXX0= */\n/*@ sourceURL=/Users/dorachan/workspace/tamsenwedding/pages/index.js */"));
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.83e88429105c6d55427e.hot-update.js.map