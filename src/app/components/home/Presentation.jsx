import {Heading} from "../share/Heading.jsx";


export const Presentation = () => {

    return (<>

        <Heading position={"center"} subtitle={"subtitle"} title={"Presentation"} text={" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, dicta esse explicabo facere incidunt nisi nulla placeat quam quisquam suscipit temporibus vitae! Corporis cupiditate, eveniet exercitationem harum incidunt libero molestiae!"} />
        <div className="bg-white py-6 sm:py-8 lg:py-12">
            <div className="mx-auto max-w-screen-lg px-4 md:px-8">
                <div className="grid gap-8 sm:grid-cols-2">

                    {/* image - start */}
                    <div className=" overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
                        <img
                            src="https://images.unsplash.com/photo-1626790680787-de5e9a07bcf2?auto=format&q=75&fit=crop&w=600"
                            loading="lazy" alt="Photo by Theo Crazzolara"
                            className="h-full w-full object-cover object-center"/>
                    </div>
                    {/* image - end */}

                    {/* content - start */}
                    <div className="flex flex-col items-start sm:items-start md:py-24 lg:py-32">
                        <p className="mb-4 text-sm font-semibold uppercase text-indigo-500 md:text-base">Presentation</p>
                        <h1 className="mb-2 text-center text-2xl font-bold text-gray-800 sm:text-left md:text-3xl">Enactus ESP</h1>

                        <p className="mb-4 text-center text-gray-500 sm:text-left md:mb-8 md:text-lg"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, dicta esse explicabo facere incidunt nisi nulla placeat quam quisquam suscipit temporibus vitae! Corporis cupiditate, eveniet exercitationem harum incidunt libero molestiae! </p>

                    </div>
                    {/* content - end */}
                </div>
            </div>
        </div>
    </>)
}