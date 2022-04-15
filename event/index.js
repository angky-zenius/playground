const TicketManager = require('./ticketManager.js');
const EmailService = require('./emailService.js');
const DatabaseService = require('./databaseService.js');

const ticketManager = new TicketManager(3);
const emailService = new EmailService();
const databaseService = new DatabaseService();

const onBuy = (email, price, timestamp) => {
  emailService.send(email);
  databaseService.save(email, price, timestamp)
};

ticketManager.on('buy', onBuy);
ticketManager.on('buy', onBuy);

ticketManager.on('error', (error) => {
  console.error(`Problems buying ticket, ${error}`);
});

console.log(`We have ${ticketManager.listenerCount('buy')} buy listener(s)`);
console.log(`We have ${ticketManager.listenerCount('error')} error listener(s)`);

ticketManager.buy('angky@gmail.com', 100000);
ticketManager.buy('angky@gmail.com', 200000);
ticketManager.buy('angky@gmail.com', 300000);
ticketManager.buy('angky@gmail.com', 400000);
