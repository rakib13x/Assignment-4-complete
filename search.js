// search.js
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

function applyFilters(filteredProducts) {
  list.innerHTML = '';

  if (filteredProducts.length === 0) {
    let message = document.createElement('p');
    message.textContent = 'No products found.';
    list.appendChild(message);
  } else {
    filteredProducts.forEach((value, key) => {
      let newDiv = document.createElement('div');
      newDiv.classList.add('item');
      newDiv.innerHTML = `
        <img src="image/${value.image}">
        <div class="title">${value.name}</div>
        <div class="price">${value.price.toLocaleString()}</div>
        <button onclick="addToCart(${key}, products)">Add To Cart</button>`;
      list.appendChild(newDiv);
    });
  }
}

export { applyFilters };
