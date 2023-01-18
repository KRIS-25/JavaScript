'use strict';

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const [player1, player2] = game.players;

const [gk, ...fieldPlayers] = player1;

const allPlayers = [...player1, ...player2];

const players1Final = [...player1, 'Thiago', 'Coutinho', 'Perisc'];

// const {odds: { team1, x: draw, team2 },} = game;
const { team1, x: draw, team2 } = game.odds;

const printGoals = function (...players) {
  console.log(...players, `,Total Goals scored are ${players.length}`);
};

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

team1 < team2 && console.log(`${game.team1}, is more likely to win`);

team2 < team1 && console.log(`${game.team2}, is more likely to win`);

// Code Challenge - 12
// ------------
console.log(`\nCODE CHALLENGE - 12`);

const scoredGoal = game.scored;

for (const [scored, player] of scoredGoal.entries()) {
  console.log(`Goal ${scored + 1}: ${player}`);
}

const average = Object.values(game.odds);
let result = 0;
for (let number of average) result += number;
result = result / average.length;
console.log(result);

const odds = Object.entries(game.odds);

for (const [player, number] of odds) {
  game[player] && console.log(`Odd of victory ${game[player]}: ${number}`);

  !game[player] && console.log(`Odd of draw: ${number}`);
}

// Tutorial Solution - 03
// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === 'x' ? `draw` : `victory ${game[team]}`;
//   console.log(`Odd of ${teamStr} ${odd}`);
// }
// Bonus question solid cool one !

const scorers = {};

console.log(game.scored);

for (const number of game.scored) {
  scorers[number] = (scorers[number] || 0) + 1;
}

// Solid solution man tooo goood!
// scorers['Lewandowski'] = (scorers['Lewandowski'] || 0) + 1;
// scorers['Gnarby'] = (scorers['Gnarby'] || 0) + 1;
// scorers['Lewandowski'] = (scorers['Lewandowski'] || 0) + 1;
// scorers['Hummels'] = (scorers['Hummels'] || 0) + 1;

// console.log(scorers);

// Other tutorial solution
// for (const player of game.scored) {
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// }

console.log(scorers);
