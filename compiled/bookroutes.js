'use strict';

var mongoose = require('mongoose');
// make a book DB
var Book = require('./db').Book;
var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  res.send('hello from get');
});

router.post('/', function (req, res) {
  var book = new Book(req.body);
  book.save(function (err) {
    if (err) {
      console.log(err);
    }
  });
  res.send(res.body);
});

module.exports = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2Jvb2tyb3V0ZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJLFdBQVcsUUFBUSxVQUFSLENBQWY7QUFDQTtBQUNBLElBQUksT0FBTyxRQUFRLE1BQVIsRUFBZ0IsSUFBM0I7QUFDQSxJQUFJLFVBQVUsUUFBUSxTQUFSLENBQWQ7QUFDQSxJQUFJLFNBQVMsUUFBUSxNQUFSLEVBQWI7O0FBRUEsT0FBTyxHQUFQLENBQVcsR0FBWCxFQUFnQixVQUFTLEdBQVQsRUFBYyxHQUFkLEVBQW1CO0FBQ2pDLE1BQUksSUFBSixDQUFTLGdCQUFUO0FBQ0QsQ0FGRDs7QUFJQSxPQUFPLElBQVAsQ0FBWSxHQUFaLEVBQWlCLFVBQVMsR0FBVCxFQUFjLEdBQWQsRUFBbUI7QUFDbEMsTUFBSSxPQUFPLElBQUksSUFBSixDQUFTLElBQUksSUFBYixDQUFYO0FBQ0EsT0FBSyxJQUFMLENBQVUsVUFBUyxHQUFULEVBQWM7QUFDdEIsUUFBSSxHQUFKLEVBQVM7QUFDUCxjQUFRLEdBQVIsQ0FBWSxHQUFaO0FBQ0Q7QUFDRixHQUpEO0FBS0EsTUFBSSxJQUFKLENBQVMsSUFBSSxJQUFiO0FBQ0QsQ0FSRDs7QUFVQSxPQUFPLE9BQVAsR0FBaUIsTUFBakIiLCJmaWxlIjoiYm9va3JvdXRlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBtb25nb29zZSA9IHJlcXVpcmUoJ21vbmdvb3NlJyk7XG4vLyBtYWtlIGEgYm9vayBEQlxudmFyIEJvb2sgPSByZXF1aXJlKCcuL2RiJykuQm9vaztcbnZhciBleHByZXNzID0gcmVxdWlyZSgnZXhwcmVzcycpO1xudmFyIHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XG5cbnJvdXRlci5nZXQoJy8nLCBmdW5jdGlvbihyZXEsIHJlcykge1xuICByZXMuc2VuZCgnaGVsbG8gZnJvbSBnZXQnKTtcbn0pO1xuXG5yb3V0ZXIucG9zdCgnLycsIGZ1bmN0aW9uKHJlcSwgcmVzKSB7XG4gIHZhciBib29rID0gbmV3IEJvb2socmVxLmJvZHkpO1xuICBib29rLnNhdmUoZnVuY3Rpb24oZXJyKSB7XG4gICAgaWYgKGVycikge1xuICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICB9XG4gIH0pO1xuICByZXMuc2VuZChyZXMuYm9keSk7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXI7Il19