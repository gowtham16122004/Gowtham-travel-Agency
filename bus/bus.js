document.getElementById("search-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const source = document.getElementById("source").value;
    const destination = document.getElementById("destination").value;
    const departureDate = document.getElementById("departure-date").value;

    alert(`Searching buses from ${source} to ${destination} on ${departureDate}`);
});


document.addEventListener("DOMContentLoaded", () => {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {
        item.addEventListener("click", () => {
            // Toggle the "open" class on the clicked item
            item.classList.toggle("open");
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
