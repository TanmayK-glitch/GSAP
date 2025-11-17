// Register the plugin
gsap.registerPlugin(ScrollTrigger);

// gsap.from(".page2 .box2", {
//     opacity: 0,
//     duration: 1,
//     scale: 0,
//     delay: 0.2,
//     rotate: 360,
//     scrollTrigger:{
//         trigger:".page2 .box2",
//         scroller:"body",
//         start:"top 65%",
//         end: "bottom 10%",
//         scrub: 2,
//     }
// });

// gsap.from(".page2 .box2", {
//     opacity: 0,
//     duration: 1,
//     scale: 0,
//     delay: 0.2,
//     rotate: 360,
//     scrollTrigger: {
//         trigger: ".page2 .box2",
//         scroller: "body"
//     }
// });

// gsap.from(".page3 .box3", {
//     opacity: 0,
//     duration: 1,
//     scale: 0,
//     delay: 0.2,
//     rotate: 360,
//     scrollTrigger: {
//         trigger: ".page3 .box3",
//         scroller: "body",
//     }
// });

gsap.to(".page2 h2",{
    transform: "translateX(-100%)",
    duration: 2,

    scrollTrigger:{
        scroller: "body",
        trigger: ".page2",
        markers: true,
        start: "top 0%",
        end: "top -100%",
        scrub: 1,
        pin: true,
    }
})