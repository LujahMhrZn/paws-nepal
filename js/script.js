// Mobile Navigation
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        hamburger.innerHTML = navLinks.classList.contains('active') ? 
            '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });
    
    // FAQ Accordion
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            question.classList.toggle('active');
            const answer = question.nextElementSibling;
            answer.classList.toggle('active');
        });
    });
    
    // Initialize datepicker
    if (document.querySelector('.datepicker')) {
        $('.datepicker').datepicker({
            minDate: 1,
            dateFormat: 'yy-mm-dd'
        });
    }
});

// Password strength indicator
document.addEventListener('DOMContentLoaded', function() {
    const passwordInput = document.getElementById('reg-password');
    if (passwordInput) {
        passwordInput.addEventListener('input', checkPasswordStrength);
    }
});

function checkPasswordStrength() {
    const password = this.value;

    const requirements = document.querySelectorAll('.password-requirements li');
    
    // Check length
    if (password.length >= 8) {
        
        requirements[0].classList.add('valid');
    } else {
        requirements[0].classList.remove('valid');
    }
    
    // Check for numbers
    if (password.match(/\d/)) {
        
        requirements[1].classList.add('valid');
    } else {
        requirements[1].classList.remove('valid');
    }
    
    // Check for special characters
    if (password.match(/[^A-Za-z0-9]/)) {
        
        requirements[2].classList.add('valid');
    } else {
        requirements[2].classList.remove('valid');
    }
    
    // Check for uppercase letters
    if (password.match(/[A-Z]/)) {
        
        requirements[3].classList.add('valid');
    } else {
        requirements[3].classList.remove('valid');
    }
    
}