import DemoImage from "../assets/Demo.jpeg";
import gsap from "gsap";
import { useRef, useEffect } from "react";

function Home() {
    const textRef = useRef([]);
    const imgRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(textRef.current, {
                y: 50,
                opacity: 0,
                duration: 1.2,
                ease: "power3.out",
                stagger: 0.15
            });

            gsap.from(imgRef.current, {
                x: 100,
                opacity: 0,
                duration: 1.2,
                ease: "power3.out",
            })
        });

        return () => ctx.revert();

    }, []);

    return (
        <main id="mainBox" className="flex items-center mt-5 px-15 py-5">
            <div id="mainText" className="flex-1">
                <h1 ref={(el) => (textRef.current[0] = el)} className=" text-9xl font-semibold">Navigating the digital landscape for success</h1>
                <p className=" text-[17px] mt-2" ref={(el) => (textRef.current[1] = el)}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. A nihil ea numquam aperiam sunt quo assumenda laboriosam ut natus est repellat in, veritatis iste! Maiores ducimus quos incidunt laudantium velit.
                    Magnam molestias nisi aperiam veniam, a distinctio recusandae, doloremque blanditiis consequatur magni sunt nostrum fuga, odio at dolorum numquam illum laborum voluptas accusamus quia sed? Quasi atque nemo quaerat eius!
                </p>
                <button ref={(el) => (textRef.current[2] = el)} className="px-9 py-3 border rounded-2xl bg-black text-white mt-4">Book a consultation</button>
            </div>
            <div id="imgDiv" className="flex-1 flex justify-end items-center pr-3" ref={imgRef}>
                <img className="w-full max-w-2xl object-contain scale-115" src={DemoImage} alt="Marketing demo" />
            </div>
        </main>
    );
}

export default Home;