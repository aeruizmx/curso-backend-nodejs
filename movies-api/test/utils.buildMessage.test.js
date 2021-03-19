const assert = require('assert');
const buildMessage = require('../utils/buildMessage');

describe('Utils - buildMessage', function(){
  describe('When receives an entity and an action', function(){
    it('Should return the respective message', function(){
      const result = buildMessage('Movie', 'create');
      const expected = "Movie created!";
      assert.strictEqual(result, expected);
    });
  });
  describe('When receives an entity and an action is a list', function(){
    it('Should return the respective message with the entity in plural', function(){
      const result = buildMessage('Movie', 'list');
      const expected = "Movies listed!";
      assert.strictEqual(result, expected);
    });
  });
});