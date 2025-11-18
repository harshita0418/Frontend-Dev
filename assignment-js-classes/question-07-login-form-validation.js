const usernameRegex = /^.{5,}$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

const form = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

const usernameError = document.getElementById('usernameError');
const passwordError = document.getElementById('passwordError');
const successMessage = document.getElementById('successMessage');

usernameInput.addEventListener('blur', () => {
    if (usernameRegex.test(usernameInput.value)) {
        usernameInput.classList.remove('invalid');
        usernameInput.classList.add('valid');
        usernameError.textContent = '';
    } else {
        usernameInput.classList.remove('valid');
        usernameInput.classList.add('invalid');
        usernameError.textContent = 'Username must be at least 5 characters';
    }
});

passwordInput.addEventListener('blur', () => {
    if (passwordRegex.test(passwordInput.value)) {
        passwordInput.classList.remove('invalid');
        passwordInput.classList.add('valid');
        passwordError.textContent = '';
    } else {
        passwordInput.classList.remove('valid');
        passwordInput.classList.add('invalid');
        passwordError.textContent = 'Password must have 8+ chars, 1 uppercase, 1 number, 1 special character';
    }
});

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const isUsernameValid = usernameRegex.test(usernameInput.value);
    const isPasswordValid = passwordRegex.test(passwordInput.value);

    if (!isUsernameValid) {
        usernameInput.classList.add('invalid');
        usernameError.textContent = 'Username must be at least 5 characters';
    }

    if (!isPasswordValid) {
        passwordInput.classList.add('invalid');
        passwordError.textContent = 'Password must have 8+ chars, 1 uppercase, 1 number, 1 special character';
    }

    if (isUsernameValid && isPasswordValid) {
        successMessage.textContent = `✓ Login Successful! Welcome ${usernameInput.value}`;
        successMessage.classList.add('show');
        form.reset();
        usernameInput.classList.remove('valid');
        passwordInput.classList.remove('valid');
        setTimeout(() => successMessage.classList.remove('show'), 3000);
    }
});
