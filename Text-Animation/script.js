document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(TextPlugin);

    function breakText() {
        const h1Element = document.querySelector("#h1Text");
        const text = h1Element.textContent.trim();
        var halfValue = text.length / 2;

        let clutter = "";

        text.split("").forEach((char, index) => {
            if(index < halfValue){
                clutter += `<span class="a">${char}</span>`;
            } else {
                clutter += `<span class="b">${char}</span>`;
            }
        });
        h1Element.innerHTML = clutter;
    }
    breakText();

    gsap.from("#h1Text .a", {
        y: 50,
        duration: 0.5, 
        opacity: 0,
        delay: 1,
        stagger: 0.1,
        ease: "power3.out"  
    });

    gsap.from("#h1Text .b", {
        y: 50, 
        duration: 0.5, 
        opacity: 0, 
        delay: 1,
        stagger: -0.1,
        ease: "power3.out"
    });
});




// Basic Effect
// gsap.to(h1Text, {
//     duration: 4,
//     text: "DAYUMMMMM"
// });

// Typewritter Effect
// Make sure your h1 is empty
// gsap.to(h1Text, {
//     duration: 2,
//     text: {
//        value: "Hello Niggas",
//         oldClass: "start",
//         newClass: "end"
//     }
// });

