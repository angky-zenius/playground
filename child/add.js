const { EventEmitter } = require('events');

class AddManager extends EventEmitter {

  constructor() {
    super();
  }

  addUp(limit) {
    let counter = 0;
    while (counter < limit) {
      counter++;
    }
    return counter;
  }

  start(limit) {
    if (isNaN(limit)) {
      this.emit('error', new Error('Limit has to be number'));
      return;
    }
    let total = addUp(limit);
    this.emit('total', total);
  }

}
