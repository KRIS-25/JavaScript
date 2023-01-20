'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
const halfName = 't';

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [`sa${halfName}`]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enchanced object literals
  openingHours,
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // We destructured the incoming object in variable names in this parameter
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your declicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza(mainIngredent, ...otherIngredent) {
    console.log(mainIngredent);
    console.log(otherIngredent);
  },
};

// Delayed Departure from FAO to TXL (11h25)
//           Arrival from BRU to FAO (11h45)
//   Delayed Arrival from HEL to FAO (12h05)
//         Departure from FAO to LTS (12h30)

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const getCode = (str) => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');

  const output = `${type.startsWith('_Delayed') ? '!' : ''}${type.replaceAll(
    '_',
    ' '
  )} from ${getCode(from)} to ${getCode(to)} (${time.replace(
    ':',
    'h'
  )})`.padStart(45);

  console.log(output);
}

/*
// Working with strings - 3

console.log(`a+very+nice+string`.split('+'));

console.log(`Kris Rego`.split(' '));

const [firstName, lastName] = 'kris Rego'.split(' ');

const newName = ['Mr.', firstName, lastName.toLowerCase()].join(' '); // Anything words inside join('')

console.log(newName);

const capitalizeName = function (name) {
  const arr = [];
  const capitalN = name.toLowerCase().split(' ');
  for (const n of capitalN) {
    arr.push(n[0].toUpperCase() + n.slice(1));

    // another approach with replace -> same result
    // arr.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(arr.join(' '));
};

capitalizeName('kris rego');
capitalizeName('alex something rego');
capitalizeName('wowow SOMETHING Feels RIGHT');

// Padding
const message = 'Go to gate 23!';
console.log(message.padStart(25, '+').padEnd(30, '+'));

console.log('kris'.padStart(25, '+'));

const maskCreditCard = function (number) {
  const str = number + ''; // else -> String(number)
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(23432324254546));
console.log(maskCreditCard('32452532542626'));

// Repeat
const message2 = 'Bad Weather... All Departues Delayed....';

console.log(message2.repeat(2));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'<- '.repeat(n)}`);
};

planesInLine(3);
planesInLine(5);

*/

/*

//Strings Part 2

const airline = 'TAP Air Portugal';

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

console.log(`kris`.toUpperCase());

// Fix capitalization in name

const passenger = 'kRiS'; // Kris
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Camparing emails

const email = 'krisrego75@gmail.com';
const loginEmail = '    krisrego75@gmail.com \n';

const lowerEmail = loginEmail.toLowerCase();
// To remove extra spaces -> white space
// trim()
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);

// We can chain methods on the string also
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);

console.log(email === normalizedEmail);

// replacing

const priceGB = '288,97#';
const priceUS = priceGB.replace('#', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to barding door 23. Boarding door 23!';
console.log(announcement.replace('door', 'gate'));
// To replace all the door words
console.log(announcement.replaceAll('door', 'gate'));

// Very Simple Regular Expression -> g stands for global
console.log(announcement.replace(/door/g, 'gate'));

// Booleans
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Airb'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log(`Part of the NEW Airbus family `);
}

// Practice exercise

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log(`You are not allowed on board`);
  } else {
    console.log(`Welcome aboard`);
  }
};

checkBaggage('I have a laptop, some food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a GUN for protection');

*/

/*
// Strings - Part 1

const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log(`B737`[0]);

console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));

// Even search for words on the starting index -> invalid will be -1
console.log(airline.indexOf('Portugal'));

// Begin Parameter
console.log(airline.slice(2));

// End Parameter -> The lenght of the extracted string will always be End - Beginning
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// If we start with negativve numbers it will start extracting from the end
console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

// Exercise

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1); // directly selects the last element

  if (s === 'B' || s === 'E') {
    console.log(`You got the middle seat`);
  } else {
    console.log(`You got lucky`);
  }
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('kris'));
console.log(typeof new String('kris'));
console.log(typeof new String('kris').slice(1));

*/

