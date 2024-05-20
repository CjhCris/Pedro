function toggleCart() {
  var cart = document.getElementById('cart');
  cart.classList.toggle('show');
}

// Función para agregar un producto al carrito
function addToCart(productName) {
  var cartItems = document.getElementById('cart-items');
  var li = document.createElement('li');
  li.textContent = productName;
  cartItems.appendChild(li);
}