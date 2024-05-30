function onMenuClick() {
    var navbar = document.getElementById("navigation-bar");
    var responsive_class_name = "responsive";

    navbar.classList.toggle(responsive_class_name);
}
document.getElementById('searchButton').addEventListener('click', function() {
    var searchBar = document.getElementById('searchBar');
    var searchButton = document.getElementById('searchButton');
    if (searchBar.style.display === 'none') {
        searchBar.style.display = 'inline-block';
        searchBar.classList.add('show');
        searchButton.style.display = 'none';
    } else {
        searchBar.style.display = 'none';
        searchBar.classList.remove('show');
        searchButton.style.display = 'inline-block';
    }
});


document.addEventListener('DOMContentLoaded', function() {
    const heartCheckboxes = document.querySelectorAll('.heart-checkbox');
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  
    // Set heart icons to checked if product is in favorites
    heartCheckboxes.forEach(checkbox => {
      const productCard = checkbox.closest('.product-card');
      const product = {
        image: productCard.querySelector('img').src,
        title: productCard.querySelector('h3').innerText,
        price: productCard.querySelector('.price').innerText
      };
  
      if (favorites.some(fav => fav.image === product.image && fav.title === product.title && fav.price === product.price)) {
        checkbox.checked = true;
      }
    });
  
    // Add event listener to heart icons
    heartCheckboxes.forEach(checkbox => {
      checkbox.addEventListener('change', function() {
        const productCard = this.closest('.product-card');
        const product = {
          image: productCard.querySelector('img').src,
          title: productCard.querySelector('h3').innerText,
          price: productCard.querySelector('.price').innerText
        };
  
        let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  
        if (this.checked) {
          // Add product to favorites
          favorites.push(product);
        } else {
          // Remove product from favorites
          favorites = favorites.filter(fav => !(fav.image === product.image && fav.title === product.title && fav.price === product.price));
        }
  
        localStorage.setItem('favorites', JSON.stringify(favorites));
      });
    });
  });



