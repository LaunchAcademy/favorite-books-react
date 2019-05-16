webpackHotUpdate(0,{

/***/ 249:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(227);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _BookList = __webpack_require__(595);\n\nvar _BookList2 = _interopRequireDefault(_BookList);\n\nvar _BookForm = __webpack_require__(596);\n\nvar _BookForm2 = _interopRequireDefault(_BookForm);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar App = function (_Component) {\n  _inherits(App, _Component);\n\n  function App(props) {\n    _classCallCheck(this, App);\n\n    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));\n\n    _this.state = {\n      books: []\n    };\n\n    _this.addNewBook = _this.addNewBook.bind(_this);\n    return _this;\n  }\n\n  _createClass(App, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      fetch(\"/api/v1/books.json\").then(function (resp) {\n        if (resp.ok) {\n          return resp.json();\n        } else {\n          throw new Error(resp.text());\n        }\n      }).then(function (books) {\n        _this2.setState({ books: books });\n      });\n    }\n  }, {\n    key: \"addNewBook\",\n    value: function addNewBook(book) {\n      fetch(\"/api/v1/books.json\", {\n        method: \"POST\",\n        headers: { \"Content-Type\": \"application/json\" },\n        credentials: \"same-orgin\"\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return _react2.default.createElement(\n        \"div\",\n        null,\n        _react2.default.createElement(_BookList2.default, { books: this.state.books }),\n        _react2.default.createElement(_BookForm2.default, { onAddNewBook: this.addNewBook })\n      );\n    }\n  }]);\n\n  return App;\n}(_react.Component);\n\nexports.default = App;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9BcHAuanM/NjAyNiJdLCJuYW1lcyI6WyJBcHAiLCJwcm9wcyIsInN0YXRlIiwiYm9va3MiLCJhZGROZXdCb29rIiwiYmluZCIsImZldGNoIiwidGhlbiIsInJlc3AiLCJvayIsImpzb24iLCJFcnJvciIsInRleHQiLCJzZXRTdGF0ZSIsImJvb2siLCJtZXRob2QiLCJoZWFkZXJzIiwiY3JlZGVudGlhbHMiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTUEsRzs7O0FBQ0osZUFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDBHQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsYUFBTztBQURJLEtBQWI7O0FBSUEsVUFBS0MsVUFBTCxHQUFrQixNQUFLQSxVQUFMLENBQWdCQyxJQUFoQixPQUFsQjtBQU5pQjtBQU9sQjs7Ozt3Q0FFbUI7QUFBQTs7QUFDbEJDLFlBQU0sb0JBQU4sRUFBNEJDLElBQTVCLENBQWlDLFVBQUNDLElBQUQsRUFBVTtBQUN6QyxZQUFHQSxLQUFLQyxFQUFSLEVBQVk7QUFDVixpQkFBT0QsS0FBS0UsSUFBTCxFQUFQO0FBQ0QsU0FGRCxNQUdJO0FBQ0YsZ0JBQU0sSUFBSUMsS0FBSixDQUFVSCxLQUFLSSxJQUFMLEVBQVYsQ0FBTjtBQUNEO0FBQ0YsT0FQRCxFQVFBTCxJQVJBLENBUUssaUJBQVM7QUFDWixlQUFLTSxRQUFMLENBQWMsRUFBQ1YsT0FBT0EsS0FBUixFQUFkO0FBQ0QsT0FWRDtBQVdEOzs7K0JBRVVXLEksRUFBTTtBQUNmUixZQUFNLG9CQUFOLEVBQTRCO0FBQzFCUyxnQkFBUSxNQURrQjtBQUUxQkMsaUJBQVMsRUFBQyxnQkFBZ0Isa0JBQWpCLEVBRmlCO0FBRzFCQyxxQkFBYTtBQUhhLE9BQTVCO0FBS0Q7Ozs2QkFFUTtBQUNQLGFBQ0U7QUFBQTtBQUFBO0FBQ0Usc0NBQUMsa0JBQUQsSUFBVSxPQUFPLEtBQUtmLEtBQUwsQ0FBV0MsS0FBNUIsR0FERjtBQUVFLHNDQUFDLGtCQUFELElBQVUsY0FBYyxLQUFLQyxVQUE3QjtBQUZGLE9BREY7QUFNRDs7OztFQXZDZWMsZ0I7O2tCQTBDSGxCLEciLCJmaWxlIjoiMjQ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IEJvb2tMaXN0IGZyb20gXCIuL0Jvb2tMaXN0XCJcbmltcG9ydCBCb29rRm9ybSBmcm9tIFwiLi9Cb29rRm9ybVwiXG5cbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGJvb2tzOiBbXVxuICAgIH1cblxuICAgIHRoaXMuYWRkTmV3Qm9vayA9IHRoaXMuYWRkTmV3Qm9vay5iaW5kKHRoaXMpXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBmZXRjaChcIi9hcGkvdjEvYm9va3MuanNvblwiKS50aGVuKChyZXNwKSA9PiB7XG4gICAgICBpZihyZXNwLm9rKSB7XG4gICAgICAgIHJldHVybiByZXNwLmpzb24oKVxuICAgICAgfVxuICAgICAgZWxzZXtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKHJlc3AudGV4dCgpKVxuICAgICAgfVxuICAgIH0pLlxuICAgIHRoZW4oYm9va3MgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7Ym9va3M6IGJvb2tzfSlcbiAgICB9KVxuICB9XG5cbiAgYWRkTmV3Qm9vayhib29rKSB7XG4gICAgZmV0Y2goXCIvYXBpL3YxL2Jvb2tzLmpzb25cIiwge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGhlYWRlcnM6IHtcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIn0sXG4gICAgICBjcmVkZW50aWFsczogXCJzYW1lLW9yZ2luXCJcbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8Qm9va0xpc3QgYm9va3M9e3RoaXMuc3RhdGUuYm9va3N9IC8+XG4gICAgICAgIDxCb29rRm9ybSBvbkFkZE5ld0Jvb2s9e3RoaXMuYWRkTmV3Qm9va30gLz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9BcHAuanMiXSwic291cmNlUm9vdCI6IiJ9");

/***/ })

})