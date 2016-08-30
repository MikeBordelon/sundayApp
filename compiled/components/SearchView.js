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
      value: ''
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
    key: 'render',
    value: function render() {
      // console.log(this.state.value);
      return React.createElement(
        'div',
        null,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvU2VhcmNoVmlldy5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNLFU7OztBQUNKLHNCQUFhLEtBQWIsRUFBb0I7QUFBQTs7QUFBQSw4RkFDWCxLQURXOztBQUdsQixVQUFLLEtBQUwsR0FBYTtBQUNYLGFBQU87QUFESSxLQUFiO0FBSGtCO0FBTW5COzs7O2lDQUVhLEssRUFBTztBQUNuQixXQUFLLEtBQUwsQ0FBVyxZQUFYLENBQXdCLE1BQU0sTUFBTixDQUFhLEtBQXJDO0FBQ0EsV0FBSyxRQUFMLENBQWM7QUFDWixlQUFPLE1BQU0sTUFBTixDQUFhO0FBRFIsT0FBZDtBQUdEOzs7NkJBRVM7QUFDUjtBQUNBLGFBQ0E7QUFBQTtBQUFBO0FBQ0csdUNBQU8sV0FBVSxZQUFqQjtBQUNFLGdCQUFLLE1BRFA7QUFFRSx1QkFBWSxvQkFGZDtBQUdFLGlCQUFPLEtBQUssS0FBTCxDQUFXLEtBSHBCO0FBSUUsb0JBQVUsS0FBSyxZQUFMLENBQWtCLElBQWxCLENBQXVCLElBQXZCO0FBSlo7QUFESCxPQURBO0FBVUQ7Ozs7RUE1QnNCLE1BQU0sUyIsImZpbGUiOiJTZWFyY2hWaWV3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgU2VhcmNoVmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyIChwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdmFsdWU6ICcnXG4gICAgfTtcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZSAoZXZlbnQpIHtcbiAgICB0aGlzLnByb3BzLmhhbmRsZVNlYXJjaChldmVudC50YXJnZXQudmFsdWUpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnZhbHVlKTtcbiAgICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICAgPGlucHV0IGNsYXNzTmFtZT0nc2VhcmNoLWJhcidcbiAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgIHBsYWNlaG9sZGVyPSdTZWFyY2ggZm9yIGEgYm9vayEnXG4gICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX1cbiAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpfVxuICAgICAgIC8+XG4gICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdfQ==