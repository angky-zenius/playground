const { workerData, parrentPort } = require('worker_threads');
const counter = require('./counter.js');

parrentPort.on('message', (task) => {
  let result = counter.addUp(workerData);
  let message = `total: ${result}`;
  parrentPort.postMessage(message);
});
