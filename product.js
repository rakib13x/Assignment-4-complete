// product.js
const list = document.querySelector('.list');
let products = [
  {
    id: 1,
    name: 'Samsung Galaxy S23 Ultra',
    image: 'Galaxy-S23-Ultra.PNG',
    price: 140000
  },
  {
    id: 2,
    name: 'Oneplus Nord N20 SE',
    image: 'Oneplus-Nord-N20-SE.PNG',
    price: 60000
  },
  {
    id: 3,
    name: 'Samsung Galaxy Z Flip 4',
    image: 'Samsung-Galaxy-Z-Flip-4.PNG',
    price: 220000
  },
  {
    id: 4,
    name: 'Realme GT 2 Pro 4',
    image: 'Realme-GT-2-Pro-4.PNG',
    price: 50000
  },
  {
    id: 5,
    name: 'Vivo X60 Pro',
    image: 'Vivo-X60-Pro.PNG',
    price: 67000
  },
  {
    id: 6,
    name: 'Oppo Watch 3 Pro 3',
    image: 'Oppo-Watch-3-Pro-3.PNG',
    price: 8000
  }
];

function initApp() {
  products.forEach((value, key) => {
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

export { initApp, products };
