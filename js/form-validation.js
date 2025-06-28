// Form Validation
document.addEventListener('DOMContentLoaded', function() {
    // Registration Form Validation
    const regForm = document.getElementById('registration-form');
    if (regForm) {
        regForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('reg-name').value.trim();
            const email = document.getElementById('reg-email').value.trim();
            const phone = document.getElementById('reg-phone').value.trim();
            const password = document.getElementById('reg-password').value;
            const confirm = document.getElementById('reg-confirm').value;
            const terms = document.getElementById('terms').checked;
            
            // Simple validation
            if (!name || !email || !phone || !password || !confirm) {
                alert('Please fill in all required fields');
                return;
            }
            
            if (!validateEmail(email)) {
                alert('Please enter a valid email address');
                return;
            }
            
            if (!validatePhone(phone)) {
                alert('Please enter a valid phone number');
                return;
            }
            
            if (password !== confirm) {
                alert('Passwords do not match');
                return;
            }
            
            if (password.length < 8) {
                alert('Password must be at least 8 characters long');
                return;
            }
            
            if (!terms) {
                alert('You must agree to the terms and conditions');
                return;
            }
            
            // If all validations pass
            alert('Registration successful! We will contact you soon.');
            regForm.reset();
        });
    }
    
    // Contact Form Validation
    const inquiryForm = document.getElementById('inquiry-form');
    if (inquiryForm) {
        inquiryForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const message = document.getElementById('message').value.trim();
            
            if (!name || !email || !phone || !message) {
                alert('Please fill in all required fields');
                return;
            }
            
            if (!validateEmail(email)) {
                alert('Please enter a valid email address');
                return;
            }
            
            if (!validatePhone(phone)) {
                alert('Please enter a valid phone number');
                return;
            }
            
            // If all validations pass
            alert('Thank you for your inquiry! We will get back to you soon.');
            inquiryForm.reset();
        });
    }
    
    // Visit Form Validation
    const visitForm = document.getElementById('visit-form');
    if (visitForm) {
        visitForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const date = document.getElementById('visit-date').value.trim();
            const time = document.getElementById('visit-time').value;
            
            if (!date || !time) {
                alert('Please select both date and time for your visit');
                return;
            }
            
            // If all validations pass
            alert(`Visit scheduled for ${date} at ${time}. We look forward to seeing you!`);
            visitForm.reset();
        });
    }
    
    // Helper functions
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    function validatePhone(phone) {
        const re = /^[0-9]{10}$/;
        return re.test(phone);
    }
});