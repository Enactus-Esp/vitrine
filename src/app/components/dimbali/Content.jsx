


export const Content = () => {


    return (<>

        <div className="bg-white py-6 sm:py-8 lg:py-12">
            <div className="mx-auto max-w-screen-md px-4 md:px-8">
                <h1 className="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6">Présentation</h1>

                <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae nisi rem perspiciatis? Culpa repellendus pariatur ipsam nihil, natus corporis architecto labore sunt quas accusantium quidem, error assumenda vero, eum quaerat.
                </p>

                <h2 className="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">About us</h2>

                <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">This is a section of some simple filler text, also
                    known as placeholder text. It shares some characteristics of a real written text but is random or
                    otherwise generated. It may be used to display a sample of fonts or generate text for testing.
                    Filler text is dummy text which has no meaning however looks very similar to real text.</p>

                <ul className="mb-6 list-inside list-disc text-gray-500 sm:text-lg md:mb-8">
                    <li>This is a section of some simple filler text</li>
                    <li>Also known as placeholder text</li>
                    <li>It shares some characteristics of a real written text</li>
                </ul>

                <blockquote className="mb-6 border-l-4 pl-4 italic text-gray-500 sm:text-lg md:mb-8 md:pl-6">“This is a
                    section of some simple filler text, also known as placeholder text. It shares some characteristics
                    of a real written text but is random or otherwise generated.”
                </blockquote>

                <div className="relative mb-6 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:mb-8">
                    <img
                        src="dimbaliSmile.png"
                        loading="lazy" alt="Photo by Minh Pham" className="h-full w-full object-cover object-center"/>
                </div>

                <h2 className="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">Features</h2>

                <p className="text-gray-500 sm:text-lg">This is a section of some simple filler text, also known as
                    placeholder text. It shares some characteristics of a real written text but is random or otherwise
                    generated. It may be used to display a sample of fonts or generate text for testing. Filler text is
                    dummy text which has no meaning however looks very similar to real text.</p>
            </div>
        </div>
    </>)
}