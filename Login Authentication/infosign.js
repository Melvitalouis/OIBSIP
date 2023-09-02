document.addEventListener("DOMContentLoaded", function () {
    const loginFormContainer = document.getElementById("loginFormContainer");
    const registerFormContainer = document.getElementById("registerFormContainer");
    const securePage = document.getElementById("securePage");
    const logoutButton = document.getElementById("logoutButton");

    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");
    const loginMessage = document.getElementById("loginMessage");
    const registerMessage = document.getElementById("registerMessage");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const loginUsername = document.getElementById("loginUsername").value;
        const loginPassword = document.getElementById("loginPassword").value;

        // Simulate a successful login for demonstration purposes
        if (loginUsername === "user" && loginPassword === "password") {
            loginFormContainer.style.display = "none";
            registerFormContainer.style.display = "none";
            securePage.style.display = "block";
            loginMessage.textContent = "";
            registerMessage.textContent = "";
        } else {
            loginMessage.textContent = "Invalid username or password";
        }
    });

    registerForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const registerUsername = document.getElementById("registerUsername").value;
        const registerPassword = document.getElementById("registerPassword").value;

        // Simulate a successful registration for demonstration purposes
        // Here, you would typically send the registration data to a server
        registerMessage.textContent = "Registration successful!";
    });

    logoutButton.addEventListener("click", function () {
        loginFormContainer.style.display = "block";
        registerFormContainer.style.display = "block";
        securePage.style.display = "none";
    });
});
