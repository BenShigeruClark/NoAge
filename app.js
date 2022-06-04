
const mouse = document.querySelector(".cursor");
const mouseTxt = document.querySelector("span");
const burger = document.querySelector(".burger");

function cursor(e) {
    mouse.style.top = e.pageY + "px";
    mouse.style.left = e.pageX + "px";
}

function activeCursor(e) {
    const item = e.target;
    // console.log(item);
    if(item.id === "logo" || item.classList.contains("burger")) {
        mouse.classList.add("nav-active");
    } else {
        mouse.classList.remove("nav-active");
    }
}

window.addEventListener("mousemove", cursor);
window.addEventListener("mouseover", activeCursor);

