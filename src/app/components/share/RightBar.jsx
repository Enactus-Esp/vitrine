import logo from "../../../assets/logo.svg";
import insta from "../../../assets/logo.svg";
import twitter from "../../../assets/logo.svg";
import linkedin from "../../../assets/logo.svg";
import facebook from "../../../assets/logo.svg";


export const RightBar = () => {


    let social = [
        insta,
        twitter,
        linkedin,
        facebook
    ];

    return (<>
        <div className={"hidden lg:block sticky top-0 space-y-10"}>

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
    </>)
}