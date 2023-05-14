

export const Cover = () => {

    return (<>

        <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                <section
                    className="max-h-96 relative flex flex-1 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-gray-100 py-16 shadow-lg md:py-20 xl:py-48">
                    {/*image - start */}

                    {/*image - end */}

                    {/*overlay - start */}
                    <div className="absolute inset-0 bg-main mix-blend-multiply"></div>
                    {/*overlay - end */}

                    {/*text start */}
                    <div className="relative flex flex-col items-center p-4 sm:max-w-xl">
                        <p className="mb-4 text-center text-lg  sm:text-xl md:mb-8">Very proud to
                            introduce</p>
                        <h1 className="mb-8 text-center text-4xl font-bold text-white sm:text-5xl md:mb-12 md:text-6xl">Revolutionary
                            way to build the web</h1>


                    </div>
                    {/*text end */}
                </section>
            </div>
        </div>
    </>)
}