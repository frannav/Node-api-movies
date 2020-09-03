const assert = require('assert');
const proxyquire = require('proxyquire');

const { moviesMock, MoviesServideMock } = require('../utils/mocks/movies.js');
const testServer = require('../utils/testServer');
const movies = require('../utils/mocks/movies.js');

describe('route - movies', function() {
  const route = proxyquire('../routes/movies', {
    '../services/movies': MoviesServideMock
  });

  const request = testServer(route);

  describe('GET /movies', function() {
    it('Debería responder con un status 200', function(done) {
      request.get('/api/movies').expect(200, done)
    });

    it('Debería responder con una lista de peliculas', function(done) {
      request.get('/api/movies').end((err, res) => {
        assert.deepStrictEqual(res.body, {
          data: moviesMock,
          message: 'Movies listed'
        });

        done();
      });
    });
  });
});