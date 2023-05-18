import arrow from "../../../assets/arrow-right.svg";
import {Heading} from "../share/Heading.jsx";



export const Projects = () => {

    return (<>
        <div className={"mt-20"}></div>
        <Heading text={"This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated."}
                 subtitle={"Our project"}
                 title={"Revolutionary way to build the web"}
                 position={"center"} />
        <div className="flex flex-wrap justify-around items-center p-10 pt-0 mx-auto ">
            <div className="bg-white py-6 sm:py-8 lg:py-12">
                <p className="mb-2 font-semibold text-main md:mb-3 lg:text-lg capitalise">Our project</p>
                <h2 className="mb-4 text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Revolutionary way to build the
                    web</h2>
                <p className="w-96 text-gray-500 md:text-lg">This is a section
                    of some simple filler text, also known as placeholder
                    text. It shares some characteristics of a real written
                    text but is random or otherwise generated.</p>
            </div>
            <div className="h-96 w-96 flex items-center relative ">
                <div className="absolute items-center -left-14 w-64 h-72 rounded-xl shadow drop-shadow bg-white">
                    <img className="" src="./img/image3.png" id="m3" alt="" />
                </div>
                <div className="absolute w-72 h-80 rounded-xl shadow drop-shadow bg-white">
                    <img className="" src="./img/image2.png" id="m2" alt="" />
                </div>
                <div className="absolute left-14 w-80 h-96 rounded-xl shadow drop-shadow bg-white">
                    <img className="" src="./img/image1.png" id="m1" alt="" />
                </div>
                <div className="-right-10 absolute bg-white flex items-center p-4 justify-center shadow drop-shadow rounded-full">
                    <button className="" onClick="changeSlide()">
                        <img src={arrow} alt="" className={"w-16"} />
                    </button>
                </div>
            </div>
        </div>
        <div className="bg-white py-6 sm:py-8 lg:py-12">
            <div className="mx-auto max-w-screen-lg px-4 md:px-8">
                {/* text - start */}
                <div className="mb-8 md:mb-12">
                    <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Our Team by
                        the numbers</h2>

                    <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">This is a section of
                        some simple filler text, also known as placeholder text. It shares some characteristics of a
                        real written text but is random or otherwise generated.</p>
                </div>
                {/* text - end */}

                <div className="grid grid-cols-2 gap-6 rounded-lg bg-main p-6 md:grid-cols-4 md:gap-8 md:p-8">
                    {/* stat - start */}
                    <div className="flex flex-col items-center">
                        <div className="text-xl font-bold text-white sm:text-2xl md:text-3xl">200</div>
                        <div className="text-sm text-gray-100 sm:text-base">People</div>
                    </div>
                    {/* stat - end */}

                    {/* stat - start */}
                    <div className="flex flex-col items-center">
                        <div className="text-xl font-bold text-white sm:text-2xl md:text-3xl">500+</div>
                        <div className="text-sm text-gray-100 sm:text-base">People</div>
                    </div>

                    {/* stat - start */}
                    <div className="flex flex-col items-center">
                        <div className="text-xl font-bold text-white sm:text-2xl md:text-3xl">1000+</div>
                        <div className="text-sm text-gray-100 sm:text-base">Customers</div>
                    </div>
                    {/* stat - end */}

                    {/* stat - start */}
                    <div className="flex flex-col items-center">
                        <div className="text-xl font-bold text-white sm:text-2xl md:text-3xl">A couple</div>
                        <div className="text-sm text-gray-100 sm:text-base">Coffee breaks</div>
                    </div>
                    {/* stat - end */}
                </div>
            </div>
        </div>
    </>)
}