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
import {LeftBar} from "../components/share/LeftBar.jsx";
import {RightBar} from "../components/share/RightBar.jsx";
import {ActivitiesList} from "../components/activity/ActivitiesList.jsx";

function Activity () {


    return (<>

        <Cover />

        <div className={"flex justify-between px-10 relative w-full"}>

            <LeftBar />

            <ActivitiesList />

            <RightBar />

        </div>

        <NewsLetter />

    </>)
}

export default Activity;