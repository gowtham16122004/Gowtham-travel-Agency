document.addEventListener('DOMContentLoaded', () => {
    // Toggle FAQ Answers
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        const icon = item.querySelector('.faq-icon');

        question.addEventListener('click', () => {
            // Toggle the answer visibility
            const isVisible = answer.style.display === 'block';
            answer.style.display = isVisible ? 'none' : 'block';
            // Change icon based on visibility
            icon.textContent = isVisible ? '▼' : '▲';
        });
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

    // Enhance location input with suggestions
    const locationInput = document.getElementById('location');
    locationInput.addEventListener('input', () => {
        const datalist = document.getElementById('location-options');
        const userInput = locationInput.value.toLowerCase();
        const options = datalist.querySelectorAll('option');
        
        // Hide or show suggestions based on input
        options.forEach(option => {
            const optionValue = option.value.toLowerCase();
            option.style.display = optionValue.includes(userInput) ? 'block' : 'none';
        });
    });

    // Handle search button click
    const searchButton = document.querySelector('.search-btn');
    searchButton.addEventListener('click', () => {
        const locationValue = locationInput.value;
        const checkinDate = document.getElementById('checkin').value;
        const checkoutDate = document.getElementById('checkout').value;
        const roomsGuests = document.getElementById('rooms-guests').value;

        console.log(`Searching for hotels in ${locationValue} from ${checkinDate} to ${checkoutDate} for ${roomsGuests} guests.`);
        // Here you could redirect to a search results page or make an API call to get the search results.
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const readMoreBtn = document.querySelector(".read-more-btn");
    const contentParagraph = document.querySelector(".hotel-deals-content .content");

    // Store the full content and the previewed content
    const fullContent = contentParagraph.innerHTML;
    const previewContent = fullContent.slice(0, 600);  // Preview content with a character limit (300 characters)

    // Initially show the preview content with "Read More"
    contentParagraph.innerHTML = previewContent + '...';

    readMoreBtn.addEventListener("click", function() {
        if (contentParagraph.innerHTML === fullContent) {
            // If the content is expanded, collapse it back
            contentParagraph.innerHTML = previewContent + '...';
            readMoreBtn.textContent = "Read More";  // Change the button text back to "Read More"
        } else {
            // If the content is collapsed, show the full content
            contentParagraph.innerHTML = fullContent;
            readMoreBtn.textContent = "Show Less";  // Change the button text to "Show Less"
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".destination-card");
    const viewMoreButton = document.querySelector(".view-more-btn");

    // Show only the first 10 cards initially
    const visibleCardsCount = 10;
    cards.forEach((card, index) => {
        if (index >= visibleCardsCount) {
            card.classList.add("hidden");
        }
    });

    // Add click event to the "View More" button
    viewMoreButton.addEventListener("click", function () {
        const hiddenCards = document.querySelectorAll(".destination-card.hidden");
        
        // Show the remaining hidden cards
        hiddenCards.forEach(card => card.classList.remove("hidden"));

        // Hide the "View More" button after all cards are visible
        viewMoreButton.style.display = "none";
    });
});
