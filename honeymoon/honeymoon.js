// Price and Duration Elements
const priceRange = document.getElementById("price-range");
const priceValue = document.getElementById("price-value");
const durationRange = document.getElementById("duration-range");
const durationValue = document.getElementById("duration-value");

// Update Price Value Dynamically
priceRange.addEventListener("input", () => {
    priceValue.textContent = `₹${parseInt(priceRange.value).toLocaleString()}`;
});

// Update Duration Value Dynamically
durationRange.addEventListener("input", () => {
    durationValue.textContent = `${durationRange.value} days`;
});


// honeymoon.js

document.addEventListener("DOMContentLoaded", function() {
    // Price range slider functionality
    const priceRange = document.getElementById("price-range");
    const priceValue = document.getElementById("price-value");

    priceRange.addEventListener("input", function() {
        priceValue.textContent = `₹${priceRange.value}`;
    });

    // Duration range slider functionality
    const durationRange = document.getElementById("duration-range");
    const durationValue = document.getElementById("duration-value");

    durationRange.addEventListener("input", function() {
        durationValue.textContent = `${durationRange.value} days`;
    });

    // Sorting functionality
    const sortBySelect = document.getElementById("sort-by");
    sortBySelect.addEventListener("change", function() {
        const sortBy = sortBySelect.value;
        sortPackages(sortBy);
    });

    // Function to sort packages based on selected criteria
    function sortPackages(sortBy) {
        const packageCards = document.querySelectorAll('.package-card');
        const packageArray = Array.from(packageCards);

        // Sorting based on price or duration
        packageArray.sort((a, b) => {
            const priceA = parseInt(a.querySelector('.new-price').textContent.replace('₹', '').replace(',', ''));
            const priceB = parseInt(b.querySelector('.new-price').textContent.replace('₹', '').replace(',', ''));

            const durationA = parseInt(a.querySelector('.nights').textContent.replace(' Nights', ''));
            const durationB = parseInt(b.querySelector('.nights').textContent.replace(' Nights', ''));

            if (sortBy === 'price') {
                return priceA - priceB; // Sort by price
            } else if (sortBy === 'duration') {
                return durationA - durationB; // Sort by duration
            }
            return 0; // No sorting
        });

        // Reorder the packages in the DOM
        const packageContainer = document.querySelector('.package-container');
        packageContainer.innerHTML = '';
        packageArray.forEach(packageCard => {
            packageContainer.appendChild(packageCard);
        });
    }
});


// Subscribe form validation
const subscribeForm = document.querySelector('.subscribe-form');
subscribeForm.addEventListener('submit', (e) => {
    const emailInput = subscribeForm.querySelector('input[type="email"]');
    const emailValue = emailInput.value;

    // Simple email validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(emailValue)) {
        e.preventDefault();
        alert('Please enter a valid email address.');
    } else {
        alert('Subscription successful!');
    }
});


// JavaScript code for honeymoon packages page

document.addEventListener("DOMContentLoaded", () => {
    // Update price range display
    const priceRange = document.getElementById("price-range");
    const priceValue = document.getElementById("price-value");

    priceRange.addEventListener("input", () => {
        priceValue.textContent = `₹${parseInt(priceRange.value).toLocaleString()}`;
    });

    // Update duration range display
    const durationRange = document.getElementById("duration-range");
    const durationValue = document.getElementById("duration-value");

    durationRange.addEventListener("input", () => {
        durationValue.textContent = `${durationRange.value} Days`;
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
    const searchInput = document.querySelector(".search-bar input");
    const searchButton = document.querySelector(".search-bar button");

    searchButton.addEventListener("click", () => {
        const searchTerm = searchInput.value.toLowerCase();
        const packages = document.querySelectorAll(".package-card");

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
    const recommendedPackages = document.querySelectorAll(".badge");
    recommendedPackages.forEach(badge => {
        badge.style.backgroundColor = "#f39c12";
    });

    // Social media icons hover effect
    const socialIcons = document.querySelectorAll(".social-icons a");
    socialIcons.forEach(icon => {
        icon.addEventListener("mouseover", () => {
            icon.style.opacity = "0.7";
        });
        icon.addEventListener("mouseout", () => {
            icon.style.opacity = "1";
        });
    });
});



// JavaScript to handle "See option" functionality
document.addEventListener('DOMContentLoaded', () => {
    const seeOptionLinks = document.querySelectorAll('.emi a'); // Select all "See option" links

    seeOptionLinks.forEach((link, index) => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default anchor link behavior

            const hiddenContent = link.closest('.package-card').querySelector('.hidden-content');

            if (hiddenContent) {
                // Toggle visibility
                if (hiddenContent.style.display === 'block') {
                    hiddenContent.style.display = 'none';
                    link.textContent = 'See option';
                } else {
                    hiddenContent.style.display = 'block';
                    link.textContent = 'Hide option';
                }
            }
        });
    });
});


const wrapper = document.querySelector('.form-container');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.login-button');
const closeIcon = document.querySelector('.icon-close'); // Select the close button

// Open Popup when Login Button is Clicked
btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup'); 
});

// Switch to Register Form
registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

// Switch to Login Form
loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

// Close Popup when Close Icon is Clicked
closeIcon.addEventListener('click', () => {
    wrapper.classList.remove('active-popup'); // Remove popup
    wrapper.classList.remove('active'); // Ensure it resets to login form
});


