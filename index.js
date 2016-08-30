var searchBooks = (query, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/books/v1/volumes?',
    type: 'GET',
    data: {q: query},
    success: function(data) {
      // console.log(data)
      callback(data);
    },
    error: function(err) {
      console.log(err);
    }
  });
};




ReactDOM.render(<App searchBooks={searchBooks} />, document.getElementById('app'));