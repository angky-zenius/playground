const Todos = require('./index');
const assert = require('assert').strict;

describe('Test todo', function() {
  it ("should add TODOs", function() {
    let todos = new Todos();
    assert.strictEqual(todos.list().length, 0);

    let message1 = {completed: false, title: 'You can do it!'};
    let message2 = {completed: false, title: 'You always do!'};
    let message3 = {completed: false, title: 'Keep going!'};
    let messages = [message1, message2, message3];
    todos.add(messages[0].title);
    todos.add(messages[1].title);
    todos.add(messages[2].title);
    assert.deepStrictEqual(todos.list(), messages);
    assert.strictEqual(todos.list().length, 3);
  });
  it ("should complete TODO", function() {
    let todos = new Todos();
    assert.strictEqual(todos.list().length, 0);

    let message1 = {completed: false, title: 'You can do it!'};
    let message2 = {completed: false, title: 'You always do!'};
    let message3 = {completed: false, title: 'Keep going!'};
    let messages = [message1, message2, message3];
    todos.add(messages[0].title);
    todos.add(messages[1].title);
    todos.add(messages[2].title);
    todos.complete(messages[1].title);
    messages[1].completed = true;
    assert.deepStrictEqual(todos.list(), messages);
    assert.strictEqual(todos.list().length, 3);
  });
});
