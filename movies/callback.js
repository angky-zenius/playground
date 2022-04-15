const request = require('request');

const moviesCallBack = (error, response, body) => {
    if (error) {
      console.error(`Could not send request to API: ${error.message}`);
      return;
    }

    if (response.statusCode != 200) {
      console.error(`Expected status code 200 but received ${response.statusCode}.`);
      return;
    }

    movies = JSON.parse(body);
    movies.forEach((movie, x) => {
       console.log(`${movie['title']}, ${movie['release_date']}`);
    });
}

console.log('Processing movies...\n');
request('https://ghibliapi.herokuapp.com/films', moviesCallBack);
