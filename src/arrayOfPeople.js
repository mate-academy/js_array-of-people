'use strict';

/**
 * A football team has gathered in the locker room after the game. The coach
 * recorded the sequence of passes (numbers of players receiving the ball). He
 * reads the numbers. If the player is in the locker room - he becomes the last
 * in the queue. If the player is already in the queue - he goes back to the
 * locker room.
 * Write a function accepting the sequence of passes and returning an array of
 * players left in the queue.
 *
 * Here is an example for passes [1, 3, 2, 1, 2, 1]
 * 1 - player 1 joined the queue -> [1]
 * 3 - player 3 joined the queue -> [1, 3]
 * 2 - player 2 joined the queue -> [1, 3, 2]
 * 1 - player 1 left the queue -> [3, 2]
 * 2 - player 2 left the queue -> [3]
 * 1 - player 1 joined the queue -> [3, 1]
 *
 * arrayOfPeople([1, 3, 2, 1, 2, 1]) === [3, 1]
 * arrayOfPeople([1, 1]) === []
 *
 * @param {number[]} passes
 *
 * @return {number[]}
 */
function arrayOfPeople(passes) {
  // write code here
}

module.exports = arrayOfPeople;
