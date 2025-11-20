import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import { useRef, useEffect } from "react"

gsap.registerPlugin(ScrollTrigger);

const services = [
    {
        id: "seo",
        title: "Search engine",
        highlight: "optimization",
        variant: "light",
    },
    {
        id: "ppc",
        title: "Pay per click",
        highlight: "advertising",
        variant: "dark",
    },
    {
        id: "smm",
        title: "Social media",
        highlight: "marketing",
        variant: "dark",
    },
    {
        id: "email",
        title: "E-mail",
        highlight: "marketing",
        variant: "light",
    },
]

function Page2() {
    const textRef = useRef(null);
    const boxRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(textRef.current, {
                x: -50,
                opacity: 0,
                duration: 0.5,
                delay: 0.5,
                scrollTrigger: {
                    start: "top 90%",
                    trigger: textRef.current,
                    markers: true,
                }
            })

            gsap.from(boxRef.current, {
                x: 50,
                opacity: 0,
                duration: 0.85,
                scrollTrigger: {
                    start: "top 90%",
                    trigger: boxRef.current,
                }
                
            })
        })

        return () => ctx.revert();

    }, []);

    return (
        <section className="services-section" id="services">
            <div className="services-header" ref={textRef}>
                <h2>Services</h2>
                <p>
                    Strategic growth campaigns built for modern brands. From search visibility
                    to lifecycle retention, we blend creative with performance to keep your funnel full.
                </p>
            </div>
            <div className="services-grid mt-28" ref={boxRef}>
                {services.map((service) => (
                    <article
                        key={service.id}
                        className={`service-card ${service.variant === "dark" ? "service-card--dark" : "service-card--light"}`}
                    >
                        <h3>
                            <span className="service-title-wrap">
                                {service.title}{" "}
                                <span className="service-title-mark">{service.highlight}</span>
                            </span>
                        </h3>
                        <p className="service-link">
                            <span className="service-link__icon">↗</span>
                            Learn more
                        </p>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default Page2