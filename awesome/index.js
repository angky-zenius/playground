const Todos = require('todos');

function getStatus(completed) {
  if (completed === undefined || completed == false) {
    return 'Incomplete';
  }
  return 'Completed';
}

function print(todos) {
    let todoList = todos.list();
    todoList.forEach((todo) => {
      console.log(`TODO: ${todo.title} | Status: ${getStatus(todo.completed)}`);
    });
}

function main() {
  const todos = new Todos();

  let message1 = 'You can do it!';
  let message2 = 'You always do!';
  let message3 = 'Keep going!';

  todos.add(message1);
  todos.add(message2);
  todos.add(message3);
  todos.complete(message1);
  print(todos);
}

main();
