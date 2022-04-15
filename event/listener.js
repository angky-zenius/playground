const TicketManager = require('./ticketManager.js');

const ticketManager = new TicketManager(10);
ticketManager.on('buy', () => {
  console.log("Ticket is bought!");
});

ticketManager.buy('angky@gmail.com', 100000);
ticketManager.buy('angky@gmail.com', 200000);

ticketManager.once('buy', () => {
  console.log("Ticket is bought, once!");
});

ticketManager.buy('angky@gmail.com', 300000);
ticketManager.buy('angky@gmail.com', 400000);
