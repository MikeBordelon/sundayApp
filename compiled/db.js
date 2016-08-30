// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/books');
// var db = mongoose.connection;
// var Book = mongoose.model('book', bookSchema);
// db.on('error', console.error.bind(console, 'connection error'));

// db.once('open', function () {
//   var bookSchema = mongoose.schema({
//     title: String,
//     author: Number
//   });

// });

// var newBook = new Book({ title: 'Potter' });
// console.log(newBook.title);

// newBook.save(function(err, newBook) {
//   if (err) {
//     return console.error(err);
//   }
//   console.log('saved');
// });

// Book.find(function(err, books) {
//   if (err) {
//     return console.error(err);
//   }
//   console.log(books);
// });


// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/test');
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error: '));
// db.once('open', console.log.bind(console, 'Mongodb connetion open'));

// var kittySchema = mongoose.Schema({
//     name: String
// });

// var Kitten = mongoose.model('Kitten', kittySchema);


// module.exports.Book = Book;
"use strict";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2RiLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7QUFJQSIsImZpbGUiOiJkYi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHZhciBtb25nb29zZSA9IHJlcXVpcmUoJ21vbmdvb3NlJyk7XG4vLyBtb25nb29zZS5jb25uZWN0KCdtb25nb2RiOi8vbG9jYWxob3N0L2Jvb2tzJyk7XG4vLyB2YXIgZGIgPSBtb25nb29zZS5jb25uZWN0aW9uO1xuLy8gdmFyIEJvb2sgPSBtb25nb29zZS5tb2RlbCgnYm9vaycsIGJvb2tTY2hlbWEpO1xuLy8gZGIub24oJ2Vycm9yJywgY29uc29sZS5lcnJvci5iaW5kKGNvbnNvbGUsICdjb25uZWN0aW9uIGVycm9yJykpO1xuXG4vLyBkYi5vbmNlKCdvcGVuJywgZnVuY3Rpb24gKCkge1xuLy8gICB2YXIgYm9va1NjaGVtYSA9IG1vbmdvb3NlLnNjaGVtYSh7XG4vLyAgICAgdGl0bGU6IFN0cmluZyxcbi8vICAgICBhdXRob3I6IE51bWJlclxuLy8gICB9KTtcblxuLy8gfSk7XG5cbi8vIHZhciBuZXdCb29rID0gbmV3IEJvb2soeyB0aXRsZTogJ1BvdHRlcicgfSk7XG4vLyBjb25zb2xlLmxvZyhuZXdCb29rLnRpdGxlKTtcblxuLy8gbmV3Qm9vay5zYXZlKGZ1bmN0aW9uKGVyciwgbmV3Qm9vaykge1xuLy8gICBpZiAoZXJyKSB7XG4vLyAgICAgcmV0dXJuIGNvbnNvbGUuZXJyb3IoZXJyKTtcbi8vICAgfVxuLy8gICBjb25zb2xlLmxvZygnc2F2ZWQnKTtcbi8vIH0pO1xuXG4vLyBCb29rLmZpbmQoZnVuY3Rpb24oZXJyLCBib29rcykge1xuLy8gICBpZiAoZXJyKSB7XG4vLyAgICAgcmV0dXJuIGNvbnNvbGUuZXJyb3IoZXJyKTtcbi8vICAgfVxuLy8gICBjb25zb2xlLmxvZyhib29rcyk7XG4vLyB9KTtcblxuXG4vLyB2YXIgbW9uZ29vc2UgPSByZXF1aXJlKCdtb25nb29zZScpO1xuLy8gbW9uZ29vc2UuY29ubmVjdCgnbW9uZ29kYjovL2xvY2FsaG9zdC90ZXN0Jyk7XG4vLyB2YXIgZGIgPSBtb25nb29zZS5jb25uZWN0aW9uO1xuLy8gZGIub24oJ2Vycm9yJywgY29uc29sZS5lcnJvci5iaW5kKGNvbnNvbGUsICdjb25uZWN0aW9uIGVycm9yOiAnKSk7XG4vLyBkYi5vbmNlKCdvcGVuJywgY29uc29sZS5sb2cuYmluZChjb25zb2xlLCAnTW9uZ29kYiBjb25uZXRpb24gb3BlbicpKTtcblxuLy8gdmFyIGtpdHR5U2NoZW1hID0gbW9uZ29vc2UuU2NoZW1hKHtcbi8vICAgICBuYW1lOiBTdHJpbmdcbi8vIH0pO1xuXG4vLyB2YXIgS2l0dGVuID0gbW9uZ29vc2UubW9kZWwoJ0tpdHRlbicsIGtpdHR5U2NoZW1hKTtcblxuXG5cbi8vIG1vZHVsZS5leHBvcnRzLkJvb2sgPSBCb29rO1xuIl19