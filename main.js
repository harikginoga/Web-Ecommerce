// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    const close = document.querySelector(".close");
    const open = document.querySelector(".ham");
    const menu = document.querySelector(".menu");
    
    // Check if all elements exist before adding event listeners
    if (close && open && menu) {
        close.addEventListener("click", () => { 
            menu.style.visibility = "hidden";
        });
        
        open.addEventListener("click", () => {
            menu.style.visibility = "visible";
        });
    } else {
        console.warn("Mobile menu elements not found. Some functionality may not work.");
    }
});