// Store tasks
const tasks = [];

// Function to render tasks in the table
function renderTasks() {
    const tableBody = document.getElementById('taskTableBody');
    tableBody.innerHTML = '';

    tasks.forEach((task) => {
        const progressStyle = `width: ${task.progress}%;`;
        tableBody.innerHTML += `
            <tr>
                <td>${task.title}</td>
                <td>${task.assignees}</td>
                <td>${task.startDate}</td>
                <td>${task.dueDate}</td>
                <td>$${task.budget}</td>
                <td>${task.estimatedTime} hrs</td>
                <td>${task.loggedTime} hrs</td>
                <td>
                    <div class="progress-bar">
                        <div style="${progressStyle}">${task.progress}%</div>
                    </div>
                </td>
                <td>${task.labels}</td>
            </tr>
        `;
    });
}

// Open add task modal
function openAddTaskModal() {
    document.getElementById('addTaskModal').style.display = 'flex';
}

// Close add task modal
function closeAddTaskModal() {
    document.getElementById('addTaskModal').style.display = 'none';
}

// Add task
function addTask() {
    const title = document.getElementById('title').value;
    const assignees = document.getElementById('assignees').value;
    const startDate = document.getElementById('startDate').value;
    const dueDate = document.getElementById('dueDate').value;
    const budget = document.getElementById('budget').value;
    const estimatedTime = document.getElementById('estimatedTime').value;
    const loggedTime = document.getElementById('loggedTime').value;
    const progress = document.getElementById('progress').value;
    const labels = document.getElementById('labels').value;

    if (title && assignees && startDate && dueDate && budget && estimatedTime && loggedTime && progress) {
        tasks.push({
            title,
            assignees,
            startDate,
            dueDate,
            budget,
            estimatedTime,
            loggedTime,
            progress,
            labels
        });
        renderTasks();
        closeAddTaskModal();
    } else {
        alert('Please fill out all fields.');
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', renderTasks);
