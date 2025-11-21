import React from "react"

function HomePage() {
    return (
        <>
            <section>
                <div id="mainText" className="mt-10 p-4">
                    <h1 className="font-clash font-semibold text-[17rem] leading-[85%]">Crafted, <br /> Beautifully</h1>
                    <div id="downArrow" className="absolute bottom-10 left-1/2 -translate-x-1/2 w-fit">
                        <i className="ri-arrow-down-line text-2xl"></i>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomePage