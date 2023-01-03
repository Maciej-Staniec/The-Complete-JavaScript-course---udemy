"use strict";

// Selectors
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnShowModal = document.querySelectorAll(".show-modal");

// Functions
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

// Opening modal when one of the modal buttons clicked
for (let i = 0; i < btnShowModal.length; i++) {
  btnShowModal[i].addEventListener("click", openModal);
}

// Exiting modal on X button click
btnCloseModal.addEventListener("click", closeModal);

// Exiting modal on overlay click
overlay.addEventListener("click", closeModal);

// "Esc" key to exit the modal
// By adding event listener on the 'document' object, we listen to the key everywhere, no matter where they happen on the page.
// The event handler (the function we use inside the event listener) can get the event's information as a parameter, which happens once the event is triggered. Once the event occurs, the event object is created and passed to the event handler so we can access its information. The event object contains all information about the event that triggered the listener.
document.addEventListener("keydown", function (e) {
  if (
    e.key === "Escape" &&
    !modal.classList.contains("hidden") &&
    !overlay.classList.contains("hidden")
  )
    closeModal();
});
