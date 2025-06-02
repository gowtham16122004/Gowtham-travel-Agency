



document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".holiday-packages");
    const packages = document.querySelectorAll(".package");
    const leftArrow = document.querySelector(".left-arrow");
    const rightArrow = document.querySelector(".right-arrow");

    let currentIndex = 0; // Tracks the start of the visible items

    const updateVisibility = () => {
        packages.forEach((pkg, index) => {
            if (index >= currentIndex && index < currentIndex + 5) {
                pkg.style.display = "block"; // Show the package
            } else {
                pkg.style.display = "none"; // Hide the package
            }
        });
    };

    leftArrow.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateVisibility();
        }
    });

    rightArrow.addEventListener("click", () => {
        if (currentIndex + 5 < packages.length) {
            currentIndex++;
            updateVisibility();
        }
    });

    // Initialize the first visible set of packages
    updateVisibility();
});


document.addEventListener("DOMContentLoaded", () => {
    const readMoreLinks = document.querySelectorAll(".testimonial-view-more");

    readMoreLinks.forEach((link) => {
        link.addEventListener("click", (event) => {
            event.preventDefault(); // Prevent the default link behavior
            const testimonialBox = link.closest(".testimonial-box");
            const content = testimonialBox.querySelector(".testimonial-content");

            if (link.textContent === "View more") {
                content.style.display = "block";
                link.textContent = "View less";
            } else {
                content.style.display = "-webkit-box"; // Collapse the content
                link.textContent = "View more";
            }
        });
    });
});
  
document.addEventListener("DOMContentLoaded", function() {
    const viewMoreBtns = document.querySelectorAll(".testimonial-view-more");

    viewMoreBtns.forEach((btn) => {
        btn.addEventListener("click", function(event) {
            event.preventDefault();  // Prevents the default link behavior

            const testimonialContent = this.closest(".testimonial-box").querySelector(".testimonial-content");

            const fullContent = testimonialContent.getAttribute("data-full-content");
            const currentContent = testimonialContent.innerHTML;

            // Toggle between preview content and full content
            if (currentContent === fullContent) {
                testimonialContent.innerHTML = currentContent.slice(0, 250) + "...";  // Show preview content (increased range)
                this.textContent = "View more";  // Update button text
            } else {
                testimonialContent.innerHTML = fullContent;  // Show full content
                this.textContent = "Show less";  // Update button text
            }
        });
    });

    // Store full content in the data attribute for each testimonial
    const testimonialContents = document.querySelectorAll(".testimonial-content");
    testimonialContents.forEach((content) => {
        const fullContent = content.innerHTML;  // Store the full content
        content.setAttribute("data-full-content", fullContent);  // Set the full content as a data attribute
        content.innerHTML = content.innerHTML.slice(0, 300) + "...";  // Show preview content by default (increased range)
    });
});


 // JavaScript for live search functionality
 document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.querySelector('.search-bar input');
    const packageCards = document.querySelectorAll('.package-card');
    const noResultsMessage = document.querySelector('.no-results');

    searchInput.addEventListener('input', function () {
        const query = searchInput.value.toLowerCase();
        let hasResults = false;

        packageCards.forEach(function (card) {
            // Check if the query matches the package title or description
            const title = card.querySelector('.package-details h2').textContent.toLowerCase();
            const description = card.querySelector('.package-details p').textContent.toLowerCase();

            if (title.includes(query) || description.includes(query)) {
                card.style.display = 'block'; // Show matching package
                hasResults = true;
            } else {
                card.style.display = 'none'; // Hide non-matching package
            }
        });

        // Show or hide the "No results" message
        noResultsMessage.style.display = hasResults ? 'none' : 'block';
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const signupButton = document.getElementById("signup-btn"); // Signup button
    const popup = document.getElementById("signup-popup"); // The popup container
    const closeButton = document.getElementById("close-popup"); // Close button

    // Show popup when clicking the Signup button
    signupButton.addEventListener("click", function () {
        popup.classList.add("active");
    });

    // Hide popup when clicking the Close button
    closeButton.addEventListener("click", function () {
        popup.classList.remove("active");
    });

    // Hide popup when clicking outside the popup
    window.addEventListener("click", function (event) {
        if (event.target === popup) {
            popup.classList.remove("active");
        }
    });
});




document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("usernameModal");
    const inputField = document.querySelector(".modal-input");

    inputField.addEventListener("keypress", function (event) {
        if (event.key === "Enter" && inputField.value.trim() !== "") {
            const username = inputField.value.trim();
            modal.style.display = "none"; // Hide the modal

            // Show greeting message
            setTimeout(() => {
                alert(`Hey, ${username}! Ready to explore the world? 🌎✨`);
            }, 300); // Slight delay for better UX
        }
    });
});
