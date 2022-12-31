// Remember, we're gonna use strict mode in all scripts now!
"use strict";

const helloWorld = "hello world";

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this:
// "Given an array of temperature of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error"

// const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// 1. Understanding the problem
// - Amplitude is the difference between the minimum and maximum temperature that occured within a specific time
// - How to compute max and min temperatures?
// - What is a sensor error, and what to do if it occurs?

// 2. Breaking up into sub problems
// - How to ignore errors?
// - find max value
// - find min value
// - subtract min from max (amplitude) and return it

// 3. Do research using google, stackoverflow or mdn

// 4. For bigger problems, write pseudo-code, before writing the actual code.

// let max = temperatures[0];
// let min = temperatures[0];
// const calcTempAmplitude = function (temps) {
//   for (let i = 0; i < temperatures.length; i++) {
//     // console.log(i, typeof temperatures[i], temperatures[i]);
//     if (typeof temperatures[i] === "number") {
//       if (temperatures[i] > max) max = temperatures[i];
//       if (temperatures[i] < min) min = temperatures[i];
//     } else {
//       console.log("string!");
//       continue;
//     }
//   }
//   console.log(max, min);
//   return max - min;
// };

// console.log(calcTempAmplitude(temperatures));

// PROBLEM 2:
// Function should receive two arrays of temperatures and calculate the amplitude.

// 1. Understanding the problem
// - do I need to pass in two arrays as arguments to the function? - Yes
// - Should the function get min and max from both arrays and check which ones are the highest and lowest to calculate the amplitude?
// - Should the function calculate amplitude using a pool of values from both arrays? Maybe merge them together to avoid creating min and max variables for both arrays and comparing them?

// 2. Breaking up into sub problems
// How to merge two arrays? - use concat()
// Do I need a new variable to hold merged arrays? - Yes, because concat() returns a new array, without changing the existing one.

const temps1 = [3, -2, -6, -1, "error", 9, 13, 17, "error", 15, 14, 9, 5];
const temps2 = [12, -10, -4, -1, "error", 10, "error", 22, 34, "error", 2, 4];

const calcTempAmplitude = function (temps1, temps2) {
  const concatArray = temps1.concat(temps2);
  let max = concatArray[0];
  let min = concatArray[0];
  for (let i = 0; i < concatArray.length; i++) {
    const currentTemp = concatArray[i];
    // console.log(i, typeof concatArray[i], concatArray[i]);
    if (typeof currentTemp === "number") {
      if (currentTemp > max) max = currentTemp;
      if (currentTemp < min) min = currentTemp;
    } else {
      console.log("string!");
      continue;
    }
  }
  console.log(max, min);
  return max - min;
};

console.log(calcTempAmplitude(temps1, temps2));
