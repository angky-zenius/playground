const counter = require('./counter.js');

process.on('message', (message) => {
  if (message === 'START') {
    console.log('Starting...');
    let result = counter.addUp(process.argv[2]);
    let message = `total: ${result}`;
    process.send(message);
  }
});
