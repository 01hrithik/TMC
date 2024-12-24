// Example task data
let tasks = [
    { id: 1, name: "Complete Project Report", progress: 70 },
    { id: 2, name: "Design Website", progress: 40 },
    { id: 3, name: "Code Backend API", progress: 90 },
    { id: 4, name: "Test Product Features", progress: 50 },
];

// Function to load tasks and calculate overall progress
function loadTasks() {
    const taskList = document.getElementById("task-list");
    taskList.innerHTML = ""; // Clear current task list

    let totalProgress = 0;

    tasks.forEach(task => {
        const taskItem = document.createElement("li");
        taskItem.innerHTML = `${task.name} - <strong>${task.progress}%</strong>`;
        taskList.appendChild(taskItem);

        totalProgress += task.progress; // Add task progress to total progress
    });

    // Calculate average progress of tasks
    const averageProgress = totalProgress / tasks.length;
    updateProgressBar(averageProgress);
}

// Function to update the progress bar and percentage
function updateProgressBar(percentage) {
    const progressBar = document.getElementById("progress-bar");
    const progressPercentage = document.getElementById("progress-percentage");

    progressBar.style.width = `${percentage}%`; // Update the width of the progress bar
    progressPercentage.textContent = `${Math.round(percentage)}%`; // Display the percentage
}

// Function to add a new task
function addTask() {
    const taskName = prompt("Enter the task name:");
    const taskProgress = parseInt(prompt("Enter the task progress (0-100):"), 10);

    if (taskName && !isNaN(taskProgress) && taskProgress >= 0 && taskProgress <= 100) {
        const newTask = {
            id: tasks.length + 1,
            name: taskName,
            progress: taskProgress
        };

        tasks.push(newTask);
        loadTasks();
    } else {
        alert("Please enter valid task details.");
    }
}

// Initialize task list
loadTasks();
