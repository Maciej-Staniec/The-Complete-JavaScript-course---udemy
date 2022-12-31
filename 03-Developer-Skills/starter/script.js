// Remember, we're gonna use strict mode in all scripts now!
"use strict";

const helloWorld = "hello world";

// PROBLEM:
// We work for a company building a smart home thermometer. Our most recent task is this:
// "Given an array of temperature of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error"

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

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

let max = temperatures[0];
let min = temperatures[0];
const calcTempAmplitude = function (temps) {
  for (let i = 0; i < temperatures.length; i++) {
    // console.log(i, typeof temperatures[i], temperatures[i]);
    if (typeof temperatures[i] === "string") {
      console.log("string!");
      continue;
    } else {
      if (temperatures[i] > max) max = temperatures[i];
      if (temperatures[i] < min) min = temperatures[i];
    }
  }
  console.log(max, min);
  return max - min;
};

console.log(calcTempAmplitude(temperatures));
