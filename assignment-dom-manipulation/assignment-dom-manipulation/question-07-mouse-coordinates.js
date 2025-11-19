const trackingBox = document.getElementById('trackingBox');
const clientXDisplay = document.getElementById('clientX');
const clientYDisplay = document.getElementById('clientY');
const clearBtn = document.getElementById('clearBtn');

trackingBox.addEventListener('mousemove', (e) => {
    const rect = trackingBox.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    clientXDisplay.textContent = Math.round(x);
    clientYDisplay.textContent = Math.round(y);
});

trackingBox.addEventListener('dblclick', (e) => {
    const rect = trackingBox.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const dot = document.createElement('div');
    dot.className = 'dot';
    dot.style.left = x + 'px';
    dot.style.top = y + 'px';

    trackingBox.appendChild(dot);
});

clearBtn.addEventListener('click', () => {
    const dots = trackingBox.querySelectorAll('.dot');
    dots.forEach(dot => dot.remove());
});
