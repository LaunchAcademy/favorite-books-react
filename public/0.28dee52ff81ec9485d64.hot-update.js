webpackHotUpdate(0,{

/***/ 596:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(227);\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar BookForm = function (_Component) {\n  _inherits(BookForm, _Component);\n\n  function BookForm(props) {\n    _classCallCheck(this, BookForm);\n\n    var _this = _possibleConstructorReturn(this, (BookForm.__proto__ || Object.getPrototypeOf(BookForm)).call(this, props));\n\n    _this.state = {\n      title: \"\"\n    };\n    _this.handleTitleChange = _this.handleTitleChange.bind(_this);\n    return _this;\n  }\n\n  _createClass(BookForm, [{\n    key: \"handleSubmit\",\n    value: function handleSubmit(event) {\n      event.preventDefault();\n      this.props.onAddNewBook(this.state);\n    }\n  }, {\n    key: \"handleTitleChange\",\n    value: function handleTitleChange(event) {\n      this.setState({ title: event.target.value });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return _react2.default.createElement(\n        \"form\",\n        { onSubmit: this.handleSubmit },\n        _react2.default.createElement(\n          \"h3\",\n          null,\n          \"Add a new Book\"\n        ),\n        _react2.default.createElement(\n          \"div\",\n          null,\n          _react2.default.createElement(\n            \"label\",\n            null,\n            \"Title\"\n          ),\n          _react2.default.createElement(\"input\", {\n            type: \"text\",\n            name: \"title\",\n            onChange: this.handleTitleChange,\n            value: this.state.title })\n        ),\n        _react2.default.createElement(\n          \"div\",\n          null,\n          _react2.default.createElement(\"input\", { type: \"submit\", value: \"Add Book\" })\n        )\n      );\n    }\n  }]);\n\n  return BookForm;\n}(_react.Component);\n\nexports.default = BookForm;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Cb29rRm9ybS5qcz81NzAxIl0sIm5hbWVzIjpbIkJvb2tGb3JtIiwicHJvcHMiLCJzdGF0ZSIsInRpdGxlIiwiaGFuZGxlVGl0bGVDaGFuZ2UiLCJiaW5kIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIm9uQWRkTmV3Qm9vayIsInNldFN0YXRlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVTdWJtaXQiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztJQUVNQSxROzs7QUFDSixvQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLG9IQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsYUFBTztBQURJLEtBQWI7QUFHQSxVQUFLQyxpQkFBTCxHQUF5QixNQUFLQSxpQkFBTCxDQUF1QkMsSUFBdkIsT0FBekI7QUFMaUI7QUFNbEI7Ozs7aUNBRVlDLEssRUFBTztBQUNsQkEsWUFBTUMsY0FBTjtBQUNBLFdBQUtOLEtBQUwsQ0FBV08sWUFBWCxDQUF3QixLQUFLTixLQUE3QjtBQUNEOzs7c0NBRWlCSSxLLEVBQU87QUFDdkIsV0FBS0csUUFBTCxDQUFjLEVBQUNOLE9BQU9HLE1BQU1JLE1BQU4sQ0FBYUMsS0FBckIsRUFBZDtBQUNEOzs7NkJBRVE7QUFDUCxhQUFPO0FBQUE7QUFBQSxVQUFNLFVBQVUsS0FBS0MsWUFBckI7QUFDTDtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREs7QUFFTDtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFFRTtBQUNFLGtCQUFLLE1BRFA7QUFFRSxrQkFBSyxPQUZQO0FBR0Usc0JBQVUsS0FBS1IsaUJBSGpCO0FBSUUsbUJBQU8sS0FBS0YsS0FBTCxDQUFXQyxLQUpwQjtBQUZGLFNBRks7QUFVTDtBQUFBO0FBQUE7QUFDRSxtREFBTyxNQUFLLFFBQVosRUFBcUIsT0FBTSxVQUEzQjtBQURGO0FBVkssT0FBUDtBQWNEOzs7O0VBakNvQlUsZ0I7O2tCQW9DUmIsUSIsImZpbGUiOiI1OTYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiXG5cbmNsYXNzIEJvb2tGb3JtIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdGl0bGU6IFwiXCJcbiAgICB9XG4gICAgdGhpcy5oYW5kbGVUaXRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlVGl0bGVDaGFuZ2UuYmluZCh0aGlzKVxuICB9XG5cbiAgaGFuZGxlU3VibWl0KGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIHRoaXMucHJvcHMub25BZGROZXdCb29rKHRoaXMuc3RhdGUpXG4gIH1cblxuICBoYW5kbGVUaXRsZUNoYW5nZShldmVudCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe3RpdGxlOiBldmVudC50YXJnZXQudmFsdWV9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxuICAgICAgPGgzPkFkZCBhIG5ldyBCb29rPC9oMz5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxsYWJlbD5UaXRsZTwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCBcbiAgICAgICAgICB0eXBlPVwidGV4dFwiIFxuICAgICAgICAgIG5hbWU9XCJ0aXRsZVwiIFxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVRpdGxlQ2hhbmdlfSBcbiAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS50aXRsZX0gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIkFkZCBCb29rXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZm9ybT5cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb29rRm9ybVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0Jvb2tGb3JtLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})