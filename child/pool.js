const { AsyncResource } = require('async_hooks');
const { EventEmitter } = require('events');
const path = require('path');
const { Worker } = require('worker_threads');

const kTaskInfo = Symbol('kTaskInfo');
const kWorkerFreedEvent = Symbol('kWorkerFreedEvent');

class WorkerPoolTaskInfo extends AsyncResource {

  constructor(callback) {
    super('WorkerPoolTaskInfo');
    this.callback = callback;
  }

  done(err, result) {
    this.runInAsyncScope(this.callback, null, err, result);
    this.emitDestroy();
  }

}

class WorkerPool extends EventEmitter {

  constructor(numThreads) {
    super();
    this.numThreads = numThreads;
    this.workers = [];
    this.freeWorkers = [];
    this.task = [];

    for (let i = 0; i < numThreads; i++) {
      this.addNewWorker();
    }

    this.on(kWorkerFreedEvent, () => {
      if (this.task.length > 0) {
        const { task, callback } = this.task.shift();
        this.runTask(task, callback);
      }
    });

  }

  addNewWorker() {
    const worker = new Worker(path.resolve(__dirname, 'service_pool.js'));
    worker.on('message', (result) => {
      worker[kTaskInfo].done(null, result);
      worker[kTaskInfo] = null;
      this.freeWorkers.push(worker);
      this.emit(kWorkerFreedEvent);
    });
    worker.on('error', (err) => {
      if (worker[kTaskInfo]) {
        worker[kTaskInfo].done(err, null);
      } else {
        this.emit('error', err);
      }
      this.workers.splice(this.workers.indexOf(worker), 1);
      this.addNewWorker(worker);
    });
    this.workers.push(worker);
    this.freeWorkers.push(worker);
    this.emit(kWorkerFreedEvent);
  }

  runTask(task, callback) {
    if (this.freeWorkers.length === 0) {
      this.task.push({task, callback});
      return;
    }
    const worker = this.freeWorker.pop();
    worker[kTaskInfo] = new WorkerPoolTaskInfo(callback);
    worker.postMessage(task);
  }

  close() {
    for (const worker of this.workers) {
      worker.terminate();
    }
  }

}

module.exports = WorkerPool;
