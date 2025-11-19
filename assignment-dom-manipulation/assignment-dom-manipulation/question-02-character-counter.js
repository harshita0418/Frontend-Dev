const textArea = document.getElementById('textArea');
const counter = document.getElementById('counter');
const charCount = document.getElementById('charCount');
const resetBtn = document.getElementById('resetBtn');

const MAX_CHARS = 100;
const WARNING_THRESHOLD = 20;

textArea.addEventListener('input', (e) => {
    const currentLength = e.target.value.length;
    const remaining = MAX_CHARS - currentLength;

    charCount.textContent = currentLength;
    counter.textContent = remaining;

    counter.classList.remove('warning', 'danger');

    if (remaining <= 0) {
        counter.classList.add('danger');
    } else if (remaining <= WARNING_THRESHOLD) {
        counter.classList.add('warning');
    }
});

textArea.addEventListener('keypress', (e) => {
    if (textArea.value.length >= MAX_CHARS) {
        e.preventDefault();
    }
});

resetBtn.addEventListener('click', () => {
    textArea.value = '';
    charCount.textContent = '0';
    counter.textContent = MAX_CHARS;
    counter.classList.remove('warning', 'danger');
});
