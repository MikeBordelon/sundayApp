'use strict';

//Server Setup
var express = require('express');
var bodyParser = require('body-parser');
var PORT = process.env.PORT || 8000;
var app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname));
app.listen(PORT, function () {
  console.log('listening on port: ' + PORT);
});

// DB Setup
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/books');
db = mongoose.connection;
db.on('error', console.error.bind(console, 'conn error'));

var bookSchema = mongoose.Schema({
  title: String,
  author: String
});

var Book = mongoose.model('Book', bookSchema);
// var newBook = new Book({ title: 'Potter', author: 'Golmand' });

Book.find(function (err, books) {
  if (err) {
    return console.error(err);
  }
  console.log(books);
});

app.get('/books', function (req, res) {
  mongoose.model('Book').find(function (err, books) {
    res.send(books);
  });
});

app.post('/books', function (req, res) {
  // console.log(res.body);
  console.log(req.body.title);
  var newBook = new Book({ title: req.body.title, author: req.body.author });
  newBook.save(function (err) {
    if (err) {
      console.log(err);
    }
  });
  res.send(newBook);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NlcnZlci1kYi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0EsSUFBSSxVQUFVLFFBQVEsU0FBUixDQUFkO0FBQ0EsSUFBSSxhQUFhLFFBQVEsYUFBUixDQUFqQjtBQUNBLElBQUksT0FBTyxRQUFRLEdBQVIsQ0FBWSxJQUFaLElBQW9CLElBQS9CO0FBQ0EsSUFBSSxNQUFNLFNBQVY7QUFDQSxJQUFJLEdBQUosQ0FBUSxXQUFXLElBQVgsRUFBUjtBQUNBLElBQUksR0FBSixDQUFRLFFBQVEsTUFBUixDQUFlLFNBQWYsQ0FBUjtBQUNBLElBQUksTUFBSixDQUFXLElBQVgsRUFBaUIsWUFBVztBQUMxQixVQUFRLEdBQVIsQ0FBWSx3QkFBd0IsSUFBcEM7QUFDRCxDQUZEOztBQUlBO0FBQ0EsSUFBSSxXQUFXLFFBQVEsVUFBUixDQUFmO0FBQ0EsU0FBUyxPQUFULENBQWlCLDJCQUFqQjtBQUNBLEtBQUssU0FBUyxVQUFkO0FBQ0EsR0FBRyxFQUFILENBQU0sT0FBTixFQUFlLFFBQVEsS0FBUixDQUFjLElBQWQsQ0FBbUIsT0FBbkIsRUFBNEIsWUFBNUIsQ0FBZjs7QUFFQSxJQUFJLGFBQWEsU0FBUyxNQUFULENBQWdCO0FBQy9CLFNBQU8sTUFEd0I7QUFFL0IsVUFBUTtBQUZ1QixDQUFoQixDQUFqQjs7QUFLQSxJQUFJLE9BQU8sU0FBUyxLQUFULENBQWUsTUFBZixFQUF1QixVQUF2QixDQUFYO0FBQ0E7O0FBRUEsS0FBSyxJQUFMLENBQVUsVUFBVSxHQUFWLEVBQWUsS0FBZixFQUFzQjtBQUM5QixNQUFJLEdBQUosRUFBUztBQUFFLFdBQU8sUUFBUSxLQUFSLENBQWMsR0FBZCxDQUFQO0FBQTRCO0FBQ3ZDLFVBQVEsR0FBUixDQUFZLEtBQVo7QUFDRCxDQUhEOztBQUtBLElBQUksR0FBSixDQUFRLFFBQVIsRUFBa0IsVUFBUyxHQUFULEVBQWMsR0FBZCxFQUFtQjtBQUNuQyxXQUFTLEtBQVQsQ0FBZSxNQUFmLEVBQXVCLElBQXZCLENBQTRCLFVBQVMsR0FBVCxFQUFjLEtBQWQsRUFBcUI7QUFDL0MsUUFBSSxJQUFKLENBQVMsS0FBVDtBQUNELEdBRkQ7QUFHRCxDQUpEOztBQU1BLElBQUksSUFBSixDQUFTLFFBQVQsRUFBbUIsVUFBUyxHQUFULEVBQWMsR0FBZCxFQUFtQjtBQUNwQztBQUNBLFVBQVEsR0FBUixDQUFZLElBQUksSUFBSixDQUFTLEtBQXJCO0FBQ0EsTUFBSSxVQUFVLElBQUksSUFBSixDQUFTLEVBQUMsT0FBTyxJQUFJLElBQUosQ0FBUyxLQUFqQixFQUF3QixRQUFRLElBQUksSUFBSixDQUFTLE1BQXpDLEVBQVQsQ0FBZDtBQUNBLFVBQVEsSUFBUixDQUFhLFVBQVMsR0FBVCxFQUFjO0FBQ3pCLFFBQUksR0FBSixFQUFTO0FBQ1AsY0FBUSxHQUFSLENBQVksR0FBWjtBQUNEO0FBQ0YsR0FKRDtBQUtBLE1BQUksSUFBSixDQUFTLE9BQVQ7QUFDRCxDQVZEIiwiZmlsZSI6InNlcnZlci1kYi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vU2VydmVyIFNldHVwXG52YXIgZXhwcmVzcyA9IHJlcXVpcmUoJ2V4cHJlc3MnKTtcbnZhciBib2R5UGFyc2VyID0gcmVxdWlyZSgnYm9keS1wYXJzZXInKTtcbnZhciBQT1JUID0gcHJvY2Vzcy5lbnYuUE9SVCB8fCA4MDAwO1xudmFyIGFwcCA9IGV4cHJlc3MoKTtcbmFwcC51c2UoYm9keVBhcnNlci5qc29uKCkpO1xuYXBwLnVzZShleHByZXNzLnN0YXRpYyhfX2Rpcm5hbWUpKTtcbmFwcC5saXN0ZW4oUE9SVCwgZnVuY3Rpb24oKSB7XG4gIGNvbnNvbGUubG9nKCdsaXN0ZW5pbmcgb24gcG9ydDogJyArIFBPUlQpO1xufSk7XG5cbi8vIERCIFNldHVwXG52YXIgbW9uZ29vc2UgPSByZXF1aXJlKCdtb25nb29zZScpO1xubW9uZ29vc2UuY29ubmVjdCgnbW9uZ29kYjovL2xvY2FsaG9zdC9ib29rcycpO1xuZGIgPSBtb25nb29zZS5jb25uZWN0aW9uO1xuZGIub24oJ2Vycm9yJywgY29uc29sZS5lcnJvci5iaW5kKGNvbnNvbGUsICdjb25uIGVycm9yJykpO1xuXG52YXIgYm9va1NjaGVtYSA9IG1vbmdvb3NlLlNjaGVtYSh7XG4gIHRpdGxlOiBTdHJpbmcsXG4gIGF1dGhvcjogU3RyaW5nXG59KTtcblxudmFyIEJvb2sgPSBtb25nb29zZS5tb2RlbCgnQm9vaycsIGJvb2tTY2hlbWEpO1xuLy8gdmFyIG5ld0Jvb2sgPSBuZXcgQm9vayh7IHRpdGxlOiAnUG90dGVyJywgYXV0aG9yOiAnR29sbWFuZCcgfSk7XG5cbkJvb2suZmluZChmdW5jdGlvbiAoZXJyLCBib29rcykge1xuICBpZiAoZXJyKSB7IHJldHVybiBjb25zb2xlLmVycm9yKGVycik7IH1cbiAgY29uc29sZS5sb2coYm9va3MpO1xufSk7XG5cbmFwcC5nZXQoJy9ib29rcycsIGZ1bmN0aW9uKHJlcSwgcmVzKSB7XG4gIG1vbmdvb3NlLm1vZGVsKCdCb29rJykuZmluZChmdW5jdGlvbihlcnIsIGJvb2tzKSB7XG4gICAgcmVzLnNlbmQoYm9va3MpO1xuICB9KTtcbn0pO1xuXG5hcHAucG9zdCgnL2Jvb2tzJywgZnVuY3Rpb24ocmVxLCByZXMpIHtcbiAgLy8gY29uc29sZS5sb2cocmVzLmJvZHkpO1xuICBjb25zb2xlLmxvZyhyZXEuYm9keS50aXRsZSk7XG4gIHZhciBuZXdCb29rID0gbmV3IEJvb2soe3RpdGxlOiByZXEuYm9keS50aXRsZSwgYXV0aG9yOiByZXEuYm9keS5hdXRob3IgfSk7XG4gIG5ld0Jvb2suc2F2ZShmdW5jdGlvbihlcnIpIHtcbiAgICBpZiAoZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgIH1cbiAgfSk7XG4gIHJlcy5zZW5kKG5ld0Jvb2spO1xufSk7Il19