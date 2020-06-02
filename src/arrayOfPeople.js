'use strict';

function arrayOfPeople(people) {
  const peopleInRoom = [];

  people.forEach((person) => {
    const personIndex = peopleInRoom.indexOf(person);

    if (personIndex === -1) {
      peopleInRoom.push(person);
    } else {
      peopleInRoom.splice(personIndex, 1);
    }
  });

  return peopleInRoom;
}

module.exports = arrayOfPeople;
