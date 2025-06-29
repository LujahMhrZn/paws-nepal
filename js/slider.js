// Homepage Slider
document.addEventListener('DOMContentLoaded', function() { //DOMContentLoaded: This event fires when the HTML document has completely loaded
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    
    function showSlide(n) {
        slides.forEach(slide => slide.classList.remove('active')); // Hides all slides before showing the new one
        currentSlide = (n + slides.length) % slides.length; //we have 3 slides (0,1,2) and n=3, then (3+3)%3 = 0 (wraps back to first slide)
        slides[currentSlide].classList.add('active');
    }
    
    // Auto slide change every 5 seconds
    setInterval(() => {
        showSlide(currentSlide + 1);
    }, 5000);
    
    // Initialize first slide
    showSlide(0); //shows first slide when page first loads
});