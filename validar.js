document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "Alejandra" && password === "1234") {
        window.location.href = "Alejandra Salas.html";
    } else {
        if (username === "Judith" && password=== "0000") {
            window.location.href = "Judith Quesada.html";
        } else {
            document.getElementById("message").textContent = "Contraseña incorrecta, Intentelo de nuevo.";
        }
    }
});

