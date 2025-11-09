// Basic JavaScript for the website
document.addEventListener('DOMContentLoaded', function() {
    console.log('Trustless Systems website loaded');
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Add any interactive elements here
});
