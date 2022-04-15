const axios = require('axios');

axios.get('https://ghibliapi.herokuapp.com/films')
  .then((response) => {
    response.data.forEach(movie => {
      console.log(`${movie['title']}, ${movie['release_date']}`);
    });
  })
  .catch((error) => {
     console.error(`Could not save the Ghibli movies to a file: ${error}`);
  });
