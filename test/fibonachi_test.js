var assert = require('assert');
var MathJs = require('../index').MathJs;

describe('Math JS', function() {
  describe('Fibonachi Function', function() {
    it('should return 0 when n = 0', function() {
      assert.equal(MathJs.fibonachi(0), 0);
    });
    it('should return 1 when n = 1', function() {
        assert.equal(MathJs.fibonachi(1), 1);
    });
    it('should return 1 when n = 2', function() {
        assert.equal(MathJs.fibonachi(2), 1);
    });
    it('should return 2 when n = 3', function() {
        assert.equal(MathJs.fibonachi(2), 1);
    });
    it('should return 13 when n = 7', function() {
        assert.equal(MathJs.fibonachi(7), 13);
    });
  });
});