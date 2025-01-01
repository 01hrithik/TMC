window.onload = function () {
    // Check if the page is being refreshed
    if (performance.navigation.type === 1) {
      window.location.href = "home.html";
    }
  };
  

function validateForm(event) {
    event.preventDefault(); // Prevent form submission for validation

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Basic validation
    if (email === "" || password === "") {
        alert("Both fields are required.");
        return false;
    }

    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    
}

function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
}
