"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(App).call(this, props));

    console.log(props.data);
    _this.state = {
      bookResults: { items: [] }

    };
    return _this;
  }

  _createClass(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getBooks();
    }
  }, {
    key: "getBooks",
    value: function getBooks(query) {
      var _this2 = this;

      // console.log(query)
      // console.log(this.props.searchOmdb);
      this.props.searchBooks(query, function (books) {
        return _this2.setState({
          bookResults: books
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h1",
          null,
          "Search Google Books!"
        ),
        React.createElement(SearchView, { handleSearch: this.getBooks.bind(this) }),
        React.createElement(ResultsView, { books: this.state.bookResults })
      );
    }
  }]);

  return App;
}(React.Component);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvYXBwLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU0sRzs7O0FBQ0osZUFBYSxLQUFiLEVBQW9CO0FBQUE7O0FBQUEsdUZBQ1gsS0FEVzs7QUFFbEIsWUFBUSxHQUFSLENBQVksTUFBTSxJQUFsQjtBQUNBLFVBQUssS0FBTCxHQUFhO0FBQ1gsbUJBQWEsRUFBQyxPQUFPLEVBQVI7O0FBREYsS0FBYjtBQUhrQjtBQU9uQjs7Ozt3Q0FFb0I7QUFDbkIsV0FBSyxRQUFMO0FBQ0Q7Ozs2QkFFUyxLLEVBQU87QUFBQTs7QUFDZjtBQUNBO0FBQ0EsV0FBSyxLQUFMLENBQVcsV0FBWCxDQUF1QixLQUF2QixFQUE4QixVQUFDLEtBQUQ7QUFBQSxlQUM1QixPQUFLLFFBQUwsQ0FBYztBQUNaLHVCQUFhO0FBREQsU0FBZCxDQUQ0QjtBQUFBLE9BQTlCO0FBS0Q7Ozs2QkFFUztBQUNSLGFBQ0U7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQURBO0FBRUUsNEJBQUMsVUFBRCxJQUFZLGNBQWMsS0FBSyxRQUFMLENBQWMsSUFBZCxDQUFtQixJQUFuQixDQUExQixHQUZGO0FBR0UsNEJBQUMsV0FBRCxJQUFhLE9BQU8sS0FBSyxLQUFMLENBQVcsV0FBL0I7QUFIRixPQURGO0FBT0Q7Ozs7RUFoQ2UsTUFBTSxTIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyIChwcm9wcyk7XG4gICAgY29uc29sZS5sb2cocHJvcHMuZGF0YSk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGJvb2tSZXN1bHRzOiB7aXRlbXM6IFtdfSxcblxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCAoKSB7XG4gICAgdGhpcy5nZXRCb29rcygpO1xuICB9XG5cbiAgZ2V0Qm9va3MgKHF1ZXJ5KSB7XG4gICAgLy8gY29uc29sZS5sb2cocXVlcnkpXG4gICAgLy8gY29uc29sZS5sb2codGhpcy5wcm9wcy5zZWFyY2hPbWRiKTtcbiAgICB0aGlzLnByb3BzLnNlYXJjaEJvb2tzKHF1ZXJ5LCAoYm9va3MpID0+XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgYm9va1Jlc3VsdHM6IGJvb2tzXG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgPGgxPlNlYXJjaCBHb29nbGUgQm9va3MhPC9oMT5cbiAgICAgICAgPFNlYXJjaFZpZXcgaGFuZGxlU2VhcmNoPXt0aGlzLmdldEJvb2tzLmJpbmQodGhpcyl9Lz5cbiAgICAgICAgPFJlc3VsdHNWaWV3IGJvb2tzPXt0aGlzLnN0YXRlLmJvb2tSZXN1bHRzfS8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbn0iXX0=