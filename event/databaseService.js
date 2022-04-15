class DatabaseService {

  save(email, price, timestamp) {
    console.log(`Running query: (${email}, ${price}, ${timestamp})`);
  }

}

module.exports = DatabaseService;
