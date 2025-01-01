// Sample Data
let tasks = [
    { id: 1, name: 'Design Wireframes', assignees: 'John, Sarah', startDate: '2024-12-01', dueDate: '2024-12-05' },
    { id: 2, name: 'Develop Backend', assignees: 'Alice, Bob', startDate: '2024-12-06', dueDate: '2024-12-20' },
];

// Render Tasks
function renderTasks() {
    const tableBody = document.getElementById('ganttTableBody');
    tableBody.innerHTML = '';
    const today = new Date();
    tasks.forEach((task) => {
        const startDate = new Date(task.startDate);
        const dueDate = new Date(task.dueDate);
        const totalDuration = Math.ceil((dueDate - startDate) / (1000 * 60 * 60 * 24));
        const elapsedDays = Math.ceil((today - startDate) / (1000 * 60 * 60 * 24));
        const progress = Math.min((elapsedDays / totalDuration) * 100, 100);

        tableBody.innerHTML += `
            <tr>
                <td>${task.name}</td>
                <td>${task.assignees}</td>
                <td>${task.startDate}</td>
                <td>${task.dueDate}</td>
                <td>
                    <div class="timeline-bar" style="width: ${progress}%;"></div>
                </td>
            </tr>
        `;
    });
}

// Modal Functions
function openAddTaskModal() {
    document.getElementById('addTaskModal').style.display = 'flex';
}

function closeAddTaskModal() {
    document.getElementById('addTaskModal').style.display = 'none';
}

// Add New Task
function addTask() {
    const name = document.getElementById('taskName').value;
    const assignees = document.getElementById('assignees').value;
    const startDate = document.getElementById('startDate').value;
    const dueDate = document.getElementById('dueDate').value;

    if (name && assignees && startDate && dueDate) {
        tasks.push({ id: tasks.length + 1, name, assignees, startDate, dueDate });
        renderTasks();
        closeAddTaskModal();
    } else {
        alert('Please fill in all fields.');
    }
}

// Initialize Page
document.addEventListener('DOMContentLoaded', renderTasks);
