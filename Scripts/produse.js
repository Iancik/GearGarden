document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.card-buttonp');
    const sortOptions = document.getElementById('sort-options');
    const cardsContainer = document.querySelector('.card-info');
    const cards = Array.from(document.querySelectorAll('.cardp'));

    function sortCards(criteria) {
      let sortedCards;

      switch (criteria) {
        case 'Crescător':
          sortedCards = cards.sort((a, b) => parseFloat(a.getAttribute('data-price')) - parseFloat(b.getAttribute('data-price')));
          break;
        case 'Descrescător':
          sortedCards = cards.sort((a, b) => parseFloat(b.getAttribute('data-price')) - parseFloat(a.getAttribute('data-price')));
          break;
        case 'Nouprodus':
          sortedCards = cards.sort((a, b) => new Date(b.getAttribute('data-date')) - new Date(a.getAttribute('data-date')));
          break;
        default:
          sortedCards = cards;
      }

      cardsContainer.innerHTML = '';
      sortedCards.forEach(card => cardsContainer.appendChild(card));
    }

    sortOptions.addEventListener('change', function() {
      sortCards(this.value);
    });

    buttons.forEach(button => {
      button.addEventListener('click', function() {
        const productName = this.getAttribute('data-name');
        const productPrice = this.getAttribute('data-price');
        const currentDate = new Date().toLocaleDateString();
        const productCode = Math.floor(Math.random() * 100000);
        const productStatus = 'In process';
        
        const product = {
            name: productName,
            price: productPrice,
            date: currentDate,
            code: productCode,
            status: productStatus
        };
        
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
        
        window.location.href = 'cos.html';
      });
    });
  });
