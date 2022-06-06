let controller;
let slideScene;
let pageScene;

gsap.config({
    nullTargetWarn: false,
});

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

function navToggle(e) {
    gsap.to(".line1", 0.5, { rotate: "45", y: 5, background: "black" });
    gsap.to(".line2", 0.5, { rotate: "-45", y: -5, background: "black" });
    gsap.to(".line3", 0.5, { rotate: "90", y: -15, background: "black" });
    gsap.to(".line4", 0.4, { rotate: "180", y: -24, background: "black"});
    gsap.to(".nav-bar", 1, { clipPath: "circle(2500px at 100% -10%)" });
}

// function navToggle(e) {
//     if(!e.toggle.classList.contains("active")) {
//         e.target.classList.add("active");
//         gsap.to(".line1", 0.5, { rotate: "45", y: 5, background: "black" });
//         gsap.to(".line2", 0.5, { rotate: "-45", y: -5, background: "black" });
//         gsap.to("#logo", 1, { color: "#46494b" });
//         gsap.to(".nav-bar", 1, { clipPath: "circle(2500px at 100% -10%)" });
//         document.body.classList.add("hide");
//     } else {
//         e.target.classList.remove("active");
//         gsap.to(".line1", 0.5, { rotate: "0", y: 0, background: "white" });
//         gsap.to(".line2", 0.5, { rotate: "0", y: 0, background: "white" });
//         gsap.to("#logo", 1, { color: "white" });
//         gsap.to(".nav-bar", 1, { clipPath: "circle(50px at 100% -10%)" });
//         document.body.classList.remove("hide");
//     }

//     // Barba page transitions
//     const logo = document.querySelector("#logo");
//     barba.init({
//         views: [
//             {
//                 namespace: 'home',
//                 beforeEnter() {
//                     animateSlides();
//                     logo.href = "./index.html";
//                 },
//                 beforeLeave() {
//                     slideScene.destroy();
//                     pageScene.destroy();
//                     controller.destroy();
//                 }
//             },
//             {
//                 namespace: 'second',
//                 beforeEnter() {
//                     logo.href = "../index.html";
//                 }
//             }
//         ],
//         transitions: [
//             {
//                 leave({current, next}){
//                     let done = this.async();
//                     // Animation
//                     const tl = gsap.timeline({ defaults: { ease: 'power2.inOut' } });
//                     tl.fromTo(current.container, 1, { opacity: 1 }, { opacity: 0 });
//                     tl.fromTo(
//                         ".swipe",
//                         0.75,
//                         { x: "-100%" },
//                         { x: "0%", onComplete: done },
//                         "-=0.5"
//                     );
//                 },
//                 enter({current,next}){
//                     let done = this.async();
//                     // Scroll to top
//                     window.scrollTo(0, 0);
//                     // Animation
//                     const tl = gsap.timeline({ defaults: { ease: 'power2.inOut'} });
//                     tl.fromTo(
//                         "swipe",
//                         1,
//                         { x: "0%" },
//                         { x: "100%", stagger: 0.25, onComplete: done }
//                     );
//                     tl.fromTo(next.container, 1, { opacity: 0 }, { opacity: 1 });
//                     tl.fromTo(
//                         ".nav-header",
//                         1,
//                         { y: "-100%" },
//                         { y: "0%", ease: 'power2.inOut' },
//                         "-=1.5"
//                     )
//                 }
//             }
//         ]
//     })
// }

// Event Listeners
burger.addEventListener("click", navToggle);
window.addEventListener("mousemove", cursor);
window.addEventListener("mouseover", activeCursor);

