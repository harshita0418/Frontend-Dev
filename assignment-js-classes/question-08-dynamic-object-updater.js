let user = {
    name: "John",
    email: "john@mail.com",
    age: 21
};

const form = document.getElementById('userForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const ageInput = document.getElementById('age');
const userDisplay = document.getElementById('userDisplay');

function displayUserObject() {
    userDisplay.textContent = JSON.stringify(user, null, 2);
}

function loadUserToForm() {
    nameInput.value = user.name;
    emailInput.value = user.email;
    ageInput.value = user.age;
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    user.name = nameInput.value;
    user.email = emailInput.value;
    user.age = parseInt(ageInput.value);

    displayUserObject();
});

displayUserObject();
loadUserToForm();
