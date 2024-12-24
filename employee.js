// Simulated Employee Data (Mocked for demonstration)
const employeeData = {
    username: "employee1",
    password: "employee123",
    name: "John Doe",
    email: "john.doe@example.com",
    role: "Software Engineer",
    tasks: [
        { id: 1, name: "Complete coding task", status: "Completed" },
        { id: 2, name: "Fix bug in login", status: "In Progress" },
        { id: 3, name: "Attend team meeting", status: "Completed" },
        { id: 4, name: "Write unit tests", status: "Pending" },
    ]
};

// Employee login function
function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === employeeData.username && password === employeeData.password) {
        // Hide login form and show profile container
        document.getElementById("login-container").style.display = "none";
        document.getElementById("profile-container").style.display = "block";
        
        // Populate profile data
        document.getElementById("employee-name").textContent = employeeData.name;
        document.getElementById("employee-email").textContent = employeeData.email;
        document.getElementById("employee-role").textContent = employeeData.role;
        
        // Load tasks and update progress
        loadTasks();
    } else {
        alert("Invalid username or password!");
    }
}

// Load tasks and update progress
function loadTasks() {
    const tasksCompleted = employeeData.tasks.filter(task => task.status === "Completed").length;
    const totalTasks = employeeData.tasks.length;
    
    // Update task completion info
    document.getElementById("tasks-completed").textContent = tasksCompleted;
    
    // Calculate progress
    const progress = (tasksCompleted / totalTasks) * 100;
    updateProgressBar(progress);
}

// Update the progress bar and percentage
function updateProgressBar(progress) {
    const progressBar = document.getElementById("progress-bar");
    const progressPercent = document.getElementById("progress-percent");
    
    progressBar.style.width = progress + "%";
    progressPercent.textContent = Math.round(progress) + "%";
}

// Logout function
function logout() {
    document.getElementById("profile-container").style.display = "none";
    document.getElementById("login-container").style.display = "block";
    
    // Clear input fields
    document.getElementById("username").value = '';
    document.getElementById("password").value = '';
}
