import React, { useRef } from "react";
import gsap from "gsap";
import { useEffect } from "react";

const Divider = () => (
    <div className="px-18">
        <hr className="border-t border-white/40" />
    </div>
);

function WorkSection() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const cursor = document.querySelector("#cursor");
        const workItems = document.querySelectorAll("#work1, #work2, #work3, #work4, #work5");

        workItems.forEach((item) => {
            item.addEventListener("mouseenter", () => {
                cursor.innerHTML = "View More";
                gsap.to(cursor, {
                    scale: 3,
                    duration: 0.3,
                    ease: "power2.out"
                });
            });

            item.addEventListener("mouseleave", () => {
                cursor.innerHTML = "";
                gsap.to(cursor, {
                    scale: 1,
                    duration: 0.3,
                    ease: "power2.out"
                });
            });
        });

        return () => {
            workItems.forEach((item) => {
                item.removeEventListener("mouseenter", () => { });
                item.removeEventListener("mouseleave", () => { });
            });
        };
    }, []);

    return (
        <>
            <section className="cursor-pointer">
                <div id="mainCont" className="mt-72"><Divider />
                    <div id="work1" className="flex justify-between px-18 py-9 items-center">
                        <h4 className="font-bold text-[7rem]">ATLAS MOTORS</h4>
                        <p className="font-semibold text-md">2023</p>
                    </div><Divider />

                    <div id="work2" className="flex justify-between px-18 py-9 items-center">
                        <h4 className="font-bold text-[7rem]">ORBIT ELECTRIC</h4>
                        <p className="font-semibold text-md">2022</p>
                    </div><Divider />

                    <div id="work3" className="flex justify-between px-18 py-9 items-center">
                        <h4 className="font-bold text-[7rem]">UFL UNITED</h4>
                        <p className="font-semibold text-md">2024</p>
                    </div><Divider />

                    <div id="work4" className="flex justify-between px-18 py-9 items-center">
                        <h4 className="font-bold text-[7rem]">LUMEN</h4>
                        <p className="font-semibold text-md">2024</p>
                    </div><Divider />

                    <div id="work5" className="flex justify-between px-18 py-9 items-center">
                        <h4 className="font-bold text-[7rem]">ZENITH</h4>
                        <p className="font-semibold text-md">2024</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default WorkSection;