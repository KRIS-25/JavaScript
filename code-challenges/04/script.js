/*

Steven wants to build a very simple tip calculator for whenever he goes eating in a
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
300. If the value is different, the tip is 20%.
Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
this. It's not allowed to use an if/else statement � (If it's easier for you, you can
start with an if/else statement, and then try to convert it to a ternary
operator!)
2. Print a string to the console containing the bill value, the tip, and the final value
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
316.25”
Test data:
-> Data 1: Test for bill values 275, 40 and 430
Hints:
-> To calculate 20% of a value, simply multiply it by 20/100 = 0.2
-> Value X is between 50 and 300, if it's >= 50 && <= 300 

*/

//Unquie solution where below 50 results in 0 value

const bill = 430;
const tip =
  bill <= 50 ? "0" : `${bill <= 300 ? (15 * bill) / 100 : (20 * bill) / 100}`;
/*
    `${bill <= 300 ? (15 * bill) / 100 : (20 * bill) / 100}` <- had enclosed in a string so output is also a string which 
    had to be converted to a number using type conversion
  */

console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${
    Number(bill) + Number(tip)
  }`
);

/*

Problem, only wanted the tip of 15% between 50 to 300, and everything outside this condition should be 20%. so below 50 also the tip will be 20%, which in the first solution, I didn't take that into consideration.

*/

const billSolution = 275;
const tipSolution =
  billSolution <= 300 && billSolution >= 50
    ? (15 * billSolution) / 100
    : (20 * billSolution) / 100;
console.log(
  `The bill was ${billSolution}, the tip was ${tipSolution}, and the total value ${
    billSolution + tipSolution
  }`
);
