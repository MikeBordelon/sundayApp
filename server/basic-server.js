var http = require('http');
var port = 3000;
var ip = '127.0.0.1';
var statusCode = 200;
var headers = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10,
  'content-type': 'application/json'
};



var data = [{title: 'Avengers', genre: 'Action' }, {title: 'The Expendables', genre: 'Action'}, {title: 'The Notebook', genre: 'Romantic'}];

var server = http.createServer(function(req, res) {
  if (req.method === 'GET') {
    res.writeHead(statusCode, headers);
    res.end(JSON.stringify(data));
  } else {
    res.writeHead(404, headers);
    res.end('404 sowwy');
  }
});


server.listen(port, ip);