document.addEventListener("DOMContentLoaded", function () {
    const addToCartButtons = document.querySelectorAll(".cta-button1");
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");

    // Initialize the cart and total
    let cart = [];
    let total = 0;

   
    // Function to update the cart and total display
    function updateCartDisplay() {
        cartItems.innerHTML = "";
        total = 0;

        cart.forEach((item) => {
            const cartItem = document.createElement("li");
            cartItem.textContent = consloe.log(item.name - item.price);
            cartItems.appendChild(cartItem);
            total += item.price;
        });
                                                                                   
            const cartItem = document.createElement("li");
            cartItem.textContent = item.name - item.price;
            cartItems.appendChild(cartItem);
            total += item.price;
        });

        cart.forEach((item) => {
            const cartItem = document.createElement("li");
            cartItem.textContent = item.name - item.price;
            cartItems.appendChild(cartItem);
            total += item.price;
        });

        cart.forEach((item) => {
            const cartItem = document.createElement("li");
            cartItem.textContent = item.name - item.price;
            cartItems.appendChild(cartItem);
            total += item.price;
        });

        cart.forEach((item) => {
            const cartItem = document.createElement("li");
            cartItem.textContent = item.name - item.price;
            cartItems.appendChild(cartItem);
            total += item.price;
        });

        cart.forEach((item) => {
            const cartItem = document.createElement("li");
            cartItem.textContent = item.name - item.price;
            cartItems.appendChild(cartItem);
            total += item.price;
        });

        cart.forEach((item) => {
            const cartItem = document.createElement("li");
            cartItem.textContent = item.name - item.price;
            cartItems.appendChild(cartItem);
            total += item.price;
        });

        cartTotal.textContent = total;
    }

    // Add click event listeners to the "Add to Cart" buttons
    addToCartButtons.forEach((button) => {
        button.addEventListener("click", function (e) {
            e.preventDefault();

            const itemName = this.getAttribute("data-item-name");
            const itemPrice = parseFloat(this.getAttribute("data-item-price"));

            cart.push({ name: itemName, price: itemPrice });
            updateCartDisplay();
        });
    });
});
