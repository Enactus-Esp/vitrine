import {Cover} from "../components/home/Cover.jsx";
import {Presentation} from "../components/home/Presentation.jsx";
import {Missions} from "../components/home/Missions.jsx";
import {Projects} from "../components/home/Projects.jsx";
import {Activities} from "../components/home/Activities.jsx";
import {Partners} from "../components/home/Partners.jsx";
import {NewsLetter} from "../components/share/NewsLetter.jsx";


export const Home = () => {

    return (<>
        {/**/}
        <Cover />

        {/**/}
        <Presentation />

        {/**/}
        <Missions />

        {/**/}
        <Projects />

        {/**/}
        <Partners />

        {/**/}
        <Activities />

        {/**/}
        <NewsLetter />
    </>)
}