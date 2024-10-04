document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Basic validation
    if (name && email && password && confirmPassword) {
        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        // Simulate a successful registration (for demonstration)
        alert('Registration successful! Redirecting to dashboard...');
        window.location.href = '/dashboard'; // Redirect to the user dashboard after registration
    } else {
        alert('Please fill in all fields.');
    }
});
