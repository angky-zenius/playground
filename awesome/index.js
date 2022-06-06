const Todos = require('todos');
const handleBars = require("handlebars");
const utf8 = require('utf8');

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

function todos() {
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

function handleBarTest() {
  const invitationJson = {
    eventType: "V_EVENT",
    dateStart: "2020-01-01T01:00:00Z",
    dateEnd: "2020-01-01T01:00:00Z",
    summary: "Belajar Memask"
  };
  const invitationTemplate = "BEGIN:VCALENDAR\n"
    + "VERSION:2.0\n"
    + "PRODID:-//hacksw/handcal//NONSGML v1.0//EN\n"
    + "BEGIN:{{eventType}}\n"
    + "DTSTART:{{dateStart}}\n"
    + "DTEND:{{dateEnd}}\n"
    + "SUMMARY:{{summary}}\n"
    + "END:VEVENT\n"
    + "END:VCALENDAR";
  const invitationJsonTest = {
    name: "Angky Cahaya Putra"
  };
  const invitationTemplateTest = "<p>{{name}}</p>";
  const source = handleBars.compile(invitationTemplate);
  const invitation = source(invitationJson);
  console.log(invitation);
}

function main() {
  const sample = "https://mozilla.org/?x=шеллы";
  const encode = utf8.encode(sample);
  console.log(encode);
  const decode = utf8.decode(encode);
  console.log(decode);
}

main();
