const form = document.getElementById('registrationForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const successMessage = document.getElementById('successMessage');

function validateForm() {
    let isValid = true;

    if (nameInput.value.trim() === '') {
        nameError.textContent = 'Name is required';
        isValid = false;
    } else {
        nameError.textContent = '';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
        emailError.textContent = 'Email must be valid and contain @';
        isValid = false;
    } else {
        emailError.textContent = '';
    }

    if (passwordInput.value.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters';
        isValid = false;
    } else {
        passwordError.textContent = '';
    }

    return isValid;
}

nameInput.addEventListener('input', () => {
    if (nameInput.value.trim() !== '') {
        nameError.textContent = '';
    }
});

emailInput.addEventListener('input', () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(emailInput.value)) {
        emailError.textContent = '';
    }
});

passwordInput.addEventListener('input', () => {
    if (passwordInput.value.length >= 6) {
        passwordError.textContent = '';
    }
});

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (validateForm()) {
        successMessage.textContent = '✓ Form Submitted Successfully!';
        successMessage.classList.add('show');
        form.reset();
        setTimeout(() => {
            successMessage.classList.remove('show');
        }, 3000);
    }
});
