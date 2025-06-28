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
    
    // Testimonial Slider
    const testimonials = document.querySelectorAll('.testimonial');
    let currentTestimonial = 0;
    
    function showTestimonial(n) {
        testimonials.forEach(testimonial => testimonial.classList.remove('active'));
        currentTestimonial = (n + testimonials.length) % testimonials.length;
        testimonials[currentTestimonial].classList.add('active');
        
        // Update dots
        const dots = document.querySelectorAll('.slider-dot');
        dots.forEach(dot => dot.classList.remove('active'));
        dots[currentTestimonial].classList.add('active');
    }
    
    // Create dots if testimonial slider exists
    if (testimonials.length > 0) {
        const sliderControls = document.createElement('div');
        sliderControls.className = 'slider-controls';
        
        for (let i = 0; i < testimonials.length; i++) {
            const dot = document.createElement('div');
            dot.className = 'slider-dot';
            if (i === 0) dot.classList.add('active');
            dot.addEventListener('click', () => showTestimonial(i));
            sliderControls.appendChild(dot);
        }
        
        document.querySelector('.testimonial-slider').appendChild(sliderControls);
    }
    
    // Auto testimonial change every 7 seconds
    setInterval(() => {
        showTestimonial(currentTestimonial + 1);
    }, 7000);
    
    // Initialize first testimonial
    if (testimonials.length > 0) showTestimonial(0);
});