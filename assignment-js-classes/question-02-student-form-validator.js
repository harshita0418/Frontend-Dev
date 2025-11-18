const nameRegex = /^[a-zA-Z\s]+$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^\d{10}$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])/;

const form = document.getElementById('studentForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const passwordInput = document.getElementById('password');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const phoneError = document.getElementById('phoneError');
const passwordError = document.getElementById('passwordError');
const successMessage = document.getElementById('successMessage');

function validateField(input, regex, errorElement, errorMsg) {
    if (regex.test(input.value)) {
        input.classList.remove('invalid');
        input.classList.add('valid');
        errorElement.textContent = '';
        return true;
    } else {
        input.classList.remove('valid');
        input.classList.add('invalid');
        errorElement.textContent = errorMsg;
        return false;
    }
}

nameInput.addEventListener('blur', () => {
    validateField(nameInput, nameRegex, nameError, 'Name should contain only alphabets');
});

emailInput.addEventListener('blur', () => {
    validateField(emailInput, emailRegex, emailError, 'Please enter a valid email');
});

phoneInput.addEventListener('blur', () => {
    validateField(phoneInput, phoneRegex, phoneError, 'Phone must be exactly 10 digits');
});

passwordInput.addEventListener('blur', () => {
    validateField(passwordInput, passwordRegex, passwordError, 'Password must contain 1 uppercase, 1 number, and 1 special character');
});

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const isNameValid = validateField(nameInput, nameRegex, nameError, 'Name should contain only alphabets');
    const isEmailValid = validateField(emailInput, emailRegex, emailError, 'Please enter a valid email');
    const isPhoneValid = validateField(phoneInput, phoneRegex, phoneError, 'Phone must be exactly 10 digits');
    const isPasswordValid = validateField(passwordInput, passwordRegex, passwordError, 'Password must contain 1 uppercase, 1 number, and 1 special character');

    if (isNameValid && isEmailValid && isPhoneValid && isPasswordValid) {
        successMessage.textContent = `✓ Registration Successful! Welcome ${nameInput.value}`;
        successMessage.classList.add('show');
        form.reset();
        setTimeout(() => successMessage.classList.remove('show'), 3000);
    }
});
