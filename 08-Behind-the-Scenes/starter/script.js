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

// // Let's test if the above statement is true
// console.log(x === window.x);

/* --------------------------------------------- "this" keyword --------------------------------------------- */
