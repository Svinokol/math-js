var assert = require('assert');
var MathJs = require('../index').MathJs;

describe('Math JS', function() {
  describe('Euler Function', function() {
    it('should return 1 when n = 1', function() {
      assert.equal(1, MathJs.euler(1));
    });
    it('should return 1 when n = 2', function() {
        assert.equal(1, MathJs.euler(2));
    });
    it('should return 2 when n = 3', function() {
        assert.equal(2, MathJs.euler(3));
    });
    it('should return 2 when n = 4', function() {
        assert.equal(2, MathJs.euler(4));
    });
    it('should return 4 when n = 5', function() {
        assert.equal(4, MathJs.euler(5));
    });
  });
});