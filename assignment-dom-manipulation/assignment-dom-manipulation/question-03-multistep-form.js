let currentStep = 1;
const totalSteps = 3;

const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

const nextBtn = document.getElementById('nextBtn');
const backBtn = document.getElementById('backBtn');
const progress = document.getElementById('progress');

function validateStep(step) {
    let isValid = true;

    if (step === 1) {
        if (nameInput.value.trim() === '') {
            nameError.textContent = 'Name is required';
            isValid = false;
        } else {
            nameError.textContent = '';
        }
    }

    if (step === 2) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
            emailError.textContent = 'Please enter a valid email';
            isValid = false;
        } else {
            emailError.textContent = '';
        }
    }

    if (step === 3) {
        if (passwordInput.value.length < 6) {
            passwordError.textContent = 'Password must be at least 6 characters';
            isValid = false;
        } else {
            passwordError.textContent = '';
        }
    }

    return isValid;
}

function showStep(step) {
    document.querySelectorAll('.step').forEach(el => {
        el.classList.remove('active');
    });

    document.getElementById('step' + step).classList.add('active');

    progress.style.width = (step / totalSteps) * 100 + '%';

    backBtn.style.display = step === 1 ? 'none' : 'block';
    nextBtn.textContent = step === totalSteps ? 'Submit' : 'Next';
}

nextBtn.addEventListener('click', () => {
    if (!validateStep(currentStep)) {
        return;
    }

    if (currentStep === totalSteps) {
        showSummary();
        return;
    }

    currentStep++;
    showStep(currentStep);
});

backBtn.addEventListener('click', () => {
    if (currentStep > 1) {
        currentStep--;
        showStep(currentStep);
    }
});

function showSummary() {
    const summaryContent = document.getElementById('summaryContent');
    summaryContent.innerHTML = `
        <p><strong>Name:</strong> ${nameInput.value}</p>
        <p><strong>Email:</strong> ${emailInput.value}</p>
        <p><strong>Password:</strong> ${'*'.repeat(passwordInput.value.length)}</p>
        <p style="margin-top: 20px; color: #28a745; font-weight: 600;">✓ Form Completed Successfully!</p>
    `;

    document.getElementById('summary').style.display = 'block';
    document.getElementById('step3').style.display = 'none';
    nextBtn.style.display = 'none';
}

showStep(1);
