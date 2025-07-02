document.addEventListener("DOMContentLoaded", function () {
    const searchButton = document.querySelector('.search-btn');
    const fromInput = document.querySelector('#from');
    const toInput = document.querySelector('#to');
    const dateInput = document.querySelector('[type="date"]');
    const classSelect = document.querySelector('select');

    // Event listener for the SEARCH button
    searchButton.addEventListener('click', function (event) {
        // Prevent default form submission (if part of a form)
        event.preventDefault();

        // Get values of input fields
        const fromValue = fromInput.value;
        const toValue = toInput.value;
        const departureDate = dateInput.value;
        const travelClass = classSelect.value;

        // Simple validation check
        if (!fromValue || !toValue || !departureDate) {
            alert("Please fill in all the required fields.");
            return;
        }

        // Process the data or alert (can replace with actual search logic)
        alert(`Searching for flights from ${fromValue} to ${toValue} on ${departureDate}.\nClass: ${travelClass}`);
        
        // You can replace this with actual form submission or API call
        // Example:
        // document.getElementById("flight-search-form").submit();
    });

    // Optional: You can add more interactivity for the input fields if needed.
    fromInput.addEventListener('input', function () {
        // You could add live suggestions, validation, or more here.
    });

    toInput.addEventListener('input', function () {
        // You could add live suggestions, validation, or more here.
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const periodButtons = document.querySelectorAll(".period-btn");
    const departureSelect = document.getElementById("departure");
  
    // Highlight active travel period button
    periodButtons.forEach((button) => {
      button.addEventListener("click", function () {
        periodButtons.forEach((btn) => btn.classList.remove("active"));
        this.classList.add("active");
      });
    });
  
    // Change content based on selected departure (Example logic)
    departureSelect.addEventListener("change", function () {
      const selectedCity = this.value;
      alert(`Showing deals from ${selectedCity}`); // Example action
      // You can add logic here to dynamically filter or update the deals list
    });
  });
  document.addEventListener("DOMContentLoaded", function () {
    const periodButtons = document.querySelectorAll(".period-btn");
    const departureSelect = document.getElementById("departure");
  
    // Highlight active travel period button
    periodButtons.forEach((button) => {
      button.addEventListener("click", function () {
        periodButtons.forEach((btn) => btn.classList.remove("active"));
        this.classList.add("active");
      });
    });
  
    // Change content based on selected departure (Example logic)
    departureSelect.addEventListener("change", function () {
      const selectedCity = this.value;
      alert(`Showing deals from ${selectedCity}`); // Example action
      // You can add logic here to dynamically filter or update the deals list
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
  