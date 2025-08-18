let cart = [];
let total = 0;

const cartEl = document.getElementById("cart");
const totalEl = document.getElementById("total");

function addToCart(item, price) {
  cart.push({ item, price });
  total += price;
  updateCart();
}

function removeFromCart(index) {
  total -= cart[index].price;
  cart.splice(index, 1);
  updateCart();
}

function updateCart() {
  cartEl.innerHTML = "";
  cart.forEach((cartItem, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${cartItem.item} - $${cartItem.price.toFixed(2)}
      <button onclick="removeFromCart(${index})">❌</button>
    `;
    cartEl.appendChild(li);
  });

  totalEl.textContent = `Total: $${total.toFixed(2)}`;
}

function clearCart() {
  cart = [];
  total = 0;
  updateCart();
}
function placeOrder() {
  if(cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  // Build order summary
  let orderSummary = "Your order:\n";
  cart.forEach(item => {
    orderSummary += `${item.item} - $${item.price.toFixed(2)}\n`;
  });
  orderSummary += `Total: $${total.toFixed(2)}\n\n`;

  // Add the instruction to pay at counter
  orderSummary += "Please go near the counter to pay. Thank you for your order!";

  // Show alert with summary and instruction
  alert(orderSummary);

  // Clear cart after placing order
  clearCart();
}
