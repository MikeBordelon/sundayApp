var mongoose = require('mongoose');
// make a book DB
var Book = require('./db').Book;
var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.send('hello from get');
});

router.post('/', function(req, res) {
  var book = new Book(req.body);
  book.save(function(err) {
    if (err) {
      console.log(err);
    }
  });
  res.send(res.body);
});

module.exports = router;