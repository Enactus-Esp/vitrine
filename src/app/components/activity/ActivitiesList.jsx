import {Heading} from "../share/Heading.jsx";
import {LargePost} from "../share/LargePost.jsx";

export const ActivitiesList = () => {

    return(<>
        <div className={"pb-10 max-w-screen-md"}>

            <Heading subtitle={"new post"}
                     title={"Lorem ipsum dolor dfsfsdfsf sdfsfds"}
                     text={" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi asperiores culpa dolor eligendi."} position={"center"}
            />

            <LargePost title={"This is Post 1"} date={"Mai 10, 2023"} tag={["Informatique"]} cover={"img"}
                       description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
                       content={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
            />

            <LargePost title={"This is Post 1"} date={"Mai 10, 2023"} tag={["Informatique"]} cover={null}
                       description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
                       content={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
            />

            <LargePost title={"This is Post 1"} date={"Mai 10, 2023"} tag={["Informatique"]} cover={"img"}
                       description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
                       content={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
            />
        </div>
    </>)
}