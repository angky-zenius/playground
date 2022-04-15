const http = require('http')
const url = require('url');
const dateModule = require('./util.js');

const callback = function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});

  let q = url.parse(req.url, true);
  let year = q.query.year;
  let month = q.query.month;
  let host = q.host;
  let pathname = q.pathname;
  let search = q.search;
  let response = year + ' | ' + month + ' | ' + host + ' | ' + pathname + ' | ' + search;
  res.write(response);

  res.end();
}

http.createServer(callback).listen(8080);
