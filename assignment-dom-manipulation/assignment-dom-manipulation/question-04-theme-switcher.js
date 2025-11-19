const themeButtons = document.querySelectorAll('.theme-btn');
const body = document.body;
const currentThemeDisplay = document.getElementById('currentTheme');

const themeNames = {
    'light': 'Light',
    'dark': 'Dark',
    'blue': 'Blue'
};

const savedTheme = localStorage.getItem('theme') || 'light';
body.setAttribute('data-theme', savedTheme);
currentThemeDisplay.textContent = themeNames[savedTheme];

themeButtons.forEach(button => {
    button.addEventListener('click', () => {
        const theme = button.getAttribute('data-theme');
        body.setAttribute('data-theme', theme);
        currentThemeDisplay.textContent = themeNames[theme];
        localStorage.setItem('theme', theme);
    });
});
