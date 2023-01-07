/*
    let js = "amazing";
    if (js === "amazing") alert("JavaScript is FUN!");
    console.log(100 + 100);
*/

/*
    console.log("Kris");
    console.log("23");

    let firstName = "Rakesh";

    console.log(firstName);
    console.log(firstName);
    console.log(firstName);

    let PI = 1;
    console.log(PI);
*/

/*
    let javascriptIsFun = true;
    console.log(javascriptIsFun);

    console.log(typeof true);
    console.log(typeof javascriptIsFun);
    console.log(typeof 23);
    console.log(typeof "Kris");

    javascriptIsFun = "Awesome!";
    console.log(typeof javascriptIsFun);

    let year;
    console.log(year);
    console.log(typeof year);

    year = 1991;
    console.log(typeof year);
*/

/*

let age = 20;
age = 21;

const birthYear = 1991;

var job = "programmer";
job = "designer";

*/

/*
// Arithmetic Operators

const futureYear = 2035;
const ageKris = futureYear - 2002;
const ageAlex = futureYear - 2004;
console.log(ageKris, ageAlex);

console.log(ageKris * 2, ageKris / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2 = 8

// We can use the plus operator to join strings, or in other words, to concatenate different strings.
const firstName = "Kris";
const lastName = "Rego";
console.log(firstName + " " + lastName);

// another operator is the typeof Operator which we already did

// Assignment operators

let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x);

// Comparision operators -> We use comparision Operators to produce Boolean values

console.log(ageKris > ageAlex); // >, <, >=, <=
console.log(ageAlex >= 18);

const isFUllAge = ageAlex >= 18;

console.log(futureYear - 2002 > futureYear - 2004);

*/

/*
// const futureYear = 2035;
// const ageKris = futureYear - 2002;
// const ageAlex = futureYear - 2004;

// console.log(futureYear - 2002 > futureYear - 2004);

let x, y;

// minus - -> 11th Precedence -> left-to-right
// (equal to)= -> 2nd Precedence -> right-to-left

x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

// brackets () -> 18th Precedence -> n/a
// plus + -> 11th Precedence -> left-to-right
// division / -> 12th Precedence -> left-to-right

const averageAge = (ageKris + ageAlex) / 2;
console.log(ageKris, ageAlex, averageAge);

*/

/*

const firstName = "Kris";
const job = "Junior Developer";
const birthYear = 2002;
const currentYear = 2023;

// without Template Literal

const kris =
  "I'm " +
  firstName +
  ", a " +
  (currentYear - birthYear) +
  " years old " +
  job +
  "!";

console.log(kris);

// const newName = ` ${variableName} `   --> Template Literal, most used ES6 features;

const newKris = `I'm ${firstName}, a ${
  currentYear - birthYear
} years old ${job}! `;

console.log(newKris);

console.log(`Just a regular string using backticks`);

// multi line string without Template Literals

console.log(
  "Multi line String \n\
without using \ntemplate Literals"
);

// multi line string using Template Literals

console.log(`Multi line string
using
template literals`);

*/

/*
const age = 15;

if (age >= 18) {
  console.log(`Sarah can start driving license`);
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 2012;

let century;

if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);
*/

/*

//Functions Number or String must start with a Capital N or S

// type conversion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("kris"));
console.log(typeof NaN); // Weird result -> Output -> number

console.log(String(23), 23);

// type coercion

console.log("I am " + 20 + " years old!"); // converts the number to a string '+'
console.log("23" - "10" - 3); // Output -> 13


        // --> mius operator actually triggers the opposite conversion.
        // So in this case strings are converted to numbers



console.log("23" + "10" + 3); // Output -> 23103
console.log("25" * "2");
console.log("10" / "2");

let n = "1" + 1;
n = n - 1;
console.log(n); // Output -> 11

console.log(2 + 3 + 4 + "5"); // Output -> 95 -> which is a string
console.log("10" - "4" - "3" - 2 + "5"); // Output -> 15 which is again a string


*/

/*

// 5 falsy values: 0, "", undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Kris"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 0;
if (money) {
  console.log("Don't spend it all");
} else {
  console.log("You should get a job!");
}

let height;
if (height) {
  console.log("YAY!, Height is defined");
} else {
  console.log("Height is UNDEFINED");
}
*/

/*
const age = 18;

if (age === 18) console.log("You just became an adult");

console.log(18 == "18"); // loose equality operator -> does type coercion.  --> Output -> true
console.log(18 === "18"); // strict equality operator - doesnot do type coercion --> Output -> false

const favourite = Number(prompt("What's you favourite number")); // By default converts to string if not converted to number
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
  console.log("Cool! 23 is an amazing number!");
} else if (favourite === 7) {
  console.log("7 is also a cool number");
} else if (favourite === 9) {
  console.log("9 is also a cool number");
} else {
  console.log("Number is not 23 or 7 or 9");
}

if (favourite !== 23) console.log("Why not 23?"); // !== -> Strict and != loose
*/

/*
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision); // Output -> true
console.log(hasDriversLicense || hasGoodVision); // Output -> true
console.log(!hasDriversLicense); // Output -> false

const shouldDrive = hasDriversLicense && hasGoodVision;

if (shouldDrive) {
  console.log("Sarah is able to drive!"); // <- Output
} else {
  console.log("Someone else should drive....");
}

const isTried = false; // C

console.log(hasDriversLicense && hasGoodVision && isTried); // Output -> false

if (hasDriversLicense && hasGoodVision && !isTried) {
  console.log("Sarah is able to drive!"); //  <- Output
} else {
  console.log("Someone else should drive...");
}

*/
