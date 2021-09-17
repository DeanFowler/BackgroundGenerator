var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector(".random");

function displayGradient() {
    css.textContent = body.style.background + ";";
}

function random(color1, color2) {
    var color1 = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
    var color2 = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
    gradient.style.background =
    "linear-gradient(to right, " + color1 + ", " + color2 + ")";
    displayGradient();
}

function setGradient() {
    body.style.background = 
    "linear-gradient(to right, "
    + color1.value 
    + ", " 
    + color2.value 
    +")";
    displayGradient();
}
window.onload=setGradient();

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", random);