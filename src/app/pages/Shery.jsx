import {Cover} from "../components/shery/Cover.jsx";
import {RightBar} from "../components/share/RightBar.jsx";
import {NewsLetter} from "../components/share/NewsLetter.jsx";
import {Content} from "../components/shery/Content.jsx";


export const Shery = () => {

    return (<>

        {/**/}
        <Cover />

        {/**/}
        <div className={"flex justify-around"}>

            {/**/}
            <Content />
            {/**/}
            <RightBar />
        </div>

        {/**/}
        <NewsLetter />

    </>)
}