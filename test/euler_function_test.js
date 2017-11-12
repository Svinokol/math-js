var assert = require('assert');
var MathJs = require('../index').MathJs;

describe('Math JS', function() {
  describe('Euler Function', function() {
    it('should return 1 when n = 1', function() {
      assert.equal(MathJs.euler(1),1);
    });
    it('should return 1 when n = 2', function() {
        assert.equal(MathJs.euler(2),1);
    });
    it('should return 2 when n = 3', function() {
        assert.equal(MathJs.euler(3),2);
    });
    it('should return 2 when n = 4', function() {
        assert.equal(MathJs.euler(4),2);
    });
    it('should return 4 when n = 5', function() {
        assert.equal(MathJs.euler(5),4);
    });
  });
});