var div = document.getElementById("div");

div.addEventListener("click", function () {
    alert("Hola! Soy el div.");
});

function saludar(event) {
    alert("Hola!");
    event.stopPropagation();
}
