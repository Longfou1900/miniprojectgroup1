const cartItemsDiv = document.getElementById("cartItems");
const grandTotalSpan = document.getElementById("grandTotal");

function loadCart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cartItemsDiv.innerHTML = "";

  // empty cart
  if (cart.length === 0) {
    cartItemsDiv.innerHTML = "<h2 class='text-3xl'>Cart is empty</h2>";
    grandTotalSpan.innerText = 0;
    return;
  }

  let grandTotal = 0;

  cart.forEach((item, index) => {
    const subtotal = item.price * item.quantity;
    grandTotal += subtotal;

    cartItemsDiv.innerHTML += `
      <div class="flex items-center justify-between bg-white p-5 rounded-xl mb-5">

        <img src="${item.image}" class="w-24 h-24 rounded-xl" />

        <div class="flex-1 ml-5">
          <h3 class="text-2xl font-bold">${item.name}</h3>
          <p class="text-xl">$${item.price} × ${item.quantity}</p>
          <p class="text-green-600 font-semibold">
            Subtotal: $${subtotal}
          </p>
        </div>

        <div class="flex items-center gap-3">
          <button onclick="decrease(${index})"
            class="text-2xl px-3 py-1 bg-red-300 font-bold hover:bg-red-500 hover:text-white rounded">-</button>

          <span class="text-xl">${item.quantity}</span>

          <button onclick="increase(${index})"
            class="text-2xl px-3 py-1 bg-blue-300  font-bold hover:bg-blue-500 hover:text-white rounded">+</button>
        </div>

        <button onclick="removeItem(${index})"
          class="bg-red-400 hover:border-blue-500 hover:cursor-pointer hover:shadow-lg hover:shadow-lime-500/50 hover:bg-red-600 hover:text-white hover:font-bold text-white ml-3 px-4 py-2 rounded">
          Delete
        </button>
      </div>
    `;
  });

  grandTotalSpan.innerText = grandTotal;
}

// quantity +
function increase(index) {
  const cart = JSON.parse(localStorage.getItem("cart"));
  cart[index].quantity++;
  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart();
}

// quantity -
function decrease(index) {
  const cart = JSON.parse(localStorage.getItem("cart"));
  if (cart[index].quantity > 1) {
    cart[index].quantity--;
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart();
}

// delete item
function removeItem(index) {
  const cart = JSON.parse(localStorage.getItem("cart"));
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart();
}

// payment (no popup)
function payNow() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  alert("Payment successful 🎉 Thank you!");
  localStorage.removeItem("cart");
  loadCart();
}

// load on page open
loadCart();
