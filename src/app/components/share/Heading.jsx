

export const Heading = ({subtitle, title, text}) => {

    return (
        <div className="bg-white py-6 sm:py-8 lg:py-12 max-w-md">
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                <p className="mb-2 font-semibold text-indigo-500 md:mb-3 lg:text-lg capitalise">{subtitle}</p>
                <h2 className="mb-4 text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">{title}</h2>
                <p className=" text-gray-500 md:text-lg">{text}</p>
            </div>
        </div>
    )
}