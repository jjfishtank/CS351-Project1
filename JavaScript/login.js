document.addEventListener("DOMContentLoaded", function() {
    const signupForm = document.getElementById("loginForm");
    signupForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission

        // Required Fields
        const username = document.getElementById("inputUsername").value;
        const password = document.getElementById("inputPassword").value;

        if (!username || !password) {
            alert("Please fill out all required fields.");
            return;
        }

        // Additional validation logic (e.g., format validation)

        // If everything is valid, submit the form
        alert("Form submitted successfully!");
    });
});