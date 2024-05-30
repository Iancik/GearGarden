document.addEventListener('DOMContentLoaded', function() {
    const cartTableBody = document.querySelector('#cart-table tbody');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    console.log('Cart items:', cart); // Mesaj de debug

    // Grouping products by name and summing quantities
    const groupedCart = cart.reduce((acc, product) => {
        const existingProduct = acc.find(item => item.name === product.name);
        if (existingProduct) {
            existingProduct.quantity += 1;
        } else {
            product.quantity = 1;
            acc.push(product);
        }
        return acc;
    }, []);

    groupedCart.forEach(product => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${product.code}</td>
            <td>${product.date}</td>
            <td>${product.price} $</td>
            <td>${product.name}</td>
            <td>${product.status}</td>
            <td>${product.quantity}</td>
            <td>
                <button class="btn details-btn">Detalii</button>
                <button class="btn delete-btn" data-name="${product.name}">Șterge</button>
            </td>
        `;
        cartTableBody.appendChild(row);
    });

    // Adăugare event listener pentru butoanele de ștergere
    const deleteButtons = document.querySelectorAll('.delete-btn');
    deleteButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productName = this.getAttribute('data-name');
            cart = cart.filter(product => product.name !== productName); // Elimină produsul din array
            localStorage.setItem('cart', JSON.stringify(cart)); // Actualizează local storage
            window.location.reload(); // Reîncarcă pagina pentru a actualiza tabelul
        });
    });
});