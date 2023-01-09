"use strict";

// const mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.cal = this.mass / this.height ** 2; // 'this' just for experimental purpose 'this.cal' not 'cal' you'll understand because it will add cal in the object and store it which was your purpose when writing this program, I kown it is stupid.
//     return this.cal;
//   },
// };

// const john = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     return this.mass / this.height ** 2;
//   },
// };

// if (mark.calcBMI() > john.calcBMI()) {
//   console.log(
//     `${mark["fullName"]}'s BMI ${mark.cal} is higher than ${
//       john.fullName
//     }'s ${john.calcBMI()}`
//   );
// } else {
//   console.log(
//     `${john["fullName"]}'s BMI ${john.calcBMI()} is higher than ${
//       mark.fullName
//     }'s ${mark.cal}`
//   );
// }

// console.log(mark); // If you see cal is added because of your 'this.cal' property

// Tutorial Solution

"use strict";

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

mark.calcBMI(); // Without this method call mark.bmi won't be available at all, because this method here it doesn't call itself. We'll need to explicitly call it.
john.calcBMI();

console.log(mark.bmi, john.bmi);

if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`
  );
} else if (john.bmi > mark.bmi) {
  console.log(
    `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.BMI})`
  );
}
