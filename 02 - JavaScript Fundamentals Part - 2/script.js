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
