import Amazon from "../assets/Amazon.png"
import Netflix from "../assets/Netflix.png"
import Dribble from "../assets/Dribble.png"
import Hubspot from "../assets/Hubspot.png"
import Paypal from "../assets/Paypal.png"
import Zoom from "../assets/Zoom.png"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"

gsap.registerPlugin(ScrollTrigger);

const logos = [
    { src: Amazon, alt: "Amazon" },
    { src: Netflix, alt: "Netflix" },
    { src: Dribble, alt: "Dribbble" },
    { src: Hubspot, alt: "HubSpot" },
    { src: Paypal, alt: "PayPal" },
    { src: Zoom, alt: "Zoom" },
]

function Brands() {
    const rowRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            const logos = gsap.utils.toArray(rowRef.current?.children ?? [])

            gsap.from(logos, {
                y: 25,
                opacity: 0,
                duration: 0.9,
                ease: "power3.out",
                stagger: 0.1,
                scrollTrigger: {
                    trigger: logos,
                    start: "top 80%",
                    // markers: true,
                }
            })
        }, rowRef)

        return () => ctx.revert()
    }, [])

    return (
        <section className="brands-row mt-28" ref={rowRef}>
            {logos.map((logo) => (
                <img
                    key={logo.alt}
                    src={logo.src}
                    alt={`${logo.alt} logo`}
                    className="brand-logo"
                />
            ))}
        </section>
    )
}

export default Brands