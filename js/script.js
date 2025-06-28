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
    const strengthMeter = document.querySelector('.strength-meter');
    const strengthText = document.querySelector('.strength-text');
    const requirements = document.querySelectorAll('.password-requirements li');
    
    let strength = 0;
    
    // Check length
    if (password.length >= 8) {
        strength += 1;
        requirements[0].classList.add('valid');
    } else {
        requirements[0].classList.remove('valid');
    }
    
    // Check for numbers
    if (password.match(/\d/)) {
        strength += 1;
        requirements[1].classList.add('valid');
    } else {
        requirements[1].classList.remove('valid');
    }
    
    // Check for special characters
    if (password.match(/[^A-Za-z0-9]/)) {
        strength += 1;
        requirements[2].classList.add('valid');
    } else {
        requirements[2].classList.remove('valid');
    }
    
    // Check for uppercase letters
    if (password.match(/[A-Z]/)) {
        strength += 1;
        requirements[3].classList.add('valid');
    } else {
        requirements[3].classList.remove('valid');
    }
    
    // Update strength meter
    const width = strength * 25;
    strengthMeter.style.width = `${width}%`;
    
    // Update strength text and color
    if (width <= 25) {
        strengthText.textContent = 'Password Strength: Weak';
        strengthMeter.style.background = 'red';
    } else if (width <= 50) {
        strengthText.textContent = 'Password Strength: Fair';
        strengthMeter.style.background = 'orange';
    } else if (width <= 75) {
        strengthText.textContent = 'Password Strength: Good';
        strengthMeter.style.background = 'yellow';
    } else {
        strengthText.textContent = 'Password Strength: Strong';
        strengthMeter.style.background = 'green';
    }
}