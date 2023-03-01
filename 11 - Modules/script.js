/*

// importing module
// import {
//   addToCart,
//   totalPrice as price, // renaming imports.
//   tq,
// } from './shoppingCart.js';
// addToCart('bread', 5);
// console.log(price, tq);

console.log('importing moudule');

// import * as ShoppingCart from './shoppingCart.js'; // capitalize first letter convention
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);

// We can name default exports anythng we like
// import add, { totalPrice as price, tq } from './shoppingCart.js';
// console.log(price, tq);

import add, { cart } from './shoppingCart.js';
add('pizza', 2);
add('bread', 5);
add('apples', 4);

console.log(cart);

*/

/*

// console.log('Start fetching');
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);

const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  //   console.log(data);

  return { title: data.at(-1).title, text: data.at(-1).body };
};

const lastPost = getLastPost();
console.log(lastPost);

// // Not very clean
// lastPost.then((res) => console.log(res));

const lastPost2 = await getLastPost();
console.log(lastPost2);

*/

(function () {
  const cart = [];
  const shoppingCart = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to cart`);
  };

  const orderStock = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();
