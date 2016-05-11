var uniqueRandomArray = require('unique-random-array');
var fireFlyNames = require('./firefly-names.json');

var getRandomItem = uniqueRandomArray(fireFlyNames);

module.exports = {
  all: fireFlyNames,
  random: uniqueRandomArray(fireFlyNames)
};
