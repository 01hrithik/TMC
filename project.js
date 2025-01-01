// Sample Data
let projects = [
    { id: 1, name: 'Website Redesign', status: 'In Progress', manager: 'Alice', assignees: 'John, Sarah', startDate: '2024-12-01', endDate: '2024-12-31' },
    { id: 2, name: 'Mobile App Development', status: 'Not Started', manager: 'Bob', assignees: 'Mike, Anna', startDate: '2024-12-15', endDate: '2025-01-20' },
];

// Render Projects
function renderProjects() {
    const tableBody = document.getElementById('projectTableBody');
    tableBody.innerHTML = '';
    projects.forEach((project, index) => {
        tableBody.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${project.name}</td>
                <td>${project.status}</td>
                <td>${project.manager}</td>
                <td>${project.assignees}</td>
                <td>${project.startDate}</td>
                <td>${project.endDate}</td>
            </tr>
        `;
    });
}

// Modal Functions
function openAddProjectModal() {
    document.getElementById('addProjectModal').style.display = 'flex';
}

function closeAddProjectModal() {
    document.getElementById('addProjectModal').style.display = 'none';
}

// Add New Project
function addProject() {
    const name = document.getElementById('projectName').value;
    const status = document.getElementById('status').value;
    const manager = document.getElementById('manager').value;
    const assignees = document.getElementById('assignees').value;
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;

    if (name && status && manager && assignees && startDate && endDate) {
        projects.push({ id: projects.length + 1, name, status, manager, assignees, startDate, endDate });
        renderProjects();
        closeAddProjectModal();
    } else {
        alert('Please fill in all fields.');
    }
}

// Initialize Page
document.addEventListener('DOMContentLoaded', renderProjects);
