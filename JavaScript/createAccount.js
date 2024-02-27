document.addEventListener("DOMContentLoaded", function() {
    const signupForm = document.getElementById("createAccountForm");
    signupForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission
		
		// Required Fields
        const username = document.getElementById("inputUsername").value;
        const password = document.getElementById("inputPassword").value;
        const email = document.getElementById("inputEmail").value;
		
		// Optional Fields
		const street = document.getElementById("inputStreet").value;
        const city = document.getElementById("inputCity").value;
        const state = document.getElementById("inputState").value;
		const zip = document.getElementById("inputZIP").value;
		const phone = document.getElementById("inputPhone").value;

        if (!username || !password || !email) {
            alert("Please fill out all required fields.");
            return;
        }
		
		// All or none for optional fields
		if (street || city || state || zip) {
			if (!(street && city && state && zip)) {
				alert("Please fill out all address fields.")
				return;
			}
		}

        // Additional validation logic (e.g., format validation)

        // If everything is valid, submit the form
        alert("Form submitted successfully!");
    });
});