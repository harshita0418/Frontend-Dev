const nameRegex = /^[a-zA-Z\s]+$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const form = document.getElementById('bookingForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const seatsInput = document.getElementById('seats');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const seatsError = document.getElementById('seatsError');

const ticketDetails = document.getElementById('ticketDetails');

function validateBooking() {
    let isValid = true;

    if (!nameRegex.test(nameInput.value)) {
        nameError.textContent = 'Name should contain only alphabets';
        nameInput.classList.add('invalid');
        isValid = false;
    } else {
        nameError.textContent = '';
        nameInput.classList.remove('invalid');
        nameInput.classList.add('valid');
    }

    if (!emailRegex.test(emailInput.value)) {
        emailError.textContent = 'Please enter a valid email';
        emailInput.classList.add('invalid');
        isValid = false;
    } else {
        emailError.textContent = '';
        emailInput.classList.remove('invalid');
        emailInput.classList.add('valid');
    }

    const seats = parseInt(seatsInput.value);
    if (seats < 1 || seats > 10 || isNaN(seats)) {
        seatsError.textContent = 'Seats must be between 1 and 10';
        seatsInput.classList.add('invalid');
        isValid = false;
    } else {
        seatsError.textContent = '';
        seatsInput.classList.remove('invalid');
        seatsInput.classList.add('valid');
    }

    return isValid;
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (validateBooking()) {
        const bookingInfo = {
            name: nameInput.value,
            email: emailInput.value,
            seats: parseInt(seatsInput.value)
        };

        ticketDetails.innerHTML = `
            <h3>✓ Booking Confirmed!</h3>
            <p><strong>Name:</strong> ${bookingInfo.name}</p>
            <p><strong>Email:</strong> ${bookingInfo.email}</p>
            <p><strong>Seats:</strong> ${bookingInfo.seats}</p>
            <p><strong>Total Price:</strong> ${bookingInfo.seats * 150}</p>
            <p style="margin-top: 15px; font-size: 12px; color: #666;">Confirmation has been sent to your email</p>
        `;
        ticketDetails.classList.add('show');
        form.reset();
        nameInput.classList.remove('valid');
        emailInput.classList.remove('valid');
        seatsInput.classList.remove('valid');
    }
});
