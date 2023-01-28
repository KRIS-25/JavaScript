/*

Julia and Kate are still studying dogs, and this time they are studying if dogs are
eating too much or too little.
Eating too much means the dog's current food portion is larger than the
recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10%
above and 10% below the recommended portion (see hint).
Your tasks:
1. Loop over the 'dogs' array containing dog objects, and for each dog, calculate
the recommended food portion and add it to the object as a new property. Do
not create a new array, simply loop over the array. Forumla:
recommendedFood = weight ** 0.75 * 28. (The result is in grams of
food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too
little. Hint: Some dogs have multiple owners, so you first need to find Sarah in
the owners array, and so this one is a bit tricky (on purpose) �
3. Create an array containing all owners of dogs who eat too much
('ownersEatTooMuch') and an array with all owners of dogs who eat too little
('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and
Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat
too little!"
5. Log to the console whether there is any dog eating exactly the amount of food
that is recommended (just true or false)
6. Log to the console whether there is any dog eating an okay amount of food
(just true or false)
7. Create an array containing the dogs that are eating an okay amount of food (try
to reuse the condition used in 6.)
8. Create a shallow copy of the 'dogs' array and sort it by recommended food
portion in an ascending order (keep in mind that the portions are inside the
array's objects )
The Complete JavaScript Course 26
Hints:
-> Use many different tools to solve these challenges, you can use the summary
lecture to choose between them 
-> Being within a range 10% above and below the recommended portion means:
current > (recommended * 0.90) && current < (recommended *
1.10). Basically, the current portion should be between 90% and 110% of the
recommended portion


*/

'use strict';

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 1.
dogs.forEach(
  (dog) => (dog.recomendedFood = Math.trunc(dog.weight ** 0.75 * 28))
);

console.log(dogs);

// 2.
const sarah = dogs.find((dog) => dog.owners.includes('Sarah'));

// My code -> 2
// (dog) => dog.owners[dog.owners.indexOf('Sarah')] === 'Sarah'

console.log(
  `Sarah's dog is eating too ${
    sarah.curFood > sarah.recomendedFood ? 'Much!' : 'Little!'
  }`
);

// 3.
const { much, little } = dogs.reduce(
  (cur, value) => {
    cur[value.curFood >= value.recomendedFood ? 'much' : 'little'].push(
      value.owners
    );

    return cur;
  },
  { much: [], little: [] }
);

const ownersEatTooMuch = much.flat();
const ownersEatTooLittle = little.flat();

console.log(much.flat());
console.log(little.flat());

// 4.

console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

// 5.

const exact = dogs.some((dog) => dog.curFood === dog.recomendedFood);

console.log(exact);

// 6.
// Resuing best usecase
const checkEatingOkay = (food) =>
  food.curFood > (food.recomendedFood * 90) / 100 &&
  food.curFood < (food.recomendedFood * 110) / 100;

const okayAmount = dogs.some(checkEatingOkay);

console.log(okayAmount);

// 7.
const okayAmountDisplay = dogs
  .filter(checkEatingOkay)
  .flatMap((own) => own.owners);

console.log(okayAmountDisplay);

// 8.

// const sort = dogs
//   .slice()
//   .map((rFood) => rFood.recomendedFood)
//   .sort((a, b) => a - b);

const dogsSorted = dogs.slice().sort((a, b) => {
  if (a.recomendedFood > b.recomendedFood) return 1;
  if (b.recomendedFood > a.recomendedFood) return -1;
});

console.log(dogsSorted);
