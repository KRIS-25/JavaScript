'use strict';

/*

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      // Creating new varialble with same name as outer scope's varialbe

      const firstName = 'ALex'; // this is accessed first, and now they are completely variables, they are defined in different scopes.

      // Reassigning outer scope's variable
      output = 'NEW OUTPUT';
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    console.log(output);
    // console.log(str);
    console.log(millenial); // var is function scoped
    // console.log(add(2, 3)); // this works without strict mode, else not because it is block scoped now
  }
  printAge();
  return age;
}

const firstName = 'Kris';
calcAge(1991);

// console.log(age);
// printAge();

*/

/*

// Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Kris';
let job = 'student';
const year = 1991;

// Functions
console.log(addDecl(2, 5));
// console.log(addExpr(2, 5));
console.log(addArrow);
// console.log(addArrow(2, 5));   // undefined(2, 5)

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Example

if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);

*/

/*

console.log(this);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};

calcAge(1991);

const calcAgeArrow = (birthYear) => {
  console.log(2037 - birthYear);
  console.log(this);
};

calcAgeArrow(2002);

const kris = {
  year: 2002,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};

kris.calcAge();

const alex = {
  year: 2004,
};

alex.calcAge = kris.calcAge; // copying method from one object into another also called method borrowing

alex.calcAge();

const f = kris.calcAge;

f();

*/

/*

// var firstName = 'Hacker';

const kris = {
  firstName: 'Kris',
  year: 1991,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);

    // Solution 1
    // const self = this; // this is outside the Millenial function hence it has access to the this keyword of the object
    // // self or that -> pre ES6 solution..

    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };

    isMillenial();
  },

  greet: () => console.log(`Hey ${this.firstName}`), // its translate to window.firstname.......
};

kris.greet();

kris.calcAge();

// arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 6, 7);

// arguments keyword doesn't work for arrow function
// var addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };

// addArrow(5, 5);

*/

/*

// Primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

// Reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica;

marriedJessica.lastName = 'Davis';
console.log('Before marriage:', jessica);
console.log(`After marriage:`, marriedJessica);

// marriedJessica = {};

// Copying objects

const jessicaTwo = {
  firstname: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Kris', 'Alex'],
};

const jessicaCopy = Object.assign({}, jessicaTwo);
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Tiger');
jessicaCopy.family.push('Lion');

console.log('Before : ', jessicaTwo);
console.log('After : ', jessicaCopy);

*/
