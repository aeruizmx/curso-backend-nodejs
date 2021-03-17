const { moviesMock } = require('../utils/mocks/movies')

class MoviesService {
  async getMovies(){
    const movies = await Promise.resolve(moviesMock);
    return movies || [];
  }

  async getMovie(){
    const movies = await Promise.resolve(moviesMock[0]);
    return movies || {};
  }

  async createMovie(){
    const movieId = await Promise.resolve(moviesMock[0].id);
    return movieId;
  }

  async updateMovie(){
    const movieId = await Promise.resolve(moviesMock[0].id);
    return movieId;
  }

  async deleteMovie(){
    const movieId = await Promise.resolve(moviesMock[0].id);
    return movieId;
  }

  async partialUpdateMovie() {
		const updatedMovieId = await Promise.resolve(moviesMock[0].id);
		return updatedMovieId;
	}
}

module.exports = MoviesService;