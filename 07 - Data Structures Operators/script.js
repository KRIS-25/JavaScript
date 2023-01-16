'use strict';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // We destructured the incoming object in variable names in this parameter
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your declicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza: function (mainIngredent, ...otherIngredent) {
    console.log(mainIngredent);
    console.log(otherIngredent);
  },
};

const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazze',
  owner: 'Giovanni Rossi',
};

/*

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
