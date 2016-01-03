var express = require('express');
var app = express();
var PORT = 8181;

app.get('/json', function (request, response) {
  response.json({
    message: 'Welcome, JSON!'
  });
});

// http://expressjs.com/en/api.html#res.jsonp
app.get('/jsonp', function (request, response) {
  response.jsonp({
    message: 'Welcome, JSONP!'
  });
});

// Middleware that enables CORS
app.use(function (request, response, next) {
  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/cors', function (request, response) {
  response.jsonp({
    message: 'Welcome, CORS!'
  });
});

var server = app.listen(PORT, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Server listening at http://%s:%s', host, port);
});
