function Navbar() {
    return (
        <>
            <nav className="flex justify-between px-15 py-5">
                <div id="Logo" className="flex justify-center items-center">
                    <i className="ri-bard-fill text-3xl"></i>
                    <h1 className="text-3xl">WizardX</h1>
                </div>
                <div id="nav-cont" className="flex justify-center items-center gap-12">
                    <h4>About Us</h4>
                    <h4>Services</h4>
                    <h4>Use Cases</h4>
                    <h4>Pricing</h4>
                    <h4>Blog</h4>
                    <button className="px-9 py-3 border rounded-2xl bg-transparent">Request a Quote</button>
                </div>
            </nav>
        </>
    )
}

export default Navbar;