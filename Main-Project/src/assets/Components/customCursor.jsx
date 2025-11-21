import { useEffect, useRef } from "react";
import gsap from "gsap";

function CustomCursor() {
    const cursorRef = useRef(null);

    useEffect(() => {
        const moveMouseHandle = (e) => {
            gsap.to(cursorRef.current, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.4,
                ease: "power2.out",

            });
        };

        window.addEventListener("mousemove", moveMouseHandle);

        return () => {
            window.removeEventListener("mousemove", moveMouseHandle);
        };
    }, []);

    return (
        <>
            <div
                ref={cursorRef}
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "15px",
                    height: "15px",
                    borderRadius: "50%",
                    backgroundColor: "#efe6d2",
                    pointerEvents: "none",
                    zIndex: 9999,
                    transform: "translate(-50%, -50%)",
                    mixBlendMode: "difference",
                }}
            />

        </>
    )
}

export default CustomCursor;