/*

// Another way of adding elements in maps

const question = new Map([
  ['Question', 'What is the best programming language in the word?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Try again!'],
]);

console.log(question);

// Convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Quiz app
console.log(question.get('Question'));

for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
// const answer = Number(prompt('Your answer'));
const answer = 3;
console.log(question.get(answer === question.get('correct')));

// Converting map back to an array
console.log(...question);
// same methods we applied for objects we can do for maps
// console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);

*/

/*
// Maps
const hotel = new Map();
hotel.set('name', 'Classico Italiano');
hotel.set(1, 'France, Italy');

console.log(hotel.set(2, 'Lisbon, Portugal'));

// You can also chain set method
hotel
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');

// To Read data from the map, use get.
console.log(hotel.get('name'));
console.log(hotel.get(false));

const time = 21;
console.log(hotel.get(time > hotel.get('open') && time < hotel.get('close')));

// To check if the map contains a certain key
console.log(hotel.has('name'));

// To delete elements
hotel.delete(2);
console.log(hotel);

// To check the size
console.log(hotel.size);

// To delete all the elements
// hotel.clear();
// console.log(hotel);

const arr = [1, 2];

// hotel.set([1, 2], 'Test');

hotel.set(arr, 'Test');
hotel.set(document.querySelector('h1'), 'Heading');
console.log(hotel);
console.log(hotel.size);

// console.log(hotel.get([1, 2])); // This won't display the Test because they are not the same object in the heap.

console.log(hotel.get(arr));
*/

/*
// Sets

const orderSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Pasta', 'Risotto']);
console.log(orderSet);

console.log(new Set('kris'));

// We can get the size of the set
console.log(orderSet.size);

// To check if certain element is in a set
console.log(orderSet.has('Bread'));
console.log(orderSet.has('Pizza'));

// To add elements in a set
orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread');
console.log(orderSet);

// to delete elements in set
orderSet.delete('Risotto');
console.log(orderSet);

// to delete all of the elements of a set
// orderSet.clear();
// console.log(orderSet);

for (const order of orderSet) {
  console.log(order);
}

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

// convert a set to a array
const stuffUnique = [...new Set(staff)];
console.log(stuffUnique);

// Unique size of the array
console.log(new Set(staff).size);

console.log(new Set('KrisRego').size);

*/
/*

// Property NAMES
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;

for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

// Property VALUES
const values = Object.values(openingHours);
console.log(values);

// Entire object
const entries = Object.entries(openingHours);
console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

*/

/*
// Optional Chaining (?.)

restaurant.openingHours.mon && console.log(restaurant.openingHours.mon.open);

restaurant.openingHours &&
  restaurant.openingHours.mon &&
  console.log(restaurant.openingHours.mon.open);

// with optinal chaining
console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours.mon.open); // This will give an error

console.log(restaurant.openingHours?.mon?.open);

// Example

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

for (const day of days) {
  // you have to use [] and not . for object because you will able to make it dynamic -> ex the day right now
  const open = restaurant['openingHours'][day]?.['open'] ?? 'closed';
  console.log(`On ${day}, we open at : ${open}`);
}

// Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// Arrays
const users = [{ name: 'Kris', email: 'krisrego@gmai.com' }];

console.log(users[0]?.name ?? 'User array empty');

// solid selecting a object inside a array
console.log(users[0].name);

// by using if else and not optinal chaining
if (users.length > 0) {
  console.log(users[0].name);
} else {
  console.log('User array empty');
}

*/

/*
// for of loop


const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

// console.log([...menu.entries()]);

*/

/*

const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazze',
  owner: 'Giovanni Rossi',
};

// OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// nullish assignment operator (null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// AND assignment operator
// rest1.owner = rest1.owner && `<ANONOYMOUS`;
// rest2.owner = rest2.owner && `<ANONOYMOUS`;
rest1.owner &&= `<ANONOYMOUS`;
rest2.owner &&= `<ANONYMOUS>`;

console.log(rest1);
console.log(rest2);

*/

