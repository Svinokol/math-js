var assert = require('assert');
var MathJs = require('../index').MathJs;

describe('Math JS', function() {
  describe('GCD Function', function() {
    it('should return 1 when a = 1 and b = 1', function() {
      assert.equal(MathJs.gcd(1,1),1);
    });
    it('should return 1 when a = 1 and b = 2', function() {
        assert.equal(MathJs.gcd(1,2),1);
    });
    it('should return 2 when a = 2 and b = 4', function() {
        assert.equal(MathJs.gcd(2,4),2);
    });
    it('should return 4 when a = 4 and b = 8', function() {
        assert.equal(MathJs.gcd(4,8),4);
    });
  });
});