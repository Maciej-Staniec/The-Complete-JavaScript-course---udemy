'use strict';

// Selectors

let msg = document.querySelector('.message');
let number = document.querySelector('.number');
let highscore = document.querySelector('.highscore');
const btnAgain = document.querySelector('.again');
const btnCheck = document.querySelector('.check');
// Variables
let secretNumber = Math.trunc(Math.random() * 20) + 1;
number.textContent = secretNumber;
let score = 20;

// Event listeners

btnCheck.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    msg.textContent = '⛔No number!';
  } else if (guess === secretNumber) {
    msg.textContent = 'Correct number!';
  } else if (guess > secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
      msg.textContent = 'Too high!';
    } else {
      document.querySelector('.score').textContent = 0;
      msg.textContent = 'You lost.';
    }
  } else {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
      msg.textContent = 'Too low';
    } else {
      document.querySelector('.score').textContent = 0;
      msg.textContent = 'You lost.';
    }
  }
});
