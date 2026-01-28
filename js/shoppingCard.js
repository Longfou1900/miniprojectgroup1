//shoppingCard.js

const cartItemsDiv = document.getElementById("cartItems");

function loadCart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cartItemsDiv.innerHTML = "";

  if (cart.length === 0) {
    cartItemsDiv.innerHTML = "<h2 class='text-3xl'>Cart is empty</h2>";
    return;
  }

  cart.forEach((item, index) => {
    const subtotal = item.price * item.quantity;

    cartItemsDiv.innerHTML += `
      <div class="flex items-center justify-between bg-white p-5 rounded-xl mb-5">
        <img src="${item.image}" class="w-24 h-24 rounded-xl" />
        
        <div>
          <h3 class="text-2xl font-bold">${item.name}</h3>
          <p class="text-xl">$${item.price} × ${item.quantity}</p>
          <p class="text-green-600 font-semibold">
            Total: $${subtotal}
          </p>
        </div>

        <div class="flex items-center gap-3">
          <button onclick="decrease(${index})"
            class="px-3 py-1 bg-gray-300 rounded">-</button>

          <span class="text-xl">${item.quantity}</span>

          <button onclick="increase(${index})"
            class="px-3 py-1 bg-gray-300 rounded">+</button>
        </div>

        <button onclick="removeItem(${index})"
          class="bg-red-500 text-white px-4 py-2 rounded">
          Delete
        </button>
      </div>
    `;
  });
}


function increase(index) {
  const cart = JSON.parse(localStorage.getItem("cart"));
  cart[index].quantity += 1;
  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart();
}

function decrease(index) {
  const cart = JSON.parse(localStorage.getItem("cart"));
  if (cart[index].quantity > 1) {
    cart[index].quantity -= 1;
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart();
}

function removeItem(index) {
  const cart = JSON.parse(localStorage.getItem("cart"));
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart();
}

loadCart();


//=========new ======
function calculateTotal() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  let total = 0;

  cart.forEach(item => {
    total += item.price * item.quantity;
  });

  document.getElementById("grandTotal").innerText = total;
}

// update loadCart to also calculate total
const originalLoadCart = loadCart;
loadCart = function () {
  originalLoadCart();
  calculateTotal();
};

function payNow() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  alert("Payment successful! Thank you for your purchase ❤️");

  localStorage.removeItem("cart");
  loadCart();
}



