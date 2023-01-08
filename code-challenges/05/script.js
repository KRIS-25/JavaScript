/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
5. Ignore draws this time
Test data:
-> Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
-> Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
Hints:
-> To calculate average of 3 values, add them all together and divide by 3
-> To check if number A is at least double number B, check for A >= 2 * B.
Apply this to the team's average scores
*/

"use strict";

// const calcAverage = (scoreOne, scoreTwo, scoreThree) =>
//   (scoreOne + scoreTwo + scoreThree) / 3;

// function checkWinner(avgDolphins, avgKoalas) {
//   if (avgDolphins > avgKoalas && avgDolphins >= 2 * avgKoalas) {
//     return `Dolphins won the match with the average of ${avgDolphins}`;
//   } else if (avgKoalas > avgDolphins && avgKoalas >= 2 * avgDolphins) {
//     return `Koalas won the match with the average of ${avgKoalas}`;
//   } else {
//     return `neither won the match`;
//   }
// }

// function scores(t1, t2, t3, t4, t5, t6) {
//   const team1 = calcAverage(t1, t2, t3);
//   const team2 = calcAverage(t4, t5, t6);
//   const winner = checkWinner(team1, team2);
//   console.log(`Dolphins : ${team1},  Koalas : ${team2}`);
//   return winner;
// }

// console.log(scores(85, 54, 41, 23, 34, 27));

// console.log("");

// console.log(scores(44, 23, 71, 65, 54, 49));

/* Tutorial Solution --> Everything working in my first approach but this is a little different apporach */

const calcAverage = (a, b, c) => (a + b + c) / 3;

// Test 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log(`No team wins...`);
  }
};

checkWinner(scoreDolphins, scoreKoalas);

// Test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);
