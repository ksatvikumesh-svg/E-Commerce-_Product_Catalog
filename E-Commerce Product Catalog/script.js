let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Add product to cart
function addToCart(name, price) {
    cart.push({
        name: name,
        price: price
    });

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(name + " added to cart!");
}

// Display cart items
function displayCart() {

    const cartItems = document.getElementById("cartItems");
    const totalPrice = document.getElementById("totalPrice");

    if (!cartItems) return;

    cartItems.innerHTML = "";

    let total = 0;

    if (cart.length === 0) {
        cartItems.innerHTML = "<p>Your cart is empty.</p>";
        totalPrice.textContent = "0";
        return;
    }

    cart.forEach((item, index) => {

        total += item.price;

        const div = document.createElement("div");

        div.className = "product-card";

        div.innerHTML = `
            <h3>${item.name}</h3>
            <p>₹${item.price}</p>
            <button onclick="removeItem(${index})">Remove</button>
        `;

        cartItems.appendChild(div);

    });

    totalPrice.textContent = total;
}

// Remove one item
function removeItem(index) {

    cart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();
}

// Clear cart
function clearCart() {

    if(confirm("Are you sure you want to clear the cart?")){

        cart = [];

        localStorage.removeItem("cart");

        displayCart();
    }
}

// Load cart when cart page opens
displayCart();