import React, { useEffect } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function FadeSections() {

    useEffect(() => {
        gsap.utils.toArray('.fade-section').forEach((el) => {
            gsap.fromTo(el,
                { opacity: 0, x: -100 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.8,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 80%',
                        stagger: 0.3
                    }
                }
            );
        });
    }, []);

    return (
        <>
            <div className="min-h-screen space-y-8 px-6 py-12">
                <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <h1 className="text-4xl font-bold">Scroll Down</h1>
                </div>
                <div className="p-6 bg-white rounded-lg shadow fade-section">Section 1</div>
                <div className="p-6 bg-white rounded-lg shadow fade-section">Section 2</div>
                <div className="p-6 bg-white rounded-lg shadow fade-section">Section 3</div>
                <div style={{ height: '100vh' }}></div>
            </div>
        </>
    )
}

export default FadeSections