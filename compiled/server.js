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
  console.log('something happened');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NlcnZlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0EsSUFBSSxVQUFVLFFBQVEsU0FBUixDQUFkO0FBQ0EsSUFBSSxhQUFhLFFBQVEsYUFBUixDQUFqQjtBQUNBLElBQUksT0FBTyxJQUFYO0FBQ0EsSUFBSSxNQUFNLFNBQVY7QUFDQSxJQUFJLEdBQUosQ0FBUSxXQUFXLElBQVgsRUFBUjtBQUNBLElBQUksR0FBSixDQUFRLFFBQVEsTUFBUixDQUFlLFNBQWYsQ0FBUjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUksTUFBSixDQUFXLElBQVgsRUFBaUIsWUFBVztBQUMxQixVQUFRLEdBQVIsQ0FBWSx3QkFBd0IsSUFBcEM7QUFDRCxDQUZEO0FBR0E7QUFDQSxJQUFJLFdBQVcsUUFBUSxVQUFSLENBQWY7QUFDQSxTQUFTLE9BQVQsQ0FBaUIsMkJBQWpCO0FBQ0EsS0FBSyxTQUFTLFVBQWQ7QUFDQSxHQUFHLEVBQUgsQ0FBTSxPQUFOLEVBQWUsUUFBUSxLQUFSLENBQWMsSUFBZCxDQUFtQixPQUFuQixFQUE0QixZQUE1QixDQUFmOztBQUVBLElBQUksYUFBYSxTQUFTLE1BQVQsQ0FBZ0I7QUFDL0IsU0FBTyxNQUR3QjtBQUUvQixVQUFRLE1BRnVCO0FBRy9CLGFBQVc7QUFIb0IsQ0FBaEIsQ0FBakI7O0FBTUEsSUFBSSxPQUFPLFNBQVMsS0FBVCxDQUFlLE1BQWYsRUFBdUIsVUFBdkIsQ0FBWDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJLEdBQUosQ0FBUSxRQUFSLEVBQWtCLFVBQVMsR0FBVCxFQUFjLEdBQWQsRUFBbUI7QUFDbkMsV0FBUyxLQUFULENBQWUsTUFBZixFQUF1QixJQUF2QixDQUE0QixVQUFTLEdBQVQsRUFBYyxLQUFkLEVBQXFCO0FBQy9DLFFBQUksSUFBSixDQUFTLEtBQVQ7QUFDRCxHQUZEO0FBR0QsQ0FKRDs7QUFNQSxJQUFJLElBQUosQ0FBUyxRQUFULEVBQW1CLFVBQVMsR0FBVCxFQUFjLEdBQWQsRUFBbUI7QUFDcEMsVUFBUSxHQUFSLENBQVksb0JBQVo7QUFDQTtBQUNBO0FBQ0EsTUFBSSxVQUFVLElBQUksSUFBSixDQUFTLEVBQUMsT0FBTyxJQUFJLElBQUosQ0FBUyxLQUFqQixFQUF3QixRQUFRLElBQUksSUFBSixDQUFTLE1BQXpDLEVBQWlELFdBQVcsSUFBSSxJQUFKLENBQVMsU0FBckUsRUFBVCxDQUFkOztBQUVBLFVBQVEsSUFBUixDQUFhLFVBQVMsR0FBVCxFQUFjO0FBQ3pCLFFBQUksR0FBSixFQUFTO0FBQ1AsY0FBUSxHQUFSLENBQVksR0FBWjtBQUNEO0FBQ0YsR0FKRDs7QUFNQSxNQUFJLElBQUosQ0FBUyxPQUFUO0FBQ0QsQ0FiRCIsImZpbGUiOiJzZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL1NlcnZlciBTZXR1cFxudmFyIGV4cHJlc3MgPSByZXF1aXJlKCdleHByZXNzJyk7XG52YXIgYm9keVBhcnNlciA9IHJlcXVpcmUoJ2JvZHktcGFyc2VyJyk7XG52YXIgUE9SVCA9IDgwMDA7XG52YXIgYXBwID0gZXhwcmVzcygpO1xuYXBwLnVzZShib2R5UGFyc2VyLmpzb24oKSk7XG5hcHAudXNlKGV4cHJlc3Muc3RhdGljKF9fZGlybmFtZSkpO1xuXG4vLyBhcHAudXNlKGZ1bmN0aW9uKHJlcSwgcmVzLCBuZXh0KSB7XG4vLyAgIHJlcy5oZWFkZXIoXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW5cIiwgXCIqXCIpO1xuLy8gICByZXMuaGVhZGVyKFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctSGVhZGVyc1wiLCBcIk9yaWdpbiwgWC1SZXF1ZXN0ZWQtV2l0aCwgQ29udGVudC1UeXBlLCBBY2NlcHRcIik7XG4vLyAgIG5leHQoKTtcbi8vIH0pO1xuXG5hcHAubGlzdGVuKFBPUlQsIGZ1bmN0aW9uKCkge1xuICBjb25zb2xlLmxvZygnbGlzdGVuaW5nIG9uIHBvcnQ6ICcgKyBQT1JUKTtcbn0pO1xuLy8gREIgU2V0dXBcbnZhciBtb25nb29zZSA9IHJlcXVpcmUoJ21vbmdvb3NlJyk7XG5tb25nb29zZS5jb25uZWN0KCdtb25nb2RiOi8vbG9jYWxob3N0L2Jvb2tzJyk7XG5kYiA9IG1vbmdvb3NlLmNvbm5lY3Rpb247XG5kYi5vbignZXJyb3InLCBjb25zb2xlLmVycm9yLmJpbmQoY29uc29sZSwgJ2Nvbm4gZXJyb3InKSk7XG5cbnZhciBib29rU2NoZW1hID0gbW9uZ29vc2UuU2NoZW1hKHtcbiAgdGl0bGU6IFN0cmluZyxcbiAgYXV0aG9yOiBTdHJpbmcsXG4gIHRodW1ibmFpbDogU3RyaW5nXG59KTtcblxudmFyIEJvb2sgPSBtb25nb29zZS5tb2RlbCgnQm9vaycsIGJvb2tTY2hlbWEpO1xuXG4vLyBCb29rLmZpbmQoZnVuY3Rpb24gKGVyciwgYm9va3MpIHtcbi8vICAgaWYgKGVycikgeyByZXR1cm4gY29uc29sZS5lcnJvcihlcnIpOyB9XG4vLyAgIGNvbnNvbGUubG9nKGJvb2tzKTtcbi8vIH0pO1xuXG5hcHAuZ2V0KCcvYm9va3MnLCBmdW5jdGlvbihyZXEsIHJlcykge1xuICBtb25nb29zZS5tb2RlbCgnQm9vaycpLmZpbmQoZnVuY3Rpb24oZXJyLCBib29rcykge1xuICAgIHJlcy5zZW5kKGJvb2tzKTtcbiAgfSk7XG59KTtcblxuYXBwLnBvc3QoJy9ib29rcycsIGZ1bmN0aW9uKHJlcSwgcmVzKSB7XG4gIGNvbnNvbGUubG9nKCdzb21ldGhpbmcgaGFwcGVuZWQnKTtcbiAgLy8gY29uc29sZS5sb2cocmVzLmJvZHkpO1xuICAvLyBjb25zb2xlLmxvZyhyZXEuYm9keS50aXRsZSk7XG4gIHZhciBuZXdCb29rID0gbmV3IEJvb2soe3RpdGxlOiByZXEuYm9keS50aXRsZSwgYXV0aG9yOiByZXEuYm9keS5hdXRob3IsIHRodW1ibmFpbDogcmVxLmJvZHkudGh1bWJuYWlsIH0pO1xuXG4gIG5ld0Jvb2suc2F2ZShmdW5jdGlvbihlcnIpIHtcbiAgICBpZiAoZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmVzLnNlbmQobmV3Qm9vayk7XG59KTsiXX0=