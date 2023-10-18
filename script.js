// Add your JavaScript code here
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartCount = document.getElementById('cart-count');

let cartItemCount = 0;

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        cartItemCount++;
        cartCount.textContent = cartItemCount;
    });
});

document.getElementById('view-cart').addEventListener('click', () => {
    alert('Cart items: ' + cartItemCount);
});
