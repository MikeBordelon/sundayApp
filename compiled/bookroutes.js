// var mongoose = require('mongoose');
// // make a book DB

// mongoose.connect('mongodb://localhost/books');
// // var Book = require('./db').Book;

// // var router = express.Router();

// db = mongoose.connection;
// db.on('error', console.error.bind(console, 'conn error'));

// // db.once('open', function() {
//   var bookSchema = mongoose.Schema({
//     title: String,
//     author: String
//   });

// //schema - bookSchema
// // model - Book
// // instance - newBook
// var Book = mongoose.model('Book', bookSchema);

// var newBook = new Book({ title: 'Potter', author: 'Golmand' });


//   // newBook.save(function (err, newBook) {
//   //   if (err) { return console.error(err); }
//   // });


//   Book.find(function (err, books) {
//     if (err) { return console.error(err); }
//     console.log(books);
//   });


// // });

// // var bookSchema = mongoose.Schema({
// //   title: String,
// //   author: String
// // });
// var Book = mongoose.model('Book', bookSchema);


// router.get('/', function(req, res) {
//   mongoose.model('Book').find(function(err, books) {
//     res.send(books);
//   });
// });
"use strict";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2Jvb2tyb3V0ZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJib29rcm91dGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdmFyIG1vbmdvb3NlID0gcmVxdWlyZSgnbW9uZ29vc2UnKTtcbi8vIC8vIG1ha2UgYSBib29rIERCXG5cbi8vIG1vbmdvb3NlLmNvbm5lY3QoJ21vbmdvZGI6Ly9sb2NhbGhvc3QvYm9va3MnKTtcbi8vIC8vIHZhciBCb29rID0gcmVxdWlyZSgnLi9kYicpLkJvb2s7XG5cbi8vIC8vIHZhciByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xuXG4vLyBkYiA9IG1vbmdvb3NlLmNvbm5lY3Rpb247XG4vLyBkYi5vbignZXJyb3InLCBjb25zb2xlLmVycm9yLmJpbmQoY29uc29sZSwgJ2Nvbm4gZXJyb3InKSk7XG5cbi8vIC8vIGRiLm9uY2UoJ29wZW4nLCBmdW5jdGlvbigpIHtcbi8vICAgdmFyIGJvb2tTY2hlbWEgPSBtb25nb29zZS5TY2hlbWEoe1xuLy8gICAgIHRpdGxlOiBTdHJpbmcsXG4vLyAgICAgYXV0aG9yOiBTdHJpbmdcbi8vICAgfSk7XG5cbi8vIC8vc2NoZW1hIC0gYm9va1NjaGVtYVxuLy8gLy8gbW9kZWwgLSBCb29rXG4vLyAvLyBpbnN0YW5jZSAtIG5ld0Jvb2tcbi8vIHZhciBCb29rID0gbW9uZ29vc2UubW9kZWwoJ0Jvb2snLCBib29rU2NoZW1hKTtcblxuLy8gdmFyIG5ld0Jvb2sgPSBuZXcgQm9vayh7IHRpdGxlOiAnUG90dGVyJywgYXV0aG9yOiAnR29sbWFuZCcgfSk7XG5cblxuLy8gICAvLyBuZXdCb29rLnNhdmUoZnVuY3Rpb24gKGVyciwgbmV3Qm9vaykge1xuLy8gICAvLyAgIGlmIChlcnIpIHsgcmV0dXJuIGNvbnNvbGUuZXJyb3IoZXJyKTsgfVxuLy8gICAvLyB9KTtcblxuXG4vLyAgIEJvb2suZmluZChmdW5jdGlvbiAoZXJyLCBib29rcykge1xuLy8gICAgIGlmIChlcnIpIHsgcmV0dXJuIGNvbnNvbGUuZXJyb3IoZXJyKTsgfVxuLy8gICAgIGNvbnNvbGUubG9nKGJvb2tzKTtcbi8vICAgfSk7XG5cblxuLy8gLy8gfSk7XG5cbi8vIC8vIHZhciBib29rU2NoZW1hID0gbW9uZ29vc2UuU2NoZW1hKHtcbi8vIC8vICAgdGl0bGU6IFN0cmluZyxcbi8vIC8vICAgYXV0aG9yOiBTdHJpbmdcbi8vIC8vIH0pO1xuLy8gdmFyIEJvb2sgPSBtb25nb29zZS5tb2RlbCgnQm9vaycsIGJvb2tTY2hlbWEpO1xuXG5cbi8vIHJvdXRlci5nZXQoJy8nLCBmdW5jdGlvbihyZXEsIHJlcykge1xuLy8gICBtb25nb29zZS5tb2RlbCgnQm9vaycpLmZpbmQoZnVuY3Rpb24oZXJyLCBib29rcykge1xuLy8gICAgIHJlcy5zZW5kKGJvb2tzKTtcbi8vICAgfSk7XG4vLyB9KTtcblxuXG5cbiJdfQ==