import { useEffect, useRef } from "react";
import gsap from "gsap";

function Navbar() {
    const navRef = useRef(null);
    const navItemsRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(navRef.current, {
                y: -40,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
            });

            gsap.from(navItemsRef.current, {
                opacity: 0,
                y: -20,
                stagger: 0.095,
                delay: 0.4,
                duration: 0.6,
                ease: "power2.out",
            });
        }, navRef);

        return () => ctx.revert();
    }, []);

    return (
        <>
            <nav ref={navRef} className="flex justify-between px-15 py-5">
                <div id="Logo" className="flex justify-center items-center">
                    <i className="ri-bard-fill text-5xl"></i>
                    <h1 className="text-5xl font-semibold">WizardX</h1>
                </div>
                <div id="nav-cont" className="flex justify-center items-center gap-12">
                    <h4 ref={(el) => (navItemsRef.current[0] = el)}>About Us</h4>
                    <h4 ref={(el) => (navItemsRef.current[1] = el)}>Services</h4>
                    <h4 ref={(el) => (navItemsRef.current[2] = el)}>Use Cases</h4>
                    <h4 ref={(el) => (navItemsRef.current[3] = el)}>Pricing</h4>
                    <h4 ref={(el) => (navItemsRef.current[4] = el)}>Blog</h4>
                    <button
                        ref={(el) => (navItemsRef.current[5] = el)}
                        className="px-9 py-3 border rounded-2xl bg-transparent"
                    >
                        Request a Quote
                    </button>
                </div>
            </nav>
        </>
    );
}

export default Navbar;