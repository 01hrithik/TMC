// Dummy data (Normally this would come from a database or API)
let adminTasks = [
    { name: "Create Task Management System", assignedTo: "Admin", status: "In Progress" },
    { name: "Approve Employee Requests", assignedTo: "Admin", status: "Completed" },
    { name: "Update System Documentation", assignedTo: "Admin", status: "Pending" }
];

let employeeTasks = [
    { name: "Design UI for Task Page", assignedTo: "John Doe", status: "Completed" },
    { name: "Implement Task API", assignedTo: "Jane Doe", status: "In Progress" },
    { name: "Write Unit Tests", assignedTo: "John Doe", status: "Pending" }
];

// Function to populate Admin Task List
function populateAdminTasks() {
    const adminTaskList = document.getElementById("admin-task-list");
    adminTaskList.innerHTML = ""; // Clear the list first

    adminTasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.classList.add("task-item");
        li.innerHTML = `
            <span>${task.name} - <strong>${task.status}</strong> (Assigned to: ${task.assignedTo})</span>
            <button onclick="editTask(${index}, 'admin')">Edit</button>
            <button onclick="deleteTask(${index}, 'admin')">Delete</button>
        `;
        adminTaskList.appendChild(li);
    });
}

// Function to populate Employee Task List
function populateEmployeeTasks() {
    const employeeTaskList = document.getElementById("employee-task-list");
    employeeTaskList.innerHTML = ""; // Clear the list first

    employeeTasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.classList.add("task-item");
        li.innerHTML = `
            <span>${task.name} - <strong>${task.status}</strong> (Assigned to: ${task.assignedTo})</span>
            <button onclick="editTask(${index}, 'employee')">Edit</button>
            <button onclick="deleteTask(${index}, 'employee')">Delete</button>
        `;
        employeeTaskList.appendChild(li);
    });
}

// Edit Task Function
function editTask(index, type) {
    const newName = prompt("Edit task name:");
    if (newName) {
        if (type === "admin") {
            adminTasks[index].name = newName;
        } else if (type === "employee") {
            employeeTasks[index].name = newName;
        }
        populateAdminTasks();
        populateEmployeeTasks();
    }
}

// Delete Task Function
function deleteTask(index, type) {
    if (type === "admin") {
        adminTasks.splice(index, 1);
    } else if (type === "employee") {
        employeeTasks.splice(index, 1);
    }
    populateAdminTasks();
    populateEmployeeTasks();
}

// Initialize task lists
populateAdminTasks();
populateEmployeeTasks();
