document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('#addToCartButton');
  
    buttons.forEach(button => {
      button.addEventListener('click', function() {
        const productName = 'Duralast Gold Battery BCI Group Size 140R 480 CCA H4-DLG';
        const productPrice = '214.19$';
        const productQuantity = document.querySelector('.dropdown').value;
        const currentDate = new Date().toLocaleDateString();
        const productCode = Math.floor(Math.random() * 100000);
        const productStatus = 'In process';
        
        const product = {
          name: productName,
          price: productPrice,
          quantity: productQuantity,
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
  