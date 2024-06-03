import {Cover} from "../components/men-nen/Cover.jsx";
import {NewsLetter} from "../components/share/NewsLetter.jsx";
import {Content} from "../components/men-nen/Content.jsx";


export const MenNen = () => {

    return (<>

        {/**/}
        <Cover />

        {/**/}
        <div className={"flex justify-center"}>

            {/**/}
            <Content />
            {/**/}
        </div>


        {/**/}
        <NewsLetter />

    </>)
}