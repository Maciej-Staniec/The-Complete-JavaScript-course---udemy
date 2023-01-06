'use strict';

const myName = 'Jonas'; // Global variable

// console.log(millenial); //Reference error - not defined

function first() {
  const age = 30;

  if (age >= 30) {
    const decade = 3; // Scope variable
    var millenial = true;
    // console.log(lastName); //Reference error - not defined
  }
  console.log(millenial);
  // console.log(decade); //Reference error - not defined
  function second() {
    const job = 'teacher';
    var experience = 'true';
    // console.log(decade); //Reference error - not defined
    console.log(millenial);
    console.log(`${myName} is a ${age} years old ${job}`);

    if (millenial) {
      var greeting = 'Hello!';
      const goodbye = 'Goodbye!';
      console.log(experience);

      function greet() {
        var fullGreeting = 'Hello World!';
        console.log(fullGreeting);
        console.log(experience);
        console.log(goodbye);
        if (true) {
          console.log(fullGreeting);
        }
      }

      greet();
      // console.log(fullGreeting);
    }
    console.log(greeting);
  }

  // console.log(experience); //Reference error - not defined

  function third() {
    var lastName = 'Staniec';
    // console.log(experience); //Reference error - not defined
    console.log(millenial);
  }

  // console.log(greeting); //Reference error - not defined

  second();
  third();
}

first();
