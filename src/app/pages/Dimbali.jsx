import {Cover} from "../components/dimbali/Cover.jsx";
import {NewsLetter} from "../components/share/NewsLetter.jsx";
import {Content} from "../components/dimbali/Content.jsx";

export const Dimbali = () => {

    return (<>

        {/**/}
        <Cover />

        {/**/}
        <div className={"flex justify-around"}>

            {/**/}
            <Content />
        </div>

        {/**/}
        <NewsLetter />

    </>)
}