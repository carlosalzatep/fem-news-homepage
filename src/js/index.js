const openNavButton = document.querySelector('#js-open-button');
const closeNavButton = document.querySelector('#js-close-button');
const navMenu = document.querySelector('#js-nav-menu');

openNavButton.addEventListener('click', (event) => {
  event.stopPropagation();
  openNavButton.classList.add('active');
});

closeNavButton.addEventListener('click', (event) => {
  event.stopPropagation();
  openNavButton.classList.remove('active');
});

navMenu.addEventListener('click', (event) => {
  event.stopPropagation();
});

window.addEventListener('click', (event) => {
  if (event.target !== navMenu) {
    openNavButton.classList.remove('active');
  }
});
