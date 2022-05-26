
const mouse = document.querySelector(".cursor");
const mouseTxt = document.querySelector("span");
const burger = document.querySelector(".burger");

function cursor(e) {
    mouse.style.top = e.pageY + "px";
    mouse.style.left = e.pageX + "px";
}

window.addEventListener("mousemove", cursor);

