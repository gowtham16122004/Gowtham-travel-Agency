// Price Range Slider
const priceRange = document.getElementById('price-range');
const priceDisplay = document.getElementById('price-display');

// Update price display
priceRange.addEventListener('input', function () {
    priceDisplay.textContent = `₹${this.value}`;
    console.log(`Price range selected: ₹${this.value}`);
});

// Duration Range Slider
const durationRange = document.getElementById('duration-range');
const durationDisplay = document.getElementById('duration-display');

// Update duration display
durationRange.addEventListener('input', function () {
    durationDisplay.textContent = `${this.value} Days`;
    console.log(`Duration selected: ${this.value} days`);
});




// Package type filter buttons
const packageButtons = document.querySelectorAll(".package-options button");

packageButtons.forEach(button => {
    button.addEventListener("click", () => {
        packageButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
    });
});

// Search functionality
const searchInput = document.querySelector(".search-input");
const searchButton = document.querySelector(".search-button");

searchButton.addEventListener("click", () => {
    const searchTerm = searchInput.value.toLowerCase();
    const packages = document.querySelectorAll(".package, .travel-package");
    
    packages.forEach(pkg => {
        const title = pkg.querySelector("h2").textContent.toLowerCase();
        if (title.includes(searchTerm)) {
            pkg.style.display = "block";
        } else {
            pkg.style.display = "none";
        }
    });
});

// Subscription form validation
const subscribeForm = document.querySelector(".subscribe-form");
subscribeForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const emailInput = subscribeForm.querySelector("input[type='email']");
    const email = emailInput.value;
    if (validateEmail(email)) {
        alert("Thank you for subscribing!");
        emailInput.value = ""; // Clear the input
    } else {
        alert("Please enter a valid email address.");
    }
});

// Validate email function
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Highlight recommended packages
const recommendedPackages = document.querySelectorAll(".recommended-package");
recommendedPackages.forEach(pkg => {
    pkg.classList.add("highlight");
});

// Social icons hover effect (optional)
const socialIcons = document.querySelectorAll(".social-icons a");
socialIcons.forEach(icon => {
    icon.addEventListener("mouseover", () => icon.classList.add("hover"));
    icon.addEventListener("mouseout", () => icon.classList.remove("hover"));
});