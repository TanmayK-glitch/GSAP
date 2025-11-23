function Footer() {
    return (
        <>
            <footer className="mt-40 px-10 mb-10">
                <hr className="mb-10 border-t border-white/40" /><div id="box" className="flex items-center justify-between">
                    <div id="text1">
                        <p className="font-medium text-xl">© 2025</p>
                    </div>
                    <div id="text2" className="flex items-center gap-25">
                        <h5 className="text-xl font-semibold cursor-pointer relative group">
                            Youtube
                            <span className="absolute bottom-0 left-0 w-0 h-px bg-[#efe6d2] transition-all duration-300 ease-out group-hover:w-full"></span>
                        </h5>
                        <h5 className="text-xl font-semibold cursor-pointer relative group">
                            Twitter
                            <span className="absolute bottom-0 left-0 w-0 h-px bg-[#efe6d2] transition-all duration-300 ease-out group-hover:w-full"></span>
                        </h5>
                        <h5 className="text-xl font-semibold cursor-pointer relative group">
                            Linkedin
                            <span className="absolute bottom-0 left-0 w-0 h-px bg-[#efe6d2] transition-all duration-300 ease-out group-hover:w-full"></span>
                        </h5>
                        <h5 className="text-xl font-semibold cursor-pointer relative group">
                            Instagram
                            <span className="absolute bottom-0 left-0 w-0 h-px bg-[#efe6d2] transition-all duration-300 ease-out group-hover:w-full"></span>
                        </h5>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer