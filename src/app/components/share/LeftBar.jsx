import {SearchBar} from "./SearchBar.jsx";


export const LeftBar = () => {

    let topicsTheme = [
        "Informatics",
        "Technology",
        "Money",
        "Art",
        "Productivity",
        "Psychology",
        "Design",
        "Mindfulness"
    ];

    return (<>
        <div className={"md:block hidden  sticky top-0"}>
            <div className={"border p-4 w-72 rounded-xl"}>
                <SearchBar />
                <h3 className={"font-bold mt-4"}>RECOMMENDED TOPICS</h3>
                <p className={"mt-2 flex flex-wrap"}>
                    {topicsTheme.map((t, index) => (
                        <span className={"font-bold border rounded py-1 px-4 text-main mr-2 my-1 text-sm"} key={index}>{t}</span>
                    ))}
                </p>

            </div>

            <div className={"border p-4 w-72 rounded-xl mt-10 space-y-4"}>
                <h3 className={"font-semibold uppercase text-sm "}>Lastest news</h3>

                <div className={"space-y-2"}>
                    <h2 className={"font-bold"}>Our first office</h2>
                    <p className={"text-light"}>Over the past year, Volosoft has undergone many changes! After months of preparation.</p>
                    <a href="#" className={"underline text-main font-semibold"}>Read in 9 minutes</a>
                </div>

                <div className={"space-y-2"}>
                    <h2 className={"font-bold"}>Our first office</h2>
                    <p className={"text-light"}>Over the past year, Volosoft has undergone many changes! After months of preparation.</p>
                    <a href="#" className={"underline text-main font-semibold"}>Read in 9 minutes</a>
                </div>

                <div className={"space-y-2"}>
                    <h2 className={"font-bold"}>Our first office</h2>
                    <p className={"text-light"}>Over the past year, Volosoft has undergone many changes! After months of preparation.</p>
                    <a href="#" className={"underline text-main font-semibold"}>Read in 9 minutes</a>
                </div>
            </div>

        </div>
    </>)
}