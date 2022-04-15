const axios = require('axios');

class Movies {

  async getMovies() {
    try {
      let filmsResponse = await axios.get('https://ghibliapi.herokuapp.com/films');
      let films = '';
      filmsResponse.data.forEach((film, i) => {
        films += `${film['title']}, ${film['release_date']}\n`;
      });
      return films;
    } catch (error) {
      throw new Error(`Could not save the Ghibli movies to a file: ${error}`);
    }
  }

}

module.exports = Movies;
