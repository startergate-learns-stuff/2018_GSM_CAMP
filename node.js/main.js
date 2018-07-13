var http = require('http');

http.createServer(function (req, res) {
  res.write(Math.random().toString());
  res.end();
}).listen(1337);
