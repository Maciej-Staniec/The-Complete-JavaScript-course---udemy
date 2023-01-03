"use strict";

// Selectors
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnShowModal = document.querySelectorAll(".show-modal");

// Removing .hidden class from the modal and overlay classes
for (let i = 0; i < btnShowModal.length; i++) {
  btnShowModal[i].addEventListener("click", function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
}

// Adding .hidden class to the modal and overlay
btnCloseModal.addEventListener("click", function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});
