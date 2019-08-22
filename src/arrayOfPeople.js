'use strict';

function arrayOfPeople(people) {
  const uniqueOdd = [];

  people.forEach(el => {
    if (uniqueOdd.indexOf(el) === -1) {
      uniqueOdd.push(el);
    } else {
      uniqueOdd.splice(uniqueOdd.indexOf(el), 1);
    }
  });

  return uniqueOdd;
}

module.exports = arrayOfPeople;
