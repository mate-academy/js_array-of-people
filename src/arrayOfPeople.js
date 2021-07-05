'use strict';

function arrayOfPeople(people) {
  const uniqueOdd = [];

  people.forEach(persone => {
    if (uniqueOdd.indexOf(persone) === -1) {
      uniqueOdd.push(persone);
    } else {
      uniqueOdd.splice(uniqueOdd.indexOf(persone), 1);
    }
  });

  return uniqueOdd;
}

module.exports = arrayOfPeople;
