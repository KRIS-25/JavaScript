/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks �
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

*/

const dolphins = (96 + 108 + 89) / 3;
const koalas = (88 + 91 + 110) / 3;

if (dolphins === koalas) {
  console.log("IT's a draw guys!");
} else if (dolphins > koalas) {
  console.log(
    `Dophins are the winner of the competition with the average of ${dolphins} and a lead of ${
      dolphins - koalas
    } points`
  );
} else {
  console.log(
    `Koalas are the winner of the competition with the average of ${koalas} and a lead of ${
      koalas - dolphins
    } points`
  );
}

// Data Bonus 1

console.log("Similar");

// Data Bonus 2

minScore = 100;
const dolphinsBonusTwo = (97 + 112 + 81) / 3;
const koalasBonusTwo = (109 + 95 + 86) / 3;

if (dolphinsBonusTwo >= minScore && dolphinsBonusTwo > koalasBonusTwo) {
  console.log(
    `Guys Dolphins win the match with a average of ${dolphinsBonusTwo}`
  );
} else if (koalasBonusTwo >= minScore && koalasBonusTwo > dolphinsBonusTwo) {
  console.log(
    `Guys the champions of this match is Koalas with an average score of ${koalasBonusTwo}`
  );
} else if (
  dolphinsBonusTwo === koalasBonusTwo &&
  dolphinsBonusTwo >= minScore &&
  koalasBonusTwo >= minScore
) {
  console.log(`Both are the winners of the Match!!`);
} else {
  console.log("No one wins the match :(");
}
