document.addEventListener('DOMContentLoaded', function() {
    const heartCheckboxes = document.querySelectorAll('.heart-checkbox');
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    // Function to create a product object
    function createProductObject(productCard) {
        return {
            image: productCard.querySelector('img').src,
            title: productCard.querySelector('h3').innerText,
            price: productCard.querySelector('.price').innerText
        };
    }

    // Set heart icons to checked if product is in favorites
    heartCheckboxes.forEach(checkbox => {
        const productCard = checkbox.closest('.product-card');
        const product = createProductObject(productCard);

        if (favorites.some(fav => fav.image === product.image && fav.title === product.title && fav.price === product.price)) {
            checkbox.checked = true;
        }

        // Ensure the event is added only once
        if (!checkbox.dataset.listenerAdded) {
            checkbox.addEventListener('change', function() {
                const productCard = this.closest('.product-card');
                const product = createProductObject(productCard);

                favorites = JSON.parse(localStorage.getItem('favorites')) || [];

               orage.setItem('favorites', JSON.stringify(favorites));
            });

            checkbox.dataset.listenerAdded = 'true'; // Mark listener as added
        }
    });
});
