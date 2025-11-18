var hamburgerMenu = document.querySelector(".ri-menu-3-line");
var closeMenu = document.querySelector(".ri-close-line");

var tl = gsap.timeline();

tl.to("#fullNav", {
    right: 0,
    duration: 0.5,
});

tl.from("#fullNav h5", {
    opacity: 0,
    x: 150,
    stagger: 0.3,
    ease: "power2.out"
});

tl.from("#fullNav i", {
    opacity: 0,
    ease: "power2.out"
});

tl.pause();

hamburgerMenu.addEventListener("click", function () {
    tl.play();
});

closeMenu.addEventListener("click", function() {
   tl.reverse();
})



