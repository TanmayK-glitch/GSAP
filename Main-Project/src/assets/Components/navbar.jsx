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
                    <button className="px-7 py-3 border rounded-4xl bg-[#efe6d2] text-black">Let's Talk</button>
                </div>
            </nav>
        </>
    )
}

export default Navbar;