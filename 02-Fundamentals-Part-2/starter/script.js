"use strict";
// Strict mode forbids us to do certain things and it will create visible errors in the developer console in certain situations, in which without strict mode, JS would fail silently.

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriverLicense = true;
// if (hasDriversLicense) console.log("I can drive");

// const interface = "Audio";
// The community which add features to JS reserved the 'interface' word for future use, so it won't break your code, once the feature is introduced.

// const private = "public";
// same applies to 'private' keyword.

// Function declarations vs expressions.

// Function declaration
// function calcAge1(birthYear) {
//   return 2022 - birthYear;
// }

// console.log(calcAge1(1994));

// Function expression - assigning an anonymous function (without a name) as an expression to a variable. Remember that expressions produce a value.
// const calcAge2 = function (birthYear) {
//   return 2022 - birthYear;
// };

// console.log(calcAge2(1994));

// Arrow functions
// const calcAge3 = (birthYear) => 2022 - birthYear;
// In arrow functions, if we ony use 1 parameter, we don't need to use round brackets, and the value gets returned implicitly - we don't have to explicitly write the 'return' keyword.
// Arrow functions can be extremely helpful in certain situations.

// Let's write a more complex arrow function.
// const yearsUntilRetirement = (birthYear, fName) => {
//   const age = 2022 - birthYear;
//   return `${fName}, you will retire in ${65 - age} years.`;
// };

// console.log(yearsUntilRetirement(1994, "Maciek"));

// Reviewing functions

// const calcAge = (birthYear) => 2022 - birthYear;

// const yearsUntilRetirement = function (birthYear, fName) {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;
//   return retirement > 0
//     ? `${fName}, you will retire in ${
//         retirement === 1 ? "1 year" : `${retirement} years.`
//       }`
//     : `${fName}, you are already retired. Happy retirement! :D`;
// };

// console.log(yearsUntilRetirement(1957, "Maciek"));

// const describeCountry = function (country, population, capitalCity) {
//   return `${country} has ${population} million people and its capital city is ${capitalCity}`;
// };

// const poland = describeCountry("Poland", "42", "Warsaw");
// const germany = describeCountry("Germany", "50", "Berlin");
// const uk = describeCountry("England", "31", "London");

// console.log(`${poland}
// ${germany}
// ${uk}
// `);
// const worldPopulation = 7900;

// function percentageOfWorld1(population) {
//   return (population / worldPopulation) * 100;
// }

// const china = percentageOfWorld1("1441");
// console.log(Math.round(china * 100) / 100);

// const percentageOfWorld2 = function (population) {
//   return (population / worldPopulation) * 100;
// };

// const poland = percentageOfWorld1("44");
// console.log(Math.round(poland * 100) / 100);

// const worldPopulation = 7900;

// const percentageOfWorld3 = (population) => (population / worldPopulation) * 100;

// const describePopulation = function (country, population) {
//   const percentage = percentageOfWorld3(population);
//   return `${country} has ${population} million people, which is about ${
//     Math.round(percentage * 100) / 100
//   }% of the world.`;
// };

// const poland = describePopulation("Poland", "44");
// const china = describePopulation("China", "1441");

// console.log(`${poland}
// ${china}`);

// const calcAverage = (score1, score2, score3) => {
//   return (score1 + score2 + score3) / 3;
// };

// const checkWinner = function (avgKoalas, avgDolphins) {
//   if (avgKoalas >= avgDolphins * 2) {
//     return `Koalas win (${avgKoalas} vs. ${avgDolphins})`;
//   } else if (avgDolphins >= avgKoalas * 2) {
//     return `Dolphins win (${avgDolphins} vs. ${avgKoalas})`;
//   } else {
//     return `No team wins...`;
//   }
// };
// console.log(checkWinner(calcAverage(44, 23, 71), calcAverage(65, 54, 49)));
// console.log(checkWinner(calcAverage(85, 54, 41), calcAverage(23, 34, 27)));

