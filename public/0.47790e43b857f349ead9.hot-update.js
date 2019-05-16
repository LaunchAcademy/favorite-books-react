webpackHotUpdate(0,{

/***/ 249:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(227);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _BookList = __webpack_require__(595);\n\nvar _BookList2 = _interopRequireDefault(_BookList);\n\nvar _BookForm = __webpack_require__(596);\n\nvar _BookForm2 = _interopRequireDefault(_BookForm);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar App = function (_Component) {\n  _inherits(App, _Component);\n\n  function App(props) {\n    _classCallCheck(this, App);\n\n    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));\n\n    _this.state = {\n      books: []\n    };\n\n    _this.addNewBook = _this.addNewBook.bind(_this);\n    return _this;\n  }\n\n  _createClass(App, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      fetch(\"/api/v1/books.json\").then(function (resp) {\n        if (resp.ok) {\n          return resp.json();\n        } else {\n          throw new Error(resp.text());\n        }\n      }).then(function (books) {\n        _this2.setState({ books: books });\n      });\n    }\n  }, {\n    key: \"addNewBook\",\n    value: function addNewBook(book) {\n      var _this3 = this;\n\n      fetch(\"/api/v1/books.json\", {\n        method: \"POST\",\n        headers: { \"Content-Type\": \"application/json\" },\n        credentials: \"same-origin\",\n        body: JSON.stringify(book)\n      }).then(function (result) {\n        return result.json();\n      }).then(function (book) {\n        _this3.setState({\n          books: [].concat(_toConsumableArray(_this3.state.books), [book])\n          // books: this.state.books.concat(book)\n        });\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return _react2.default.createElement(\n        \"div\",\n        null,\n        _react2.default.createElement(_BookList2.default, { books: this.state.books }),\n        _react2.default.createElement(_BookForm2.default, { onAddNewBook: this.addNewBook })\n      );\n    }\n  }]);\n\n  return App;\n}(_react.Component);\n\nexports.default = App;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9BcHAuanM/NjAyNiJdLCJuYW1lcyI6WyJBcHAiLCJwcm9wcyIsInN0YXRlIiwiYm9va3MiLCJhZGROZXdCb29rIiwiYmluZCIsImZldGNoIiwidGhlbiIsInJlc3AiLCJvayIsImpzb24iLCJFcnJvciIsInRleHQiLCJzZXRTdGF0ZSIsImJvb2siLCJtZXRob2QiLCJoZWFkZXJzIiwiY3JlZGVudGlhbHMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlc3VsdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLEc7OztBQUNKLGVBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwR0FDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGFBQU87QUFESSxLQUFiOztBQUlBLFVBQUtDLFVBQUwsR0FBa0IsTUFBS0EsVUFBTCxDQUFnQkMsSUFBaEIsT0FBbEI7QUFOaUI7QUFPbEI7Ozs7d0NBRW1CO0FBQUE7O0FBQ2xCQyxZQUFNLG9CQUFOLEVBQTRCQyxJQUE1QixDQUFpQyxVQUFDQyxJQUFELEVBQVU7QUFDekMsWUFBR0EsS0FBS0MsRUFBUixFQUFZO0FBQ1YsaUJBQU9ELEtBQUtFLElBQUwsRUFBUDtBQUNELFNBRkQsTUFHSTtBQUNGLGdCQUFNLElBQUlDLEtBQUosQ0FBVUgsS0FBS0ksSUFBTCxFQUFWLENBQU47QUFDRDtBQUNGLE9BUEQsRUFRQUwsSUFSQSxDQVFLLGlCQUFTO0FBQ1osZUFBS00sUUFBTCxDQUFjLEVBQUNWLE9BQU9BLEtBQVIsRUFBZDtBQUNELE9BVkQ7QUFXRDs7OytCQUVVVyxJLEVBQU07QUFBQTs7QUFDZlIsWUFBTSxvQkFBTixFQUE0QjtBQUMxQlMsZ0JBQVEsTUFEa0I7QUFFMUJDLGlCQUFTLEVBQUMsZ0JBQWdCLGtCQUFqQixFQUZpQjtBQUcxQkMscUJBQWEsYUFIYTtBQUkxQkMsY0FBTUMsS0FBS0MsU0FBTCxDQUFlTixJQUFmO0FBSm9CLE9BQTVCLEVBS0dQLElBTEgsQ0FLUSxVQUFDYyxNQUFELEVBQVk7QUFDbEIsZUFBT0EsT0FBT1gsSUFBUCxFQUFQO0FBQ0QsT0FQRCxFQU9HSCxJQVBILENBT1EsVUFBQ08sSUFBRCxFQUFVO0FBQ2hCLGVBQUtELFFBQUwsQ0FBYztBQUNaViw4Q0FBVyxPQUFLRCxLQUFMLENBQVdDLEtBQXRCLElBQTZCVyxJQUE3QjtBQUNBO0FBRlksU0FBZDtBQUlELE9BWkQ7QUFhRDs7OzZCQUVRO0FBQ1AsYUFDRTtBQUFBO0FBQUE7QUFDRSxzQ0FBQyxrQkFBRCxJQUFVLE9BQU8sS0FBS1osS0FBTCxDQUFXQyxLQUE1QixHQURGO0FBRUUsc0NBQUMsa0JBQUQsSUFBVSxjQUFjLEtBQUtDLFVBQTdCO0FBRkYsT0FERjtBQU1EOzs7O0VBL0Nla0IsZ0I7O2tCQWtESHRCLEciLCJmaWxlIjoiMjQ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IEJvb2tMaXN0IGZyb20gXCIuL0Jvb2tMaXN0XCJcbmltcG9ydCBCb29rRm9ybSBmcm9tIFwiLi9Cb29rRm9ybVwiXG5cbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGJvb2tzOiBbXVxuICAgIH1cblxuICAgIHRoaXMuYWRkTmV3Qm9vayA9IHRoaXMuYWRkTmV3Qm9vay5iaW5kKHRoaXMpXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBmZXRjaChcIi9hcGkvdjEvYm9va3MuanNvblwiKS50aGVuKChyZXNwKSA9PiB7XG4gICAgICBpZihyZXNwLm9rKSB7XG4gICAgICAgIHJldHVybiByZXNwLmpzb24oKVxuICAgICAgfVxuICAgICAgZWxzZXtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKHJlc3AudGV4dCgpKVxuICAgICAgfVxuICAgIH0pLlxuICAgIHRoZW4oYm9va3MgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7Ym9va3M6IGJvb2tzfSlcbiAgICB9KVxuICB9XG5cbiAgYWRkTmV3Qm9vayhib29rKSB7XG4gICAgZmV0Y2goXCIvYXBpL3YxL2Jvb2tzLmpzb25cIiwge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGhlYWRlcnM6IHtcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIn0sXG4gICAgICBjcmVkZW50aWFsczogXCJzYW1lLW9yaWdpblwiLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9vaylcbiAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgIHJldHVybiByZXN1bHQuanNvbigpXG4gICAgfSkudGhlbigoYm9vaykgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGJvb2tzOiBbLi4udGhpcy5zdGF0ZS5ib29rcywgYm9va11cbiAgICAgICAgLy8gYm9va3M6IHRoaXMuc3RhdGUuYm9va3MuY29uY2F0KGJvb2spXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxCb29rTGlzdCBib29rcz17dGhpcy5zdGF0ZS5ib29rc30gLz5cbiAgICAgICAgPEJvb2tGb3JtIG9uQWRkTmV3Qm9vaz17dGhpcy5hZGROZXdCb29rfSAvPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0FwcC5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})