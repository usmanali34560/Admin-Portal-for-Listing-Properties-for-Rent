function logout() {
    alert("You have been logged out.");
    window.location.href = "index.html";
}
document.addEventListener("DOMContentLoaded", function () {
    const logoutButton = document.getElementById("logoutButton");

    if (logoutButton) {
        logoutButton.addEventListener("click", logout);
    }
});

function logout() {
    // Optionally clear any session data
    // sessionStorage.clear();
    // localStorage.clear();

    alert("You have been logged out.");
    window.location.href = "index.html";
}
