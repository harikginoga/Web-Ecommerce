// Mobile Menu Toggle Functionality
const closeButton = document.querySelector(".close");
const openButton = document.querySelector(".ham");
const menuElement = document.querySelector(".menu");

if (closeButton && openButton && menuElement) {
    closeButton.addEventListener("click", () => {
        menuElement.classList.remove("menu-visible");
    });

    openButton.addEventListener("click", () => {
        menuElement.classList.add("menu-visible");
    });
}

// Product Container
const productContainer = document.querySelector(".section2 .container");

// Render Products Function
function renderProducts(productsData) {
    if (!productContainer) {
        console.error("Product container not found!");
        return;
    }
    productContainer.innerHTML = ""; // Clear existing products

    if (!productsData || productsData.length === 0) {
        productContainer.innerHTML = "<p>No products found.</p>";
        return;
    }

    productsData.forEach(product => {
        const item = document.createElement("article");
        item.classList.add("items");

        const imgContainer = document.createElement("div");
        imgContainer.classList.add("img"); 
        // imgContainer.classList.add("img1"); // If specific alternating styles were needed

        const img = document.createElement("img");
        img.src = product.image_url || "https://via.placeholder.com/200x200.png?text=No+Image";
        img.alt = product.name;
        imgContainer.appendChild(img);

        const nameDiv = document.createElement("div");
        nameDiv.classList.add("name");
        nameDiv.textContent = product.name;

        const priceDiv = document.createElement("div");
        priceDiv.classList.add("price");
        // Ensure price is treated as a number and formatted
        const price = parseFloat(product.price);
        priceDiv.textContent = `$${isNaN(price) ? '0.00' : price.toFixed(2)}`;


        const infoDiv = document.createElement("div");
        infoDiv.classList.add("info");
        infoDiv.textContent = product.description || "No description available.";

        const detailsButton = document.createElement("button");
        detailsButton.classList.add("view-details-btn");
        detailsButton.textContent = "View Details";
        // Example: Link to a product detail page (if such a page exists)
        // detailsButton.onclick = () => { window.location.href = `/products/${product.id}`; };


        item.appendChild(imgContainer);
        item.appendChild(nameDiv);
        item.appendChild(priceDiv);
        item.appendChild(infoDiv);
        item.appendChild(detailsButton);

        productContainer.appendChild(item);
    });
}

// Fetch and Display Products Function
async function fetchAndDisplayProducts() {
    if (!productContainer) { // Don't attempt fetch if container isn't on the page
        return;
    }
    try {
        const response = await fetch('/api/products'); 
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const products = await response.json();
        renderProducts(products);
    } catch (error) {
        console.error("Could not fetch or render products:", error);
        if (productContainer) {
            productContainer.innerHTML = "<p>Error loading products. Please try again later.</p>";
        }
    }
}

// Search Functionality
const searchInput = document.getElementById("input");

if (searchInput && productContainer) { // Ensure both search input and container exist
    searchInput.addEventListener("input", function () {
        const searchTerm = searchInput.value.toLowerCase();
        // Query productItems inside the event listener to get current items
        const currentProductItems = productContainer.querySelectorAll(".items");

        currentProductItems.forEach(function (item) {
            const productNameElement = item.querySelector(".name");
            if (productNameElement) {
                const productName = productNameElement.textContent.toLowerCase();
                if (productName.includes(searchTerm)) {
                    item.style.display = ""; // Reset to default display
                } else {
                    item.style.display = "none";
                }
            }
        });
    });
}

// Initial Load of Products
document.addEventListener('DOMContentLoaded', () => {
    fetchAndDisplayProducts();
});