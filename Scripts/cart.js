document.getElementById('addToCartButton').addEventListener('click', addToCart);

function addToCart() {
  // Obținerea datelor produsului
  const productName = 'Duralast Gold Battery BCI Group Size 140R 480 CCA H4-DLG';
  const productPrice = document.querySelector('.description').innerText;
  const productQuantity = document.querySelector('.dropdown').value;

  // Crearea unui obiect pentru produs
  const product = {
    name: productName,
    price: productPrice,
    quantity: productQuantity
  };

  // Adăugarea produsului în tabelul din pagina cos
  addProductToCart(product);
}

function addProductToCart(product) {
  // Stocarea produsului în localStorage
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push(product);
  localStorage.setItem('cart', JSON.stringify(cart));

  // Redirecționarea către pagina cos
  window.location.href = 'cos.html';
}

// Cod pentru afișarea produselor în tabelul din pagina cos
document.addEventListener('DOMContentLoaded', function() {
  const cartTable = document.getElementById('cartTable');
  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  cart.forEach(product => {
    const row = cartTable.insertRow();
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);

    cell1.innerText = product.name;
    cell2.innerText = product.price;
    cell3.innerText = product.quantity;
  });
});
