import React from "react";

function Navbar() {
    return (
        <>
            <nav className="flex items-center justify-between p-6">
                <div id="Logo" className="flex">
                    <h1 className="font-clash font-semibold text-6xl">Orbit</h1>
                    {/* <i class="ri-menu-3-fill"></i> */}
                </div>
                <div id="full-nav" className="flex gap-15 items-center font-semibold">
                    <h5 className="cursor-pointer">About</h5>
                    <h5 className="cursor-pointer">Projects</h5>
                    <h5 className="cursor-pointer">Capabilities</h5>
                    <button className="w-full md:w-auto group relative px-7 py-3 rounded-4xl bg-[#efe6d2] text-black text-lg font-semibold overflow-hidden transition-all hover:scale-[1.02]">
                        <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                        <span className="relative z-10 flex items-center justify-between gap-4">
                            Let's Talk
                            <span className="bg-black text-white rounded-full w-6 h-6 flex items-center justify-center text-xs group-hover:bg-[#efe6d2] group-hover:text-black transition-colors">
                                →
                            </span>
                        </span>
                    </button>
                </div>
            </nav>
        </>
    )
}

export default Navbar;