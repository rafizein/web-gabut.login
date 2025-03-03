document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission

        const email = form.querySelector("input[type='text']").value;
        const password = form.querySelector("input[type='password']").value;

        // Updated login logic
        if (email === "rafizein90@gmail.com" && password === "Payrz2025") {
            window.location.href = "https://rafizein.github.io/web-gabut/";
        } else {
            alert("Login failed! Please check your email and password.");
        }
    });
});
