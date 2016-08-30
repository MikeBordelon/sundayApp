'use strict';

var express = require('express');
var app = express();
// var router = express.Router();
var bodyParser = require('body-parser');
var routes = require('./routes');
var PORT = process.env.PORT || 8000;

routes(app);
app.use(bodyParser.json());
app.use(express.static(__dirname));

app.listen(PORT, function () {
  console.log('listening on port: ' + PORT);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NlcnZlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLElBQUksVUFBVSxRQUFRLFNBQVIsQ0FBZDtBQUNBLElBQUksTUFBTSxTQUFWO0FBQ0E7QUFDQSxJQUFJLGFBQWEsUUFBUSxhQUFSLENBQWpCO0FBQ0EsSUFBSSxTQUFTLFFBQVEsVUFBUixDQUFiO0FBQ0EsSUFBSSxPQUFPLFFBQVEsR0FBUixDQUFZLElBQVosSUFBb0IsSUFBL0I7O0FBRUEsT0FBTyxHQUFQO0FBQ0EsSUFBSSxHQUFKLENBQVEsV0FBVyxJQUFYLEVBQVI7QUFDQSxJQUFJLEdBQUosQ0FBUSxRQUFRLE1BQVIsQ0FBZSxTQUFmLENBQVI7O0FBRUEsSUFBSSxNQUFKLENBQVcsSUFBWCxFQUFpQixZQUFXO0FBQzFCLFVBQVEsR0FBUixDQUFZLHdCQUF3QixJQUFwQztBQUNELENBRkQiLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGV4cHJlc3MgPSByZXF1aXJlKCdleHByZXNzJyk7XG52YXIgYXBwID0gZXhwcmVzcygpO1xuLy8gdmFyIHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XG52YXIgYm9keVBhcnNlciA9IHJlcXVpcmUoJ2JvZHktcGFyc2VyJyk7XG52YXIgcm91dGVzID0gcmVxdWlyZSgnLi9yb3V0ZXMnKTtcbnZhciBQT1JUID0gcHJvY2Vzcy5lbnYuUE9SVCB8fCA4MDAwO1xuXG5yb3V0ZXMoYXBwKTtcbmFwcC51c2UoYm9keVBhcnNlci5qc29uKCkpO1xuYXBwLnVzZShleHByZXNzLnN0YXRpYyhfX2Rpcm5hbWUpKTtcblxuYXBwLmxpc3RlbihQT1JULCBmdW5jdGlvbigpIHtcbiAgY29uc29sZS5sb2coJ2xpc3RlbmluZyBvbiBwb3J0OiAnICsgUE9SVCk7XG59KTtcblxuIl19