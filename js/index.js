document.getElementById("login").addEventListener("click", function (e) {
    e.preventDefault()
    // find email
    const emailField = document.getElementById("emailField");
    const email = emailField.value;
    // find password
    const passwordField = document.getElementById("passwordField");
    const password = passwordField.value;

    if (email === "mishkat@me.com" && password === "mishkat@me.com") {
        location.href = "https://mishkat433.github.io/deposite-withdraw/calculate.html"
    }
    else {
        alert("email or password mismatch")
    }
})