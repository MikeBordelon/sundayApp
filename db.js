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
