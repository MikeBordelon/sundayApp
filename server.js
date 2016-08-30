var express = require('express');
var app = express();
// var router = express.Router();
var bodyParser = require('body-parser');
var routes = require('./routes');
var PORT = process.env.PORT || 8000;

routes(app);
app.use(bodyParser.json());
app.use(express.static(__dirname));

app.listen(PORT, function() {
  console.log('listening on port: ' + PORT);
});

