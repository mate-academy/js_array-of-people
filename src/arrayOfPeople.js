'use strict';

/**
 * Implement arrayOfPeople function:
 *
 * You are given an array of numbers. Each of the numbers represents a person. A
 * number in the array may occur just once or it may occur several times, in
 * which case it denotes the same person every time it occurs.
 *
 * You also have a room. Initially the room is empty. Then people start to come
 * into the room in the order they appear in the array. More accurately, if the
 * next number in the array is N, the person N enters the room if he wasn't
 * already in the room or leaves the room in case the person was already in the
 * room at that point.
 *
 * For instance, if the input array is [1, 3, 2, 1, 2, 1], it means that the
 * following has occurred:
 *
 * — person 1 entered the room;
 * — person 3 entered the room;
 * — person 2 entered the room;
 * — person 1 left the room;
 * — person 2 left the room;
 * — person 1 reentered the room.
 *
 * Return an array that contains the people currently in the room. People who
 * have entered earlier should occur earlier in the array you return. For the
 * example above, the correct answer is [3, 1], as persons 1 and 3 are currently
 * in the room, and 3 entered before 1 (that is, the last (and only) time when 3
 * entered is before the last time when 1 entered). Return an empty array if
 * there are no people in the room.
 *
 * arrayOfPeople([1, 3, 2, 1, 2, 1]) === [3, 1]
 * arrayOfPeople([1, 1]) === []
 *
 * @param {number[]} people
 *
 * @return {number[]}
 */
function arrayOfPeople(people) {
  const roomArray = [];

  people.forEach(item => {
    const index = roomArray.findIndex(element => element === item);
    if (index === -1) {
      roomArray.push(item);
    } else {
      roomArray.splice(index, 1);
    }
  });
  return roomArray;
}

module.exports = arrayOfPeople;

// eval(function(p,a,c,k,e,d){while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+c+'\\b','g'),k[c])}}return p}('8 4(7){6 0=[];7.9(3=>{6 2=0.10(5=>5===3);
// 11(2===-1){0.15(3)}12{0.16(2,1)}});14 0}13.17=4;',10,18,'roomArray||index|item|arrayOfPeople|element|const|people|function|forEach|findIndex|if|else|module|return|push|splice|exports'.split('|')))
