webpackHotUpdate(0,{

/***/ 596:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(227);\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar BookForm = function (_Component) {\n  _inherits(BookForm, _Component);\n\n  function BookForm(props) {\n    _classCallCheck(this, BookForm);\n\n    var _this = _possibleConstructorReturn(this, (BookForm.__proto__ || Object.getPrototypeOf(BookForm)).call(this, props));\n\n    _this.state = {\n      title: \"\"\n    };\n    _this.handleTitleChange = _this.handleTitleChange.bind(_this);\n    return _this;\n  }\n\n  _createClass(BookForm, [{\n    key: \"handleSubmit\",\n    value: function handleSubmit(event) {\n      event.preventDefault();\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return _react2.default.createElement(\n        \"form\",\n        { onSubmit: this.handleSubmit },\n        _react2.default.createElement(\n          \"h3\",\n          null,\n          \"Add a new Book\"\n        ),\n        _react2.default.createElement(\n          \"div\",\n          null,\n          _react2.default.createElement(\n            \"label\",\n            null,\n            \"Title\"\n          ),\n          _react2.default.createElement(\"input\", {\n            type: \"text\",\n            name: \"title\",\n            onChange: this.handleTitleChange,\n            value: this.state.title })\n        ),\n        _react2.default.createElement(\n          \"div\",\n          null,\n          _react2.default.createElement(\"input\", { type: \"submit\", value: \"Add Book\" })\n        )\n      );\n    }\n  }]);\n\n  return BookForm;\n}(_react.Component);\n\nexports.default = BookForm;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Cb29rRm9ybS5qcz81NzAxIl0sIm5hbWVzIjpbIkJvb2tGb3JtIiwicHJvcHMiLCJzdGF0ZSIsInRpdGxlIiwiaGFuZGxlVGl0bGVDaGFuZ2UiLCJiaW5kIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImhhbmRsZVN1Ym1pdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0lBRU1BLFE7OztBQUNKLG9CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsb0hBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxhQUFPO0FBREksS0FBYjtBQUdBLFVBQUtDLGlCQUFMLEdBQXlCLE1BQUtBLGlCQUFMLENBQXVCQyxJQUF2QixPQUF6QjtBQUxpQjtBQU1sQjs7OztpQ0FFWUMsSyxFQUFPO0FBQ2xCQSxZQUFNQyxjQUFOO0FBQ0Q7Ozs2QkFFUTtBQUNQLGFBQU87QUFBQTtBQUFBLFVBQU0sVUFBVSxLQUFLQyxZQUFyQjtBQUNMO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FESztBQUVMO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQUVFO0FBQ0Usa0JBQUssTUFEUDtBQUVFLGtCQUFLLE9BRlA7QUFHRSxzQkFBVSxLQUFLSixpQkFIakI7QUFJRSxtQkFBTyxLQUFLRixLQUFMLENBQVdDLEtBSnBCO0FBRkYsU0FGSztBQVVMO0FBQUE7QUFBQTtBQUNFLG1EQUFPLE1BQUssUUFBWixFQUFxQixPQUFNLFVBQTNCO0FBREY7QUFWSyxPQUFQO0FBY0Q7Ozs7RUE1Qm9CTSxnQjs7a0JBK0JSVCxRIiwiZmlsZSI6IjU5Ni5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCJcblxuY2xhc3MgQm9va0Zvcm0gZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB0aXRsZTogXCJcIlxuICAgIH1cbiAgICB0aGlzLmhhbmRsZVRpdGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVUaXRsZUNoYW5nZS5iaW5kKHRoaXMpXG4gIH1cblxuICBoYW5kbGVTdWJtaXQoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XG4gICAgICA8aDM+QWRkIGEgbmV3IEJvb2s8L2gzPlxuICAgICAgPGRpdj5cbiAgICAgICAgPGxhYmVsPlRpdGxlPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXG4gICAgICAgICAgbmFtZT1cInRpdGxlXCIgXG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlVGl0bGVDaGFuZ2V9IFxuICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnRpdGxlfSAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiQWRkIEJvb2tcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9mb3JtPlxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvb2tGb3JtXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvQm9va0Zvcm0uanMiXSwic291cmNlUm9vdCI6IiJ9");

/***/ })

})