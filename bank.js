document.getElementById('login-submit').addEventListener('click', function () {
    const emailField = document.getElementById('user-mail');
    const userMail = emailField.value;
    //get password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    if (userMail == 'istiak@gmail.com' && userPassword == 'inshaallah') {
        window.location.href = 'banking.html';
    }

})



