const checkoutItems = document.getElementById("checkout-items");
const checkoutTotal = document.getElementById("checkout-total");
const checkoutForm = document.getElementById("checkout-form");
// Get cart from the main website
const cart = JSON.parse(localStorage.getItem("serbellaCart") || "[]");
let total = 0;
if (cart.length === 0) {
  checkoutItems.innerHTML = "<p>Your bag is empty.</p>";
} else {
  cart.forEach((item) => {
    total += Number(item.price);
    const itemElement = document.createElement("div");
    itemElement.className = "checkout-item";
    itemElement.innerHTML = `
      <div>
        <strong>${item.name}</strong>
        <p>$${item.price}</p>
      </div>
    `;
    checkoutItems.appendChild(itemElement);
  });
}
checkoutTotal.textContent = total.toFixed(2);
checkoutForm.addEventListener("submit", function(event) {
  event.preventDefault();
  alert("Thank you! Your SERBELLA order has been received.");
  localStorage.removeItem("serbellaCart");
  checkoutForm.reset();
});
