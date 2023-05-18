import {Cover} from "../components/PostOnActivity/Cover.jsx"
import {Content} from "../components/PostOnActivity/Content.jsx";
import {LeftBar} from "../components/share/LeftBar.jsx";
import {RightBar} from "../components/share/RightBar.jsx";


export const PostOnActivity = () => {

    return (<>
        {/**/}
        <Cover />

        {/**/}
        <div className={"flex justify-around"}>

            {/**/}
            <LeftBar />
            {/**/}
            <Content />
            {/**/}
            <RightBar />
            {/**/}
        </div>
    </>)
}