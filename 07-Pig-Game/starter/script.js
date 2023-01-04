"use strict";

// Players
const leftPlayer = {
  nameID: document.querySelector("#name--0"),
  sectionSelector: document.querySelector(".player--0"),
  scoreSelector: document.querySelector("#score--0"),
  currentScoreSelector: document.querySelector("#current--0"),
  score: 0,
  currentScore: 0,
};

const rightPlayer = {
  nameID: document.querySelector("#name--1"),
  sectionSelector: document.querySelector(".player--1"),
  scoreSelector: document.querySelector("#score--1"),
  currentScoreSelector: document.querySelector("#current--1"),
  score: 0,
  currentScore: 0,
};

// Images
const diceSelector = document.querySelector(".dice");

// Buttons
const btnRollDiceSelector = document.querySelector(".btn--roll");
const btnHoldSelector = document.querySelector(".btn--hold");
const btnNewGameSelector = document.querySelector(".btn--new");

// Variables
let diceValue;
let leftSide = true;

// --------------------------Functions---------------------------
const roll = function () {
  let diceValue = Math.trunc(Math.random() * 6) + 1;
  // Check if the game has started
  if (diceSelector.classList.contains("hidden"))
    // If the game hasn't started, show the dice.
    diceSelector.classList.remove("hidden");
  // Change the dice image according to the dice value.
  diceSelector.src = `dice-${diceValue}.png`;

  return diceValue;
};

const disableButtons = function () {
  btnRollDiceSelector.style.cursor = "not-allowed";
  btnRollDiceSelector.disabled = true;
  btnHoldSelector.style.cursor = "not-allowed";
  btnHoldSelector.disabled = true;
};

const activateButtons = function () {
  btnRollDiceSelector.style.cursor = "pointer";
  btnRollDiceSelector.disabled = false;
  btnHoldSelector.style.cursor = "pointer";
  btnHoldSelector.disabled = false;
};

const switchPlayer = function (player) {
  if (leftSide === true) {
    // If the left side is active, switch to the right side
    leftSide = false;
    player.sectionSelector.classList.remove("player--active");
    rightPlayer.sectionSelector.classList.add("player--active");
  } else {
    // If the right side is active, switch to the left side
    leftSide = true;
    player.sectionSelector.classList.remove("player--active");
    leftPlayer.sectionSelector.classList.add("player--active");
  }
};

const checkDice = function (player) {
  if (diceValue != 1) {
    // If dice value different from 1, add up points to the current score.
    player.currentScore += diceValue;
    player.currentScoreSelector.textContent = player.currentScore;
  } else {
    // if dice value is 1, zero the current score
    player.currentScore = 0;
    player.currentScoreSelector.textContent = 0;
    // Switch player after zeroing the current score
    switchPlayer(player);
  }
};

const addPoints = function (player) {
  player.score += player.currentScore;
  player.scoreSelector.textContent = player.score;
  player.currentScore = 0;
  player.currentScoreSelector.textContent = player.currentScore;
};

// -------------------------Event handlers-----------------------------
const rollDice = function () {
  diceValue = roll();

  if (leftSide) {
    // if left side is active, pass in Player 1
    checkDice(leftPlayer);
  } else {
    // if left side isn't active, pass in Player 2
    checkDice(rightPlayer);
  }
};

const hold = function () {
  // When the "HOLD" button is pressed

  // Check if the game has started, if not, do nothing
  if (!diceSelector.classList.contains("hidden")) {
    if (leftSide) {
      // Adding points
      addPoints(leftPlayer);
      // Check if player is a winner
      if (leftPlayer.score >= 100) {
        leftPlayer.nameID.textContent = "WINNER!";
        rightPlayer.nameID.textContent = "LOSER!";
        leftPlayer.sectionSelector.classList.add("player--winner");
        disableButtons();
      } else {
        // Switch players if not a winner.
        switchPlayer(leftPlayer);
      }
    } else {
      // Adding points
      addPoints(rightPlayer);
      // Check if player is a winner
      if (rightPlayer.score >= 100) {
        rightPlayer.nameID.textContent = "WINNER!";
        leftPlayer.nameID.textContent = "LOSER!";
        rightPlayer.sectionSelector.classList.add("player--winner");
        disableButtons();
      } else {
        // Switch players if not a winner.
        switchPlayer(rightPlayer);
      }
    }
  }
};

const newGame = function () {
  // When the "NEW GAME" button is pressed

  // Reset players score
  leftPlayer.score = 0;
  leftPlayer.scoreSelector.textContent = 0;
  leftPlayer.currentScoreSelector.textContent = 0;
  rightPlayer.score = 0;
  rightPlayer.scoreSelector.textContent = 0;
  rightPlayer.currentScoreSelector.textContent = 0;

  // Select player 1 and Change the overlay to the left side if player2 was rolling a dice or won the game
  if (leftSide) leftSide = false;
  switchPlayer(rightPlayer);

  // Change names back to the their origin state
  leftPlayer.nameID.textContent = "Player 1";
  rightPlayer.nameID.textContent = "Player 2";

  // Hide the dice
  diceSelector.classList.add("hidden");

  // Remove winner background
  leftPlayer.sectionSelector.classList.contains("player--winner")
    ? leftPlayer.sectionSelector.classList.remove("player--winner")
    : rightPlayer.sectionSelector.classList.remove("player--winner");

  // Activate buttons
  activateButtons();
};

// -----------------------Listeners------------------------------

// Listener for Roll dice button
btnRollDiceSelector.addEventListener("click", rollDice);
// Listener for Hold button
btnHoldSelector.addEventListener("click", hold);
// Listener for New Game button
btnNewGameSelector.addEventListener("click", newGame);