/*

// Nullish Coalescing Operator (??)

restaurant.numGuest = 0;
const guests = restaurant.numGuest || 10;
console.log(guests);

const guestCorrect = restaurant.numGuest ?? 10;
console.log(guestCorrect);

*/
/*

console.log(`-----OR-----`);
// Use ANY data type, returns ANY data type, short-circuiting
console.log(3 || 'kris');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'hello' || 23 || null);

// restaurant.numGuests = 23;
const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guest1);

const guest2 = restaurant.numGuests || 10;
console.log(guest2);

console.log(`-----AND-----`);

console.log(0 && 'Kris');
console.log(7 && 'kris');
console.log('hello' && 23 && null && 'Kris');

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

*/

/*

// 1) Destructuring

// SPREAD, because we are using it on the right hand size of the assignment operator =
const arr = [1, 3, ...[4, 5, 6]];
console.log(arr);

// REST, because on LEFT side of the assignment operator =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2) Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('one', 'two', 'three', 'four');
restaurant.orderPizza('something');

*/

/*

// The Spread Operator

const arr = [7, 8, 9];
// const badNewArr = [1, 2, 3].concat(arr); -> using concat

const badNewArr = [1, 2, 3, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, 3, ...arr];
// Using arr without dots would have included a sub array on 3rd index
console.log(newArr); // Output -> [1,2,3,4...] <- array

console.log(...newArr); // Output -> 1,2,3,4,.. <- individual numbers

const newMenu = [...restaurant.mainMenu, 'Pancake'];
// Here we are building a new array from scratch
console.log(newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

// Iterables : arrays, strings, maps, sets. NOT objects

const str = 'Kris';
const letters = [...str, '', 'S.'];
console.log(letters);
console.log(...str);

// console.log(`${...str} Rego`); // Not gonna work ( Multiple values separated by a comma are usually only expected when we pass arguments into a function, or when we build a new array)

// Real-world example
const ingredients = [
  // prompt("let's make pasta!, Ingredient 1?"),
  // prompt("let's make pasta!, Ingredient 2"),
  // prompt("Let's make pasta!, Ingredent 3"),
];

console.log(ingredients);

// Old way
restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);

// New way --- better solution
restaurant.orderPasta(...ingredients);

// Objects
const newRestraurant = { foundedIN: 2002, ...restaurant, founder: 'Guiseppe' };
console.log(newRestraurant);

// no need for that shitty Object.assign()  method to copy a object
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Kris Rego';
console.log(restaurantCopy.name);
console.log(restaurant.name);

*/

/*

// Practical example for object destructuring
// here the property and index don't have to match the order in which we do destructuring
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

// Using the default values that are assigned in the parameter of the method.
restaurant.orderDelivery({
  address: 'Goa',
  starterIndex: 1,
});

// Destructuring Objects
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// Renaming the object names for our variables -> Giving new variable names using :
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log(restaurantName, hours, tags);

// Default values for objects if they don't exist
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating varaibles -- his example was a bit complex for my head
let one = 111;
let two = 999;
const obj = { a: 10, b: 20, c: 30 };
({ a: one, b: two } = obj);
console.log(one, two);

// Nested object - destructuring
const {
  fri: { open: o, close: c },
} = restaurant.openingHours;
console.log(o, c);


*/

/*

const arr = [1, 2, 3];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr; // Destructuring Arrays

console.log(a, b, c);
console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories;

console.log(main, secondary);

// Switching variables
// old way
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

// Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

const nested = [2, 4, [5, 6]];
// const [i, , j] = nested; // Output will entire array [5,6] for j
// console.log(i, j);

// nested array destructuring inside destructuring
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values -> when you don't know what elements the array has

const [p = 1, q = 1, r = 1] = [2];
console.log(p, q, r);

*/
