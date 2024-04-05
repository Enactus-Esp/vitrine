import {Cover} from "../components/terrasen/Cover.jsx";
import {NewsLetter} from "../components/share/NewsLetter.jsx";
import {Content} from "../components/terrasen/Content.jsx";


export const Terrasen = () => {

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