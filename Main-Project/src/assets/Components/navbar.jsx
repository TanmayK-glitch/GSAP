import React from "react";

function Navbar() {
    return (
        <>
            <nav className="flex items-center justify-between p-6">
                <div id="Logo" className="flex">
                    <h1 className="font-bold text-6xl">Orbit</h1>
                    <i class="ri-menu-3-fill"></i>
                </div>
                <div id="full-nav">
                    <h5>About</h5>
                    <h5>Projects</h5>
                    <h5>Capabilities</h5>
                    <h5>Let's Talk</h5>
                </div>
            </nav>
        </>
    )
}

export default Navbar;