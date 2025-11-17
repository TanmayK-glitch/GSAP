import gsap from "gsap"
import { useRef, useEffectEvent, useEffect } from "react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger);

function ScrollScreen() {
    const scrollRef = useRef(null);
    const trackRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to(scrollRef.current, {
                // transform: "translateX(-1500%)",
              transform: "translateX(-200%)",
                duration: 2,
                ease: "none",
                scrollTrigger: {
                    trigger: trackRef.current,
                    scroller: "body",
                    start: "top 0%",
                    end: "top -100%",
                    scrub: 1,
                    pin: true
                }

            })
        })
        return () => ctx.revert();
    })
    return (
        <>
            <section className="overflow-x-hidden"
            ref={trackRef}>
             <div ref={scrollRef} className="flex">
  <h1 className="text-[40vw] font-semibold whitespace-nowrap">ExploreMore</h1>
</div>
            </section>
        </>
    )
}

export default ScrollScreen