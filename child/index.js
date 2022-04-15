const http = require('http');
const url = require('url');
const handler = require('./handler.js');

const host = 'localhost';
const port = 8080;


const requestListener = function(req, res) {
  let q = url.parse(req.url, true);
  let pathname = q.pathname;
  if (pathname === '/total/') {
    let onTotalSuccess = (message) => {
      console.log('Returning /total results');
      res.setHeader('Content-Type', 'application/json');
      res.writeHead(200);
      res.end(message);
    };
    handler.total(onTotalSuccess);
  } else if (pathname === '/worker/') {
    let onWorkerSuccess = (message) => {
      res.setHeader('Content-Type', 'application/json');
      res.writeHead(200);
      res.write(message);
      res.end();
    };
    let onWorkerError = (error) => {
        res.setHeader('Content-Type', 'application/json');
        res.writeHead(500);
        res.end();
    };
    let onWorkerExit = (code) => {
      if (code !== 0) {
        reject(new Error(`Worker stopped with exit code ${code}`));
      }
      res.end();
    };
    handler.worker(onWorkerSuccess, onWorkerError, onWorkerExit, q);
  } else if (pathname === '/hello') {
    console.log('Returning /hello results');
    res.setHeader('Content-Type', 'application/json');
    res.writeHead(200);
    res.end(`{"message":"hello"}`);
  }
}

const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
