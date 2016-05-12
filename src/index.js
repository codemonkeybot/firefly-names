var uniqueRandomArray = require('unique-random-array');
var fireFlyNames = require('./firefly-names.json');

var getRandomItem = uniqueRandomArray(fireFlyNames);

module.exports = {
  all: fireFlyNames,
  random: random
};

function random(number) {
  if (number === undefined) {
    return getRandomItem();
  } else {
    var randomItems = [];
    for (var i = 0; i < number; i++) {
      randomItems.push(getRandomItem());
    }
    return randomItems;
  }
}
