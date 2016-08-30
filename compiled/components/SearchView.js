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
    key: 'getBooks',
    value: function getBooks() {
      $.ajax({
        url: '/books',
        type: 'GET',
        success: function success(data) {
          // render stuff
          console.log(data);
        },
        error: function error() {
          console.log('error in get');
        }
      });
    }
  }, {
    key: 'handleClick',
    value: function handleClick() {
      // console.log('clicked');
      this.setState({
        isClicked: true
      });

      this.getBooks();
    }
  }, {
    key: 'render',
    value: function render() {
      // console.log(this.state.value);

      return React.createElement(
        'div',
        null,
        React.createElement(
          'div',
          { onClick: this.handleClick.bind(this), className: 'savedBooks' },
          'See Saved Books'
        ),
        React.createElement('div', null),
        React.createElement('input', { className: 'search-bar',
          type: 'text',
          placeholder: 'Search for a book!',
          value: this.state.value,
          onChange: this.handleChange.bind(this)
        })
      );
    }
  }]);

  return SearchView;
}(React.Component);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvU2VhcmNoVmlldy5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNLFU7OztBQUNKLHNCQUFhLEtBQWIsRUFBb0I7QUFBQTs7QUFBQSw4RkFDWCxLQURXOztBQUdsQixVQUFLLEtBQUwsR0FBYTtBQUNYLGFBQU8sRUFESTtBQUVYLGlCQUFXO0FBRkEsS0FBYjtBQUhrQjtBQU9uQjs7OztpQ0FFYSxLLEVBQU87QUFDbkIsV0FBSyxLQUFMLENBQVcsWUFBWCxDQUF3QixNQUFNLE1BQU4sQ0FBYSxLQUFyQztBQUNBLFdBQUssUUFBTCxDQUFjO0FBQ1osZUFBTyxNQUFNLE1BQU4sQ0FBYTtBQURSLE9BQWQ7QUFHRDs7OytCQUVXO0FBQ1YsUUFBRSxJQUFGLENBQU87QUFDTCxhQUFLLFFBREE7QUFFTCxjQUFNLEtBRkQ7QUFHTCxpQkFBUyxpQkFBUyxJQUFULEVBQWU7QUFDdEI7QUFDQSxrQkFBUSxHQUFSLENBQVksSUFBWjtBQUNELFNBTkk7QUFPTCxlQUFPLGlCQUFXO0FBQ2hCLGtCQUFRLEdBQVIsQ0FBWSxjQUFaO0FBQ0Q7QUFUSSxPQUFQO0FBV0Q7OztrQ0FFYztBQUNiO0FBQ0EsV0FBSyxRQUFMLENBQWM7QUFDWixtQkFBVztBQURDLE9BQWQ7O0FBSUEsV0FBSyxRQUFMO0FBQ0Q7Ozs2QkFDUztBQUNSOztBQUVBLGFBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFlBQUssU0FBUyxLQUFLLFdBQUwsQ0FBaUIsSUFBakIsQ0FBc0IsSUFBdEIsQ0FBZCxFQUEyQyxXQUFVLFlBQXJEO0FBQUE7QUFBQSxTQURGO0FBRUYsd0NBRkU7QUFJQyx1Q0FBTyxXQUFVLFlBQWpCO0FBQ0UsZ0JBQUssTUFEUDtBQUVFLHVCQUFZLG9CQUZkO0FBR0UsaUJBQU8sS0FBSyxLQUFMLENBQVcsS0FIcEI7QUFJRSxvQkFBVSxLQUFLLFlBQUwsQ0FBa0IsSUFBbEIsQ0FBdUIsSUFBdkI7QUFKWjtBQUpELE9BREY7QUFhRDs7OztFQXZEc0IsTUFBTSxTIiwiZmlsZSI6IlNlYXJjaFZpZXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBTZWFyY2hWaWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIgKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB2YWx1ZTogJycsXG4gICAgICBpc0NsaWNrZWQ6IGZhbHNlXG4gICAgfTtcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZSAoZXZlbnQpIHtcbiAgICB0aGlzLnByb3BzLmhhbmRsZVNlYXJjaChldmVudC50YXJnZXQudmFsdWUpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgIH0pO1xuICB9XG5cbiAgZ2V0Qm9va3MgKCkge1xuICAgICQuYWpheCh7XG4gICAgICB1cmw6ICcvYm9va3MnLFxuICAgICAgdHlwZTogJ0dFVCcsXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgIC8vIHJlbmRlciBzdHVmZlxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgIH0sXG4gICAgICBlcnJvcjogZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdlcnJvciBpbiBnZXQnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZUNsaWNrICgpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnY2xpY2tlZCcpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaXNDbGlja2VkOiB0cnVlXG4gICAgfSk7XG5cbiAgICB0aGlzLmdldEJvb2tzKCk7XG4gIH1cbiAgcmVuZGVyICgpIHtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnZhbHVlKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKX0gY2xhc3NOYW1lPSdzYXZlZEJvb2tzJz5TZWUgU2F2ZWQgQm9va3M8L2Rpdj5cbiAgICA8ZGl2PlxuICAgIDwvZGl2PlxuICAgICAgIDxpbnB1dCBjbGFzc05hbWU9J3NlYXJjaC1iYXInXG4gICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICBwbGFjZWhvbGRlcj0nU2VhcmNoIGZvciBhIGJvb2shJ1xuICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9XG4gICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKX1cbiAgICAgICAvPlxuICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXX0=