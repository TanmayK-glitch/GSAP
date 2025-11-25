import { useEffect, useRef } from "react";
import gsap from 'gsap'

function Cursor() {

    const moveMouseHandle = (event) => {
        console.log("Mouse Moved!");
        gsap.to("#cursor", {
            x: event.clientX,
            y: event.clientY,
            ease: "power3.out",
            duration: -1

        })
    }
    return (
        <>
            <div id="mainBox" onMouseMove={moveMouseHandle} className="bg-red-500">
                <div id="cursor" className="h-[15px] w-[15px] bg-white rounded-[50%]"></div>
            </div>
        </>
    )
}

export default Cursor