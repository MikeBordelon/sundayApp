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
    // var ourAjax = function(...rest) {
    //   $.ajax.apply(this, rest);
    // }.bind();


    _this.state = {
      selectedGenre: 'Action',
      selectedMovies: _this.props.data.filter(function (movie) {
        return movie.genre === 'Action';
      }),
      data: _this.props.data
    };
    return _this;
  }

  _createClass(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var that = this;
      $.ajax({
        url: 'http://127.0.0.1:3000',
        type: 'GET',
        success: function success(data) {
          console.log('success', this);
          console.log('data', data);
          console.log('that', that);

          that.setState({
            data: data,
            selectedMovies: that.state.data.filter(function (movie) {
              return movie.genre === that.state.selectedGenre;
            })
          });
        },
        error: function error() {}
      });
    }
  }, {
    key: 'changeGenre',
    value: function changeGenre(event) {
      console.log('changeGenre');
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
      console.log('render');
      return React.createElement(
        'div',
        null,
        React.createElement(SearchView, { changeFunc: this.changeGenre.bind(this), genres: this.props.genres }),
        React.createElement(ResultsView, { currentSelectedMovie: this.state.selectedMovies })
      );
    }
  }]);

  return App;
}(React.Component);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvYXBwLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU0sRzs7O0FBQ0osZUFBYSxLQUFiLEVBQW9CO0FBQUE7O0FBQUEsdUZBSVosS0FKWTtBQUNsQjtBQUNBO0FBQ0E7OztBQUdBLFVBQUssS0FBTCxHQUFhO0FBQ1gscUJBQWUsUUFESjtBQUVYLHNCQUFnQixNQUFLLEtBQUwsQ0FBVyxJQUFYLENBQWdCLE1BQWhCLENBQXVCLFVBQVMsS0FBVCxFQUFnQjtBQUNyRCxlQUFPLE1BQU0sS0FBTixLQUFnQixRQUF2QjtBQUNELE9BRmUsQ0FGTDtBQUtYLFlBQU0sTUFBSyxLQUFMLENBQVc7QUFMTixLQUFiO0FBTmtCO0FBYW5COzs7O3dDQUVvQjtBQUNuQixVQUFJLE9BQU8sSUFBWDtBQUNBLFFBQUUsSUFBRixDQUFPO0FBQ0wsYUFBSyx1QkFEQTtBQUVMLGNBQU0sS0FGRDtBQUdMLGlCQUFTLGlCQUFTLElBQVQsRUFBZTtBQUN0QixrQkFBUSxHQUFSLENBQVksU0FBWixFQUF1QixJQUF2QjtBQUNBLGtCQUFRLEdBQVIsQ0FBWSxNQUFaLEVBQW9CLElBQXBCO0FBQ0Esa0JBQVEsR0FBUixDQUFZLE1BQVosRUFBb0IsSUFBcEI7O0FBRUEsZUFBSyxRQUFMLENBQWM7QUFDWixrQkFBTSxJQURNO0FBRVosNEJBQWdCLEtBQUssS0FBTCxDQUFXLElBQVgsQ0FBZ0IsTUFBaEIsQ0FBdUIsVUFBUyxLQUFULEVBQWdCO0FBQ3JELHFCQUFPLE1BQU0sS0FBTixLQUFnQixLQUFLLEtBQUwsQ0FBVyxhQUFsQztBQUNELGFBRmU7QUFGSixXQUFkO0FBTUQsU0FkSTtBQWVMLGVBQU8saUJBQVcsQ0FBRTtBQWZmLE9BQVA7QUFpQkQ7OztnQ0FFWSxLLEVBQU87QUFDbEIsY0FBUSxHQUFSLENBQVksYUFBWjtBQUNBLFdBQUssUUFBTCxDQUFjO0FBQ1osdUJBQWUsTUFBTSxNQUFOLENBQWEsS0FEaEI7QUFFWix3QkFBZ0IsS0FBSyxLQUFMLENBQVcsSUFBWCxDQUFnQixNQUFoQixDQUF1QixVQUFTLEtBQVQsRUFBZ0I7QUFDckQsaUJBQU8sTUFBTSxLQUFOLEtBQWdCLE1BQU0sTUFBTixDQUFhLEtBQXBDO0FBQ0QsU0FGZTtBQUZKLE9BQWQ7QUFNRDs7OzZCQUVTO0FBQ1IsY0FBUSxHQUFSLENBQVksUUFBWjtBQUNBLGFBQ0U7QUFBQTtBQUFBO0FBQ0UsNEJBQUMsVUFBRCxJQUFZLFlBQVksS0FBSyxXQUFMLENBQWlCLElBQWpCLENBQXNCLElBQXRCLENBQXhCLEVBQXFELFFBQVEsS0FBSyxLQUFMLENBQVcsTUFBeEUsR0FERjtBQUVFLDRCQUFDLFdBQUQsSUFBYSxzQkFBc0IsS0FBSyxLQUFMLENBQVcsY0FBOUM7QUFGRixPQURGO0FBTUQ7Ozs7RUF2RGUsTUFBTSxTIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIC8vIHZhciBvdXJBamF4ID0gZnVuY3Rpb24oLi4ucmVzdCkge1xuICAgIC8vICAgJC5hamF4LmFwcGx5KHRoaXMsIHJlc3QpO1xuICAgIC8vIH0uYmluZCgpO1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzZWxlY3RlZEdlbnJlOiAnQWN0aW9uJyxcbiAgICAgIHNlbGVjdGVkTW92aWVzOiB0aGlzLnByb3BzLmRhdGEuZmlsdGVyKGZ1bmN0aW9uKG1vdmllKSB7XG4gICAgICAgIHJldHVybiBtb3ZpZS5nZW5yZSA9PT0gJ0FjdGlvbic7XG4gICAgICB9KSxcbiAgICAgIGRhdGE6IHRoaXMucHJvcHMuZGF0YVxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCAoKSB7XG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgICQuYWpheCh7XG4gICAgICB1cmw6ICdodHRwOi8vMTI3LjAuMC4xOjMwMDAnLFxuICAgICAgdHlwZTogJ0dFVCcsXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdzdWNjZXNzJywgdGhpcyk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdkYXRhJywgZGF0YSk7XG4gICAgICAgIGNvbnNvbGUubG9nKCd0aGF0JywgdGhhdCk7XG5cbiAgICAgICAgdGhhdC5zZXRTdGF0ZSh7XG4gICAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgICBzZWxlY3RlZE1vdmllczogdGhhdC5zdGF0ZS5kYXRhLmZpbHRlcihmdW5jdGlvbihtb3ZpZSkge1xuICAgICAgICAgICAgcmV0dXJuIG1vdmllLmdlbnJlID09PSB0aGF0LnN0YXRlLnNlbGVjdGVkR2VucmU7XG4gICAgICAgICAgfSlcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgZXJyb3I6IGZ1bmN0aW9uKCkge31cbiAgICB9KTtcbiAgfVxuXG4gIGNoYW5nZUdlbnJlIChldmVudCkge1xuICAgIGNvbnNvbGUubG9nKCdjaGFuZ2VHZW5yZScpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2VsZWN0ZWRHZW5yZTogZXZlbnQudGFyZ2V0LnZhbHVlLFxuICAgICAgc2VsZWN0ZWRNb3ZpZXM6IHRoaXMucHJvcHMuZGF0YS5maWx0ZXIoZnVuY3Rpb24obW92aWUpIHtcbiAgICAgICAgcmV0dXJuIG1vdmllLmdlbnJlID09PSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgICB9KVxuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zb2xlLmxvZygncmVuZGVyJyk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxTZWFyY2hWaWV3IGNoYW5nZUZ1bmM9e3RoaXMuY2hhbmdlR2VucmUuYmluZCh0aGlzKX0gZ2VucmVzPXt0aGlzLnByb3BzLmdlbnJlc30vPlxuICAgICAgICA8UmVzdWx0c1ZpZXcgY3VycmVudFNlbGVjdGVkTW92aWU9e3RoaXMuc3RhdGUuc2VsZWN0ZWRNb3ZpZXN9Lz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn0iXX0=