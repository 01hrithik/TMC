// Admin login credentials (for simplicity, mock credentials)
const adminCredentials = {
    username: "admin",
    password: "admin123",
};

// Task data
const tasks = [
    { id: 1, name: "Complete project report", status: "Pending" },
    { id: 2, name: "Review team code", status: "In Progress" },
];

// Simulate login function
function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === adminCredentials.username && password === adminCredentials.password) {
        // Hide login form and show task container
        document.getElementById("login-container").style.display = "none";
        document.getElementById("task-container").style.display = "block";
        loadTasks();
    } else {
        alert("Invalid username or password!");
    }
}

// Load tasks to the page
function loadTasks() {
    const taskList = document.getElementById("task-list");
    taskList.innerHTML = ""; // Clear current task list

    tasks.forEach(task => {
        const taskItem = document.createElement("li");
        taskItem.innerHTML = `
            ${task.name} - <strong>${task.status}</strong>
            <span class="task-actions" onclick="editTask(${task.id})">Edit</span>
            <span class="task-actions" onclick="deleteTask(${task.id})">Delete</span>
        `;
        taskList.appendChild(taskItem);
    });
}

// Add new task
function addTask() {
    const taskName = prompt("Enter the task name:");
    if (taskName) {
        const newTask = {
            id: tasks.length + 1,
            name: taskName,
            status: "Pending",
        };
        tasks.push(newTask);
        loadTasks();
    }
}

// Edit task
function editTask(taskId) {
    const task = tasks.find(t => t.id === taskId);
    if (task) {
        const newTaskName = prompt("Edit task name:", task.name);
        if (newTaskName) {
            task.name = newTaskName;
            loadTasks();
        }
    }
}

// Delete task
function deleteTask(taskId) {
    const taskIndex = tasks.findIndex(t => t.id === taskId);
    if (taskIndex !== -1) {
        tasks.splice(taskIndex, 1);
        loadTasks();
    }
}
