const express = require('express');
const MoviesService = require('../services/movies');


function moviesApi(app){
  const router = express.Router();
  app.use('/api/movies', router);

  const movieServices = new MoviesService();

  router.get('/', async function(req, res, next){
    const { tags } = req.query;
    try {
      const movies = await movieServices.getMovies({ tags });
      //throw new Error('Error getting movies!');
      res.status(200).json({
        data: movies,
        message: 'Movies listed!'
      });
    } catch (error) {
      next(error)
    }
  });

  router.get('/:movieId', async function(req, res, next){
    const { movieId } = req.params;
    try {
      const movies = await movieServices.getMovie({ movieId });
      res.status(200).json({
        data: movies,
        message: 'Movie retrieved!'
      });
    } catch (error) {
      next(error)
    }
  });

  router.post('/', async function(req, res, next){
    const { body: movie } = req;
    try {
      const createMovieId = await movieServices.createMovie({ movie })
      res.status(201).json({
        data: createMovieId,
        message: 'Movie created!'
      });
    } catch (error) {
      next(error)
    }
  });

  router.put('/:movieId', async function(req, res, next){
    const { movieId } = req.params;
    const { body: movie } = req;
    try {
      const updatedMovieId = await movieServices .updateMovie({ movieId, movie })
      res.status(200).json({
        data: updatedMovieId,
        message: 'Movie updated!'
      });
    } catch (error) {
      next(error)
    }
  });

  router.delete('/:movieId', async function(req, res, next){
    const { movieId } = req.params;
    try {
      const deletedMovieId = await movieServices.deleteMovie({ movieId })
      res.status(200).json({
        data: deletedMovieId,
        message: 'Movie deleted!'
      });
    } catch (error) {
      next(error)
    }
  });

  router.patch("/:movieId", async function(req,res,next) {
		const {movieId} = req.params;
		const {body: movie} = req;		
		try {
			const updatedMovieId = await movieServices.partialUpdateMovie({movieId,movie});

			res.status(200).json({
				data:updatedMovieId,
				message: "movie updated partially"
			});
		}
		catch(error) {
			next(error);
		}
	});
}

module.exports = moviesApi;
