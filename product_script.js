document.addEventListener('DOMContentLoaded', function () {
    const secondLevelFilters = document.getElementById('second-level-filters');
    const availableOptions = document.getElementById('available-options');

    // Handle click on the delete buttons in the second level filters
    secondLevelFilters.addEventListener('click', function (e) {
        if (e.target.classList.contains('delete-btn')) {
            const tag = e.target.parentElement;
            // Move the tag to available options
            availableOptions.appendChild(tag);
            // Change the class to 'available-option'
            tag.classList.remove('second-level');
            tag.classList.add('available-option');
            // Replace the delete button with a tick button
            e.target.outerHTML = '<button class="tick">✔</button>';

            // Hide the products that match the filter category with animation
            if (tag.textContent.includes('冷凍/急凍食品')) {
                const freezeFoodProducts = document.querySelectorAll('.product-card.freeze-food');
                freezeFoodProducts.forEach(product => {
                    product.classList.add('hidden'); // Add 'hidden' class to hide with animation
                });
            }
        }
    });

    // Handle click on the tick buttons in available options
    availableOptions.addEventListener('click', function (e) {
        if (e.target.classList.contains('tick')) {
            const tag = e.target.parentElement;
            // Move the tag back to the second level filters
            secondLevelFilters.appendChild(tag);
            // Change the class to 'second-level'
            tag.classList.remove('available-option');
            tag.classList.add('second-level');
            // Replace the tick button with a delete button
            e.target.outerHTML = '<button class="delete-btn">×</button>';

            // Show the products that match the filter category with animation
            if (tag.textContent.includes('冷凍/急凍食品')) {
                const freezeFoodProducts = document.querySelectorAll('.product-card.freeze-food');
                freezeFoodProducts.forEach(product => {
                    product.classList.remove('hidden'); // Remove 'hidden' class to show with animation
                });
            }
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const quickCheckButtons = document.querySelectorAll('.quick-check');

    quickCheckButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Toggle the visibility of the expanded details
            const productCard = this.closest('.product-card');
            const expandedDetails = productCard.querySelector('.expanded-details');

            // Optionally, change the button text based on visibility
            if (expandedDetails.classList.contains('show')) {
                this.textContent = '隱藏詳情'; // Change to 'Hide Details'
            } else {
                this.textContent = '快速查看'; // Change to 'Quick View'
            }
        });
    });
});

// Handle the collapse toggle for product cards
document.addEventListener("DOMContentLoaded", function () {
    const quickCheckButtons = document.querySelectorAll(".quick-check");

    quickCheckButtons.forEach((button) => {
        button.addEventListener("click", function () {
            // Toggle the expanded class on the parent product card
            const productCard = this.closest(".product-card");
            productCard.classList.toggle("expanded");
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Directly query the filter tag containing "冷凍/急凍食品"
    const freezeFoodFilter = Array.from(document.querySelectorAll('.filter-tag.second-level'))
        .find(tag => tag.textContent.includes('冷凍/急凍食品'));

    // If the filter exists, add an event listener to the button inside it
    if (freezeFoodFilter) {
        const deleteButton = freezeFoodFilter.querySelector('.delete-btn');

        deleteButton.addEventListener('click', function () {
            // Query all products with the class 'freeze-food' and hide them
            console.log('clicked');
            const freezeFoodProducts = document.querySelectorAll('.product-card.freeze-food');
            freezeFoodProducts.forEach(product => {
                product.classList.add('hidden'); // Add 'hidden' class to hide
            });

            // Optionally, you can also change the filter appearance or behavior
            freezeFoodFilter.classList.add('disabled'); // Example to visually indicate the filter is active
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    // Select the product list and progress bar
    const productList = document.querySelector('.product-list');
    const progressBar = document.getElementById('progress-bar');

    // Check if elements exist
    if (productList && progressBar) {
        // Show the progress bar initially
        progressBar.classList.remove('hidden');
        // Hide the product list initially
        productList.classList.add('hidden');

        // Set a delay (e.g., 3 seconds) before showing the product list
        setTimeout(function () {
            // Hide the progress bar
            progressBar.classList.add('hidden');
            // Show the product list
            productList.classList.remove('hidden');
        }, 3000); // Delay in milliseconds (3000ms = 3 seconds)
    } else {
        console.warn('Required elements not found.');
    }
});
