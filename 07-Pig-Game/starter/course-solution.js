"use strict";

// Selectors
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

// Functions

const switchPlayer = function () {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};
const disableButtons = function () {
  btnRoll.style.cursor = "not-allowed";
  btnHold.style.cursor = "not-allowed";
};

const activateButtons = function () {
  btnRoll.style.cursor = "pointer";
  btnHold.style.cursor = "pointer";
};

let scores, currentScore, activePlayer, playing;

const init = function () {
  // Set initial values
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  score0El.textContent = 0;
  current0El.textContent = 0;
  score1El.textContent = 0;
  current1El.textContent = 0;
  diceEl.classList.add("hidden");
  // Remove winner background
  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");
  // Switch to player 1 if player 2 is active.
  player1El.classList.remove("player--active");
  player0El.classList.add("player--active");
};

init();

// Listeners and event handlers
btnRoll.addEventListener("click", function () {
  if (playing) {
    console.log(scores);
    // 1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. Display dice
    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${dice}.png`;

    //3. Check for rolled 1
    if (dice != 1) {
      // Add dice to the current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // Switch to the next player
      switchPlayer();
    }
  } else {
    disableButtons();
  }
});

btnHold.addEventListener("click", function () {
  if (playing) {
    // 1. Add current score to total score of the player
    scores[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent =
      scores[activePlayer];
    console.log(scores);
    // 2. Check if score >= 100
    if (scores[activePlayer] >= 100) {
      // Current player wins - change background, disable buttons.
      playing = false;
      disableButtons();
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      diceEl.classList.add("hidden");
    } else {
      // Switch players
      switchPlayer();
    }
  }
});

btnNew.addEventListener("click", init);
