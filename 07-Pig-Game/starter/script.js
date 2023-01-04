"use strict";
// --------------------------Selectors----------------------------
// Values
const leftScoreSelector = document.querySelector("#score--0");
const rightScoreSelector = document.querySelector("#score--1");
const leftCurrentScoreSelector = document.querySelector("#current--0");
const rightCurrentScoreSelector = document.querySelector("#current--1");
const leftPlayer = document.querySelector("#name--0");
const rightPlayer = document.querySelector("#name--1");
// Images
const diceSelector = document.querySelector(".dice");
// Buttons
const btnRollDiceSelector = document.querySelector(".btn--roll");
const btnHoldSelector = document.querySelector(".btn--hold");
const btnNewGameSelector = document.querySelector(".btn--new");
// Sections
const leftSectionSelector = document.querySelector(".player--0");
const rightSectionSelector = document.querySelector(".player--1");
// Variables
let leftScore = 0;
let leftCurrentScore = 0;

let rightScore = 0;
let rightCurrentScore = 0;
let diceValue;
let rolled = false;
let player1 = true;

// --------------------------Functions---------------------------
const roll = function () {
  let diceValue = Math.trunc(Math.random() * 6) + 1;
  if (diceSelector.classList.contains("hidden"))
    diceSelector.classList.remove("hidden");
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

const activatePlayer = function () {
  if (player1 === true) {
    player1 = false;
    leftSectionSelector.classList.remove("player--active");
    rightSectionSelector.classList.add("player--active");
  } else {
    player1 = true;
    rightSectionSelector.classList.remove("player--active");
    leftSectionSelector.classList.add("player--active");
  }
};

const rollDice = function () {
  diceValue = roll();
  console.log(diceValue);
  console.log(player1);
  if (player1) {
    if (diceValue != 1) {
      leftCurrentScore += diceValue;
      leftCurrentScoreSelector.textContent = leftCurrentScore;
    } else {
      leftCurrentScore = 0;
      leftCurrentScoreSelector.textContent = 0;
      activatePlayer();
    }
  } else {
    if (diceValue != 1) {
      rightCurrentScore += diceValue;
      rightCurrentScoreSelector.textContent = rightCurrentScore;
    } else {
      rightCurrentScore = 0;
      rightCurrentScoreSelector.textContent = 0;
      activatePlayer();
    }
  }
};

const hold = function () {
  if (!diceSelector.classList.contains("hidden")) {
    if (player1) {
      leftScore += leftCurrentScore;
      leftScoreSelector.textContent = leftScore;
      leftCurrentScore = 0;
      leftCurrentScoreSelector.textContent = leftCurrentScore;
      if (leftScore >= 100) {
        leftPlayer.textContent = "WINNER!";
        rightPlayer.textContent = "LOSER!";
        leftSectionSelector.classList.add("player--winner");
        disableButtons();
      } else {
        activatePlayer();
      }
    } else {
      rightScore += rightCurrentScore;
      rightScoreSelector.textContent = rightScore;
      rightCurrentScore = 0;
      rightCurrentScoreSelector.textContent = rightCurrentScore;
      if (rightScore >= 100) {
        rightPlayer.textContent = "WINNER!";
        leftPlayer.textContent = "LOSER!";
        rightSectionSelector.classList.add("player--winner");
        disableButtons();
      } else {
        activatePlayer();
      }
    }
  }
};

const newGame = function () {
  // Reset players score

  leftScore = 0;
  leftScoreSelector.textContent = 0;
  leftCurrentScoreSelector.textContent = 0;

  rightScore = 0;
  rightScoreSelector.textContent = 0;
  rightCurrentScoreSelector.textContent = 0;

  // Select player 1 and Change the overlay to the left side if player2 was rolling a dice or won the game

  // Hide the dice
  diceSelector.classList.add("hidden");
  // Change back to player 1
  if (player1) player1 = false;

  activatePlayer();
  leftPlayer.textContent = "Player 1";
  rightPlayer.textContent = "Player 2";

  leftSectionSelector.classList.contains("player--winner")
    ? leftSectionSelector.classList.remove("player--winner")
    : rightSectionSelector.classList.remove("player--winner");

  activateButtons();
};

// -----------------------Listeners------------------------------

// Listener for Roll dice button
btnRollDiceSelector.addEventListener("click", rollDice);
// Listener for Hold button
btnHoldSelector.addEventListener("click", hold);
// Listener for New Game button
btnNewGameSelector.addEventListener("click", newGame);
