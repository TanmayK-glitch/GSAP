import { useEffect } from "react"
import gsap from "gsap"

function HomePage() {

    useEffect(() => {
        console.log("GSAP is Running!!")
        gsap.from(".page1 .box1", {
            x: -200,
            scale: 0,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
        })
    }, [])
    return (
        <>
            <div className="wrapper">
                <div className="page1">
                    <div className="box1"></div>
                </div>

                <div className="page2">
                    <div className="box2"></div>
                </div>

                <div className="page3">
                    <div className="box3"></div>
                </div>
            </div>
        </>
    )
}

export default HomePage;