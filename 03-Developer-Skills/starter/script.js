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

// const temps1 = [3, -2, -6, -1, "error", 9, 13, 17, "error", 15, 14, 9, 5];
// const temps2 = [12, -10, -4, -1, "error", 10, "error", 22, 34, "error", 2, 4];

// const calcTempAmplitude = function (temps1, temps2) {
//   const concatArray = temps1.concat(temps2);
//   let max = concatArray[0];
//   let min = concatArray[0];
//   for (let i = 0; i < concatArray.length; i++) {
//     const currentTemp = concatArray[i];
//     // console.log(i, typeof concatArray[i], concatArray[i]);
//     if (typeof currentTemp === "number") {
//       if (currentTemp > max) max = currentTemp;
//       if (currentTemp < min) min = currentTemp;
//     } else {
//       console.log("string!");
//       continue;
//     }
//   }
//   console.log(max, min);
//   return max - min;
// };

// console.log(calcTempAmplitude(temps1, temps2));

// Coding Challenge

// 1. Understanding the problem
// Create a function that will accept an array to an 'arr' parameter.
// How to print unknown number of values? - use for loop and loop over the length of the array
// How to print the a string containing the forecast? - concatenate those values to one string
// How to change the content of a forecast based on temperature value? use a string literal (template string) - `text`

// 2. Breaking up into sub problems
// Create an empty string to which a new string literal will be added on each iteration.
// How to concatenate each new string to the existing one?
// - use var1.concat(var2) method
// - use var += var2

// const printForecast = function (arr) {
//   let forecast = ``;
//   for (let i = 0; i < arr.length; i++) {
//     forecast += `${arr[i]}°C in 1 days ... `;
//   }
//   return forecast;
// };

// console.log(printForecast([17, 21, 23]));
// console.log(printForecast([12, 5, -5, 0, 4]));

// const measureKelvin = function () {
//   const measurement = {
//     type: "temp",
//     unit: "celsius",
//     value: prompt("Degrees Celsius:"),
//   };
//   console.log(measurement);
//   console.log(measurement.value, typeof measurement.value);
//   const kelvin = measurement.value + 273;
//   return kelvin;
// };

// 1. Identify the bug
// - We identified that the bug exists as the result of the function isn't as expected.
// console.log(measureKelvin());

// 2. Find the bug.
// - Since the bug is in the converted 'kelvin' value, let's check all the other values that make up the calculation of this value.
// - Check what is the value of the 'value' variable after prompt?
// - Check their type?
// - We found out that the 'value' is a string and '+' operator does type coercion on '273', and then concatenate both strings.

// 3. Fix the bug.
// - Convert the prompt 'value' to a number.

// 4. Prevent the bug.
// - convert it right after getting the user's input.
// const measureKelvin = function () {
//   const measurement = {
//     type: "temp",
//     unit: "celsius",
//     value: Number(prompt("Degrees Celsius:")),
//   };
//   console.table(measurement);
//   console.log(measurement.value, typeof measurement.value);
//   const kelvin = measurement.value + 273;
//   return kelvin;
// };

// console.log(measureKelvin());

// Using debugger.
// Let's introduce bigger bug using the amplitude function we created earlier.

const temps1 = [3, -2, -6, -1, "error", 9, 13, 17, "error", 15, 14, 9, 5];
const temps2 = [12, -10, -4, -1, "error", 10, "error", 22, 34, "error", 2, 4];

const calcTempAmplitudeBug = function (temps1, temps2) {
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

console.log(calcTempAmplitudeBug(temps1, temps2));
