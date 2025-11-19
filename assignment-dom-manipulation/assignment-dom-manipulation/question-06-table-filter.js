const searchInput = document.getElementById('searchInput');
const tableBody = document.getElementById('tableBody');
const rows = tableBody.querySelectorAll('tr');
const noResults = document.getElementById('noResults');

searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    let visibleCount = 0;

    rows.forEach(row => {
        const text = row.textContent.toLowerCase();

        if (text.includes(searchTerm)) {
            row.classList.remove('hidden');
            visibleCount++;
        } else {
            row.classList.add('hidden');
        }
    });

    if (visibleCount === 0) {
        noResults.textContent = 'No results found';
        noResults.classList.add('show');
    } else {
        noResults.classList.remove('show');
    }
});
