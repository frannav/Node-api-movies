const assert = require('assert');
const buildMessage = require('../utils/buildMessage');
const { func } = require('@hapi/joi');

describe.only('Utils - buildMessage', function() {
  describe('Cuando recibimos una entidad y una acción', function() {
    it('Debería responder el mensaje respectivo', function() {
      const result = buildMessage('movie', 'create');
      const expect = "movie created";
      assert.strictEqual(result, expect);
    });
  });

  describe('Cuando recibimos una entidad, una acción y una lista', function() {
    it('Debería devolver el mensaje respectivo con la entidad en plural', function() {
      const result = buildMessage('movie', 'list');
      const expect = 'movies listed';
      assert.strictEqual(result, expect);
    });
  });
});

