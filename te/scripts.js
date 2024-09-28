document.addEventListener("DOMContentLoaded", function () {
  const cart = []; // Tyhjä taulukko tuotteiden tallentamiseen
  const cartItemsList = document.getElementById("cartItems");
  const totalCostElement = document.getElementById("totalCost");

  // Lisää tuote ostoskoriin
  document.getElementById("addButton").addEventListener("click", function () {
    const name = document.getElementById("name").value;
    const price = parseFloat(document.getElementById("price").value);
    const quantity = parseInt(document.getElementById("quantity").value);

    // Tarkistetaan, että kentät eivät ole tyhjiä ja hinnat ovat positiivisia
    if (name && price > 0 && quantity > 0) {
      const newItem = { name, price, quantity };
      cart.push(newItem);
      updateCart(); // Päivitä ostoskorin sisältö
      clearForm(); // Tyhjennä lomake
    } else {
      alert("Syötä kelvolliset arvot kaikkiin kenttiin.");
    }
  });

  // Päivittää ostoskorin sisältö sivulla
  function updateCart() {
    cartItemsList.innerHTML = ''; // Tyhjennetään edellinen sisältö

    let totalCost = 0;
    cart.forEach((item, index) => {
      const listItem = document.createElement("li");
      listItem.innerHTML = `${item.name} - ${item.quantity} x €${item.price.toFixed(
        2
      )}
        <button class="remove-btn" onclick="removeItem(${index})">Poista</button>`;
      cartItemsList.appendChild(listItem);

      // Laske kokonaishinta
      totalCost += item.price * item.quantity;
    });

    // Näytä kokonaishinta
    totalCostElement.textContent = `Yhteensä: €${totalCost.toFixed(2)}`;
  }

  // Poistaa tuotteen ostoskorista
  window.removeItem = function (index) {
    cart.splice(index, 1); // Poista tuote annetusta indeksistä
    updateCart(); // Päivitä ostoskori
  };

  // Tyhjentää lomakkeen kentät
  function clearForm() {
    document.getElementById("name").value = '';
    document.getElementById("price").value = '';
    document.getElementById("quantity").value = '';
  }

  // Palautelomakkeen lähetys
  document.getElementById('feedbackForm').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Kiitos palautteestasi!');
  });
});
