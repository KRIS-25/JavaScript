/*

Rewrite the 'calcAverageHumanAge' function from Challenge #2, but this time
as an arrow function, and using chaining!
Test data:
-> Data 1: [5, 2, 4, 1, 15, 8, 3]
-> Data 2: [16, 6, 10, 5, 6, 1, 4]

*/

'use strict';

const calcAverageHumanAge = function (ages) {
  const humanAge = ages
    .map((dog) => (dog <= 2 ? 2 * dog : 16 + dog * 4))
    .filter((age) => age >= 18)
    .reduce((acc, value, _, arr) => acc + value / arr.length, 0);

  console.log(humanAge);
};

calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);

calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
