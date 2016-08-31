"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SavedBooksViewEntry = function (_React$Component) {
  _inherits(SavedBooksViewEntry, _React$Component);

  function SavedBooksViewEntry(props) {
    _classCallCheck(this, SavedBooksViewEntry);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SavedBooksViewEntry).call(this, props));

    _this.state = {
      // title: this.props.book.volumeInfo.title,
      // author: this.props.book.volumeInfo.authors[0],
      // thumbnail: this.props.book.volumeInfo.imageLinks.thumbnail
    };
    // this.buttonClick = this.buttonClick.bind(this);
    return _this;
  }

  _createClass(SavedBooksViewEntry, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "book-list-entry2" },
        React.createElement(
          "div",
          { className: "media-left media-middle" },
          React.createElement("img", { className: "media-object", src: this.props.book.thumbnail, alt: "" })
        ),
        React.createElement(
          "div",
          { className: "media-body" },
          React.createElement(
            "div",
            { className: "book-list-entry-detail" },
            this.props.book.title
          )
        ),
        React.createElement(
          "div",
          { className: "media-body" },
          React.createElement(
            "div",
            { className: "book-list-entry-detail" },
            this.props.book.author
          ),
          React.createElement("div", { className: "col-sm-12" })
        )
      );
    }
  }]);

  return SavedBooksViewEntry;
}(React.Component);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvU2F2ZWRCb29rc1ZpZXdFbnRyeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU0sbUI7OztBQUNKLCtCQUFZLEtBQVosRUFBbUI7QUFBQTs7QUFBQSx1R0FDVixLQURVOztBQUdqQixVQUFLLEtBQUwsR0FBYTtBQUNYO0FBQ0E7QUFDQTtBQUhXLEtBQWI7QUFLQTtBQVJpQjtBQVNsQjs7Ozs2QkFHUztBQUNSLGFBRUE7QUFBQTtBQUFBLFVBQUssV0FBVSxrQkFBZjtBQUVBO0FBQUE7QUFBQSxZQUFLLFdBQVUseUJBQWY7QUFDRSx1Q0FBSyxXQUFVLGNBQWYsRUFBOEIsS0FBSyxLQUFLLEtBQUwsQ0FBVyxJQUFYLENBQWdCLFNBQW5ELEVBQThELEtBQUksRUFBbEU7QUFERixTQUZBO0FBS0E7QUFBQTtBQUFBLFlBQUssV0FBVSxZQUFmO0FBQ0U7QUFBQTtBQUFBLGNBQUssV0FBVSx3QkFBZjtBQUF5QyxpQkFBSyxLQUFMLENBQVcsSUFBWCxDQUFnQjtBQUF6RDtBQURGLFNBTEE7QUFRQTtBQUFBO0FBQUEsWUFBSyxXQUFVLFlBQWY7QUFDQTtBQUFBO0FBQUEsY0FBSyxXQUFVLHdCQUFmO0FBQXlDLGlCQUFLLEtBQUwsQ0FBVyxJQUFYLENBQWdCO0FBQXpELFdBREE7QUFFQSx1Q0FBSyxXQUFVLFdBQWY7QUFGQTtBQVJBLE9BRkE7QUFrQkQ7Ozs7RUFoQytCLE1BQU0sUyIsImZpbGUiOiJTYXZlZEJvb2tzVmlld0VudHJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgU2F2ZWRCb29rc1ZpZXdFbnRyeSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIgKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAvLyB0aXRsZTogdGhpcy5wcm9wcy5ib29rLnZvbHVtZUluZm8udGl0bGUsXG4gICAgICAvLyBhdXRob3I6IHRoaXMucHJvcHMuYm9vay52b2x1bWVJbmZvLmF1dGhvcnNbMF0sXG4gICAgICAvLyB0aHVtYm5haWw6IHRoaXMucHJvcHMuYm9vay52b2x1bWVJbmZvLmltYWdlTGlua3MudGh1bWJuYWlsXG4gICAgfTtcbiAgICAvLyB0aGlzLmJ1dHRvbkNsaWNrID0gdGhpcy5idXR0b25DbGljay5iaW5kKHRoaXMpO1xuICB9XG5cblxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJvb2stbGlzdC1lbnRyeTJcIj5cblxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtbGVmdCBtZWRpYS1taWRkbGVcIj5cbiAgICAgIDxpbWcgY2xhc3NOYW1lPVwibWVkaWEtb2JqZWN0XCIgc3JjPXt0aGlzLnByb3BzLmJvb2sudGh1bWJuYWlsfSBhbHQ9XCJcIiAvPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtYm9keVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJib29rLWxpc3QtZW50cnktZGV0YWlsXCI+e3RoaXMucHJvcHMuYm9vay50aXRsZX08L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWJvZHlcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJvb2stbGlzdC1lbnRyeS1kZXRhaWxcIj57dGhpcy5wcm9wcy5ib29rLmF1dGhvcn08L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0xMlwiPlxuXG4gICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgKTtcbiAgfVxufVxuXG4iXX0=