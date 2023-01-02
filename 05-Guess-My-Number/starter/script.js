'use strict';

// Selectors

let msg = document.querySelector('.message');
let number = document.querySelector('.number');
let scoreSelector = document.querySelector('.score');
let highscoreSelector = document.querySelector('.highscore');
const btnAgain = document.querySelector('.again');
const btnCheck = document.querySelector('.check');
// Variables
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// Functions
const displayMessage = function (message) {
  msg.textContent = message;
};

// Event listeners

// Game logic
btnCheck.addEventListener('click', function () {
  const guessInput = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guessInput) {
    displayMessage('⛔No number!');

    // When player wins
  } else if (guessInput === secretNumber) {
    displayMessage('Correct number!');
    number.textContent = secretNumber;
    number.style.width = '30rem';
    document.body.style.backgroundColor = '#60B347';
    // Disable the 'Check!' button
    btnCheck.style.cursor = 'not-allowed';
    btnCheck.disabled = true;
    // Overwriting the highscore
    score;
    if (score > highscore) {
      highscore = score;
      highscoreSelector.textContent = highscore;
    }
    // When guess is wrong
  } else if (guessInput !== secretNumber) {
    if (score > 1) {
      score--;
      scoreSelector.textContent = score;
      displayMessage(guessInput > secretNumber ? 'Too high!' : 'Too low');
      // When the score is 0 and player loose
    } else {
      scoreSelector.textContent = 0;
      displayMessage('You lost.');
    }
  }
  // // When guess is too high
  // else if (guessInput > secretNumber) {
  //   if (score > 1) {
  //     score--;
  //     scoreSelector.textContent = score;
  //     msg.textContent = 'Too high!';
  //     // When the score is 0 and player loose
  //   } else {
  //     scoreSelector.textContent = 0;
  //     msg.textContent = 'You lost.';
  //   }
  //   // When the guess is too low
  // } else {
  //   if (score > 1) {
  //     score--;
  //     scoreSelector.textContent = score;
  //     msg.textContent = 'Too low';

  //     // When the score is 0 and player loose
  //   } else {
  //     scoreSelector.textContent = 0;
  //     msg.textContent = 'You lost.';
  //   }
  // }
});

// Play again
btnAgain.addEventListener('click', function () {
  // Reset everything to its original state
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  scoreSelector.textContent = score;
  msg.textContent = 'Start guessing...';
  number.textContent = '?';
  document.querySelector('.guess').value = '';
  document.body.style.backgroundColor = '#222';
  // Enable the 'Check!' button.
  btnCheck.disabled = false;
  btnCheck.style.cursor = 'pointer';
});
