// ⭐ GLOBAL VARIABLE (put it here)
  let lastAddedProductId = null;

function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const existing = cart.find(item => item.id === product.id);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  // localStorage.setItem("cart", JSON.stringify(cart));

  // go to shopping cart page
  // window.location.href = "shoppingCard.html";

  // ======new======
  lastAddedProductId = product.id; // ⭐ track last item
  // ✅ SAVE FIRST
  localStorage.setItem("cart", JSON.stringify(cart));

  // ✅ THEN calculate
  calculateTotal();
  renderPopupItems();
  // ✅ THEN open popup
  openPopup();
}

