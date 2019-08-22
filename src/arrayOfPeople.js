'use strict';

function arrayOfPeople(people) {
  const onlyOdd = [];
  const onlyUnique = [];

  people.forEach(el => {
    let count = 0; people.forEach(compareEl => {
      if (el === compareEl) { count++; };
    });
    if (count % 2 !== 0) { onlyOdd.unshift(el); }
  });

  onlyOdd.forEach(el => {
    if (onlyUnique.indexOf(el) === -1) { onlyUnique.push(el); }
  });

  return onlyUnique.reverse();
}

module.exports = arrayOfPeople;
