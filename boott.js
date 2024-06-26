document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('loginForm');
    const errorMessage = document.getElementById('error-message');

    // Predefined username and password
    const validUsername = 'sujith';
    const validPassword = 'sujith18';

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (isValidCredentials(username, password)) {
            alert('Login successful!');
            // Redirect to a new page or perform other actions upon successful login
            window.location.href = 'boot.html'; // Example redirect
        } else {
            errorMessage.textContent = 'Invalid username or password';
        }
    });

    function isValidCredentials(username, password) {
        // Check if the provided username and password match the predefined values
        return username === validUsername && password === validPassword;
    }
});

document.getElementById("but1").onclick=function(){
    window.location.href="boot.html"
}
// function boot(){

// // document.getElementsByName('username '&&'password')
// let username="sujith";
// let password="sujith18";
// if (username&&password) {
//     window.location.href="boot.html"
    
// }
// else
// {
//     alert("fill the username and password")
// }
// }