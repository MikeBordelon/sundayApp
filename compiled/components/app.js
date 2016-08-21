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
      selectedGenre: 'Action',
      selectedMovies: _this.props.data.filter(function (movie) {
        return movie.genre === 'Action';
      })
    };
    return _this;
  }

  _createClass(App, [{
    key: 'OnChange',
    value: function OnChange(event) {
      console.log('heres');
      this.setState({
        selectedGenre: event.target.value,
        selectedMovies: this.props.data.filter(function (movie) {
          return movie.genre === event.target.value;
        })
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(SearchView, { changeFunc: this.OnChange.bind(this), genres: this.props.genres }),
        React.createElement(ResultsView, { currentSelectedMovie: this.state.selectedMovies })
      );
    }
  }]);

  return App;
}(React.Component);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvYXBwLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU0sRzs7O0FBQ0osZUFBYSxLQUFiLEVBQW9CO0FBQUE7O0FBQUEsdUZBQ1osS0FEWTs7QUFHbEIsVUFBSyxLQUFMLEdBQWE7QUFDWCxxQkFBZSxRQURKO0FBRVgsc0JBQWdCLE1BQUssS0FBTCxDQUFXLElBQVgsQ0FBZ0IsTUFBaEIsQ0FBdUIsVUFBUyxLQUFULEVBQWdCO0FBQ3JELGVBQU8sTUFBTSxLQUFOLEtBQWdCLFFBQXZCO0FBQ0QsT0FGZTtBQUZMLEtBQWI7QUFIa0I7QUFTbkI7Ozs7NkJBRVMsSyxFQUFPO0FBQ2YsY0FBUSxHQUFSLENBQVksT0FBWjtBQUNBLFdBQUssUUFBTCxDQUFjO0FBQ1osdUJBQWUsTUFBTSxNQUFOLENBQWEsS0FEaEI7QUFFWix3QkFBZ0IsS0FBSyxLQUFMLENBQVcsSUFBWCxDQUFnQixNQUFoQixDQUF1QixVQUFTLEtBQVQsRUFBZ0I7QUFDckQsaUJBQU8sTUFBTSxLQUFOLEtBQWdCLE1BQU0sTUFBTixDQUFhLEtBQXBDO0FBQ0gsU0FGaUI7QUFGSixPQUFkO0FBTUQ7Ozs2QkFFUztBQUNSLGFBQ0U7QUFBQTtBQUFBO0FBQ0UsNEJBQUMsVUFBRCxJQUFZLFlBQVksS0FBSyxRQUFMLENBQWMsSUFBZCxDQUFtQixJQUFuQixDQUF4QixFQUFrRCxRQUFRLEtBQUssS0FBTCxDQUFXLE1BQXJFLEdBREY7QUFFRSw0QkFBQyxXQUFELElBQWEsc0JBQXNCLEtBQUssS0FBTCxDQUFXLGNBQTlDO0FBRkYsT0FERjtBQU1EOzs7O0VBN0JlLE1BQU0sUyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2VsZWN0ZWRHZW5yZTogJ0FjdGlvbicsXG4gICAgICBzZWxlY3RlZE1vdmllczogdGhpcy5wcm9wcy5kYXRhLmZpbHRlcihmdW5jdGlvbihtb3ZpZSkge1xuICAgICAgICByZXR1cm4gbW92aWUuZ2VucmUgPT09ICdBY3Rpb24nO1xuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBPbkNoYW5nZSAoZXZlbnQpIHtcbiAgICBjb25zb2xlLmxvZygnaGVyZXMnKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNlbGVjdGVkR2VucmU6IGV2ZW50LnRhcmdldC52YWx1ZSxcbiAgICAgIHNlbGVjdGVkTW92aWVzOiB0aGlzLnByb3BzLmRhdGEuZmlsdGVyKGZ1bmN0aW9uKG1vdmllKSB7XG4gICAgICAgIHJldHVybiBtb3ZpZS5nZW5yZSA9PT0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxTZWFyY2hWaWV3IGNoYW5nZUZ1bmM9e3RoaXMuT25DaGFuZ2UuYmluZCh0aGlzKX0gZ2VucmVzPXt0aGlzLnByb3BzLmdlbnJlc30vPlxuICAgICAgICA8UmVzdWx0c1ZpZXcgY3VycmVudFNlbGVjdGVkTW92aWU9e3RoaXMuc3RhdGUuc2VsZWN0ZWRNb3ZpZXN9Lz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufSJdfQ==