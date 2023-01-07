'use strict';

// function calcAge(birthYear) {
//   // const firstName = 'Steven';
//   const age = 2037 - birthYear;
//   function printAge() {
//     let output = `output = You are ${age}, born in ${birthYear}`;
//     console.log(output);
//     var firstName = 'Maciek';
//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;
//       const output = `ouput = OUTPUT HAS CHANGED`;
//       const str = `You are a millenial, ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//       add(2, 3);
//     }
//     console.log(output);
//     console.log(millenial);
//     // add(2, 3);
//   }

//   function printName() {
// console.log(firstName); /* Notice, that 'Maciek' value declared as a firstName variable with a var keyword isn't logged. It's because 'var' keyword makes variables available only in the closest function scope. */
//     // If we comment out firstName in the global scope, we get referrence error - variable undefined
//   }
//   printAge();
//   printName();
//   console.log(firstName);
//   return age;
// }

// const firstName = 'Jonas';

// calcAge(1991);

/* --------------------------------- Hoisting --------------------------------- */

/* --------------------------------- hoisting with variables --------------------------------- */

// console.log(me);
// // console.log(job);
// // console.log(birthYear);

// var me = 'Maciek';
// let job = 'student';
// const birthYear = 1991;

/* --------------------------------- Hoisting with functions --------------------------------- */

// console.log(addDecl(2, 3));

/* The code below is in TDZ (Temporal Dead Zone), therefore it can't be called, as functions needs
to be declared first. It is because these functions are declared with the 'const' keyword */

// console.log(addExpr(2, 3)); // ReferenceError: Cannot access 'addExpr' before initialization
// console.log(addArrow(2, 3)); // ReferenceError: Cannot access 'addArrow' before initialization

// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// const addArrow = (a, b) => a + b;

/* -------------------------------- Using the 'var' keyword with functions -------------------------------- */

// console.log(addExpr, addArrow);
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

/* Unfortunately, we can't get around the TDZ by declaring those functions with the 'var' keyword.
If we change the declaration keyword to 'var', those functions will get 'undefined' value.
Therefore, "Uncaught TypeError: addExpr is not a function" is produced. 
*/

// var addExpr = function (a, b) {
//   return a + b;
// };

// var addArrow = (a, b) => a + b;

/* ------------------------------------------ Pitfalls of hoisting ------------------------------------------*/

// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// var addArrow = (a, b) => a + b;

// // An example of why we shouldn't use the 'var' keyword to declare variables
// console.log(numProducts, typeof numProducts, Boolean(numProducts));
// console.log(!numProducts);

// /* Even, if the variable isn't initialized yet, it returns a falsy value because of its type - it is undefined.
// This can lead to unwanted function executions and logic errors. */
// if (!numProducts) deleteShoppingCart();
// console.log(numProducts);

// var numProducts = 10;
// console.log(numProducts);

// function deleteShoppingCart() {
//   console.log('All products deleted!');
// }
// console.log(numProducts);

/* -------------------------------------- Conclusion and best practices --------------------------------------*/

// 1. Don't declare variables with the 'var' keyword
// 2. You should declare variables with the 'const' keyword if possible
// 3. Use the 'let' keyword if you really need to reinitialize the variable later
// 4. Declare variables at the top of each scope
// 5. Always declare functions first and use them only after the declaration. This applies to all types of functions, even function declarations, which are hoisted.
//

/* ---------------------The last small difference between var, let and const keywords ---------------------*/

// go to the console and type window > enter. Notice, that 'x' variable is a property of 'window' object.
// the 'var' keyword creates a property on a window object, unlike 'let' and 'const' keywords.
// This can cause implications in some cases
// var x = 1;
// let y = 2;
// const z = 3;
// // // Let's test if the above statement is true
// console.log(x === window.x);

/* --------------------------------------------- "this" keyword --------------------------------------------- */

// // the 'this' keyword in the global scope is simply a window object.
// console.log(this);

// /* --------------------------------- "this" keyword in function expressions --------------------------------- */

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);

