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
