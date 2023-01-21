'use strict';

/*
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5
  //   numPassengers ||= 1;
  //   price ||= 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };

  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);

createBooking('LH123', undefined, 1000);
*/

/*

const flight = 'LH234';
const kris = {
  name: 'Kris Rego',
  passport: 234453456,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 234453456) {
    alert('Checked in');
  } else {
    alert('Wrong Passport!');
  }
};

// checkIn(flight, kris);
// console.log(flight);
// console.log(kris);

// Is the same as doing....
// const flightNum = flight;
// const passenger = kris;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
};

newPassport(kris);
checkIn(flight, kris);

*/

/*

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher order function
const transformer = function (str, fn) {
  console.log(`Original String: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by : ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
// now the functions are callback functions

transformer('JavaScript is the best!', oneWord);

// JS uses callbacks all the time
const high5 = function () {
  console.log(`highFive`);
};

document.body.addEventListener('click', high5);

['Jonas', 'Martha', 'Adam'].forEach(high5);

*/

/*

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Kris');
greeterHey('Alex');

greet('Hello')('Someone');

// Arrow function Challenge

const hail = (greeting) => (fname) => console.log(`${greeting} ${fname}`);

hail('Hii')('Kris');

*/

/*

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  booking: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.booking.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Kris Rego');
lufthansa.book(635, 'Alex');
console.log(lufthansa.booking);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  booking: [],
};

// This won't work because now this is a regular function and the this keyword points to undefined in strict mode.
const book = lufthansa.book;

// book(23, 'Someone'); // Does NOT work

// Call method
book.call(eurowings, 23, 'Pat');
book.call(lufthansa, 239, 'Mary Cooper');

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  booking: [],
};

book.call(swiss, 583, 'Someone');

// Apply method
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);

// apply method no longer used because of this
book.call(swiss, ...flightData);

// Bind method
// book.call(eurowings, 23, 'Pat'); <- reference

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Williams');

// Setting default values
const bookEW23 = book.bind(eurowings, 23);

bookEW23('Jonas Myman');
bookEW23('Clark Cent');

// With Event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));
// without the bind the this keyword would have set to the querySelector

// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// -> looks like this -> addVAT = value => value + value * 0.23;

console.log(addVAT(100));

// Funtion returning a funciton challenge

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));

*/

/*

(function () {
  console.log(`This will never run again`);
})();

// Immediately Invoked Function Expression or IIFE for short

(() => console.log(`This is will never run again`))();

*/

/*

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();

// Take a look at closure

console.dir(booker);

*/

// Example 1
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();

// Re-assigning f function
h();
f();
console.dir(f);

// Example 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

boardPassengers(180, 3);
