document.addEventListener("DOMContentLoaded", () => {
    const questions = document.querySelectorAll(".faq-question");
  
    questions.forEach((question) => {
      question.addEventListener("click", () => {
        const answer = question.nextElementSibling;
  
        // Toggle visibility
        if (answer.style.display === "block") {
          answer.style.display = "none";
        } else {
          answer.style.display = "block";
        }
      });
    });
  });

  

  document.addEventListener("DOMContentLoaded", function() {
    const readMoreLink = document.querySelector(".read-more-link");

    // Get the content that needs to be expanded
    const introText = document.querySelector(".intro-text");
    const fullText = introText.innerHTML;
    const previewText = fullText.slice(0, 200);  // Show first 200 characters as preview

    // Initially show preview text with "Read More"
    introText.innerHTML = previewText + '...';

    // Add event listener to the "Read More" link
    readMoreLink.addEventListener("click", function(event) {
        event.preventDefault();  // Prevents the default link behavior
        
        // Toggle between preview text and full text
        if (introText.innerHTML === previewText + '...') {
            introText.innerHTML = fullText;  // Show full text
            readMoreLink.textContent = "Read Less";  // Update button text
        } else {
            introText.innerHTML = previewText + '...';  // Show preview text
            readMoreLink.textContent = "Read More";  // Update button text
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
  const toggleSwitch = document.querySelector(".theme-checkbox");
  const body = document.body;

  // Check user preference from local storage
  if (localStorage.getItem("darkMode") === "enabled") {
      body.classList.add("dark-mode");
      toggleSwitch.checked = true;
  }

  // Toggle dark mode
  toggleSwitch.addEventListener("change", function () {
      if (this.checked) {
          body.classList.add("dark-mode");
          localStorage.setItem("darkMode", "enabled");
      } else {
          body.classList.remove("dark-mode");
          localStorage.setItem("darkMode", "disabled");
      }
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
