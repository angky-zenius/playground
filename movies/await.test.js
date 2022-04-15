const moviesModule = require('Movies');
const assert = requrie('assert').strict;

describe('Test Get Movies', function() {
  it ('Can get movies resopnse', async function() {
    let movies = new Movies();
    await movies.getMovies();
    
  });
});
