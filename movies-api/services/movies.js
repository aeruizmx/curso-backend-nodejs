//const { moviesMock } = require('../utils/mocks/movies')

const MongoLib = require('../lib/mongo');

class MoviesService {
  constructor(){
    this.collection = 'movies';
    this.mongoDB = new MongoLib();
  }

  async getMovies({ tags }){
    //const movies = await Promise.resolve(moviesMock);
    const query = tags && { tags: { $is: tags } };
    const movies = await this.mongoDB.getAll(this.collection, query);
    return movies || [];
  }

  async getMovie({ movieId }){

    //const movies = await Promise.resolve(moviesMock[0]);
    const movies = await this.mongoDB.get(this.collection, movieId);
    return movies || {};
  }

  async createMovie({ movie }){
    //const movieId = await Promise.resolve(moviesMock[0].id);
    const movieId = await this.mongoDB.create(this.collection, movie);
    return movieId;
  }

  async updateMovie({ movieId, movie} = {}){
    const id = await this.mongoDB.update(this.collection, movieId, movie);
    return id;
  }

  async deleteMovie({movieId}){
    const id = await this.mongoDB.delete(this.collection, movieId);
    return id;
  }

  async partialUpdateMovie() {
		//const updatedMovieId = await Promise.resolve(moviesMock[0].id);
		//return updatedMovieId;
	}
}

module.exports = MoviesService;