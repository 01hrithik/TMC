// Admin Tasks Management
function addAdminTask() {
    const task = prompt("Enter a new admin task:");
    if (task) {
        const taskList = document.getElementById("admin-task-list");
        const newTask = document.createElement("li");
        newTask.textContent = task;
        newTask.onclick = () => completeTask(newTask);
        taskList.appendChild(newTask);
        updateProgress();
    }
}

// Employee Tasks Management
function addEmployeeTask() {
    const task = prompt("Enter a new employee task:");
    if (task) {
        const taskList = document.getElementById("employee-task-list");
        const newTask = document.createElement("li");
        newTask.textContent = task;
        newTask.onclick = () => completeTask(newTask);
        taskList.appendChild(newTask);
        updateProgress();
    }
}

// Mark task as complete
function completeTask(taskElement) {
    taskElement.style.textDecoration = "line-through";
    taskElement.style.color = "gray";
    updateProgress();
}

// Update Task Progress
function updateProgress() {
    const adminTasks = document.getElementById("admin-task-list").getElementsByTagName("li");
    const employeeTasks = document.getElementById("employee-task-list").getElementsByTagName("li");

    const totalTasks = adminTasks.length + employeeTasks.length;
    const completedTasks = Array.from(adminTasks).filter(task => task.style.textDecoration === "line-through").length +
                           Array.from(employeeTasks).filter(task => task.style.textDecoration === "line-through").length;

    const progressPercentage = totalTasks ? Math.round((completedTasks / totalTasks) * 100) : 0;

    document.getElementById("progress-fill").style.width = `${progressPercentage}%`;
    document.getElementById("progress-percentage").textContent = `${progressPercentage}% Completed`;
}
