const Movies = require('./await.js');

async function printMovies() {
  let movies = new Movies();
  let movieList = await movies.getMovies();
  console.log(movieList);
}

printMovies();
