'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ResultsViewEntry = function (_React$Component) {
  _inherits(ResultsViewEntry, _React$Component);

  function ResultsViewEntry(props) {
    _classCallCheck(this, ResultsViewEntry);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ResultsViewEntry).call(this, props));

    _this.state = {
      // title: this.props.book.volumeInfo.title,
      // author: this.props.book.volumeInfo.authors[0],
      // thumbnail: this.props.book.volumeInfo.imageLinks.thumbnail
    };
    _this.buttonClick = _this.buttonClick.bind(_this);
    return _this;
  }

  // componentDidMount () {
  //   this.addBook();
  // }

  _createClass(ResultsViewEntry, [{
    key: 'addBook',
    value: function addBook(title, author, thumbnail) {
      $.ajax({
        url: '/books',
        contentType: 'application/json',
        type: 'POST',
        data: JSON.stringify({
          title: title,
          author: author,
          thumbnail: thumbnail
        }),
        success: function success() {
          console.log('success');
        },
        error: function error() {
          console.log('addBook error');
        }
      });
    }
  }, {
    key: 'buttonClick',
    value: function buttonClick(event) {
      event.preventDefault();
      this.addBook(this.props.book.volumeInfo.title, this.props.book.volumeInfo.authors[0], this.props.book.volumeInfo.imageLinks.thumbnail);
      // console.log(this.state.value);
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'book-list-entry' },
        React.createElement(
          'div',
          { className: 'media-left media-middle' },
          React.createElement('img', { className: 'media-object', src: this.props.book.volumeInfo.imageLinks.thumbnail, alt: '' })
        ),
        React.createElement(
          'div',
          { className: 'media-body' },
          React.createElement(
            'div',
            { className: 'book-list-entry-detail' },
            this.props.book.volumeInfo.title
          )
        ),
        React.createElement(
          'div',
          { className: 'media-body' },
          React.createElement(
            'div',
            { className: 'book-list-entry-detail' },
            this.props.book.volumeInfo.authors[0]
          ),
          React.createElement(
            'div',
            { className: 'col-sm-12' },
            React.createElement(
              'form',
              { onSubmit: this.buttonClick },
              React.createElement(
                'div',
                { className: 'radio' },
                React.createElement(
                  'label',
                  null,
                  React.createElement('input', { type: 'submit', value: 'Save This Book' })
                )
              )
            )
          )
        )
      );
    }
  }]);

  return ResultsViewEntry;
}(React.Component);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvUmVzdWx0c1ZpZXdFbnRyeS5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNLGdCOzs7QUFDSiw0QkFBWSxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsb0dBQ1YsS0FEVTs7QUFHakIsVUFBSyxLQUFMLEdBQWE7QUFDWDtBQUNBO0FBQ0E7QUFIVyxLQUFiO0FBS0EsVUFBSyxXQUFMLEdBQW1CLE1BQUssV0FBTCxDQUFpQixJQUFqQixPQUFuQjtBQVJpQjtBQVNsQjs7QUFFRDtBQUNBO0FBQ0E7Ozs7NEJBRVMsSyxFQUFPLE0sRUFBUSxTLEVBQVc7QUFDakMsUUFBRSxJQUFGLENBQU87QUFDTCxhQUFLLFFBREE7QUFFTCxxQkFBYSxrQkFGUjtBQUdMLGNBQU0sTUFIRDtBQUlMLGNBQU0sS0FBSyxTQUFMLENBQWU7QUFDbkIsaUJBQU8sS0FEWTtBQUVuQixrQkFBUSxNQUZXO0FBR25CLHFCQUFXO0FBSFEsU0FBZixDQUpEO0FBU0wsaUJBQVMsbUJBQVc7QUFDbEIsa0JBQVEsR0FBUixDQUFZLFNBQVo7QUFDRCxTQVhJO0FBWUwsZUFBTyxpQkFBVztBQUNoQixrQkFBUSxHQUFSLENBQVksZUFBWjtBQUNEO0FBZEksT0FBUDtBQWdCRDs7O2dDQUVZLEssRUFBTztBQUNsQixZQUFNLGNBQU47QUFDQSxXQUFLLE9BQUwsQ0FBYSxLQUFLLEtBQUwsQ0FBVyxJQUFYLENBQWdCLFVBQWhCLENBQTJCLEtBQXhDLEVBQStDLEtBQUssS0FBTCxDQUFXLElBQVgsQ0FBZ0IsVUFBaEIsQ0FBMkIsT0FBM0IsQ0FBbUMsQ0FBbkMsQ0FBL0MsRUFBc0YsS0FBSyxLQUFMLENBQVcsSUFBWCxDQUFnQixVQUFoQixDQUEyQixVQUEzQixDQUFzQyxTQUE1SDtBQUNBO0FBQ0Q7Ozs2QkFHUztBQUNSLGFBRUk7QUFBQTtBQUFBLFVBQUssV0FBVSxpQkFBZjtBQUVKO0FBQUE7QUFBQSxZQUFLLFdBQVUseUJBQWY7QUFDRSx1Q0FBSyxXQUFVLGNBQWYsRUFBOEIsS0FBSyxLQUFLLEtBQUwsQ0FBVyxJQUFYLENBQWdCLFVBQWhCLENBQTJCLFVBQTNCLENBQXNDLFNBQXpFLEVBQW9GLEtBQUksRUFBeEY7QUFERixTQUZJO0FBS0o7QUFBQTtBQUFBLFlBQUssV0FBVSxZQUFmO0FBQ0U7QUFBQTtBQUFBLGNBQUssV0FBVSx3QkFBZjtBQUF5QyxpQkFBSyxLQUFMLENBQVcsSUFBWCxDQUFnQixVQUFoQixDQUEyQjtBQUFwRTtBQURGLFNBTEk7QUFRSjtBQUFBO0FBQUEsWUFBSyxXQUFVLFlBQWY7QUFDQTtBQUFBO0FBQUEsY0FBSyxXQUFVLHdCQUFmO0FBQXlDLGlCQUFLLEtBQUwsQ0FBVyxJQUFYLENBQWdCLFVBQWhCLENBQTJCLE9BQTNCLENBQW1DLENBQW5DO0FBQXpDLFdBREE7QUFFQTtBQUFBO0FBQUEsY0FBSyxXQUFVLFdBQWY7QUFDQztBQUFBO0FBQUEsZ0JBQU0sVUFBVSxLQUFLLFdBQXJCO0FBQ0U7QUFBQTtBQUFBLGtCQUFLLFdBQVUsT0FBZjtBQUNFO0FBQUE7QUFBQTtBQUNFLGlEQUFPLE1BQUssUUFBWixFQUFxQixPQUFNLGdCQUEzQjtBQURGO0FBREY7QUFERjtBQUREO0FBRkE7QUFSSSxPQUZKO0FBd0JEOzs7O0VBbkU0QixNQUFNLFMiLCJmaWxlIjoiUmVzdWx0c1ZpZXdFbnRyeS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFJlc3VsdHNWaWV3RW50cnkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyIChwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgLy8gdGl0bGU6IHRoaXMucHJvcHMuYm9vay52b2x1bWVJbmZvLnRpdGxlLFxuICAgICAgLy8gYXV0aG9yOiB0aGlzLnByb3BzLmJvb2sudm9sdW1lSW5mby5hdXRob3JzWzBdLFxuICAgICAgLy8gdGh1bWJuYWlsOiB0aGlzLnByb3BzLmJvb2sudm9sdW1lSW5mby5pbWFnZUxpbmtzLnRodW1ibmFpbFxuICAgIH07XG4gICAgdGhpcy5idXR0b25DbGljayA9IHRoaXMuYnV0dG9uQ2xpY2suYmluZCh0aGlzKTtcbiAgfVxuXG4gIC8vIGNvbXBvbmVudERpZE1vdW50ICgpIHtcbiAgLy8gICB0aGlzLmFkZEJvb2soKTtcbiAgLy8gfVxuXG4gIGFkZEJvb2sgKHRpdGxlLCBhdXRob3IsIHRodW1ibmFpbCkge1xuICAgICQuYWpheCh7XG4gICAgICB1cmw6ICcvYm9va3MnLFxuICAgICAgY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIHR5cGU6ICdQT1NUJyxcbiAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICBhdXRob3I6IGF1dGhvcixcbiAgICAgICAgdGh1bWJuYWlsOiB0aHVtYm5haWxcbiAgICAgIH0pLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdzdWNjZXNzJyk7XG4gICAgICB9LFxuICAgICAgZXJyb3I6IGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnYWRkQm9vayBlcnJvcicpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgYnV0dG9uQ2xpY2sgKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLmFkZEJvb2sodGhpcy5wcm9wcy5ib29rLnZvbHVtZUluZm8udGl0bGUsIHRoaXMucHJvcHMuYm9vay52b2x1bWVJbmZvLmF1dGhvcnNbMF0sIHRoaXMucHJvcHMuYm9vay52b2x1bWVJbmZvLmltYWdlTGlua3MudGh1bWJuYWlsKTtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnZhbHVlKTtcbiAgfVxuXG5cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9vay1saXN0LWVudHJ5XCI+XG5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWxlZnQgbWVkaWEtbWlkZGxlXCI+XG4gICAgICA8aW1nIGNsYXNzTmFtZT1cIm1lZGlhLW9iamVjdFwiIHNyYz17dGhpcy5wcm9wcy5ib29rLnZvbHVtZUluZm8uaW1hZ2VMaW5rcy50aHVtYm5haWx9IGFsdD1cIlwiIC8+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYS1ib2R5XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvb2stbGlzdC1lbnRyeS1kZXRhaWxcIj57dGhpcy5wcm9wcy5ib29rLnZvbHVtZUluZm8udGl0bGV9PC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYS1ib2R5XCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJib29rLWxpc3QtZW50cnktZGV0YWlsXCI+e3RoaXMucHJvcHMuYm9vay52b2x1bWVJbmZvLmF1dGhvcnNbMF19PC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMTJcIj5cbiAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuYnV0dG9uQ2xpY2t9PlxuICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmFkaW9cIj5cbiAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT0nU2F2ZSBUaGlzIEJvb2snLz5cbiAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgPC9kaXY+XG4gICAgIDwvZm9ybT5cbiAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICApO1xuICB9XG59XG5cbiJdfQ==