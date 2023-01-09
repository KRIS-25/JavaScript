/*
"use strict";

let hasDriversLiense = false;
const passTest = true;

if (passTest) hasDriversLiense = true;
if (hasDriversLiense) console.log("I can drive :D");

// error because JS is reserving this word here for a feature that it might implement in the future <- error visible only through strict mode
// const interface = "Audio";
// const private = 235;
*/

/*
"use strict";

function logger() {
  // ALl the code within this code block of curly braces is called the function buddy

  console.log("My name is Kris");
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
*/

/*

"use strict";

// function declaration

const age1 = calcAge1(2002); // we can call the function declaration before they are defined.

function calcAge1(birthYear) {
  return 2037 - birthYear;
}

console.log(age1);

// function expression

const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAge2(2002);
console.log(age1, age2);

*/

/*

"use strict";

//function expression

const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

//Arrow function

const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(2002);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(2002, "Kris"));

console.log(yearsUntilRetirement(1980, "Bob"));

*/

/*
"use strict";

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  return `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
}

console.log(fruitProcessor(2, 3));
*/

/*

"use strict";

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired, congrats!`);
    return -1;
  }
};

console.log(yearsUntilRetirement(2002, "Kris"));
console.log(yearsUntilRetirement(1950, "Mike"));

*/

/*

"use strict";

const friends = ["Kris", "Alex", "Leran", "keagan", "Abdul"]; // called the literal syntax
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020); // different way of creating a array
console.log(years);

console.log(friends[4]);

console.log(friends.length);
console.log(friends[friends.length - 1]); // -- Inside of the brackets [] we can put any expression -> expression is something which produces a value

friends[4] = "Tom";
console.log(friends);

// friends = ["One", "Two", "Three"]; -> we cannot change all the friends values when using const, use let

const firstName = "Kris";
const kris = [firstName, "Rego", 2023 - 2002, friends];

console.log(kris);
console.log(kris.length);

// Exercise

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const numbers = [1990, 1967, 2002, 2010, 2018];

console.log(
  calcAge(numbers[0]),
  calcAge(numbers[1]),
  calcAge(numbers[numbers.length - 1])
);

const ages = [
  calcAge(numbers[0]),
  calcAge(numbers[1]),
  calcAge(numbers[numbers.length - 1]),
];

console.log(ages);

*/

/*
"use strict";

const friends = new Array("Michael", "Steven", "Peter");

// Add elements
const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength); // Show the length of the new array

const newTopLength = friends.unshift("Kris");
console.log(friends);
console.log(newTopLength);

// Remove elements

const popped = friends.pop();
friends.pop();
console.log(friends);
console.log(popped);

friends.shift();
console.log(friends);

console.log(friends.indexOf("Steven"));

console.log(friends.includes("Steven")); // It check for strict values, it does not do type coercion.
console.log(friends.includes("Bob"));

if (friends.includes("Steven")) {
  console.log("You have a friend called Steven");
}
*/

/*

"use strict";

const krisArray = [
  "Kris",
  "Rego",
  2037 - 2002,
  "Student",
  ["Leran", "Niraj", "Abdul"],
];

const kris = {
  firstName: "Kris",
  lastName: "Rego",
  birthDate: 2037 - 2002,
  job: "Student",
  friends: ["leran", "Niraj", "Abdul"],
};

// This is called the object literal syntax
// Now we have an object with 5 'key' 'value' pairs.
// Now each of this keys is also called a property.


*/

/*

"use strict";

const kris = {
  firstName: "Kris",
  lastName: "Rego",
  age: 2037 - 2002,
  job: "Student",
  friends: ["Michael", "Peter", "Steven"],
};

console.log(kris);

console.log(kris.lastName);
console.log(kris["lastName"]);

const nameKey = "Name";
console.log(kris["first" + nameKey]);
console.log(kris["last" + nameKey]);

const interestedIn = prompt(
  "What do you want to know about Kris ? Choose between firstName, lastName, age, job, and friends"
);

if (kris[interestedIn]) {
  console.log(kris[interestedIn]);
} else {
  console.log("Please enter a valid input");
}

// Adding new properties to the object

kris.location = "India";
kris["email"] = "krisrego75@gmail.com";
console.log(kris);

// Challenge
// "Jonas has 3 friends, and his best friend is called Michael"

console.log(
  `${kris["firstName"]} has ${kris.friends.length} friends, and his best friend is called ${kris.friends[0]}`
);

*/

/*

"use strict";

const kris = {
  firstName: "Kris",
  lastName: "Rego",
  birthYear: 1991,
  job: "Student",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,

  //   calcAge: function (birthYear) {
  //     return 2037 - birthYear;
  //   },

  // console.log(kris["calcAge"](1991));

  //   calcAge: function () {
  //     // console.log(this);      <- This helps to understand it better
  //     return 2037 - this.birthYear;
  //   },

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${kris.age} years old ${
      this.job
    }. and he has ${this.hasDriversLicense ? "a" : "no"} driver's liense`;
  },
};

console.log(kris.calcAge()); // Calculate this method once to reuse again and again using kris.age

console.log(kris.age);
console.log(kris.age);
console.log(kris.age);

//Challenge
// "Kris is a 20 year old Student. and he has a driver's license"

console.log(kris.getSummary());

*/

/*

"use strict";

for (let rep = 1; rep <= 10; rep += 1) {
  console.log("Lifting weights repetition " + rep);
}

*/

/*

"use strict";

const kris = [
  "Kris",
  "Rego",
  2037 - 1991,
  "Student",
  ["Michael", "Peter", "Steven"],
];

const types = [];

// console.log(kris[0]);
// console.log(kris[1]);
// ...
// console.log(kris[4]);

for (let i = 0; i < kris.length; i++) {
  // Reading from kris array
  console.log(kris[i], typeof kris[i]);

  // filling types array

  //   type[0] = ".."
  //   types[i] = typeof kris[i];

  // types.push(...)
  types.push(typeof kris[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];

const ages = [];

for (let i = 0; i < years.length; i++) {
  ages[i] = 2037 - years[i];
}

console.log(ages);

// continue and break

console.log("--- ONLY STRINGS ---");

for (let i = 0; i < kris.length; i++) {
  if (typeof kris[i] !== "string") continue; // In other word continue is skipping those elements

  console.log(kris[i], typeof kris[i]);
}

console.log("--- BREAK WITH NUMBER ---");

for (let i = 0; i < kris.length; i++) {
  if (typeof kris[i] === "number") break;

  console.log(kris[i], typeof kris[i]);
}

*/

/*

"use strict";

const kris = [
  "Kris",
  "Rego",
  2023 - 2002,
  "Student",
  ["Michael", "Peter", "Steven"],
];

for (let i = kris.length - 1; i >= 0; i--) {
  console.log(i, kris[i]);
}

// loop inside a loop

for (let exercise = 1; exercise <= 3; exercise++) {
  console.log(`--------------Starting Exercise ${exercise}`);

  for (let rep = 1; rep <= 5; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
  }
}

*/

/*

"use strict";

// for (let rep = 1; rep <= 5; rep++) {
//   console.log(`Lifting weights repetition ${rep}`);
// }

console.log("While LOOP");

let rep = 1;
while (rep <= 5) {
  console.log(`Lifting weights repetition ${rep}`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("Loop is about to end...");
}

*/
