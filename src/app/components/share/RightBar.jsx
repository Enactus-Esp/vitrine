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
        <div className={"hidden lg:block sticky top-10 space-y-10  pb-20 pr-4 "}>

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