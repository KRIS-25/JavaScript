'use strict';

const btnsOpenModal = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModal = document.querySelector('.close-modal');

const clickedButton = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeButton = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', clickedButton);
}

closeModal.addEventListener('click', closeButton);
overlay.addEventListener('click', closeButton);

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeButton();
  }
});
