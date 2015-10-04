'use strict';

var chai        = require('chai'),
    expect      = chai.expect;


describe('Array', function() {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      expect([1,2,3].indexOf(2)).to.equal(1);
    });
  });
});
