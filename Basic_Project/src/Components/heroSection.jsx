import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"

function HeroSection() {
    const heroRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            if(!heroRef.current) return

        const items = gsap.utils.toArray('.hero-stagger');
            gsap.from(items, {
                y: 50,
                opacity: 0,
                duration: 1,
                delay: 0.5, 
                ease: 'power3.out',
                stagger: 0.2
            });
        }, heroRef)

        return () => ctx.revert();
    }, [])
    return (
        <section 
        ref={heroRef}
         className="min-h-screen flex flex-col items-center justify-center text-center px-10">
            <h1 className="font-bold text-7xl text-gray-900 hero-stagger">Discover Your Next Adventure</h1>
            <p className="font-normal text-2xl mt-2 mb-10 text-stone-800 hero-stagger">
                Explore breathtaking destinations, plan unforgettable trips, and find the best travel experiences tailored just for you. Your journey starts with a single click — where will you go next?
            </p>
            <div className="flex flex-wrap justify-center gap-4">
                <button className="py-4 px-12 rounded-full cursor-pointer text-gray-900 bg-white hero-stagger">Start Exploring</button>
                <button className="py-4 px-12 rounded-full cursor-pointer text-gray-900 bg-white hero-stagger">Browse Destinations</button>
            </div>
        </section>
    )
}

export default HeroSection