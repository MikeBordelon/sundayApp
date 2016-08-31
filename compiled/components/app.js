'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(App).call(this, props));

    _this.state = {
      bookResults: { items: [] },
      savedBooks: []
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

      this.searchBooks(query, function (books) {
        return _this2.setState({
          bookResults: books
        });
      });
    }
  }, {
    key: 'searchBooks',
    value: function searchBooks(query, callback) {
      $.ajax({
        url: 'https://www.googleapis.com/books/v1/volumes?',
        type: 'GET',
        key: 'AIzaSyBJ2hhIKxZDBPB-Rp2gVoJledImHlfKojE',
        data: { q: query },
        success: function success(data) {
          // console.log(data)
          callback(data);
        },
        error: function error(err) {
          console.log(err);
        }
      });
    }
  }, {
    key: 'getSavedBooks',
    value: function getSavedBooks() {
      $.ajax({
        url: '/books',
        type: 'GET',
        success: function (data) {
          console.log('got books');
          this.setState({
            savedBooks: data
          });
        }.bind(this),
        error: function error() {
          console.log('error in get');
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      console.log(this.state.savedBooks);
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          { className: 'h1' },
          'Search Google Books!'
        ),
        React.createElement(SearchView, { getSavedBooks: this.getSavedBooks.bind(this),
          handleSearch: this.getBooks.bind(this) }),
        React.createElement(ResultsView, { books: this.state.bookResults }),
        React.createElement(SavedBooksView, { savedBooks: this.state.savedBooks })
      );
    }
  }]);

  return App;
}(React.Component);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvYXBwLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU0sRzs7O0FBQ0osZUFBYSxLQUFiLEVBQW9CO0FBQUE7O0FBQUEsdUZBQ1gsS0FEVzs7QUFHbEIsVUFBSyxLQUFMLEdBQWE7QUFDWCxtQkFBYSxFQUFDLE9BQU8sRUFBUixFQURGO0FBRVgsa0JBQVk7QUFGRCxLQUFiO0FBSGtCO0FBT25COzs7O3dDQUVvQjtBQUNuQixXQUFLLFFBQUw7QUFDRDs7OzZCQUVTLEssRUFBTztBQUFBOztBQUNmLFdBQUssV0FBTCxDQUFpQixLQUFqQixFQUF3QixVQUFDLEtBQUQ7QUFBQSxlQUN0QixPQUFLLFFBQUwsQ0FBYztBQUNaLHVCQUFhO0FBREQsU0FBZCxDQURzQjtBQUFBLE9BQXhCO0FBS0Q7OztnQ0FFWSxLLEVBQU8sUSxFQUFVO0FBQzVCLFFBQUUsSUFBRixDQUFPO0FBQ0wsYUFBSyw4Q0FEQTtBQUVMLGNBQU0sS0FGRDtBQUdMLGFBQUsseUNBSEE7QUFJTCxjQUFNLEVBQUMsR0FBRyxLQUFKLEVBSkQ7QUFLTCxpQkFBUyxpQkFBUyxJQUFULEVBQWU7QUFDeEI7QUFDRSxtQkFBUyxJQUFUO0FBQ0QsU0FSSTtBQVNMLGVBQU8sZUFBUyxHQUFULEVBQWM7QUFDbkIsa0JBQVEsR0FBUixDQUFZLEdBQVo7QUFDRDtBQVhJLE9BQVA7QUFhRDs7O29DQUdnQjtBQUNmLFFBQUUsSUFBRixDQUFPO0FBQ0wsYUFBSyxRQURBO0FBRUwsY0FBTSxLQUZEO0FBR0wsaUJBQVMsVUFBUyxJQUFULEVBQWU7QUFDdEIsa0JBQVEsR0FBUixDQUFZLFdBQVo7QUFDQSxlQUFLLFFBQUwsQ0FBYztBQUNaLHdCQUFZO0FBREEsV0FBZDtBQUdELFNBTFEsQ0FLUCxJQUxPLENBS0YsSUFMRSxDQUhKO0FBU0wsZUFBTyxpQkFBVztBQUNoQixrQkFBUSxHQUFSLENBQVksY0FBWjtBQUNEO0FBWEksT0FBUDtBQWFEOzs7NkJBRVM7QUFDUixjQUFRLEdBQVIsQ0FBWSxLQUFLLEtBQUwsQ0FBVyxVQUF2QjtBQUNBLGFBQ0U7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBLFlBQUksV0FBVSxJQUFkO0FBQUE7QUFBQSxTQURBO0FBRUUsNEJBQUMsVUFBRCxJQUFZLGVBQWlCLEtBQUssYUFBTCxDQUFtQixJQUFuQixDQUF3QixJQUF4QixDQUE3QjtBQUNZLHdCQUFjLEtBQUssUUFBTCxDQUFjLElBQWQsQ0FBbUIsSUFBbkIsQ0FEMUIsR0FGRjtBQUlFLDRCQUFDLFdBQUQsSUFBYSxPQUFPLEtBQUssS0FBTCxDQUFXLFdBQS9CLEdBSkY7QUFLRSw0QkFBQyxjQUFELElBQWdCLFlBQVksS0FBSyxLQUFMLENBQVcsVUFBdkM7QUFMRixPQURGO0FBU0Q7Ozs7RUFsRWUsTUFBTSxTIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyIChwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgYm9va1Jlc3VsdHM6IHtpdGVtczogW119LFxuICAgICAgc2F2ZWRCb29rczogW11cbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQgKCkge1xuICAgIHRoaXMuZ2V0Qm9va3MoKTtcbiAgfVxuXG4gIGdldEJvb2tzIChxdWVyeSkge1xuICAgIHRoaXMuc2VhcmNoQm9va3MocXVlcnksIChib29rcykgPT5cbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBib29rUmVzdWx0czogYm9va3NcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHNlYXJjaEJvb2tzIChxdWVyeSwgY2FsbGJhY2spIHtcbiAgICAkLmFqYXgoe1xuICAgICAgdXJsOiAnaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vYm9va3MvdjEvdm9sdW1lcz8nLFxuICAgICAgdHlwZTogJ0dFVCcsXG4gICAgICBrZXk6ICdBSXphU3lCSjJoaElLeFpEQlBCLVJwMmdWb0psZWRJbUhsZktvakUnLFxuICAgICAgZGF0YToge3E6IHF1ZXJ5fSxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICAgIGNhbGxiYWNrKGRhdGEpO1xuICAgICAgfSxcbiAgICAgIGVycm9yOiBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG5cbiAgZ2V0U2F2ZWRCb29rcyAoKSB7XG4gICAgJC5hamF4KHtcbiAgICAgIHVybDogJy9ib29rcycsXG4gICAgICB0eXBlOiAnR0VUJyxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2dvdCBib29rcycpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBzYXZlZEJvb2tzOiBkYXRhXG4gICAgICAgIH0pO1xuICAgICAgfS5iaW5kKHRoaXMpLFxuICAgICAgZXJyb3I6IGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnZXJyb3IgaW4gZ2V0Jyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuc2F2ZWRCb29rcyk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgPlxuICAgICAgPGgxIGNsYXNzTmFtZT0naDEnPlNlYXJjaCBHb29nbGUgQm9va3MhPC9oMT5cbiAgICAgICAgPFNlYXJjaFZpZXcgZ2V0U2F2ZWRCb29rcyA9IHt0aGlzLmdldFNhdmVkQm9va3MuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlU2VhcmNoPXt0aGlzLmdldEJvb2tzLmJpbmQodGhpcyl9Lz5cbiAgICAgICAgPFJlc3VsdHNWaWV3IGJvb2tzPXt0aGlzLnN0YXRlLmJvb2tSZXN1bHRzfS8+XG4gICAgICAgIDxTYXZlZEJvb2tzVmlldyBzYXZlZEJvb2tzPXt0aGlzLnN0YXRlLnNhdmVkQm9va3N9Lz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxufSJdfQ==