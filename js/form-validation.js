// Improved Form Validation
document.addEventListener('DOMContentLoaded', function() {
    // Utility: show error message near the field
    function showError(input, message) {
        let error = input.parentElement.querySelector('.error-message');
        if (!error) {
            error = document.createElement('span');
            error.className = 'error-message';
            error.style.color = 'red';
            error.style.fontSize = '0.9em';
            input.parentElement.appendChild(error);
        }
        error.textContent = message;
    }

    function clearErrors(form) {
        form.querySelectorAll('.error-message').forEach(e => e.remove());
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function validatePhone(phone) {
        // Accepts 10 digits, allows spaces, dashes, or parentheses
        const re = /^(\+?\d{1,3}[- ]?)?\d{10}$/;
        return re.test(phone.replace(/[\s()-]/g, ''));
    }

    // Registration Form Validation
    const regForm = document.getElementById('registration-form');
    if (regForm) {
        regForm.addEventListener('submit', function(e) {
            e.preventDefault();
            clearErrors(regForm);

            let valid = true;

            const name = regForm.querySelector('#reg-name');
            const email = regForm.querySelector('#reg-email');
            const phone = regForm.querySelector('#reg-phone');
            const password = regForm.querySelector('#reg-password');
            const confirm = regForm.querySelector('#reg-confirm');
            const terms = regForm.querySelector('#terms');

            if (!name.value.trim()) {
                showError(name, 'Name is required');
                valid = false;
            }
            if (!email.value.trim()) {
                showError(email, 'Email is required');
                valid = false;
            } else if (!validateEmail(email.value.trim())) {
                showError(email, 'Invalid email address');
                valid = false;
            }
            if (!phone.value.trim()) {
                showError(phone, 'Phone number is required');
                valid = false;
            } else if (!validatePhone(phone.value.trim())) {
                showError(phone, 'Invalid phone number');
                valid = false;
            }
            if (!password.value) {
                showError(password, 'Password is required');
                valid = false;
            } else if (password.value.length < 8) {
                showError(password, 'Password must be at least 8 characters');
                valid = false;
            }
            if (!confirm.value) {
                showError(confirm, 'Please confirm your password');
                valid = false;
            } else if (password.value !== confirm.value) {
                showError(confirm, 'Passwords do not match');
                valid = false;
            }
            if (!terms.checked) {
                showError(terms, 'You must agree to the terms');
                valid = false;
            }

            if (valid) {
                alert('Registration successful! We will contact you soon.');
                regForm.reset();
            }
        });
    }

    // Contact Form Validation
    const inquiryForm = document.getElementById('inquiry-form');
    if (inquiryForm) {
        inquiryForm.addEventListener('submit', function(e) {
            e.preventDefault();
            clearErrors(inquiryForm);

            let valid = true;

            const name = inquiryForm.querySelector('#name');
            const email = inquiryForm.querySelector('#email');
            const phone = inquiryForm.querySelector('#phone');
            const message = inquiryForm.querySelector('#message');

            if (!name.value.trim()) {
                showError(name, 'Name is required');
                valid = false;
            }
            if (!email.value.trim()) {
                showError(email, 'Email is required');
                valid = false;
            } else if (!validateEmail(email.value.trim())) {
                showError(email, 'Invalid email address');
                valid = false;
            }
            if (!phone.value.trim()) {
                showError(phone, 'Phone number is required');
                valid = false;
            } else if (!validatePhone(phone.value.trim())) {
                showError(phone, 'Invalid phone number');
                valid = false;
            }
            if (!message.value.trim()) {
                showError(message, 'Message is required');
                valid = false;
            }

            if (valid) {
                alert('Thank you for your inquiry! We will get back to you soon.');
                inquiryForm.reset();
            }
        });
    }

    // Visit Form Validation
    const visitForm = document.getElementById('visit-form');
    if (visitForm) {
        visitForm.addEventListener('submit', function(e) {
            e.preventDefault();
            clearErrors(visitForm);

            let valid = true;

            const date = visitForm.querySelector('#visit-date');
            const time = visitForm.querySelector('#visit-time');

            if (!date.value.trim()) {
                showError(date, 'Date is required');
                valid = false;
            }
            if (!time.value) {
                showError(time, 'Time is required');
                valid = false;
            }

            if (valid) {
                alert(`Visit scheduled for ${date.value} at ${time.value}. We look forward to seeing you!`);
                visitForm.reset();
            }
        });
    }
});
