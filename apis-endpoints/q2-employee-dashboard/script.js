const API_URL = 'http://localhost:3002/employees';

document.addEventListener('DOMContentLoaded', function() {
    fetchEmployees();
});

function fetchEmployees() {
    const xhr = new XMLHttpRequest();
    
    xhr.open('GET', API_URL, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    
    xhr.onload = function() {
        if (xhr.status === 200) {
            const employees = JSON.parse(xhr.responseText);
            renderEmployees(employees);
        } else {
            showError('Failed to load employees');
        }
    };
    
    xhr.onerror = function() {
        showError('Network error occurred');
    };
    
    xhr.send();
}

function renderEmployees(employees) {
    const tbody = document.getElementById('employeesList');
    tbody.innerHTML = '';
    
    employees.forEach(emp => {
        const row = document.createElement('tr');
        const statusClass = emp.status === 'active' ? 'status-active' : 'status-inactive';
        const statusText = emp.status === 'active' ? 'Active' : 'Inactive';
        const isChecked = emp.status === 'active' ? 'checked' : '';
        
        row.innerHTML = `
            <td>#${emp.id}</td>
            <td>${emp.name}</td>
            <td>${emp.department}</td>
            <td>${emp.email}</td>
            <td><span class="status-badge ${statusClass}">${statusText}</span></td>
            <td>
                <label class="toggle-switch">
                    <input type="checkbox" ${isChecked} onchange="toggleEmployeeStatus(${emp.id}, this)">
                    <span class="slider"></span>
                </label>
            </td>
        `;
        
        tbody.appendChild(row);
    });
}

function toggleEmployeeStatus(empId, checkbox) {
    const newStatus = checkbox.checked ? 'active' : 'inactive';
    const xhr = new XMLHttpRequest();
    
    const data = JSON.stringify({ status: newStatus });
    
    xhr.open('PATCH', `${API_URL}/${empId}`, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    
    xhr.onload = function() {
        if (xhr.status === 200) {
            hideError();
        } else {
            checkbox.checked = !checkbox.checked;
            showError('Failed to update status');
        }
    };
    
    xhr.onerror = function() {
        checkbox.checked = !checkbox.checked;
        showError('Network error occurred');
    };
    
    xhr.send(data);
}

function showError(message) {
    const errorDiv = document.getElementById('errorMessage');
    errorDiv.innerHTML = `
        <span>${message}</span>
        <button class="close-btn" onclick="hideError()">×</button>
    `;
    errorDiv.classList.remove('hidden');
}

function hideError() {
    document.getElementById('errorMessage').classList.add('hidden');
}
