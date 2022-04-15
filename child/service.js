const { workerData, parentPort, isMainThread, getEnvironmentData } = require('worker_threads');
const counter = require('./counter.js');

let stage = getEnvironmentData('stage');
console.log(`Running service on: ${stage}`);
let result = counter.addUp(workerData);
let message = `total: ${result}`;
parentPort.postMessage(message);
