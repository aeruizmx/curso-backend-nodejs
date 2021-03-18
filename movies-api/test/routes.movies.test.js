const assert = require('assert');
const proxyquire = require('proxyquire');

const { moviesMock, MoviesServiceMock } = require('../utils/mocks/movies');
const testServer = require('../utils/testServer');

describe('Routes - movies', function(){
  const route = proxyquire('../routes/movies.js', {
    '../services/movies.js': MoviesServiceMock
  });

  const request = testServer(route);
  describe('GET / Movies', function(){
    it('Should respond with status 200', function(done){
      request.get('/api/movies').expect(200,done);
    });
    it('Sould respond with the list of movies', function(done){
      request.get('/api/movies').end((err, res) => {
        assert.deepStrictEqual(res.body, {
          data: moviesMock,
          message: 'Movies listed!'
        });
        done();
      });
    })
  });
});