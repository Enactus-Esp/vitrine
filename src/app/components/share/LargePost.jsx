import {Heading} from "./Heading.jsx";


export const LargePost = ({title, tag, date, cover, content, description}) => {

    return (<>
        <div className={"flex justify-between"}>
            <Heading subtitle={date} title={title} text={description}  />
            <button className={"relative -left-4"}>
                <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                     width="20px" height="20px" viewBox="0 0 483 483">
                    <g>
                        <path d="M395.72,0c-48.204,0-87.281,39.078-87.281,87.281c0,2.036,0.164,4.03,0.309,6.029l-161.233,75.674
                            c-15.668-14.971-36.852-24.215-60.231-24.215c-48.204,0.001-87.282,39.079-87.282,87.282c0,48.204,39.078,87.281,87.281,87.281
                            c15.206,0,29.501-3.907,41.948-10.741l69.789,58.806c-3.056,8.896-4.789,18.396-4.789,28.322c0,48.204,39.078,87.281,87.281,87.281
                            c48.205,0,87.281-39.078,87.281-87.281s-39.077-87.281-87.281-87.281c-15.205,0-29.5,3.908-41.949,10.74l-69.788-58.805
                            c3.057-8.891,4.789-18.396,4.789-28.322c0-2.035-0.164-4.024-0.308-6.029l161.232-75.674c15.668,14.971,36.852,24.215,60.23,24.215
                            c48.203,0,87.281-39.078,87.281-87.281C482.999,39.079,443.923,0,395.72,0z"/>
                    </g>
                </svg>
            </button>
        </div>

        <div className={" px-4 md:px-8"}>
            {tag.map((t, index) => (
                <span className={"font-bold border rounded py-1 px-4 text-main mr-4"} key={index}>{t}</span>
            ))}
        </div>

        {cover && <div className={"md:w-8/12 bg-main h-64 mx-auto my-6 rounded-xl"}>
            <img src={cover} alt="post img"/>
        </div>}

        <p className="text-gray-500 md:text-lg my-10  px-4 md:px-8">{content}</p>

        <p className={"mb-4 text-end"}>
            <a href="/sujet" className={"underline font-semibold text-main"}>Read more</a>
        </p>
        <hr/>
    </>)
}