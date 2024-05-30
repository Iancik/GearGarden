document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.containerz');
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    favorites.forEach((product, index) => {
      const productCard = document.createElement('div');
      productCard.classList.add('product-cardz');

      productCard.innerHTML = `
        <img src="${product.image}" alt="${product.title}">
        <h3>${product.title}</h3>
        <p>${product.price}</p>
        <button>ADAUGĂ</button>
        <button class="delete-btn" data-index="${index}">ȘTERGE</button>
      `;

      container.appendChild(productCard);
    });

    container.addEventListener('click', function(event) {
      if (event.target.classList.contains('delete-btn')) {
        const index = event.target.getAttribute('data-index');
        favorites.splice(index, 1);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        location.reload();
      }
    });
  });