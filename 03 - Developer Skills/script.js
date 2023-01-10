/*

// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// PROBLEM:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - what is temperature amplitude ? -> It's the difference between the highest and lowest temperature
// - How to compute max and min temperature ?
// - What a sensor error? And what to do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temperature array
// - Find min value in temperature array
// - Subtract min from max (amplitude). and return it

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];
    if (typeof currentTemp !== 'number') continue;
    if (max < currentTemp) max = currentTemp;
    if (min > currentTemp) min = currentTemp;
  }
  console.log('Working with Single Array');
  console.log(max, min);
  return max - min;
};

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

console.log('');

// PROBLEM 2:
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? NO! Just merge two arrays

// 2) Breaking up into sub-problems
// - How to merge 2 arrays?

const twoArray = function (arrOne, arrTwo) {
  for (let i = 0; i < arrTwo.length; i++) {
    arrOne.push(arrTwo[i]);
  }

  let max = arrOne[0];
  let min = arrOne[0];

  for (let i = 0; i < arrOne.length; i++) {
    const currentTemp = arrOne[i];
    if (typeof currentTemp !== 'number') continue;
    if (max < currentTemp) max = currentTemp;
    if (min > currentTemp) min = currentTemp;
  }
  console.log('Working with Double Array');
  console.log(max, min);
  return max - min;
};

console.log(twoArray([1, 2, 3], [4, 5, 6]));

console.log('');

// Tutorial Solution using concat Array method

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];
    if (typeof currentTemp !== 'number') continue;
    if (max < currentTemp) max = currentTemp;
    if (min > currentTemp) min = currentTemp;
  }
  console.log('Working with Double Array - Tutorial Solution');
  console.log(max, min);
  return max - min;
};

const amplitudeNew = calcTempAmplitudeNew([1, 2, 3], [4, 5, 6]);
console.log(amplitudeNew);

*/

/*
'use strict';

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    // C) FIX
    // value: Number(prompt('Degrees celsius:')),
    value: 10,
  };

  // B) FIND
  console.table(measurement);
  //   console.log(measurement['value']);
  //   console.warn(measurement['value']);
  //   console.error(measurement['value']);

  const kelvin = measurement['value'] + 273;
  return kelvin;
};

// A) IDENTIFY
console.log(measureKelvin());

// Using a debugger

const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  let max = 0;
  // C) FIX
  let min = 0; // <- This was the bug because the min value would have been always 0.
  // This should let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];
    if (typeof currentTemp !== 'number') continue;
    if (max < currentTemp) max = currentTemp;
    // B) FIND
    if (min > currentTemp) min = currentTemp;
    debugger; // <-- It will open up the debugger and the stop the execution here
  }

  console.log('Working with Double Array - Tutorial Solution');
  console.log(max, min);
  return max - min;
};

const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);

// A) IDENTIFY
console.log(amplitudeBug);

*/
