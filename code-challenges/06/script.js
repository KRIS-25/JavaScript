/*

Steven is still building his tip calculator, using the same rules as before: Tip 15% of
the bill if the bill value is between 50 and 300, and if the value is different, the tip is
20%.
Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns
the corresponding tip, calculated based on the rules above (you can check out
the code from first tip calculator challenge if you need to). Use the function
type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data
below
3. Create an array 'tips' containing the tip value for each bill, calculated from
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip
Test data: 125, 555 and 44
Hint: Remember that an array needs a value in each position, and that value can
actually be the returned value of a function! So you can just call a function as array
values (so don't store the tip values in separate variables first, but right in the new
array)

*/

"use strict";

// const calcTip = function (biLLTotal) {
//   if (biLLTotal <= 300 && biLLTotal >= 50) {
//     return (biLLTotal * 15) / 100;
//   } else {
//     return (biLLTotal * 20) / 100;
//   }
// };

// const bill = [125, 555, 44];
// const tip = new Array(
//   calcTip(bill[0]),
//   calcTip(bill[1]),
//   calcTip(bill[bill.length - 1])
// );
// const total = [bill[0] + tip[0], bill[1] + tip[1], bill[2] + bill[2]];

// console.log(bill, tip);
// console.log(total);

// console.log(
//   `Bill : ${bill}, Tip : ${calcTip(bill)}, Total Bill : ${calcTip(bill) + bill}`
// );

// Tutorial Solution

// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? (bill * 15) / 100 : (bill * 20) / 100; // --> Ternary Operator
// };

const calcTip = (bill) => (50 <= 300 ? (bill * 15) / 100 : (bill * 20) / 100);

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + bills[2]];

console.log(bills, tips, totals);
