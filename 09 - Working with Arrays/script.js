'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const mov = sort ? movements.slice().sort((a, b) => a - b) : movements;

  mov.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__value">${mov}&#8377;</div>
  </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

// displayMovements(account1.movements);

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.innerHTML = `${acc.balance}&#8377;`;
};

// calcDisplayBalance(account1.movements);

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.innerHTML = `${incomes}&#8377;`;

  const outGoing = acc.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.innerHTML = `${Math.abs(outGoing)}&#8377;`;

  const interest = acc.movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * acc.interestRate) / 100)

    // if interest of deposit = 1
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })

    .reduce((acc, value) => acc + value, 0);

  labelSumInterest.innerHTML = `${interest}&#8377;`;
};

// calcDisplaySummary(account1.movements);

const createUsernames = function (acc) {
  acc.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map((word) => word[0])
      .join('');
  });
};

createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);

  // Display balance
  calcDisplayBalance(acc);

  // Display Summary
  calcDisplaySummary(acc);
};

// Event handler
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = '100';

    // Refactor code
    // // Display movements
    // displayMovements(currentAccount.movements);

    // // Display balance
    // calcDisplayBalance(currentAccount);

    // // Display Summary
    // calcDisplaySummary(currentAccount);

    // Update UI
    updateUI(currentAccount);

    // Clearing input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    (acc) => inputTransferTo.value === acc.username
  );

  inputTransferTo.value = inputTransferAmount.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);

  // Atleast 1 deposit should be 10 percent of the loan
  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => mov >= amount / 10)
  ) {
    // Add movement
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }

  // clear input fields
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      (acc) => acc.username === currentAccount.username
    );

    // Delete Account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

// console.log(accounts);

/*

// filter method
const deposits = movements.filter(function (mov) {
  return mov > 0;
});

console.log(movements);
console.log(deposits);

// With For of loop
const depositsFor = [];
for (const mov of movements) {
  if (mov > 0) {
    depositsFor.push(mov);
  }
}
console.log(depositsFor);

// filter method
const withdrawal = movements.filter((mov) => mov < 0);
console.log(withdrawal);

*/

/*

console.log(movements);

// accumulator -> SNOWBALL
const balance = movements.reduce((acc, cur) => acc + cur, 0);

console.log(balance);

// with a for of loop

let balance2 = 0;
for (const mov of movements) {
  balance2 += mov;
}

console.log(balance2);

// Maximum value
const max = movements.reduce((acc, value) => {
  if (value > acc) {
    return value;
  } else {
    return acc;
  }
}, movements[0]);

console.log(max);

*/

/*
const rsToUsd = 0.012;

// PIPELINE

const totalDepositsUSD = movements
  .filter((mov) => mov > 0)
  .map((mov, i, arr) => {
    // console.log(arr);
    return mov * rsToUsd;
  })

  .reduce((acc, mov) => acc + mov, 0);

console.log(totalDepositsUSD);
*/

/*

const firstWithdrawal = movements.find((mov) => mov < 0);

console.log(firstWithdrawal);

// next code

console.log(accounts);

const account = accounts.find((acc) => acc.owner === 'Jessica Davis');

console.log(account);

// for of
for (const acc of accounts) {
  acc.owner === 'Jessica Davis' && console.log(acc);
}

*/

/*
// EQUAILITY
console.log(movements.includes(-130));

// SOME CONDITION
console.log(movements.some((mov) => mov === -130));

const anyDeposits = movements.some((mov) => mov > 5000);

console.log(anyDeposits);

// EVERY
console.log(movements.every((mov) => mov > 0));

console.log(account4.movements.every((mov) => mov > 0));

// Separate callback
const deposit = (mov) => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));

*/

/*
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2));

const overalBalance = accounts
  .map((acc) => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);

console.log(overalBalance);

// flatMap

const overalBalance2 = accounts
  .flatMap((acc) => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);

console.log(overalBalance2);
*/

/*

// Strings
const owners = ['Kris', 'Ali', 'Alex', 'Martha'];
console.log(owners.sort());
console.log(owners);

// Numbers
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);
console.log(movements.sort()); // order like strings..

console.log(``);

// return < 0, A, B    --> (keep order)
// return > 0, B, A    --> (switch order)

// ascending order -> small to large
movements.sort((a, b) => {
  if (a > b) return 1;

  if (b > a) return -1;
});
console.log(movements);

// descending order
movements.sort((a, b) => {
  if (a > b) return -1;

  if (b > a) return 1;
});
console.log(movements);

console.log(``);

// Kris use atleast 10% of your head to understand this....
movements.sort((a, b) => a - b); // a - b => if return is -1 or 1 depending on it will change

console.log(movements);

*/

/*

const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

// Creates an array with 7 empty elements -> weird behaviour
const x = new Array(7);
console.log(x);
// console.log(x.map(() => 5)); // Doesn't work

// x.fill(1);
x.fill(1, 2, 5);
console.log(x);

arr.fill(5, 0, 3); // Mutates the original array
console.log(arr);

// Array.from
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    (el) => Number(el.textContent.replace('₹', ''))
  );

  console.log(movementsUI);

  // Using the spread operator
  const movementsUI2 = [...document.querySelectorAll('.movements__value')].map(
    (el) => Number(el.textContent.replace('₹', ''))
  );

  console.log(movementsUI2);
});

*/

/*

// 1. Total Deposits of all the accounts

const bankDespositSum = accounts
  .flatMap((acc) => acc.movements)
  .filter((mov) => mov > 0)
  .reduce((acc, value) => acc + value, 0);

console.log(bankDespositSum);

// 2. Program to check how many desposits are greater 1000

// const numDeposits1000 = accounts
//   .flatMap((acc) => acc.movements)
//   .filter((acc) => acc >= 1000).length;

const numDeposits1000 = accounts
  .flatMap((acc) => acc.movements)
  .reduce((count, value) => (value > 1000 ? ++count : count), 0);

console.log(numDeposits1000);

// Prefixed ++ operator
let a = 10;
console.log(++a);
console.log(a);

// 3.  reduce method is overpowered you can create objects with reduce
const { deposits, withdrawals } = accounts
  .flatMap((acc) => acc.movements)
  .reduce(
    (sum, value) => {
      // value > 0 ? (sum.deposits += value) : (sum.withdrawals += value);

      sum[value > 0 ? 'deposits' : 'withdrawals'] += value;
      return sum;
    },
    { deposits: 0, withdrawals: 0 }
  );

console.log(deposits, withdrawals);

// 4.
// function to create any string to title case
// this is a nice title -> This Is a Nice Title

const convertTitleCase = function (title) {
  const capitalize = function (str) {
    return str[0].toUpperCase() + str.slice(1);
  };

  const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];

  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map((value) => (exceptions.includes(value) ? value : capitalize(value)))
    .join(' ');

  return capitalize(titleCase);
};

console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONG title but not tooo long'));
console.log(convertTitleCase('and here is another title with an Example'));

*/
