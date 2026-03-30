// Sample data for goods and services
const products = [
    { name: "Smartphone", price: "150 π", type: "Product" },
    { name: "Web Design Service", price: "50 π", type: "Service" },
    { name: "Data Top-Up", price: "5 π", type: "Utility" },
    { name: "Laptop Pro", price: "450 π", type: "Product" },
    { name: "Digital Marketing", price: "80 π", type: "Service" },
    { name: "Subscription Giftcard", price: "12 π", type: "Digital" }
];

const grid = document.getElementById('market-grid');

// Load products into the UI
function displayProducts() {
    products.forEach(item => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <h3>${item.name}</h3>
            <p>${item.type}</p>
            <p class="price">${item.price}</p>
            <button class="pi-btn" onclick="initiatePayment('${item.name}')">Buy Now</button>
        `;
        grid.appendChild(card);
    });
}

// Simulated Pi Payment function
function initiatePayment(itemName) {
    alert(`Connecting to Pi Browser... \nPreparing transaction for: ${itemName}`);
    // Here you would normally integrate the Pi SDK: Pi.createPayment(...)
}

window.onload = displayProducts;
