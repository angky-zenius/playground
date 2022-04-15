const { fork } = require('child_process');
const { Worker, workerData, setEnvironmentData } = require('worker_threads');
// const WorkerPool = require('./pool.js');
const os = require('os');

const MAX_THREAD_COUNT = 4;

// const pool = new WorkerPool(MAX_THREAD_COUNT);

exports.total = function(onTotalSuccess) {
  const child = fork(__dirname + '/count', [q.query.limit]);
  child.on('message', onTotalSuccess);
}

exports.worker = function(onWorkerSuccess, onWorkerError, onWorkerExit, q) {
  setEnvironmentData('stage', '_dev');
  return new Promise((resolve, reject) => {
    const worker = new Worker('./service.js', { workerData: q.query.limit });
    worker.on('message', onWorkerSuccess);
    worker.on('error', onWorkerError);
    worker.on('exit', (code) => {
      if (code !== 0) {
        reject(new Error(`Worker stopped with exit code ${code}`));
      }
    })
  });
}

exports.pool = function(onWorkerSuccess, onWorkerError, onWorkerExit, q) {
}

exports.hello = () => {
    console.log('Returning /hello results');
    res.setHeader('Content-Type', 'application/json');
    res.writeHead(200);
    res.end(`{"message":"hello"}`);
}
