var expect = require('chai').expect;
var fireFly = require('./index');

describe('firefly-names', function() {
  describe('all', function() {
    it('should be an array of strings', function() {
      expect(fireFly.all).to.satisfy(isArrayOfStrings);

      function isArrayOfStrings(array) {
        return array.every(function(item) {
          return typeof item === 'string';
        });
      }
    });

    it('should contain `Macolm Reynolds`', function() {
      expect(fireFly.all).to.include('Macolm Reynolds');
    });
  });

  describe('random', function() {
    it('should return a random item from the fireFly.all', function() {
      var randomItem = fireFly.random();
      expect(fireFly.all).to.include(randomItem);
    });

    it('should return an array of random items if passed a number', function() {
      var randomItems = fireFly.random(3);
      expect(randomItems).to.have.length(3);
      randomItems.forEach(function(item) {
        expect(fireFly.all).to.include(item);
      });
    });
  });
});
