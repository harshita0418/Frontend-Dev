const API_BASE = 'http://localhost:3005';

document.addEventListener('DOMContentLoaded', function() {
    loadTimetable('Monday');

    document.getElementById('daySelect').addEventListener('change', function() {
        loadTimetable(this.value);
    });
});

function loadTimetable(day) {
    const loadingIndicator = document.getElementById('loadingIndicator');
    const timetableContent = document.getElementById('timetableContent');

    loadingIndicator.style.display = 'flex';
    timetableContent.classList.add('hidden');

    fetch(`${API_BASE}/timetable?day=${day}`)
        .then(response => {
            if (!response.ok) throw new Error('Network response was not ok');
            return response.json();
        })
        .then(data => {
            loadingIndicator.style.display = 'none';
            timetableContent.classList.remove('hidden');

            if (!data || data.length === 0) {
                timetableContent.innerHTML = '<div class="no-classes">📭 No classes today.</div>';
                return;
            }

            let html = '';
            data.forEach(classItem => {
                html += `
                    <div class="class-item">
                        <div class="class-time">⏰ ${classItem.time}</div>
                        <div class="class-subject">📖 ${classItem.subject}</div>
                        <div class="class-faculty">👨‍🏫 Faculty: ${classItem.faculty}</div>
                    </div>
                `;
            });

            timetableContent.innerHTML = html;
        })
        .catch(error => {
            console.error('Error:', error);
            loadingIndicator.style.display = 'none';
            timetableContent.classList.remove('hidden');
            timetableContent.innerHTML = '<div class="no-classes">❌ Error loading timetable</div>';
        });
}
