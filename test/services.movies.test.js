const assert = require('assert');
const proxyquire = require('proxyquire');
const { MongoLibMock, getAllStub } = require('../utils/mocks/mongoLib');
const { moviesMock } = require('../utils/mocks/movies');

describe('Services - Movies', function() {
  const MoviesServices = proxyquire('../services/movies', {
    '../lib/mongo': MongoLibMock
  });

  const moviesService = new MoviesServices();

  describe('Cuando se llame al método getMovies', async function() {
    it('Debe llamar al método getAll de MongoLib', async function() {
      await moviesService.getMovies({});
      assert.strictEqual(getAllStub.called, true);
    });

    it('Debe devolver un array de movies', async function() {
      const result = await moviesService.getMovies({});
      const expected = moviesMock;
      assert.deepStrictEqual(result, expected);
    })
  });
}); 