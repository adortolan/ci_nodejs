var calcModule = require('./calc');
var chai = require('chai');
var expect = chai.expect;
describe('calc test', function() {
    it('should sum return 4', function(done) {
      var result = calcModule.sum(2, 2);
      expect(result).to.equal(4);
      done();
    });
  }); 
 