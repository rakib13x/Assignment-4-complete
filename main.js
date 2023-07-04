// main.js
import { initApp, products } from './product.js';
import { applyFilters } from './search.js';
import { addToCart, reloadCart, changeQuantity, clearCart } from './cart.js';
import './shopping.js';

initApp();

// Search Input and Price Filter
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const priceFilter = document.getElementById('priceFilter');

searchButton.addEventListener('click', () => {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm)
  );
  applyFilters(filteredProducts);
});

priceFilter.addEventListener('change', () => {
  const filterOption = priceFilter.value;
  let filteredProducts = [...products];

  switch (filterOption) {
    case 'lowToHigh':
      filteredProducts.sort((a, b) => a.price - b.price);
      break;
    case 'highToLow':
      filteredProducts.sort((a, b) => b.price - a.price);
      break;
    default:
      break;
  }

  applyFilters(filteredProducts);
});

// Add To Cart Button
const addToCartButtons = document.querySelectorAll('.item button');

addToCartButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    addToCart(index, products);
  });
});
