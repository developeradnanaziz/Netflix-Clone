// Add event listeners to the navigation links for page navigation
document.addEventListener('DOMContentLoaded', function() {
    // Select all navigation links
    const navLinks = document.querySelectorAll('nav a');

    // Loop through each link and add click event
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            // Prevent default anchor behavior
            event.preventDefault();
            // Redirect to the corresponding page
            window.location.href = this.getAttribute('href');
        });
    });
});
