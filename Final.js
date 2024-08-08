// Final.js

// Function to load only product name, quantity, and total price
function loadSimpleCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartTableBody = document.querySelector('#cart-table tbody');
    const cartTotalElement = document.getElementById('cart-total');
    let totalAmount = 0;

    cartTableBody.innerHTML = ''; // Clear the table first

    cart.forEach((product) => {
        const totalPrice = product.price * product.quantity;
        totalAmount += totalPrice;

        const row = document.createElement('tr');
        row.innerHTML = `
            <td scope="row" data-label="Product Name">${product.name}</td>
            <td data-label="Quantity">${product.quantity}</td>
            <td data-label="Total" class="item-total">Rs ${totalPrice.toFixed(2)}</td>
        `;
        cartTableBody.appendChild(row);
    });

    cartTotalElement.textContent = `Total: Rs ${totalAmount.toFixed(2)}`;
}

// Function to auto-reload the cart every 1 second
function autoReloadCart() {
    setInterval(loadSimpleCart, 1000);
}

// Call the function when the page loads and start auto-reloading
document.addEventListener('DOMContentLoaded', () => {
    loadSimpleCart();
    autoReloadCart();
});

// Function to handle the purchase button click
document.getElementById('pay-button').addEventListener('click', function() {
    const firstName = document.getElementById('f-name').value;
    const lastName = document.getElementById('l-name').value;
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    const zip = document.getElementById('zip').value;
    const cardNum = document.getElementById('card-num').value;
    const expire = document.getElementById('expire').value;
    const security = document.getElementById('security').value;

    if (firstName && lastName && address && city && state && zip && cardNum && expire && security) {
        const deliveryDate = new Date();
        deliveryDate.setDate(deliveryDate.getDate() + 3);
        const formattedDate = deliveryDate.toDateString();

        const messageDiv = document.getElementById('message');
        messageDiv.className = 'message success';
        messageDiv.innerText = `Thank you for your purchase, ${firstName}! Your order will be delivered by ${formattedDate}.`;
        messageDiv.style.display = 'block';
    } else {
        const messageDiv = document.getElementById('message');
        messageDiv.className = 'message error';
        messageDiv.innerText = 'Please fill out all fields correctly.';
        messageDiv.style.display = 'block';
    }
});
