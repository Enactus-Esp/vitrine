import {Cover} from "../components/aquatus/Cover.jsx";
import {NewsLetter} from "../components/share/NewsLetter.jsx";
import {Content} from "../components/aquatus/Content.jsx";


export const Aquatus = () => {

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