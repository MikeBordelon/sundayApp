'use strict';

var searchBooks = function searchBooks(query, callback) {
  $.ajax({
    url: 'https://www.googleapis.com/books/v1/volumes?',
    type: 'GET',
    data: { q: query },
    success: function success(data) {
      // console.log(data)
      callback(data);
    },
    error: function error(err) {
      console.log(err);
    }
  });
};

ReactDOM.render(React.createElement(App, { searchBooks: searchBooks }), document.getElementById('app'));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSSxjQUFjLFNBQWQsV0FBYyxDQUFDLEtBQUQsRUFBUSxRQUFSLEVBQXFCO0FBQ3JDLElBQUUsSUFBRixDQUFPO0FBQ0wsU0FBSyw4Q0FEQTtBQUVMLFVBQU0sS0FGRDtBQUdMLFVBQU0sRUFBQyxHQUFHLEtBQUosRUFIRDtBQUlMLGFBQVMsaUJBQVMsSUFBVCxFQUFlO0FBQ3RCO0FBQ0EsZUFBUyxJQUFUO0FBQ0QsS0FQSTtBQVFMLFdBQU8sZUFBUyxHQUFULEVBQWM7QUFDbkIsY0FBUSxHQUFSLENBQVksR0FBWjtBQUNEO0FBVkksR0FBUDtBQVlELENBYkQ7O0FBa0JBLFNBQVMsTUFBVCxDQUFnQixvQkFBQyxHQUFELElBQUssYUFBYSxXQUFsQixHQUFoQixFQUFtRCxTQUFTLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBbkQiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgc2VhcmNoQm9va3MgPSAocXVlcnksIGNhbGxiYWNrKSA9PiB7XG4gICQuYWpheCh7XG4gICAgdXJsOiAnaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vYm9va3MvdjEvdm9sdW1lcz8nLFxuICAgIHR5cGU6ICdHRVQnLFxuICAgIGRhdGE6IHtxOiBxdWVyeX0sXG4gICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSkge1xuICAgICAgLy8gY29uc29sZS5sb2coZGF0YSlcbiAgICAgIGNhbGxiYWNrKGRhdGEpO1xuICAgIH0sXG4gICAgZXJyb3I6IGZ1bmN0aW9uKGVycikge1xuICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICB9XG4gIH0pO1xufTtcblxuXG5cblxuUmVhY3RET00ucmVuZGVyKDxBcHAgc2VhcmNoQm9va3M9e3NlYXJjaEJvb2tzfSAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTsiXX0=