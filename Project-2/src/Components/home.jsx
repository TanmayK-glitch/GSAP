import DemoImage from "../assets/Demo.jpeg";

function Home() {
    return (
        <main id="mainBox" className="flex items-center mt-5 px-15 py-5">
            <div id="mainText" className="flex-1">
                <h1 className=" text-9xl font-semibold">Navigating the digital landscape for success</h1>
                <p className=" text-[17px] mt-2">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. A nihil ea numquam aperiam sunt quo assumenda laboriosam ut natus est repellat in, veritatis iste! Maiores ducimus quos incidunt laudantium velit.
                    Magnam molestias nisi aperiam veniam, a distinctio recusandae, doloremque blanditiis consequatur magni sunt nostrum fuga, odio at dolorum numquam illum laborum voluptas accusamus quia sed? Quasi atque nemo quaerat eius!
                </p>
                <button className="px-9 py-3 border rounded-2xl bg-black text-white mt-4">Book a consultation</button>
            </div>
            <div id="imgDiv" className="flex-1 flex justify-end items-center pr-3">
                <img className="w-full max-w-2xl object-contain scale-115" src={DemoImage} alt="Marketing demo" />
            </div>
        </main>
    );
}

export default Home;