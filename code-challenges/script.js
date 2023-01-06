/*

Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).

Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.

Test data:
-> Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
-> Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.

*/

// Mark's Data 1
const marksMassDataOne = 78;
const marksHeightDataOne = 1.69;

// John's Data 1
const johnsMassDataOne = 92;
const johnsHeightDataOne = 1.95;

const marksBmiDataOne = marksMassDataOne / marksHeightDataOne ** 2;
const johnsBmiDataOne =
  johnsMassDataOne / (johnsHeightDataOne * johnsHeightDataOne);
console.log("Mark = ", marksBmiDataOne, ", John = ", johnsBmiDataOne);
let markHigherBMI = marksBmiDataOne > johnsBmiDataOne;
console.log("Mark has higher BMI " + markHigherBMI);

console.log("");
console.log("Data Two");

// Marks's Data 2
const marksMassDataTwo = 95;
const marksHeightDataTwo = 1.88;

// John's Data 2
const johnsMassDataTwo = 85;
const johnsHeightDataTwo = 1.76;

const marksBmiDataTwo = marksMassDataTwo / marksHeightDataTwo ** 2;
const johnsBmiDataTwo = johnsMassDataTwo / johnsHeightDataTwo ** 2;
let marksHigherBMI = marksBmiDataTwo > johnsBmiDataTwo;
console.log(marksBmiDataTwo, johnsBmiDataTwo, marksHigherBMI);
