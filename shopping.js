// shopping.js
const openShopping = document.querySelector('.shopping');
const closeShopping = document.querySelector('.closeShopping');
const body = document.querySelector('body');

openShopping.addEventListener('click', () => {
  body.classList.add('active');
});

closeShopping.addEventListener('click', () => {
  body.classList.remove('active');
});
