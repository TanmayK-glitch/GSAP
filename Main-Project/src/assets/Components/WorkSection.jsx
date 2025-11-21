import React from "react";

const Divider = () => (
    <div className="px-18">
        <hr className="border-t border-white/40" />
    </div>
);

function WorkSection() {
    return (
        <>
            <section>
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