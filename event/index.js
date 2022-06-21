// const TicketManager = require('./ticketManager.js');
// const EmailService = require('./emailService.js');
// const DatabaseService = require('./databaseService.js');

// const ticketManager = new TicketManager(3);
// const emailService = new EmailService();
// const databaseService = new DatabaseService();

// const onBuy = (email, price, timestamp) => {
//   emailService.send(email);
//   databaseService.save(email, price, timestamp)
// };

// ticketManager.on('buy', onBuy);
// ticketManager.on('buy', onBuy);

// ticketManager.on('error', (error) => {
//   console.error(`Problems buying ticket, ${error}`);
// });

// console.log(`We have ${ticketManager.listenerCount('buy')} buy listener(s)`);
// console.log(`We have ${ticketManager.listenerCount('error')} error listener(s)`);

// ticketManager.buy('angky@gmail.com', 100000);
// ticketManager.buy('angky@gmail.com', 200000);
// ticketManager.buy('angky@gmail.com', 300000);
// ticketManager.buy('angky@gmail.com', 400000);

const moment = require("moment");

var given = moment("2022-06-01", "YYYY-MM-DD");
var current = moment("2022-06-14", "YYYY-MM-DD");

//Difference in number of days
//const result = moment.duration(given.diff(current)).asDays();
// const minifier = Math.abs(Math.ceil(result / 7));
// const magnifier = (minifier + 1) * 7;
// const weekAfter = moment(given).add(magnifier, "days");
// console.log("result: " + result + " | minifier: " + minifier + " | end: " + magnifier);

let weekAfter = moment(given);
while (weekAfter <= current) {
    weekAfter = moment(weekAfter).add(1, "weeks");
}

console.log("weekAfter: " + weekAfter.format());