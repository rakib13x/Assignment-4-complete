// cart.js
let listCart = document.querySelector('.listCart');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');
let clearCartButton = document.querySelector('.clear-cart');

let listCarts = [];

function addToCart(key, products) {
  if (listCarts[key] == null) {
    listCarts[key] = JSON.parse(JSON.stringify(products[key]));
    listCarts[key].quantity = 1;
    // Show the "Clear Cart" button
    clearCartButton.style.display = 'block';
  } else {
    listCarts[key].quantity += 1;
  }
  reloadCart();
}

function reloadCart() {
  listCart.innerHTML = '';
  let count = 0;
  let totalPrice = 0;

  listCarts.forEach((value, key) => {
    totalPrice += value.price * value.quantity;
    count += value.quantity;
    if (value != null) {
      let newDiv = document.createElement('li');
      newDiv.innerHTML = `
        <div><img src="image/${value.image}"/></div>
        <div>${value.name}</div>
        <div>${value.price.toLocaleString()}</div>
        <div>
          <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
          <div class="count">${value.quantity}</div>
          <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
        </div>`;
      listCart.appendChild(newDiv);
    }
  });

  if (listCarts.length === 0) {
    let message = document.createElement('p');
    message.textContent = 'Cart is empty.';
    listCart.appendChild(message);
  } else {
    let emptyMessage = document.querySelector('.listCart p');
    if (emptyMessage) {
      emptyMessage.remove();
    }
  }

  total.innerText = totalPrice.toLocaleString();
  quantity.innerText = count;
}

function changeQuantity(key, quantity) {
  if (quantity <= 0) {
    delete listCarts[key];
  } else {
    listCarts[key].quantity = quantity;
  }
  reloadCart();
}

function clearCart() {
  listCarts = [];
  reloadCart();
  clearCartButton.style.display = 'none'; // Hide the "Clear Cart" button
}

export { addToCart, reloadCart, changeQuantity, clearCart };
