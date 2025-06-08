function createRecommendationBox(message) {
    const box = document.createElement('div'); // Create a new div element
    box.className = 'recommendation-box'; // Add the class name

    const messageElement = document.createElement('p'); // Create a new paragraph element
    messageElement.textContent = `"${message}"`; // Set the message text

    box.appendChild(messageElement); // Append the paragraph to the box

    return box; // Return the created box
}

function submitRecommendation(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    // The line event.preventDefault(); is used to prevent the default form submission behavior in JavaScript. By default, when a form is submitted, the browser reloads the page or navigates to the URL specified in the action attribute of the <form> tag. Using event.preventDefault() stops this behavior, allowing you to handle the form submission with JavaScript instead.

    const form = document.getElementById('recommendation-form');
    const name = document.getElementById('name').value || "Anonymous"; // Default to "Anonymous" if name is empty
    const message = document.getElementById('recommendation').value;

    if (message.trim()) { // Check if the message is not empty or just whitespace
        console.log(`Name: ${name}, Message: ${message}`);
        alert(`Thank you for submitting a recommendation!`);

        // Append the new recommendation box
        const recBoxes = document.getElementById('recommendation-boxes');
        if (recBoxes) {
            recBoxes.appendChild(createRecommendationBox(message)); // Add the new recommendation box
            recBoxes.scrollTop = recBoxes.scrollHeight; // Scroll to the bottom
        } else {
            console.error("Element with id 'recommendation-boxes' not found.");
        }

        form.reset(); // Reset the form fields
    } else {
        alert('Please fill out the recommendation message.');
    }
}

// Smooth scroll to sections on navbar item click
function navItemClicked(event, targetId) {
        event.preventDefault(); // Prevent default anchor behavior

        console.log('Navbar item clicked:', targetId); // Log the clicked item
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            const navHeight = 100; // Get the height of the navbar
            const targetPosition = targetSection.getBoundingClientRect().top + window.scrollY - navHeight; // Calculate the position to scroll to
            window.scrollTo({ top: targetPosition, behavior: 'smooth' }); // Smoothly scroll to the adjusted position
        } else {
            console.error(`Section with id '${targetId}' not found.`);
        }
    };

