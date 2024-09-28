document.addEventListener("DOMContentLoaded", function () {
  const cartSection = document.getElementById("cartSection"); // Ostoskorin osio
  const cartItemsList = document.getElementById("cartItems");
  const totalCostElement = document.getElementById("totalCost");
  const cart = [];

  // Näytä/piilota ostoskori
  document
    .getElementById("showCartButton")
    .addEventListener("click", function (e) {
      e.preventDefault(); // Estetään oletustoiminto
      cartSection.style.display =
        cartSection.style.display === "none" ? "block" : "none";
        
    });

  // Lisää tuote ostoskoriin
  document.getElementById("addButton").addEventListener("click", function () {
    const name = document.getElementById("name").value;
    const price = parseFloat(document.getElementById("price").value);
    const quantity = parseInt(document.getElementById("quantity").value);

    if (name && price > 0 && quantity > 0) {
      const newItem = { name, price, quantity };
      cart.push(newItem);
      updateCart();
      clearForm();
    } else {
      alert("Syötä kelvolliset arvot kaikkiin kenttiin.");
    }
  });

  // Päivitä ostoskori
  function updateCart() {
    cartItemsList.innerHTML = ""; // Tyhjennä ostoskorin sisällöt

    let totalCost = 0;
    cart.forEach((item, index) => {
      const listItem = document.createElement("li");
      listItem.innerHTML = `${item.name} - ${
        item.quantity
      } x €${item.price.toFixed(
        2
      )} <button class="remove-btn" onclick="removeItem(${index})">Poista</button>`;
      cartItemsList.appendChild(listItem);

      totalCost += item.price * item.quantity;
    });

    totalCostElement.textContent = `€${totalCost.toFixed(2)}`;
  }

  // Poista tuote ostoskorista
  window.removeItem = function (index) {
    cart.splice(index, 1);
    updateCart();
  };

  // Tyhjennä ostoskori
  document
    .getElementById("clearCartButton")
    .addEventListener("click", function () {
      cart.length = 0;
      updateCart();
    });

  // Tyhjennä lomake kentät
  function clearForm() {
    document.getElementById("name").value = "";
    document.getElementById("price").value = "";
    document.getElementById("quantity").value = "";
  }

  // Palautelomakkeen toiminta
  document
    .getElementById("feedbackForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      alert("Kiitos palautteestasi!");
    });
});

document.addEventListener("DOMContentLoaded", function () {
  const loginBtn = document.getElementById("login-btn");
  const loginModal = document.getElementById("loginModal");
  const closeLogin = document.getElementById("closeLogin");
  const signupLink = document.getElementById("signup-link");
  const signupModal = document.getElementById("signupModal");
  const closeSignup = document.getElementById("closeSignup");
  const aboutUsLink = document.getElementById("about-us-link");
  const infoDiv = document.getElementById("info");

  // Toggle About Us section
  aboutUsLink.addEventListener("click", function () {
    infoDiv.style.display = infoDiv.style.display === "none" ? "block" : "none";
  });

  // Open login modal
  loginBtn.addEventListener("click", function () {
    loginModal.style.display = "block";
  });

  // Close login modal
  closeLogin.addEventListener("click", function () {
    loginModal.style.display = "none";
  });

  // Open signup modal
  signupLink.addEventListener("click", function () {
    loginModal.style.display = "none";
    signupModal.style.display = "block";
  });

  // Close signup modal
  closeSignup.addEventListener("click", function () {
    signupModal.style.display = "none";
  });

  // Shopping cart functionality
  const cartItems = document.getElementById("cartItems");
  const totalCostElement = document.getElementById("totalCost");
  const clearCartButton = document.getElementById("clearCartButton");
  let cart = [];
  let totalCost = 0;

  // Add product to cart
  const addButton = document.getElementById("addButton");
  addButton.addEventListener("click", function () {
    const name = document.getElementById("name").value;
    const price = parseFloat(document.getElementById("price").value);
    const quantity = parseInt(document.getElementById("quantity").value);

    if (!name || isNaN(price) || isNaN(quantity)) {
      alert("Anna tuotteen nimi, hinta ja määrä.");
      return;
    }

    const product = { name, price, quantity };
    cart.push(product);

    const listItem = document.createElement("li");
    listItem.textContent = `${name} - €${price.toFixed(2)} x ${quantity}`;
    cartItems.appendChild(listItem);

    totalCost += price * quantity;
    totalCostElement.textContent = `€${totalCost.toFixed(2)}`;
  });

  // Clear cart
  clearCartButton.addEventListener("click", function () {
    cart = [];
    cartItems.innerHTML = "";
    totalCost = 0;
    totalCostElement.textContent = "€0.00";
  });
});
