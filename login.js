document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email && password) {
        // Simulate login success
        alert("Login successful!");
        window.location.href = "dashboard.html";
    } else {
        alert("Please enter valid credentials.");
    }
});
