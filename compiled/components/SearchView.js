'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SearchView = function (_React$Component) {
  _inherits(SearchView, _React$Component);

  function SearchView(props) {
    _classCallCheck(this, SearchView);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SearchView).call(this, props));

    _this.state = {
      value: '',
      isClicked: false
    };
    return _this;
  }

  _createClass(SearchView, [{
    key: 'handleChange',
    value: function handleChange(event) {
      this.props.handleSearch(event.target.value);
      this.setState({
        value: event.target.value
      });
    }
  }, {
    key: 'handleClick',
    value: function handleClick() {
      // console.log('clicked');
      this.setState({
        // isClicked: true
      });

      this.props.getSavedBooks();
    }
  }, {
    key: 'render',
    value: function render() {
      // console.log(this.state.value);

      return React.createElement(
        'form',
        { onClick: this.handleClick.bind(this) },
        React.createElement('input', { className: 'savedBooks', value: 'See Saved Books' }),
        React.createElement('input', { className: 'search-bar',
          type: 'text',
          placeholder: 'Search for a book!',
          value: this.state.value,
          onChange: this.handleChange.bind(this) })
      );
    }
  }]);

  return SearchView;
}(React.Component);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvU2VhcmNoVmlldy5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNLFU7OztBQUNKLHNCQUFhLEtBQWIsRUFBb0I7QUFBQTs7QUFBQSw4RkFDWCxLQURXOztBQUdsQixVQUFLLEtBQUwsR0FBYTtBQUNYLGFBQU8sRUFESTtBQUVYLGlCQUFXO0FBRkEsS0FBYjtBQUhrQjtBQU9uQjs7OztpQ0FJYSxLLEVBQU87QUFDbkIsV0FBSyxLQUFMLENBQVcsWUFBWCxDQUF3QixNQUFNLE1BQU4sQ0FBYSxLQUFyQztBQUNBLFdBQUssUUFBTCxDQUFjO0FBQ1osZUFBTyxNQUFNLE1BQU4sQ0FBYTtBQURSLE9BQWQ7QUFHRDs7O2tDQUljO0FBQ2I7QUFDQSxXQUFLLFFBQUwsQ0FBYztBQUNaO0FBRFksT0FBZDs7QUFJQSxXQUFLLEtBQUwsQ0FBVyxhQUFYO0FBQ0Q7Ozs2QkFDUztBQUNSOztBQUVBLGFBQ0U7QUFBQTtBQUFBLFVBQU0sU0FBUyxLQUFLLFdBQUwsQ0FBaUIsSUFBakIsQ0FBc0IsSUFBdEIsQ0FBZjtBQUNFLHVDQUFPLFdBQVUsWUFBakIsRUFBOEIsT0FBTSxpQkFBcEMsR0FERjtBQUlDLHVDQUFPLFdBQVUsWUFBakI7QUFDRSxnQkFBSyxNQURQO0FBRUUsdUJBQVksb0JBRmQ7QUFHRSxpQkFBTyxLQUFLLEtBQUwsQ0FBVyxLQUhwQjtBQUlFLG9CQUFVLEtBQUssWUFBTCxDQUFrQixJQUFsQixDQUF1QixJQUF2QixDQUpaO0FBSkQsT0FERjtBQWdCRDs7OztFQWhEc0IsTUFBTSxTIiwiZmlsZSI6IlNlYXJjaFZpZXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBTZWFyY2hWaWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIgKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB2YWx1ZTogJycsXG4gICAgICBpc0NsaWNrZWQ6IGZhbHNlXG4gICAgfTtcbiAgfVxuXG5cblxuICBoYW5kbGVDaGFuZ2UgKGV2ZW50KSB7XG4gICAgdGhpcy5wcm9wcy5oYW5kbGVTZWFyY2goZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHZhbHVlOiBldmVudC50YXJnZXQudmFsdWVcbiAgICB9KTtcbiAgfVxuXG5cblxuICBoYW5kbGVDbGljayAoKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ2NsaWNrZWQnKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIC8vIGlzQ2xpY2tlZDogdHJ1ZVxuICAgIH0pO1xuXG4gICAgdGhpcy5wcm9wcy5nZXRTYXZlZEJvb2tzKCk7XG4gIH1cbiAgcmVuZGVyICgpIHtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnZhbHVlKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8Zm9ybSBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyl9PlxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPSdzYXZlZEJvb2tzJyB2YWx1ZT0nU2VlIFNhdmVkIEJvb2tzJy8+XG5cblxuICAgICAgIDxpbnB1dCBjbGFzc05hbWU9J3NlYXJjaC1iYXInXG4gICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICBwbGFjZWhvbGRlcj0nU2VhcmNoIGZvciBhIGJvb2shJ1xuICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9XG4gICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKX0vPlxuICAgICAgIDwvZm9ybT5cblxuXG5cblxuICAgICk7XG4gIH1cbn1cbiJdfQ==