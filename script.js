let cart = [];

const cartCount = document.getElementById("cart-count");

const products = [
  {
    name: "SERBELLA NOIR DRESS",
    price: 129
  },
  {
    name: "SERBELLA SIGNATURE SET",
    price: 149
  },
  {
    name: "SERBELLA ELITE JACKET",
    price: 179
  },
  {
    name: "SERBELLA ESSENTIAL",
    price: 95
  }
];

function addToCart(productIndex) {
  const product = products[productIndex];

  cart.push(product);

  updateCart();
}

function updateCart() {
  cartCount.textContent = cart.length;
}

document.querySelectorAll(".product").forEach((product, index) => {

  const button = document.createElement("button");

  button.textContent = "ADD TO BAG";

  button.style.marginTop = "15px";
  button.style.padding = "12px 18px";
  button.style.background = "#111";
  button.style.color = "#fff";
  button.style.border = "none";
  button.style.cursor = "pointer";
  button.style.letterSpacing = "1px";

  button.addEventListener("click", () => {
    addToCart(index);

    button.textContent = "ADDED ✓";

    setTimeout(() => {
      button.textContent = "ADD TO BAG";
    }, 1500);
  });

  product.appendChild(button);

});