//   /* If we run code in the 'strict' mode, we get the undefined value when we try to print function's 'this'.
//   This is the rule for REGULAR function declarations and function expressions. Their 'this' don't refer to anything.
//   However, without using the 'strict' mode, the JS engine does a variable lookup, and 'this' points to global scope (the window object in this case)
//   */

//   console.log(this);
// };

// calcAge(1991);

// /* --------------------------------- "this" keyword in arrow functions --------------------------------- */

// const calcAgeArrow = birthYear => {
//   console.log(2037 - birthYear);
//   /*
//   The 'this' keyword of an arrow function is a lexical 'this' keyword, which means that it is the 'this' keyword of the parent object (the window object in this case). It points to the window object even if we use strict mode.
//   */
//   console.log(this);
// };

// calcAgeArrow(1980);

// /* --------------------------------- "this" in objects --------------------------------- */
// const jonas = {
//   year: 1991,
//   calcAge: function () {
//     // The 'this' keyword of this function points to the jonas' object scope
//     console.log(this);
//     /*  Thanks to 'this', we can now refer to the object's properties, so we don't have to pass in arguments from
//     outside scope. But why 'this' refers to the jonas object? Is it because it is written inside the jonas object?
//     NO NO NO
//     It is because it is called by jonas object
//     If we lend the code of this method to a different object, it will still work. Yes, we can lend methods.
//     It means, that 'this' keyword is NOT assigned to a specific object. It always refer to the scope in which it is
//     declared */
//     console.log(2037 - this.year);
//   },
// };

// console.log(jonas); // output - {year: 1991, calcAge: ƒ}
// jonas.calcAge(); // output - {year: 1991, calcAge: ƒ}

// /* --------------------------------- "this" in method borrowing --------------------------------- */

// const matilda = {
//   year: 2017,
// };

// // The example below is called 'method borrowing'.
// matilda.calcAge = jonas.calcAge;
// /* Look at the log result. The 'this' keyword isn't pointing to jonas object anymore. It is pointing to the matilda
// object. 'this' keyword isn't bonded to a specific object, even if it is declared within it. It is dynamic, not static.
// It always refers to the object on which we call the method.*/
// matilda.calcAge();

// const func = jonas.calcAge;
// console.log(func);

// /* --------------- "this" in assigning object's method to variables (creating functions) --------------- */

// /*
// If we assign the object's method to a variable and we try to call this variable, we get the 'undefined' value.
// This is because, it acts just like a normal function i.e function expression and it doesn't point to any object.
// In other words, it is not attached to any object, therefore 'this' is undefined, because it doesn't refer to anything (exception without using the strict mode - it will refer to the window object)
// */
// console.log(`Assigning the object's method to the parent's scope variable`);
// const steven = jonas.calcAge;
// console.log(steven);
// /* steven(); // Trying to call this function results in an error */

// /* ---------------------- Pitfalls of "this" keyword in regular and arrow functions---------------------- */

// /* ---------------------- pitfalls of this in arrow functions ---------------------- */

// /* Keep in mind is that when we create objects, the content between curly braces {} isn't a block scope. It is called 'object literal' and this is an area for defining objects and their properties. What does it mean?
// All the code between curly braces {} are in the global scope.
// */

// const jonas = {
//   firstName: 'Jonas',
//   year: 1991,

//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },

//   greet: () => {
//     console.log(`Hey ${this.firstName}`);
//     console.log(this);
//   },
// };

// /* You probably guessed the output - undefined. It's because, the arrow function doesn't have its own 'this' keyword. It is a lexical 'this', and it points to the parent's scope (global scope in this case). Because 'firstName' isn't declared in the global scope, the value is undefined (it only works for arrow functions, if we try to use function declarations or expressions, an error will occur.) If we try to print 'this', it prints the window object, even though the method was called by the 'jonas' object.

// This behaviour can be dangerous if we use the 'var' keyword to declare variables. Why? Because variables declared with 'var' keyword create properties on the global object.
// */
// jonas.greet();

// /* ---------------------- 'this' with the 'var' declared variable ---------------------- */

// var firstName = 'Matilda';

// const jonas = {
//   firstName: 'Jonas',
//   year: 1991,

//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },

//   greet: () => {
//     console.log(`Hey ${this.firstName}`);
//     console.log(this);
//   },
// };

// /* Now, because we declared the 'firstName' using the 'var' keyword, it gets created in the window object properties. That's why the output isn't 'undefined' anymore. this.firstName translates to window.firstName
// To prevent this kind of mistakes, use other types of functions or don't declare variables with the 'var' keyword.*/

// /* ---------------------- regular functions in object's methods ---------------------- */

// jonas.greet();

// const jonas = {
//   firstName: 'Jonas',
//   year: 1991,

//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);

//     const isMillenial = function () {
//       /* Once we try to call this function, we get the following error:
//       Uncaught TypeError: Cannot read properties of undefined (reading 'year')
//       Why is that? Well, because it is a regular function. It isn't defined as a method.
//       It works the same as if the function was outside this method. Remember, this function is declared in a global scope, because the curly braces of the object are object literals (the area to define object and its properties) not a block scope.
//       Some people say that this bug is a JS bug. It's just a very clear rule, that regular functions has 'this' keyword set to 'undefined' (when using 'strict' mode)

//       There are two solutions to make this function works as intended, let's show in another example
//       */
//       console.log(this);
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };
//     isMillenial();
//   },

//   greet: () => {
//     console.log(`Hey ${this.firstName}`);
//     console.log(this);
//   },
// };

// jonas.greet();
// jonas.calcAge();

// /* ---------------------- solution 1 to use 'this' on regular functions ---------------------- */

// const jonas = {
//   firstName: 'Jonas',
//   year: 1991,

//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//     /*
//     The first solution is to use a variable called 'self' (just like in python) so we can assign 'this' to it.
//     The 'isMillenial' function have access to the parent's scope, so thanks to scope chain, it gets used in the function.
//     Once we call isMillenial, a value of 'true' is printed.
//     This is a pre ES6 solution.
//     */
//     const self = this;
//     const isMillenial = function () {
//       console.log(self);
//       console.log(self.year >= 1981 && self.year <= 1996);
//     };
//     isMillenial();

// /* ---------------------- solution 2 to use 'this' on regular functions ---------------------- */

//     /* Now in the ES6 we have modern and better solution.
//     And this solution is to use an arrow function. As you already know, the arrow function has a lexical 'this' keyword, which means it inherits a 'this' keyword from its parent scope.
//     We got the same result printed - a 'true' value.
//     */

//     const isAnotherMillenial = () => {
//       console.log(this);
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };
//     isAnotherMillenial();
//   },

//   greet: () => {
//     console.log(`Hey ${this.firstName}`);
//     console.log(this);
//   },
// };

// jonas.calcAge();

// /* ------------------------------- 'arguments' keyword ------------------------------- */

// // It is good to know about 'arguments' keyword, but it isn't used anymore in ES6 as there is a new, modern solution of dealing with multiple parameters.

// function addDecl(a, b) {
//   console.log(arguments);
//   return a + b;
// }

// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };

// const addArrow = (a, b) => {
//   arguments;
//   return a + b;
// };

// console.log(addDecl, addExpr, addArrow);

// // 'arguments' keyword works in both declaration and expression functions. It is an array object created once we pass in some arguments into a function. Notice, that we can pass in as many arguments as we want. We could loop over the 'arguments' to add up all values.
// console.log(addDecl(2, 3, 4, 5));
// console.log(addExpr(2, 3, 4, 5));

// // Arrow functions don't have 'arguments' keyword.
// console.log(addArrow(2, 3));

/* --------------- Primitives vs. Objects (Primitive vs. Reference Types) --------------- */

const me = {
  fName: 'Jonas',
  age: 30,
};

const friend = me;
friend.age = 27;
console.log(me.age, friend.age);

me.age = 30;
console.log(me.age, friend.age);

const listOne = [1, 2, 3];
const listTwo = listOne;
listTwo.pop();
console.log(listOne, listTwo);
const listThree = [];

console.log(listOne == listTwo);
console.log(listOne === listTwo);

console.log(listOne == listThree);
console.log(listOne === listThree);

console.log(listTwo == listThree);
console.log(listTwo === listThree);
