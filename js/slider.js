// Homepage Slider
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    
    function showSlide(n) {
        slides.forEach(slide => slide.classList.remove('active'));
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
    }
    
    // Auto slide change every 5 seconds
    setInterval(() => {
        showSlide(currentSlide + 1);
    }, 5000);
    
    // Initialize first slide
    showSlide(0);
});