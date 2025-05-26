const closeButton = document.querySelector(".close");
const openButton = document.querySelector(".ham");
const menuElement = document.querySelector(".menu");

closeButton.addEventListener("click", () => {
    menuElement.classList.remove("menu-visible");
});

openButton.addEventListener("click", () => {
    menuElement.classList.add("menu-visible");
});

// Search Functionality
const searchInput = document.getElementById("input");
const productItems = document.querySelectorAll(".section2 .container .items");

searchInput.addEventListener("input", function () {
    const searchTerm = searchInput.value.toLowerCase();

    productItems.forEach(function (item) {
        const productNameElement = item.querySelector(".name");
        // Ensure productNameElement exists before trying to get its textContent
        if (productNameElement) {
            const productName = productNameElement.textContent.toLowerCase();
            if (productName.includes(searchTerm)) {
                item.style.display = ""; // Reset to default display (inherits from CSS)
            } else {
                item.style.display = "none";
            }
        }
    });
});