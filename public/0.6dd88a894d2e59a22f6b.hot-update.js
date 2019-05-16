webpackHotUpdate(0,{

/***/ 249:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(227);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _BookList = __webpack_require__(595);\n\nvar _BookList2 = _interopRequireDefault(_BookList);\n\nvar _BookForm = __webpack_require__(596);\n\nvar _BookForm2 = _interopRequireDefault(_BookForm);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar App = function (_Component) {\n  _inherits(App, _Component);\n\n  function App(props) {\n    _classCallCheck(this, App);\n\n    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));\n\n    _this.state = {\n      books: []\n    };\n\n    _this.addNewBook = _this.addNewBook.bind(_this);\n    return _this;\n  }\n\n  _createClass(App, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      fetch(\"/api/v1/books.json\").then(function (resp) {\n        if (resp.ok) {\n          return resp.json();\n        } else {\n          throw new Error(resp.text());\n        }\n      }).then(function (books) {\n        _this2.setState({ books: books });\n      });\n    }\n  }, {\n    key: \"addNewBook\",\n    value: function addNewBook(book) {\n      var _this3 = this;\n\n      fetch(\"/api/v1/books.json\", {\n        method: \"POST\",\n        headers: { \"Content-Type\": \"application/json\" },\n        credentials: \"same-origin\",\n        body: JSON.stringify(book)\n      }).then(function (result) {\n        //result is what comes back from the server.js {title: 'name'}\n        return result.json();\n      }).then(function (book) {\n        _this3.setState({\n          books: [].concat(_toConsumableArray(_this3.state.books), [book])\n          // books: this.state.books.concat(book)\n        });\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return _react2.default.createElement(\n        \"div\",\n        null,\n        _react2.default.createElement(_BookList2.default, { books: this.state.books }),\n        _react2.default.createElement(_BookForm2.default, { onAddNewBook: this.addNewBook })\n      );\n    }\n  }]);\n\n  return App;\n}(_react.Component);\n\nexports.default = App;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9BcHAuanM/NjAyNiJdLCJuYW1lcyI6WyJBcHAiLCJwcm9wcyIsInN0YXRlIiwiYm9va3MiLCJhZGROZXdCb29rIiwiYmluZCIsImZldGNoIiwidGhlbiIsInJlc3AiLCJvayIsImpzb24iLCJFcnJvciIsInRleHQiLCJzZXRTdGF0ZSIsImJvb2siLCJtZXRob2QiLCJoZWFkZXJzIiwiY3JlZGVudGlhbHMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlc3VsdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLEc7OztBQUNKLGVBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwR0FDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGFBQU87QUFESSxLQUFiOztBQUlBLFVBQUtDLFVBQUwsR0FBa0IsTUFBS0EsVUFBTCxDQUFnQkMsSUFBaEIsT0FBbEI7QUFOaUI7QUFPbEI7Ozs7d0NBRW1CO0FBQUE7O0FBQ2xCQyxZQUFNLG9CQUFOLEVBQTRCQyxJQUE1QixDQUFpQyxVQUFDQyxJQUFELEVBQVU7QUFDekMsWUFBR0EsS0FBS0MsRUFBUixFQUFZO0FBQ1YsaUJBQU9ELEtBQUtFLElBQUwsRUFBUDtBQUNELFNBRkQsTUFHSTtBQUNGLGdCQUFNLElBQUlDLEtBQUosQ0FBVUgsS0FBS0ksSUFBTCxFQUFWLENBQU47QUFDRDtBQUNGLE9BUEQsRUFRQUwsSUFSQSxDQVFLLGlCQUFTO0FBQ1osZUFBS00sUUFBTCxDQUFjLEVBQUNWLE9BQU9BLEtBQVIsRUFBZDtBQUNELE9BVkQ7QUFXRDs7OytCQUVVVyxJLEVBQU07QUFBQTs7QUFDZlIsWUFBTSxvQkFBTixFQUE0QjtBQUMxQlMsZ0JBQVEsTUFEa0I7QUFFMUJDLGlCQUFTLEVBQUMsZ0JBQWdCLGtCQUFqQixFQUZpQjtBQUcxQkMscUJBQWEsYUFIYTtBQUkxQkMsY0FBTUMsS0FBS0MsU0FBTCxDQUFlTixJQUFmO0FBSm9CLE9BQTVCLEVBS0dQLElBTEgsQ0FLUSxVQUFDYyxNQUFELEVBQVk7QUFDbEI7QUFDQSxlQUFPQSxPQUFPWCxJQUFQLEVBQVA7QUFDRCxPQVJELEVBUUdILElBUkgsQ0FRUSxVQUFDTyxJQUFELEVBQVU7QUFDaEIsZUFBS0QsUUFBTCxDQUFjO0FBQ1pWLDhDQUFXLE9BQUtELEtBQUwsQ0FBV0MsS0FBdEIsSUFBNkJXLElBQTdCO0FBQ0E7QUFGWSxTQUFkO0FBSUQsT0FiRDtBQWNEOzs7NkJBRVE7QUFDUCxhQUNFO0FBQUE7QUFBQTtBQUNFLHNDQUFDLGtCQUFELElBQVUsT0FBTyxLQUFLWixLQUFMLENBQVdDLEtBQTVCLEdBREY7QUFFRSxzQ0FBQyxrQkFBRCxJQUFVLGNBQWMsS0FBS0MsVUFBN0I7QUFGRixPQURGO0FBTUQ7Ozs7RUFoRGVrQixnQjs7a0JBbURIdEIsRyIsImZpbGUiOiIyNDkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgQm9va0xpc3QgZnJvbSBcIi4vQm9va0xpc3RcIlxuaW1wb3J0IEJvb2tGb3JtIGZyb20gXCIuL0Jvb2tGb3JtXCJcblxuY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgYm9va3M6IFtdXG4gICAgfVxuXG4gICAgdGhpcy5hZGROZXdCb29rID0gdGhpcy5hZGROZXdCb29rLmJpbmQodGhpcylcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGZldGNoKFwiL2FwaS92MS9ib29rcy5qc29uXCIpLnRoZW4oKHJlc3ApID0+IHtcbiAgICAgIGlmKHJlc3Aub2spIHtcbiAgICAgICAgcmV0dXJuIHJlc3AuanNvbigpXG4gICAgICB9XG4gICAgICBlbHNle1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IocmVzcC50ZXh0KCkpXG4gICAgICB9XG4gICAgfSkuXG4gICAgdGhlbihib29rcyA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtib29rczogYm9va3N9KVxuICAgIH0pXG4gIH1cblxuICBhZGROZXdCb29rKGJvb2spIHtcbiAgICBmZXRjaChcIi9hcGkvdjEvYm9va3MuanNvblwiLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgaGVhZGVyczoge1wiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwifSxcbiAgICAgIGNyZWRlbnRpYWxzOiBcInNhbWUtb3JpZ2luXCIsXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib29rKVxuICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgLy9yZXN1bHQgaXMgd2hhdCBjb21lcyBiYWNrIGZyb20gdGhlIHNlcnZlci5qcyB7dGl0bGU6ICduYW1lJ31cbiAgICAgIHJldHVybiByZXN1bHQuanNvbigpXG4gICAgfSkudGhlbigoYm9vaykgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGJvb2tzOiBbLi4udGhpcy5zdGF0ZS5ib29rcywgYm9va11cbiAgICAgICAgLy8gYm9va3M6IHRoaXMuc3RhdGUuYm9va3MuY29uY2F0KGJvb2spXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxCb29rTGlzdCBib29rcz17dGhpcy5zdGF0ZS5ib29rc30gLz5cbiAgICAgICAgPEJvb2tGb3JtIG9uQWRkTmV3Qm9vaz17dGhpcy5hZGROZXdCb29rfSAvPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0FwcC5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})