var cursor = document.querySelector("#cursor");
var main = document.querySelector("#main");
var Box = document.querySelector("#box");

// Track mouse movement on the entire document
document.addEventListener("mousemove", function(event){
    // Center the cursor on the mouse position (cursor is 20px, so offset by half = 10px)
    gsap.to(cursor, {
        x: event.x - 10,
        y: event.y - 10,
        duration: 0.1,
        ease: "power2.out"
    });
});

// When mouse enters the box, scale up the cursor
Box.addEventListener("mouseenter", function(){
    console.log("Mouse Entered");
    cursor.innerHTML = "View More"
    gsap.to(cursor, {
        scale: 3,
        duration: 0.3,
        ease: "power2.out"
    });
});

// When mouse leaves the box, scale back to normal
Box.addEventListener("mouseleave", function(){
    cursor.innerHTML = ""
    gsap.to(cursor, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
    });
})