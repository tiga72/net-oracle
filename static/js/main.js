# static/js/main.js
$(document).ready(function() {
    // Add any additional JavaScript functionality here
    
    // Optional: Smooth scroll for navigation links
    $('a[href^="#"]').on('click', function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });
});