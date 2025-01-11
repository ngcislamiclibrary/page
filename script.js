document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById("toggleBtn");
    const navbar = document.querySelector(".navbar");
    const navbarLinks = document.getElementById("navbarLinks");

    // Toggle navbar visibility
    toggleBtn.addEventListener("click", (event) => {
        event.stopPropagation(); // Prevent the click from closing the navbar immediately
        navbar.classList.toggle("active");
    });

    // Close navbar when clicking outside of it
    document.addEventListener("click", (event) => {
        if (!navbar.contains(event.target)) {
            navbar.classList.remove("active");
        }
    });

    // Ensure clicking a link inside the navbar also closes it
    navbarLinks.addEventListener("click", () => {
        navbar.classList.remove("active");
    });
});
