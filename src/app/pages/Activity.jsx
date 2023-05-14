import {Cover} from "../components/activity/Cover.jsx";
import {Header} from "../components/share/Header.jsx";
import logo from "../../assets/logo.svg"
import {Heading} from "../components/share/Heading.jsx";
import {LargePost} from "../components/share/LargePost.jsx";

import insta from "../../assets/logo.svg";
import facebook from "../../assets/logo.svg";
import linkedin from "../../assets/logo.svg";
import twitter from "../../assets/logo.svg";
import {Footer} from "../components/share/Footer.jsx";
import {NewsLetter} from "../components/share/NewsLetter.jsx";
import {SearchBar} from "../components/share/SearchBar.jsx";

function Activity () {

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
    let social = [
        insta,
        twitter,
        linkedin,
        facebook
    ];
    return (<>

        <Header />

        <Cover />

        <div className={"flex justify-between px-10"}>

            <div className={""}>
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

            <div className={"pb-10"}>

                <Heading subtitle={"new post"}
                         title={"Lorem ipsum dolor dfsfsdfsf sdfsfds"}
                         text={" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi asperiores culpa dolor eligendi."} position={"center"}
                />

                <LargePost title={"This is Post 1"} date={"Mai 10, 2023"} tag={["Informatique"]} cover={"img"}
                           description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
                           content={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
                />

                <LargePost title={"This is Post 1"} date={"Mai 10, 2023"} tag={["Informatique"]} cover={null}
                           description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
                           content={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
                />

                <LargePost title={"This is Post 1"} date={"Mai 10, 2023"} tag={["Informatique"]} cover={"img"}
                           description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
                           content={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
                />
            </div>

            <div className={" sticky top-0 space-y-10"}>

                <div className={"w-72 border p-4 rounded-xl space-y-4"}>
                    <div className={"flex space-x-4"}>
                        <div className={"w-10 h-10 rounded-full"}>
                            <img src={logo} alt=""/>
                        </div>

                        <div className={"text-sm"}>
                            <p className={"font-bold"}>ENACTUS ESP</p>
                            <p>34k followers</p>
                        </div>
                    </div>

                    <p className={"text-sm"}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi asperiores culpa dolor eligendi.
                    </p>

                    <div className={"text-sm space-y-1"}>
                        <h2 className={"font-bold"}>LOCATION</h2>
                        <p>california</p>
                        <h2 className={"font-bold"}>JOINED</h2>
                        <p>Mai 12, 2023</p>
                    </div>

                    <div className={"w-fit mx-auto"}>
                        <button className={"py-2 font-bold text-white px-6 bg-main rounded-xl h-fit self-center"}>FOLLOW</button>
                    </div>

                </div>

                <div className={"w-72 border p-4 rounded-xl space-y-4"}>
                    <h2 className={"font-bold uppercase"}>Who follow too</h2>

                    <div className={"flex space-x-4 text-sm justify-around items-center my-4"}>
                        <div className={"w-4 h-4 rounded-full"}>
                            <img src={logo} alt=""/>
                        </div>

                        <div className={"text-sm"}>
                            <p className={"font-bold"}>Shery</p>
                            <p>description of this person</p>
                        </div>

                        <button className={"px-2 py-2 bg-gray-100 rounded font-bold"}>Follow</button>
                    </div>

                    <div className={"flex space-x-4 text-sm justify-around items-center my-4"}>
                        <div className={"w-4 h-4 rounded-full"}>
                            <img src={logo} alt=""/>
                        </div>

                        <div className={"text-sm"}>
                            <p className={"font-bold"}>Men nen</p>
                            <p>description of this person</p>
                        </div>

                        <button className={"px-2 py-2 bg-gray-100 rounded font-bold"}>Follow</button>
                    </div>


                    <div className={"flex space-x-4 text-sm justify-around items-center my-4"}>
                        <div className={"w-4 h-4 rounded-full"}>
                            <img src={logo} alt=""/>
                        </div>

                        <div className={"text-sm"}>
                            <p className={"font-bold"}>Dimbali</p>
                            <p>description of this person</p>
                        </div>

                        <button className={"px-2 py-2 bg-gray-100 rounded font-bold"}>Follow</button>
                    </div>

                </div>

                <div className={"w-72 border p-4 rounded-xl space-y-4"}>
                    <h2 className={"font-bold uppercase"}>We are on</h2>
                    <div className={"flex justify-around flex-wrap"}>
                        {social.map((s,index) => (
                            <img key={index} src={s} alt="social network" className={"w-16 h-auto mb-4"}/>
                        ))}
                    </div>
                </div>

            </div>

        </div>

        <NewsLetter />


        <Footer />

    </>)
}

export default Activity;