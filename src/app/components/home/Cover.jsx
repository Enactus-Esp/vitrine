


export const Cover = () => {

    // let proprieties = {
    //     infinite: true,
    //     duration: 0,
    //     transitionDuration: 10000,
    //     arrows: false
    // };
    return (<>
        <div className={`flex justify-center item-center h-[560px] w-[100%] max-[560px]:h-[250px]  overflow-hidden rounded-[255px] `}>
            <img src="./cover.png" alt="test" className="h-full w-full object-cover object-center"/>
        </div>
    </>)
}