const API_URL = 'http://localhost:3006/users';
let emailCheckTimeout;

document.getElementById('registrationForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const password = document.getElementById('password').value;

    clearErrors();

    if (!validateInputs(name, email, phone, password)) {
        return;
    }

    try {
        const response = await axios.post(API_URL, {
            name: name,
            email: email,
            phone: phone,
            password: password
        });

        showSuccess();
        document.getElementById('registrationForm').reset();
        
        setTimeout(() => {
            hideSuccess();
        }, 3000);
    } catch (error) {
        showError('email', 'Error creating account. Please try again.');
    }
});

document.getElementById('email').addEventListener('blur', function() {
    const email = this.value.trim();
    
    if (!email || !isValidEmail(email)) {
        return;
    }

    clearTimeout(emailCheckTimeout);
    showCheckingIndicator();

    emailCheckTimeout = setTimeout(() => {
        checkEmailDuplicate(email);
    }, 500);
});

async function checkEmailDuplicate(email) {
    try {
        const response = await axios.get(`${API_URL}?email=${email}`);
        hideCheckingIndicator();

        if (response.data.length > 0) {
            showError('email', 'Email already registered.');
            document.getElementById('email').classList.add('invalid');
        } else {
            document.getElementById('email').classList.add('valid');
            document.getElementById('emailError').classList.remove('show');
        }
    } catch (error) {
        hideCheckingIndicator();
        showError('email', 'Error checking email availability.');
    }
}

function validateInputs(name, email, phone, password) {
    let isValid = true;

    if (!name || name.length < 3) {
        showError('name', 'Name must be at least 3 characters.');
        isValid = false;
    }

    if (!email || !isValidEmail(email)) {
        showError('email', 'Please enter a valid email address.');
        isValid = false;
    }

    if (!phone || phone.length < 10) {
        showError('phone', 'Phone number must be at least 10 digits.');
        isValid = false;
    }

    if (!password || password.length < 8) {
        showError('password', 'Password must be at least 8 characters.');
        isValid = false;
    }

    return isValid;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showError(field, message) {
    const errorElement = document.getElementById(`${field}Error`);
    const inputElement = document.getElementById(field);
    
    errorElement.textContent = message;
    errorElement.classList.add('show');
    inputElement.classList.add('invalid');
}

function clearErrors() {
    ['name', 'email', 'phone', 'password'].forEach(field => {
        const errorElement = document.getElementById(`${field}Error`);
        const inputElement = document.getElementById(field);
        
        errorElement.classList.remove('show');
        inputElement.classList.remove('invalid', 'valid');
    });
}

function showCheckingIndicator() {
    document.getElementById('checkingIndicator').classList.add('active');
}

function hideCheckingIndicator() {
    document.getElementById('checkingIndicator').classList.remove('active');
}

function showSuccess() {
    document.getElementById('successMessage').classList.remove('hidden');
}

function hideSuccess() {
    document.getElementById('successMessage').classList.add('hidden');
}
