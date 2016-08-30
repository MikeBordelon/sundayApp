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

app.listen(PORT, function() {
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

app.get('/books', function(req, res) {
  mongoose.model('Book').find(function(err, books) {
    res.send(books);
  });
});

app.post('/books', function(req, res) {
  console.log('something happened');
  // console.log(res.body);
  // console.log(req.body.title);
  var newBook = new Book({title: req.body.title, author: req.body.author, thumbnail: req.body.thumbnail });

  newBook.save(function(err) {
    if (err) {
      console.log(err);
    }
  });

  res.send(newBook);
});