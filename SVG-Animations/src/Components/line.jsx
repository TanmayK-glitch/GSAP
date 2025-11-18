import React from "react";
import gsap from "gsap";
import { useRef } from "react";

function Line() {

    const finalPath = "M 10 100 Q 250 100 490 100";
    const hoverPath = "M 10 100 Q 250 40 490 100";
    const stringRef = useRef(null);
    
    const handleMouseEnter = () => {
        if (!stringRef.current) return;

        gsap.to(stringRef.current, {
            attr: { d: hoverPath },
            duration: 0.3,
            ease: "power3.out",
        });
    };

    const handleMouseLeave = () => {
        if (!stringRef.current) return;

        gsap.to(stringRef.current, {
            attr: { d: finalPath },
            duration: 0.6,
            ease: "elastic.out(1, 0.3)",
        });
    };

    return (
        <>
            <div
                id="string"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <svg width={500} height={200}>
                    <path
                        ref={stringRef}
                        d={finalPath}
                        stroke="white"
                        fill="transparent"
                    />
                </svg>
            </div>
        </>
    );
}

export default Line