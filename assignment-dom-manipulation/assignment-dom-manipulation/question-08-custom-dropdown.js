const dropdownBtn = document.getElementById('dropdownBtn');
const dropdownMenu = document.getElementById('dropdownMenu');
const dropdownItems = document.querySelectorAll('.dropdown-item');
const selectedValue = document.getElementById('selectedValue');

dropdownBtn.addEventListener('click', () => {
    dropdownMenu.classList.toggle('show');
});

dropdownItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const value = item.getAttribute('data-value');
        dropdownBtn.textContent = value;
        selectedValue.textContent = value;
        dropdownMenu.classList.remove('show');
    });
});

document.addEventListener('click', (e) => {
    if (!e.target.closest('.dropdown')) {
        dropdownMenu.classList.remove('show');
    }
}, true);
