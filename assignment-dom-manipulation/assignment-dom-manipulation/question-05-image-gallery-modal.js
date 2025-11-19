const galleryImages = document.querySelectorAll('.gallery-img');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modalImage');
const closeBtn = document.querySelector('.close');

galleryImages.forEach(img => {
    img.addEventListener('click', () => {
        modal.classList.add('show');
        modalImage.src = img.src;
    });
});

closeBtn.addEventListener('click', () => {
    modal.classList.remove('show');
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('show');
    }
});

document.querySelector('.modal-content').addEventListener('click', (e) => {
    e.stopPropagation();
});
