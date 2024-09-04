// Wait for the DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Select the element with the class 'SuggestionSearch-input_section'
    const inputSection = document.querySelector('.SuggestionSearch-input_section');
    // Select the element with the class 'SuggestionSearch-noInput'
    const suggestionSearchNoInput = document.querySelector('.SuggestionSearch-noInput');

    // Check if the elements exist
    if (inputSection && suggestionSearchNoInput) {
        // Add event listener for 'click' event on the input section
        inputSection.addEventListener('click', function () {
            // Add the 'active' class to the SuggestionSearch-noInput element
            suggestionSearchNoInput.classList.add('active');
            // Optionally, remove the 'hidden' class if needed
            suggestionSearchNoInput.classList.remove('hidden');
        });
    } else {
        console.warn('Required elements not found.');
    }
});

// Wait for the DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Select the input section element
    const inputSection = document.querySelector('.SuggestionSearch-input_section');
    // Select the progress bar container
    const progressBar = document.getElementById('progress-bar');
    // Select the brand list element
    const brandList = document.querySelector('.SuggestionSearch-brands');

    // Check if elements exist
    if (inputSection && progressBar && brandList) {
        // Add event listener for 'click' event on the input section
        inputSection.addEventListener('click', function () {
            // Show the progress bar
            progressBar.classList.remove('hidden');

            // Set a delay (e.g., 3 seconds) before showing the brand list
            setTimeout(function () {
                // Hide the progress bar
                progressBar.classList.add('hidden');
                // Show the brand list
                brandList.classList.add('active');
            }, 3000); // Delay in milliseconds (3000ms = 3 seconds)
        });
    } else {
        console.warn('Required elements not found.');
    }
});