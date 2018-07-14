/*jshint esversion: 6 */

var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function(req, res) {
  var _url = url.parse(req.url, true).query;
  fs.readdir('./data', function(err2, files){
    var list = "";
    for (var i = 0; i < files.length; i++) {
      list = list + "<li><a href=./?id=" + files[i] + ">" + files[i] + "</a></li>";
    }
    fs.readFile(`./data/${_url.id}`, 'utf8', function(err,desc){
      var title=_url.id;
      if (!desc) {
        title = "Welcome";
        desc = "Hello, Node.js";
      }
      res.write(`
        <!doctype html>
        <html>
          <head>
            <title>WEB1 - ${title}</title>
            <meta charset="utf-8">
          </head>
          <body>
            <h1><a href="./">WEB</a></h1>
            <ol>
              ${list}
            </ol>
            <h2>${title}</h2>
            <p>${desc}</p>
          </body>
        </html>
      `);
      res.end();
    });
  });
}).listen(1337);
