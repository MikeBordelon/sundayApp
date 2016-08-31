'use strict';

//Server Setup
var express = require('express');
var bodyParser = require('body-parser');
var PORT = 8000;
var app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname));

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

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
  author: String,
  thumbnail: String
});

var Book = mongoose.model('Book', bookSchema);

// Book.find(function (err, books) {
//   if (err) { return console.error(err); }
//   console.log(books);
// });

app.get('/books', function (req, res) {
  mongoose.model('Book').find(function (err, books) {
    res.send(books);
  });
});

app.post('/books', function (req, res) {
  // console.log(res.body);
  // console.log(req.body.title);
  var newBook = new Book({ title: req.body.title, author: req.body.author, thumbnail: req.body.thumbnail });

  newBook.save(function (err) {
    if (err) {
      console.log(err);
    }
  });

  res.send(newBook);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NlcnZlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0EsSUFBSSxVQUFVLFFBQVEsU0FBUixDQUFkO0FBQ0EsSUFBSSxhQUFhLFFBQVEsYUFBUixDQUFqQjtBQUNBLElBQUksT0FBTyxJQUFYO0FBQ0EsSUFBSSxNQUFNLFNBQVY7QUFDQSxJQUFJLEdBQUosQ0FBUSxXQUFXLElBQVgsRUFBUjtBQUNBLElBQUksR0FBSixDQUFRLFFBQVEsTUFBUixDQUFlLFNBQWYsQ0FBUjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUksTUFBSixDQUFXLElBQVgsRUFBaUIsWUFBVztBQUMxQixVQUFRLEdBQVIsQ0FBWSx3QkFBd0IsSUFBcEM7QUFDRCxDQUZEO0FBR0E7QUFDQSxJQUFJLFdBQVcsUUFBUSxVQUFSLENBQWY7QUFDQSxTQUFTLE9BQVQsQ0FBaUIsMkJBQWpCO0FBQ0EsS0FBSyxTQUFTLFVBQWQ7QUFDQSxHQUFHLEVBQUgsQ0FBTSxPQUFOLEVBQWUsUUFBUSxLQUFSLENBQWMsSUFBZCxDQUFtQixPQUFuQixFQUE0QixZQUE1QixDQUFmOztBQUVBLElBQUksYUFBYSxTQUFTLE1BQVQsQ0FBZ0I7QUFDL0IsU0FBTyxNQUR3QjtBQUUvQixVQUFRLE1BRnVCO0FBRy9CLGFBQVc7QUFIb0IsQ0FBaEIsQ0FBakI7O0FBTUEsSUFBSSxPQUFPLFNBQVMsS0FBVCxDQUFlLE1BQWYsRUFBdUIsVUFBdkIsQ0FBWDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJLEdBQUosQ0FBUSxRQUFSLEVBQWtCLFVBQVMsR0FBVCxFQUFjLEdBQWQsRUFBbUI7QUFDbkMsV0FBUyxLQUFULENBQWUsTUFBZixFQUF1QixJQUF2QixDQUE0QixVQUFTLEdBQVQsRUFBYyxLQUFkLEVBQXFCO0FBQy9DLFFBQUksSUFBSixDQUFTLEtBQVQ7QUFDRCxHQUZEO0FBR0QsQ0FKRDs7QUFNQSxJQUFJLElBQUosQ0FBUyxRQUFULEVBQW1CLFVBQVMsR0FBVCxFQUFjLEdBQWQsRUFBbUI7QUFDcEM7QUFDQTtBQUNBLE1BQUksVUFBVSxJQUFJLElBQUosQ0FBUyxFQUFDLE9BQU8sSUFBSSxJQUFKLENBQVMsS0FBakIsRUFBd0IsUUFBUSxJQUFJLElBQUosQ0FBUyxNQUF6QyxFQUFpRCxXQUFXLElBQUksSUFBSixDQUFTLFNBQXJFLEVBQVQsQ0FBZDs7QUFFQSxVQUFRLElBQVIsQ0FBYSxVQUFTLEdBQVQsRUFBYztBQUN6QixRQUFJLEdBQUosRUFBUztBQUNQLGNBQVEsR0FBUixDQUFZLEdBQVo7QUFDRDtBQUNGLEdBSkQ7O0FBTUEsTUFBSSxJQUFKLENBQVMsT0FBVDtBQUNELENBWkQiLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9TZXJ2ZXIgU2V0dXBcbnZhciBleHByZXNzID0gcmVxdWlyZSgnZXhwcmVzcycpO1xudmFyIGJvZHlQYXJzZXIgPSByZXF1aXJlKCdib2R5LXBhcnNlcicpO1xudmFyIFBPUlQgPSA4MDAwO1xudmFyIGFwcCA9IGV4cHJlc3MoKTtcbmFwcC51c2UoYm9keVBhcnNlci5qc29uKCkpO1xuYXBwLnVzZShleHByZXNzLnN0YXRpYyhfX2Rpcm5hbWUpKTtcblxuLy8gYXBwLnVzZShmdW5jdGlvbihyZXEsIHJlcywgbmV4dCkge1xuLy8gICByZXMuaGVhZGVyKFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luXCIsIFwiKlwiKTtcbi8vICAgcmVzLmhlYWRlcihcIkFjY2Vzcy1Db250cm9sLUFsbG93LUhlYWRlcnNcIiwgXCJPcmlnaW4sIFgtUmVxdWVzdGVkLVdpdGgsIENvbnRlbnQtVHlwZSwgQWNjZXB0XCIpO1xuLy8gICBuZXh0KCk7XG4vLyB9KTtcblxuYXBwLmxpc3RlbihQT1JULCBmdW5jdGlvbigpIHtcbiAgY29uc29sZS5sb2coJ2xpc3RlbmluZyBvbiBwb3J0OiAnICsgUE9SVCk7XG59KTtcbi8vIERCIFNldHVwXG52YXIgbW9uZ29vc2UgPSByZXF1aXJlKCdtb25nb29zZScpO1xubW9uZ29vc2UuY29ubmVjdCgnbW9uZ29kYjovL2xvY2FsaG9zdC9ib29rcycpO1xuZGIgPSBtb25nb29zZS5jb25uZWN0aW9uO1xuZGIub24oJ2Vycm9yJywgY29uc29sZS5lcnJvci5iaW5kKGNvbnNvbGUsICdjb25uIGVycm9yJykpO1xuXG52YXIgYm9va1NjaGVtYSA9IG1vbmdvb3NlLlNjaGVtYSh7XG4gIHRpdGxlOiBTdHJpbmcsXG4gIGF1dGhvcjogU3RyaW5nLFxuICB0aHVtYm5haWw6IFN0cmluZ1xufSk7XG5cbnZhciBCb29rID0gbW9uZ29vc2UubW9kZWwoJ0Jvb2snLCBib29rU2NoZW1hKTtcblxuLy8gQm9vay5maW5kKGZ1bmN0aW9uIChlcnIsIGJvb2tzKSB7XG4vLyAgIGlmIChlcnIpIHsgcmV0dXJuIGNvbnNvbGUuZXJyb3IoZXJyKTsgfVxuLy8gICBjb25zb2xlLmxvZyhib29rcyk7XG4vLyB9KTtcblxuYXBwLmdldCgnL2Jvb2tzJywgZnVuY3Rpb24ocmVxLCByZXMpIHtcbiAgbW9uZ29vc2UubW9kZWwoJ0Jvb2snKS5maW5kKGZ1bmN0aW9uKGVyciwgYm9va3MpIHtcbiAgICByZXMuc2VuZChib29rcyk7XG4gIH0pO1xufSk7XG5cbmFwcC5wb3N0KCcvYm9va3MnLCBmdW5jdGlvbihyZXEsIHJlcykge1xuICAvLyBjb25zb2xlLmxvZyhyZXMuYm9keSk7XG4gIC8vIGNvbnNvbGUubG9nKHJlcS5ib2R5LnRpdGxlKTtcbiAgdmFyIG5ld0Jvb2sgPSBuZXcgQm9vayh7dGl0bGU6IHJlcS5ib2R5LnRpdGxlLCBhdXRob3I6IHJlcS5ib2R5LmF1dGhvciwgdGh1bWJuYWlsOiByZXEuYm9keS50aHVtYm5haWwgfSk7XG5cbiAgbmV3Qm9vay5zYXZlKGZ1bmN0aW9uKGVycikge1xuICAgIGlmIChlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgfVxuICB9KTtcblxuICByZXMuc2VuZChuZXdCb29rKTtcbn0pOyJdfQ==