document.getElementById('myForm').addEventListener('submit', function(event) {

    var password = document.getElementById('password');
    var confirmPassword = document.getElementById('confirmPassword');

    if (password.value !== confirmPassword.value) {
        alert('Passwords do not match. Please try again.');

        password.classList.add('error');
        confirmPassword.classList.add('error');

        event.preventDefault();
    }
});