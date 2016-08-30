'use strict';

var searchBooks = function searchBooks(query, callback) {
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
};

ReactDOM.render(React.createElement(App, { searchBooks: searchBooks }), document.getElementById('app'));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSSxjQUFjLFNBQWQsV0FBYyxDQUFDLEtBQUQsRUFBUSxRQUFSLEVBQXFCO0FBQ3JDLElBQUUsSUFBRixDQUFPO0FBQ0wsU0FBSyw4Q0FEQTtBQUVMLFVBQU0sS0FGRDtBQUdMLFNBQUsseUNBSEE7QUFJTCxVQUFNLEVBQUMsR0FBRyxLQUFKLEVBSkQ7QUFLTCxhQUFTLGlCQUFTLElBQVQsRUFBZTtBQUN0QjtBQUNBLGVBQVMsSUFBVDtBQUNELEtBUkk7QUFTTCxXQUFPLGVBQVMsR0FBVCxFQUFjO0FBQ25CLGNBQVEsR0FBUixDQUFZLEdBQVo7QUFDRDtBQVhJLEdBQVA7QUFhRCxDQWREOztBQW1CQSxTQUFTLE1BQVQsQ0FBZ0Isb0JBQUMsR0FBRCxJQUFLLGFBQWEsV0FBbEIsR0FBaEIsRUFBbUQsU0FBUyxjQUFULENBQXdCLEtBQXhCLENBQW5EIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHNlYXJjaEJvb2tzID0gKHF1ZXJ5LCBjYWxsYmFjaykgPT4ge1xuICAkLmFqYXgoe1xuICAgIHVybDogJ2h0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2Jvb2tzL3YxL3ZvbHVtZXM/JyxcbiAgICB0eXBlOiAnR0VUJyxcbiAgICBrZXk6ICdBSXphU3lCSjJoaElLeFpEQlBCLVJwMmdWb0psZWRJbUhsZktvakUnLFxuICAgIGRhdGE6IHtxOiBxdWVyeX0sXG4gICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSkge1xuICAgICAgLy8gY29uc29sZS5sb2coZGF0YSlcbiAgICAgIGNhbGxiYWNrKGRhdGEpO1xuICAgIH0sXG4gICAgZXJyb3I6IGZ1bmN0aW9uKGVycikge1xuICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICB9XG4gIH0pO1xufTtcblxuXG5cblxuUmVhY3RET00ucmVuZGVyKDxBcHAgc2VhcmNoQm9va3M9e3NlYXJjaEJvb2tzfSAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTsiXX0=