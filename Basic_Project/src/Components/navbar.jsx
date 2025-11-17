import gsap from 'gsap'
import { useRef, useLayoutEffect } from 'react'

function Navbar() {
    const navRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            if (!navRef.current) return
            gsap.from(navRef.current, {
                y: -50,
                opacity: 0,
                duration: 1.2,
                delay: 0.2,
                ease: 'power3.out'
            });
        }, navRef);

        return () => ctx.revert();
    }, []);

    return (
        <>
            <nav ref={navRef} className="nav-wrapper flex gap-10 justify-around p-10">
                <div className="logo">
                    <h1 className="font-semibold text-5xl text-gray-900">Logo</h1>
                </div>
                <div className="nav-content flex flex-col">
                    <ul className="flex flex-row items-center gap-8">
                        <li className="text-gray-900">Home</li>
                        <li className="text-gray-900">Vacations</li>
                        <li className="text-gray-900">Blogs</li>
                        <li className="text-gray-900">About</li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar