'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import radioButton from 'radioButton';

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(App).call(this, props));

    _this.state = {
      bookResults: { items: [] }
    };
    return _this;
  }

  _createClass(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.getBooks();
    }
  }, {
    key: 'getBooks',
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
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          { className: 'h1' },
          'Search Google Books!'
        ),
        React.createElement(SearchView, { handleSearch: this.getBooks.bind(this) }),
        React.createElement(ResultsView, { books: this.state.bookResults })
      );
    }
  }]);

  return App;
}(React.Component);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvYXBwLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O0lBRU0sRzs7O0FBQ0osZUFBYSxLQUFiLEVBQW9CO0FBQUE7O0FBQUEsdUZBQ1gsS0FEVzs7QUFHbEIsVUFBSyxLQUFMLEdBQWE7QUFDWCxtQkFBYSxFQUFDLE9BQU8sRUFBUjtBQURGLEtBQWI7QUFIa0I7QUFNbkI7Ozs7d0NBRW9CO0FBQ25CLFdBQUssUUFBTDtBQUNEOzs7NkJBRVMsSyxFQUFPO0FBQUE7O0FBQ2Y7QUFDQTtBQUNBLFdBQUssS0FBTCxDQUFXLFdBQVgsQ0FBdUIsS0FBdkIsRUFBOEIsVUFBQyxLQUFEO0FBQUEsZUFDNUIsT0FBSyxRQUFMLENBQWM7QUFDWix1QkFBYTtBQURELFNBQWQsQ0FENEI7QUFBQSxPQUE5QjtBQUtEOzs7NkJBRVM7QUFDUixhQUNFO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQSxZQUFJLFdBQVUsSUFBZDtBQUFBO0FBQUEsU0FEQTtBQUVFLDRCQUFDLFVBQUQsSUFBWSxjQUFjLEtBQUssUUFBTCxDQUFjLElBQWQsQ0FBbUIsSUFBbkIsQ0FBMUIsR0FGRjtBQUdFLDRCQUFDLFdBQUQsSUFBYSxPQUFPLEtBQUssS0FBTCxDQUFXLFdBQS9CO0FBSEYsT0FERjtBQU9EOzs7O0VBL0JlLE1BQU0sUyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgcmFkaW9CdXR0b24gZnJvbSAncmFkaW9CdXR0b24nO1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlciAocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGJvb2tSZXN1bHRzOiB7aXRlbXM6IFtdfSxcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQgKCkge1xuICAgIHRoaXMuZ2V0Qm9va3MoKTtcbiAgfVxuXG4gIGdldEJvb2tzIChxdWVyeSkge1xuICAgIC8vIGNvbnNvbGUubG9nKHF1ZXJ5KVxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMucHJvcHMuc2VhcmNoT21kYik7XG4gICAgdGhpcy5wcm9wcy5zZWFyY2hCb29rcyhxdWVyeSwgKGJvb2tzKSA9PlxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGJvb2tSZXN1bHRzOiBib29rc1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiA+XG4gICAgICA8aDEgY2xhc3NOYW1lPSdoMSc+U2VhcmNoIEdvb2dsZSBCb29rcyE8L2gxPlxuICAgICAgICA8U2VhcmNoVmlldyBoYW5kbGVTZWFyY2g9e3RoaXMuZ2V0Qm9va3MuYmluZCh0aGlzKX0vPlxuICAgICAgICA8UmVzdWx0c1ZpZXcgYm9va3M9e3RoaXMuc3RhdGUuYm9va1Jlc3VsdHN9Lz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxufSJdfQ==