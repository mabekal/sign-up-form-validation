// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.needs-validation');

    form.addEventListener('submit', function (event) {
        const password = document.getElementById('password');
        const confirmPassword = document.getElementById('confirmPassword');

        // Password match validation
        if (password.value !== confirmPassword.value) {
            confirmPassword.setCustomValidity('Passwords do not match');
        } else {
            confirmPassword.setCustomValidity('');
        }

        // If form is invalid, prevent submission
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        }

        // Add Bootstrap validation styling
        form.classList.add('was-validated');
    }, false);
});