// Arrays

// function calcAge(birthYear) {
//   return 2022 - birthYear;
// }

// const years = [1990, 1981, 1984, 1994, 2000];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [
//   calcAge(years[0]),
//   calcAge(years[1]),
//   calcAge(years[years.length - 1]),
// ];

// console.log(ages);

// // Basic Array methods

// const friends = ["Michael", "Steven", "Peter"];
// friends.push("Jay");
// console.log(friends);

// // To get a length of the array after we add a new element to it, we can assign the push method to a variable.
// const newLength = friends.push("Maciek");
// console.log(friends);
// console.log(newLength);

// // add elements to the beginning of the array object using unhsift() method. It also returns a number of existing elements in the array.
// friends.unshift("John");
// console.log(friends);

// // Remove last element of the array using .pop() method. It returns the removed element.
// const poppedFriends = [];
// poppedFriends.push(friends.pop());
// console.log(friends);
// console.log(poppedFriends);

// // Remove first element of the array using .shift method(). It returns the removed element.
// friends.shift();
// console.log(friends);

// // Get the element index of a specified value using .indexOf() method.
// console.log(friends.indexOf("Steven"));

// // ES6 equivalent to the indexOf() method is .includes() which returns 'true' or 'false'.
// console.log(friends.includes("Steven"));
// console.log(friends.includes("Bob"));
// // Notice that it checks with strict equality. It doesn't perform type coercion.
// friends.push("23");
// console.log(friends.includes(23));

// friends.includes("Maciek")
//   ? console.log(`hello Maciek!`)
//   : console.log("That person doesn't exist");

// // Array Assignments

// const worldPopulation = 7900;
// const populations = [44, 1441, 30, 20];
// console.log(populations.length === 4);
// const percentageOfWorld3 = (population) => (population / worldPopulation) * 100;
// const percentages = [
//   percentageOfWorld3(populations[0]),
//   percentageOfWorld3(populations[1]),
//   percentageOfWorld3(populations[2]),
//   percentageOfWorld3(populations[3]),
// ];
// console.log(percentages);

// const neighbours = [
//   "Germany",
//   "Slovakia",
//   "The czech republic",
//   "Russia",
//   "Lithuania",
//   "Belarus",
//   "Ukraine",
// ];

// neighbours.push("Utopia");
// neighbours.pop();
// neighbours.includes("Germany")
//   ? console.log("It is a central European country :D")
//   : console.log("It isn't a central European country :D");
// neighbours[neighbours.indexOf("Slovakia")] = "The republic of Slovakia";
// console.log(neighbours);

// // Coding challenge 2
// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(tips);

// // Objects

// const maciej = {
//   firstName: "Maciej",
//   lastName: "Staniec",
//   age: 2037 - 1991,
//   job: "unemployed",
//   // Objects can hold another objects
//   friends: ["Michael", "Jonas", "Peter"],
// };
// // Creating object using curly braces is called object literal Syntax, because we are literally writing down the content of the object.

// // There are multiple ways to create objects in JS.

// // We use objects to group together variables that have something in common.
// // Use objects if you need unordered data, data that we need to name and then retrieve based on that name. On the other hand, use arrays if you need ordered data, the order matters a lot in arrays.

// console.log(maciej);

// // use '.' (dot) operator to retrieve property from an object.
// console.log(maciej.firstName);
// // Another way to retrieve property from an object is using a bracket notation. The difference between dot and bracket notation is that we can use expressions in bracket notations.
// console.log(maciej["firstName"]);
// const nameKey = "Name";
// console.log(maciej[`first${nameKey}`]);
// console.log(maciej[`last${nameKey}`]);

// const interestedIn = prompt(
//   "What do you want to know about Maciej? Choose between firstName, lastName, age, job and friends"
// );
// // Check if the property exists in the object.
// maciej[interestedIn]
//   ? console.log(maciej[interestedIn])
//   : console.log("Wrong choice");

// Let's set a new property for the 'maciej' object.

// maciej.location = "Poland";
// maciej["instagram"] = "mackozstce";
// console.log(maciej);
// maciej[interestedIn]
//   ? console.log(maciej[interestedIn])
//   : console.log("Wrong choice");

// console.log(
//   `${maciej.firstName} has ${maciej.friends.length} friends and his best friend is called ${maciej.friends[1]}`
// );

// Objects contain properties which are key:value pairs. Functions are values in JS, that means we can add functions to objects as a property, and those properties are called METHODS.

// const maciej = {
//   firstName: "Maciej",
//   lastName: "Staniec",
//   birthYear: 1994,
//   job: "unemployed",
//   // Objects can hold another objects
//   friends: ["Michael", "Jonas", "Peter"],
//   hasDriversLicense: true,
//   calcAge: function (birthYear) {
//     return 2022 - birthYear;
//   },
// };
// // Let's calculate age using calcAge method
// console.log(maciej.calcAge(1994));
// console.log(maciej["calcAge"](1994));

// // The above solution isn't ideal as we don't keep our code DRY. We should use the 'age' property, instead of passing in a new value. To do this, we have to use 'this' keyword.
// // 'this' is a keyword which let us refer to the object.
// const maciej = {
//   firstName: "Maciej",
//   lastName: "Staniec",
//   birthYear: 1994,
//   job: "unemployed",
//   // Objects can hold another objects
//   friends: ["Michael", "Jonas", "Peter"],
//   hasDriversLicense: true,
//   calcAge: function () {
//     // 'this' points to the object.
//     console.log(this);
//     return 2022 - this.birthYear;
//     // Let's use 'this' on the birthYear, so the method know that we want to use object's property. We don't need to pass in arguments anymore, as the method knows we point to the object's 'birthYear' property, thanks to 'this' keyword.
//   },
// };

// console.log(maciej.calcAge());
// console.log(maciej.calcAge());
// console.log(maciej.calcAge());

// // The drawback of the above code is that we have to call a method on the object everytime we want to calculate the age. It has to be computed each time as it isn't stored in a property.

// // let's make calcAge() method to count age and store it in a new property, so it can be called only once.
// // to do this, again, we have to use the 'this' keyword.

// const maciej = {
//   firstName: "Maciej",
//   lastName: "Staniec",
//   birthYear: 1994,
//   job: "student",
//   friends: ["Michael", "Jonas", "Peter"],
//   hasDriversLicense: true,
//   calcAge: function () {
//     this.age = 2022 - this.birthYear;
//     // we don't have to return anything, we can make this method only calculate the age.
//     return this.age;
//   },
//   getSummary: function () {
//     this.summary = `${this.firstName} is a ${this.age} years old ${
//       this.job
//     }, and he ${
//       this.hasDriversLicense ? `has` : `hasn't got`
//     } a driving license. He has ${this.friends.length} friends - ${
//       this.friends[0]
//     }, ${this.friends[1]}, ${this.friends[2]}`;
//     return this.summary;
//   },
// };

// maciej.calcAge();
// console.log(maciej.age);

// // Challenge - write a method storing and returning the following string: "Maciej is a 28 years old student, and he has a driving license. He has 3 friends - Michael, Jonas, Peter."

// maciej.getSummary();
// console.log(maciej.summary);
// console.log(maciej.summary);

// // Assignment
// const myCountry = {
//   country: "Poland",
//   capital: "Warsaw",
//   language: "polish",
//   population: 44,
//   neighbours: [
//     "Germany",
//     "Slovakia",
//     "Czech",
//     "Russia",
//     "Lithuania",
//     "Belarus",
//     "Ukraine",
//   ],
//   describe: function () {
//     console.log(
//       `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and the capital called ${this.capital}`
//     );
//   },
//   checkIsland: function () {
//     this.neighbours ? (this.isIsland = false) : (this.isIsland = true);
//     return this.isIsland;
//   },
// };
// myCountry.describe();
// console.log(myCountry.checkIsland());

// // Coding challenge
// const markMiller = {
//   firstName: "Mark",
//   lastName: "Miller",
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.bmi = Math.round((this.mass / this.height ** 2) * 10) / 10;
//   },
// };

// const johnSmith = {
//   firstName: "John",
//   lastName: "Smith",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.bmi = Math.round((this.mass / this.height ** 2) * 10) / 10;
//   },
// };

// markMiller.calcBMI();
// johnSmith.calcBMI();

// console.log(
//   markMiller.bmi > johnSmith.bmi
//     ? `${markMiller.firstName}'s BMI (${markMiller.bmi}) is higher than ${johnSmith.firstName}'s (${johnSmith.bmi})!`
//     : `${johnSmith.firstName}'s BMI (${johnSmith.bmi}) is higher than ${markMiller.firstName}'s (${markMiller.bmi})!`
// );

// // The for loop
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights, repetition ${rep} 🏋️‍♂️`);
// }

// const maciejsArray = [
//   "Maciej",
//   "Staniec",
//   2022 - 1994,
//   "student",
//   ["Michael", "Peter", "Steven"],
//   true,
// ];

// const types = [];

// for (let i = 0; i < maciejsArray.length; i++) {
//   console.log(maciejsArray[i]);
//   // types[i] = typeof maciejsArray[i];
//   types.push(typeof maciejsArray[i]);
// }

// console.log(types);

// const ageCalc = function (birthYear) {
//   return 2022 - birthYear;
// };

// const birthYears = [1992, 1990, 1980, 1971, 1950];
// const ages = [];

// for (let i = 0; i < birthYears.length; i++) {
//   ages.push(ageCalc(birthYears[i]));
// }

// console.log(ages);

// // continue and break keywords.
// // With the 'continue' we can exit the current iteration of the loop.

// for (let i = 0; i < maciejsArray.length; i++) {
//   // if the element is not a 'string' type, the current iteration will exit once we use continue, and no code under the if statement will be executed.
//   if (typeof maciejsArray[i] !== "string") continue;
//   console.log(typeof maciejsArray[i]);
//   types.push(typeof maciejsArray[i]);
// }
// console.log(types);

// for (let i = 0; i < maciejsArray.length; i++) {
//   // The 'break' keyword completely exists the for loop once the specified condition is met.
//   if (typeof maciejsArray[i] === "number") break;
//   console.log(maciejsArray[i]);
// }

// // Looping backwards
// const maciejsArray = [
//   "Maciej",
//   "Staniec",
//   2022 - 1994,
//   "student",
//   ["Michael", "Peter", "Steven"],
//   true,
// ];

// for (let i = maciejsArray.length - 1; i >= 0; i--) {
//   console.log(i, maciejsArray[i]);
// }

// for (let exercise = 1; exercise <= 3; exercise++) {
//   console.log(`Time for exercise ${exercise}!`);
//   for (let rep = 1; rep <= 5; rep++) {
//     console.log(`Starting exercise ${exercise}`);
//     console.log(`UH AH REP ${rep}`);
//   }
// }

// // While loops

// // In while loops we can only specify the condtition.
// let rep = 1;
// while (rep <= 10) {
//   console.log(`UH AH REP ${rep}`);
//   rep++;
// }

// // While loops are move versatile. They don't need counters.
// let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);
// while (dice !== 6) {
//   dice = Math.trunc(Math.random() * 6) + 1;
//   console.log(dice);
// }

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// for (let i = 0; i < bills.length; i++) {
//   tips.push(calcTip(bills[i]));
//   totals.push(tips[i] + bills[i]);
// }

// console.log(tips);
// console.log(totals);

// const calcAverage = function (arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum / arr.length;
// };

// console.log(calcAverage(bills));
// console.log(calcAverage(totals));
