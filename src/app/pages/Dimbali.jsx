import {Cover} from "../components/dimbali/Cover.jsx";
import {RightBar} from "../components/share/RightBar.jsx";
import {NewsLetter} from "../components/share/NewsLetter.jsx";
import {Content} from "../components/PostOnActivity/Content.jsx";

export const Dimbali = () => {

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