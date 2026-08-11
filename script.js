let cart = [];

const cartCount = document.getElementById("cart-count");
const cartPanel = document.getElementById("cart-panel");
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");

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

function addToCart(index) {localStorage.setItem("serbellaCart", JSON.stringify(cart));
  cart.push(products[index]);
  updateCart();
}

function updateCart() {

  cartCount.textContent = cart.length;

  cartItems.innerHTML = "";

  let total = 0;

  cart.forEach((item, index) => {

    total += item.price;

    const div = document.createElement("div");

    div.className = "cart-item";

    div.innerHTML = `
      <div>
        <h4>${item.name}</h4>
        <p>$${item.price}</p>
      </div>

      <button class="remove-item" onclick="removeItem(${index})">
        REMOVE
      </button>
    `;

    cartItems.appendChild(div);
  });

  cartTotal.textContent = total;
}

function removeItem(index) {
  cart.splice(index, 1);
  updateCart();
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

  button.onclick = () => {
    addToCart(index);
  };

  product.appendChild(button);
});

document.getElementById("open-cart").onclick = () => {
  cartPanel.classList.add("active");
};

document.getElementById("close-cart").onclick = () => {
  cartPanel.classList.remove("active");
};
