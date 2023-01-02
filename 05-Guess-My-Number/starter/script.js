'use strict';

// Selectors

let msg = document.querySelector('.message');
let number = document.querySelector('.number');
let highscoreSelector = document.querySelector('.highscore');
const btnAgain = document.querySelector('.again');
const btnCheck = document.querySelector('.check');
// Variables
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

// Event listeners

btnCheck.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    msg.textContent = '⛔No number!';

    // When player wins
  } else if (guess === secretNumber) {
    msg.textContent = 'Correct number!';
    number.textContent = secretNumber;
    number.style.width = '30rem';
    document.body.style.backgroundColor = '#60B347';
    let currentScore = Number(document.querySelector('.score').textContent);
    if (currentScore > highscore) {
      highscore = currentScore;
      highscoreSelector.textContent = highscore;
    }

    // When guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
      msg.textContent = 'Too high!';
      // When the score is 0 and player loose
    } else {
      document.querySelector('.score').textContent = 0;
      msg.textContent = 'You lost.';
    }
    // When the guess is too low
  } else {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
      msg.textContent = 'Too low';

      // When the score is 0 and player loose
    } else {
      document.querySelector('.score').textContent = 0;
      msg.textContent = 'You lost.';
    }
  }
});

btnAgain.addEventListener('click', function () {
  score = 20;
});
