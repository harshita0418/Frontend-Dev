const API_URL = 'http://localhost:3003/tasks';

$(document).ready(function() {
    loadTasks('all');

    $('#priorityFilter').on('change', function() {
        const filter = $(this).val();
        loadTasks(filter);
    });
});

function loadTasks(filter) {
    let url = API_URL;

    if (filter === 'low') {
        url += '?priority=low';
    } else if (filter === 'medium') {
        url += '?priority=medium';
    } else if (filter === 'high') {
        url += '?priority=high';
    } else if (filter === 'completed') {
        url += '?completed=true';
    }

    $.ajax({
        url: url,
        method: 'GET',
        dataType: 'json',
        success: function(tasks) {
            renderTasks(tasks);
        },
        error: function() {
            $('#tasksList').html('<tr><td colspan="5" style="text-align: center; color: #e74c3c;">Error loading tasks</td></tr>');
        }
    });
}

function renderTasks(tasks) {
    const tbody = $('#tasksList');
    tbody.empty();

    if (tasks.length === 0) {
        tbody.html('<tr><td colspan="5" style="text-align: center; padding: 2rem; color: #999;">No tasks found</td></tr>');
        return;
    }

    tasks.forEach(task => {
        const priorityClass = `priority-${task.priority}`;
        const statusClass = task.completed ? 'status-completed' : 'status-pending';
        const statusText = task.completed ? 'Completed' : 'Pending';
        const isChecked = task.completed ? 'checked' : '';

        const row = $(`
            <tr>
                <td>#${task.id}</td>
                <td>${task.title}</td>
                <td><span class="${priorityClass}">${task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}</span></td>
                <td><span class="status-badge ${statusClass}">${statusText}</span></td>
                <td>
                    <div class="checkbox-container">
                        <input type="checkbox" ${isChecked} onchange="toggleTaskCompletion(${task.id}, this)">
                    </div>
                </td>
            </tr>
        `);

        tbody.append(row);
    });
}

function toggleTaskCompletion(taskId, checkbox) {
    const completed = checkbox.checked;

    $.ajax({
        url: `${API_URL}/${taskId}`,
        method: 'PATCH',
        dataType: 'json',
        data: JSON.stringify({ completed: completed }),
        contentType: 'application/json',
        success: function() {
            loadTasks($('#priorityFilter').val());
        },
        error: function() {
            checkbox.checked = !checkbox.checked;
            alert('Failed to update task');
        }
    });
}
