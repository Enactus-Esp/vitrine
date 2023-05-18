import {Cover} from "../components/activity/Cover.jsx";

import {NewsLetter} from "../components/share/NewsLetter.jsx";
import {LeftBar} from "../components/share/LeftBar.jsx";
import {RightBar} from "../components/share/RightBar.jsx";
import {ActivitiesList} from "../components/activity/ActivitiesList.jsx";

function Activity () {


    return (<>

        {/**/}
        <Cover />

        {/**/}
        <div className={"flex justify-around w-full"}>

            {/**/}
            <LeftBar />

            {/**/}
            <ActivitiesList />

            {/**/}
            <RightBar />

        </div>

        {/**/}
        <NewsLetter />

    </>)
}

export default Activity;